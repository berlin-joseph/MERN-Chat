const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const connectDatabase = require("./config/db");

// Load environment variables
dotenv.config({ path: path.join(__dirname, ".", ".env") });

// Initialize Express app
const app = express();

// Session middleware
app.use(
  session({
    secret: "my_love",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Enable CORS
app.use(cors());
app.options("*", cors());

// Middleware
app.use(express.json());
app.use(morgan("tiny"));

// Initialize Passport
app.use(passport.initialize());

// Configure Google OAuth2 Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

// Passport session serialization and deserialization
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// Authentication routes
const googleAuthRouter = require("./routes/auth/google");
app.use("/", googleAuthRouter);

// Initialize database connection
connectDatabase();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
