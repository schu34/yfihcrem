const express = require("express");

const router = express.Router();




//implement routes here
router.post("/login", (req, res)=>{
  console.log(req.body);
  res.sendStatus(200);
})

router.post("/signup", (req,res)=>{
})





module.exports = router;
