const express = require("express");
const router = express.Router();
const knex = require("../db/client");



let teamMethod = "";
//let quantity = "";

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
     


      teamMethod = "",
      quantity = "",
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
  let names = [];

  
  knex("cohorts")
      .returning("*")
      .where("id", id)
      .then(cohorts => {
       // res.redirect("/cohorts");
       quantity = request.body.quantity,
       teamMethod = request.body.teamMaker,
      //  names = cohort.members.split(","),
       response.redirect(`/cohorts/${cohorts[0].id}/teams/?method=${teamMethod}&quantity=${quantity}`); 
  
         console.log("team method = ", teamMethod);
         console.log("got inside make: ", quantity);
       });
    });
  
    // cohorts#show URL: /cohorts/:id METHOD: GET
router.get("/cohorts/:id/teams", (req, res) => {

  const id = req.params.id;
  method = req.query.method;
  quantity = req.query.quantity;
  console.log("========================================");



  knex("cohorts")
    .where("id", id)
    .first()
    .then(cohort => {


      let membersArray = cohort.members.split(",")
      let NumberOfMembers = membersArray.length;

      //used below for our for loops
      let rowArray = []; 
      let teamArray = []
      let memberArray = [];
      //want to determine MembersPerTeam
      // e.g. given 23 members, and 5 (quantity teams)
      // return how many people in each team
      if (method === "teamCount") { 
          console.log("Method chosen: ", method)
          console.log("So you want", quantity, "teams")
          console.log("And you have a total of ",  NumberOfMembers, "members");
          let  NumberOfTeams =  parseInt(quantity);
          let MembersPerTeam =(NumberOfMembers)/NumberOfTeams;
        
          if( NumberOfMembers%NumberOfTeams === 0)  { 
        
            totalMembersPerTeam = MembersPerTeam;
            console.log("total MembersPerTeam is ", totalMembersPerTeam );
            console.log("So, make  ", NumberOfTeams, "rows" );
            console.log("With ", totalMembersPerTeam, "in each row" );

          
            rowArray.length = NumberOfTeams;
            memberArray.length = totalMembersPerTeam;

            for (let i = 0; i<= rowArray.length; i++ ) {

              teamArray[i] = membersArray.splice(0,totalMembersPerTeam) 
            
            }
            console.log("Team array is ", teamArray)

        } else { 
          totalMembersPerTeam = Math.floor(MembersPerTeam)+1;
          console.log("total MembersPerTeam is ", totalMembersPerTeam );
          console.log("So, make  ", NumberOfTeams, "rows" );
          console.log("With ", totalMembersPerTeam, "in each row" );

  
          rowArray.length = NumberOfTeams;
          memberArray.length = totalMembersPerTeam;

          for (let i = 0; i<= rowArray.length; i++ ) {

            teamArray[i] = membersArray.splice(0,totalMembersPerTeam) 
          
          }
          console.log("Team array is ", teamArray)
        }
    }

    
      //want to determine NumberOfTeams
      // e.g. given 23 members, and 5 members per team,
      // return how many teams should make
      else if (method === "memberCount") {
        console.log("Method chosen: ", method)
        console.log("You have a total of ",  NumberOfMembers, "members");
        console.log("And you wawnt each team to have", quantity, "people")
        
        let  MembersPerTeam = parseInt(quantity)

        let Groups_all= ( NumberOfMembers)/MembersPerTeam
        let  NumberOfTeams = 1;
     
        if( Groups_all%quantity === 0)  { 
          NumberOfTeams = Groups_all;
          console.log("So, make  ", NumberOfTeams, "rows" );
          console.log("With ", MembersPerTeam, "in each row" );


          rowArray.length = NumberOfTeams;
          memberArray.length = MembersPerTeam;

          for (let i = 0; i<= rowArray.length; i++ ) {

            teamArray[i] = membersArray.splice(0,MembersPerTeam) 
          
          }
          console.log("Team array is ", teamArray)


        } else { 
          console.log("is NOT even");
          NumberOfTeams = Math.floor(Groups_all)+1;
          console.log("So, make  ", NumberOfTeams, "rows" );
          console.log("With ", MembersPerTeam, "in each row" );


          rowArray.length = NumberOfTeams;
          memberArray.length = MembersPerTeam;

          for (let i = 0; i<= rowArray.length; i++ ) {

            teamArray[i] = membersArray.splice(0,MembersPerTeam) 
          
          }
          console.log("Team array is ", teamArray)

        }
      
      console.log("NumberOfTeams is... ", NumberOfTeams);
      } 

      










    

      //render the cohorots/show.ejs
      res.render("cohorts/teams", {cohort:cohort});
          });
});

     
  module.exports = router;



//   <% if (teamMethod === "memberCount") { %>
//     <h2>Thanks you <%= teamMethod %> for taking survey</h2>
//     <h2> <%= cohort.members%></h2>
 

 

//     <h2> It seems like your quantity is <%= quantity %></h2>

//     <table class="table">
//     <thead>
//       <tr>
//         <th scope="col">#</th>
//         <th scope="col">Members</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th scope="row">1</th>
//         <td>Mark</td>
//         <td>Otto</td>
//         <td>@mdo</td>
//       </tr>
     
//   </tbody>
//   </table>

  
//   <% } else if(teamMethod === "teamCount") { %>
//   <h2>Thanks you <%= teamMethod %> for taking survey</h2>
 

//   <h2> It seems like your quantity is <%= quantity %></h2>

//   <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Members</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
  
//   </tbody>
// </table>

//   <% } %>