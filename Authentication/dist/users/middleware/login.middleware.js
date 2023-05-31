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
const debug_1 = __importDefault(require("debug"));
const login_http_service_1 = __importDefault(require("../services/login.http.service"));
const log = (0, debug_1.default)('app:users-controller');
class LoginMiddleware {
    checkExistingUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let _data = yield login_http_service_1.default.checkExistingUser(req.body.EMAILID);
            if (req.body.FLAG == 'LOGIN') {
                if (_data.code == 200) {
                    next();
                }
                else {
                    res.status(400).json({ success: false, code: 400, data: { message: _data.data.message } });
                }
            }
            else if (req.body.FLAG == 'REGISTER') {
                if (_data.code == 200) {
                    res.status(409).json({ success: false, code: 409, data: { message: _data.data.message } });
                }
                else {
                    next();
                }
            }
        });
    }
}
exports.default = new LoginMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL21pZGRsZXdhcmUvbG9naW4ubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQix3RkFBOEQ7QUFFOUQsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0QsTUFBTSxlQUFlO0lBQ1gsaUJBQWlCLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFDbkUsSUFBSSxLQUFLLEdBQUcsTUFBTSw0QkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3RFLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFDO2dCQUN6QixJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO29CQUNuQixJQUFJLEVBQUUsQ0FBQztpQkFDVjtxQkFDSTtvQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLENBQUE7aUJBQzFGO2FBQ0o7aUJBQ0ksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUU7b0JBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFDLENBQUMsQ0FBQTtpQkFDekY7cUJBQ0k7b0JBQ0QsSUFBSSxFQUFFLENBQUM7aUJBQ1Y7YUFDSjtRQUVMLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9