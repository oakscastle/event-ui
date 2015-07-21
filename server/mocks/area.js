module.exports = function(app) {
  var express = require('express');
  var areaRouter = express.Router();

  areaRouter.get('/', function(req, res) {
    res.send({
      'area': []
    });
  });

  areaRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  areaRouter.get('/:id', function(req, res) {
    res.send({
      'area': {
        id: req.params.id
      }
    });
  });

  areaRouter.put('/:id', function(req, res) {
    res.send({
      'area': {
        id: req.params.id
      }
    });
  });

  areaRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/area', areaRouter);
};
