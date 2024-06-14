const express = require('express');
const router = express.Router();
const bills = require('../db/bills.js');


// on déclare les routes de /bills, donc /bills correspond ici à /
// ici toutes les bills
router.get('/', (req, res) => {
  res.json(bills)
})

// ici une seule bill en fonction de son :id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const bill = bills.find(bill => bill.id == id);
  res.json(bill)
})

module.exports = router;