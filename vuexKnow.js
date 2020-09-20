module.exports = {
    name: 'vue2.0-vuex',
    contents: [
        {
            keyWord: `Vuex.Store构造器`,
            des: `构造器:Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。`,
            exp: `const store = new Vuex.Store({ ...options })`,
            lsit: [
                {
                    keyWord: `常用选项`,
                    exp: `namespaced; state; mutations; actions; getters; modules;`
                },
                {
                    keyWord: `plugins`,
                    des: `Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。Vuex 插件就是一个函数，它接收 store 作为唯一参数：`
                },
                {
                    keyWord: `strict`,
                    des: `使 Vuex store 进入严格模式，在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。`
                },
                {
                    keyWord: `devtools`,
                    des: `为某个特定的 Vuex 实例打开或关闭 devtools。对于传入 false 的实例来说 Vuex store 不会订阅到 devtools 插件。可用于一个页面中有多个 store 的情况。`
                }
            ]
        },
        {
            keyWord: `Vuex.Store实例属性`,
            exp: `state只读；getters只读`
        },
        {
            keyWord: `Vuex.Store实例方法`,
            exp: `commit; dispatch;`,
            list: [
                {
                    keyWord: `replaceState`,
                    des: `替换 store 的根状态，仅用状态合并或时光旅行调试。`
                },
                {
                    keyWord: `watch`,
                    des: `响应式地侦听 fn 的返回值，当值改变时调用回调函数。fn 接收 store 的 state 作为第一个参数，其 getter 作为第二个参数。最后接收一个可选的对象参数表示 Vue 的 vm.$watch 方法的参数。`
                },
                {
                    keyWord: `subscribe`,
                    des: `订阅 store 的 mutation。handler 会在每个 mutation 完成后调用，接收 mutation 和经过 mutation 后的状态作为参数：`,
                    exp: `store.subscribe((mutation, state) => {
                        console.log(mutation.type)
                        console.log(mutation.payload)
                      })`
                },
                {
                    keyWord: `subscribeAction`,
                    des: `订阅 store 的 action。handler 会在每个 action 分发的时候调用并接收 action 描述和当前的 store 的 state 这两个参数：`
                },
                {
                    keyWord: `registerModule`,
                    des: `注册一个动态模块。`
                },
                {
                    keyWord: `unregisterModule`,
                    des: `卸载一个动态模块。`
                },
                {
                    keyWord: `hotUpdate`,
                    des: `热替换新的 action 和 mutation`
                }
            ]
        },
        {
            keyWord: `辅助函数`,
            des: `mapState; mapGetters; mapActions; mapMutations; createNamespacedHelpers;`,
            exp: `import { createNamespacedHelpers } from 'vuex';
                const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')`
        }
    ]
}