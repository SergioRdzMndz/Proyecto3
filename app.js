import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
//Importando librerias 

dotenv.config(); //Trayendo configuración de librerias
mongoose.connect(process.env.urlBD)//Conectando a MongoDB
.then(()=>{
    console.log("Funciona al vergazo la bd")
})
.catch((error)=>{
    console.log("Ya valio vrg la base D:", error)
}) //Promesa de funcionamiento 

const app = express(); //Creando servidor 
app.use(cors()); //Dando seguridad al server
app.listen(4000, ()=>{
    console.log("Se escucha el servidor correctamente.")
}) //Escuchando al server 

