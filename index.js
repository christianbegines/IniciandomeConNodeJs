/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var server = require("./server");
var router= require("./router");
var requestHandlers= require("./requestHandlers");

var handle={};
//handle["/"]=requestHandlers.iniciar();
handle["/iniciar"]=requestHandlers.iniciar();
handle["/subir"]=requestHandlers.subir();
server.iniciar(router.route,handle);

