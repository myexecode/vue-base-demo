module.exports = {
    name: 'vue2.0-router',
    contents: [{
            keyWord: `Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：`
        },
        {
            keyWord: `<router-link>`,
            list: [{
                    keyWord: `v-slot`,
                    exp: `<router-link
                    to="/about"
                    v-slot="{ href, route, navigate, isActive, isExactActive }"
                  >
                    <NavLink :active="isActive" :href="href" @click="navigate"
                      >{{ route.fullPath }}</NavLink
                    >
                  </router-link>`
                },
                {
                    keyWord: `to`,
                    des: `t: string | Location, required`
                },
                {
                    keyWord: `replace`,
                    des: `设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。`
                },
                {
                    keyWord: `append`,
                    des: `设置 append 属性后，则在当前 (相对) 路径前添加基路径。`
                },
                {
                    keyWord: `tag`,
                    des: `指定渲染标签`
                },
                {
                    keyWord: `active-class`,
                    des: `设置链接激活时使用的 CSS 类名`
                },
                {
                    keyWord: `exact`,
                    des: `“是否激活”默认类名的依据是包含匹配。`
                },
                {
                    keyWord: `event`,
                    des: `声明可以用来触发导航的事件。`
                },
                {
                    keyWord: `exact-active-class`,
                    des: `配置当链接被精确匹配的时候应该激活的 class。`
                },
                {
                    keyWord: `aria-current-value`,
                    des: `当链接根据精确匹配规则激活时配置的 aria-current 的值。`
                }
            ]
        },
        {
            keyWord: `<router-view>`,
            des: `<router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件。<router-view> 渲染的组件还可以内嵌自己的 <router-view>，根据嵌套路径，渲染嵌套组件。`,
            list: [{
                keyWord: `name`,
                des: `如果 <router-view>设置了名称，则会渲染对应的路由配置中 components 下的相应组件。查看 命名视图 中的例子`
            }]
        },
        {
            keyWord: `routes`,
            des: 'RouteConfig 的类型定义：',
            exp: `interface RouteConfig = {
                path: string,
                component?: Component,
                name?: string, // 命名路由
                components?: { [name: string]: Component }, // 命名视图组件
                redirect?: string | Location | Function,
                props?: boolean | Object | Function,
                alias?: string | Array<string>,
                children?: Array<RouteConfig>, // 嵌套路由
                beforeEnter?: (to: Route, from: Route, next: Function) => void,
                meta?: any,
                // 2.6.0+
                caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
                pathToRegexpOptions?: Object // 编译正则的选项
              }`
        },
        {
            keyWord: `mode`,
            des: `配置路由模式`,
            exp: `hash / history / abstract支持所有 JavaScript 运行环境，如 Node.js 服务器端`
        },
        {
            keyWord: `base`,
            des: `应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。`
        },
        {
            keyWord: `linkActiveClass`,
            des: `全局配置 <router-link> 默认的激活的 class`
        },
        {
            keyWord: `linkExactActiveClass`,
            des: `全局配置 <router-link> 默认的精确激活的 class。`
        },
        {
            keyWord: `scrollBehavior`,
            des: `滚动行为,这个功能只在支持 history.pushState 的浏览器中可用。`,
            exp: `const router = new VueRouter({
                routes: [...],
                scrollBehavior (to, from, savedPosition) {
                  // return 期望滚动到哪个的位置
                }
              })`
        },
        {
            keyWord: `parseQuery / stringifyQuery`,
            des: `提供自定义查询字符串的解析/反解析函数。覆盖默认行为。`
        },
        {
            keyWord: `fallback`,
            des: `当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式。默认值为 true。在 IE9 中，设置为 false 会使得每个 router-link 导航都触发整页刷新。它可用于工作在 IE9 下的服务端渲染应用，因为一个 hash 模式的 URL 并不支持服务端渲染`
        },
        {
            keyWord: `router.app`,
            des: `配置了 router 的 Vue 根实例。`
        },
        {
            keyWord: `router.mode`,
            des: `路由使用的模式。`
        },
        {
            keyWord: `router.currentRoute`,
            des: `当前路由对应的路由信息对象。`
        },
        {
            keyWord: `路由守卫`,
            list: [{
                    keyWord: `router.beforeEach`,
                    exp: `router.beforeEach((to, from, next) => {
                        /* 必须调用 next */
                      })`
                },
                {
                    keyWord: `router.beforeResolve`,
                    exp: `router.beforeResolve((to, from, next) => {
                        /* 必须调用 next */
                      })`
                },
                {
                    keyWord: `router.afterEach`,
                    exp: `router.afterEach((to, from) => {})`
                }
            ]
        },
        {
            keyWord: `跳转`,
            des: `router.push;router.replace;router.go;router.back;router.forward`,
            exp: `router.push(location, onComplete?, onAbort?)
            router.push(location).then(onComplete).catch(onAbort)
            router.replace(location, onComplete?, onAbort?)
            router.replace(location).then(onComplete).catch(onAbort)
            router.go(n)
            router.back()
            router.forward()`
        },
        {
            keyWord: `router.getMatchedComponents`,
            des: `返回目标位置或是当前路由匹配的组件数组 (是数组的定义/构造类，不是实例)。通常在服务端渲染的数据预加载时使用。`
        },
        {
            keyWord: `router.resolve`,
            des: `解析目标位置 (格式和 <router-link> 的 to prop 一样)。`
        },
        {
            keyWord: `router.addRoutes`,
            des: `动态添加更多的路由规则。参数必须是一个符合 routes 选项要求的数组`
        },
        {
            keyWord: `router.onReady`,
            des: `该方法把一个回调排队，在路由完成初始导航时调用，这意味着它可以解析所有的异步进入钩子和路由初始化相关联的异步组件。`,
            exp: `router.onReady(callback, [errorCallback])`
        },
        {
            keyWord: `router.onError`,
            des: `注册一个回调，该回调会在路由导航过程中出错时被调用。`
        },
        {
            keyWord: `路由对象`,
            des: `在组件内，即 this.$route;在 $route 观察者回调内;router.match(location) 的返回值;导航守卫的参数：`,
            exp: `$route.path; $route.params; $route.query; $route.hash; $route.fullPath; $route.matched; $route.name; $route.redirectedFrom`
        },
        {
            keyWord: `组件内守卫`,
            des: `beforeRouteEnter; beforeRouteUpdate; beforeRouteLeave`
        }
    ]
}