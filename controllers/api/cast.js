const Movies = require('../../models/movie');
const Performers = require('../../models/performer');



module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update,

};

function update(req, res) {
    Movies.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(cast) {
    res.status(200).json(cast);
  });
}

function deleteOne(req, res) {
    Movies.findByIdAndDelete(req.params.id).then(function(cast) {
    res.status(200).json(cast);
  });
}

function show(req, res) {
    Movies.findById(req.params.id).then(function(cast) {
    res.status(200).json(cast);
  });
}

function create(req, res) {
    Movies.create(req.body).then(function(cast) {
    res.status(201).json(cast);
  });
}

function index(req, res) {
    Movies.find({}).then(function(casts) {
    res.status(200).json(casts);
  });
}

