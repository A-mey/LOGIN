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
const otp_services_1 = __importDefault(require("../../common/services/otp.services"));
const encryption_services_1 = __importDefault(require("../../common/services/encryption.services"));
class LoginService {
    constructor() {
        this.secretKey = process.env.SECRETKEY;
    }
    otpValidation(emailId, hash, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            return otp_services_1.default.verifyOTP(emailId, hash, otp);
        });
    }
    createOTP(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return otp_services_1.default.createOTP(email);
        });
    }
    createAuthPill(emailId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // let secretKey = process.env.SECRETKEY!
            // let customSalt = await EncryptionService.createSalt();
            let customSalt = yield encryption_services_1.default.md5Encryption(password);
            let key = yield encryption_services_1.default.scrypt(customSalt, this.secretKey);
            let encryptedData = yield encryption_services_1.default.aesEencryption(key, password);
            let pill = customSalt + encryptedData;
            let passwordSalt = (yield encryption_services_1.default.sha256Encryption(emailId + this.secretKey)).slice(-22);
            let passwordHash = (yield encryption_services_1.default.scrypt(passwordSalt, this.secretKey)).slice(-40);
            let usernameHash = yield encryption_services_1.default.sha256Encryption(emailId);
            // let data: Pill = {usernameHash: usernameHash, passwordHash: passwordHash, pill: pill};
            let userAuth = yield encryption_services_1.default.hmac(key, usernameHash + passwordHash);
            let authPill = userAuth + pill;
            let data = {
                AUTHPILL: authPill,
                USERNAMEHASH: usernameHash
            };
            return data;
        });
    }
}
exports.default = new LoginService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRkFBMkQ7QUFFM0Qsb0dBQXlFO0FBS3pFLE1BQU0sWUFBWTtJQUFsQjtRQUVZLGNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVUsQ0FBQTtJQTRCOUMsQ0FBQztJQTNCUyxhQUFhLENBQUMsT0FBZSxFQUFFLElBQVksRUFBRSxHQUFXOztZQUMxRCxPQUFPLHNCQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEQsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLEtBQWE7O1lBQ3pCLE9BQU8sc0JBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLE9BQWUsRUFBRSxRQUFnQjs7WUFDbEQseUNBQXlDO1lBQ3pDLHlEQUF5RDtZQUN6RCxJQUFJLFVBQVUsR0FBRyxNQUFNLDZCQUFpQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRSxJQUFJLEdBQUcsR0FBRyxNQUFNLDZCQUFpQixDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksYUFBYSxHQUFHLE1BQU0sNkJBQWlCLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMxRSxJQUFJLElBQUksR0FBRyxVQUFVLEdBQUcsYUFBYSxDQUFBO1lBQ3JDLElBQUksWUFBWSxHQUFHLENBQUMsTUFBTSw2QkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkcsSUFBSSxZQUFZLEdBQUcsQ0FBQyxNQUFNLDZCQUFpQixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0YsSUFBSSxZQUFZLEdBQUcsTUFBTSw2QkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyRSx5RkFBeUY7WUFDekYsSUFBSSxRQUFRLEdBQUcsTUFBTSw2QkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksR0FBQyxZQUFZLENBQUMsQ0FBQztZQUM1RSxJQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksSUFBSSxHQUFHO2dCQUNQLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixZQUFZLEVBQUUsWUFBWTthQUM3QixDQUFBO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=