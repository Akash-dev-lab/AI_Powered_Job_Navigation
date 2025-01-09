const http = require('http')
const app = require('./app')
const { Server } = require('socket.io');
const port = process.env.PORT || 3000

const server = http.createServer(app)

// Initialize Socket.io
const io = new Server(server, {
    cors: {
      origin: '*', // Allow all origins (update this in production)
      methods: ['GET', 'POST'],
    },
  });

  // Socket.io connection
io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);
  
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('A client disconnected:', socket.id);
    });
  });

  // Make io accessible in other files
app.set('io', io);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});