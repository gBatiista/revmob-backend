const app = require('./app');
const startDB = require('./connection/mongodb');
require('dotenv').config();

startDB().catch(error => console.log(error));

const PORT = process.env.PORT || 8080
app.listen(PORT, "0.0.0.0", () => console.log('server on!'));