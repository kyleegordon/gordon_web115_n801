
function getData() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let middleInitial = document.getElementById('middle_initial').value;
        
   document.getElementById("greeting").innerText = "Welcome to Kyko Kombucha, " + firstName + " " + middleInitial + ". " + lastName + "!";
  bubbleSip();
}

function bubbleSip() {
  
  for(let i = 1; i < 125; i+= 2) {
    document.getElementById("output").innerHTML = "<li>" + i + "Bubble</li>";
    document.getElementById("output").innerHTML = "<li>" + (i + 1) + "Sip</li>";
  }
  
}
