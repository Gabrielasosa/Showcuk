const express = require("express");
const router = express.Router();

//Load StarMEnu Model
const Starmenu = require("../../models/StarMenu");
/*
  *route    GET api/starmenu/test
  *desc     Test get route
  *access   Public
*/
router.get("/test", (req, res) => res.json({ message: "Menu works" }));

/*
  *route    GET api/starmenu/all
  *desc     Test get route
  *access   Public
*/

router.get("/all", (req, res) => {
  const errors = {};
  Starmenu.find()
    .populate("_id", ["name", "description"])
    .then(starmenu => {
      if (!starmenu) {
        errors.nomenu = "No hay menu";
        return res.status(404).json(errors);
      }
      res.json(starmenu);
    })
    .catch(err => res.status(404).json({ starmenu: "No hay Menu" }));
});
//post

router.post("/mn", (req, res) => {
  const newStarmenu = new Starmenu({
    name: req.body.name,
    price: req.body.price,
    descrition: req.body.descrition
  });

  newStarmenu
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
});
module.exports = router;
