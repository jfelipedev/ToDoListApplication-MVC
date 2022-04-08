const express = require('express');
const path = require('path');
const routes = require("./routes/routes");
const connectDB = require('./database/db');

const app = express();
const port = 3000;

connectDB();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded())
app.use(routes);



app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

//npm run dev to run the application