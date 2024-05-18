const mongoose = require('mongoose');

mongoose.connect(process.env.PORT/productinventry,{
    useNewUrlparser: true,
    useUnifiedTopology:true,
});

const db = mongoose.connection;

db.on('error', (err) =>{
    console.error('MongoDB connection error:', err);
});

db.once('open', ()=>{
    console.log('Connected to MongoDB');
});