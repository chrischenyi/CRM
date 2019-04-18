import mongoose from 'mongoose';
import { ContactScheme } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactScheme);

// Create controller to add contacts to db [save]
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// Create controller to get contacts [find]
export const getContacts = (req, res) => {
    Contact.find((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// Create controller to get contact by Id [findById]
export const getContactByID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// Create controller to update contact by Id [findByIdAndUpdate]
export const updateContact = (req, res) => {
Contact.findByIdAndUpdate(
    { _id: req.params.contactId}, req.body, { new:true },
    (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// Create controller to delete contact by Id [remove]
export const deleteContact = (req, res) => {
    Contact.remove(
        { _id: req.params.contactId}, (err, contac) => {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Successfully delete'});
        });
    }