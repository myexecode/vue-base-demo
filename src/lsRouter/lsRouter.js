let Vue;

class LsVueRouter {
    constructor(options) {
        this.$options = options;

        // 创建一个路由path和route映射
        this.routeMap = {};

        // 利用vue对当前路由current做响应式
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }

    init(){
        // 绑定浏览器事件
        this.bindEvents();

        // 解析路由配置
        this.createRouteMap(this.$options);

        // 创建组件
        this.initComponents();
    }

    bindEvents(){
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        window.addEventListener('load', this.onHashChange.bind(this))
    }

    onHashChange(){
        // http://locahost/#/home
        this.app.current = window.location.hash.slice(1) || '/';
    }

    createRouteMap(options){
        options.routes.forEach(item => {
            // ['/home']: {path: '/home', component: Home}
            this.routeMap[item.path] = item;
        })
    }

    initComponents(){
        // 创建两个全局组件
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h){
                // 目标是： <a :href='to' >xxx</a>
                return h('a',{attrs: {href: '#'+this.to}}, this.$slots.default)
                // return <a herf={'#'+this.to} >{this.$slots.default}</a>
            }
        })

        Vue.component('router-view', {
            // 用箭头函数保留this指向LsVueRouter实例 （真正的vue-router源码并非如此处理的）
            render: (h) => {
                const comp = this.routeMap[this.app.current].component;
                return h(comp);
            }
        })
    }
}

// 把router变为插件
LsVueRouter.install = function (_vue) {
    Vue = _vue; // 这里保存上面使用

    // 混入任务
    Vue.mixin({
        beforeCreate() {
            // 这里的代码将来会在外面初始化的时候被调用，这样我们就实现了vue的扩展
            // 这里的this是vue组件实例但是这里只希望根组件执行一次

            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
        }
    })

}

export default LsVueRouter;