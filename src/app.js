const express = require('express')
const app = express()
const port = 3000
const conn = require('./db/conn');
const productRouter = require('./routes/query')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', productRouter);





// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))