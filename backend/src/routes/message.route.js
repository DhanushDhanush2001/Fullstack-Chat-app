const express = require('express');
const { protectRoute } = require('../middleware/auth.middleware');
const {getMessages, getUsersForSidebar,sendMessage} = require('../controllers/message.controller');

const router = express.Router()

router.route("/users").get(protectRoute,getUsersForSidebar);
router.route("/:id").get(protectRoute,getMessages);
router.route("/send/:id").post(protectRoute,sendMessage);

module.exports = router;