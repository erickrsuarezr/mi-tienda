const express = require('express');
const routerApi = require('./routes');
const {logErrors, errorHandler, boomErrorHandler}=require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res)=>{
  res.send('Hola, soy el servidor en Express');
})

app.get('/nueva-ruta', (req, res)=>{
  res.send('Hola, soy una ruta nueva o endpoint como tambien me llaman');
})


app.listen(port, ()=>{
  console.log('Mi puerto es: '+ port);
});
