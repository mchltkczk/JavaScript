var myAge = prompt("What is your age?");

while (myAge < 18) {
    document.write("You can't come inside this club, you are " + myAge + "<br>");
    myAge++;
}

document.write("You are finally 18! You can come!");