const {verify} = require('jsonwebtoken')

const validateToken=(req,res,next)=>{
    const token = req.header('token');
    if(!token){
        res.status(500).json({error:'Not logged'})
    }
    try{
        const validToken = verify(token,'string');
        if(validToken){
            return next()
        }
    }catch{
        res.status(500).json({error:'Token invalid'})
    }
    
};
module.exports= {validateToken}