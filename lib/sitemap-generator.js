const sm = require('../node_modules/sitemap');

class Sitemap {

    /**
     * Build the sitemap
     * @param  {} hostname='https://localhost'
     * @param  {} routes=[]
     */
    static build(hostname = 'https://localhost', routes = []) {
        const xml = sm.createSitemap({ 
            hostname: hostname,
            urls: routes.map(route => ({
                url: route.path,
                changefreq: route.changefreq !== undefined ? route.changefreq : 'monthly',
                priority: route.priority !== undefined ? route.priority : 1.0,
                
            })),
        });
        
        return Sitemap.convertToString(xml);
    }

    /**
     * Converts Sitemap to string
     * @param  {} sitemap
     */
    static convertToString(sitemap) {
        sitemap.toXML();
        return sitemap.toString();
    }
}

module.exports = Sitemap;
