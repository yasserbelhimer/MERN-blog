const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

const adminBro = require('./src/admin/adminBro');
const Post = require("./src/models/post");


app.use(cors());

app.get("/posts", (req, res) => {
    Post.find()
		.then((posts) => res.json(posts))
		.catch((err) => res.status(400).json("Error: " + err));
	// res.send("Hello World!");
});
app.use("/admin", adminBro);

const run = async () => {
	await mongoose
		.connect(uri, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			preventAssignment: true,
		})
		.then(() => {
			console.log("Successfully connect to MongoDB.");
			//   initial();
		})
		.catch((err) => {
			console.error("Connection error", err);
			process.exit();
		});
	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
		console.log(`AdminBro is under http://localhost:${port}/admin`);
	});
};

run();
