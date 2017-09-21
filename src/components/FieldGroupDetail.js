import React, { Component } from 'react'

class FieldGroupDetail extends Component {
  render() {
    return (
      <div className="group-detail flex-three">
      	<h2 className="group-detail__header">General Info</h2>
        <ul className="field-list">
        	<li className="field-item" id="1">
        		<h3 className="field-item__name">Field Name</h3>
        		<p>Type: </p>
        		<p>Usage: </p>
        		<p>EverTrue Field Name: </p>
        	</li>
        	<li className="field-item" id="1">
        		<h3 className="field-item__name">Field Name</h3>
        		<p>Type: </p>
        		<p>Usage: </p>
        		<p>EverTrue Field Name: </p>
        	</li>
        </ul>
      </div>
    )
  }
}

export default FieldGroupDetail