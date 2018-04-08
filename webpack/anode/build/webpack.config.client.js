const path = require('path');
const process=require('process')
const webpack = require('webpack')
const HTMLPlugin = require("html-webpack-plugin")
const isDev = process.env.NODE_ENV==="development"

const config={
    entry:{
        app:path.join(__dirname,"../client/app.js")
    },
    output:{
        //[name]变量对应上面的入口文件名字
        filename:"[name].[hash].js",
        path:path.join(__dirname,"../dist"),
        //
        publicPath:"/public/"
    },
    module:{
        rules:[
            {
                test:/.jsx$/,
                loader:"babel-loader"
            },
            {
                test:/.js$/,
                loader:"babel-loader",
                exclude:[
                    path.join(__dirname,"../node_modules")

                ]
            }
        ]

    },
    plugins:[
        //插入页面文件
        new HTMLPlugin({
            template:path.join(__dirname,"../client/template.html")
        })
    ]

}

if(isDev){
    config.devServer={
        host:"0.0.0.0",
        port:"8888",
        contentBase:path.join(__dirname,"../dist"),
        //开启热刷新
        hot:true,
        //发布路径
        publicPath:"/public/",
        historyApiFallback:{
            index:"/public/index.html"
        }
    }
    //添加插件
    config.plugings.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = config