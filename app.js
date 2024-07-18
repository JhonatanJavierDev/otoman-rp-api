// Importar módulos
const express = require('express');
require('dotenv').config(); 

const app = express();
const PORT = process.env.APP_PORT || 7000;


app.get('/', (req, res) => {
    res.send('The app is ok');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto http://localhost:${PORT}`);
});
