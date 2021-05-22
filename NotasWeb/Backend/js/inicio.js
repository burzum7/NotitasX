"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { markTimeline } from "console";
var uuid_1 = require("uuid");
var express = require('express');
var app = express();
var cors = require('cors');
var hostname = '127.0.0.1';
var port = 3003;
var fs = require('fs');
var path = require('path');
app.use(cors());
app.use(express.json());
app.post('/notas', function (req, res) {
    console.log(req.body);
    fs.readFile(path.join(__dirname, "../notas.json"), 'utf8', function (err, data) {
        if (err) {
            res.status(500).json({
                mensaje: 'Error en el servidor'
            });
            return;
        }
        var notas = JSON.parse(data);
        var titulo = req.body.titulo;
        var estado = req.body.estado;
        var descripcion = req.body.descripcion;
        var nuevaNota = {
            titulo: titulo,
            estado: estado,
            descripcion: descripcion
        };
        notas.push(nuevaNota);
        var json = JSON.stringify(notas);
        fs.writeFile(path.join(__dirname, "../notas.json"), json, function (err) {
            if (err) {
                res.status(500).json({
                    mensaje: 'Error en el servidor'
                });
                return;
            }
            res.status(201).json({
                mensaje: 'Datos creados'
            });
        });
    });
});
app.post('/notasX', function (req, res) {
    console.log(req.body);
    fs.readFile(path.join(__dirname, "../notas.json"), 'utf8', function (err, data) {
        if (err) {
            res.status(500).json({
                mensaje: 'Error en el servidor'
            });
            return;
        }
        var datosJson = JSON.parse(data);
        var titulo = req.body.titulo;
        var estado = req.body.estado;
        var descripcion = req.body.descripcion;
        var id = uuid_1.v4();
        var notita = {
            id: id,
            titulo: titulo,
            estado: estado,
            descripcion: descripcion,
        };
        var newNota = datosJson.filter(function (nota) { return (nota.titulo + nota.estado + nota.descripcion != notita.titulo + notita.estado + notita.descripcion); });
        var notasAGuardar = JSON.stringify(newNota);
        fs.writeFile(path.join(__dirname, "../notas.json"), notasAGuardar, function (err) {
            if (err) {
                res.status(500).json({
                    mensaje: 'Error en el servidor'
                });
                return;
            }
            res.status(201).json({
                mensaje: 'Datos creados'
            });
        });
    });
});
app.get('/notas', function (req, res) {
    fs.readFile(path.join(__dirname, "../notas.json"), 'utf8', function (err, data) {
        if (err) {
            res.status(500).json({
                mensaje: 'Error en el servidor'
            });
            return;
        }
        var datosJson = JSON.parse(data);
        console.log(datosJson);
        res.json(datosJson);
    });
});
app.get('/notasX', function (req, res) {
    fs.readFile(path.join(__dirname, "../notas.json"), 'utf8', function (err, data) {
        if (err) {
            res.status(500).json({
                mensaje: 'Error en el servidor'
            });
            return;
        }
        var datosJson = JSON.parse(data);
        console.log(datosJson);
        res.json(datosJson);
    });
});
app.put('/notasEdit', function (req, res) {
    fs.readFile(path.join(__dirname, "../notas.json"), 'utf8', function (err, data) {
        if (err) {
            res.status(500).json({
                mensaje: 'Error en el servidor'
            });
            return;
        }
        var datosJson = JSON.parse(data);
        console.log("ASDSADASD");
        var notasFiltradas = datosJson.filter(function (nota) { return nota.id !== req.body.id; });
        notasFiltradas.push(req.body);
        var notasAGuardar = JSON.stringify(notasFiltradas);
        fs.writeFile(path.join(__dirname, "../notas.json"), notasAGuardar, function (err) {
            if (err) {
                res.status(500).json({
                    mensaje: 'Error en el servidor'
                });
                return;
            }
            res.json({
                mensaje: 'Nota Actualizada'
            });
        });
    });
});
/*app.get('/',(req:any,res:any)=>{
    let notita = [{
        titulo:"hola",
        estado:2,
        descripcion:"como esta"
    }]
    res.send(notita);
});*/
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
