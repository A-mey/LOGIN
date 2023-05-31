import express, { NextFunction, Request } from "express";
import { errorMessageObject } from "../../common/types/errorMsgObject.types";
import loginValidationSchema from "../schema/login.validation.schema";
import { Response } from "../../common/types/response.types";

class LoginValidationMiddleware {
    async checkcreateOTPSchema(req: Request, res: express.Response, next: NextFunction) {
        const errorRes: errorMessageObject = loginValidationSchema.validateRequest(req.body, "createOTP")
        if (errorRes.isValid) {
            // console.log('Data is valid');
            next();
          } else {
            let response: Response = {success: false, code: 400, data: {message: errorRes.errorMsg}}
            res.status(400).json(response);
        }
    }

    async checkregisterUserSchema(req: Request, res: express.Response, next: NextFunction) {
        const errorRes: errorMessageObject = loginValidationSchema.validateRequest(req.body, "registerUser")
        if (errorRes.isValid) {
            // console.log('Data is valid');
            next();
          } else {
            let response: Response = {success: false, code: 400, data: {message: errorRes.errorMsg}}
            res.status(400).json(response);
        }
    }

    async checkValidateOTPSchema(req: Request, res: express.Response, next: NextFunction) {
        const errorRes: errorMessageObject = loginValidationSchema.validateRequest(req.body, "validateOTP")
        if (errorRes.isValid) {
            // console.log('Data is valid');
            next();
          } else {
            let response: Response = {success: false, code: 400, data: {message: errorRes.errorMsg}}
            res.status(400).json(response);
        }
    }

    async checkloginUserSchema(req: Request, res: express.Response, next: NextFunction) {
        const errorRes: errorMessageObject = loginValidationSchema.validateRequest(req.body, "loginUser")
        if (errorRes.isValid) {
            // console.log('Data is valid');
            next();
          } else {
            let response: Response = {success: false, code: 400, data: {message: errorRes.errorMsg}}
            res.status(400).json(response);
        }
    }
}

export default new LoginValidationMiddleware()