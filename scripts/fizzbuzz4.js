function getData() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let middleInitial = document.getElementById('middle_initial').value;
  
  let firstDivisor = document.getElementById('first_number').value;
  let secondDivisor = document.getElementById('second_number').value;
  let thirdDivisor = document.getElementById('third_number').value;
  
  let firstWord = document.getElementById('first_word').value;
  let secondWord = document.getElementById('second_word').value;
  let thirdWord = document.getElementById('third_word').value;
  
  let totalLines = document.getElementById('total_lines').value;
  
  if (middleInitial) {
     document.getElementById("greeting").textContent = "Welcome to Kyko Kombucha, " + firstName + " " + middleInitial + ". " + lastName + "!";
   } else {
     document.getElementById("greeting").textContent = "Welcome to Kyko Kombucha, " + firstName + " " + lastName + "!";
   }
  
  bubbleSip(firstDivisor, secondDivisor, thirdDivisor, firstWord, secondWord, thirdWord, totalLines);
}

function isDivisible(number1, number2) {
  if (number1 % number2 === 0) {
    return true;
  } else {
    return false;
  }
}

function bubbleSip(firstDivisor, secondDivisor, thirdDivisor, firstWord, secondWord, thirdWord, totalLines) {
  for (let i = 1; i <= totalLines; i++) {
    var word = '';
    
    if (isDivisible(i, firstDivisor)) {
      word = word.concat(firstWord);
    } 
    
    if (isDivisible(i, secondDivisor)) {
      word = word.concat(secondWord);
    }
    
    if (isDivisible(i, thirdDivisor)) {
      word = word.concat(thirdWord);
    }
    
    if (word === '') {
      word = 'Bubble';
    }
      
      
    
    //creates new element & stores in variable
    var newListItem = document.createElement('li');
    
    //creates text node & stores in variable
    var newText = document.createTextNode(i + "- " + word);
    
    //attaches text node to new element
    newListItem.appendChild(newText);
    
    //find position where element should be added
    var position = document.getElementsByTagName('ul')[0];
    
    //insert new element in correct position
    position.appendChild(newListItem);
    
  }
  
}
