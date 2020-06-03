//Print the total weight of catFriends :

function TotalWeight(){
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
//declare weight of catFriends weight
var x = cat.catFriends[0].weight;
var y = cat.catFriends[1].weight;

//add weight of catFriends
console.log(x + y);
}
TotalWeight();
