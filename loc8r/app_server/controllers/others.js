// GET 'about' page
const about = (req, res) => {
  res.render('index', {
    title: 'About (ChanWoo Shin_2016410026)',
  });
};

module.exports = {
  about
};