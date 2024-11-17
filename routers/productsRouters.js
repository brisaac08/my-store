const express = require('express');
const router = express.Router();
const ProductsServices = require('../services/productsServices');

const services = new ProductsServices();

router.get('/', async(req, res) => {
  const products = await services.getProducts();
  res.status(200).json(products);
});

router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

router.get('/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const product = await services.getOneProduct(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
});

router.post('/', async(req, res) => {
  try {
    const body = req.body;
    const newProduct = await services.addProduct(body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

router.patch('/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const updateProduct = await services.updateProduct(id, body);
    res.status(200).json(updateProduct)
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const response = await services.deleteProduct(id);
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

module.exports = router;
