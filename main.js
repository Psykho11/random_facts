const runbutton= document.getElementById("getbutton");



const getit= document.getElementById("getit");


function onConverstionDone(data) {
    
    getit.innerText = data.text;
    
}

function onFetchSuccess(response) {
   response.json().then(onConverstionDone);
}

function myname () {
    fetch("http://numbersapi.com/random/trivia?json").then(onFetchSuccess);
   
}

runbutton.addEventListener("click", myname);


myname();

