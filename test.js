var myString = "I'm a \"fun\" string with dog";

console.log(myString);
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("string"));

if (myString.indexOf("dog") === -1){

    console.log("Dog is not in the string");

} else {

    console.log("Dog starts at positon " + myString.indexOf("dog"));
}

var string1 = "abc";
var string2 = "ABC";


console.log(string1.toLowerCase() === string2.toLowerCase());
console.log(string1 > string2);