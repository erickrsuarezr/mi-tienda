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
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 2000
    }
  ]);
});

app.get('/products/:id', (req, res)=>{
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
})

app.get('/categories/:categoryId/products/:productId', (req, res)=>{
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    name: 'Product 2',
    price: 2000
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
