module.exports = config => {

    config.set({
        files: ['src/test.spec.js'],
        frameworks: ['mocha', 'chai'],
        preprocessors: {
            'src/**/*.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        port: 9876,
        webpackMiddleware: {
            noInfo: true
        },
        colors: true,
        browsers: [
            'PhantomJS'
        ],
        singleRun: true,
        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-chai',
            'karma-phantomjs-launcher',
            'karma-sourcemap-loader'
        ],

        webpack: require('./webpack.config')
    })
}
