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

const locationsCreate = (req, res) => { };
const locationsUpdateOne = (req, res) => { };
const locationsDeleteOne = (req, res) => { };

module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
};