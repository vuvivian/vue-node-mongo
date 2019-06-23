// @login & regeister
const express = require('express');
const router = express.Router();
const keys = require('../../config/keys')
//引入bcryp
const bcrypt = require('bcrypt');
//引入user
const User = require('../../models/user');
// 全球头像
const gravatar = require('gravatar');
// jwt实现token
const jwt = require('jsonwebtoken');

const passport = require('passport');

//$route GET api/users/test
//@desc 返回请求的json数据
//@access public公开的接口
// router.get("/test", (req,res) => {
//     res.json({msg: "login works"})
// })

//$route POST api/users/register
//@desc 返回请求的json数据
//@access public公开的接口
router.post("/register", (req, res) => {
    // console.log(req.body)
   //查询数据库中是否拥有邮箱
   User.findOne({email:req.body.email})
    .then((user) => {
        if (user) {
            return res.status(400).json('邮箱已被注册');
        } else {
            const avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
            const newUser = new User ({
                name:req.body.name,
                email:req.body.email,
                avatar,
                password:req.body.password,
                identity:res.body.identity
            })

            // 加密密码
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    // Store hash in your password DB.
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err))
                });
            });
        }
    })

})

//$route POST api/users/login
//@desc 返回请求的json数据 token jwt passport
//@access public公开的接口
router.post('/login', (req,res) => {
    const {email,password} = req.body;
    //查询数据库
    User.findOne({email})
    .then(user => {
        if (!user) {
            return res.status(404).json('用户不存在！');
        }
        //密码匹配
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (isMatch){
                    // jwt 返回token
                    const {id,name,avatar,identity} = user;
                    const rule = {id,name, avatar,identity};
                    // jwt.sign("规则","加密的名字","过期时间","箭头函数");
                    jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token) => {
                        if (err) throw err;
                        res.json({
                            success:true,
                            access_token:"Bearer "+token  //必须是Bearer加空格 
                        });
                    });
                    // res.json({msg:"success"});
                } else {
                    return res.status(400).json("密码错误")
                }
            })
    })
})

//$route GET api/users/current
//@desc return current user
//@access Private
//"验证token":passport passport-jwt
router.get("/current",passport.authenticate('jwt',{session:false}), (req,res) => {
    const { name, id, email,identity} = req.user;
    res.json({
        id,name,email,identity
    })
})

module.exports = router;