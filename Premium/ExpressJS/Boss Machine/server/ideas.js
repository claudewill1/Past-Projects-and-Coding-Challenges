const ideasRouter = require('express').Router();

module.exports = ideasRouter;

// create an object of methods imported from the ./db.js file
const {
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
} = require('./db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea');


ideasRouter.param('id', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
      req.idea = idea;
      next();
    } else {
      res.status(404).send();
    }
  });


// Get an array of all ideas
ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});





// Add new idea to database
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
    
});

// Get a single idea by id
ideasRouter.get('/:id', (req, res, next) => {
    res.send(req.idea);
});

// update a single idea by id
ideasRouter.put('/:id', checkMillionDollarIdea, (req, res, next) => {
    const updatedInstance = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedInstance);
       
});

// delete single minion by id
ideasRouter.delete('/:id', (req, res, next) => {
    const deletedIdea = deleteFromDatabasebyId('ideas', req.params.id);
    if (deletedIdea) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});




