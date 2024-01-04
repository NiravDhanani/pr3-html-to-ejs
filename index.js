const express = require("express");

const port = 8000;

const app = express();

app.use('/assets',express.static('assets'))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/chart", (req, res) => {
  return res.render("pages/charts/chartjs");
});

app.get("/basic_elements", (req, res) => {
  return res.render("pages/forms/basic_elements");
});

app.get("/buttons", (req, res) => {
  return res.render("pages/ui-features/buttons");
});

app.get("/typography", (req, res) => {
  return res.render("pages/ui-features/typography");
});

app.get("/mdi", (req, res) => {
  return res.render("pages/icons/mdi");
});

app.get("/basic-table", (req, res) => {
  return res.render("pages/tables//basic-table");
});
app.get("/blank-page", (req, res) => {
  return res.render("pages/samples/blank-page");
});
app.get("/login", (req, res) => {
  return res.render("pages/samples/login");
});
app.get("/error-404", (req, res) => {
  return res.render("pages/samples/error-404");
});
app.get("/error-500", (req, res) => {
  return res.render("pages/samples/error-500");
});
app.get("/register", (req, res) => {
  return res.render("pages/samples/register");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Page not found");
    return false;
  }
  console.log(`port start on ${port}`);
});
