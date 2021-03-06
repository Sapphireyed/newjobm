//import 'tablesorter';
import next from '../img/other/swordnext3.png'
import last from '../img/other/swordlast3.png'

const charsfilter = document.createElement('div');
//charsfilter.style.backgroundImage = 'url("' + theadimg + '")'
//charsfilter.style.backgroundSize = 'cover'
//charsfilter.style.backgroundPosition = 'center center'
charsfilter.classList.add('section', 'shadow', 'row', 'filtersmain')
charsfilter.id = 'jobs'

const header = document.createElement('h1')
header.classList.add('col-12')
header.innerHTML = 'Characters'
header.style.textShadow = '2px 2px grey'
header.id = 'top'
//header.style.backgroundImage = 'url("' + bgh1 +'")'
//header.style.backgroundSize = 'cover'

const filtersDiv = document.createElement('div');
filtersDiv.id = 'charsfilter'
filtersDiv.classList.add('col-12', 'col-lg-7', 'row', 'filtersSub');
// RARITY filter
const rarFilter = document.createElement('div');
rarFilter.classList.add('col-6')
const rarLabel = document.createElement('label');
rarLabel.for = 'rarity'
rarLabel.innerHTML = 'Rarity: '
const rarSel = document.createElement('select');
rarSel.id = 'rarity'
rarSel.name = 'rarity'
rarSel.classList.add('filter', 'rounded')
//rarSel.style.float = 'right'
//rarSel.style.width = '100px'
const optionsArr = ['All', 1, 2, 3, 4, 5];
const optionsArr2 = ['All', 'Beginner', 'Easy', 'Medium', 'Hard', 'Boss'];

export const options = optionsArr.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
});
export const options2 = optionsArr2.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
});

rarSel.innerHTML = options;
rarFilter.append(rarLabel, rarSel)
// RACE filter
const racefilter = document.createElement('div');
racefilter.classList.add('col-6')
const raceLabel = document.createElement('label');
raceLabel.for = 'race'
raceLabel.innerHTML = 'Race: '
const raceSel = document.createElement('select');
raceSel.id = 'race'
raceSel.name = 'rarity'
raceSel.classList.add('filter', 'rounded')
//rarSel.style.float = 'right'
//rarSel.style.width = '100px'
const optionsArrRace = ['All', 'Creature', 'Humanoid', 'Spirit', 'Matter'];

const optionsRace = optionsArrRace.map(opt => {
  const value = opt
    return `<option id="${value}" value="${value}">${opt}</option>`;
});

raceSel.innerHTML = optionsRace;
racefilter.append(raceLabel, raceSel)
// Element filter
const elemFilter = document.createElement('div');
elemFilter.classList.add('col-6')
const elemLabel = document.createElement('label');
elemLabel.for = 'element'
elemLabel.innerHTML = 'Element:'
//elemLabel.className = 'col-12'
const elemSel = document.createElement('select');
elemSel.id = 'element'
elemSel.name = 'element'
elemSel.classList.add('filter', 'rounded')
const optionsArrElem = ['All', 'Fire', 'Water', 'Earth', 'Wind', 'Thunder', 'Light', 'Dark'];

const optionsElem = optionsArrElem.map(opt => {
  const value = opt
    return `<option id="${value}" value="${value}">${opt}</option>`;
});

elemSel.innerHTML = optionsElem;
elemFilter.append(elemLabel, elemSel)

// Attribute filter
const attrFilterDiv = document.createElement('div');
attrFilterDiv.classList.add('col-6')
const attrLabel = document.createElement('label');
attrLabel.for = 'attrSel'
attrLabel.innerHTML = 'Attribute: '
//attrLabel.className = 'col-12'
const attrSel = document.createElement('select');
attrSel.id = 'attrSel'
attrSel.name = 'attrSel'
attrSel.classList.add('filter', 'rounded')
const optionsArrAttr = ['All', 'MaxHP', 'Strength', 'Agility', 'Intelligence'];

const optionsAttr = optionsArrAttr.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
});

attrSel.innerHTML = optionsAttr;
attrFilterDiv.append(attrLabel, attrSel)

// TYPE filter
const typeFilterDiv = document.createElement('div');
typeFilterDiv.classList.add('col-6')
const typeLabel = document.createElement('label');
typeLabel.for = 'type'
typeLabel.innerHTML = 'Type: '
//typeLabel.className = 'col-12'
const typeSel = document.createElement('select');
//rarSel.classList.add('col-4')
typeSel.id = 'type'
typeSel.name = 'type'
typeSel.value = 'All'
typeSel.classList.add('filter', 'rounded')
typeSel.innerHTML = '<option id="All" value="All">All</option>'
                + '<option id="Damage" value="Damage">Damage</option>'
                + '<option id="Heal" value="Heal">Heal</option>'
                + '<option id="Buff" value="Buff">Buff</option>'
                + '<option id="ActionBuff" value="InstantBoost">Action Buff</option>'
                + '<option id="Debuff" value="Debuff">Debuff</option>'
                + '<option id="Vulnerable" value="Vulnerable">Vulnerable</option>'
              //    + '<optgroup label="Protect">'
                + '<option id="Protect" value="Protect">Protect</option>'
                + '<option id="RemoveDebuff" value="Remove Debuff">Remove Debuff</option>'
                //  + '</optgroup>'
                + '<option value="Negative">Negative</option>'
                + '<option value="Other">Other</option>'
