import React from 'react'
import PropTypes from 'prop-types'
import FieldList from './FieldList.js'

function FieldGroupDetail({group={
	name: 'Select a group on the left to see field details',
	properties: []
}}) {

	return (
		<div className="group-detail flex-three">
			<h2 className="group-detail__header">{group.name}</h2>
			<FieldList fields={group.properties} />
		</div>
	)
}

FieldGroupDetail.propTypes = {
  group: PropTypes.object,
}

export default FieldGroupDetail;