// GET 'about' page
const about = (req, res) => {
  res.render('generic-text', {
    title: 'About (ChanWoo Shin_2016410026)',
  });
};

module.exports = {
  about
};