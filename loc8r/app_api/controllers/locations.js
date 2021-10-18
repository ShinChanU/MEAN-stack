const mongoose = require('mongoose');
const Loc = mongoose.model('Location');
//  Locations 컬렉션과 대화할 수 있게 모델을 가져옴

const locationsReadOne = (req, res) => {
  Loc
    .findById(req.params.locationid) // req에 param에 locaionid가 존재함
    .exec((err, location) => { // 실행(콜백함수), 비동기식
      if (!location) { // locationid가 없을 때
        return res
          .status(404)
          .json({
            "message": "location not found",
            "학번/이름": "2016410026/신찬우"
          });
      } else if (err) { // err를 반환하는 경우
        return res
          .status(404)
          .json(err);
      }
      res
        .status(200)
        .json(location);
    });
};

const locationsListByDistance = async (req, res) => {
  const lng = parseFloat(req.query.lng); // string => number(float)
  const lat = parseFloat(req.query.lat); // js 윈도우 메서드
  const near = {
    type: "Point",
    coordinates: [lng, lat] // 경도 위도
  };
  const geoOptions = {
    distanceField: "distance.calculated",
    key: 'coords',
    spherical: true, // 둥근 표면에서 거리 계산
    maxDistance: 20000,
  };
  if (!lng || !lat) {
    return res
      .status(404)
      .json({
        "message": "lng and lat query parameters are required"
      });
  }
  try {
    const results = await Loc.aggregate([
      {
        $geoNear: { // $geoNear은  near(좌표값), distanceField(거리값 객체?), maxDistance(near부터 최대거리(m))를 가짐
          near,
          ...geoOptions
        }
      }
    ]);
    const locations = results.map(result => {
      return {
        _id: result._id,
        name: result.name,
        address: result.address,
        rating: result.rating,
        facilities: result.facilities,
        distance: `${result.distance.calculated.toFixed()} m`,
        my: result.my
      }
    });
    res
      .status(200)
      .json(locations);
  } catch (err) {
    res
      .status(404)
      .json(err)
  }
};

const locationsCreate = (req, res) => {
  Loc.create({
    name: req.body.name,
    address: req.body.address,
    facilities: req.body.facilities.split(","),
    coords: {
      type: "Point",
      coordinates: [
        parseFloat(req.body.lng),
        parseFloat(req.body.lat)
      ]
    },
    openingTimes: [
      {
        days: req.body.days1,
        opening: req.body.opening1,
        closing: req.body.closing1,
        closed: req.body.closed1
      },
      {
        days: req.body.days2,
        opening: req.body.opening2,
        closing: req.body.closing2,
        closed: req.body.closed2
      }
    ],
    my: req.body.my, // 과제 test
  },
    (err, location) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(location);
      }
    });
};

const locationsUpdateOne = (req, res) => {
  if (!req.params.locationid) {
    return res
      .status(404)
      .json({
        "message": "Not found, locationid is required"
      });
  }

  Loc
    .findById(req.params.locationid)
    .select('-reviews -rating') // reviews rating 을 빼고 select
    .exec((err, location) => {
      if (!location) {
        return res
          .status(404)
          .json({
            "message": "locationid not found"
          });
      } else if (err) {
        return res
          .status(400)
          .json(err);
      }
      location.name = req.body.name;
      location.address = req.body.address;
      location.facilities = req.body.facilities.split(',');
      location.coords = [
        parseFloat(req.body.lng),
        parseFloat(req.body.lat)
      ];
      location.openingTimes = [{
        days: req.body.days1,
        opening: req.body.opening1,
        closing: req.body.closing1,
        closed: req.body.closed1,
      }, {
        days: req.body.days2,
        opening: req.body.opening2,
        closing: req.body.closing2,
        closed: req.body.closed2,
      }];
      location.save((err, loc) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(loc);
        }
      });
    }
    );
};

const locationsDeleteOne = (req, res) => {
  const { locationid } = req.params;
  if (locationid) {
    Loc
      .findByIdAndRemove(locationid)
      .exec((err, location) => {
        if (err) {
          return res
            .status(404)
            .json(err);
        }
        res
          .status(204)
          .json(null)
      });
  } else {
    res
      .status(404)
      .json({
        "message": "No Location"
      });
  }
};

module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
};