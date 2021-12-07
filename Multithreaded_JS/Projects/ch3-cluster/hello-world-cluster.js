const http = require("http");
const cluster = require("cluster"); //Require the cluster module.

if (cluster.isPrimary) {
  //Change code paths depending on whether we’re in the primary process.
  cluster.fork(); //In the primary process, create four worker processes.
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  http
    .createServer((req, res) => {
      res.end("Hello, World! Cluster\n");
    })
    .listen(3000); //In the worker processes, create a web server and listen, like in example before.
}
