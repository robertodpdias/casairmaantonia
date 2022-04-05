const express = require('express');
const route = express.Router();

//IMPORTS
const agendaController = require('../controller/agendaController');


//ENDPOINTS AGENDA
route.get('/agenda', agendaController.read);
route.get('/agenda/:id', agendaController.read);
route.post('/agenda', agendaController.create);
route.put('/agenda/:id', agendaController.update);
route.delete('/agenda/:id', agendaController.remove);