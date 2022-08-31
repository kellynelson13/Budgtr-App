const express = require("express");
const app = express();
const port = 3000;
const budget = require("./models/budget.js");

app.use(express.urlencoded({ extended: false }))


/// ROUTES /////
//Index
app.get("/budgtr", function(req, res){
    
    res.render("index.ejs", {
        budgetData: budget
    })
})
//New
app.get("/budgtr/new", function(req, res){
    res.render("new.ejs")
})

//Show
app.get("/budgtr/:id", (req, res) => {
    res.render("show.ejs", {
        item: budget[req.params.id]
    })
})




///Check to see that the server is listening///
app.listen(port, function(){
    console.log("Listening on port", port)
})