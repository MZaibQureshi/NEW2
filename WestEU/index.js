const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1> West Europe App (Windows)</h1><p>You are hitting the West Europe backend!</p>');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`West Europe App listening on port ${port}`);
});
