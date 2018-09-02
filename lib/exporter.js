import paths from '../config/paths';
import sitemapGenerator from './sitemap-generator';

class Exporter {

    /**
     * Constructor of exporter utility.
     * @param  {} routerFile='index'
     */
    constructor(vueRouter = null, hostname = 'https://localhost') {
        if (!hostname) {
            return console.error('ERROR: Need to add domain');
        }
        this.router = vueRouter.options.routes;
        this.hostname = hostname;
    }
    
    /** 
     * Saves the sitemap file in output path
     */
    store() {
        let sitemap = sitemapGenerator.build(this.hostname, this.router);
        console.log(sitemap);
    }
}

export default Exporter;