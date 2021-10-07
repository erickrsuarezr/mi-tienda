const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

routerApi(app);

app.get('/', (req, res)=>{
  res.send('Hola, soy el servidor en Express');
})

app.get('/nueva-ruta', (req, res)=>{
  res.send('Hola, soy una ruta nueva o endpoint como tambien me llaman');
})


app.listen(port, ()=>{
  console.log('Mi puerto es: '+ port);
});
