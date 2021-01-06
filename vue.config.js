module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.css'],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}