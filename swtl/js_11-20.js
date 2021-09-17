


function orderTotal() {
  
  let total = addTotal(getSelected());
  document.getElementById("displayTotal").textContent = "Your total for this order is:  $" + total.toFixed(2);
  
}

function getSelected() {
  
        //create array to hold selections
        let selected = new Array();
 
        //references the form
        let beverages = document.getElementById("menu");
 
        //references all checkboxes in the form
        let checks = beverages.getElementsByTagName("INPUT");
 
        // loops to push checked selections to an array
        for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                selected.push(checks[i].value);
            }
        }
  
  return selected;
  
}

function addTotal(selectedPrices) {

  let sum = 0;
  
  // adds each price to sum
  for (var i = 0; i < selectedPrices.length; i++) {
    sum += parseFloat(selectedPrices[i]); 
  }
  
  return sum;
  
}
