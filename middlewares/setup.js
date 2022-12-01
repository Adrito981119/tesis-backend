const exppress = require('express')
const {Usuario} = require('../models')
const bcrypt = require('bcrypt')

const setup = async()=>{
    const usuarios = await Usuario.findAll()
    if(usuarios.length === 0){
        await Usuario.create(
            {
                username: process.env.ADMIN_USERNAME,
                password: await bcrypt.hash(process.env.ADMIN_PASSWORD,10),
                role: 0
            }
        )
    }
}

module.exports= {setup}