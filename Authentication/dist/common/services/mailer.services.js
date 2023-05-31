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
const nodemailer_1 = __importDefault(require("nodemailer"));
class Nodemailer {
    constructor() { }
    static sendMail(to, subject, html) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield this.transporter.sendMail({
                    from: process.env.EMAILID,
                    to,
                    subject,
                    html
                }, (err, info) => {
                    if (err) {
                        // console.log(err);
                        reject(err);
                    }
                    else {
                        // console.log(info);
                        resolve(info);
                    }
                });
            }));
        });
    }
}
Nodemailer.transporter = nodemailer_1.default.createTransport({
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10),
    secure: true,
    service: process.env.SERVICE,
    auth: {
        user: process.env.EMAILID,
        // pass: 'M1crobl0g',
        pass: process.env.PASSWORD //"pfyokviswhhbofap"
    }
});
exports.default = Nodemailer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbGVyLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haWxlci5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFvQztBQUVwQyxNQUFNLFVBQVU7SUFjZCxnQkFBZSxDQUFDO0lBRWhCLE1BQU0sQ0FBTyxRQUFRLENBQUMsRUFBVSxFQUFFLE9BQWUsRUFBRSxJQUFZOztZQUU3RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQU8sT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUUzQyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO29CQUM1QixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO29CQUN6QixFQUFFO29CQUNGLE9BQU87b0JBQ1AsSUFBSTtpQkFDTCxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO29CQUNmLElBQUksR0FBRyxFQUFFO3dCQUNQLG9CQUFvQjt3QkFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO3FCQUNaO3lCQUNJO3dCQUNILHFCQUFxQjt3QkFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUNkO2dCQUNQLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTs7QUFuQ2dCLHNCQUFXLEdBQTJCLG9CQUFVLENBQUMsZUFBZSxDQUFDO0lBQzlFLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7SUFDdEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUssRUFBRSxFQUFFLENBQUM7SUFDckMsTUFBTSxFQUFFLElBQUk7SUFDWixPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBRTVCLElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87UUFDekIscUJBQXFCO1FBQ3JCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0I7S0FDbEQ7Q0FDSixDQUFDLENBQUM7QUEyQkgsa0JBQWUsVUFBVSxDQUFDIn0=