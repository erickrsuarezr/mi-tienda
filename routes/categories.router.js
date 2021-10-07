const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res)=>{
  const categories = [];
  const { size }=req.query;
  const limit = size || 15;
  for (let index = 0; index < limit; index++) {
    categories.push({
      category: faker.commerce.productAdjective()
    })
  }
  res.json(categories);
});

router.get('/:categoryId/products/:productId', (req, res)=>{
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    name: 'Product 2',
    price: 2000
  });
})

module.exports = router;
