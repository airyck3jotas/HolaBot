//instalamos previamente node.js/npm y el paquete botbuilder
//iniciamos npm con npm init -f

//requerimos el paquete
var builder = require('botbuilder');
//utilizamos un conector para entradas de consola y utilizamos 
//el tipo de bot 'Universal'
var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);
//creamos un diálogo simple donde a cualquier entrada responderá 
//Hola Mundo!
bot.dialog('/', [
    function(session) {
        session.send('Hola Mundo!');
    }
]) 