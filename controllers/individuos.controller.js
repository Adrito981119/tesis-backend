const {Individuos} = require('../models')
const {RegistroIndividuos} = require('../models')

module.exports={
    get: async(req, res)=>{
        try{
        const listIndividuos = await Individuos.findAll()
        res.status(200).json(listIndividuos)
        }catch{
        res.json({error: 'No existen individuos'}) 
        }
    },

    getOne: async(req,res)=>{
        const id = req.params.id
        try{
        const ind = await Individuos.findOne({where: {id}})
        res.status(200).json(ind)
        }catch{
            res.status(500).json({error: 'Este individuo no existe'})
        }
    },

    getbyColeccion: async(req, res)=>{
        const id = req.params.id
        try{
            const individuos = await Individuos.findAll({where: {coleccionID : id}})
            res.json(individuos)
        }catch{
            res.status(500).json({error: 'Esta coleccion no tiene individuos'})
        }
    },

    getRecord: async(req,res)=>{
        try{
            const prevStates = await RegistroIndividuos.findAll()
            res.status(200).json(prevStates)
        }catch{
            res.json({error:'Error de registro'})
        }
    },

    getOneRecord: async(req,res)=>{
        const id = req.params.id
        try{
            const prevStates = await RegistroIndividuos.findAll(
                {
                    where: {id}
                }
            )
            res.status(200).json(prevStates)
        }catch{
            res.json({error:'Error de registro'})
        }
    },

    post: async(req,res)=>{
        const ind = req.body
        try{
        await Individuos.create(ind)
        res.json('Añadido correctamente')
        }catch{
            res.status(500).json({error: 'Ya existe este elemento'})
        }
    },

    record: async(req,res)=>{
        const prevState = req.body
        try{
         await RegistroIndividuos.create(prevState)
         res.status(200).json('Registrado')
        }
        catch{
         res.status(500).json({error: 'Ha ocurrido un error en el registro'})
        }
     },

     
    delete: async(req,res)=>{
        const id = req.params.id
        try{
        await Individuos.destroy({
            where: {id}
        })
        res.status(200).json({error: 'Eliminado con exito'})
        }catch{
            res.json({error: 'No se pudo eliminar'})
        }
    },
    update: async(req,res)=>{
        const id = req.params.id
        try{
        await Individuos.update({
            id: req.body.id,
            nombreVulgar: req.body.nombreVulgar,
            nombreCientifico: req.body.nombreCientifico,
            nombreFamilia: req.body.nombreFamilia,
            posicion: req.body.posicion,
            diametro: req.body.diametro,
            altura: req.body.altura,
            coleccion: req.body.coleccion
        },
        {
            where: {id: id}
        })
        res.status(200).json('Editado con exito')
    }catch{
        res.status(500).json({error: 'No se pudo editar'})
    }
    },
}