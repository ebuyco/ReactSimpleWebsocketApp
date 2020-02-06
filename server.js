const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8081;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();
const cookieParser = require('cookie-parser');


nextApp.prepare().then(() => {
  const app = express();


    const server = require('http').createServer(app);
    const io = require('socket.io')(server);
    io.on('connection', () => { /* … */ });

  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


  app.get('*', (req, res) => handle(req, res));

  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
