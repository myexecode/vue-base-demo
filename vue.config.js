const port = '7070';
const title = '我爱杨紫';
const path = require('path');
const resolve = function(dir){
    return path.join(__dirname,dir)
};

module.exports = {
    devServer: {
        port,
        proxy: {
            // 配置跨域
            '/api' : {
                target: 'https://gw.m.163.com',
                changOrigin: true,
                pathRewrite: {
                    '^/api': '' // 去除掉多余的api。如：http://localhost:8080/api/admin/login -> http://xxx.com:2086/admin/login
                }
            }
        }
    },
    configureWebpack: {
        name: title
    },
    chainWebpack(config){
        config.module.rule('svg')
            .exclude.add(resolve('src/svgIcons'))
                .end();

        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/svgIcons'))
                .end()
            .use('svg-sprite-loader')
                .loader('svg-sprite-loader')
                .options({symbolId: 'icon-[name]'})
                .end();
    }
}