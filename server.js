const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/image/*', (req, res) => {
//   axios[req.method.toLowerCase()](`http://localhost:3002/${req.originalUrl}`)
//   .then(({data}) => res.send(data))
//   .catch(err => res.statusCode(500).send(err))
// });

app.use('/:id', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});