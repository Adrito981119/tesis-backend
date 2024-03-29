const {Coleccion,RegistroColeccion} = require('../models')

module.exports={
    get: async(req, res)=>{
        try{
        const listColeccion = await Coleccion.findAll({
            order: [['id','ASC']]
        })
        res.status(200).json(listColeccion)
        }
        catch{
            res.status(500).json({error: 'No existen colecciones'})
        }
    },

    getOne: async(req,res)=>{
        const id = req.params.id
        try{
        const col = await Coleccion.findOne({where: {id: id}})
        res.json(col)
        }
        catch{
            res.status(500).json({error: 'La coleccion no existe'})
        }
    },

    getRecord: async(req,res)=>{
        try{
            const prevStates = await RegistroColeccion.findAll()
            res.status(200).json(prevStates)
        }catch{
            res.status(500)
        }
    },

    record: async(req,res)=>{
        const prevState = req.body
        try{
         await RegistroColeccion.create(prevState)
         res.status(200).json('Registrado')
        }
        catch{
         res.status(500).json({error: 'Ha ocurrido un error en el registro'})
        }
     },

    post: async(req,res)=>{
        const col = req.body
        try{
        await Coleccion.create(col)
        res.status(200).json('Añadido con exito')
        } catch{
            res.json({error: 'Ya existe una coleccion con ese id'})
        }
    },
    delete: async(req,res)=>{
        const id = req.params.id
        try{
        await Coleccion.destroy({
            where: {id: id}
        })
        res.status(200).json('Borrado con exito')
        }catch{
            res.status(500).json({error: 'No se pudo eliminar'})
        }
    },
    update: async(req,res)=>{
        const index = req.params.id
        const {id,nombreVulgar,nombreCientifico,nombreFamilia,posicion,cant} = req.body
        try{
        await Coleccion.update({
            id,nombreVulgar,nombreCientifico,nombreFamilia,posicion,cant
        },
        {
            where: {id: index}
        })
        res.status(200).json('Editado con exito')
    }
    catch{
        res.status(500).json('Error, no se puede editar la informacion')
    }
    }
}