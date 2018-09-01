const path = require('path');

module.exports = {
    // VueRouter folder path
    vueRouter: {
        path: path.join(__dirname, '../src/router/'),
    },
    // Sitemap output store path
    output: {
        path: path.join(__dirname, '../src/public/sitemap.xml'),
    }
}