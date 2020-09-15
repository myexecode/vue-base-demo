// vue2.0
module.exports = {
    version: 'vue2.0',
    contents: [{
            keyWord: 'vue不支持ie8及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性',
            des: ``,
            exp: ``
        },
        {
            keyWord: 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。',
            des: ``,
            exp: ``
        },
        {
            keyWord: '使用',
            list: [{
                    keyWord: 'cdn',
                    exp: `开发版：<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>;
                        生成版：<script src="https://cdn.jsdelivr.net/npm/vue"></script>`
                },
                {
                    keyWord: 'ES Modules',
                    exp: `<script type="module">
                            import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'
                        </script>`
                },
                {
                    keyWord: 'npm',
                    des: ``,
                    exp: `npm install vue`
                },
            ]
        },
        {
            keyWord: '创建实例',
            des: ``,
            exp: `var vm = new Vue()`
        },
        {
            keyWord: '阻止属性响应式',
            des: ``,
            exp: `new Vue({
                el: '#app',
                data: Object.freeze(obj)
              })`
        },
        {
            keyWord: '生命周期',
            des: ``,
            exp: `beforeCreate/created/beforeMount/mounted/beforeUpdate/updated/beforeDestroy/destroyed/errorCaptured`
        },
        {
            keyWord: '模板语法',
            des: `插值表达式 / 指令`,
            list: [{
                    keyWord: '文本',
                    exp: `<span>Message: {{ msg }}</span>；<span v-once>这个将不会改变: {{ msg }}</span>`
                },
                {
                    keyWord: 'html',
                    exp: `<span v-html="rawHtml"></span>`
                },
                {
                    keyWord: '属性',
                    exp: `<div v-bind:id="dynamicId"></div>`
                },
                {
                    keyWord: '条件渲染',
                    des: `v-if; v-else; v-else-if`
                },
                {
                    keyWord: 'key',
                    des: `表达“两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 即可：`,
                    exp: `<input placeholder="Enter your username" key="username-input">;
                    <input placeholder="Enter your email address" key="email-input">`
                },
                {
                    keyWord: `显示/隐藏`,
                    des: `v-show`
                },
                {
                    keyWord: `v-for`,
                    des: `列表渲染；当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级`,
                    exp: `<li v-for="item in items" :key="item.message">
                            {{ item.message }}
                        </li>`
                },
                {
                    keyWord: `v-on`,
                    des: `事件监听。:click/:keyup/:scroll/:submit;
                        修饰符：.stop/.prevent/.capture/.self/.once/.passive不阻止默认行为;
                        按键修饰符：.enter/.tab/.delete/.esc/.space/.up/.down/.left/.right;
                        自定义按键修饰符别名：Vue.config.keyCodes.f1 = 112；
                        系统修饰符：.ctrl/.alt/.shift/.meta/.exact精确修饰；
                        鼠标按键修饰符：.left/.right/.middle；`,
                    exp: `<a v-on:click.once="doThis"></a>`
                },
                {
                    keyWord: `v-model`,
                    des: `表单数据双向绑定`,
                    exp: `在“change”时而非“input”时更新:<input v-model.lazy="msg">;
                        <input v-model.number="age" type="number">;
                        <input v-model.trim="msg">`
                },
                {
                    keyWord: `v-slot`,
                    des: `插槽`
                },
                {
                    keyWord: `v-pre`,
                    des: `跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。`
                },
                {
                    keyWord: `v-cloak`,
                    des: `这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。`
                }
            ]
        },
        {
            keyWord: 'computed',
            des: `计算属性`,
            exp: `computed:{
                fullName: {
                    get(){},
                    set(){}
                }
            }`
        },
        {
            keyWord: 'watch',
            des: `侦听属性, 可以执行一部操作`,
            exp: `watch: {
                firstName(newVal,oldVal){}
            }`
        },
        {
            keyWord: 'class绑定',
            des: ``,
            exp: `<div
            class="static"
            v-bind:class="{ active: isActive, 'text-danger': hasError }"
          ></div>；<div v-bind:class="[activeClass, errorClass]"></div>；
          <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>`
        },
        {
            keyWord: 'style绑定',
            des: ``,
            exp: `<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>；
                <div v-bind:style="[baseStyles, overridingStyles]"></div>；
                <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>`
        },
        {
            keyWord: `vue重写并能够监听的数组方法`,
            exp: `push(); pop(); shift() ;unshift() ;splice() ;sort(); reverse()`
        },
        {
            keyWord: `silent`,
            des: `类型：boolean; 默认值：false`,
            exp: `Vue.config.silent=true; 取消所有的日志和警告`
        },
        {
            keyWord: `optionMergeStrategies`,
            des: `自定义合并策略；类型：{ [key: string]: Function }; 默认: {}`
        },
        {
            keyWord: `devtools`,
            des: `配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。`
        },
        {
            keyWord: `errorHandler`,
            des: `错误捕获函数; t: funciton ,m: undefined`
        },
        {
            keyWord: `warnHandler`,
            des: `警告处理函数; t: function, m: undefined`,
            exp: `Vue.config.warnHandler = function (msg, vm, trace) {}`
        },
        {
            keyWord: `ignoredElements`,
            des: `忽略元素设置; t: Array<string | RegExp>, m: []`,
            exp: `Vue.config.ignoredElements = [
                'my-custom-web-component',
                'another-web-component',
                /^ion-/
              ]`
        },
        {
            keyWord: `keyCodes`,
            des: `给 v-on 自定义键位别名。t: { [key: string]: number | Array<number> },m:{}`,
            exp: `Vue.config.keyCodes = {}`
        },
        {
            keyWord: `performance`,
            des: `开发模式下的性能追踪。t: boolean, m: false`
        },
        {
            keyWord: `productionTip`,
            des: `设置为 false 以阻止 vue 在启动时生成生产提示。t: boolean, m: true`
        },
        {
            keyWord: `Vue.extend( options )`,
            des: `扩展子类。t: {Object} options`
        },
        {
            keyWord: `Vue.nextTick( [callback, context] )`,
            des: `在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
                t: {Function} [callback] {Object} [context]`
        },
        {
            keyWord: `Vue.set( target, propertyName/index, value )`,
            des: `t: {Object | Array} target {string | number} propertyName/index {any} value; 返回设置的值`,
            exp: `向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')`
        },
        {
            keyWord: `Vue.delete( target, propertyName/index )`,
            des: `删除对象属性，并触发视图跟新。t: {Object | Array} target {string | number} propertyName/index`
        },
        {
            keyWord: `Vue.directive( id, [definition] )`,
            des: `注册或获取全局指令。t: {string} id {Function | Object} [definition]`
        },
        {
            keyWord: `Vue.filter( id, [definition] )`,
            des: `注册或获取全局过滤器。t: {string} id {Function} [definition]`
        },
        {
            keyWord: `Vue.component( id, [definition] )`,
            des: `注册或获取全局组件。t: {string} id {Function | Object} [definition]`,
            exp: `// 注册组件，传入一个扩展过的构造器 Vue.component('my-component', Vue.extend({ /* ... */ }));
                // 注册组件，传入一个选项对象 (自动调用 Vue.extend) Vue.component('my-component', { /* ... */ })`
        },
        {
            keyWord: `Vue.use(plugin)`,
            des: `安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
                `
        },
        {
            keyWord: `Vue.mixin( mixin )`,
            des: `混入属性/事件/钩子。t: {Object} mixin`
        },
        {
            keyWord: `Vue.compile( template )`,
            des: `渲染函数,将一个模板字符串编译成 render 函数。只在完整版时可用。t: {string} template`,
            exp: `Vue.compile('<div><span>{{ msg }}</span></div>')`
        },
        {
            keyWord: `Vue.observable( object )`,
            des: `让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。t: {Object} object`
        },
        {
            keyWord: `Vue.version`,
            des: `提供字符串形式的 Vue 安装版本号`,
            exp: `var version = Number(Vue.version.split('.')[0])`
        },
        {
            keyWord: `data`,
            des: `属性。t: Object | Function; 实例创建之后，可以通过 vm.$data 访问原始数据对象`
        },
        {
            keyWord: 'props',
            des: `传值；t: Array<string> | Object`,
            exp: `type, default, required, validator`
        },
        {
            keyWord: `propsData`,
            des: `创建实例时传递 props。主要作用是方便测试。`
        },
        {
            keyWord: `methods`,
            des: `方法；t: { [key: string]: Function }`
        },
        {
            keyWord: `el`,
            des: `挂载目标; t: string | Element`
        },
        {
            keyWord: `template`,
            des: `一个字符串模板作为 Vue 实例的标识使用。模板将会替换挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。`
        },
        {
            keyWord: `render`,
            des: `渲染函数；t: (createElement: () => VNode) => VNode`,
            tips: `Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。`
        },
        {
            keyWord: `renderError`,
            des: `render错误监听函数；t: (createElement: () => VNode, error: Error) => VNode`
        },
        {
            keyWord: `directives`,
            des: `包含 Vue 实例可用指令的哈希表。`
        },
        {
            keyWord: `filters`,
            des: `包含 Vue 实例可用过滤器的哈希表。`
        },
        {
            keyWord: `components`,
            des: `包含 Vue 实例可用组件的哈希表。`
        },
        {
            keyWord: `parent`,
            des: `this.$parent 访问父实例`
        },
        {
            keyWord: `mixins`,
            des: `mixins 选项接收一个混入对象的数组。这些混入对象可以像正常的实例对象一样包含实例选项，这些选项将会被合并到最终的选项中，使用的是和 Vue.extend() 一样的选项合并逻辑。也就是说，如果你的混入包含一个 created 钩子，而创建组件本身也有一个，那么两个函数都会被调用。`,
            exp: `var mixin = {
                created: function () { console.log(1) }
              }
              var vm = new Vue({
                created: function () { console.log(2) },
                mixins: [mixin]
              })`
        },
        {
            keyWord: `extends`,
            des: `允许声明扩展另一个组件 (可以是一个简单的选项对象或构造函数)，而无需使用 Vue.extend。这主要是为了便于扩展单文件组件。t: Object | Function`
        },
        {
            keyWord: `provide / inject`,
            des: `跨代传参；t: provide：Object | () => Object
                inject：Array<string> | { [key: string]: string | Symbol | Object }`
        },
        {
            keyWord: `name`,
            des: `允许组件模板递归地调用自身。注意，组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name。t: string`
        },
        {
            keyWord: `delimiters`,
            des: `改变纯文本插入分隔符。t: Array<string>, m: ["{{", "}}"]`,
            exp: `new Vue({
                delimiters: ['${', '}']
              })`
        },
        {
            keyWord: `functional`,
            des: `使组件无状态 (没有 data) 和无实例 (没有 this 上下文)。他们用一个简单的 render 函数返回虚拟节点使它们渲染的代价更小; t: boolean`
        },
        {
            keyWord: `model`,
            des: `允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，但是一些输入类型比如单选框和复选框按钮可能想使用 value prop 来达到不同的目的。使用 model 选项可以回避这些情况产生的冲突。`,
            exp: `Vue.component('my-checkbox', {
                model: {
                  prop: 'checked',
                  event: 'change'
                },
                props: {
                  checked: {
                    type: Number,
                    default: 0
                  }
                }
              })`
        },
        {
            keyWord: `inheritAttrs`,
            des: `默认情况下父作用域的不被认作 props 的 attribute 绑定 (attribute bindings) 将会“回退”且作为普通的 HTML attribute 应用在子组件的根元素上。当撰写包裹一个目标元素或另一个组件的组件时，这可能不会总是符合预期行为。通过设置 inheritAttrs 到 false，这些默认行为将会被去掉。而通过 (同样是 2.4 新增的) 实例 property $attrs 可以让这些 attribute 生效，且可以通过 v-bind 显性的绑定到非根元素上。`,
            tiips: `这个选项不影响 class 和 style 绑定。`
        },
        {
            keyWord: `comments`,
            des: `当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们。`
        },
        {
            keyWord: `实例 property`,
            list: [{
                    keyWord: `常用`,
                    exp: `vm.$data, vm.$props, vm.$el, vm.$options, vm.$parent, vm.$root, vm.$children, vm.$slots;
                    vm.$scopedSlots, vm.$refs, vm.$isServer是否运行于服务器, vm.$attrs,`
                },
                {
                    keyWord: `vm.$listeners`,
                    des: `包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。`
                }
            ]
        },
        {
            keyWord: `vm.$watch( expOrFn, callback, [options] )`,
            des: `观察 Vue 实例上的一个表达式或者一个函数计算结果的变化。回调函数得到的参数为新值和旧值。表达式只接受简单的键路径。对于更复杂的表达式，用一个函数取代。`
        },
        {
            keyWord: `vm.$set( target, propertyName/index, value )`,
            des: `这是全局 Vue.set 的别名。`
        },
        {
            keyWord: `vm.$delete( target, propertyName/index )`,
            des: `这是全局 Vue.delete 的别名。`
        },
        {
            keyWord: `vm.$on( event, callback )`,
            des: `监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。`
        },
        {
            keyWord: `vm.$once( event, callback )`,
            des: `监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。`
        },
        {
            keyWord: `vm.$off( [event, callback] )`,
            des: `移除自定义事件监听器。如果没有提供参数，则移除所有的事件监听器；如果只提供了事件，则移除该事件所有的监听器；如果同时提供了事件与回调，则只移除这个回调的监听器。`
        },
        {
            keyWord: `vm.$emit( eventName, […args] )`,
            des: `触发当前实例上的事件。附加参数都会传给监听器回调。`
        },
        {
            keyWord: `vm.$mount( [elementOrSelector] )`,
            des: `如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。如果没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。这个方法返回实例自身，因而可以链式调用其它实例方法。`
        },
        {
            keyWord: `vm.$forceUpdate()`,
            des: `迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。`
        },
        {
            keyWord: `vm.$destroy()`,
            des: `完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。触发 beforeDestroy 和 destroyed 的钩子。`
        },
        {
            keyWord: `特殊的 attribute`,
            list: [{
                    keyWord: `常用`,
                    exp: `key, ref`
                },
                {
                    keyWord: `is`,
                    des: `用于动态组件且基于 DOM 内模板的限制来工作。`,
                    exp: `<component v-bind:is="currentView"></component>`
                }
            ]
        },
        {
            keyWord: `内置组件`,
            list: [{
                    keyWord: `component`,
                    des: `渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。`
                },
                {
                    keyWord: `transition/transition-group`,
                    des: `<transition> 元素作为单个元素/组件的过渡效果。<transition> 只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在可被检查的组件层级中。`
                },
                {
                    keyWord: `keep-alive`,
                    des: `<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。`,
                    exp: `<keep-alive include="a,b">
                    <component :is="view"></component>
                  </keep-alive>; <keep-alive :max="10">
                  <component :is="view"></component>
                </keep-alive>`
                },
                {
                    keyWord: `slot`
                }
            ]
        }
    ]
}