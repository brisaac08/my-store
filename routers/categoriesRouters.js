const express = require('express');
const router = express.Router();
const faker = require('faker');

router.get('/', (req, res) => {
  const users = [];
  const { limit } = req.query;
  const limitNumber = limit || 10;
  for (let i = 0; i < limitNumber; i++) {
    users.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
    });
  }
  res.json(users);
});

module.exports = router;
