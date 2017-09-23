import React, { Component } from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import './App.css'
import Sidebar from './components/Sidebar.js'
import FieldGroupDetail from './components/FieldGroupDetail.js'

class App extends Component {
  
  render() {

    const group = _.find(this.props.fieldGroups, (o) => {
      return o.id === this.props.activeGroup
    })

    return (
      <div className="container">
        <Sidebar />
        <FieldGroupDetail group={group} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fieldGroups: state.fieldGroups,
  activeGroup: state.activeGroup
});

export default connect(mapStateToProps)(App);
