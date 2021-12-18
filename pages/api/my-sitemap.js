const { SitemapStream, streamToPromise } = require( 'sitemap' )
const { Readable } = require( 'stream' )

// An array with your links

export default async (req, res) => {

const links = [
    { url: '/',  changefreq: 'daily', priority: 0.3  },
    { url: '/About/',  changefreq: 'daily', priority: 0.3  },
    { url: '/Courses/',  changefreq: 'daily', priority: 0.3  },
    { url: '/Posts/',  changefreq: 'daily', priority: 0.3  },
    { url: '/Pricing/',  changefreq: 'daily', priority: 0.3  },
    { url: '/Refunds/',  changefreq: 'daily', priority: 0.3  },
    { url: '/Terms/',  changefreq: 'daily', priority: 0.3  },
    { url: '/Beginners/',  changefreq: 'daily', priority: 0.3  },
    { url: '/Businesseng/',  changefreq: 'daily', priority: 0.3  },
    { url: '/ContactPage/',  changefreq: 'daily', priority: 0.3  },
    { url: '/Customeng/',  changefreq: 'daily', priority: 0.3  },
    { url: '/Generaleng/',  changefreq: 'daily', priority: 0.3  },
    { url: '/Grammareng/',  changefreq: 'daily', priority: 0.3  },
 
    { url: '/Ielts/',  changefreq: 'daily', priority: 0.3  },

];

// Create a stream to write to
const stream = new SitemapStream( { hostname: `https://${req.headers.host}` });

res.writeHead(200, {
    "Content-Type": "application/xml",
});

const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
    ).then((data)=> data.toString());


res.end(xmlString);

};