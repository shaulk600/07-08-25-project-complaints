import { compare } from "../utils/login.js";

export async function checkDataLog(req, res, next) {
    const userName = req.body['user_name'];
    const pass = req.body['pass'];

    const responseHash = await compare(pass);
    if (responseHash.success === true);
    const obj = {
        user_name: userName,
        role: 'admin'
    }
    req.body.data = obj;
    next();
}



