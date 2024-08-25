const Joke = require("../models/model.joke");

module.exports.findALLJokes = (req, res) => {
  Joke.find()
    .then((jokes) => {
    //   console.log("all jokes", jokes);
      res.json(jokes);   
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneSingleJoke) => {
      res.json({ Joke: oneSingleJoke });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newlyCreatedJoke) => {
      res.json({ Joke: newlyCreatedJoke });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => {
      res.json({ Joke: updatedJoke });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json(err);
    });
};
