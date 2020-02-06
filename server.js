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

    // app.get('/', function(req,res){
    //   res.send('<h1>HEllo world</h1>')
    //   })

    io.on('connection', function(socket) {
          console.log('your connected ');
          socket.on('chat messages', function(msg){
              console.log('message: ' + JSON.stringify(msg));
             io.emit('chat message', msg);
          })

          socket.on('sendMessage', (message, callback) => {
            const user = getUser(socket.id);

            io.to(user.room).emit('message', { user: user.name, text: message });

            callback();
          });

          socket.on('disconnect', () => {
            const user = removeUser(socket.id);

            if(user) {
              io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
              io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
            }
          })
    }
      );


  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


  app.get('*', (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
