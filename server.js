const express = require('express');
const db = require('./db');
const { getAllPlants, getPlantById, createPlant, updatePlant, deletePlant } = require('./controllers/plantController')
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

// require() imports and middleware here ^ ///////

const app = express();

app.use(bodyParser.json())
app.use(logger('dev'))

// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/plants', getAllPlants)
app.get('/plants/:id', getPlantById)
app.post('/plants', createPlant)
app.put('/plants/:id', updatePlant)
app.delete('/plants/:id', deletePlant)



