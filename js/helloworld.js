
$( '#mainPage' ).on( 'pageinit', function(event){

    $( "#counter-slider" ).bind( "change", function(event, ui) {
        var slide = $(this).val();
        if(slide == "on"){
        	startCounter();
        }else{
        	stopCounter();
        }
    });
    
    $( "#time-slider" ).bind( "change", function(event, ui) {
        var slide = $(this).val();
        if(slide == "on"){
        	showTime();
        }else{
        	hideTime();
        }
    });
});
var count = 0;
var int;
function startCounter(){
	int = setInterval(function(){
		count++;
		$( "#runHtml" ).html("<h3>"+count+"</h3>");
	},1000);
}
function stopCounter(){
	clearInterval(int);
}
function showTime(){
	var date = new Date();
	$( "#runHtml" ).html("<h3>"+date+"</h3>");
}
function hideTime(){
	$( "#runHtml" ).html("");
}