## ak-json-to-joi
[![npm version](https://badge.fury.io/js/ak-json-to-joi.svg)](https://badge.fury.io/js/ak-json-to-joi)
[![Dependencies](https://david-dm.org/arshadkazmi42/ak-json-to-joi.svg)](https://david-dm.org/arshadkazmi42/ak-json-to-joi)
[![npm Downloads](https://img.shields.io/npm/dm/ak-json-to-joi.svg)](https://www.npmjs.com/package/ak-json-to-joi)

## How to install?

[![NPM](https://nodei.co/npm/ak-json-to-joi.png)](https://www.npmjs.com/package/ak-json-to-joi/)


## How to use

```
const JoiSchemaBuilder = require('ak-json-to-joi');
let JoiValidationSchema = JoiSchemaBuilder.build(yourJSON);
let result = Joi.validate(yourPayloadJSON, JoiValidationSchema)

```

## Supported Features

# Types

Use any of these as types of the key

```
string
number
email
array
object
boolean

```

# Validations

```
minLength: {integer value}
maxLength: {integer value}
optional: {true / false}
required: {true / false}
regex: {regex pattern}
default: {default value}
```

## Note:

```
'type' and 'array' key in validation json should be prefixed with '$' symbol
on missing $ symbol your validation might not work.
```

## Sample JSONs

```
# ARRAY JSON

{
    "$array": {
        "name":{
            "$type":"string"
        },
        "number":{
            "$type":"number",
            "optional": true
        }
    }
}


# OBJECT JSON

{
    "name": {
        "original": {
            "$type": "string",
            "required": true,
            "maxLength": 200
        },
        "nick": {
            "$type": "string",
            "optional": true,
            "default": "arshad"
        }
    },
    "phone": {
        "$type": "number",
        "required": true
    },
    "email": {
        "$type": "email",
        "optional": true
    }
}

```
