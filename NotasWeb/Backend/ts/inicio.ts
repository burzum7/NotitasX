//import { markTimeline } from "console";
import { v4 } from 'uuid';

const express = require('express');
const app=express();     
const cors= require('cors');

const hostname = '127.0.0.1';
const port = 3003;

const fs = require('fs')
const path = require('path')


app.use(cors());
app.use(express.json())



export interface Notas {
    id?:string,
    titulo:string,
    estado:number,
    descripcion:string
    
}

app.post('/notas', (req:any, res:any) => {
    console.log(req.body);

    fs.readFile(path.join(__dirname, "../notas.json"), 'utf8' , (err: any, data: any) => {
        if (err) { 
                res.status(500).json({
                    mensaje: 'Error en el servidor'
                })
                return
        }
        
        let notas:Array<Notas> = JSON.parse(data);
        let titulo:string = req.body.titulo;
        let estado:number = req.body.estado;
        let descripcion:string = req.body.descripcion;
        let nuevaNota:Notas = {
            titulo,
            estado,
            descripcion
        };
        notas.push(nuevaNota);
        const json = JSON.stringify(notas);

        fs.writeFile(path.join(__dirname, "../notas.json"), json , (err: any) => {
            if (err) { 
                res.status(500).json({
                    mensaje: 'Error en el servidor'
                })
                return
            }
            res.status(201).json({
                mensaje: 'Datos creados'
            });
        })
    })
})

app.post('/notasX', (req:any, res:any) => {
    console.log(req.body);

    fs.readFile(path.join(__dirname, "../notas.json"), 'utf8' , (err: any, data: any) => {
        if (err) { 
                res.status(500).json({
                    mensaje: 'Error en el servidor'
                })
                return
        }
        
        let datosJson:Array<Notas> = JSON.parse(data);
        let titulo:string = req.body.titulo;
        let estado:number = req.body.estado;
        let descripcion:string = req.body.descripcion;
        let id = v4();

        let notita:Notas = {
            id,
            titulo,
            estado,
            descripcion,
        };

        let newNota:Array<Notas> = datosJson.filter( nota => (
            nota.titulo+nota.estado+nota.descripcion != notita.titulo+notita.estado+notita.descripcion
        ));
        
        const notasAGuardar = JSON.stringify(newNota);

        fs.writeFile(path.join(__dirname, "../notas.json"), notasAGuardar , (err: any) => {
            if (err) { 
                res.status(500).json({
                    mensaje: 'Error en el servidor'
                })
                return
            }
            res.status(201).json({
                mensaje: 'Datos creados'
            });
        })
    })
})

app.get('/notas', (req:any, res:any) => {
    fs.readFile(path.join(__dirname, "../notas.json"), 'utf8' , (err: any, data: any) => {
        if (err) { 
            res.status(500).json({
                mensaje: 'Error en el servidor'
            })
            return
        }
        let datosJson = JSON.parse(data);
        console.log(datosJson);
        res.json(datosJson)
    })
})

app.get('/notasX', (req:any, res:any) => {
    fs.readFile(path.join(__dirname, "../notas.json"), 'utf8' , (err: any, data: any) => {
        if (err) { 
            res.status(500).json({
                mensaje: 'Error en el servidor'
            })
            return
        }
        let datosJson = JSON.parse(data);
        console.log(datosJson);
        res.json(datosJson)
    })
})



app.put('/notasEdit', (req:any, res:any) => {
    fs.readFile(path.join(__dirname, "../notas.json"), 'utf8' , (err: any, data: any) => {
        if (err) { 
            res.status(500).json({
                mensaje: 'Error en el servidor'
            })
            return
        }
        
        let datosJson: Array<Notas> = JSON.parse(data);
        console.log("ASDSADASD");
        let notasFiltradas = datosJson.filter(nota => nota.id !== req.body.id);


        notasFiltradas.push(req.body);

        const notasAGuardar = JSON.stringify(notasFiltradas);
        fs.writeFile(path.join(__dirname, "../notas.json"), notasAGuardar , (err: any) => {
            if (err) { 
                res.status(500).json({
                    mensaje: 'Error en el servidor'
                })
                return
            }
            res.json({
                mensaje: 'Nota Actualizada'
            });
        })
    })
});

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