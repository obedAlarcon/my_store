const {Client} = require('pg');

async function getConnection(){
    const client = new Client({
        host:'localhost',  // estos datos son los que colocamos en el registro de docker-compose.yml        
        port:5432,
        user:'obed',
        password:'obed2024@',
        database:'my_store'// nombre de la db

    });
    await client.connect();
    return client;
}
module.exports =getConnection;
// se exporta pata toda la app