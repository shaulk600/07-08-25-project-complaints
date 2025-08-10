import { initNewComplaint } from "../controllers/complaintControllers.js";


export default function configRoutes(app) {

   
    app.post('/submit/', initNewComplaint);

    

}