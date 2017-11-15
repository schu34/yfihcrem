const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth");

var authConfig = require("./auth");

module.exports = function(passport) {



  passport.use(new GoogleStrategy(authConfig.GoogleStrategy), (token, refreshToken, profile, done)=>{

    process.nextTick(()=>{
      db.findMany("users", {"google.id": profile.id})
        .then((users)=>{
          if(users.length){
            done(null, users[0]);
          } else {
            newUser = {google:{
              id: profile.id,
              token,
              name:profile.displayName,
              email: profile.email,
            }}
            return db.insert("users", newUser)
          }
        })
        .then((user)=>{
          done(null, user);
        })
    })

  });



};
