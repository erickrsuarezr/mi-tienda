const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('Hola, soy el servidor en Express');
})

app.listen(port, ()=>{
  console.log('Mi puerto es: '+ port);
});
