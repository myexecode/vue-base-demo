module.exports = {
    name: 'vue2.0-vuecli4.0+',
    contents: [
        {
            keyWord: `vue.config.js配置参考`,
            des: `vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。`,
            exp: `baseUrl; publicPath; outputDir; assetsDir; `,
            lsit: [
                {
                    keyWord: `indexPath`,
                    des: `指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径`
                },
                {
                    keyWord: `filenameHashing`,
                    des: `默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。`
                },
                {
                    keyWord: `pages`,
                    des: `多文件打包`,
                    exp: `module.exports = {
                        pages: {
                          index: {
                            // page 的入口
                            entry: 'src/index/main.js',
                            // 模板来源
                            template: 'public/index.html',
                            // 在 dist/index.html 的输出
                            filename: 'index.html',
                            // 当使用 title 选项时，
                            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
                            title: 'Index Page',
                            // 在这个页面中包含的块，默认情况下会包含
                            // 提取出来的通用 chunk 和 vendor chunk。
                            chunks: ['chunk-vendors', 'chunk-common', 'index']
                          },
                          // 当使用只有入口的字符串格式时，
                          // 模板会被推导为 public/subpage.html
                          // 并且如果找不到的话，就回退到 public/index.html。
                          // 输出文件名会被推导为 subpage.html。
                          subpage: 'src/subpage/main.js'
                        }
                      }`
                },
                {
                    keyWord: `lintOnSave`,
                    des: `是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。`
                },
                {
                    keyWord: `runtimeCompiler`,
                    des: `否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。`
                },
                {
                    keyWord: `transpileDependencies`,
                    des: `默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来`
                },
                {
                    keyWord: `productionSourceMap`,
                    des: `如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建`
                },
                {
                    keyWord: `crossorigin`,
                    des: `设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。`
                },
                {
                    keyWord: `integrity`,
                    des: `在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次`
                },
                {
                    keyWord: `configureWebpack`,
                    des: `如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。`
                },
                {
                    keyWord: `chainWebpack`,
                    des: `是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。`
                },
                {
                    keyWord: `css.requireModuleExtension`,
                    des: `默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。`,
                    exp: ``
                },
                {
                    keyWord: `css.extract/css.sourceMap/css.loaderOptions`,
                    exp: `module.exports = {
                        css: {
                            requireModuleExtension: false,//掉文件名中的 .module
                          loaderOptions: {
                            css: {
                              // 这里的选项会传递给 css-loader
                            },
                            postcss: {
                              // 这里的选项会传递给 postcss-loader
                            }
                          }
                        }
                      }`
                },
                {
                    keyWord: `devServer`,
                    des: `所有 webpack-dev-server 的选项都支持`
                },
                {
                    keyWord: `devServer.proxy`,
                    exp: `module.exports = {
                        devServer: {
                          proxy: {
                            '/api': {
                              target: '<url>',
                              ws: true,
                              changeOrigin: true
                            },
                            '/foo': {
                              target: '<other_url>'
                            }
                          }
                        }
                      }`
                },
                {
                    keyWord: `parallel`,
                    des: `是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建`
                },
                {
                    keyWord: `pwa`
                },
                {
                    keyWord: `pluginOptions`,
                    des: `第三方插件选项`
                }
            ]
        },
        {
            keyWord: `Babel`,
            des: `Babel 可以通过 babel.config.js 进行配置。`
        },
        {
            keyWord: `ESLint`,
            des: `ESLint 可以通过 .eslintrc 或 package.json 中的 eslintConfig 字段来配置`
        },
        {
            keyWord: `TypeScript`,
            des: `TypeScript 可以通过 tsconfig.json 来配置。`
        }
    ]
}