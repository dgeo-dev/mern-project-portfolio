console.log('Coucou')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 9000;
const verifAuth = require('./middleware/verifAuth');
const portfoliosRoutes = require('./routes/portfolios');
const cors = require('cors');

// get, use c'est des method

// middleware c'est une fonction qui prend en compte les objects req et res - très utile pour les routes 

// middleware avant donc on peut y accèder

app.use(bodyParser.json());
app.use(cors());
app.use(verifAuth());

app.get('/login', (req, res) => {
  res.send('Login page')
})

app.use('/api/v1/', portfoliosRoutes);

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/:id', (req, res) => {
  console.log(req.params.id)
  res.status(200).send(req.params.id);
})

app.get('/404/', (req, res) => {
  console.log('error 404');
  return res.send('Page erreur 404');
});

app.get('*', (req, res) => {
  res.send('Autres pages ou 404')
})

app.listen(PORT, () => {
  console.log('server lancé');
});

