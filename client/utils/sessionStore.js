const AUTH = 'messageus/AUTH'

export default {

  saveAuth(auth) {
    sessionStorage.setItem(AUTH, JSON.stringify(auth))
  },

  loadAuth() {
    const authData = sessionStorage.getItem(AUTH)
    if (!authData) {
      return null;
    }

    return JSON.parse(authData)
  },

  clearSessionCreds() {
    sessionStorage.removeItem(AUTH)
  }
}
