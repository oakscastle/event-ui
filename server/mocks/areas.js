module.exports = function(app) {
  var express = require('express');
  var areasRouter = express.Router();

  areasRouter.get('/', function(req, res) {
    res.send({
    });
  });

  areasRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  areasRouter.get('/:id', function(req, res) {
    res.send({
	"areas": [
	    {
		"id": "house",
		"image": "http://dhappy.org/.../image/rect/1/",
		"containers": [ 'c1', 'c2' ]
	    },
	    {
		"id": "kitchen",
		"image": "http://dhappy.org/.../image/rect/2/"
	    },
	    {
		"id": "den",
		"image": "http://dhappy.org/.../image/rect/4/",
		"containers": [ 'c3' ]
	    },
	    {
		"id": "tv",
		"image": "http://dhappy.org/.../image/rect/3/"
	    }
	],
        "containers": [
            {
		"id": "c1",
		"area": "kitchen",
                "x": 20,
		"y": 20,
		"width": 30,
		"height": 15
            },
	    {
		"id": "c2",
		"area": "den",
		"x": 25,
		"y": 20,
		"width": 100,
		"height": 50
            },
            {
	        "id": "c3",
	        "area": "tv",
	        "x": 25,
	        "y": 25,
	        "width": 10,
	        "height": 10
            }
        ]
    });
  });

  areasRouter.put('/:id', function(req, res) {
    res.send({
      'areas': {
        id: req.params.id
      }
    });
  });

  areasRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/areas', areasRouter);
};
