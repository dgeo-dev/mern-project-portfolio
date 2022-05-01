var express = require('express');
var router = express.Router();
const portfolios = require('../data/portfolios');

router.get('/portfolios', (req, res) => {
  console.log('Tous les portfolios');
  return res.send(portfolios);
});

router.get('/portfolio/:id', (req, res) => {
  console.log(req.params.id);
  let portfolio = portfolios.find(u => u.id === parseInt(req.params.id));
  // if(!portfolio) res.redirect('/404');
  if(!portfolio) res.status(404).send('portfolio introuvable');
  return res.send(portfolio);
});

router.post('/portfolio', (req, res) => {
  
  /*let portfolio = {
    id: portfolios.length + 1,
    title: "Portfolio 1",
    category: "Web"
  }
  portfolios.push(portfolio);*/

  const {title, category, category_slug} = req.body;

  let portfolio = {
    id: portfolios.length + 1,
    title,
    category,
    category_slug
  }
  portfolios.push(portfolio);
  return res.status(201).send('portfolio créé');
  
});


router.put('/portfolio/:id', (req, res) => {

  const {title, category} = req.body;
  let portfolio = portfolios.find(u => u.id === parseInt(req.params.id));
  let foundIndex = portfolios.findIndex(u => u.id === parseInt(req.params.id));
  portfolios.splice(foundIndex, 2, {
    id: portfolio.id,
    title: title,
    category: category
  })
  if(!portfolio) return res.status(404).send('portfolio introuvable');
  return res.send('portfolio modifié');
});

router.delete('/portfolio/:id', (req, res) => {

  let portfolio = portfolios.find(u => u.id === parseInt(req.params.id));
  let foundIndex = portfolios.findIndex(u => u.id === parseInt(req.params.id));
  if(!portfolio) return res.status(404).send('portfolio introuvable');
  portfolios.splice(foundIndex, portfolio.id);
  return res.send('portfolio supprimé');
});

module.exports = router;