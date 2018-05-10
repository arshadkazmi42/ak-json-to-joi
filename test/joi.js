const Joi = require('joi');
const assert = require('assert');

const joiSchemaJSON = {
  "name":{
    "org": {
      "$type":"string",
      "required": true
    },
    "nick": {
      "$type":"string",
      "required": true
    }
  },
  "number":{
    "$type":"number",
    "optional": true
  },
  "date": {
    "$type": "timestamp",
    "timestamp": 'javascript'
  }
};

const json = {
  "name": {
    "org": "arshad",
    "nick": "ars"
  },
  "number": "999999999",
  "date": "1311110000000"
};

const joiSchemaArray = {
    "$array": {
      "name":{
        "$type":"string"
      },
      "number":{
        "$type":"number",
        "optional": true
      }
    }
};

const jsonArray = [
  {
    "name": "Arshad",
    "number": "999999999"
  },
  {
    "name": "Arshad",
    "number": "999999999"
  },
  {
    "name": "Arshad",
    "number": "999999999"
  }
];


describe("to check joi schema is valid or not", function () {

  it("build joi schema", function () {
    const JoiSchemaBuilder = require('../index');
    let JoiSchema = JoiSchemaBuilder.build(joiSchemaJSON);
    let result = Joi.validate(json, JoiSchema);
    assert.equal(result.error, undefined);
  });

  it("build joi array schema", function () {
    const JoiSchemaBuilder = require('../index');
    let JoiSchema = JoiSchemaBuilder.build(joiSchemaArray);
    let result = Joi.validate(jsonArray, JoiSchema);
    assert.equal(result.error, undefined);
  })

});