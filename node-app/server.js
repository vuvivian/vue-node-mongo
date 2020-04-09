/*
 * @Author: vuvivian
 * @Date: 2020-04-05 13:37:28
 * @LastEditTime: 2020-04-06 15:31:46
 * @LastEditors: Please set LastEditors
 * @Description: 引入并实例化express
 * @FilePath: /vue-node-mongo/node-app/server.js
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// 引入users.js
const users = require("./routers/api/users")

//DB config
const db = require ('./config/keys').mongoURL;

//引入password
const passport = require('passport');

 //使用body-parser的中间件
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());

// Connect to mongodb
mongoose.connect(db)
    .then(() => console.log("mongoDB connected"))
    .catch(err => console.log(err))

 
//passport初始化
app.use(passport.initialize());
//创建配置文件设置passport
require('./config/passport')(passport);

//使用routes
app.use("/api/users",users);

const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
})
