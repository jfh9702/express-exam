// Include express from node_modules
const express = require('express')
const app = express()
// Define server related variables
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static("public"));
// Handle request and response here
app.get("/", (req, res) => {
  res.render("mainPage");
});

//其他分頁
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
// Start and listen the server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})