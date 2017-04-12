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

var status = "hungry";

function hungry(status) {

	if (status === "hungry") {
		alert("Go Eat")
	}
	else if (status === "bored") {
		alert("Check the Fridge")
	}
	else {
		alert("Do Nothing")
	}
}; // ends the hungry function
