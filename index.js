const Exporter = require('./lib/exporter');

module.exports = [
    console.log('Sitemap generating in progress...'),
    new Exporter(process.argv[3]),
]