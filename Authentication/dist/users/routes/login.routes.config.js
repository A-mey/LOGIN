"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRoutes = void 0;
const common_routes_config_1 = require("../../common/common.routes.config");
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
const login_middleware_1 = __importDefault(require("../middleware/login.middleware"));
const login_validation_middleware_1 = __importDefault(require("../middleware/login.validation.middleware"));
const express_json_validator_middleware_1 = require("express-json-validator-middleware");
const { validate } = new express_json_validator_middleware_1.Validator({});
class LoginRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route(`/createOTP`)
            .post(
        // validate({ body: LoginSchema.createOTPSchema }),
        login_validation_middleware_1.default.checkcreateOTPSchema, login_controller_1.default.sendOTP);
        this.app.route('/validateOTP')
            .post(
        // validate({ body: LoginSchema.validateOTPSchema }),
        login_validation_middleware_1.default.checkValidateOTPSchema, login_controller_1.default.validateOTP);
        this.app.route('/registerUser')
            .post(
        // validate({ body: LoginSchema.registerUserSchema }),
        login_validation_middleware_1.default.checkregisterUserSchema, login_middleware_1.default.checkExistingUser, login_controller_1.default.createUser);
        this.app.route('/loginUser')
            .post(login_validation_middleware_1.default.checkloginUserSchema, login_middleware_1.default.checkExistingUser, login_controller_1.default.loginUser);
        return this.app;
    }
}
exports.LoginRoutes = LoginRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3JvdXRlcy9sb2dpbi5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSx1RkFBOEQ7QUFDOUQsc0ZBQTZEO0FBQzdELDRHQUFpRjtBQUNqRix5RkFBOEQ7QUFDOUQsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksNkNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUl2QyxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDL0MsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ3ZCLElBQUk7UUFDRCxtREFBbUQ7UUFDbkQscUNBQXlCLENBQUMsb0JBQW9CLEVBQzlDLDBCQUFlLENBQUMsT0FBTyxDQUMxQixDQUFDO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO2FBQ3pCLElBQUk7UUFDRCxxREFBcUQ7UUFDckQscUNBQXlCLENBQUMsc0JBQXNCLEVBQ2hELDBCQUFlLENBQUMsV0FBVyxDQUM5QixDQUFDO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2FBQzFCLElBQUk7UUFDRCxzREFBc0Q7UUFDdEQscUNBQXlCLENBQUMsdUJBQXVCLEVBQ2pELDBCQUFlLENBQUMsaUJBQWlCLEVBQ2pDLDBCQUFlLENBQUMsVUFBVSxDQUM3QixDQUFBO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ3ZCLElBQUksQ0FDRCxxQ0FBeUIsQ0FBQyxvQkFBb0IsRUFDOUMsMEJBQWUsQ0FBQyxpQkFBaUIsRUFDakMsMEJBQWUsQ0FBQyxTQUFTLENBQzVCLENBQUE7UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBakNELGtDQWlDQyJ9