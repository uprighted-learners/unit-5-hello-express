const express = require("express");

const PORT = 4000;

const app = express();

app.get("/example", (request, response) => {
  response.send("Hello example!");
});

app.get("/home", (request, response) => {
  response.send("<h1>Hello from home!</h1>  ");
});

app.get("/about", (request, response) => {
  response.send(
    "This is an app I made to practice building servers with Express."
  );
});

app.get("/:page", (request, response) => {
  response.send(`<h1>You are one the ${request.params.page} Page!</h1>`);
});

// Note that the /:page route effectively blocks the /:key route. Try moving /:key above /:page and see what happens.
app.get("/:key", (request, response) => {
  console.log(request.params);
});

app.listen(4000, () => {
  console.log(`Server up and running at http://localhost:${4000}/`);
});
