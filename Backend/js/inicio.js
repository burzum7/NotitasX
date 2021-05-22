"use strict";
//import { markTimeline } from "console";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var cors = require('cors');
var hostname = '127.0.0.1';
var port = 3003;
app.use(cors());
app.use(express.json());
app.post('/', function (req, res) {
    //console.log(req.body);
    res.status(201).json({
        mensaje: "hola0"
    });
    res.send("holaaaaaaaaa");
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
