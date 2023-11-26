const app = require("./index");
const { createServer } = require("http");
const socketServer = require("socket.io");

const server = createServer(app);
const io = new socketServer(server);

io.on("connection", (socket) => {
	console.log("a user connected");
});

