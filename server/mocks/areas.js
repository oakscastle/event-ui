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
		"image_url": "house.svg",
		"containedAreas": [ 'c1', 'c2' ]
	    },
	    {
		"id": "kitchen",
		"image_url": "kitchen.svg"
	    },
	    {
		"id": "den",
		"image_url": "den.svg",
		"containedAreas": [ 'c3' ]
	    },
	    {
		"id": "tv",
		"image": "tv.svg"
	    }
	],
        "contained_areas": [
            {
		"id": "c1",
		"area": "kitchen",
		"image_url": "kitchen.svg",
                "x": 50,
		"y": 50,
		"width": 100,
		"height": 50
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
	        "area": "den",
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
