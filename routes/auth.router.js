const express = require('express');

const passport = require('passport');




const router = express.Router();
router.post('/login', 
// la estrategias es local 
passport.authenticate('local', { session: false }),
 //que no queremos las sessiones
async (req, res, next) => {
  try {
   res.json(req.user);     
  } catch (error) {
    next(error);
  }
});

module.exports = router;
