import React from 'react'
import PropTypes from 'prop-types'
import FieldItem from './FieldItem.js'
import _ from 'lodash'

function FieldList(props) {
  const {fields} = props

  const fieldItems = fields.map(o => {
    return (<FieldItem item={o} key={_.uniqueId('field-item_')} />)
  })

  return (
      <ul className="field-list">
        {fieldItems}
      </ul>
  )
}

FieldList.propTypes = {
  fields: PropTypes.array.isRequired,
}

export default FieldList