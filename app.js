const express = require("express");

const app = express();

app.use(express.static("public"));

// ...
// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// greta route:
app.get('/greta', (request, response, next) => response.sendFile(__dirname + '/views/greta-page.html'));
// ...

// works route;
app.get("/works", (request, response, next) => response.sendFile(__dirname + "/views/works.html"));
  


app.listen(3000, () => console.log("My first app listening on port 3000!"));