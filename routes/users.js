var express = require("express");
var router = express.Router();
const { loginRequired } = require("../auth");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/sepet", loginRequired, (req, res, next) => {
  res.render("myCart");
});

module.exports = router;
