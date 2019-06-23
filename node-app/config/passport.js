const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    mongoose = require('mongoose'),
    User = mongoose.model('users'),
    keys = require('../config/keys');
//这样写一直报错，报错查看【问题集锦】 解决方法：更改opts书写
// const opts = {} 
// // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
// // opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
// opts.JwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.JwtStrategy = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = keys.secretOrKey;
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.secretOrKey
};
module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        // console.log(jwt_payload);
        User.findById(jwt_payload.id)
        .then(user => {
            if (user) { return done(null,user);}
            return done(null,false)
        }).catch(err => console.log(err))
    }));
}