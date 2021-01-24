// versie 5 bonus 5
// transition

const hamburger      = document.querySelector('.button-toggle-nav');
const liArray        = document.querySelectorAll('.nav-ul li');
const colorSelectors = document.querySelectorAll('.color-selector');
const selTextArray   = document.querySelectorAll('.selector-text');
const firstLi        = document.querySelector('.nav-ul :first-child');

let menuIsOut        = false;

const setBackgroundColor = function (e) {
    
    // welke achtergrondkleur heeft het actuele li
    //   die zit in de tweede class die in de html toegewezen is
    // werkt zowel voor de li als de span
    let liColorClass = e.target.classList[1];

    // dit kan beter, ik wil die span benaderen maar weet geen betere manier
    // ik weet dat de span de eerste node is en daarom werkt dit
    // maar als je op de tekst zelf klikt, gaat het mis
    // Moet er een aparte eventListener op de span zelf?
    let currentColorText = e.target.childNodes[1].innerHTML;

    if (currentColorText === "Home") {
        currentColorText = "grey";
    }

    // classes die eerder toegevoegd zijn ook weer weghalen
    liArray.forEach( function(li) {
        document.body.classList.remove(li.classList[1]);
    });

    // en dan doen we hier het uiteindelijke werk
    document.body.classList.add(liColorClass);
    document.querySelector('.color-indicator').innerHTML = currentColorText;
    liArray.forEach( function(li) {li.classList.remove('color-selector-visible');});
    menuIsOut = false;
}

const setMenu = function( whichWay, relTarget) {

    if (whichWay === "over") {

        liArray.forEach( function(li) {li.classList.add('color-selector-visible');})
        selTextArray.forEach( function(text){text.classList.add('selector-text-visible')});
        menuIsOut = true;

    } else if (whichWay === "out" && relTarget !== firstLi ) {

        liArray.forEach( function(li) {li.classList.remove('color-selector-visible');})
        selTextArray.forEach( function(text){text.classList.remove('selector-text-visible')});
        menuIsOut = false;
    }
};

// kan ik dit ook als een niet-arrow function schrijven?
hamburger.addEventListener('mouseover', e => {setMenu("over", e.relatedTarget);});
hamburger.addEventListener('mouseout',  e => {setMenu("out" , e.relatedTarget);});

colorSelectors.forEach( function(colorSelector) {
    colorSelector.addEventListener('click', setBackgroundColor);
});
