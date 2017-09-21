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
        id: 0,
        properties: _.filter(schema, o => {
          // Returns all of the objects without children properties
          return (typeof o.properties === 'undefined' || o.properties.length === 0)
        })
    }

    // Create an array of fields with parents
    const childFields = _.filter(schema, o => {
      return (o.properties && o.properties.length > 0)
    })

    // Concatenate general fields with those that have parents
    const fieldGroups = generalInfo.properties.length ? [
      generalInfo, 
      ...childFields
    ] : childFields

    // Initialize state
    this.state = { 
      fieldGroups: fieldGroups,
    }
  }

  render() {
    return (
      <div className="container">
        <Sidebar fieldGroups={this.state.fieldGroups} />
        <FieldGroupDetail fieldGroups={this.state.fieldGroups} />
      </div>
    )
  }
}

export default App
