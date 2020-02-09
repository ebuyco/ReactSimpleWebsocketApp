const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8081;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();
const cookieParser = require('cookie-parser');
const app = express();
const server = require('http').createServer(app);


const io = require('socket.io')(server);


  io.on('connection', socket =>{
    console.log('your connected ');
    socket.on('message', msg => {
        console.log('message: ' + JSON.stringify(msg));
        socket.broadcast.emit('message', msg);
    })

  }
  );

nextApp.prepare().then(() => {


    // app.get('/', function(req,res){
    //   res.send('<h1>HEllo world</h1>')
    //   })



  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


  app.get('*', (req, res) => handle(req, res));



  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
