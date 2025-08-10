import { config } from "dotenv";
config();

import bcrypt from "bcrypt";

export async function hashing(pass) {
    try{
        console.log(pass);
        const salt = 10;
        return await bcrypt.hash(pass, salt);
    }
    catch(err){console.log(err);}
}

export async function compare(pass) {
    try {
        let a = await bcrypt.compare(pass, process.env.HASHING);
        return { success: true, data: a };
    }
    catch (err) {
        return { success: false, data: '' };
    }

}

