const express = require("express");
const router = express.Router();
const knex = require("../db/client");


// posts#new URL: /posts/new METHOD: GET
// get the request URL cohorts/new then...
router.get("/cohorts/new", (req, res) => {
    // load ejs file cohorts/new.ejs
    res.render("cohorts/new");
  });


// posts#create URL: /posts METHOD: POST
//getting the request from cohorts/new.ejs called  
{/* <form action="newCohort" method="POST"></form> */}
router.post("/newCohort", (req, res) => {
    knex("cohorts")
      .insert({
        members: req.body.members,
        name: req.body.name,
        logoUrl: req.body.logoUrl

      })
      .returning("*")
      .then(cohorts=> {
        res.redirect("/cohorts");
        
      });
  });
  

  // posts#index URL: /posts METHOD: GET
router.get("/cohorts", (req, res) => {
    knex("cohorts")
      .orderBy("createdAt", "desc")
      .then(cohorts=> {
        res.render("cohorts/index", { cohorts:cohorts });
      });
  });

// posts#create URL: /posts METHOD: POST
router.post("/showCohort/:id", (req, res) => {
   console.log("inside cohorts post");
   const id = req.params.id;
   
    knex("cohorts")
      .returning("*")
      .where("id", id)
      .then(cohorts => {
       // res.redirect("/cohorts");
       res.redirect(`/cohorts/${cohorts[0].id}`);

      });
  });


// cohorts#show URL: /cohorts/:id METHOD: GET
router.get("/cohorts/:id", (req, res) => {

    const id = req.params.id;

    knex("cohorts")
      .where("id", id)
      .first()
      .then(cohort => {
  
        //render the cohorots/show.ejs
        res.render("cohorts/show", {cohort:cohort});
      });
  });
  
  // cohort #destroy URL: /cohorts/:id METHOD: DELETE
router.post("/cohorts/:id", (req, res) => { 
console.log("got inside delete");
  const id = req.params.id;
  
  knex("cohorts") 
  .where("id", id)
  .del()
  .then(() => {
      res.redirect("/cohorts");
  });
  
  });


    
// post Make Forms Team
router.post("/show/:id", (request, response) => { 
  console.log("got inside make teams post");
  const id = request.params.id;

  let quantity = request.body.quantity; 
  let teamMethod = request.body.teamMaker;
  console.log("got inside make: ", teamMethod);
  console.log("got inside make: ", quantity);
  
  knex("cohorts")
      .returning("*")
      .where("id", id)
      .then(cohorts => {
       // res.redirect("/cohorts");
       response.redirect(`/cohorts/${cohorts[0].id}`); 
      
       });
       console.log("got inside make .... teams ", teamMethod);
 

    });
   
     
  module.exports = router;
