const utils = require('./utils');
const _ = require('lodash');
const isProduction = process.env.NODE_ENV === 'production';

let cssLoaders = utils.cssLoaders({
    sourceMap: !isProduction,
    extract: isProduction
});

module.exports = {
    loaders: _.merge(cssLoaders, {
        i18n: '@kazupon/vue-i18n-loader',
    }),
};
