const fs = require('fs');

const paths = require('../config/paths');
const sitemapGenerator = require('./sitemap-generator');

class Exporter {

    /**
     * Constructor of exporter utility.
     * @param  {} routerFile='index'
     */
    constructor(routerFile = 'index') {
        if (!process.argv[2]) {
            return console.error('ERROR: Need to add domain');
        }

        this.hostname = process.argv[2];
        this.router = require(paths.vueRouter.path + routerFile);
        
        this.store();
    }
    
    /** 
     * Saves the sitemap file in output path
     */
    store() {
        fs.writeFileSync(paths.output.path, sitemapGenerator.build(this.hostname, this.router.routes));
        console.log('Sitemap was generated successfully! Check your output folder!');
    }
}

module.exports = Exporter;
