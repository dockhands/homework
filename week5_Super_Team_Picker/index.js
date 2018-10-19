const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");


// set the View Engine
app.set("view engine", "ejs");

// access my public stylesheets
app.use(express.static(path.join(__dirname, "public")));
//access the body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.redirect("cohorts/index");
  });



//Redirect the router to Routes/Cohort
  const cohortsRouter = require("./routes/cohorts");
  app.use("/", cohortsRouter);
  

// set the View Engine
app.set("view engine", "ejs");

// access my public stylesheets
app.use(express.static(path.join(__dirname, "public")));
//access the body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  methodOverride((req,res) => {

    if (typeof req.body === "object" && req.body._method) {
      const httpMethod = req.body._method;
      
      // delete will remove the property from the object
      delete req.body._method

      // the value returned by this callback will be the 
      // the method used for this request. If it returns "DELETE"
      // it will be processed as a delete. 
      return httpMethod;
    } 
  }) 
)

 // Running the server 
const DOMAIN = 'localhost';
const PORT = '5000';
app.listen(PORT, DOMAIN, () => {
  console.log(`🖥 Server listenning on http://${DOMAIN}:${PORT}`);
});

module.exports = app;