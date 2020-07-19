// We need a app.get to the path /handlebars
const db = require("../models");

// Get route to render the route page
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  //  Get route to render the home page
  app.get("/login", function (req, res) {
    res.render("login");
  });

  // Get route to render educator information
  app.get("/dashboard", function (req, res) {
    // find the data here
    //
    db.Educator.findOne({}).then((educator) => {
      res.render("dashboard", {
        educator,
      });
    });
  });

  // Get route to render registration page
  app.get("/register", function (req, res) {
    res.render("register");
  });

  // Get route to render update page
  app.get("/update", function (req, res) {
    res.render("update");
  });

  // Get route to render search results
  app.get("/search", function (req, res) {
    res.render("search");
  });
};
