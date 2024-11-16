const express = require('express');
const router = express.Router();
const faker = require('faker');

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < 100; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json(
    {
      id,
      name: 'Product 1',
      price: 1000
    },
)});


module.exports = router;
