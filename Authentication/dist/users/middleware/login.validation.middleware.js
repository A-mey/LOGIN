"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_validation_schema_1 = __importDefault(require("../schema/login.validation.schema"));
class LoginValidationMiddleware {
    checkcreateOTPSchema(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorRes = login_validation_schema_1.default.validateRequest(req.body, "createOTP");
            if (errorRes.isValid) {
                // console.log('Data is valid');
                next();
            }
            else {
                let response = { success: false, code: 400, data: { message: errorRes.errorMsg } };
                res.status(400).json(response);
            }
        });
    }
    checkregisterUserSchema(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorRes = login_validation_schema_1.default.validateRequest(req.body, "registerUser");
            if (errorRes.isValid) {
                // console.log('Data is valid');
                next();
            }
            else {
                let response = { success: false, code: 400, data: { message: errorRes.errorMsg } };
                res.status(400).json(response);
            }
        });
    }
    checkValidateOTPSchema(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorRes = login_validation_schema_1.default.validateRequest(req.body, "validateOTP");
            if (errorRes.isValid) {
                // console.log('Data is valid');
                next();
            }
            else {
                let response = { success: false, code: 400, data: { message: errorRes.errorMsg } };
                res.status(400).json(response);
            }
        });
    }
    checkloginUserSchema(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorRes = login_validation_schema_1.default.validateRequest(req.body, "loginUser");
            if (errorRes.isValid) {
                // console.log('Data is valid');
                next();
            }
            else {
                let response = { success: false, code: 400, data: { message: errorRes.errorMsg } };
                res.status(400).json(response);
            }
        });
    }
}
exports.default = new LoginValidationMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4udmFsaWRhdGlvbi5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvbWlkZGxld2FyZS9sb2dpbi52YWxpZGF0aW9uLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSxnR0FBc0U7QUFHdEUsTUFBTSx5QkFBeUI7SUFDckIsb0JBQW9CLENBQUMsR0FBWSxFQUFFLEdBQXFCLEVBQUUsSUFBa0I7O1lBQzlFLE1BQU0sUUFBUSxHQUF1QixpQ0FBcUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQTtZQUNqRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLGdDQUFnQztnQkFDaEMsSUFBSSxFQUFFLENBQUM7YUFDUjtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsR0FBYSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBQyxFQUFDLENBQUE7Z0JBQ3hGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQztLQUFBO0lBRUssdUJBQXVCLENBQUMsR0FBWSxFQUFFLEdBQXFCLEVBQUUsSUFBa0I7O1lBQ2pGLE1BQU0sUUFBUSxHQUF1QixpQ0FBcUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQTtZQUNwRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLGdDQUFnQztnQkFDaEMsSUFBSSxFQUFFLENBQUM7YUFDUjtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsR0FBYSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBQyxFQUFDLENBQUE7Z0JBQ3hGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQztLQUFBO0lBRUssc0JBQXNCLENBQUMsR0FBWSxFQUFFLEdBQXFCLEVBQUUsSUFBa0I7O1lBQ2hGLE1BQU0sUUFBUSxHQUF1QixpQ0FBcUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQTtZQUNuRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLGdDQUFnQztnQkFDaEMsSUFBSSxFQUFFLENBQUM7YUFDUjtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsR0FBYSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBQyxFQUFDLENBQUE7Z0JBQ3hGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQztLQUFBO0lBRUssb0JBQW9CLENBQUMsR0FBWSxFQUFFLEdBQXFCLEVBQUUsSUFBa0I7O1lBQzlFLE1BQU0sUUFBUSxHQUF1QixpQ0FBcUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQTtZQUNqRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLGdDQUFnQztnQkFDaEMsSUFBSSxFQUFFLENBQUM7YUFDUjtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsR0FBYSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBQyxFQUFDLENBQUE7Z0JBQ3hGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLHlCQUF5QixFQUFFLENBQUEifQ==