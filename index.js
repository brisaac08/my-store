const express = require('express');
const routerApi = require('./routers');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta');
});


app.listen(port, () => {
  console.log('my port: '+ port)
});

routerApi(app);
