// how many book get rent 
// discount based at how many book rent in the same day 
// display the discount 
confirm("I wish you have a good time at my LIBRARY ")

var BookPriceRent=3;

var amountOfbooks=prompt("How many books do you want to rent today?");
var ask=confirm("Are you sure you want this book?");

if (amountOfbooks =1 && amountOfbooks <=3) {
    alert(" you get a 10% disscount");
    
}
else if(amountOfbooks > 4 && amountOfbooks<=6) 
{
    alert("you get a nice disscount 25%! see you ");
}  
 else if(amountOfbooks =>7) 
{
    alert("congratulations!! you get the biggist suprise 50% discount ");
    
}
if (ask==true) {
    x="Thank you :)";
    
} else{
    x=" i hope to see you again :() "
}
alert(x);

//var amountOfbooks=BookPriceRent*amountOfbooks;
//var element=document.getElementById('pirce');
//lement.innerText='This is your price'+totalprice
