//import { markTimeline } from "console";

const express = require('express');
const app=express();     
const cors= require('cors');

const hostname = '127.0.0.1';
const port = 3003;

app.use(cors());
app.use(express.json())

export interface Notas {
    titulo:string,
    estado:number,
    descripcion:string
}

app.post('/', (req:any, res:any) => {
    //console.log(req.body);
    res.status(201).json({
        mensaje: "hola0"
    });
    res.send("holaaaaaaaaa");
})

/*app.get('/',(req:any,res:any)=>{
    let notita = [{
        titulo:"hola",
        estado:2,
        descripcion:"como esta"
    }]
    res.send(notita);
});*/

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});