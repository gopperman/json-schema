import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar flex-one">
        <h2 className="sidebar__header">Field Groups</h2>
        <ul className="sidebar__group-list">
          <li className="sidebar__group">
            <h3 className="sidebar__subhed sidebar__subhed--active">Field Group Name</h3>
            <ul className="sidebar__accordion">
              <li>
                <a href="#" className="sidebar__link sidebar__link--active">Foo</a>
              </li>
              <li>
                <a href="#" className="sidebar__link sidebar__link">Bar</a>
              </li>
            </ul>
          </li>
          <li className="sidebar__group">
            <h3 className="sidebar__subhed sidebar__subhed">Field Group Name 2</h3>
            <ul className="sidebar__accordion">
              <li>
                <a href="#" className="sidebar__link sidebar__link--active">Foo</a>
              </li>
              <li>
                <a href="#" className="sidebar__link sidebar__link">Bar</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar