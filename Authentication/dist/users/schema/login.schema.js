"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
const common_schema_1 = require("../../common/common.schema");
class LoginSchema extends common_schema_1.CommonSchema {
    constructor() {
        super();
        this.createOTPSchema = {
            "type": "object",
            "additionalProperties": false,
            "required": ["EMAILID"],
            "properties": {
                "EMAILID": {
                    "type": "string",
                    "format": "email"
                }
            },
        };
        this.validateOTPSchema = {
            "type": "object",
            "additionalProperties": false,
            "required": ["EMAILID", "HASH", "OTP"],
            "properties": {
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
        };
        this.registerUserSchema = {
            "type": "object",
            "additionalProperties": false,
            "required": ["EMAILID", "PASSWORD", "FIRSTNAME", "FLAG"],
            "properties": {
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
        };
        this.loginUserSchema = {
            "type": "object",
            "additionalProperties": false,
            "required": ["EMAILID", "PASSWORD", "FLAG"],
            "properties": {
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
        };
        this.registerUserSchemaValidate = this.ajv.compile(this.registerUserSchema);
        this.validateOTPSchemaValidate = this.ajv.compile(this.validateOTPSchema);
        this.createOTPSchemaValidate = this.ajv.compile(this.createOTPSchema);
        this.loginUserSchemaValidate = this.ajv.compile(this.loginUserSchema);
        this.ajv = super.getAjv();
    }
}
exports.LoginSchema = LoginSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvc2NoZW1hL2xvZ2luLnNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBMEQ7QUFFMUQsTUFBYSxXQUFZLFNBQVEsNEJBQVk7SUFHekM7UUFDSSxLQUFLLEVBQUUsQ0FBQTtRQUlILG9CQUFlLEdBQUc7WUFDdEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsc0JBQXNCLEVBQUUsS0FBSztZQUM3QixVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDdkIsWUFBWSxFQUFHO2dCQUNYLFNBQVMsRUFBRTtvQkFDUCxNQUFNLEVBQUUsUUFBUTtvQkFDaEIsUUFBUSxFQUFFLE9BQU87aUJBQ3BCO2FBQ0o7U0FDSixDQUFDO1FBRU0sc0JBQWlCLEdBQUc7WUFDeEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsc0JBQXNCLEVBQUUsS0FBSztZQUM3QixVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztZQUN0QyxZQUFZLEVBQUc7Z0JBQ1gsU0FBUyxFQUFFO29CQUNQLE1BQU0sRUFBRSxRQUFRO29CQUNoQixRQUFRLEVBQUUsT0FBTztpQkFDcEI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNKLE1BQU0sRUFBRSxRQUFRO2lCQUNuQjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ25CO2FBQ0o7U0FDSixDQUFBO1FBRU8sdUJBQWtCLEdBQUc7WUFDekIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsc0JBQXNCLEVBQUUsS0FBSztZQUM3QixVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUM7WUFDeEQsWUFBWSxFQUFHO2dCQUNYLFNBQVMsRUFBRTtvQkFDUCxNQUFNLEVBQUUsUUFBUTtvQkFDaEIsUUFBUSxFQUFFLE9BQU87aUJBQ3BCO2dCQUNELFVBQVUsRUFBRTtvQkFDUixNQUFNLEVBQUUsUUFBUTtpQkFDbkI7Z0JBQ0QsV0FBVyxFQUFFO29CQUNULE1BQU0sRUFBRSxRQUFRO2lCQUNuQjtnQkFDRCxVQUFVLEVBQUU7b0JBQ1IsTUFBTSxFQUFFLFFBQVE7aUJBQ25CO2dCQUNELE1BQU0sRUFBRTtvQkFDSixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUN2QjthQUNKO1NBQ0osQ0FBQTtRQUVPLG9CQUFlLEdBQUc7WUFDdEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsc0JBQXNCLEVBQUUsS0FBSztZQUM3QixVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztZQUMzQyxZQUFZLEVBQUc7Z0JBQ1gsU0FBUyxFQUFFO29CQUNQLE1BQU0sRUFBRSxRQUFRO29CQUNoQixRQUFRLEVBQUUsT0FBTztpQkFDcEI7Z0JBQ0QsVUFBVSxFQUFFO29CQUNSLE1BQU0sRUFBRSxRQUFRO2lCQUNuQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ0osTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztpQkFDcEI7YUFDSjtTQUNKLENBQUE7UUFFTSwrQkFBMEIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUV0RSw4QkFBeUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUVwRSw0QkFBdUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFakUsNEJBQXVCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBbkZwRSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0NBbUZKO0FBekZELGtDQXlGQyJ9