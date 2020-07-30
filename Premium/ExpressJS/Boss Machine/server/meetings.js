const express = require('express');
const meetingsRouter = express.Router();

module.exports = meetingsRouter;

// create an object of methods imported from the ./db.js file
const {
    createMeeting,
    getFromDatabaseById,
    getAllFromDatabase,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase
} = require('./db');




// Get an array of all meetings
meetingsRouter.get('/',(req,res,next)=>{
    const allMeetings = getAllFromDatabase('meetings')
    res.send(allMeetings);
});


// create a new meeting
meetingsRouter.post('/',(req,res,next)=>{
    const newMeeting = createMeeting();
    res.status(201).send(newMeeting);
    
});


// delete a single meeting by id
meetingsRouter.delete('/',(req,res,next)=>{
    deleteAllFromDatabase('meetings');
    res.status(204).send();
});



