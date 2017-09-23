import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import SidebarGroup from './SidebarGroup.js'
import { loadGroup } from '../actions/actionCreators.js'

class Sidebar extends Component {
  render() {

    const groups = this.props.fieldGroups.map(o => {
      const isActive = typeof o.id !== 'undefined' ? (o.id === this.props.activeGroup) : false

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

const mapStateToProps = (state) => ({
  fieldGroups: state.fieldGroups,
  activeGroup: state.activeGroup
});

export default connect(mapStateToProps)(Sidebar);