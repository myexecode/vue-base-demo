import axios from 'axios'
// import qs from 'qs' 

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    let { method, data } = config;
    console.log(data, '请求拦截器');
    // if(method.toLowerCase() === 'post' && typeof data === 'object'){
    //     config.data = qs.stringify(data); // 将对象转换成query参数格式的字符串 
    // }
    return config;
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 位于2xx范围内的任何状态代码都会触发此函数
    // 在这里可以处理后台返回的响应数据
    return response;
}, function (error) {
    // 任何超出2xx范围的状态码都会触发此函数
    // 处理响应错误的反馈信息
    return Promise.reject(error);
    // return new Promise(()=>{}); 若返回一个pending状态的promise则会中断promise链
});

const axiosSend = function(url, options, headers={}){
    /** headers:
     *  'Content-Type': 'application/x-www-form-urlencoded'  url传参key/value格式
     *                  'application/json'  JSON数据格式
     *                  'application/octet-stream'  二进制流数据（如常见的文件下载）
     *                  'multipart/form-data' 需要在表单中进行文件上传时，就需要使用该格式
     * 其他格式可参考：https://www.cnblogs.com/klb561/p/10090540.html
    */
    return axios({
        method: 'get',
        url: url,
        headers: {
            ...headers
        },
        ...options
    })
}
const getReq = function(url, config){
    // get请求必须用 params传参
    let options = {
        method: 'get',
        params: config
    };
    return axiosSend(url,options);
}
const postReq = function(url, config){
    let options = {
        method: 'post',
        data: config
    };
    return axiosSend(url,options);
}

export {
    axiosSend,
    getReq,
    postReq
};