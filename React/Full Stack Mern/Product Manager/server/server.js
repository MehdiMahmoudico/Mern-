const express = require("express");
const app = express();
const cors = require('cors')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const port = process.env.PORT;
require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())
const AllMyProjectRoutes = require("./routes/routes.product");
AllMyProjectRoutes(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );