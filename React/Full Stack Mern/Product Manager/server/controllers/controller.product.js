const Product = require("../models/model.product");

module.exports.findALLProducts = (req, res) => {
    Product.find()
      .then((Products) => {
      console.log("all Products", Products);
        res.json(Products);   
      })
      .catch((err) => {
        res.status(400).json(err);
        
      });
  };
  
  module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((oneSingleProduct) => {
        res.json(oneSingleProduct );
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
  
  module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
      .then((newlyCreatedProduct) => {
        res.json({ Product: newlyCreatedProduct });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
  
  module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedProduct) => {
        res.json({ Product: updatedProduct });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
  
  module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.json({ result: result });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };