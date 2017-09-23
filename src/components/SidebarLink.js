import React, {Component} from 'react'
import {connect} from 'react-redux'
import { showField } from '../actions/actionCreators.js'

class SidebarLink extends Component {
	activateLink = (event) => {
		this.props.activateLink(+event.target.getAttribute('data-id'))
	}

	render() {
		const {activeField, id, name} = this.props
		const active = activeField === id
		const linkClass = `sidebar__link ${active ? 'sidebar__link--active' : ''}`

		return (
				<a href={`#field-item__${id}`}
					className={linkClass}
					data-id={id}
					onClick={this.activateLink}
				>
					{name}
				</a>
		)
	}
}

const mapStateToProps = (state) => ({
  activeField: state.activeField
})

const mapDispatchToProps = (dispatch) => {
	return({
		activateLink: (id) => {
			dispatch(showField(id))
		}
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarLink)