var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

// add item
function addItem(e) {
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;
    
    // create new li element
    var li = document.createElement('li');
    
    // add class
    li.className = 'list-group-item';
    
    // Add text Node with input value
    li.appendChild(document.createTextNode(newItem));
    
    // create a delete button
    var deleteBtn = document.createElement('button');
    
    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    // add text node to del button
    deleteBtn.appendChild(document.createTextNode('x'));
    
    // append a button to li
    li.appendChild(deleteBtn);

    // append li to a list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure ?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e) {
    // convert to lowercase
    var text = e.target.value.toLowerCase();
    
    //get li
    var items = itemList.getElementsByTagName('li');
    
    // convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}