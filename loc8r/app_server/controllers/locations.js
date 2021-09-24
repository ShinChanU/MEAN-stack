// GET 'home' page
const homeList = (req, res) => {
  res.render('location-list', {
    title: 'Home (ChanWoo Shin_2016410026)'
  });
};

// GET 'Location info' page
const locationInfo = (req, res) => {
  res.render('location-info', {
    title: 'Location info (ChanWoo Shin_2016410026)'
  });
};

// GET 'Add review' page
const addReview = (req, res) => {
  res.render('location-review-form', {
    title: 'Add review (ChanWoo Shin_2016410026)'
  });
};

module.exports = {
  homeList,
  locationInfo,
  addReview
};