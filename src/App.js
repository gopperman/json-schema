import React, { Component } from 'react'
import _ from 'lodash'
import './App.css'
import schema from './data/schema.json'
import Sidebar from './components/Sidebar.js'
import FieldGroupDetail from './components/FieldGroupDetail.js'

class App extends Component {
  constructor() {
    super()

    // Create an object for individual properties
    const generalInfo = {
        name: 'General Info',
        properties: _.filter(schema, o => {
          // Returns all of the objects without children properties
          return (typeof o.properties === 'undefined' || o.properties.length === 0)
        })
    }

    // Concatenate general fields with those that have parents
    const fieldGroups = [
      generalInfo, 
      ..._.filter(schema, o => {
        return (o.properties && o.properties.length > 0)
      })
    ]

    // Initialize state
    this.state = { 
      fieldGroups: fieldGroups,
      activeTab: null,
    }
  }

  render() {
    return (
      <div className="container">
        <Sidebar fieldGroups={this.state.fieldGroups} />
        <FieldGroupDetail />
      </div>
    )
  }
}

export default App
