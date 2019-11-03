//event listener and variables
const apiKey = "770c7f9d-2ad6-46b3-8b58-ea5aa0e94013"
const ul = document.querySelector('ul')
const btn = document.querySelector("button");
btn.addEventListener('click', ()=> {
const inputyear = document.querySelector("input").value
const inputcode = document.getElementById("input").value
let name = document.getElementById("name")
console.log(document.getElementById('name'))
//getting response
fetch(`https://date.nager.at/api/v2/publicholidays/${inputyear}/${inputcode}`)
.then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
.then(response => {
console.log(response)
let holiday = response.localName;
name.innerHTML = holiday;
response.forEach(function(name) {
const ol = document.querySelector('ol') //grab the ol from dom
let li = document.createElement('li'); //create an li
li.appendChild(document.createTextNode(name.localName)); //append text to li
ol.appendChild(li); //append li to ol




fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${name.localName}?key=770c7f9d-2ad6-46b3-8b58-ea5aa0e94013`)
.then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
.then(response => {
console.log(response[0].shortdef)
let def = response[0].shortdef;
name.innerHTML = def;
response.forEach(function(name) {
const ol = document.querySelector('ol') //grab the ol from dom
let li = document.createElement('li'); //create an li
li.appendChild(document.createTextNode(name.shortdef)); //append text to li
ol.appendChild(li); //append li to ol



});
})
// .catch(err => {
//     console.log(`error ${err}`)
//     alert("sorry, there are no results for your search")
});
});
});
