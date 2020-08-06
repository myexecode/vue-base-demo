import SvgIcon from './svgIcon.vue'
const req = require.context('../svgIcons', false, /\.svg$/);
req.keys().map(req);

export default {
    install(Vue){
        Vue.component('svg-Icon', SvgIcon)
    }
}