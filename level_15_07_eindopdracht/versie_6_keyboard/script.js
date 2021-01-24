// versie 6 bonus 6
// een kleur kiezen met het toetsenbord
// dit kan vast wel strakker

const hamburger      = document.querySelector('.button-toggle-nav');
const liArray        = document.querySelectorAll('.nav-ul li');
const colorSelectors = document.querySelectorAll('.color-selector');
const selTextArray   = document.querySelectorAll('.selector-text');
const firstLi        = document.querySelector('.nav-ul :first-child');

let menuIsOut        = false;

const setBackgroundColor = function (e) {
    
    // welke achtergrondkleur heeft het actuele li, die zit in de tweede class die in de html toegewezen is
    let liColorClass = e.target.classList[1];
    // dit kan beter, ik wil die span benaderen maar weet geen betere manier
    // ik weet dat het de eerste node is en daarom werkt dit
    // maar als je op de tekst zelf klikt, gaat het mis
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

const setBackgroundColorKeyboard = function (newBackgroundStyle, newIndicatorText) {

    // classes die eerder toegevoegd zijn ook weer weghalen
    liArray.forEach( function(li) {
        document.body.classList.remove(li.classList[1]);
    });
    
    // kleur toekennen
    document.body.classList.add(newBackgroundStyle);
        
    // kleur invullen
    document.querySelector('.color-indicator').innerHTML = newIndicatorText;

    // alle li's onzichtbaar maken
    liArray.forEach( function(li) {li.classList.remove('color-selector-visible');});
    menuIsOut = false;122
};


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


hamburger.addEventListener('mouseover', e => {setMenu("over", e.relatedTarget);});
hamburger.addEventListener('mouseout',  e => {setMenu("out" , e.relatedTarget);});

colorSelectors.forEach((colorSelector) => colorSelector.addEventListener('click', setBackgroundColor));

document.addEventListener('keydown', function(event) {
 
    let newBackgroundStyle = "";
    let newIndicatorText   = "";

    if (event.code === 'Digit1' || event.code === "Numpad1") {
        newBackgroundStyle = "color-1";
        newIndicatorText   = "gray";
    } else if  (event.code === 'Digit2' || event.code === "Numpad2") {
        newBackgroundStyle = "color-2";
        newIndicatorText   = "red";
    } else if  (event.code === 'Digit3' || event.code === "Numpad3") {
        newBackgroundStyle = "color-3";
        newIndicatorText   = "orange";
    } else if  (event.code === 'Digit4' || event.code === "Numpad4") {
        newBackgroundStyle = "color-4";
        newIndicatorText   = "purple";
    } else if  (event.code === 'Digit5' || event.code === "Numpad5") {
        newBackgroundStyle = "color-5";
        newIndicatorText   = "green";
    };

    // we moeten alleen op deze toetsen reageren
    if (newBackgroundStyle !== "") {
        setBackgroundColorKeyboard(newBackgroundStyle, newIndicatorText);
        newBackgroundStyle = "";
        newIndicatorText   = "";
    };
});
