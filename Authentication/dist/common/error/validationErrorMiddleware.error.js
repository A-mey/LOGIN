"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrorMiddleware = void 0;
const express_json_validator_middleware_1 = require("express-json-validator-middleware");
const debug_1 = __importDefault(require("debug"));
const debugLog = (0, debug_1.default)('app');
function validationErrorMiddleware(error, request, response, next) {
    debugLog("error", error);
    debugLog("ValidationError", error.validationErrors.body[0].message);
    let errorMSg = errorMessage(error.validationErrors.body);
    if (response.headersSent) {
        return next(error);
    }
    const isValidationError = error instanceof express_json_validator_middleware_1.ValidationError;
    debugLog("isValidationError", isValidationError);
    if (!isValidationError) {
        return next(error);
    }
    response.status(400).json({
        error: errorMSg,
    });
    next();
}
exports.validationErrorMiddleware = validationErrorMiddleware;
function errorMessage(error) {
    debugLog("errorMessage():error", error);
    debugLog("errorMessage():errorBody", error[0].keyword);
    let err = "";
    try {
        switch (error[0].keyword) {
            case 'additionalProperties':
                err = `Unable to find property ${error[0].params.additionalProperty}`;
                break;
            case 'required':
                err = `Missing property ${error[0].params.missingProperty}`;
                break;
            case 'type':
                err = `Invalid type for property ${error[0].instancePath}`;
                break;
            case 'enum':
                err = `Invalid type for property ${error[0].instancePath}`;
                break;
            default:
                err = "Unknown error";
        }
    }
    catch (e) {
        debugLog(e);
        err = "Unknown error";
    }
    return err;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbkVycm9yTWlkZGxld2FyZS5lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9lcnJvci92YWxpZGF0aW9uRXJyb3JNaWRkbGV3YXJlLmVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLHlGQUFvRTtBQUNwRSxrREFBMEI7QUFFMUIsTUFBTSxRQUFRLEdBQW9CLElBQUEsZUFBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBRS9DLFNBQWdCLHlCQUF5QixDQUFDLEtBQVUsRUFBRSxPQUFnQixFQUFFLFFBQWtCLEVBQUUsSUFBa0I7SUFDMUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QixRQUFRLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRSxJQUFJLFFBQVEsR0FBVyxZQUFZLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBRW5FLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQjtJQUVELE1BQU0saUJBQWlCLEdBQUcsS0FBSyxZQUFZLG1EQUFlLENBQUM7SUFDeEQsUUFBUSxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUE7SUFDbkQsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25CO0lBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekIsS0FBSyxFQUFFLFFBQVE7S0FDZixDQUFDLENBQUM7SUFFSCxJQUFJLEVBQUUsQ0FBQztBQUNSLENBQUM7QUFwQkQsOERBb0JDO0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBaUI7SUFDbkMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3ZDLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDdEQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO0lBQ1osSUFBSTtRQUNBLFFBQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNyQixLQUFLLHNCQUFzQjtnQkFDdkIsR0FBRyxHQUFHLDJCQUEyQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUE7Z0JBQ3JFLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsR0FBRyxHQUFJLG9CQUFvQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFBO2dCQUM1RCxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLEdBQUcsR0FBRyw2QkFBNkIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFBO2dCQUMxRCxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLEdBQUcsR0FBRyw2QkFBNkIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFBO2dCQUMxRCxNQUFNO1lBQ1Y7Z0JBQ0ksR0FBRyxHQUFHLGVBQWUsQ0FBQTtTQUU1QjtLQUNKO0lBQ0QsT0FBTSxDQUFDLEVBQUU7UUFDTCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixHQUFHLEdBQUcsZUFBZSxDQUFBO0tBQ3hCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFFZixDQUFDIn0=