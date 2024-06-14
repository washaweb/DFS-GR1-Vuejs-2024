const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');
module.exports = {
  // récupère la liste de toutes les factures
  getAll: (req, res) => {
    // req représente la requête, on peut retrouver les différentes parties d'une requête http classique comme le head, le body, les params, la query et le hash
    // res représente la réponse que l'on renvoie au client, on peut remplir la réponse avec diférentes données, du texte, un fichier, du json... on simplement renvoyer un status http avec les fonctions suivantes :
    //send() -> renvoie du texte
    //sendStatus() -> renvoie le status http
    //json() -> renvoie du json
    //sendFile() -> renvoie un fichier

    try {
      // path resolve permet de résoudre le chemin de fichier relative au dossier courant
      const data = fs.readFileSync(
        path.resolve(
          __dirname,
          '../db/bills.json'
        ) 
      )
      res.send(data)
    } catch (err) {
      res.sendStatus(500);
      throw err;
    }
    // fs.readFile(path.resolve(__dirname,'../db/bills.json'), (err, data) => {
    //   if (err) {
    //     res.sendStatus(500);
    //     throw err;
    //   }
    //   res.send(data);
    // })
  },

  // récupérer une seule facture en fonction de son id
  getOne: (req, res) => {
    try {
      // path resolve permet de résoudre le chemin de fichier relative au dossier courant
      const data = fs.readFileSync(
        path.resolve(
          __dirname,
          '../db/bills.json'
        ) 
      )
      // on convertit le json en data
      const bills = JSON.parse(data);
      // on récupère l'id passé dans l'url
      const id = req.params.id
      // on retrouve la facture dans le tableau
      const bill = bills.find(bill => bill.id == id);
      // si j'ai bien une facture qui correspond
      if(bill){
        // on renvoie la facture
        res.json(bill)
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      res.sendStatus(500);
      throw err;
    }
  },

   // mettre àjour une facture en fonction de son id
   postOne: (req, res) => {
    try {
      // ouverture du json des factures bills.json
      const data = fs.readFileSync(
        path.resolve(
          __dirname,
          '../db/bills.json'
        ) 
      )
      // on convertit le json en data
      const bills = JSON.parse(data);
      // on insère la nouvelle facture avec un push, au passage, on crée un identifiant unique
      const newBill = { ...req.body, id: uuid() }
      bills.push(newBill)
      
      // on écrit le nouveau fichier json avec la donnée à jour :
      fs.writeFileSync(
        path.resolve(
          __dirname,
          '../db/bills.json'
        ),
        JSON.stringify(bills)
      )
      // on fois qu'on a fini, on retourne la donnée que l'on vient de créer
      res.json(newBill)
    } catch (err) {
      res.sendStatus(500);
      throw err;
    }
  },

  // mettre àjour une facture en fonction de son id
  patchOne: (req, res) => {
    try {
      // ouverture du json des factures bills.json
      const data = fs.readFileSync(
        path.resolve(
          __dirname,
          '../db/bills.json'
        ) 
      )
      // on convertit le json en data
      let bills = JSON.parse(data);
      // on récupère l'id passé dans l'url
      const id = req.params.id
      // on crée un nouveau tableau de factures, sans la facture qui correspond à l'id
      let updatedBill = bills.find(bill => bill.id == id);
      let updatedBillIndex = bills.findIndex(bill => bill.id == id);
      if(updatedBill) {
        // on met à jour la facture avec les nouvelles données
        updatedBill = { ...updatedBill, ...req.body }
        // on remplace la facture dans le tableau de factures
        bills[updatedBillIndex] = {...updatedBill }
      } else {
        res.sendStatus(404);
        return;
      }

      // // on écrit le nouveau fichier json avec la donnée à jour :
      fs.writeFileSync(
        path.resolve(
          __dirname,
          '../db/bills.json'
        ),
        JSON.stringify(bills)
      )
      // on fois qu'on a fini, on retourne la donnée que l'on vient de modifier
      res.json(updatedBill)

    } catch (err) {
      res.sendStatus(500);
      throw err;
    }
  },

  // supprimer une facture en fonction de son id
  deleteOne: (req, res) => {
    try {
      // ouverture du json des factures bills.json
      const data = fs.readFileSync(
        path.resolve(
          __dirname,
          '../db/bills.json'
        ) 
      )
      // on convertit le json en data
      let bills = JSON.parse(data);
      // on récupère l'id passé dans l'url
      const id = req.params.id
      // on crée un nouveau tableau de factures, sans la facture qui correspond à l'id
      bills = bills.filter(bill => bill.id != id)

      // on écrit le nouveau fichier json avec la donnée à jour :
      fs.writeFileSync(
        path.resolve(
          __dirname,
          '../db/bills.json'
        ),
        JSON.stringify(bills)
      )
      // on fois qu'on a fini, on retourne la donnée que l'on vient de créer
      res.sendStatus(200)
    } catch (err) {
      res.sendStatus(500);
      throw err;
    }
  },
}