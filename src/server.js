import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed");
  next();
};

const handleHome = (req, res) => {
  return res.send("<h1>This is Home Pages</h1>");
};

const handleProtected = (req, res) => {
  return res.send("<h1>Welcome to the private lounge</h1>");
};

app.use(logger);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log("server port http://localhost:${4000} 🚀");

app.listen(PORT, handleListening);
