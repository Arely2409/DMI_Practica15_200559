import express from "express";
import playerRoutes from "./routes/playerRoutes.js"
import dbConnection from "./config/db.js";
import Player from "./models/Player.js";
import bodyParser from "body-parser";

const api = new express()
const port = 20055

api.use("/players", playerRoutes)

api.use(bodyParser.urlencoded({ extended: false}))
api.listen(port, () => {
    console.log(`El API ha sido iniciado en el puerto: ${port}`)
})

try {
    console.log("STATUS -> Intentando conectarse a la BD.....");
    dbConnection.authenticate();
    console.log("STATUS -> Conexion a la BD");
    console.log("STATUS -> Sincronizando la BD con los objetos existentes");
    dbConnection.sync();
    console.log("STATUS -> BD lista para realizar operaciones");
} catch (error) {
    console.error("Han ocurrido errores intentando conectarse a la BD");
    console.error(error);
}