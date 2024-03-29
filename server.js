require('dotenv').config();
const express = require('express');
const ipRoutes = require('./routes/ipRoutes');

const app = express();
const port = 4000;

app.use(express.json());
app.use('/', ipRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
