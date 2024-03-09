const User = require("../model/user");
const VerificationToken = require("../model/verificationToken");

const { sendError } = require("../utils/helper");
const jwt = require("jsonwebtoken");
const {
  generateOTP,
  mailTransport,
  generateEmailTemplate,
  plainEmailTemplate,
} = require("../utils/mail");
const { isValidObjectId } = require("mongoose");

exports.createUser = async (req, res) => {
  const { name, email, password, mobile } = req.body;
  const isAdmin = false;
  const user = await User.find({ email });

  if (user.length > 0) {
    return sendError(res, "This email is already exists ");
  } else {
    const newUser = new User({
      name,
      email,
      password,
      mobile,
      isAdmin,
    });

    const OTP = generateOTP();
    const verificationToken = new VerificationToken({
      owner: newUser._id,
      token: OTP,
    });
    await verificationToken.save();
    await newUser
      .save()
      .then((data) => {
        console.log("Data saved Successfully...");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    mailTransport().sendMail({
      from: "abhishekpandey095155@gmail.com",
      to: newUser.email,
      subject: "Verify Your email account",
      html: generateEmailTemplate(OTP),
    });

    res.send(newUser);
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  var isAdmin = false;
  if (!email.trim() || !password.trim()) {
    return sendError(res, "email/password is missing!");
  }
  const user = await User.findOne({ email });
  if (user.isAdmin === true) {
    isAdmin = true;
  } else isAdmin = false;

  if (!user) {
    return sendError(res, "User not found");
  }

  const isMatched = await user.comparePassword(password);

  if (!isMatched) {
    return sendError(res, "email/password does not match!");
  }
  const token = jwt.sign(
    { userId: user._id, name: user.name, email: user.email, isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.json({
    success: true,
    token
  });
};

exports.verifyEmail = async (req, res) => {
  const { userId, otp } = req.body;
  if (!userId || !otp.trim()) {
    return sendError(res, "Invalid request, missing parameters !");
  }
  if (!isValidObjectId(userId)) {
    return sendError(res, "Invalid user id !");
  }
  const user = await User.findById(userId);
  if (!user) {
    return sendError(res, "User Not found !");
  }
  if (user.verified) {
    return sendError(res, "This account is already verified!");
  }
  const token = await VerificationToken.findOne({ owner: user._id });
  if (!token) {
    return sendError(res, "Sorry user not found");
  }
  const isMatched = await token.compareToken(otp);
  if (!isMatched) {
    return sendError(res, "Please provide a valid OTP");
  }
  user.verified = true;

  await VerificationToken.findByIdAndDelete(token._id);
  await user.save();

  mailTransport().sendMail({
    from: "abhishekpandey095155@gmail.com",
    to: user.email,
    subject: "Wellcome Email",
    html: plainEmailTemplate(),
  });

  res.json({
    success: true,
    message: "Your email is verfied successfully",
    user: {
      name: user.name,
      email: user.email,
      id: user._id,
    },
  });
};
