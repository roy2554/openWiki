const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const generateNewApiToken = require('./generateNewApiToken');

const User = require('../../database/Model/user');
const keys = require('./keys');

passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
})

passport.deserializeUser((id: any, done: any) => {
    User.findById(id).then((user: any) => {
        done(null, user);
    })
})

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: 'http://localhost:3000/v2/auth/google/redirect',
        // change callBackURL to https://productionDomain/v2/auth/google/redirect when production mode.
    },
    function (request: any, accessToken: any, refreshToken: any, profile: any, done: any) {
        User.findOne({ email: profile._json.email }).then((user: any) => {
            if (user) {
                if (user.accessToken !== accessToken) {
                    generateNewApiToken(profile.id).then((newAPIKey: any) => {
                        user.apiKey = newAPIKey[1]
                    })
                    user.accessToken = accessToken
                    user.save()
                }
                console.log("LOGGED IN")
                return done(null, user);
            } else {
                generateNewApiToken(profile.id).then((newAPIKey: any) => {
                    User.findOne({}, {}, { sort: { _id: -1 } }).then((lastUser: any) => {
                        new User({
                            userId: lastUser.userId + 1 || 1,
                            username: profile._json.name,
                            email: profile._json.email,
                            avatar: profile._json.picture,
                            accessToken: accessToken,
                            apiKey: newAPIKey[1],
                        }).save().then((newUser: any) => {
                            console.log("NEW USER CREATED")
                            return done(null, newUser);
                        })
                    })
                    
                })
                
            }
        })
    }
))

export {}
