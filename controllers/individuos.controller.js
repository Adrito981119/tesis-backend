const {Individuos} = require('../models')

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

    post: async(req,res)=>{
        const ind = req.body
        try{
        await Individuos.create(ind)
        res.json('Añadido correctamente')
        }catch{
            res.status(500).json({error: 'Ya existe este elemento'})
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
    }
}