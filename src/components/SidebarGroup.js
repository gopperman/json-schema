import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import SidebarLink from './SidebarLink.js'

class Sidebar extends Component {
  constructor() {
    super()

    this.state = {
      active: _.get(this, 'props.active', false),
    }

    this.toggleAccordion = this.toggleAccordion.bind(this)
  }

  /**
   * Swaps active state classes to show / hide child links
   * @param  {object} event
   * @return {void}
   */
  toggleAccordion(event) {
    const {active} = this.state
    const activeClass = 'sidebar__subhed--active'
    if (active) {
      event.target.classList.remove(activeClass)
    } else {
      event.target.classList.add(activeClass)
    }
    // Flip the state. #TODO Redux removes the need for this
    this.setState({
      active: !active
    })
  }



  render() {

    const {group, active} = this.props
    const subhedClass = `sidebar__subhed ${active ? 'sidebar__subhed--active' : ''}`

    const fields = group.properties.map(o => {
      return (
        <li className='sidebar__item' onClick={this.linkClick} key={_.uniqueId('sidebarItem')}>
          <SidebarLink 
          id={o.id}
          name={o.name}  
          />
        </li>
      )

    })
    return (
      <li className="sidebar__group">
        <h3 className={subhedClass} onClick={this.toggleAccordion}>{group.name}</h3>
        <ul className="sidebar__accordion">
          {fields}
        </ul>
      </li>
    )
  }
}

Sidebar.propTypes = {
  group: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
}

export default Sidebar