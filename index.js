const express = require("express");

const app = express();
const port = 4000;

// METHOD: GET, PATH "/""
app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

// METHOD: GET, PATH "/products"
// Send back: "PRODUCTS"

// METHOD: POST, PATH "/products"
// Send back: "NEW PRODUCT"

// METHOD: PATCH, PATH "/products"
// Send back: "UPDATE PRODUCT"

// METHOD: DELETE, PATH "/products"
// Send back: "DELETE SOMETHING"

// How to test? use postman

app.listen(port, () => {
  console.log("listening on port", port);
});
