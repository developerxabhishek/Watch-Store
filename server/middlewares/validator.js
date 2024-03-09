const { check, validationResult } = require("express-validator");

exports.validateUser = [
  check("name")
    .trim()
    .not()
    .isEmail()
    .withMessage("Name is missing!")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be 3 to 50 character long!"),
  check("email").normalizeEmail().isEmail().withMessage("Email is invalid"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing!")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 8 to 20 character long!"),
  check("mobile")
    .isNumeric()
    .withMessage("Mobile number should be numeric only.")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile number must be of 10 characters long!"),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (!error.length) return next();

  res.status(400).json({ success: false, error: error[0].msg });
};
