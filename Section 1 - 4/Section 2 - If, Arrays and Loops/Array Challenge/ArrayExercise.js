/*
* Follow the below comments
*/


let allKindsOfDonuts = ["Original", "Sugar", "Glazed", "Chocolate Iced", "Strawberry Iced", "Powdered", "Coffee Roll", "Boston Creme", "Chocolate Cruller", "Glazed Cruller", "Jelly Filled", "Sour Cream", "Glazed Blueberry", "Glazed Chocolate", "Apple Fritter", "Cookies and Creme", "S'mores"]
console.log(allKindsOfDonuts);


//list below the number of items in the array
let len = allKindsOfDonuts.length
console.log(len);

//remove the last item of the array
allKindsOfDonuts.pop();
console.log(allKindsOfDonuts);

//add "Maple Bar" at the beginning of the array
allKindsOfDonuts.unshift("Maple Bar")
console.log(allKindsOfDonuts);

//determine the index of "Glazed Cruller"
allKindsOfDonuts.indexOf("Glazed Cruller")

//Remove the "Jelly Filled" and the "Sour Cream" donut
let jelly_index = allKindsOfDonuts.indexOf("Jelly Filled")
//let scream_index = allKindsOfDonuts.indexOf("Sour Cream")
allKindsOfDonuts.splice(jelly_index,2)
//allKindsOfDonuts.splice(scream_index)

//Print out the final array
console.log(allKindsOfDonuts);