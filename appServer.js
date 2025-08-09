import express from "express";
import dotenv from "dotenv";
dotenv.config();

import configRoute from "./routes/configRoute.js";

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configRoute(app);


app.use(express.static('./public/complaint.html'));
app.use((req, res) => {
    res.status(404).json({ msg: 'Route not found' })
})

app.listen(port, () => {
    console.log(`server to -other- running port: ${port}`);
})