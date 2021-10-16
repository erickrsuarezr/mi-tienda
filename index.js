const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {logErrors, errorHandler, boomErrorHandler}=require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());
const whitelist = ['http://localhost:8080', 'https://myapp.com.mx', '127,0,0,1:5500'];
const options = {
  origin: (origin, callback)=>{
    if (whitelist.includes(origin)) {
      callback(null, true);
    }else{
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors());//Esto da acceso a todo el mundo Si quitamos whitelist y options

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
