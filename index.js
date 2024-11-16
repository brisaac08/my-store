const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta');
});

app.get('/products', (req, res) => {
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
