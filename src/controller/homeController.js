const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUsePage = (req, res) => {
  return res.render("user.ejs");
};

module.exports = {
  handleHelloWorld,
  handleUsePage,
};
