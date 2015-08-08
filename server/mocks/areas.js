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
		"image_url": "http://dhappy.org/.../image/rect/1/",
		"containers": [ 'c1', 'c2' ],
                attributes: {
                    viewBox: '0 0 100 1000'
                }//,
                //contents: [ "<rect style='fill: blue' x='10' y='10' width='50' height='50'/>" ]
	    },
	    {
		"id": "kitchen",
		"image_url": "http://dhappy.org/.../image/rect/2/",
                attributes: {
                    viewBox: '0 0 100 500'
                },
                contents: [ "<rect style='fill: green' x='10' y='10' width='20' height='10'/>" ]
	    },
	    {
		"id": "den",
		"image_url": "http://dhappy.org/.../image/rect/1/",
		"containers": [ 'c3' ]
	    },
	    {
		"id": "tv",
		"image": "tv.svg"
	    }
	],
        "containers": [
            {
		"id": "c1",
		"area": "kitchen",
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
