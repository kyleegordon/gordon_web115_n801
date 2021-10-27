function getData() 
{
  var firstName = document.getElementById('first_name').value;
  var lastName = document.getElementById('last_name').value;
  var middleInitial = document.getElementById('middle_initial').value;
  
  var firstDivisor = document.getElementById('first_number').value;
  var secondDivisor = document.getElementById('second_number').value;
  var thirdDivisor = document.getElementById('third_number').value;
  
  var firstWord = document.getElementById('first_word').value;
  var secondWord = document.getElementById('second_word').value;
  var thirdWord = document.getElementById('third_word').value;
  
  var totalLines = document.getElementById('total_lines').value;
  
  if (middleInitial && firstName && lastName) 
  {
     document.getElementById("greeting").textContent = "Welcome to Kyko Kombucha, " + firstName + " " + middleInitial + ". " + lastName + "!";
  } 
  else if (!middleInitial && firstName && lastName)
   {
     document.getElementById("greeting").textContent = "Welcome to Kyko Kombucha, " + firstName + " " + lastName + "!";
   } 
  else if (!middleInitial && firstName && !lastName)
   {
    document.getElementById("greeting").textContent = "Welcome to Kyko Kombucha, " + firstName + "!"; 
   }
  
  
  bubbleSip(firstDivisor, secondDivisor, thirdDivisor, firstWord, secondWord, thirdWord, totalLines);
}

function isDivisible(number1, number2) 
{
  if (number1 % number2 === 0) 
  {
    return true;
  } else 
   {
    return false;
   }
}

function bubbleSip(firstDivisor, secondDivisor, thirdDivisor, firstWord, secondWord, thirdWord, totalLines) 
{
  for (let i = 1; i <= totalLines; i++) 
  {
    let word = '';
    
    if (isDivisible(i, firstDivisor)) 
    {
      word = word.concat(firstWord);
    } 
    
    if (isDivisible(i, secondDivisor)) 
    {
      word = word.concat(secondWord);
    }
    
    if (isDivisible(i, thirdDivisor)) 
    {
      word = word.concat(thirdWord);
    }
    
    if (word === '') 
    {
      word = i;
    }
    
    //creates new element & stores in variable
    var newListItem = document.createElement('li');
    
    //creates text node & stores in variable
    var newText = document.createTextNode(word);
    
    //attaches text node to new element
    newListItem.appendChild(newText);
    
    //find position where element should be added
    var position = document.getElementsByTagName('ul')[0];
    
    //insert new element in correct position
    position.appendChild(newListItem);
    
  }
}
