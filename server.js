const express = require("express");
const app = express();
const port = 3000;


/// ROUTES /////
app.get("/budgtr", function(req, res){
    res.render("index.ejs")
})




///Check to see that the server is listening///
app.listen(port, function(){
    console.log("Listening on port", port)
})