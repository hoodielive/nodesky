const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const express = require("express");
const app = express();
const Joi = require("joi");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("./middleware/logger");
const home = require("./routes/home"); 
const artRoutes = require("./routes/routes");

/** console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);
**/
console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
console.log("Mail Password " + config.get("mail.password"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled...");
}

/** Database Work **/
dbDebugger("Connected to the database...");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("tiny"));
app.use("/api/artists", artRoutes);
app.use("/", home); 
app.use(logger);

/** SERVER STUFF **/
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
