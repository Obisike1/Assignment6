
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config()

app.use(express.json());
const PORT = process.env.PORT || 9000;
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const productRouter = require('./productController');
app.use('/api', productRouter);
app.listen(PORT, () => {
    console.log('Server is running on port ${ PORT}');
});

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("Mongodb connected"))


