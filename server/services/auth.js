const express = require("express");
const passport = require("passport");
const router = express.Router();

//implement routes here
router.post("/login", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

router.post("/signup", (req, res) => {});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
  })
);

module.exports = router;
