import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
dotenv.config();

//כרגע עובד- ניתן לשקול בהמשך הוספת מודל

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let db;

export async function connectToDB() {
    try {
        await client.connect();
        db = client.db(process.env.MONGODB_DB_NAME); //name db
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Connection error:', err.message);
    }
}

/**
 * 
 * @returns a function to returned connect to mongo DB
 */
export function getDB() {
    if (!db) {
        throw new Error('file: db/connect.js, worning: Database not connected');
    }
    return db;
}
