//add tasks to local storage
let storeTodo = () => {
    let 
}

//append an X to each task
let myList = document.getElementsByTagName('li')
for(let i = 0; i < myList.length; i++ ) {
    let span = document.createElement('span');
    let text = document.createTextNode('\u00D7');
    span.className='remove';
    span.appendChild(text);
    myList[i].appendChild(span);
}

//click to check and line-through task
let list = document.querySelector('ul');
list.addEventListener('click', (task) => {
    task.target.classList.toggle('checked');
}, false);

//click on the X to hide/remove selected task
let remove = document.getElementsByClassName('remove');
for(let i = 0; i < remove.length; i++) {
remove[i].addEventListener('click', () => {
    let parent = remove[i].parentElement;
    alert('Task successfully removed!')
    parent.style.display = 'none'
    
})
}
//adds task to task list, alert for empty field, alert for successful addition, X button to remove task next to 
function addTask() {
    let li = document.createElement('li')
    let inputVal = document.getElementById('inputy').value
    let v = document.createTextNode(inputVal)
    li.appendChild(v)
    if(inputVal === '') {
        alert('You must write something!')
    } else {
        document.getElementById('unordery').appendChild(li)
        alert(`${inputVal} has successfully been added as a task!`);
    }
    document.getElementById('inputy').value = '';
let span = document.createElement('span');
let text = document.createTextNode('\u00d7')
span.className = 'remove';
span.appendChild(text);
li.appendChild(span);

for(let i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
        let par = this.parentElement;
        par.style.display='none'
    }
}
}

