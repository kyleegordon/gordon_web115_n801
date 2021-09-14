alert("test");

function getData() {
  let firstName = document.getElementById('first_name');
  let lastName = document.getElementById('last_name');
  let middleInitial = document.getElementById('middle_initial');
        
   document.getElementById("greeting").innerText = "Welcome to Kyko Kombucha, " + firstName + " " + middleInitial + ". " + lastName + "!";
}
