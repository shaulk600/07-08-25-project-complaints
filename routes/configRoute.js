import express from "express";
import { initNewComplaint } from "../controllers/complaintControllers.js";
import { getResponseLog } from "../controllers/loginControllers.js";

import { checkData } from "../middleware/complaint.middle.js";
import { checkDataLog } from "../middleware/entering.middle.js";

import {  hashing } from "../utils/login.js";

export default function configRoutes(app) {


    app.post('/submit/', checkData, initNewComplaint);

    app.post('/admin/', checkDataLog, getResponseLog);

    
    app.use('/jj/:id' , async (req , res ,next) => {
       let a = req.queryparams['id'];
       a = await hashing(a);
        console.log(a);
    })
    


}