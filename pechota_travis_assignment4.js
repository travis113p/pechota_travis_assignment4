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

//check phone number
var checkPhone = function (val) {
	var firstHyphen = val.indexOf("-");
	var secondHyphen = val.lastIndexOf("-");
	if (val.length === 12 && firstHyphen === 3 && secondHyphen === 7) {
		return true
	} else {
		return false
	}
}

//check url
var checkUrl = function (val) {
	var http = val.substring(0,7)
	var https = val.substring(0,8)
	if (http === "http://" || https === "https://") {
		return true
	} else {
		return false
	}
}

//return object
return {
	"checkEmail": checkEmail,
	"checkPhone": checkPhone,
	"checkUrl": checkUrl
	
}


}

var newLib = new myLibrary();

console.log("Is this an email? " + newLib.checkEmail("travis113p"));
console.log("Is this a phone number? " + newLib.checkPhone("248-245-3703"));
console.log("Is this a URL? " + newLib.checkUrl("https://www.fullsail.edu"))