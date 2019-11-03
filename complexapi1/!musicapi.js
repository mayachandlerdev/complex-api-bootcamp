//event listener and variables
const btn = document.querySelector("button");
const apiKey = "c1b8df2675d3f576bf86c72dcb122113"
btn.addEventListener('click', ()=> {
const input = document.querySelector("input").value
console.log(document.getElementById('name'))
//getting response
fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${input}&api_key=${apiKey}&format=json`)
.then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
.then(response => {
console.log(response)
});
//error
})
.catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
});
