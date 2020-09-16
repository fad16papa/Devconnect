const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const router = express.Router();

const User = require("../../models/User");

//@route Post api/users
//@desc Register User
//@access Public
router.post(
  "/",
  [
    check("userName", "UserName is required")
      .not()
      .isEmpty()
      .isLength({ min: 6 })
      .withMessage("Please provide UserName at least 6 chraracters"),
    check("email", "Email is required")
      .isEmail()
      .withMessage("Please provide a valid email."),
    check("firstName", "FirstName is required").not().isEmpty(),
    check("lastName", "LastName is required").not().isEmpty(),
    check("password", "Password is required").not(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //if the their is an error return 400 bad request
      return res.status(400).json({ errors: errors.array() });
    }

    const { userName, email, firstName, lastName, password } = req.body;

    try {
      //Check if the user exist
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exist" }] });
      }
      //Get users gravatar
      const avatar = gravatar.url(email, {
        size: "200",
        rating: "pg",
        default: "mm",
      });

      user = new User({
        userName,
        email,
        firstName,
        lastName,
        avatar,
        password,
      });
      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      //Save the user data in database
      await user.save();
      //create payload for jwt
      const payload = {
        user: {
          id: user.id,
        },
      };
      //merging payload and jwtsecret key for creating jwt
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (error, token) => {
          if (error) {
            throw error;
          } else {
            // Return jwt
            res.json({ token });
          }
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
