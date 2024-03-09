const nodemailer = require("nodemailer");

exports.generateOTP = () => {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    const randval = Math.round(Math.random() * 9);
    otp = otp + randval;
  }
  return otp;
};

// exports.mailTransport = () => {
//   var transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: process.env.MAILTRAP_USERNAME,
//       pass: process.env.MAILTRAP_PASSWORD,
//     },
//   });
//   return transport;
// };

exports.mailTransport = () => {
  var transport = nodemailer.createTransport({
    service: "Gmail",
    // host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "abhishekpandey095155@gmail.com",
      pass: "ptjr tuev bttt kqtx",
    },
  });
  return transport;
};

exports.generateEmailTemplate = (code) => {
  return `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">WatchStore</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing our website watchStore. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${code}</h2>
      <p style="font-size:0.9em;">Regards,<br />WatchStore</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Your Brand Inc</p>
        <p>M.P. nagar bhopal </p>
        <p>India</p>
      </div>
    </div>
  </div>`;
};

exports.plainEmailTemplate = () => {
  return `<head>
    </head>
    <body bgcolor="black">
        <div>
          <div style="text-align:center; mid-width:375px; min-height:50px; padding-left:20px; padding-right:20px; max-width:600px; margin:auto; padding-top:10px">
            <img src="https://coupacafe.ncrengage.com/images/hero.png?ecdf2ecb0e3c7fca9019020cce29f631" alt="CompanyLogo" style="max-width:150px; border:5px; border-color:white; margin:20px;">
          </div>
          <div align="center" style="background-color:#FFFFFF; padding-left:20px; padding-right:20px; max-width:550px; margin:auto; border-radius:5px; padding-bottom:5px; text-align:left; margin-bottom:40px; width:80%"> 
            <h2 style="padding-top:25px; min-width:600; align:center; font-family:Roboto">
              Hi, 
            </h2>
            <p style="max-width:500px; align:center; font-family:Roboto; padding-bottom:0px; wrap:hard; line-height:25px">
              Thanks for creating an account with WatchStore We're so happy to have you on board. 
            </p>
           
            <p style="max-width:500px; align:center; font-family:Roboto; padding-bottom:0px; wrap:hard">
              Thank you,
            </p>
            <p style="max-width:500px; align:center; font-family:Roboto; padding-bottom:20px; wrap:hard">
              The WatchStore Team
            </p style="color:black">
            <hr>
            </hr>
            <p style="max-width:100%; align:center; font-family:Roboto; padding-bottom:10px; wrap:hard; padding-top: 0px; font-size:10px">
              You’re receiving this email because you recently created a new WatchStore account. If this wasn’t you, please ignore this email.
            </p>
          </div>
      </div>
    </body>`;
};
