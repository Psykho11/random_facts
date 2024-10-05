const runbutton= document.getElementById("getbutton");



const getit= document.getElementById("getit");


function onConverstionDone(data) {
    
    getit.innerText = data.text;
    
}

function onFetchSuccess(response) {
   response.json().then(onConverstionDone);
}

function myname () {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en").then(onFetchSuccess);
   
}

runbutton.addEventListener("click", myname);


myname();

