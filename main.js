const printToDom = (string,id) => {
    document.getElementById(id).innerHTML = string;
}

 const buildDomString = (animals) => {
     let string = '';
     for(let i=0; i<animals.length; i++){
        if(animals[i].isCarnivore){
            string += `<div class='animal carnivore'>`;
        }else{
            string += `<div class='animal vegetable'>`;
        }

        string +=   `<h1>${animals[i].names}</h1>`;
        string +=   `<h3>${animals[i].number}</h3>`;
        string +=   `<img class='animal-image' src='${animals[i].imageURL}'>`;
        string +=   `<div class='button-container'>`;
        string +=       `<button class='escaped'>Escaped</button>`;
        string +=   `</div>`;
        string += `</div>`;
      }
      printToDom(string, 'zoo')
 }


function executeThisCodeAfterFileLoaded(){
    const data = JSON.parse(this.responseText);
    buildDomString(data.animals);
    addEscapedEventListeners();
}

function executeThisCodeIfXHRFails(){
    console.log("Failed~~");
}

const addEscapedEventListeners = () => {
    const escapedButtons = document.getElementsByClassName('escaped');
    for(let i = 0; i < escapedButtons.length; i++){
        escapedButtons[i].addEventListener('click',animalEscaped);
    }
}

const animalEscaped = (e) => {
    const badAnimalButtonContainer = e.target.parentNode;
    showCarnivores();
    showVegetables();
    showFoundButton(badAnimalButtonContainer);
}

const showFoundButton = (badAnimalButton) => {
    badAnimalButton.innerHTML = `<button id='found'>Found</button>`;
    initializeFoundButton();
}

const initializeFoundButton = () => {
    const foundButton = document.getElementById('found');
    foundButton.addEventListener('click',()=>{
        const animals = document.getElementsByClassName('animal');
        for(let m=0; m<animals.length; m++){
            animals[m].children[3].innerHTML ='<button class="escaped">Escaped</button>';
            animals[m].classList.remove('green');
            animals[m].classList.remove('red');
        }
        addEscapedEventListeners();
    });
}

const showCarnivores = ()=>{
    const carnivore = document.getElementsByClassName('carnivore');
    for(let j = 0; j < carnivore.length; j++){
        carnivore[j].children[3].innerHTML ='';
        carnivore[j].classList.add('red');
    }
}

const showVegetables = ()=>{
    const vegetables = document.getElementsByClassName('vegetable');
    for(let k = 0; k < vegetables.length; k++){
        vegetables[k].children[3].innerHTML ='<button>EAT ME!</button>';
        vegetables[k].classList.add('green');
    }
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