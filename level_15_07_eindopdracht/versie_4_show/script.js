// versie 3 bonus 4
// met een veld dat de gekozen kleur laat zien
// is er een betere manier om de kleur op te vragen uit e.target?

const hamburger = document.querySelector('.button-toggle-nav');
const navUl     = document.querySelector('.nav-ul');
const liArray   = document.querySelectorAll('.nav-ul li');
const firstLi   = document.querySelector('.nav-ul :first-child');

let menuIsOut   = false;

const setBackgroundColor = function (e) {
    
    // welke achtergrondkleur heeft het actuele li, die zit in de tweede class die in de html toegewezen is
    let liColorClass = e.target.classList[1];
    // dit kan beter, ik wil die span benaderen maar weet geen betere manier
    // ik weet dat het de eerste node is en daarom werkt dit
    let currentColorText = e.target.childNodes[1].innerHTML;

    // if (currentColorText == "Home") {
    //     currentColorText = "grey";
    // }

    // classes die eerder toegevoegd zijn ook weer weghalen
    liArray.forEach( function(li) {
        document.body.classList.remove(li.classList[1]);
    });

    // en dan doen we hier het uiteindelijke werk
    document.body.classList.add(liColorClass);

    document.querySelector('.color-indicator').innerHTML = currentColorText;
    navUl.classList.remove('nav-ul-visible');
    menuIsOut = false;
}

const setMenu = function( whichWay, relTarget) {
  
    if (whichWay === "over") {
        navUl.classList.add('nav-ul-visible');;
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
});
