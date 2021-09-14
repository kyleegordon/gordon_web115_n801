function getData() {
  let firstName = document.querySelector('#first_name').value;
  let lastName = document.querySelector('#last_name').value;
  let middleInitial = document.querySelector('#middle_initial').value;
        
   document.getElementById("greeting").innerText = "Welcome to Kyko Kombucha, " + firstName + " " + middleInitial + ". " + lastName + "!";
}
