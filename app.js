//parentNode
  var item = document.querySelector('#items');
//  console.log(item.parentNode);

// //  item.parentNode.style.backgroundColor= 'gray';
//  item.parentNode.parentNode.style.backgroundColor= 'gray';
//  console.log(item.parentNode.parentNode);
//parentElement and parentNode is mostly same

//children  //childnodes => gives the text node means line breaks and white spaces so use children
// item.children[0].style.backgroundColor='red';
// item.children[1].style.backgroundColor='yellow';
// item.children[2].style.backgroundColor='orange';
// item.children[3].style.backgroundColor='pink';

//firstchild => gives line break,spaces its useless use 
//firstElementChild

// item.firstElementChild.style.backgroundColor="gray";
// item.firstElementChild.innerHTML ="HARSHA";

//lastchild not useful 
//use lastElementChild
// item.lastElementChild.style.backgroundColor="blue";

//sibilings 
//nextSibling not useful
//nextElementSibiling
// item.nextElementSibling.style.color='red';

//prviousElementSibling
//item.previousElementSibling.style.color="pink";

//method createElement
//create a div
var newDiv = document.createElement('div');

//add class
newDiv.className ="hello";

//add id
newDiv.id = "hello1";

//add attribute 
newDiv.setAttribute('title','hello attribute');

//create text node
var newDivText = document.createTextNode('hello hi harsha');
//add text to div
newDiv.appendChild(newDivText);
console.log(newDiv);

//to insert it into html page create container
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);
newDiv.style.fontSize= '30px';