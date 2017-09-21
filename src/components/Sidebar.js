import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import SidebarGroup from './SidebarGroup.js'

class Sidebar extends Component {
  constructor() {
    super()

    this.state = {
      activeTab: null,
    }

  }

  render() {
    const groups = this.props.fieldGroups.map(o => {
      const isActive = typeof o.id !== 'undefined' ? (o.id === this.state.activeTab) : false

      return (
        <SidebarGroup 
          key={_.uniqueId('sidebarGroup')} 
          group={o} 
          active={isActive} 
        />
      )
    })

    return (
      <div className="sidebar flex-one">
        <h2 className="sidebar__header">Field Groups</h2>
        <ul className="sidebar__group-list">
          {groups}
        </ul>
      </div>
    )
  }
}

Sidebar.propTypes = {
  fieldGroups: PropTypes.array.isRequired,
}

export default Sidebar