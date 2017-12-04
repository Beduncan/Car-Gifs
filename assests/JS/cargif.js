$(document).ready(function(){

var topics =[
	'Audi', 
	'AstonMartin',
	'Tesla',
	'Nissan',
	'Lexus',
	'Saab'
];
//geting gifs from ajax 
function displayGif(){
	var car = $(this).attr("data-name");
	var queryURL ="https://api.giphy.com/v1/gifs/search?q=&api_key=uZGm777wAQsj1NHha0667cF4gwkvc9NO&q=" + car + "&limit=10&offset=0&rating=G&lang=en"	

	$.ajax({
		url:queryURL,
		method: "GET"
	}).done(function(response){
	//geting responce form api
	console.log(response);	
		//put response rating in div
	$("#Rdiv").html('Rating: '+response.data[0].rating);
	//showing gifs in div  
	var gifs
	$("#gifs").html(gifs);	
	
	});
}
function makebutton(){

	$("#buttons").empty();
//for loop thur array
	for (var i = 0; i <topics.length;i++) {
//creating buttons from array above 
	var a = $("<button>");
	a.addClass("topic");
	a.attr("data-name", topics[i]);
	a.text(topics[i]);
	$("#buttons").append(a);
	}
}
makebutton();

      $(document).on("click", ".topic", displayGif);
//adding listener to all elements w/ class of topic
     

// closeing ready 
});