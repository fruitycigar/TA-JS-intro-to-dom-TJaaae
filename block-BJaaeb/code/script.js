/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

function createInputElm(labelMessage, type = "text"){
let label = document.createElement('label');
let input = document.createElement('input');

input.type = type;
label.innerText = labelMessage;
label.append(input);

return label;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

function stringInputElm(labelMessage, type = "text") {
  let html = `<label>${labelMessage}: <input type="${type}"></label>`;

  return html;
}

// TEST
stringInputElm('Your name'); //<label>Your name: <input type="text"></label>
stringInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>

function createList(arr) {
let html = document.createElement('ul');

for(let i = 0; i < arr.length - 1; i++) {
  let li = document.createElement('li');
  li.innerText = arr[i];
  html.append(li);
}

  return html;
}


// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

function createTodoList(arr) {
  let html = document.createElement('ul');
  
  for(let i = 0; i <= arr.length - 1; i++) {
    let list = document.createElement('li');
    let para = document.createElement('p');
    para.innerText = arr[i].name;
    list.append(para);
    let input = document.createElement('input');
    input.type = "checkbox"
    input.name = " ";
    input.id = " ";
    list.append(input);
    let span = document.createElement('span');
    list.append(span);

    if(arr[i].isDone === true) {
      span.innerText = 'X';
    }

    html.append(list);

  }

  return html;
}


createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
