const express = require("express");
const app = express();
const {Server} = require("socket.io");
const {createServer} = require("http");

const server = createServer(app);
const io = new Server(server,{
    cors:{
        origin:"*",
        methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials:true,
    }
})


app.get("/", (req, res) => {
    res.send("Hello World!");
}); 

io.on("connection",(socket)=>{
    console.log("a user connected");
    console.log(socket.id);
    socket.emit("Welcome","Welocme to the server" )
    socket.broadcast.emit("Welcome",` ${socket.id} joined the server`)
})

server.listen(4000, () => {
    console.log("Server is running on port 4000");
}); 