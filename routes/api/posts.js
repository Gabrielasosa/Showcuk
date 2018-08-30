const express = require("express");
const router = express.Router();

//@route    GET api/post/test
//@desc     Test post route
//@access   Public
router.get("/test", (req, res) => res.json({ message: "post works" }));

module.exports = router;