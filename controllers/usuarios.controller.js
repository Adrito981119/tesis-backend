const {Usuario} = require('../models')
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')
const {Op} = require('sequelize')

module.exports={
    //añade un usuario
    post: async(req,res)=>{

        const {username, password,role,owner} = req.body
        try{   
          const user = await Usuario.findOne(
                {where: {PersonalCi: owner}}
            )
            if(!user){
                await Usuario.create({
                    username: username,
                    password: await bcrypt.hash(password,10||process.env.SEED),
                    role: role,
                    PersonalCi: owner})
                    res.status(200).json('Usuario Creado')  
            }else{
                res.json({error: 'Esta persona ya tiene una cuenta asignada'})
            }
    }
    catch{
        res.status(500)
    }
    },

    login: async(req,res)=>{
        const {username,password}=req.body

        const user = await Usuario.findOne({where:{username: username}})

        if(!user){
            res.json({error:'Este usuario no existe'})
        };
        try{
            bcrypt.compare(password,user.password).then((match)=>{
                if(!match){
                    res.json({error:'Contraseña incorrecta'})
                }else{                  
                const token = sign({username:user.username}, 'string',{expiresIn:'8h'});
                res.status(200).json({user: user.username, token: token,rol: user.role})
                }
                });
        }catch{}
    },
    //determina si el token no es falso
    get: async(req,res)=>{
        try{
            const user = await Usuario.findOne(
                {
                    where:{username: req.header('user')}
                }
            )
            res.status(200).json(user.role)
        }catch{
            res.status(500)
        }

    },


    getUsers: async(req,res)=>{
        try{
            const users = await Usuario.findAll({
                where:{username:{[Op.not]: 'admin'}}
            })
            res.status(200).json(users)
        }catch{
            res.status(500).json('Lista Vacia')
        }
    },

    deleteUser: async(req, res)=>{
        const id = req.params.id
        
        try{
        await Usuario.destroy({
            where:{username: id}
        })
        res.status(200).json("Eliminado")
    }catch{
        res.status(500)
    }
},

 changePassword: async(req,res)=>{
    const id = req.params.id
    const {oPass,nPass} = req.body
    try{
       const user = await Usuario.findOne({
           where:{username: id}
       })

       await bcrypt.compare(oPass,user.password).then((match)=>{
        if(!match){
            res.json({error: 'La contraseña anterior no es correcta'})
        }
       })
       const u = {
           username: user.username,
           password: await bcrypt.hash(nPass,10||process.env.SEED),
           PersonalCi: user.PersonalCi
       }
       await Usuario.update(u,
           {
               where: {username: id}
           }
           )
        res.status(200).json('Se ha cambiado la contraseña')
    }catch{
       res.status(500)
    }
   },

   resetPassword: async(req,res)=>{
    const id = req.params.id
    try{
       const user = await Usuario.findOne({
           where:{username: id}
       })
       const u = {
           id:user.id,
           username: user.username,
           password: await bcrypt.hash(user.username,10||process.env.SEED),
           owner: user.owner
       }
       console.log(u)
       await Usuario.update(u,
           {
               where: {username: id}
           }
           )
        res.status(200).json('La contraseña se ha reiniciado con exito')
    }catch{
       res.status(500)
    }
   }

}
