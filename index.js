const express = require('express');
const routerApi = require('./routers');
const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log('my port: '+ port)
});
