const path = require('path');

module.exports={
    //目标运行环境
    target:"node",
    entry:{
        app:path.join(__dirname,"../client/server.entry.js")
    },
    output:{
        filename:"server-entry.js",
        path:path.join(__dirname,"../dist"),
        //服务器端输出路径
        publicPath:"",
        libraryTarget: "commonjs2"
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
    }

}