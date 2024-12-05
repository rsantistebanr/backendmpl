const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Cargar variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
/* app.use(morgan('dev')); */
app.use(express.json()); // Procesar JSON en solicitudes

app.get('/', (req, res) => {
  res.send('¡Hola, mundo de APIs!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
