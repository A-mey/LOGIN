// we import express to add types to the request/response objects from our controller functions
import express from 'express';

// we import our newly created user services
import loginService from '../services/login.service';
import loginHttpService from '../services/login.http.service';

// we use debug with a custom context as described in Part 1
import debug from 'debug';

import {OtpObject} from '../../common/types/otpObject.types'

import otpService from '../../common/services/otp.services';

import {Pill} from '../types/pill.type'
import { CreateUser } from '../types/create.user.type';
import { error } from 'console';
import { Response } from '../../common/types/response.types';

import Nodemailer from '../../common/services/mailer.services';

const log: debug.IDebugger = debug('app:users-controller');
class UsersController {

    async sendOTP(req: express.Request, res: express.Response) {
        let emailId = req.body.EMAILID;
        const otpObject: OtpObject = await otpService.createOTP(emailId);
        let emailResponse: any = await otpService.sendOtpMail(emailId, otpObject.otp!);
        // let emailResponse = await Nodemailer.sendMail(emailRecipient, subject, body);
        let response: Response;
        let status: number;
        console.log("emailResponse", emailResponse);
        if (!emailResponse) {
            return res.send("end");
        }
        if (emailResponse.response.includes("250 2.0.0 OK")) {
            status = 200;
            response= {success: true, code: status, data: {message: "OTP sent successfully", data: {fullHash: otpObject.fullHash}}}
        }
        else {
            status = 400
            response = {success: false, code: status, data: {message: "Unable to send OTP"}}
            
        }
        res.status(status).json(response);
    }

    async validateOTP(req: express.Request, res: express.Response) {
        const validation = await loginService.otpValidation(req.body.EMAILID, req.body.HASH, req.body.OTP)
        if (validation == true) {
            res.status(204).json({success: true, code: 204, data: {message: "OTP matched"}});
        }
        else if (validation == false) {
            res.status(401).json({success: false, code: 401, data: {message: "OTP did not match"}});
        }
    }

    async createUser(req: express.Request, res: express.Response) {
        let emailId = req.body.EMAILID;
        let password = req.body.PASSWORD;
        let encryptedPill: Pill = await loginService.createAuthPill(emailId, password);
        let userData: CreateUser = {EMAILID: req.body.EMAILID, FIRSTNAME: req.body.FIRSTNAME, LASTNAME: req.body.LASTNAME }
        return Promise.all([loginHttpService.storeUserData(userData), loginHttpService.createNewAuth(encryptedPill)]).then((data) => {
            if (data[0].code == 201 && data[1].code == 201) {
                res.status(201).json({success: true, code: 201, data: {message: "User created successfully"}});
            }
            else {
                res.status(400).json({success: false, code: 400, data: {message: "Something went wrong"}});
            }
        }).catch((error) => {
            console.log(error.message)
            res.status(400).json({success: false, code: 400, data: {message: error}});
        })
    }

    async loginUser(req: express.Request, res: express.Response) {
        let emailId = req.body.EMAILID;
        let password = req.body.password;
        let encryptedPill: Pill = await loginService.createAuthPill(emailId, password);
        let authenticateUser = await loginHttpService.checkAuth(encryptedPill);
        if (authenticateUser.code == 200) {
            // res.status(200).send();
            let userData = await loginHttpService.getUserDetails(emailId);
            if (userData){
                res.status(200).json({success: true, code: 200, data: {message: "Logged in successfully", data: userData.data!.data!}});
            }
            else {
                res.status(400).json({success: false, code: 401, data: {message: "Something went wrong"}});
            }
        }
        else {
            res.status(401).json({success: false, code: 401, data: {message: "Invalid username/password"}});
        }
    }
}

export default new UsersController();