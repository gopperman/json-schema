import React from 'react'
import PropTypes from 'prop-types'

function FieldItem({item}) {
    const appKeys = item.app_keys.reduce((accumulator, currentVal) => {
        return `${accumulator}, ${currentVal}`
    }, '').substring(2)

    return (
        <li className="field-item" id={`field-item__${item.id}`}>
        	<h3 className="field-item__name">{item.name}</h3>
        	<p>Type: {item.data_type}</p>
        	<p>Usage: {appKeys}</p>
        	<p>EverTrue Field Name: {item.name}</p>
        </li>
    )
}

FieldItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FieldItem