const express = require('express');
const {signup,login,logout, checkAuth, updateProfile} = require('../controllers/auth.controller');
const {protectRoute} = require('../middleware/auth.middleware');


const router = express.Router()

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/update-profile").put(protectRoute,updateProfile);
router.route("/check").get(protectRoute,checkAuth);
module.exports = router;