

alert("Welcome to Kyko Kombucha!");
var firstName = prompt("Please enter your first name: ", "First Name Here");
var lastName = prompt("Please enter your last name: ", "Last Name Here");
var fullName = firstName + " " + lastName;

var age = prompt("Please enter your age in years: ", 00);
if (typeof age !== 'number') {
    while (typeof age !== 'number') {
        age = prompt("Please enter your age in years (numeric): ", 00);
        alert(typeof age);
    }
}


if (age < 18){
    var daysLeft = (18 - age) * 365;
    alert(`Hello ${fullName}, only ${daysLeft} days until you can enjoy our delicious kombucha!`);
    
} else{
    alert(`Hello ${fullName}, please enjoy a refreshing kombucha!`);
}
