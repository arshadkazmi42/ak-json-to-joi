'use strict'
const Joi = require('joi');

const externals = {};

externals.build = function (schema) {

  // Iterating through the keys of the object
  for (let key in schema) {

    if (key === "0") {
      return schema;
    }

    if (key === '$array') {
      schema = externals.buildJoi(schema[key]);
    } else if (schema[key]['$array']) {
      schema[key] = externals.buildJoiArray(schema[key]);
    } else if (schema[key]['$type']) {
      schema[key] = externals.buildJoi(schema[key]);
    } else {
      schema[key] = externals.build(schema[key]);
    }
  }

  return schema;
};


// Parser for array type of payload
externals.buildJoiArray = (schema) => {

  return Joi.array().items(externals.build(schema['$array']));
};


// Parser for types of validation
externals.buildJoi = (schema) => {

  // Joi Object
  let joiObj = Joi;

  switch (schema['$type']) {
    case 'string':
      joiObj = joiObj.string();
      break;
    case 'email':
      joiObj = joiObj.string().email();
      break;
    case 'number':
      joiObj = joiObj.number();
      break;
    case 'array':
      joiObj = joiObj.array();
      break;
    case 'object':
      joiObj = joiObj.object();
      break;
    case 'integer':
      joiObj = joiObj.number().integer();
      break;
    case 'boolean':
      joiObj = joiObj.boolean();
      break;
    case 'date':
      joiObj = joiObj.date();
      break;
    case 'timestamp':
      if ( schema.timestamp ) {
        joiObj = joiObj.date().timestamp(schema.timestamp);
      } else {
        joiObj = joiObj.date().timestamp();
      }
      break;
  }

  // Min Validation
  if ( schema.minLength ) joiObj = joiObj.min(schema.minLength);

  // Max Validation
  if ( schema.maxLength ) joiObj = joiObj.max(schema.maxLength);

  // Required filed validation
  if ( schema.required ) joiObj = joiObj.required();

  // Regex validation
  if ( schema.regex ) joiObj = joiObj.regex(schema.regex);

  // Option Field
  if ( schema.optional ) joiObj = joiObj.optional();

  // Default field
  if ( schema.default ) joiObj = joiObj.default(schema.default);

  // Min Date Validation
  if ( schema.minDate ) {
    if ( schema.minDate['$ref'] ) {
      joiObj = joiObj.min(Joi.ref(schema.minDate['$ref']))
    } else {
      joiObj = joiObj.min(schema.minDate);
    }
  }

  // Max Date Validation
  if ( schema.maxDate ) {
    if ( schema.maxDate['$ref'] ) {
      joiObj = joiObj.max(Joi.ref(schema.maxDate['$ref']))
    } else {
      joiObj = joiObj.max(schema.maxDate);
    }
  }

  return joiObj;

};


module.exports = externals;