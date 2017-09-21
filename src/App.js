import React, { Component } from 'react'
import './App.css'
import schema from './data/schema.json'
import Sidebar from './components/Sidebar.js'
import FieldGroupDetail from './components/FieldGroupDetail.js'

class App extends Component {
  constructor() {
    super()

    this.state = { 
      schema: schema,
      activeTab: null,
    }
  }
  render() {
    console.log("schema: ", this.state.schema)
    return (
      <div className="container">
        <Sidebar />
        <FieldGroupDetail />
      </div>
    )
  }
}

export default App
