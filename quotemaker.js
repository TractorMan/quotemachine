
var quoteMaker = {
	quote: "There surely is in human nature an inherent propensity to extract all the good out of all the evil.",
	attribute: " Benjamin Haydon",
	color: "",
	raw: ""
	
	
}



var quoteGrab = function(){
	
	
	    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", 
		function(json) {
			$(".quote").html(JSON.stringify(json["quoteText"]))
			
			$(".attrib").html(JSON.stringify(json["quoteAuthor"]))
			}
		)
	};
	
	



var randomColor = function(){
	var colors = ["royalblue","green","burleywood","orange","purple","brown","lightslategray","powderblue","olive", "indianred","salmon"]
	var ran = Math.random();
	ran = Math.floor(ran*10);
	
	
	
	
	return colors[ran];
	
	
	
}



var newQuote = function(){
	
	$(".quote, .attrib").hide();
	quoteGrab();
	$(".quote, .attrib").fadeIn('slow')
	
};



var buttonPress = function(){
	
	$(".next").click(function(){
		
		colorPicker();
		newQuote();
		
	})
	
	
	
}


var colorPicker= function(){
	var color = randomColor();
	
	while(color==quoteMaker.color) color=randomColor();
	
	$(".bcolor").css(
		{transition : 'background-color 1s ease-in-out',
		"background-color": color}
	);
	$(".color").css(
		{transition : 'color 1s ease-in-out',
		"color": color}
	);
	
	quoteMaker.color = color;
};

var main = function(){
	
	
	buttonPress();
	quoteGrab();
}

$(document).ready(main)

