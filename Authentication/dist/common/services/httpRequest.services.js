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
const axios_1 = __importDefault(require("axios"));
class HttpRequestService {
    getRequest(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let config = {
                method: 'get',
                url: url,
                data: {}
            };
            try {
                return yield (0, axios_1.default)(config);
            }
            catch (e) {
                return e.message;
            }
        });
    }
    postRequest(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let config = {
                method: 'post',
                url: url,
                data: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            try {
                let _data = yield (0, axios_1.default)(config);
                return _data.data;
            }
            catch (e) {
                return e;
            }
        });
    }
}
exports.default = new HttpRequestService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFJlcXVlc3Quc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21tb24vc2VydmljZXMvaHR0cFJlcXVlc3Quc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFFakQsTUFBTSxrQkFBa0I7SUFDZCxVQUFVLENBQUMsR0FBVzs7WUFDeEIsSUFBSSxNQUFNLEdBQXVCO2dCQUM3QixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsR0FBRztnQkFDUixJQUFJLEVBQUUsRUFBRTthQUNYLENBQUM7WUFDRixJQUFJO2dCQUNBLE9BQU8sTUFBTSxJQUFBLGVBQUssRUFBQyxNQUFNLENBQUMsQ0FBQzthQUM5QjtZQUNELE9BQU0sQ0FBTSxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNwQjtRQUNMLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFXLEVBQUUsSUFBWTs7WUFDbkMsSUFBSSxNQUFNLEdBQXVCO2dCQUM3QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxHQUFHLEVBQUUsR0FBRztnQkFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sRUFBRTtvQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNuQzthQUNOLENBQUM7WUFDRixJQUNBO2dCQUNJLElBQUksS0FBSyxHQUFHLE1BQU0sSUFBQSxlQUFLLEVBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQzthQUNyQjtZQUNELE9BQU0sQ0FBTSxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7UUFDVCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksa0JBQWtCLEVBQUUsQ0FBQSJ9