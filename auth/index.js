var express = require("express");
var router = express.Router();
const passport = require("passport");

const loginRequired = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

router.get("/logout", (req, res, next) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

module.exports = { authRouter: router, loginRequired };
