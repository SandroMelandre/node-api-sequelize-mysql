/**
 * criando conexão com banco
 */


const mysql = require('mysql');
const dbConfig = require("/configs/db.config.js");

console.log("DBCONFIG", dbConfig);


//criando a conexão com banco de dados
const  connection  = mysql.createConnection({
    host:   dbConfig.HOST ,//'127.0.0.1', 
    user: dbConfig.USER,//'ciamob_user',
    password: dbConfig.PASSWORD, //'ciaimobiliaria',
    database:  dbConfig.DATABASE, //'ciaimobiliaria',
    port:  dbConfig.PORT
});

//abrindo a conexão
connection.connect(error => {
    if (error) throw error;
    console.log("Suscess  conected  database...");
})

module.exports = connection;
