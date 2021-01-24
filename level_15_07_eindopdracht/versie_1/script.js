// de visibility gaat nu in een class in plaats van met navUl.style.visibility = "visible";

const hamburger = document.querySelector('.button-toggle-nav');
const navUl     = document.querySelector('.nav-ul');
// welke classes heeft de body
let bodyClassList = document.body.classList;
// voor in de functie setBackgroundColor
// welke kleurenclasses zijn er allemaal in de ul
const liArray   = document.querySelectorAll('.nav-ul li');

let menuIsOut   = false;


const setBackgroundColor = function (e) {
    
    // welke achtergrondkleur heeft het actuele li, die zit in de tweede toegewezen class
    let liColorClass = e.target.classList[1];

    // even door alle colorClasses van de ul lopen, zonodig wat uitzetten in de body
    for ( j= 0; j < liArray.length; j++) {
        let currentColorClass = liArray[j].classList[1];

        if (bodyClassList.contains(currentColorClass)) {
            bodyClassList.remove(currentColorClass);
        }
    }

    // en dan doen we hier het uiteindelijke werk
    document.body.classList.add(e.target.classList[1]);

    navUl.classList.remove('nav-ul-visible');
    menuIsOut = false;
}

const toggleMenuVisibility = function () {   
    if ( !menuIsOut) {
        navUl.classList.add('nav-ul-visible');
        menuIsOut = true;
    }  else {
        navUl.classList.remove('nav-ul-visible');
        menuIsOut = false;
    }
}

hamburger.addEventListener('click', toggleMenuVisibility);

// deze eventListener gaat ook af als ik op de span met de tekst klik
// dat levert dan een ander e.target op
// en dat levert een probleem op
// daarom heb ik die span ook een tweede class gegeven
let colorSelectors = document.querySelectorAll('.color-selector');

// hier lukt de forEach loop wel
colorSelectors.forEach((colorSelector) => colorSelector.addEventListener('click', setBackgroundColor));
