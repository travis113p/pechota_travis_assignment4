/* Travis Pechota
SDI 1302
Project 4
Function Library*/

var myLibrary = function() {

//check numeric function
	var checkNumeric = function(val) {
		if(isNaN(val)){
			return false;
		} else {
			return true;
		}
	}

//check name function
	var areYouLee = function(val){
		if (val === "Lee") {
			return true;
		} else {
			return false;
		}
	}

//check email
	var checkEmail = function(val) {

		var strLen = val.length
		for (var i=0; 1 <= strLen; i++) {
			if (val.substring(i, i+1) === "-") {
				return i;
			}
		}

	}


//check email
var checkEmail = 

//return object
return {
	"checkNumeric": checkNumeric,
	"checkString": checkString
}


}

var newLib = new myLibrary();

console.log("Is this a number?" + newLib.checkNumeric(156));