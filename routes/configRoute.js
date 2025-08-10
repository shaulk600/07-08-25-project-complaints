import { initNewComplaint } from "../controllers/complaintControllers.js";


export default function configRoutes(app) {


    app.post('/submit/', (req, res, next) => {
        console.log(req.body);
        next();
    }
        , initNewComplaint);



}