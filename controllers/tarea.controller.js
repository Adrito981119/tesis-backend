const {Tarea,Mantenimiento} = require('../models')


module.exports={
    get: async(req, res)=>{
        const listTareas = await Tarea.findAll(
            {
                include: Mantenimiento
            }
        )
        res.json(listTareas)
    },

    getPendientes: async(req,res)=>{
        try{
            const listPendientes = await Tarea.findAll(
                {
                    include: Mantenimiento,
                    where: {cumplida: false}
                }
            )
            res.json(listPendientes)
        }catch{
            res.status(500)
        }
    },

    getCumplidas: async(req,res)=>{
        try{
            const listCumplidas = await Tarea.findAll(
                {
                    include: Mantenimiento,
                    where: {cumplida: true}
                }
            )
            res.json(listCumplidas)
        }catch{
            res.status(500)
        }
    },


    post: async(req,res)=>{
        const tarea = req.body
        try{
            await Tarea.create(tarea,
                {include: Mantenimiento}
                )
            res.status(200)
        }catch{
            res.status(500)
        }
    },

    delete: async(req,res)=>{
        const id = req.params.id
        try{
            await Tarea.destroy({
                where: {id}
            })
            res.json('Borrado con exito')
        }catch{
            res.status(500)
        }

    },

    cumplir: async(req,res)=>{
    const idTarea = req.params.idTarea
    const data = req.body
        console.log(data)
        try{
            await Tarea.update(data,{where:{id: idTarea}})
            res.json('Cumplida')
        }catch{
            res.json('No se pudo cumplir')
        }
    },
}