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
const app_1 = require("../app");
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const otp_services_1 = __importDefault(require("../common/services/otp.services"));
const mailer_services_1 = __importDefault(require("../common/services/mailer.services"));
describe('LOGIN API', function () {
    // let request: supertest.SuperAgentTest;
    // before(function() {
    //     request = supertest.agent(app);
    // });
    after(function (done) {
        app_1.server.close(done);
    });
    describe('API ENDPOINT', function () {
        let request;
        before(function () {
            request = supertest_1.default.agent(app_1.app);
        });
        it('should return fullhash', function () {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const res = yield request.post('/createOTP').send({
                        "EMAILID": "amey2p@gmail.com"
                    });
                    (0, chai_1.expect)(res.status).to.equal(200);
                    (0, chai_1.expect)(res.body.success).to.equal(true);
                    (0, chai_1.expect)(res.body).not.to.be.empty;
                    (0, chai_1.expect)(res.body).to.be.an('Response');
                    (0, chai_1.expect)(res.body.data.message).to.equal("OTP sent successfully");
                }
                catch (e) {
                    console.log(e.message);
                }
            });
        });
        it('should throw an error', function () {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const res = yield request.post('/createOTP').send({
                        "EMAILID": "amey2p@gmailcom"
                    });
                    (0, chai_1.expect)(res.status).to.equal(400);
                    (0, chai_1.expect)(res.body.success).to.equal(false);
                    (0, chai_1.expect)(res.body).not.to.be.empty;
                    (0, chai_1.expect)(res.body).to.be.an('Response');
                    (0, chai_1.expect)(res.body.data.message).to.equal("Invalid type for property /EMAILID");
                }
                catch (e) {
                    console.log(e.message);
                }
            });
        });
        it('should show user already exists while registration', function () {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const res = yield request.post('/registerUser').send({
                        "EMAILID": "amey2p@gmail.com",
                        "PASSWORD": "pass@1234",
                        "FIRSTNAME": "Ameya",
                        "LASTNAME": "Patil",
                        "FLAG": "REGISTER"
                    });
                    (0, chai_1.expect)(res.status).to.equal(409);
                    (0, chai_1.expect)(res.body.success).to.equal(false);
                    (0, chai_1.expect)(res.body).not.to.be.empty;
                    (0, chai_1.expect)(res.body).to.be.an('Response');
                    (0, chai_1.expect)(res.body.data.message).to.equal("User already exists");
                }
                catch (e) {
                    console.log(e.message);
                }
            });
        });
        it('should login the user', function () {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const res = yield request.post('/registerUser').send({
                        "EMAILID": "amey2p@gmail.com",
                        "PASSWORD": "pass@1234",
                        "FLAG": "LOGIN"
                    });
                    (0, chai_1.expect)(res.status).to.equal(200);
                    (0, chai_1.expect)(res.body.success).to.equal(true);
                    (0, chai_1.expect)(res.body).not.to.be.empty;
                    (0, chai_1.expect)(res.body).to.be.an('Response');
                    (0, chai_1.expect)(res.body.data.message).to.equal("Logged in successfully");
                    (0, chai_1.expect)(res.body.data.data).to.have.keys(['id', 'EMAILID', 'FIRSTNAME', 'LASTNAME']);
                }
                catch (e) {
                    console.log(e.message);
                }
            });
        });
    });
    describe('Unit function', function () {
        return __awaiter(this, void 0, void 0, function* () {
            it('should return OTP', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        (0, chai_1.expect)(otp_services_1.default.createOTP("amey2p@gmailcom")).to.be.an('string').that.have.lengthOf(6);
                        // expect(otpServices.createOTP("amey2p@gmailcom").length).to.be.an('string');
                    }
                    catch (e) {
                        console.log(e.message);
                    }
                });
            });
            it('should send mail', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        (0, chai_1.expect)(mailer_services_1.default.sendMail("amey2p@gmailcom", "Test mail", "Test")).to.be.an('object');
                        (0, chai_1.expect)(mailer_services_1.default.sendMail("amey2p@gmailcom", "Test mail", "Test")).to.have.keys(['accepted', 'rejected', 'ehlo', 'envelopeTime', 'messageTime', 'messageSize', 'response', 'envelope', 'messageId']);
                        (0, chai_1.expect)(mailer_services_1.default.sendMail("amey2p@gmailcom", "Test mail", "Test")).to.haveOwnProperty('accepted').to.equal(['amey2p@getMaxListeners.com']);
                        (0, chai_1.expect)(mailer_services_1.default.sendMail("amey2p@gmailcom", "Test mail", "Test")).to.haveOwnProperty('envelope').to.equal({ from: 'a.may3pp@gmail.com', to: ['amey2p@gmailcom'] });
                        (0, chai_1.expect)(mailer_services_1.default.sendMail("amey2p@gmailcom", "Test mail", "Test")).to.haveOwnProperty('response').to.contain('250 2.0.0 OK');
                    }
                    catch (e) {
                        console.log(e.message);
                    }
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L2FwcC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQW1DO0FBRW5DLCtCQUE4QjtBQUM5QiwwREFBa0M7QUFJbEMsbUZBQTBEO0FBRTFELHlGQUE0RDtBQUU1RCxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLHlDQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsc0NBQXNDO0lBQ3RDLE1BQU07SUFDTixLQUFLLENBQUMsVUFBUyxJQUFJO1FBQ2YsWUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxjQUFjLEVBQUU7UUFDckIsSUFBSSxPQUFpQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQztZQUNILE9BQU8sR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxTQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTs7Z0JBQ3pCLElBQUk7b0JBQ0EsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDOUMsU0FBUyxFQUFFLGtCQUFrQjtxQkFDaEMsQ0FBQyxDQUFDO29CQUNILElBQUEsYUFBTSxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQyxJQUFBLGFBQU0sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hDLElBQUEsYUFBTSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JB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