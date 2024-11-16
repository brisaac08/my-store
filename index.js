const express = require('express');
const app = express();
const faker = require('faker');
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta');
});

app.get('/products', (req, res) => {
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

app.get('/products/filter', (req, res) => {
  res.send('yo soy un filter');
});

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json(
    {
      id,
      name: 'Product 1',
      price: 1000
    },
)});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json(
    {
      categoryId,
      productId
    },
)});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }
  else{
    res.send('No se han enviado parametros');
  }
});

app.get('/categories', (req, res) => {
  res.json({
        category: [
          {
            categories_id: "1",
            name: "New Years Parties",
            slug: "new-years-eve"
          },
          {
            categories_id: "71",
            name: "Joonbug Calendar",
            slug: "nightlife-calendar"
          },
          {
            categories_id: "69",
            name: "Lindy Calendar",
            slug: "nightlife-calendar"
          }
        ]
  });
});


app.listen(port, () => {
  console.log('my port: '+ port)
});
