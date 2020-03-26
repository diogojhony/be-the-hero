const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    event: 'OmniStack Week 11.0',
    student: 'Diogo Jhony',
  });
});

app.listen(3333);
