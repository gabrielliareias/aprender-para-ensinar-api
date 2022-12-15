require("dotenv-safe").config()
const express = require('express');
const psicologas = require('./routes/psicologasRoutes.js');
const mongoose = require('./database/dbConnect.js');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const cors = require("cors") 



const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect()




app.use('/psicologas', psicologas);
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));



module.exports = app