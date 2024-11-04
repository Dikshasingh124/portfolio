function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter effect
const texts = [
    "Developer",
    "Designer"
];
let speed = 100;
const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) { 
        textElements.innerHTML = textElements.innerHTML.slice(0, -1); 
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

//about me
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link"); 
    document.getElementById(tabname).classList.add("active-tab");
}


//----google sheet code--
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwLPZepv1BWWn5q16zEStYClgMeOYvRRzBN-zn0DbYtDqpHJ7WBZiLnMuMgk61aSjF1bw/exec';
  const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("message")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            message.innerHTML = "Message Sent"
            setTimeout(function(){
                message.innerHTML = ""
            },5000)
            form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
