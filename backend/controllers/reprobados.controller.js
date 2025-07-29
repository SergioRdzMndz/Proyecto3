import { Tabla } from "../models/reprobados.model.js";

Tabla.create({
    name:"Panchito",
    edad : 24,
    calificacion:3.4
},
{
    name:"Alex",
    edad:20,
    calificacion:4.4
},
{
    name: "Juan",
    edad:18,
    calificacion:0
})

export const Test = ()=>{
    console.log("Llamando al controlador desde app.js correctamente")
}
