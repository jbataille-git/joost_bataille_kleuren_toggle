// versie 3 bonus 3
// niet met mouse-event click maar met mouseover en mouseout
// het zou fraai zijn als het menu ook verdween als je van de nav-ul naar de body gaat met de muis
// maar dat bleek een heel gedoe en te lastig

const hamburger   = document.querySelector('.button-toggle-nav');
const navUl       = document.querySelector('.nav-ul');
const liArray     = document.querySelectorAll('.nav-ul li');
const firstLi     = document.querySelector('.nav-ul :first-child');

let menuIsOut     = false;


const setBackgroundColor = function (e) {
    
    // welke achtergrondkleur heeft het actuele li, die zit in de tweede class die in de html toegewezen is
    let liColorClass = e.target.classList[1];

    // classes die eerder toegevoegd zijn ook weer weghalen
    // is nodig omdat het anders niet goed werkt
    liArray.forEach( function(li) {
        document.body.classList.remove(li.classList[1]);
    });

    // en dan doen we hier het uiteindelijke werk
    document.body.classList.add(liColorClass);

    navUl.classList.remove('nav-ul-visible')
    menuIsOut = false;
}

const setMenu = function( whichWay, relTarget) {
    if (whichWay === "over" ) {
        navUl.classList.add('nav-ul-visible');
        menuIsOut = true;
    } else if (whichWay === "out" && relTarget !== firstLi) {
        navUl.classList.remove('nav-ul-visible');
        menuIsOut = false;
    }
};

// kan ik dit ook als een niet-arrow function schrijven?
hamburger.addEventListener('mouseover', e => {setMenu("over", e.relatedTarget);});
hamburger.addEventListener('mouseout',  e => {setMenu("out" , e.relatedTarget);});

let colorSelectors = document.querySelectorAll('.color-selector');
colorSelectors.forEach( function(colorSelector) {
    colorSelector.addEventListener('click', setBackgroundColor);
    // colorSelector.addEventListener('mouseout', e => {setMenu("li-out", e.relatedTarget);});
});
