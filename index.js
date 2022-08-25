const express = require ('express');
const cors = require ('cors');
const route = require ('./src/routes/pokedex.route.js');

const port = 3000;
const app = express ();

app.use (express.json ());
app.use (cors ());
app.use ('/pokedex', route);

app.listen (port, () => {
  console.log (`O servidor está rodando em http://localhost:${port}`);
});
