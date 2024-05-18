const express = require('express');
const router = express.Router();
const Product = require('./product');

router.get('/products', async (req, res) =>{
    const products = await
    Product.find();
    res.json(products);
});

router.post('/products', async (req, res) =>{
    const product = new
    Product(req.body);
    await product.save();
    res.json(product);
});

router.get('/products/:id', async (req, res) =>{
    const id = ('link unavailable');
    const product = await
    Product.findById(id);
    if (!product){
    res.status(404).json({message:'Product not found'});
    } else {
      res.json(product);
    }
});
router.put('/products/:id', async (req, res) =>{
    const id = ('link unavailable');
    const product = await
    Product.findById(id);
    if (!product){
    res.status(404).json({message:'Product not found'});
    } else {
      product.name = req.body.name;
      product.description = req.body.description;
      product.price = req.body.price;
      product.quantity = req.body.quantity;
      await product.save();
      res.json(product);
    }
});

router.delete('/products/:id', async (req, res) =>{
    const id = ('link unavailable');
    await
    Product.findByIdAndRemove(id);
    if (!product){
    res.json({message: 'Product deleted' });
    }});
   
    module.exports = router;
