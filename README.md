## ak-json-to-joi

NPM Module to convert predefined JSON into Joi validation schema dynamically.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ad662a16b8784785b4d39b10f075a47c)](https://www.codacy.com/app/arshadkazmi42/ak-json-to-joi?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=arshadkazmi42/ak-json-to-joi&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/ak-json-to-joi.svg)](https://badge.fury.io/js/ak-json-to-joi)
[![Dependencies](https://david-dm.org/arshadkazmi42/ak-json-to-joi.svg)](https://david-dm.org/arshadkazmi42/ak-json-to-joi)
[![npm Downloads](https://img.shields.io/npm/dm/ak-json-to-joi.svg)](https://www.npmjs.com/package/ak-json-to-joi)

## How to install?

[![NPM](https://nodei.co/npm/ak-json-to-joi.png)](https://www.npmjs.com/package/ak-json-to-joi/)


## How to use

```javascript
const JoiSchemaBuilder = require('ak-json-to-joi');

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

let JoiValidationSchema = JoiSchemaBuilder.build(joiSchemaJSON);

// Validating payjoload with JOI Schema
let result = Joi.validate(yourPayloadJSON, JoiValidationSchema)
if (result.error) {
    // Validation failed
} else {
    // Validation passed
}

```

# Supported Features

## Supported Types

Currently the library supports these types 

- string
- number
- email
- array
- object
- boolean

## Supported Validations

- **minLength**: Value must be an integer
- **maxLength**: Value must be an integer
- **optional**: Boolean flag (true / false)
- **required**: Boolean flag (true / fallse)
- **regex**: Regex Pattern
- **default**: Default value, depends on the type defined

# Note:

'type' and 'array' key in validation json should be prefixed with '$' symbol
on missing $ symbol your validation might not work.

## Contributors

[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/0)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/0)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/1)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/1)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/2)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/2)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/3)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/3)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/4)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/4)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/5)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/5)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/6)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/6)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/7)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/7)
