const express = require('express');
const index = require('./routes/index.js');
const psicologas = require('./routes/psicologasRoutes.js');
const mongoose = require('./database/dbConnect.js');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const admRoutes = require('./routes/admRoutes.js')


require("dotenv").config()

const app = express()
mongoose.connect()

app.use(express.json())



app.use('/', index);
app.use('/psicologas', psicologas);
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(admRoutes)


module.exports = app