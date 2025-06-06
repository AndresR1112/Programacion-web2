const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

//Configuración de la carpeta views
app.use(express.static(path.join(__dirname, 'public')));

//menejar peticiones por medio de URl usando POST y por medio de url
app.use(bodyParser.urlencoded({ extended: false }));

//Configuracion de platillas
app.set('view engine', 'ejs');

//conexion a la DB
const db = mysql.createConnection({
    host: '127.0.0.1', //server
    user: 'root', //user
    password: '12345678', //pass de tu mysql
    database: 'node_crud', //Nombre de la DB
    port: 3306 //port
});

//validacion de la conexion a la DB 
db.connect(err => {
    if (err) {
        console.error('Sin conexion a la DB', err);
    } else {
        console.log('Base de datos conectada');
    }
});

//Iniciar el servidor
const port = 3005;
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});

//Mostrar en lista
app.get('/', (req, res) => {
    //Consulta a la DB
    const consulta = 'SELECT * FROM users';

    //usamos la DB para conectactarnos a la base de datos
    db.query(consulta, (err, results) => {
        if (err) {
            console.error('No se encontro el usuario', err);
            res.send("error Comunicate con Soporte");
        } else {
            res.render('index', { users: results });
        }
    });

});

//Agregar usuario
app.post('/add', (req, res) => {
    const { name, email } = req.body;
    const insertarRegistroUsuario = 'INSERT INTO users (name,email) VALUES (?,?)';
    db.query(insertarRegistroUsuario, [name, email], (err) => {
        if (err) {
            console.error('No se inserto el registro', err);
        } else {
            res.redirect('/');
        }
    });
});

//Editar usuario

app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const editar = 'SELECT *  FROM users WHERE id = ?';
    db.query(editar, [id], (err, results) => {
        if (err) {
            console.error("Error", err);
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

//update 
app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const actualizarUser = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(actualizarUser, [name, email, id], (err) => {
        if (err) {
            console.error('Sin actualizar usuario', err);
            res.send("Error de update")
        } else {
            res.redirect('/');
        }
    })
});

//eliminar usuario


    app.get('/eliminar/:id', (req, res) => {
        const { id } = req.params;
        const eliminar = 'DELETE FROM users WHERE id = ?';
        db.query(eliminar, [id], (err) => {
            if (err) {
                console.error('Error en delete', err);
                res.send("Error en eliminar usuario")
            } else {
                res.redirect('/');
            }
        })
    });

