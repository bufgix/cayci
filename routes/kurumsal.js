var express = require("express");
var router = express.Router();

router.get("/iptal", (_, res) => {
  res.render("info/cancel", { title: "İptal Şartları" });
});

router.get("/kargo", (_, res) => {
  res.render("info/cargo", { title: "Kargo" });
});

router.get("/gizlilik", (_, res) => {
  res.render("info/privacy", {title: "Gizlilik"});
});

module.exports = router;
