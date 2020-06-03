//Add height and weight to Fluffy

function HW(){
var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}
//add height,weight to fluffy
var cat[3] = {"height":15,"weight":4};
console.log(cat[3]);
}
HW();
