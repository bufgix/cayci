const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../model/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "164866071026-duff9lrci4iodmrna6dks2d5retqervm.apps.googleusercontent.com",
      clientSecret: "7RBaS_st2FoWXySr1HU85p2h",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (token, tokenSecret, profile, done) {
      User.findOneOrCreate(
        { googleId: profile.id },
        { name: profile.displayName, googleId: profile.id },
        (err, user) => {
          done(err, user);
        }
      );
    }
  )
);
