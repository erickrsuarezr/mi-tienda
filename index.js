const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('Hola, soy el servidor en Express');
})

app.get('/nueva-ruta', (req, res)=>{
  res.send('Hola, soy una ruta nueva o endpoint como tambien me llaman');
})

app.get('/products', (req, res)=>{
  res.json({
    name: 'Producto 1',
    price: 1300
  });
})

app.get('/categories', (req, res)=>{
  res.json({
    name: 'Salud y Belleza'
  });
})

app.listen(port, ()=>{
  console.log('Mi puerto es: '+ port);
});
