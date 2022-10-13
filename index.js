//declaraciones
const express = require('express');
const app = express()
const db = require('./models')
const cors = require('cors')

//settings port and CORS, handling JSON errors
app.set('port',process.env.PORT || 3001);
app.use(express.json())
app.use(cors())

//importar rutas
const coleccionRoute = require("./routes/coleccion.routes")
const individuoRoute = require("./routes/individuos.routes")
const personalRoute = require("./routes/personal.routes")
const equipoRoute = require("./routes/equipo.routes")
const tareaRoute = require("./routes/tarea.routes")
const usersRoute = require("./routes/usuario.routes")


//establecer rutas
app.use("/api/coleccion",coleccionRoute) 
app.use("/api/personal",personalRoute)
app.use("/api/equipos",equipoRoute)
app.use("/api/tareas",tareaRoute)
app.use("/auth",usersRoute)


//sincronizacion automatica con la base de datos y arranque
db.sequelize.sync().then(()=>{
    app.listen(app.get('port'),(error)=>{
        error? console.log("error al inicar servidor: " + error): console.log("Servidor iniciado en el puerto: "+ app.get('port'))
    });  
})


