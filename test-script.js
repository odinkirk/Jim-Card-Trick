// Code to test and figure out jQuery image switching


function cardChange(card){
	$(document.getElementById(card)).attr(src, "img/"+card+".jpg");
}//end of function cardChange