const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

// listener que está escutando um evento
myEmitter.on("foo", () => {
  console.log("An event ocurred");
});

myEmitter.on("foo", () => {
  console.log("An event ocurred 2");
});

myEmitter.on("foo", (x) => {
  console.log("An event with a parameter ocurred 3: " + x);
});

myEmitter.on("bar", () => {
  console.log("An event ocurred bar");
});

// esta disparando o eventos para todos os foo em ordem
myEmitter.emit("foo");
myEmitter.emit("foo", "some text");
myEmitter.emit("bar");
