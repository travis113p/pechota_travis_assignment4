/* Travis Pechota
SDI 1302
Project 4
Function Library*/

var myLibrary = function() {

//check email
var checkEmail = function (val) {
	var atSign = val.lastIndexOf("@")
	var period = val.lastIndexOf(".")
	if (atSign < period && atSign != 0) {
		return true
	} else {
		return false
	}
}



//return object
return {
	"checkEmail": checkEmail,
	
}


}

var newLib = new myLibrary();

console.log("Is this an email? " + newLib.checkEmail("travis113p"));