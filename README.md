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
let JoiValidationSchema = JoiSchemaBuilder.build(yourJSON);
let result = Joi.validate(yourPayloadJSON, JoiValidationSchema)

```

# Supported Features

## Types

Use any of these as types of the key

```javascript

string
number
email
array
object
boolean

```

## Validations

```javascript

minLength: {integer value}
maxLength: {integer value}
optional: {true / false}
required: {true / false}
regex: {regex pattern}
default: {default value}

```

# Sample JSONs

## ARRAY JSON

```javascript

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

```

## OBJECT JSON

```javascript

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
    },
    "date": {
        "$type": "date",
        "minDate": "1-1-2017",
        "maxDate": "10-05-2018"
    }
}

```

# Note:

```

'type' and 'array' key in validation json should be prefixed with '$' symbol
on missing $ symbol your validation might not work.

```

## Contributors

[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/0)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/0)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/1)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/1)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/2)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/2)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/3)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/3)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/4)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/4)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/5)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/5)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/6)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/6)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/images/7)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-json-to-joi/links/7)
