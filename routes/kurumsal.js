var express = require("express");
var router = express.Router();

router.get("/iptal", (_, res) => {
  res.render("info/cancel");
});

router.get("/kargo", (_, res) => {
  res.render("info/cargo");
});

router.get("/gizlilik", (_, res) => {
  res.render("info/privacy");
});

module.exports = router;
