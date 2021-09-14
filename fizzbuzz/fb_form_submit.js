alert("test");

function getData() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let middleInitial = document.getElementById('middle_initial').value;
        
   document.getElementById("greeting").innerText = "Welcome to Kyko Kombucha, " + firstName + " " + middleInitial + ". " + lastName + "!";
}
