const {Equipos} = require('../models')
const {Plantilla} = require('../models')
const {Personal} = require('../models')

module.exports={
    get: async(req, res)=>{
        try{
        const listEquipos = await Equipos.findAll()
        res.json(listEquipos)
        }catch{
            res.status(500).json({error: 'No existen elementos'})
        }
    },

    getOne: async(req,res)=>{
        const id = req.params.id
        try{
        const t = await Equipos.findOne({where: {id: id}})
        res.status(200).json(t)
        }catch{
        res.status(500).json({error: 'No existe el elemento'})
        }
    },

    getMembers: async(req,res)=>{
        const id = req.params.id
        try{
            const membersCi = await Plantilla.findAll({where: {EquipoId: id}})
            const members = []

            for(let i = 0; i< membersCi.length; i++){
                const m = await Personal.findOne({where: {ci: membersCi[i].PersonalCi}})
                members.push(m)
            }
            res.status(200).json(members)
        }catch{
            res.status(500)
        }
    },

    post: async(req,res)=>{
        const t = req.body
        try{
        await Equipos.create(t)
        res.status(200).json('Añadido correctamente')
        }catch{
         res.status(500)
        }
    },

    addMember: async(req,res)=> {
        const m= {EquipoId: req.params.id, PersonalCi: req.body.ci}
        try{
          await Plantilla.create(m)
          res.status(200).json('Añadido')  
        }catch{
            res.status(500).json('La persona ya esta en este equipo')
        }
    },

    delete: async(req,res)=>{
        const id = req.params.id
        try{
        await Equipos.destroy({
            where: {id: id}
        })
        res.status(200).json('Borrado con exito')
    }catch{
        res.status(500).json({error: 'No se pudo eliminar'})
    }
    },

    deleteMember: async(req,res)=>{
        const id = req.params.id
        const ci = req.params.ci
        try{
            await Plantilla.destroy({
                where: {
                    EquipoId: id,
                    PersonalCi: ci,
                }
            })
            res.status(200).json('Miembro eliminado')
        }catch{
            res.status(500)
        }
    },

    update: async(req,res)=>{
        const id = req.params.id
        const t = req.body
        await Equipos.update({
            id: req.body.id,
            nombre: req.body.nombre
        },
        {
            where: {id: id}
        })
        res.json('Editado con exito')
    }
}