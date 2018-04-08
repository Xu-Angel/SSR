const express = require('express');
const ReactSSR = require('react-dom/server');
const fs = require('fs');
const path = require('path');

const app = express();
const template = fs.readFileSync(path.join(__dirname,"../dist/index.html"),'utf8')//获取渲染模板
const serverEntry = require('../dist/server-entry.js').default;//获取渲染数据

app.use('/public',express.static(path.join(__dirname,"../dist")))

app.get("*",(req,res)=>{
    //服务器渲染替换
    const appString = ReactSSR.renderToString(serverEntry);
    res.send(template.replace("<app></app>",appString))
})

app.listen(3333,function(){
    console.log('server is listening at 3333!')
})