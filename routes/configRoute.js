// import {  } from "../"; // עבור CTRL
// import {  } from "./outerRoute.js"; // עבור route other

import { getDataC, initDataC } from "../controllers/complaintControllers.js";
import { router } from "./complaint.Route.js";


export default function configRoutes(app) {

    app.get('/submit' , router);
    //exemple
    app.get('/data' , getDataC);
    app.post('/data' , initDataC);
    // dalll(app);
    app.use('/', (req, res) => {
        res.status(200).json({ msg: 'OK' })
    });


}