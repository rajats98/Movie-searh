var express = require('express');
var app =express();
var request =require('request');
var parse = require('parse');
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render('home');
}); 
app.get("/results",function(req,res){
	var query = req.query.search;
	var url = "http://www.omdbapi.com/?s="+query;
	request(url,function(error,response,body){
		if(!error && response.statusCode==200){

			var details = JSON.parse(body);
			res.render('results',{details:details});
		}
	});
});

app.listen(3000,function(){
	console.log("Movie app started!! ");
})
