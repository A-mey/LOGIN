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
const httpRequest_services_1 = __importDefault(require("../../common/services/httpRequest.services"));
class LoginHTTPService {
    storeUserData(CreateUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = process.env.storeUserDataURL;
            return yield httpRequest_services_1.default.postRequest(url, CreateUser);
        });
    }
    checkAuth(encryptedPill) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = process.env.checkAuthURL;
            return yield httpRequest_services_1.default.postRequest(url, encryptedPill);
        });
    }
    getUserDetails(emailId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = process.env.getUserDetailsURL;
            let data = { EMAILID: emailId };
            return yield httpRequest_services_1.default.postRequest(url, data);
        });
    }
    checkExistingUser(emailId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = process.env.checkExistingUserURL;
            let data = {
                "EMAILID": emailId
            };
            return yield httpRequest_services_1.default.postRequest(url, data);
        });
    }
    createNewAuth(encryptedPill) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = process.env.storeAuthDataURL;
            return yield httpRequest_services_1.default.postRequest(url, encryptedPill);
        });
    }
}
exports.default = new LoginHTTPService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvc2VydmljZXMvbG9naW4uaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0dBQTJFO0FBTTNFLE1BQU0sZ0JBQWdCO0lBRVosYUFBYSxDQUFDLFVBQXNCOztZQUN0QyxJQUFJLEdBQUcsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFpQixDQUFDO1lBRWhELE9BQU8sTUFBTSw4QkFBa0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBQyxhQUFtQjs7WUFDL0IsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFhLENBQUM7WUFDcEMsT0FBTyxNQUFNLDhCQUFrQixDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDcEUsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLE9BQWU7O1lBQ2hDLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWtCLENBQUM7WUFDekMsSUFBSSxJQUFJLEdBQUcsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7WUFDOUIsT0FBTyxNQUFNLDhCQUFrQixDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsT0FBZTs7WUFDbkMsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBcUIsQ0FBQztZQUM1QyxJQUFJLElBQUksR0FBRztnQkFDUCxTQUFTLEVBQUUsT0FBTzthQUNyQixDQUFBO1lBQ0QsT0FBTyxNQUFNLDhCQUFrQixDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLGFBQW1COztZQUNuQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFpQixDQUFDO1lBQ3hDLE9BQU8sTUFBTSw4QkFBa0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDIn0=