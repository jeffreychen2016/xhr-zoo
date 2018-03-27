const printToDom = (string,id) => {
    document.getElementById(id).innerHTML = string;
}

 const buildDomString = (animals) => {
     let string = '';
     for(let i=0; i<animals.length; i++){
        string += `<div class='animal'>`;
        string +=   `<h1>${animals[i].names}</h1>`;
        string +=   `<h3>${animals[i].number}</h3>`;
        string +=   `<img class='animal-image' src='${animals[i].imageURL}'>`;
        string +=   `<div class='button-container'>`;
        string +=       `<button>Escaped</button>`;
        string +=   `</div>`;
        string += `</div>`;
      }
      printToDom(string, 'zoo')
 }


function executeThisCodeAfterFileLoaded(){
    const data = JSON.parse(this.responseText);
    buildDomString(data.animals);
}

function executeThisCodeIfXHRFails(){
    console.log("Failed~~");
}


const startApplication = () => {
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    xhrRequest.addEventListener("error", executeThisCodeIfXHRFails);
    xhrRequest.open("GET","./animals.json");
    xhrRequest.send();
    console.log(xhrRequest);
}

startApplication();