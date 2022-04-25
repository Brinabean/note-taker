const fs = require("fs");
const path = require("path");
const express = require("express");

const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming JSON data
app.use(express.json());
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
