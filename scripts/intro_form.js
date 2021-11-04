function getData() 
{
  var firstName = document.getElementById('first_name').value;
  var lastName = document.getElementById('last_name').value;
  
  var computerPlatform = document.getElementById('computer_platform').value;
  var personalBackground = document.getElementById('personal_background').value;
  var academicBackground = document.getElementById('academic_background').value;
  
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


function displayData(firstDivisor, secondDivisor, thirdDivisor, firstWord, secondWord, thirdWord, totalLines) 
{
    
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
