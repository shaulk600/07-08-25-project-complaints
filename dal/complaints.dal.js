// import { type } from "os";
import { connectToDB, getDB } from "../db/connect.js";
import express from "express";

await connectToDB();

const db = getDB();
const complaintsCollection = db.collection('complaints');

//this method after middle to val

// יצירת משתמש
//צריך סידור

export async function initData(objData) {
    try {
        const result = await complaintsCollection.insertOne(objData);
        console.log('typeof result: ' + typeof result);

        return { success: 'ok', res: result };
    } catch (err) {
        console.log(`${err.message}`);
        return { success: 'field', res: '' };
    }
}

export async function getData() {
    try {
        const result = await complaintsCollection
            .find()
            .toArray();

        return { success: 'ok', res: result };
    } catch (err) {
        console.log(`${err.message}`);
        return { success: 'field', res: '' };
    }
}


export default function dalll(app) {


    app.post('/users', async (req, res) => {

        try {
            const result = await complaintsCollection.insertOne(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });



    // שליפת משתמשים
    //צריך סידור
    app.get('/users', async (req, res) => {

        try {
            const users = await complaintsCollection.find().toArray();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });


}