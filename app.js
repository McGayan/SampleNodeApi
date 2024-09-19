const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Worlds!: Node:server\n");
});

app.get("/keels", (req, res) => {
  res.send("Hello, Keels Worlds!\n");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
