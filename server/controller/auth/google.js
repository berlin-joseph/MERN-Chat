const passport = require("passport");
const User = require("../../schema/user");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

let email;
let avatar;
let name;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "307731238173-7vs8ot8igbjd73maser991aq8bb41b0j.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      try {
        // console.log(profile._json);
        email = profile._json.email;
        avatar = profile._json.picture;
        name = profile._json.name;

        return done(null, profile);
      } catch (error) {
        return done(error);
      }
    }
  )
);

exports.google = (req, res, next) => {
  passport.authenticate("google", { scope: ["email", "profile"] })(
    req,
    res,
    next
  );
};

exports.callback = (req, res, next) => {
  passport.authenticate("google", {
    successRedirect: "/auth/google/success",
    failureRedirect: "/auth/google/failure",
  })(req, res, next);
};

exports.success = async (req, res) => {
  res.send("User data processed successfully.");
  try {
    const ExistUser = await User.findOne({ email: email });
    if (!ExistUser) {
      await User.create({ name: name, email: email, avatar: avatar });
      return res.send({ message: "user created successfully" });
    }
    res.send({ message: "user already available" });
  } catch (error) {}
};

exports.failure = (req, res) => {
  res.send({ success: false, message: "nope" });
};

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

function isLoggedIn(req, res, next) {
  if (req.user !== undefined) {
    next();
  } else {
    res.status(401).send({ success: false, message: "Unauthorized" });
  }
}
