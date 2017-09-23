import React, { Component } from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import SidebarLink from './SidebarLink.js'
import { loadGroup } from '../actions/actionCreators.js'

class SidebarGroup extends Component {
  constructor() {
    super()

    this.toggleAccordion = this.toggleAccordion.bind(this)
  }

  /**
   * Swaps active state classes to show / hide child links
   * @param  {object} event
   * @return {void}
   */
  toggleAccordion(event) {
    this.props.loadGroupFields(+event.target.getAttribute('data-id'))
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
        <h3 className={subhedClass}
          onClick={this.toggleAccordion}
          data-id={group.id}>
          {group.name}
        </h3>
        <ul className="sidebar__accordion">
          {fields}
        </ul>
      </li>
    )
  }
}

const mapStateToProps = (state) => ({
  activeGroup: state.activeGroup
})

const mapDispatchToProps = (dispatch) => {
  return({
    loadGroupFields: (id) => {
      dispatch(loadGroup(id))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarGroup)