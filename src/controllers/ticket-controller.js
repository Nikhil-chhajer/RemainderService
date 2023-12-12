const TicketService=require('../services/email-service');

const create=async (req,res)=>{
try {
    const response=await TicketService.createnotification(req.body);
    return res.status(201).json({
        success:true,
        data:response,
        err:{},
        message:'Successfully registered an email remainder'
    });
} catch (error) {
    return res.status(500).json({
        success:false,
        data:response,
        err:error,
        message:'unable to registered an email remainder'
    });
}
}
module.exports={
    create
}