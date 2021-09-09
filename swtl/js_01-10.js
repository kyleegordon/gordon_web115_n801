

alert("Welcome to Kyko Kombucha!");
var firstName = prompt("Please enter your first name: ", "First Name Here");
var lastName = prompt("Please enter your last name: ", "Last Name Here");
var fullName = firstName + " " + lastName;

var age = prompt("Please enter your age in years: ", "Enter age here");
if (age.typeOf === 'String') {
    age = prompt("Please enter your age in years: ", "Enter a number here");
}


if (age < 18){
    var daysLeft = (18 - age) * 365;
    alert(`Hello ${fullName}, only ${daysLeft} days until you can enjoy our delicious kombucha!`);
    
} else{
    alert(`Hello ${fullName}, please enjoy a refreshing kombucha!`);
}
