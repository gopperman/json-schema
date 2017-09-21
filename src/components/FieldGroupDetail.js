import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FieldList from './FieldList.js'

class FieldGroupDetail extends Component {
  render() {
    const {fieldGroups} = this.props

    // Just grab the first one for now
    const group = fieldGroups[0]
    return (
      <div className="group-detail flex-three">
      	<h2 className="group-detail__header">{group.name}</h2>
        <FieldList fields={group.properties} />
      </div>
    )
  }
}

FieldGroupDetail.propTypes = {
  fieldGroups: PropTypes.array.isRequired,
}

export default FieldGroupDetail