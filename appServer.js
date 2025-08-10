import express from "express";
import dotenv from "dotenv";
dotenv.config();

import configRoute from "./routes/configRoute.js";

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configRoute(app);


//לעשות איזשהו middleware
//  שהוא לא פונה אל נתיב אחר - אל מערכת הקבצים הפנימית
//  /או שיש לו הרשאות גישה

app.use(express.static('./public/')); //אני פותח את התיקייה הזאת

app.use((req, res) => {
    res.status(404).json({ msg: 'Route not found' })
})

app.listen(port, () => {
    console.log(`server to -other- running port: ${port}`);
})