const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("prueba de api nueva");
});

module.exports = router;
