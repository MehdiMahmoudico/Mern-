const Author = require("../models/model.author");

module.exports.findALLAuthors = (req, res) => {
    Author.find()
      .then((Authors) => {
      console.log("all Authors", Authors);
        res.json(Authors);   
      })
      .catch((err) => {
        res.status(400).json(err);
        
      });
  };
  
  module.exports.findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((oneSingleAuthor) => {
        res.json(oneSingleAuthor );
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
  
  module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
      .then((newlyCreatedAuthor) => {
        res.json({ Author: newlyCreatedAuthor });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
  
  module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedAuthor) => {
        res.json({ Author: updatedAuthor });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
  
  module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.json({ result: result });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };