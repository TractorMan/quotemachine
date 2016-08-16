
var quoteMaker = {
	quote: "There surely is in human nature an inherent propensity to extract all the good out of all the evil.",
	attrib: " Benjamin Haydon",
	color: ""
	
	
}



var quoteGrab = function(){
	
	
	    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", 
		function(json) {
			quoteMaker.quote=(json["quoteText"]);
			$(".quote").html(quoteMaker.quote);	
			quoteMaker.attrib=(json["quoteAuthor"]);
			$(".attrib").html(quoteMaker.attrib)
			
			tweetReady();
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

var tweetReady = function(){
	
	$(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text="+quoteMaker.quote+" - "+quoteMaker.attrib)
	
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
	tweetReady();
}

$(document).ready(main)

