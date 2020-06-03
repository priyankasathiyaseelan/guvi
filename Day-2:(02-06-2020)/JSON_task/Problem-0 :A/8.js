//Update the fur color of bar :

function funColor(){
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
//update furcolor
cat.catFriends[0].furcolor = "red";
//console.log(cat.catFriends[0]);
}
funColor();
