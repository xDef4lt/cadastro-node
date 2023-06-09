let express = require("express");
let router = express.Router();

router.get("/", function (req, res) {
    res.render("pages/index");
});
router.get("/html", function (req, res) {
    res.render("pages/html");
});
router.get("/jquery", function (req, res) {
    res.render("pages/jquery");
});
router.post("/html", function (req, res) {
    res.json(req.body);
});
router.post("/jquery", function (req, res) {
    console.log(req.body)
});

module.exports = router;
