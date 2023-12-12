const sender=require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

const repo=new TicketRepository();
// const sendBasicEmail=async (mailfrom,mailTo,mailSubject,mailBody)=>{
//     try {
//         const response=await sender.sendMail({
//             from:mailfrom,
//             to:mailTo,
//             subject:mailSubject,
//             text:mailBody
//         });
//         console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
  
// }
const fetchpendingEmails=async (timestamp)=>{
    try {
        const response=await repo.get({status:"PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }

}
const createnotification=async(data)=>{
    try {
        const response=await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
        
    }

}
const updateTicket=async(ticketId,data)=>{
    try {
        const response=await repo.update(ticketId,data);
        return response;
    } catch (error) {
        console.log(error);
        
    }

}

module.exports={
    //sendBasicEmail,
    fetchpendingEmails,
    createnotification,
    updateTicket
} 