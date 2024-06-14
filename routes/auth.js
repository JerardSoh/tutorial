const express = require("express");
const router = express.Router();

const { isAuthenticatedUser } = require("../middlewares/auth");

//Importing job controller methods
const { loginUser, logoutUser } = require("../controllers/authControllers");

router.route("/login").post(loginUser);
router.route("/logout").get(isAuthenticatedUser, logoutUser);

module.exports = router;
