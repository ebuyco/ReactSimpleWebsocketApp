const cacheableResponse = require('cacheable-response');
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();
const cookieParser = require('cookie-parser');


const handle = app.getRequestHandler();

const ssrCache = cacheableResponse({
      ttl: 1 * 60 *60,
      get: async ({ req, res, pagePath, queryParams }) => ({
        data: await app.renderToHTML(req,res, pagePath, queryParams)
      }),
      send: ({ data,res }) => res.send(data)

})

app.render().then(() => {
        const server = express();
        server.use(( res, next) => {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          next();
        });

        server.use(cookieParser());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));
        // server.get('/', (req,res) => ssrCache({ req, res, pagePath: '/'}))

        server.get('/', (req, res) => {
            const queryParams = { id: req.params.id }
            const pagePath = '/'
            return ssrCache({ req, res, pagePath, queryParams })
          })
          server.get('*', (req, res) => handle(req, res))

        server.listen(PORT, (err) => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${PORT}`)
        })
})
