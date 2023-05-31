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
// we import our newly created user services
const login_service_1 = __importDefault(require("../services/login.service"));
const login_http_service_1 = __importDefault(require("../services/login.http.service"));
// we use debug with a custom context as described in Part 1
const debug_1 = __importDefault(require("debug"));
const otp_services_1 = __importDefault(require("../../common/services/otp.services"));
const log = (0, debug_1.default)('app:users-controller');
class UsersController {
    sendOTP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let emailId = req.body.EMAILID;
            const otpObject = yield otp_services_1.default.createOTP(emailId);
            let emailResponse = yield otp_services_1.default.sendOtpMail(emailId, otpObject.otp);
            // let emailResponse = await Nodemailer.sendMail(emailRecipient, subject, body);
            let response;
            let status;
            console.log("emailResponse", emailResponse);
            if (!emailResponse) {
                return res.send("end");
            }
            if (emailResponse.response.includes("250 2.0.0 OK")) {
                status = 200;
                response = { success: true, code: status, data: { message: "OTP sent successfully", data: { fullHash: otpObject.fullHash } } };
            }
            else {
                status = 400;
                response = { success: false, code: status, data: { message: "Unable to send OTP" } };
            }
            res.status(status).json(response);
        });
    }
    validateOTP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = yield login_service_1.default.otpValidation(req.body.EMAILID, req.body.HASH, req.body.OTP);
            if (validation == true) {
                res.status(204).json({ success: true, code: 204, data: { message: "OTP matched" } });
            }
            else if (validation == false) {
                res.status(401).json({ success: false, code: 401, data: { message: "OTP did not match" } });
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let emailId = req.body.EMAILID;
            let password = req.body.PASSWORD;
            let encryptedPill = yield login_service_1.default.createAuthPill(emailId, password);
            let userData = { EMAILID: req.body.EMAILID, FIRSTNAME: req.body.FIRSTNAME, LASTNAME: req.body.LASTNAME };
            return Promise.all([login_http_service_1.default.storeUserData(userData), login_http_service_1.default.createNewAuth(encryptedPill)]).then((data) => {
                if (data[0].code == 201 && data[1].code == 201) {
                    res.status(201).json({ success: true, code: 201, data: { message: "User created successfully" } });
                }
                else {
                    res.status(400).json({ success: false, code: 400, data: { message: "Something went wrong" } });
                }
            }).catch((error) => {
                console.log(error.message);
                res.status(400).json({ success: false, code: 400, data: { message: error } });
            });
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let emailId = req.body.EMAILID;
            let password = req.body.password;
            let encryptedPill = yield login_service_1.default.createAuthPill(emailId, password);
            let authenticateUser = yield login_http_service_1.default.checkAuth(encryptedPill);
            if (authenticateUser.code == 200) {
                // res.status(200).send();
                let userData = yield login_http_service_1.default.getUserDetails(emailId);
                if (userData) {
                    res.status(200).json({ success: true, code: 200, data: { message: "Logged in successfully", data: userData.data.data } });
                }
                else {
                    res.status(400).json({ success: false, code: 401, data: { message: "Something went wrong" } });
                }
            }
            else {
                res.status(401).json({ success: false, code: 401, data: { message: "Invalid username/password" } });
            }
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL2NvbnRyb2xsZXJzL2xvZ2luLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSw0Q0FBNEM7QUFDNUMsOEVBQXFEO0FBQ3JELHdGQUE4RDtBQUU5RCw0REFBNEQ7QUFDNUQsa0RBQTBCO0FBSTFCLHNGQUE0RDtBQVM1RCxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMzRCxNQUFNLGVBQWU7SUFFWCxPQUFPLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDckQsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDL0IsTUFBTSxTQUFTLEdBQWMsTUFBTSxzQkFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRSxJQUFJLGFBQWEsR0FBUSxNQUFNLHNCQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsR0FBSSxDQUFDLENBQUM7WUFDL0UsZ0ZBQWdGO1lBQ2hGLElBQUksUUFBa0IsQ0FBQztZQUN2QixJQUFJLE1BQWMsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNoQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7WUFDRCxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNqRCxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUNiLFFBQVEsR0FBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsSUFB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