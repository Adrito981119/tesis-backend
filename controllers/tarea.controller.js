const {Tarea} = require('../models')

module.exports={
    get: async(req, res)=>{
        const listTareas = await Tarea.findAll()
        res.json(listTareas)
    },


    getPendientes: async(req,res)=>{
        try{
            const listTareas =await Tarea.findAll(
                {
                    where:{
                        cumplida: false
                    }
                }
            )
            res.status(200).json(listTareas)
        }catch{
            res.status(500).json({error: 'No hay tareas pendientes'})
        }
    },

    getCumplidas: async(req,res)=>{
        try{
            const listTareas = await Tarea.findAll(
                {
                    where:{
                        cumplida: true
                    }
                }
            )
            res.status(200).json(listTareas)
        }catch{
            res.status(500)
        }
    },

    getOne: async(req,res)=>{
        const id = req.params.ci
        const tarea = await Tarea.findOne({where: {id: id}})
        res.json(person)
    },

    post: async(req,res)=>{
        const tarea = req.body
        await Tarea.create(tarea)
        res.json('Creado con exito')
    },

    delete: async(req,res)=>{
        const id = req.params.id
        await Tarea.destroy({
            where: {id}
        })
        res.json('Borrado con exito')
    },
    update: async(req,res)=>{
        const id = req.params.id
        const {fecha,hora,equipo,descripcion} = req.body
        await Individuos.update({
        fecha,hora,equipo,descripcion
        },
        {
            where: {id: id}
        })
        res.json('Editado con exito')
    },

    //operaciones relacionadas al registro
    cumplir: async(req,res)=>{
        const id = req.params.id
        const {cumplida, fechacumplida} = req.body
        try{
            await Tarea.update({
                cumplida, fechacumplida
            },
            {
                where:{id:id}
            }
            )
            res.status(200).json('Tarea anotada como cumplida')
        }catch{
            res.status(500)
        }
    }

}