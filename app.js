const express = require("express");
const cors = require('cors');
const ServiceController = require("./controllers/appcontroller");
//import { ServiceController } from "./controllers/appcontroller.js";
const app = express();
const port = process.env.PORT || 3000;

dataString = "hello world";
app.use(cors());

const appController = new ServiceController();

appController.init().then(() => {
	console.log('database and container created Successfully'); }).catch(() => {
		console.log('database and container creation failed');
		process.exit(1);
	});

app.get("/", (req, res) => {
  res.send("Hello, Worlds!: Node:server\ndataString: \n" + dataString);
});

app.get("/keels", (req, res) => {
	const { strJson } = req.query;
	if (!strJson) {
		return res.status(400).json({ error: 'strJson is required' });
	}
	dataString = strJson;
	res.send(`Parameter 1: ${strJson}`);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
