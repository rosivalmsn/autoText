const containerEl = document.querySelector(".container");

const carrers = ["Software Developer","Gamer","Freelancer","Driver","Mailman"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++
    containerEl.innerHTML = `  <h1>I am a ${carrers[careerIndex].slice(0,characterIndex)}</h1>`;

    
    if(characterIndex === carrers[careerIndex].length){
        careerIndex++
        characterIndex = 0;

    }

    setTimeout(updateText, 400);
}

