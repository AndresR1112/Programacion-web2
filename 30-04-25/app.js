//Importar express
const express = required('express');

//Generar una instancia
const app = express();

//Definicion de puerto
const port = 5023;

app.get('/', (req, res) => {
    res.send('Hola mundo');
});


app.listen(port);