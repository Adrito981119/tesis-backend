const {Usuario} = require('../models')
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')

module.exports={
    //añade un usuario
    post: async(req,res)=>{
     const {username, password} = req.body
        bcrypt.hash(password,10||process.env.SEED).then((hash)=>{
            try{
                Usuario.create({
                    username: username,
                    password: hash
                });
                res.status(200).json('Usuario Creado')
            }catch(error){
                res.status(500).json(error)
            }
     });
    },

    login: async(req,res)=>{
        const {username,password}=req.body

        const user = await Usuario.findOne({where:{username: username}})

        if(!user){
            res.status(500).json({error:'Este usuario no existe'})
        };
        try{
            bcrypt.compare(password,user.password).then((match)=>{
                if(!match){
                    res.status(500).json({error:'Contraseña incorrecta'})
                }else{                  
                const token = sign({username:user.username}, 'string');
                res.status(200).json(token)
                }
                });
        }catch{}
    },
    //determina si el token no es falso
    get: async(req,res)=>{
    res.status(200).json(req.user)
    }

}
