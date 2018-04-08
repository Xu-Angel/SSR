import React from "react";
import App from "./index.js";

import ReactDom from "react-dom";
import {AppContainer} from "react-hot-loader"
const root = document.getElementById('root')
const render = Component=>{
    ReactDom.hydrate(<AppContainer>
        <Component/>
    </AppContainer>,root)
}//服务器端渲染方法

render(App)

if(module.hot){
    module.hot.accept("./index.js",()=>{
        const NextApp = require("./index.js").default
        render(NextApp)
    })
}
