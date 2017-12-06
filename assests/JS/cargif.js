$(document).ready(function(){

var topics =[
	'Audi', 
	'Dodge',
	'Ferrari',
	'Mazda',
	'Nissan',
	'Porsche',
	'Tesla',
	'Toyota',
	'Volkswagen'
];
//geting gifs from ajax 
function displayGif(){
	var car = $(this).attr("data-name");
	var queryURL ="https://api.giphy.com/v1/gifs/search?q=&api_key=uZGm777wAQsj1NHha0667cF4gwkvc9NO&q=" + car + "&limit=10&offset=0&rating=G&lang=en"	

	$.ajax({
		url:queryURL,
		method: "GET"
	}).done(function(response){
		//geting response form api
		console.log(response);	
		//empting 
		$("#gifs").empty();
		//for loop to go thur topics to show all gifs 
		for (var i = 0; i <response.data.length; i++){
		 	//showing gifs in div  (AstonMartin only has one gif dont forget!)
			var gif = $("<img>").attr("src", stillSrc);
        	var AnimatedSrc = response.data[i].images.fixed_height.url;
        	var stillSrc = response.data[i].images.fixed_height_still.url;

			gif.attr("data-state", "still")
			gif.attr("data-still", stillSrc);
			gif.attr("data-animate", AnimatedSrc);
			gif.addClass("cargifs")
			$("#gifs").append(gif); 	
			 //put response rating in a p tag and appending it 
			var thediv = $("#gifs")
			var rate = $("<p>").text('Rating: '+response.data[i].rating);
			thediv.append(rate);
			//making the gifs play 
		}	
		});
};







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
//adding listener to all elements w/ class of topic
$(document).on("click", ".topic", displayGif);
//creating a function to create movies 
$("#carbutton").on("click", function(event){
	event.preventDefault();
	var addcar = $("#carinput").val().trim();
	topics.push(addcar);
	//calling make button from array function 
	makebutton();
	});
//adding click event to gifs 
  $(document).on("click", ".cargifs", pauseGifs);
//function to call gifs
function pauseGifs(){
	  	 var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
  		}
}


//pulling up orignal array of cars 
makebutton();
// closeing ready 
});