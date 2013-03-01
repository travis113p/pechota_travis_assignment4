/* Travis Pechota
SDI 1302
Project 4
Function Library*/

var myLibrary = function() {

//check email
var checkEmail = function (val) {
	var atSign = val.lastIndexOf("@");
	var period = val.lastIndexOf(".");
	if (atSign < period && atSign != 0) {
		return true;
	} else {
		return false;
	};
};

//check phone number
var checkPhone = function (val) {
	var firstHyphen = val.indexOf("-");
	var secondHyphen = val.lastIndexOf("-");
	if (val.length === 12 && firstHyphen === 3 && secondHyphen === 7) {
		return true;
	} else {
		return false;
	};
};

//check url
var checkUrl = function (val) {
	var http = val.substring(0,7);
	var https = val.substring(0,8);
	if (http === "http://" || https === "https://") {
		return true;
	} else {
		return false;
	};
};

//title case
var titleCase = function (val) {
    var pieces = val.split(" ");
    for ( var i = 0; i < pieces.length; i++ ) {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    };
    return pieces.join(" ");
}

//days between
var daysTilXmas = function (val) {
	var today = new Date (2013, 02, 28);
	var christmas = new Date (2013, 12, 25);
	var days = 100*60*60*24;
	christmas = christmas.getTime();
	today = today.getTime();
	if (today < christmas) {
		var inBetween = ((christmas - today) / (days));
		return inBetween;
		return daysTilXmas;
	};
};



//return object
return {
	"checkEmail": checkEmail,
	"checkPhone": checkPhone,
	"checkUrl": checkUrl,
	"titleCase": titleCase,
	"daysTilXmas": daysTilXmas,
};

};

var newLib = new myLibrary();

