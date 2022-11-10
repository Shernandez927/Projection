/* eslint-disable camelcase */
const router = require('express').Router();
const { Maps } = require('../../models');

//   router.get('/:id', async (req, res) => {
//     try {
//         const mapRendering = await Maps.findOne({});
//         const mapMarkers = await Marker.findAll({});
//         const mapData = [ ...mapMarkers, ...mapRendering];

//       res.status(200).json(mapData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
//   });
router.get('/', async (req, res) => {
  const allMapData = await Maps.findAll({});
  res.status(200).json(allMapData);
});

router.get('/:city_name', async (req, res) => {
  const
});

router.post('/', async (req, res) => {
  const newMap = await Maps.create({
    city_name: req.body.city_name,
    city_state: req.body.city_state,
    map_coordinates_lat: req.body.map_coordinates_lat,
    map_coordinates_lon: req.body.map_coordinates_lon,
  });
  res.status(200).json(newMap);
});

module.exports = router;
