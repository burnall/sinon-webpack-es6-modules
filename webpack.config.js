const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, '.'),
    entry: {
        app: './src/index.js'
    },
    devServer: {
        inline: true,
        contentBase: '.',
        port: 3000
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
    },
    resolve: {
        modules: [
            path.resolve('src'),
            path.resolve('node_modules')
        ]
    },
    module: {
        rules: [
            {
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {'modules': false}], 'stage-3'],
                        // plugins: ['transform-runtime']
                    }
                }],
                test: /\.js$/,
                include: [
                    path.resolve('src')
                ]
            }
        ]
    },
    // Optimize bundles without obfuscation, to check tree shaking
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //             compress: {dead_code: true, unused: true},
    //             mangle: false,
    //             beautify: true
    //         }
    //     )
    // ]
}