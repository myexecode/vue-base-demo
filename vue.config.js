module.exports = {
    devServer: {
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
    }
}