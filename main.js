var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function() {
  var userName = document.getElementById('name').value;
  var userMessage = document.getElementById('message').value;
  var messageElement = document.createElement('h4');
  var nameElement = document.createElement('h4');
  var strongName = document.createElement('strong');

  nameElement.setAttribute('class', 'border');

  var userInputMessage = document.createTextNode(userMessage);
  var userInputNameBold = document.createTextNode(userName);
  var postedBy = document.createTextNode("Posted By: ")
  
  messageElement.appendChild(userInputMessage);
  strongName.appendChild(userInputNameBold);

  nameElement.appendChild(postedBy);
  nameElement.appendChild(strongName);
  
  document.getElementsByClassName('posts')[0].append(messageElement);
  document.getElementsByClassName('posts')[0].append(nameElement);

})