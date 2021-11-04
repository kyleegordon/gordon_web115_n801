function getData() 
{
  var firstName = document.getElementById('first_name').value;
  var lastName = document.getElementById('last_name').value;
  var computerPlatform = document.getElementById('computer_platform').value;
  var personalBackground = document.getElementById('personal_background').value;
  var academicBackground = document.getElementById('academic_background').value;
  var subjectBackground = document.getElementById('subject_background').value;
  var courses = document.getElementById('courses').value;
  var interestingFact = document.getElementById('interesting_fact').value; 
  
  displayData(firstName, lastName, computerPlatform, personalBackground, academicBackground, subjectBackground, courses, interestingFact);
}


function displayData(firstName, lastName, computerPlatform, personalBackground, academicBackground, subjectBackground, courses, interestingFact) 
{
  let formInfo = [firstName, lastName, computerPlatform, personalBackground, academicBackground, subjectBackground, courses, interestingFact];
    
  for (let i = 0; i < formInfo.length; i++)
  {
    //creates new element & stores in variable
    var newListItem = document.createElement('li');
    
    //creates text node & stores in variable
    var newText = document.createTextNode(formInfo[i]);
    
    //attaches text node to new element
    newListItem.appendChild(newText);
    
    //find position where element should be added
    var position = document.getElementsByTagName('ul')[0];
    
    //insert new element in correct position
    position.appendChild(newListItem);
    
  }
}
