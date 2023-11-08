import express from "express";
import playerRoutes from "./routes/playerRoutes.js"

const api = new express()
const port = 20055

api.use("/players", playerRoutes)
api.listen(port, () => {
    console.log(`El API ha sido iniciado en el puerto: ${port}`)
})
