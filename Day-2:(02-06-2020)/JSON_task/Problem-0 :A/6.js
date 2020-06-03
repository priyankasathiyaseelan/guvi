//Print the total activities of all cats :

function TotalActivities(){
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
console.log(cat.activities, cat.catFriends[0].activities, cat.catFriends[1].activities);
//print activities of all cat
}
TotalActivities();
