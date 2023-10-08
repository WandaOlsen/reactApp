const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports=function(app){
    app.use(
        '/api',
        //会给匹配到的每一个api替换成http://localhost:7788
        createProxyMiddleware({
            target:'http://localhost:7788',
            changeOrigin:true,
            pathRewrite:{
                "^/api":"",//路径重写
            }
        })
    )
}