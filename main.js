const printToDom = (string,id) => {
    document.getElementById(id).innerHTML = string;
}

 const buildDomString = (animals) => {
     let string = '';
     for(let i=0; i<animals.length; i++){
        string += `<h1>${animals[i].names}</h1>`;
      }
      printToDom(string, 'card-holder')
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