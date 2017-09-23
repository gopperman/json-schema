import _ from 'lodash'

/**
 * Given a schema, creates an object for fields that are not groups
 * @param  {object} schema 
 * @return {object} the "General Info Object"
 */
const getGeneralFields = (schema) => {
	return {
        name: 'General Info',
        id: 0,
        properties: _.filter(schema, o => {
          // Returns all of the objects without children properties
          return (typeof o.properties === 'undefined' || o.properties.length === 0)
        })
    }
}

/**
 * Given a schema, returns all groups of fields with children
 * @param  {object} schema
 * @return {array} A collection of groups with child fields
 */
const getGroupedFields = (schema) => {
	return _.filter(schema, o => {
      return (o.properties && o.properties.length > 0)
    })
}

/**
 * Does some basic object manipulation to transform schema from what is
 * provided in the raw json to what we need to render the app
 * @param  {object} schema 
 * @return {object}
 */
const applySchemaTransformations = (schema) => {
	const generalInfo = getGeneralFields(schema)
	const groupedFields = getGroupedFields(schema)
    // Concatenate general fields with those that have parents
    return generalInfo.properties.length ? [
      generalInfo, 
      ...groupedFields
    ] : groupedFields
}

export {
	applySchemaTransformations
}