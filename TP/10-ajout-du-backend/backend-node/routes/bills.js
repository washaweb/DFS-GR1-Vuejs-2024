const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/bills.js');

// on déclare les routes de /bills, donc /bills correspond ici à /
// r&cupère toutes les factures
router.get('/', ctrl.getAll)

// récupère une seule facture en fonction de son :id
router.get('/:id', ctrl.getOne)

// on crée une nouvelle facture
router.post('/', ctrl.postOne)

// on modifie une facture existante
router.patch('/:id', ctrl.patchOne)

// on supprime une facture
router.delete('/:id', ctrl.deleteOne)

module.exports = router;