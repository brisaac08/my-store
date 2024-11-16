const express = require('express');
const router = express.Router();
const faker = require('faker');

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
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

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Product created',
    data: body
  })
});

module.exports = router;
