/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require("http");
var url = require("url");

function iniciar(route,handle){
    function onRequest(request,response){
        var pathname= url.parse(request.url).pathname;
        console.log("Peticion para"+pathname+" Recibida.");
        
        route(pathname,handle);
        
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("Hola Christian");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado");
}
exports.iniciar=iniciar;

