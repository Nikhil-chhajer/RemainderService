const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('../config/serverConfig');
const{sendBasicEmail}=require('../services/email-service');
const setupAndStartServer=()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log("Server started at PORT",PORT);
        sendBasicEmail(
            'support@admin.com',
            'nikhil.chhajer80@gmail.com',
            'This is testing email',
            'Hey,how are you,i hope you like the support'
        );

    });
    // sendBasicEmail(
    //     'support@admin.com',
    //     'movie.mela80@gmail.com',
    //     'This is testing email',
    //     'Hey,how are you,i hope you like the support'
    // );
}
setupAndStartServer();