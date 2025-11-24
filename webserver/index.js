const express = require('express');
const app = express();

app.get("/" , (req, res) => {
	res.send("hello world")
})

app.get("/hora" , (req, res) => {
	res.send(new Date().toLocaleString())
})

app.listen(3000, () => {
	console.log("esta escuchando en el puerto 3000")
	})
