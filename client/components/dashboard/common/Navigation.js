import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navigation extends Component {
  render() {
    const {
      isSuperAdmin,
      role,
      unassignedCount,
      unreadConversationCount,
      unreadChannelMessagesCount
    } = this.props

    const isAdmin = role && role.indexOf('admin') >= 0
    const isOrgManager = role && role.indexOf('orgManager') >= 0

    return (
      <nav role="navigation" className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="dashboard/activity" className="navigation__link" activeClassName="active">
              <div>
                <i className="mu mu-activity"></i>
                <p>Activity</p>
                {unassignedCount ? <div className="navigation__notifications"><span>{unassignedCount}</span></div> : null}
              </div>
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="dashboard/messages" className="navigation__link" activeClassName="active">
              <div>
                <i className="mu mu-messages"></i>
                <p>Messages</p>
                {unreadConversationCount ? <div className="navigation__notifications"><span>{unreadConversationCount}</span></div> : null}
              </div>
            </Link>
          </li>
          {!isAdmin &&
            <li className="navigation__item">
              <Link to="dashboard/products" className="navigation__link" activeClassName="active">
                <div>
                  <i className="mu mu-cart"></i>
                  <p>Products</p>
                </div>
              </Link>
  					</li>
          }
          <li className="navigation__item">
            <Link to="dashboard/teamchat" className="navigation__link" activeClassName="active">
              <div>
                <i className="mu mu-teamchat"></i>
                <p>Team Chat</p>
                {unreadChannelMessagesCount ? <div className="navigation__notifications"><span>{unreadChannelMessagesCount}</span></div> : null}
              </div>
            </Link>
          </li>
          {isSuperAdmin &&
            <li className="navigation__item">
              <Link to="dashboard/organizations" className="navigation__link" activeClassName="active">
                <div>
                  <i className="mu mu-organizations"></i>
                  <p>Organizations</p>
                </div>
              </Link>                
            </li>
          }
          {isOrgManager && 
            <li className="navigation__item">
              <Link to="dashboard/settings" className="navigation__link" activeClassName="active">
                <div>
                  <i className="mu mu-settings"></i>
                  <p>Settings</p>
                </div>
              </Link>
            </li>
          }
        </ul>
      </nav>
    )
  }
}
