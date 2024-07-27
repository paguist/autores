const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/authorsdb')
    .then(() => {
        console.log("Conexión exitosa a la base de datos 'authorsdb'");
    })
    .catch((error) => {
        console.log(`Hubo un error al conectar con la base de datos: ${error}`);
    });

