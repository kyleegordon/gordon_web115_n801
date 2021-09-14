
function getData() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let middleInitial = document.getElementById('middle_initial').value;
        
   document.getElementById("greeting").textContent = "Welcome to Kyko Kombucha, " + firstName + " " + middleInitial + ". " + lastName + "!";
  bubbleSip();
}

function bubbleSip() {
  
  for(let i = 1; i < 125; i+= 2) {
    let bubble = "<li>" + i + "Bubble</li>";
    let sip = "<li>" + (i + 1) + "Sip</li>";
    
    document.getElementById("output").innerHTML = bubble;
    document.getElementById("output").innerHTML = sip;
  }
  
}
