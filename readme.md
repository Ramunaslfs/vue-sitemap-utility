**VueJS sitemap generation utility**


Compatible VueJs versions: 2.3.* and higher

_In order to generate sitemap run the following commands:_

**npm**

`npm run generateSitemap YOUR_FULL_DOMAIN` 

**yarn**

`yarn generateSitemap YOUR_FULL_DOMAIN`

e.g. 

`npm run generateSitemap https://www.github.com`

The sitemap will be generated in src/public folder by default.
If you want to change changeFrequency or priority of each page, you should define that in your router file on each route.
Else it will be set to default values. Currently: changeFreq = weekly, priority: 1.0
**Example:** 
`
[
    { 
        path: '/main',
        component: Main,
        changeFreq: 'monthly' (string),
        priority: 1.0 (float)
    },
    { 
        path: '/about',
        component: About,
        changeFreq: 'yearly',
        priority: 0.4
    }
]`

==========================================

 STILL A WIP PROJECT. USE AT YOUR OWN RISK! 