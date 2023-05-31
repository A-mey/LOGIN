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
const crypto_js_1 = __importDefault(require("crypto-js"));
const crypto_1 = __importDefault(require("crypto"));
const sha256_1 = __importDefault(require("crypto-js/sha256"));
const crypto_2 = require("crypto");
class EncryptionService {
    createSalt() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, crypto_2.randomBytes)(16).toString("hex");
        });
    }
    md5Encryption(value) {
        return __awaiter(this, void 0, void 0, function* () {
            return crypto_js_1.default.MD5(value).toString();
        });
    }
    scrypt(value, salt) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, crypto_2.scryptSync)(value, salt, 32).toString("hex");
        });
    }
    aesEencryption(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return crypto_js_1.default.AES.encrypt(value, key).toString();
        });
    }
    sha256Encryption(value) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, sha256_1.default)(value).toString();
        });
    }
    hmac(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return crypto_1.default.createHmac("sha256", key).update(value).digest("hex");
        });
    }
}
exports.default = new EncryptionService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdGlvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9lbmNyeXB0aW9uLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQWlDO0FBRWpDLG9EQUE0QjtBQUU1Qiw4REFBc0M7QUFFdEMsbUNBQWlEO0FBRWpELE1BQU0saUJBQWlCO0lBQ2IsVUFBVTs7WUFDWixPQUFPLElBQUEsb0JBQVcsRUFBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLEtBQWE7O1lBQzdCLE9BQU8sbUJBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNwQyxPQUFPLElBQUEsbUJBQVUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsR0FBVyxFQUFFLEtBQWE7O1lBQzNDLE9BQU8sbUJBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxLQUFhOztZQUNoQyxPQUFPLElBQUEsZ0JBQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFFSyxJQUFJLENBQUMsR0FBVyxFQUFFLEtBQWE7O1lBQ2pDLE9BQU8sZ0JBQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEUsQ0FBQztLQUFBO0NBV0o7QUFFRCxrQkFBZSxJQUFJLGlCQUFpQixFQUFFLENBQUEifQ==