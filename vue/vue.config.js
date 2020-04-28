const path = require('path');

const targetPath = 'http://10.47.58.101' // 需要连接的对应ip

module.exports = {
    publicPath: '/',
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/css/index.less')]
        }
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            },
            postcss: { // rem布局
                plugins: [
                    require('postcss-px2rem') ({
                        remUnit: 54 // 比例
                    })
                ]
            }
        }
    },
    devServer: {
        proxy: {
            '/api': { // 以api开头的接口代理走这个ip
                target: targetPath,
                changeOrigin: true,
            }
        },
        overlay: {
            warnings: true,
            errors: true,
        }
    },
    pwa: { // 设置项目得小图标
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouthIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico',
        }
    },
    lintOnsave: process.env.NODE_ENV !== 'prodution'
}