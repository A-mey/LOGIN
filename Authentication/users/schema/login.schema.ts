import { CommonSchema } from "../../common/common.schema";

export class LoginSchema extends CommonSchema{


    constructor() {
        super()
        this.ajv = super.getAjv()
    }

    private createOTPSchema = {
        "type": "object",
        "additionalProperties": false,
        "required": ["EMAILID"],
        "properties" : {
            "EMAILID": {
                "type": "string",
                "format": "email"
            }
        },
    };

    private validateOTPSchema = {
        "type": "object",
        "additionalProperties": false,
        "required": ["EMAILID", "HASH", "OTP"],
        "properties" : {
            "EMAILID": {
                "type": "string",
                "format": "email"
            },
            "HASH": {
                "type": "string",
            },
            "OTP": {
                "type": "string",
            },
        },
    }

    private registerUserSchema = {
        "type": "object",
        "additionalProperties": false,
        "required": ["EMAILID", "PASSWORD", "FIRSTNAME", "FLAG"],
        "properties" : {
            "EMAILID": {
                "type": "string",
                "format": "email"
            },
            "PASSWORD": {
                "type": "string",
            },
            "FIRSTNAME": {
                "type": "string"
            },
            "LASTNAME": {
                "type": "string"
            },
            "FLAG": {
                "type": "string",
                "enum": ["REGISTER"]
            }
        },
    }

    private loginUserSchema = {
        "type": "object",
        "additionalProperties": false,
        "required": ["EMAILID", "PASSWORD", "FLAG"],
        "properties" : {
            "EMAILID": {
                "type": "string",
                "format": "email"
            },
            "PASSWORD": {
                "type": "string",
            },
            "FLAG": {
                "type": "string",
                "enum": ["LOGIN"]
            }
        },
    }

    public registerUserSchemaValidate = this.ajv.compile(this.registerUserSchema)

    public validateOTPSchemaValidate = this.ajv.compile(this.validateOTPSchema)

    public createOTPSchemaValidate = this.ajv.compile(this.createOTPSchema);

    public loginUserSchemaValidate = this.ajv.compile(this.loginUserSchema);
}