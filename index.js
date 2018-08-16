var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get("/", function(req, res){
    res.render("index")
})

app.get("*", function(req, res){
    res.send("This route does not exist!")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("PORT is Listening....")
})

