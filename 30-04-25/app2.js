//Importar express
const express = required('express');

//Generar una instancia
const app = express();

//Definicion de puerto
const port = 3009;

app.get('/', (req, res) => {
    res.send('Hola mundo desde otro puerto');
});


app.listen(port);