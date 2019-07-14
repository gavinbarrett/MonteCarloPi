const express = require("express");
const app = express();
app.use(express.static("."));
app.listen(5555, () => {
	console.log("Listening on port 5555");
});
