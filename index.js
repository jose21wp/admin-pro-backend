require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');


/* EXPRESS */
app = express();
/* CONFIGURAR CORS */
app.use(cors());
/* BASE DE DATOS */
dbConnection();

/* LOGIN DB MONGO */
/* WNZM6zWRJMlgzgrU */
/* RUTAS */
app.get('', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: 'hola Mundo'
    })
})

app.listen(process.env.PORT, function() {
    console.log('Servidor Corriendo en el puertoss ' + 3000);
});