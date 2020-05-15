export const u_isPc = function(){
    const ua = navigator.userAgent;
    if ((ua.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i))) {
        if (/iPhone|iPad|iPod/.test(ua)) {
            return 'ios'     
        } else if (/Android/.test(ua)) {
            return 'android'   
        }
    }else{
        return 'PC'
    }
}