const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('../config/serverConfig');
const TicketController = require('../controllers/ticket-controller')
const jobs = require('./job');
const { sendBasicEmail } = require('../services/email-service');
const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.post('/api/v1/tickets',TicketController.create);
    app.listen(PORT, () => {
        console.log("Server started at PORT", PORT);
        // sendBasicEmail  (
        //     'support@gmail.com',
        //     'nikhil.chhajer80@gmail.com',
        //     'This is testing email',
        //     'Hey,how are you,i hope you like the support'
        // );
        jobs();
    });

}
setupAndStartServer();