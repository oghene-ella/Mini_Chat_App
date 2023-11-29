const { createServer } = require("http");
const app = require("./index");
const { Server } = require("socket.io");

const server = createServer(app);
const io = new Server(server);

console.log("hello")

io.on("connection", (socket) => {
	console.log("a user connected");

	socket.broadcast.emit("Welcome to the chat");

	socket.on("chat message", (msg) => {
		console.log("message: " + msg);
		io.emit("chat message", msg);
	});
});

server.listen(3000, () => {
	console.log("server running at http://localhost:3000");
});