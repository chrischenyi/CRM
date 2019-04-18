import { addNewContact, getContacts, 
        getContactByID, updateContact, deleteContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
    
    // POST request
    .post(addNewContact);

    app.route('/contact/:contactId')
    // GET specific ID
    .get(getContactByID)

    // PUT request
    .put(updateContact)

    // DELETE request
    .delete(deleteContact);
}

export default routes;
