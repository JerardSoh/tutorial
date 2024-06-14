const express = require("express");
const router = express.Router();

const { createUser, getUserProfile } = require("../controllers/userControllers");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/user/new").post(createUser);
//router.route('/user').get( isAuthenticatedUser, getUserProfile);

module.exports = router;
