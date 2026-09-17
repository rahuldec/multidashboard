const express = require('express');
const entitiesHandler = require('./api/entities');
const feeDataHandler = require('./api/fee-data');

const app = express();

app.get('/api/entities', (req, res) => entitiesHandler(req, res));
app.get('/api/fee-data', (req, res) => feeDataHandler(req, res));

app.use(express.static(__dirname));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Dev server running at http://localhost:${port}`));
