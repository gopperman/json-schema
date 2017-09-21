import React from 'react'
import PropTypes from 'prop-types'

function SidebarLink(props) {
	const {active, id, name} = props
	const linkClass = `sidebar__link ${active ? 'sidebar__link--active' : ''}`

	return (
			<a href={`#field-item__${id}`} className={linkClass}>{name}</a>
	)
}

SidebarLink.propTypes = {
	active: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
}
export default SidebarLink