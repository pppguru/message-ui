import config from './../../config'
import Firebase from 'firebase'
import Promise from 'bluebird'

export default class FirebaseListener {

  constructor(token) {
    this.callbackCounter = 0;
    this.subscriptions = {}
    this.token = token
    this.isConnected = false
    this.firebase = new Firebase(config.firebaseUrl)
  }

  static event = {
    VALUE: 'value',
    CHILD_ADDED: 'child_added',
    CHILD_REMOVED: 'child_removed',
    CHILD_MOVED: 'child_moved',
    CHILD_CHANGED: 'child_changed'
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.firebase.authWithCustomToken(this.token, (err, auth) => {
        if (err) {
          return reject(err);
        }

        this.isConnected = true
        this.auth = auth
        resolve()
      })
    })
  }

  watchChild(path, onChildAdded = () => {}, onChildChanged = () => {}, onCompleted = () => {}, onChildRemoved = () => {}) {
    this.firebase.child(path)
      .on(FirebaseListener.event.CHILD_ADDED, (snapshot) => {
        const key = snapshot.key()
        const value = snapshot.val()

        onChildAdded({ key, value })
      })

    this.firebase.child(path)
      .on(FirebaseListener.event.CHILD_CHANGED, (snapshot) => {
        const key = snapshot.key()
        const value = snapshot.val()

        onChildChanged({ key, value })
      })

    this.firebase.child(path)
      .on(FirebaseListener.event.CHILD_REMOVED, (snapshot) => {
        const key = snapshot.key()
        const value = snapshot.val()

        onChildRemoved({ key, value })
      })
  }

  subscribeNew(path, limit, orderBy, onChildAdded, onChildChanged = () => {}, onCompleted = () => {}) {
    const callbackOnChildAdded = snapshot => {
      const key = snapshot.key()
      const value = snapshot.val()

      onChildAdded({ key, value })
    }

    this.firebase.child(path)
      .orderByChild(orderBy)
      .limitToLast(limit)
      .on(FirebaseListener.event.CHILD_ADDED, callbackOnChildAdded)

    this.firebase.child(path)
      .orderByChild(orderBy)
      .limitToLast(limit)
      .on(FirebaseListener.event.CHILD_CHANGED, (snapshot) => {
        const key = snapshot.key()
        const value = snapshot.val()

        onChildChanged({ key, value })
      })
  
    this.firebase.child(path)
      .on('value', onCompleted)        

    return {
      path,
      callback: callbackOnChildAdded
    }
  }

  subscribe(path, eventType, limit, orderBy, callback, completedCallback = () => {}) {
    // Register callback
    const subscriptionCallback = (snapshot) => {
      const key = snapshot.key()
      const value = snapshot.val()

      callback({ key, value })
    }

    // Subscribe
    // console.log(`Connecting to Firebase ${path}`)
    this.firebase.child(path)
      .orderByChild(orderBy)
      .limitToLast(limit)
      .on(eventType, subscriptionCallback)

    this.firebase.child(path)
      .once('value', completedCallback)

    // Return callback index
    return {
      path,
      eventType,
      callback: subscriptionCallback
    }
  }

  getEntry(path, callback) {
    // Register callback
    const subscriptionCallback = (snapshot) => {
      const key = snapshot.key()
      const value = snapshot.val()

      callback({ key, value })
    }

    // Get entry
    // console.log(`Getting entry from Firebase ${path}`)
    this.firebase.child(path)
      .on('value', subscriptionCallback)

    return {
      path,
      callback: subscriptionCallback
    }
  }

  getData(path, offset, pageLimit, callback) {
    const loadCallback = (snapshot) => {
      const key = snapshot.key()
      const value = snapshot.val()

      callback({ key, value })
    }

    this.ensureConnected()
      .then(() => {
        this.firebase.child(path)
          .orderByChild('lastMessage/createdAt')
          .startAt(0)
          .limitToLast(pageLimit)
          .on('value', loadCallback)
      })
      .catch((err) => {
        console.log('Cannot connect to firebase', err.message)
      })
  }

  setRead(path) {
    this.firebase.child(path)
      .set(true)
  }

  subscribeActivity(path, limit, orderBy, onChildAdded, onChildChanged = () => {}, onCompleted = () => {}) {
      this.firebase.child(path)
        .set({web: {
            online: true,
            source: "web app"
        }})

      this.firebase.child(path)
        .on('value', onCompleted)

      this.firebase.child(path + '/web').onDisconnect().remove()
      this.firebase.child(path).onDisconnect().update({
        lastSeenDate: Firebase.ServerValue.TIMESTAMP
      })

    return {
      path
    }
  }

  removeUser(path) {
    this.firebase.child(path + '/web').remove()
    this.firebase.child(path).set({
      lastSeenDate: Firebase.ServerValue.TIMESTAMP
    })
    return {
      path
    }
  }

  getUnreadMessagesCount(path, lastSeenDate, callback) {
    this.firebase.child(path)
      .orderByChild('createdAt')
      .startAt(parseInt(lastSeenDate / 1000))
      .once('value', snapshot => {
        const count = snapshot.numChildren()

        callback({ count })
      })
  }

  unsubscribe(subscription) {
    this.firebase.child(subscription.path).off(FirebaseListener.event.CHILD_ADDED, subscription.callback)
  }

  clearActivity(path) {
    this.firebase.child(path)
      .remove()
  }

  setActivity(path, online) {
    if (online) {
      this.firebase.child(path)
        .set({ online: true })
    } else {
      this.firebase.child(path)
        .set({ lastSeenDate: Firebase.ServerValue.TIMESTAMP, source: 'web app' })
    }

    this.firebase.child(path).onDisconnect().set({ lastSeenDate: Firebase.ServerValue.TIMESTAMP, source: 'web app' })
  }
}
