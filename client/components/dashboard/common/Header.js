import React, { Component } from 'react'
import PersonPhoto from './PersonPhoto'
import { Link } from 'react-router'

export default class Header extends Component {
	constructor(props) {
		super(props)

    this.toggleMenu = this.toggleMenu.bind(this)
	}

  toggleMenu() {
    if (this.props.userMenuVisible) {
      this.props.hideUserMenu()
    } else {
      this.props.showUserMenu()
    }
  }

	render() {
    const {
			organization,
			profile,
      userMenuVisible,
      showForm
		} = this.props

		let profileImage

    if (!profile || !profile.profileImageUrl) {
      profileImage = require('../../../assets/img/placeholder-user.png')
    } else {
      profileImage = profile.profileImageUrl
    }

    let userMenu

    if (userMenuVisible) {
        userMenu = <ul className="user-menu__dropdown">
                    {/* <li className="user-menu__dropdown-item">
                      <a href="javascript:void(0)">
                        <p><i className="mu mu-settings"></i>Preferences</p>
                      </a>
                    </li> */}
                    <li className="user-menu__dropdown-item">
                      <a onClick={() => { showForm('profile') }}>
                        <p><i className="mu mu-account"></i>Profile &amp; Account</p>
                      </a>
                    </li>
                    {/* <li className="user-menu__dropdown-item">
                      <a href="javascript:void(0)">
                        <p><i className="mu mu-invite"></i>Invite people</p>
                      </a>
                    </li> */}
                    {/* <li className="user-menu__dropdown-item">
                      <a href="javascript:void(0)">
                        <p><i className="mu mu-help"></i>Help & Feedback</p>
                      </a>
                    </li> */}
                    {/* <li className="user-menu__dropdown-item">
                      <a href="javascript:void(0)">
                        <p><i className="mu mu-away"></i>Set yourself away</p>
                      </a>
                    </li> */}
                    <li className="user-menu__dropdown-item">
                      <a href="javascript:void(0)" onClick={this.props.handleLogout}>
                        <p><i className="mu mu-logout"></i>Sign out</p>
                      </a>
                    </li>
                  </ul>
    }

		const isAdmin = this.props.profile && this.props.profile.roles[0] === 'admin'
		const adminClass = isAdmin ? 'header--admin' : ''
		const title = isAdmin ? 'Warroom' : (organization && organization.name) ? organization.name : '';

		return (
      <header className={"header " + adminClass }>
        <a className="site-logo" href="javascript:void(0)">
					<img src={require('../../../assets/img/logo.svg')} />
        </a>
        <div className="site-title">
          <p>{title}</p>
        </div>
        <div className={userMenuVisible ? 'user-menu active' : 'user-menu'}>
          <button type="button" className="user-menu__header" onClick={this.toggleMenu}>
            <div>
              <PersonPhoto photoUrl={profileImage} className="user-menu__photo" isUser={true} />
              <div className="user-menu__name">
                <p>{profile && profile.firstName}</p>
              </div>
              <div className="user-menu__arrow">
                <i className="mu mu-arrow"></i>
              </div>
            </div>
          </button>
          {userMenu}
        </div>
      </header>
		)
	}
}
