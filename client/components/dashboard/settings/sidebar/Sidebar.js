import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Sidebar extends Component {
	render() {
		return (
			<div className="section__sidebar">
				<div className="sidebar sidebar--settings">
					<ul className="sidebar__list">
						<li className="sidebar__item">
							<Link to="dashboard/settings/general" className="sidebar__link" activeClassName="sidebar__link--active">
								General
							</Link>
						</li>

						<li className="sidebar__item">
							<Link to="dashboard/settings/organization" className="sidebar__link" activeClassName="sidebar__link--active">
								Organization
							</Link>
						</li>

						<li className="sidebar__item">
							<Link to="dashboard/settings/team" className="sidebar__link" activeClassName="sidebar__link--active">
								Team
							</Link>
						</li>

						<li className="sidebar__item">
							<Link to="dashboard/settings/messaging" className="sidebar__link" activeClassName="sidebar__link--active">
								Messaging
							</Link>
						</li>

						<li className="sidebar__item">
							<Link to="dashboard/settings/livechat" className="sidebar__link" activeClassName="sidebar__link--active">
								Live Chat
							</Link>
						</li>

						<li className="sidebar__item">
							<Link to="dashboard/settings/integrations" className="sidebar__link" activeClassName="sidebar__link--active">
								Integrations
							</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}