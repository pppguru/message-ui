import React, { Component } from 'react'
import MessagesList from 'containers/dashboard/Messages/MessagesList'
import MessagesDetail from 'containers/dashboard/Messages/MessagesDetail'
import MessagesSidebar from 'containers/dashboard/Messages/MessagesSidebar'
import Search from 'components/dashboard/common/Search'

export default class Messages extends Component {
	render() {
		const searchButton = <a href="#" className="btn btn--beta">Open (2/14)</a>

		return (
			<section className="section section--messages" key={'section--messages'}>
				{/* <div className="section__search">
					<Search 
						placeholder="Search by message, person, status, tag, or assignee" 
						button={searchButton} />
				</div> */ }

				<div className="section__content">
					<MessagesList />
					<MessagesDetail />
					<MessagesSidebar />
				</div>
			</section>
		)
	}
}