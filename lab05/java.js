// how many book get rent 
// discount based at how many book rent in the same day 
// display the discount 


// gussing game for student
var pass = 1234;
var coloroldbook = "brown";

var GuessThePass = prompt("Try to guess the pass of websit hint:1234");
var color = prompt("what do you think the color of old books?");

    if (GuessThePass.toLocaleLowerCase === pass) {
        console.log("that right");
    }
    else {
        console.log("Try again");
    }
    if (color.toLocaleLowerCase === coloroldbook) {
        console.log("that right");
    }
    else {
        console.log("Try again");
    }
// if you was a student
// link of student

if (confirm('Are you student here?')) {
    alert('welcome');
    confirm("I wish you have a good time at my LIBRARY ");

    var BookPriceRent = 3;
    var amountOfbooks = prompt("How many books do you want to rent today?");
    var ask = confirm("Are you sure you want this book?");



    if (amountOfbooks = 1 && amountOfbooks <= 2) {
        alert(" you get a 10% disscount");

    }
    else if (amountOfbooks > 3 && amountOfbooks <= 4) {
        alert("you get a nice disscount 25%! see you ");
    }
    else if (amountOfbooks = 5) {

        alert("congratulations!! you get the biggist suprise 50% discount ");

    }
    if (ask == true) {
        x = "Thank you :)";

    } else {
        x = " i hope to see you again :() "
    }
    alert(x);

}
// if not your student it will not you allow to get rent
else {

    alert('sorry its just for student');
}

function myFunction(amountOfbooks) {
    var x = document.getElementById("books").src;
    document.getElementById("demo").innerHTML = x;
    alert("Have you rent" + amountOfbooks);
}
var img;
var amountOfbooks = 0;

while (amountOfbooks <= 5) {
    if (amountOfbooks = 1 && amountOfbooks <= 2) {
        x = prompt("pic");
    }
    else if (amountOfbooks > 3 && amountOfbooks <= 4) {
        x = prompt("pic")
    }
    else if (amountOfbooks = 5) {
        x = prompt("pic")
    }
    amountOfbooks += 1
}
myFunction(amountOfbooks);

// This element show temeprature at the library
var element = document.getElementById("demo");
element.innerText = "this is you weather's temperature : " + toCelsius(77) + " Celsius";
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
} 