//const typeOptionsArr = ['All', 'Buff', 'Curse', 'Damage', 'Debuff', 'Heal', 'InstantBoost', 'Protect', 'Sacrifice', 'Vulnerable'];

//const optionsType = typeOptionsArr.map(opt => {
//  const value = opt
//  return `<option value="${value}">${opt}</option>`;
//});

//typeSel.innerHTML = optionsType;
typeFilterDiv.append(typeLabel, typeSel)

// Apply filter
const applyFilterDiv = document.createElement('div');
applyFilterDiv.classList.add('col-6')
const applyLabel = document.createElement('label');
applyLabel.for = 'apply'
applyLabel.innerHTML = 'Apply: '
//applyLabel.className = 'col-12'
const applySel = document.createElement('select');
applySel.id = 'apply'
applySel.name = 'apply'
applySel.value = 'All'
applySel.classList.add('filter', 'rounded')
const applyOptionsArr = [
    'PracticePerfect', 'Exhaust', 'LifeSteal', 'LastResort', 'TurnCharge', 'Combo Blend', 'Overloaded',
    'FocusEnergy', 'NegativePower', 'Curse', 'Scheduled', 'AutoFire', 'Gamble',
    'Creature', 'Humanoid', 'Matter', 'Spirit',
    'Strength Synergy', 'Agility Synergy', 'MaxHP Synergy', 'Intelligence Synergy',
    'Fire', 'Water', 'Earth', 'Wind', 'Thunder', 'Dark', 'Light'
].sort();

const optionsApply = applyOptionsArr.map(opt => {
  const value = opt
    return `<option id="${value}" value="${value}">${opt}</option>`;
});
optionsApply.unshift('<option value="All">All</option>')
applySel.innerHTML = optionsApply;
applyFilterDiv.append(applyLabel, applySel)

//passives when apply
// Attribute filter
const whenFilterDiv = document.createElement('div');
whenFilterDiv.classList.add('col-6')
const whenLabel = document.createElement('label');
whenLabel.for = 'whenSel'
whenLabel.innerHTML = 'Passive: '
//attrLabel.className = 'col-12'
const whenSel = document.createElement('select');
whenSel.id = 'whenSel'
whenSel.name = 'whenSel'
whenSel.classList.add('filter', 'rounded')
const optionsArrWhen = ['Turn End', 'After Action', 'Combat Start', 'Master', 'Stat Boost', 'Reflect', 'Immune', 'HP Threshold', 'Heal', 'Dmg mitigate'].sort();

const optionsWhen = optionsArrWhen.map(opt => {
  const value = opt
    return `<option id="${value.replace(' ', '')}" value="${value}">${opt}</option>`;
});
optionsWhen.unshift('<option value="All">All</option>')
whenSel.innerHTML = optionsWhen;
whenFilterDiv.append(whenLabel, whenSel)

// search in passive/switch/both
const searchinDiv = document.createElement('div');
searchinDiv.classList.add('col-12')
const searchinLabel = document.createElement('label');
searchinLabel.for = 'searchin'
searchinLabel.innerHTML = 'Search in: '
//applyLabel.className = 'col-12'
const searchinSel = document.createElement('select');
searchinSel.id = 'searchin'
searchinSel.name = 'searchin'
searchinSel.classList.add('rounded')
searchinSel.innerHTML = '<option value="both">Both</option><option value="passives">Passives</option><option value="abilities">Abilities</option>'
searchinDiv.append(searchinLabel, searchinSel)

//clear filters button
//let filtBtns= document.createElement('div')
//filtBtns.classList.add('col-6', 'row')
//filtersBtns.id = 'startClear'
let cleardiv = document.createElement('div')
cleardiv.classList.add('col-6', 'sol-sm-3')
let clear = document.createElement('button')
clear.id = 'jobsclear'
clear.innerHTML = 'Reset'
clear.classList.add('rounded')
clear.style.color = 'white'
clear.style.fontSize = '18px'
clear.style.width = '80%'
let clear2 = clear.cloneNode(true)
clear.id = 'clear2'
cleardiv.append(clear, clear2)
//clear filters button
let filterStart = document.createElement('div')
filterStart.classList.add('col-6', 'sol-sm-3')
let start = document.createElement('button')
start.id = 'start'
start.innerHTML = 'Search'
start.classList.add('rounded')
start.style.color = 'white'
start.style.fontSize = '18px'
start.style.width = '80%'
let start2 = start.cloneNode(true)
start2.id = 'start2'
filterStart.append(start, start2)
//filtBtns.append(cleardiv, filterStart)
/*const filtersLabels = document.createElement('div');
filtersLabels.classList.add('col-6')
filtersLabels.append(rarLabel, br.cloneNode(true), elemLabel, br.cloneNode(true), attrLabel, br.cloneNode(true), typeLabel, br.cloneNode(true), applyLabel)
const filtersSelect = document.createElement('div')
filtersSelect.classList.add('col-6')
filtersSelect.append(rarSel, br, elemSel, attrSel, typeSel, applySel)*/
let navFiters = document.createElement('div')
navFiters.id = 'navFiters'
navFiters.classList.add('col-12', 'row')
navFiters.append(searchinDiv, cleardiv, filterStart)
filtersDiv.append(rarFilter, elemFilter, attrFilterDiv, typeFilterDiv, applyFilterDiv, whenFilterDiv, racefilter, navFiters)

