var buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', addText);

function addText() {
    var ul = document.getElementById('myUL');


    var li = document.createElement('li');

    var inputElement = document.getElementById('myInput');


    var inputValue = inputElement.value;
    if (inputValue == "") {
        alert("Nu ai scris nimic");
    }
    else {

       
        li.textContent = inputValue;
        li.classList.add('unchecked');

       
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteBtn')
        deleteButton.textContent = 'DELETE';

        
        li.appendChild(deleteButton);
        ul.appendChild(li);
        
        inputElement.value = "";
    }

}

var rearrangeButton = document.getElementById('rearrangeBtn');
rearrangeButton.addEventListener('click', rearrangeList);


function rearrangeList() {
    var ulElement = document.getElementById('myUL');
    var liElements = ulElement.getElementsByTagName('li');
    var uncheckedItems = [];
    var checkedItems = [];
  
    
    for (var i = 0; i < liElements.length; i++) {
      var li = liElements[i];
      if (li.classList.contains('unchecked')) {
        uncheckedItems.push(li);
      } else {
        checkedItems.push(li);
      }
    }

  
    
    for (var j = 0; j < uncheckedItems.length; j++) {
      ulElement.appendChild(uncheckedItems[j]);
    }
  
    
    for (var k = 0; k < checkedItems.length; k++) {
      ulElement.appendChild(checkedItems[k]);
    }
  }
  

setInterval(function () {
    var liElements = document.querySelectorAll('#myUL li');
    console.log(liElements);
    
    liElements.forEach(function (li) {

        var deleteButtons = document.getElementsByClassName('deleteBtn');

        
        for (var i = 0; i < deleteButtons.length; i++) {
            var deleteButton = deleteButtons[i];
            deleteButton.addEventListener('click', function () {
                var liElement = this.parentNode; 
                liElement.remove(); 
            });
        }

        li.addEventListener('click', function () {
            if (li.classList.contains('unchecked')) {
               
                li.classList.remove('unchecked');
                li.classList.add('checked');
            } else {
                
                li.classList.remove('checked');
                li.classList.add('unchecked');
            }
        });
    });
}, 2000); 





