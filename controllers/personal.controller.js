const {Personal} = require('../models')

module.exports={
    get: async(req, res)=>{
        try{
        const listPersonal = await Personal.findAll({
            order:[['nombre','ASC']]
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

    post: async(req,res)=>{
        const person = req.body
        try{
        await Personal.create(person)
        res.status(200).json('Añadido correctamente')
        }catch{
        res.status(500).json({error: 'La persona ya existe'})
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
        const {ci,nombre,pApellido,sApellido,telefono,email,cargo} = req.body
        try{
        await Personal.update({
        ci,nombre,pApellido,sApellido,telefono,email,cargo
        },
        {
            where: {ci: id}
        })
        res.status(200).json('Editado con exito')
    }catch{
        res.status(500).json({error: 'Error'})
    }
    }
}