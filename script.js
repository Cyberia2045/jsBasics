// function hungry() {
// 	var hungry = "Yes";
// 	var bored = "Yes";

// 	if (hungry === "Yes") {
// 		alert("Go Eat");
// 	}
// 	else if (bored === "Yes") {
// 		alert("Take a Look in the Fridge");
// 	}
// 	else {
// 		alert("Do Nothing")
// 	}
// }; // Ends the hungry function


// function games(status) {

// var status = document.getElementById("status").value;

// console.log("status")

// if (status === "monopoly") {
// 	alert("Let's Play Monopoly")
// }
// else if (status === "chess") {
// 	alert("Let's Play Chess")
// }
// else { 
// 	alert("You Must Make Decisions!")
// };

// }; //closes the games function

// var message = "Hello";

// var friends = ["John", "Rocco", "Ty", "Joe", "Eric"];

// 	for(var i=0; i < friends.length; i++) {
// 		console.log(friends[i] + " is my friend");
// };

var kellogs = ["Corn Flakes", "Frosted Flakes", "Apple Jacks"];

var post = ["Raisin Bran", "Cookie Crisp", "Honey Smacks"];

var cereal = [kellogs, post];

function printCereal() {

for(var i=0; i < cereal.length; i++) {
	var brand = cereal[i];
	cerealNames(brand);
	};
}; // closes printCereal();

function cerealNames(brand) {
	for (var i=0; i < brand.length; i++) {
		var newDiv = "<div>" + brand[i] + "</div>";
		var cerealBrands = document.getElementById("cerealBrands");
		cerealBrands.innerHTML += newDiv;
	};
}; // closes cerealNames();

printCereal();











