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
        const server = express()
})
