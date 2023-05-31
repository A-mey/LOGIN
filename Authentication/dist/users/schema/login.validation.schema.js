"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_schema_1 = require("./login.schema");
const getError_services_1 = __importDefault(require("../../common/services/getError.services"));
class LoginValidationSchema extends login_schema_1.LoginSchema {
    constructor() {
        super();
        this.error = { isValid: false, errorMsg: "" };
    }
    validateRequest(req, key) {
        switch (key) {
            case "createOTP":
                var isValid = this.createOTPSchemaValidate(req);
                if (isValid) {
                    // console.log('Data is valid');
                    this.error.isValid = true;
                    return this.error;
                }
                else {
                    this.error.isValid = false;
                    let errors = this.createOTPSchemaValidate.errors;
                    this.error.errorMsg = getError_services_1.default.getError(errors[0]);
                    return this.error;
                }
            case "validateOTP":
                var isValid = this.validateOTPSchemaValidate(req);
                if (isValid) {
                    // console.log('Data is valid');
                    this.error.isValid = true;
                    return this.error;
                }
                else {
                    this.error.isValid = false;
                    let errors = this.validateOTPSchemaValidate.errors;
                    this.error.errorMsg = getError_services_1.default.getError(errors[0]);
                    return this.error;
                }
            case "registerUser":
                var isValid = this.registerUserSchemaValidate(req);
                if (isValid) {
                    // console.log('Data is valid');
                    this.error.isValid = true;
                    return this.error;
                }
                else {
                    this.error.isValid = false;
                    let errors = this.registerUserSchemaValidate.errors;
                    this.error.errorMsg = getError_services_1.default.getError(errors[0]);
                    return this.error;
                }
            case "loginUser":
                var isValid = this.loginUserSchemaValidate(req);
                if (isValid) {
                    // console.log('Data is valid');
                    this.error.isValid = true;
                    return this.error;
                }
                else {
                    this.error.isValid = false;
                    let errors = this.loginUserSchemaValidate.errors;
                    this.error.errorMsg = getError_services_1.default.getError(errors[0]);
                    return this.error;
                }
            default:
                return this.error;
        }
    }
}
exports.default = new LoginValidationSchema();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4udmFsaWRhdGlvbi5zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2Vycy9zY2hlbWEvbG9naW4udmFsaWRhdGlvbi5zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBMkM7QUFJM0MsZ0dBQXVFO0FBRXZFLE1BQU0scUJBQXNCLFNBQVEsMEJBQVc7SUFDM0M7UUFDSSxLQUFLLEVBQUUsQ0FBQTtRQUdKLFVBQUssR0FBdUIsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUZsRSxDQUFDO0lBSUQsZUFBZSxDQUFDLEdBQVEsRUFBRSxHQUFXO1FBQ2pDLFFBQU8sR0FBRyxFQUFFO1lBQ1IsS0FBSyxXQUFXO2dCQUNaLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsZ0NBQWdDO29CQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7b0JBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDckI7cUJBQ0k7b0JBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUMzQixJQUFJLE1BQU0sR0FBcUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQztvQkFDbkYsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsMkJBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUMzRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3JCO1lBRUwsS0FBSyxhQUFhO2dCQUNkLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsZ0NBQWdDO29CQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7b0JBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDckI7cUJBQ0k7b0JBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUMzQixJQUFJLE1BQU0sR0FBcUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQztvQkFDckYsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsMkJBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUMzRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3JCO1lBQ0wsS0FBSyxjQUFjO2dCQUNmLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsZ0NBQWdDO29CQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7b0JBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDckI7cUJBQ0k7b0JBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUMzQixJQUFJLE1BQU0sR0FBcUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQztvQkFDdEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsMkJBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUMzRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3JCO1lBQ0wsS0FBSyxXQUFXO2dCQUNaLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsZ0NBQWdDO29CQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7b0JBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDckI7cUJBQ0k7b0JBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUMzQixJQUFJLE1BQU0sR0FBcUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQztvQkFDbkYsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsMkJBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUMzRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3JCO1lBQ0w7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztDQUNKO0FBRUQsa0JBQWUsSUFBSSxxQkFBcUIsRUFBRSxDQUFBIn0=