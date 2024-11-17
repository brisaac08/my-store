const express = require('express');
const router = express.Router();
const ProductsServices = require('../services/productsServices');

const services = new ProductsServices();

router.get('/', (req, res) => {
  const products = services.getProducts();
  res.status(200).json(products);
});

router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = services.getOneProduct(id);
  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = services.addProduct(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const updateProduct = services.updateProduct(id, body);
  res.status(200).json(updateProduct)
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  const response = services.deleteProduct(id);
  res.status(200).json(response)
});

module.exports = router;
