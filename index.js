const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(console.log);

const shelf_controller = require('./controllers/shelf_controller');
const bins_controller = require('./controllers/bins_controller');
// controller functions
app.get('/api/bins/:name', bins_controller.getMultiple)
app.get('/api/bins', shelf_controller.getAll)
app.get('/api/bins/:name', shelf_controller.getOne)
app.get('/api/bins/:name/:id', bins_controller.getOne)
app.put('/api/bins/:name/:id', bins_controller.updateName)
app.put('/api/bins/:name/:id', bins_controller.updatePrice)
app.put('/api/bins/:name:id', bins_controller.resetBin)


const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port: ${port}`));