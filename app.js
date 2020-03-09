var express = require("express");
var app = express();

const path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var friends = ["Tony", "Miranda", "Justin"];

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/index.html"));
    //res.sendFile(path.join(__dirname, '../public', 'index1.html'));
});

app.post("/addfriend", function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    console.log(req.body.newfriend);
    res.send("It is working!");
    //res.redirect("/friends")

    friends.push(newFriend);
});

app.get("/friends", function(req,res){
    //res.sendFile(path.join(__dirname, "/index.html"));
    //res.render("friends", {friends:friends});
    var result = "";
    for(var i=0; i < friends.length; i++){
        result += friends[i] + " ";
    }
    
    
    res.send(result);
});


app.listen(3000, function(){
    console.log("Server has started.");
});