const othersDiv = document.createElement('div');
othersDiv.classList.add('col-12', 'col-sm-5', 'row');
othersDiv.id = 'otherfilters'

// choose Lvl
const chooseLvlDiv = document.createElement('div');
chooseLvlDiv.classList.add('col-6', 'col-lg-12')
//chooseLvlDiv.style.textAlign = 'right'
const chooseLabel = document.createElement('label');
chooseLabel.for = 'chooselvl'
chooseLabel.innerHTML = 'Dungeon lvl: '
chooseLabel.style.marginRight = '4px'
const chooseInput = document.createElement('input');
chooseInput.id = 'chooselvl'
chooseInput.name = 'chooseInput'
//chooseInput.style.textAlign = 'right'
chooseInput.style.width = '50px'
chooseInput.value = 10
chooseInput.type = 'number'
chooseInput.min = 1
chooseInput.step = 10
chooseInput.classList.add('rounded')

chooseLvlDiv.append(chooseLabel, chooseInput)

// choose Lvl
const heroLvlDiv = document.createElement('div');
heroLvlDiv.classList.add('col-6', 'col-lg-12')
//chooseLvlDiv.style.textAlign = 'right'
const heroLabel = document.createElement('label');
heroLabel.for = 'herolvl'
heroLabel.innerHTML = 'Hero lvl: '
heroLabel.style.marginRight = '4px'
const heroInput = document.createElement('input');
heroInput.id = 'herolvl'
heroInput.name = 'herolvl'
//chooseInput.style.textAlign = 'right'
heroInput.style.width = '50px'
heroInput.value = 1
heroInput.type = 'number'
heroInput.min = 1
heroInput.step = 5
heroInput.classList.add('rounded')

heroLvlDiv.append(heroLabel, heroInput)

// level buttons
let lvlbtns = document.createElement('div')
lvlbtns.classList.add('col-12')
lvlbtns.id = 'lvlbtns'
let applybtn = document.createElement('button')
applybtn.classList.add('rounded')
applybtn.innerHTML = 'Apply'
let reset = document.createElement('button')
reset.classList.add('rounded')
reset.innerHTML = 'Reset'
lvlbtns.append(applybtn, reset)
// SEARCH
const searchDiv = document.createElement('div')
searchDiv.classList.add('col-12')
searchDiv.style.textAlign = 'right'
const searchLabel = document.createElement('label')
searchLabel.for = 'search'
searchLabel.innerHTML = 'Search: '
const search = document.createElement('input')
search.type = 'text'
search.id = 'search'
search.name = 'search'
//search.value = 'Search...'
search.classList.add('rounded')

searchDiv.append(searchLabel, search)

// DISPLAY PAGE / PAGER
var pages = document.createElement('div')
pages.id = 'pagesdiv'
pages.classList.add('col-12')
//pager.classList.add()
pages.innerHTML = '<!-- pager -->' +
    '<div></div>' +
    '<div id="pages" class="float-right">' +
    '<button class="pages rounded" id="first"><img alt="first" src="' + last + '" width="44" height="auto"></button>' +
    '<button class="pages rounded" id="prev"><img alt="next" src="' + next + '" width="44" height="auto"></button>'+
    ' <select class="pagesize pages rounded" id="numOfPages">' +
        '<option selected="selected" value="10">10</option>'+
        '<option value="20">20</option>'+
        '<option value="50">50</option> '+
        '<option value="all">All</option>'+
    '</select> '+
    '<button class="pages rounded" id="next"><img alt="next" src="' + next + '" width="44" height="auto"></button>'+
    '<button class="pages rounded" id="last"><img alt="last" src="' + last + '" width="44" height="auto"></button>'+
    '</div>'
//header.append(pages)
let empty =document.createElement('div')
empty.innerHTML = '...'
empty.className = 'col-12'
empty.style.color= 'transparent'
othersDiv.append(heroLvlDiv, chooseLvlDiv,lvlbtns, searchDiv, pages)
//add it all to the section
// tabs to switch between buff/debuff keywords and applies keywords
let tabs = document.createElement('div')
tabs.id = 'tabs'
let buffs = document.createElement('button')
//buffs.classList.add('rounded')
buffs.innerHTML = 'Heroes'
buffs.id = 'glossButton'
let applies = document.createElement('button')
//applies.classList.add('rounded')
applies.innerHTML = 'Enemies'
applies.id = 'applyButton'
tabs.append(buffs, applies)
charsfilter.append(header, filtersDiv, othersDiv, tabs)
export { charsfilter}
