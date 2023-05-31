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
const otp_generator_1 = __importDefault(require("otp-generator"));
const mailer_services_1 = __importDefault(require("./mailer.services"));
const encryption_services_1 = __importDefault(require("./encryption.services"));
const key = 'MySecretKey';
class OtpService {
    createOTP(emailId) {
        return __awaiter(this, void 0, void 0, function* () {
            let otpValidationTime = process.env.OTPVALIDATIONTIME || '2';
            let otpValidationTimeInMins = parseInt(otpValidationTime, 10);
            const otp = otp_generator_1.default.generate(6, { upperCaseAlphabets: false, specialChars: false });
            const ttl = otpValidationTimeInMins * 60 * 1000; //5 Minutes in miliseconds
            const expires = Date.now() + ttl; //timestamp to 5 minutes in the future
            const data = `${emailId}.${otp}.${expires}`; // phone.otp.expiry_timestamp
            // const hash = crypto.createHmac("sha256",key).update(data).digest("hex"); 
            const hash = yield encryption_services_1.default.hmac(key, data); // creating SHA256 hash of the data
            const fullHash = `${hash}.${expires}`; // Hash.expires, format to send to the user
            let otpObj = {
                otp: otp,
                fullHash: fullHash
            };
            return otpObj;
        });
    }
    verifyOTP(emailId, hash, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            // Seperate Hash value and expires from the hash returned from the user
            let [hashValue, expires] = hash.split(".");
            // Check if expiry time has passed
            let now = Date.now();
            if (now > parseInt(expires))
                return false;
            // Calculate new hash with the same key and the same algorithm
            let data = `${emailId}.${otp}.${expires}`;
            // let newCalculatedHash = crypto.createHmac("sha256",key).update(data).digest("hex");
            let newCalculatedHash = yield encryption_services_1.default.hmac(key, data);
            // Match the hashes
            if (newCalculatedHash.toString() === hashValue) {
                return true;
            }
            return false;
        });
    }
    sendOtpMail(emailId, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            let emailRecipient = emailId;
            let subject = 'OTP';
            let body = "Your OTP is ${otp}";
            body = body.replace("${otp}", otp);
            return yield mailer_services_1.default.sendMail(emailRecipient, subject, body);
        });
    }
}
exports.default = new OtpService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL290cC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUF5QztBQUl6Qyx3RUFBMkM7QUFDM0MsZ0ZBQXNEO0FBRXRELE1BQU0sR0FBRyxHQUFXLGFBQWEsQ0FBQztBQUVsQyxNQUFNLFVBQVU7SUFDTixTQUFTLENBQUMsT0FBZTs7WUFDM0IsSUFBSSxpQkFBaUIsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLEdBQUcsQ0FBQTtZQUNwRSxJQUFJLHVCQUF1QixHQUFXLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUV0RSxNQUFNLEdBQUcsR0FBRyx1QkFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDekYsTUFBTSxHQUFHLEdBQUcsdUJBQXVCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtZQUMzRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsc0NBQXNDO1lBQ3hFLE1BQU0sSUFBSSxHQUFHLEdBQUcsT0FBTyxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtZQUMxRSw0RUFBNEU7WUFDNUUsTUFBTSxJQUFJLEdBQUcsTUFBTSw2QkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsbUNBQW1DO1lBQ3hGLE1BQU0sUUFBUSxHQUFVLEdBQUcsSUFBSSxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsMkNBQTJDO1lBQ3pGLElBQUksTUFBTSxHQUFjO2dCQUNwQixHQUFHLEVBQUUsR0FBRztnQkFDUixRQUFRLEVBQUUsUUFBUTthQUNyQixDQUFBO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLE9BQWUsRUFBRSxJQUFZLEVBQUUsR0FBVzs7WUFDdEQsdUVBQXVFO1lBQ3ZFLElBQUksQ0FBQyxTQUFTLEVBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxrQ0FBa0M7WUFDbEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUcsR0FBRyxHQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDdkMsOERBQThEO1lBQzlELElBQUksSUFBSSxHQUFJLEdBQUcsT0FBTyxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUMzQyxzRkFBc0Y7WUFDdEYsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLDZCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEUsbUJBQW1CO1lBQ25CLElBQUcsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEtBQUssU0FBUyxFQUFDO2dCQUMxQyxPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE9BQWUsRUFBRSxHQUFXOztZQUMxQyxJQUFJLGNBQWMsR0FBVyxPQUFPLENBQUM7WUFDckMsSUFBSSxPQUFPLEdBQVksS0FBSyxDQUFDO1lBQzdCLElBQUksSUFBSSxHQUFXLG9CQUFvQixDQUFDO1lBQ3hDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuQyxPQUFPLE1BQU0seUJBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksVUFBVSxFQUFFLENBQUEifQ==