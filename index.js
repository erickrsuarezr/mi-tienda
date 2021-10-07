const express = require('express');
const faker = require('faker');


const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('Hola, soy el servidor en Express');
})

app.get('/nueva-ruta', (req, res)=>{
  res.send('Hola, soy una ruta nueva o endpoint como tambien me llaman');
})

app.get('/products', (req, res)=>{
  const products = [];
  const { size }=req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products);
});

app.get('/products/filter', (req, res)=>{
  res.send('Soy un filter');
})

app.get('/products/:id', (req, res)=>{
const { id } = req.params;
res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
})

app.get('/users', (req, res)=>{
  const { limit, offset }=req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  }else{
    res.send('Lo siento, no hay parámetros :(')
  }
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
