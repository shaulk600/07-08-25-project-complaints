import { initNewComplaint } from "../controllers/complaintControllers.js";

import { checkData } from "../middleware/complaint.middle.js";

export default function configRoutes(app) {


    app.post('/submit/', checkData, (req, res, next) => {
        console.log(req);
        next();
    }
        , initNewComplaint);



}