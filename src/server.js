const app = require('./app');
const startDB = require('./connection/mongodb');

startDB().catch(error => console.log(error));

const PORT = process.env.PORT || 3003
app.listen(PORT, () => console.log('server on!'));