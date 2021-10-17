const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const reviewsCreate = (req, res) => { };

const reviewsReadOne = (req, res) => {
  Loc
    .findById(req.params.locationid)
    .select('name reviews')
    .exec((err, location) => {
      if (!location) {
        return res
          .status(404)
          .json({
            "message": "location not found",
            "학번/이름": "2016410026/신찬우"
          });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      }

      if (location.reviews && location.reviews.length > 0) {
        const review = location.reviews.id(req.params.reviewid); //location의 서브다큐먼트 review의 id를 (특정id)의 값으로 함(id() 메소드사용)

        if (!review) {
          return res
            .status(404)
            .json({
              "message": "location not found",
              "학번/이름": "2016410026/신찬우"
            });
        } else {
          const response = {
            location: {
              name: location.name,
              id: req.params.locationid
            },
            review
          };

          return res
            .status(200)
            .json(response);
        }
      } else {
        return res
          .status(404)
          .json({
            "message": "location not found",
            "학번/이름": "2016410026/신찬우"
          });
      }
    });
};

const reviewsUpdateOne = (req, res) => { };
const reviewsDeleteOne = (req, res) => { };

module.exports = {
  reviewsCreate,
  reviewsReadOne,
  reviewsUpdateOne,
  reviewsDeleteOne
};