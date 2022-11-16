const {Personal, RegistroPersonal} = require('../models')
const {Op} = require('sequelize')

module.exports={
    get: async(req, res)=>{
        try{
        const listPersonal = await Personal.findAll({
            order:[['fullname','ASC']]
        })
        res.status(200).json(listPersonal)
        }catch{
            res.status(500).json({error: 'La lista de personal esta vacia'})
        }
    },

    getOne: async(req,res)=>{
        const ci = req.params.ci
        try{
        const person = await Personal.findOne({where: {ci: ci}})
        res.status(200).json(person)
        }catch{
            res.status(500).json({error: 'Esta persona no existe'})
        }
    },

    getRecord: async(req, res)=>{
        try{
        const record = await RegistroPersonal.findAll({
            order:[['fullname','ASC']]
        })
        res.status(200).json(record)
        }catch{
            res.status(500)
        }
    },

    post: async(req,res)=>{
        const person = req.body
        try{
        await Personal.create(person)
        res.status(200).json('Añadido correctamente')
        }catch{
        res.status(500).json({error: 'La persona ya existe'})
        }
        
    },

    record: async(req,res)=>{
        const person = req.body
        try{
        await RegistroPersonal.create(person)
        res.status(200).json('Cread0')
        }catch{
        res.status(500)
        }
        
    },
    delete: async(req,res)=>{
        const ci = req.params.ci
        try{
        await Personal.destroy({
            where: {ci: ci}
        })
        res.json('Borrado con exito')
        }catch{
            res.status(500).json({error: 'No se pudo eliminar'})
        }
    },

    update: async(req,res)=>{
        const id = req.params.ci
        console.log(req.body)
        console.log(id)
        const {ci,fullname,telefono,email,cargo,usuario} = req.body
        console.log(usuario)
        try{
        await Personal.update({
        ci,fullname,telefono,email,cargo,usuario
        },
        {
            where: {ci: id}
        })
        res.status(200).json('Editado con exito')
        }catch{
            res.status(500).json({error: 'Error'})
        }
    },


    getUsers: async(req,res)=>{
        const users = await Personal.findAll(
            {
                where:{usuario: {[Op.not]: null}}
            }
        )
        res.json(users)
    }
}