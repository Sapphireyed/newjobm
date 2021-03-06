//import 'tablesorter';
import next from '../img/other/swordnext3.png'
import last from '../img/other/swordlast3.png'
import bgh1 from '../img/other/bgh1.png'
import theadimg from '../img/Jobs/BG/inthp.jpg'

const br = document.createElement('br')
const abilsfilter = document.createElement('div');
//abilsfilter.style.backgroundImage = 'url("' + theadimg + '")'
//abilsfilter.style.backgroundSize = 'cover'
//abilsfilter.style.backgroundPosition = 'center center'
abilsfilter.classList.add('section', 'shadow', 'row', 'filtersmain')
abilsfilter.id = 'abils'

const header = document.createElement('h1')
header.classList.add('col-12')
header.innerHTML = 'Abilities'
header.style.textShadow = '2px 2px #005470'
//header.style.backgroundImage = 'url("' + bgh1 +'")'
//header.style.backgroundSize = 'cover'

const filtersDiv = document.createElement('div');
filtersDiv.id = 'abilsfilter'
filtersDiv.classList.add('col-12', 'col-lg-6', 'row', 'filtersSub');
// RARITY filter
const rarFilter = document.createElement('div');
rarFilter.classList.add('col-6')
const rarLabel = document.createElement('label');
rarLabel.for = 'rarity'
rarLabel.innerHTML = 'Tier: '
const rarSel = document.createElement('select');
rarSel.id = 'rarity'
rarSel.name = 'rarity'
rarSel.classList.add('filter', 'rounded')
//rarSel.style.float = 'right'
//rarSel.style.width = '100px'
const optionsArr = ['All', 'Low', 'Medium', 'High', 'Master'];

const options = optionsArr.map(opt => {
  const value = opt
    return `<option id="${value}" value="${value}">${opt}</option>`;
});

rarSel.innerHTML = options;
rarFilter.append(rarLabel, rarSel)

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
    return `<option value="${value.replace(' ', '')}" value="${value}">${opt}</option>`;
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
                + '<option id="Negative" value="Negative">Negative</option>'
                + '<option id="Other" value="Other">Other</option>'
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

//clear filters button
let cleardiv = document.createElement('div')
cleardiv.className = 'col-6'
let clear = document.createElement('button')
clear.id = 'jobsclear'
clear.innerHTML = 'Reset'
clear.classList.add('rounded')
clear.style.color = 'white'
clear.style.fontSize = '18px'
cleardiv.appendChild(clear)
//start filters
let filterStart = document.createElement('div')
filterStart.className = 'col-6'
let start = document.createElement('button')
start.id = 'start'
start.innerHTML = 'Search'
start.classList.add('rounded')
start.style.color = 'white'
start.style.fontSize = '18px'
//start.style.backgroundColor = '#3a5863'//'#4d636f'
filterStart.appendChild(start)

let navFiters = document.createElement('div')
navFiters.id = 'navFiters'
navFiters.classList.add('col-12','col-sm-6', 'row')
navFiters.append(cleardiv, filterStart)
filtersDiv.append(rarFilter, elemFilter, attrFilterDiv, typeFilterDiv, applyFilterDiv, navFiters)

const othersDiv = document.createElement('div');
othersDiv.classList.add('col-12', 'col-lg-6', 'row');
othersDiv.id = 'otherfilters'

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
let emptyDiv = document.createElement('div')
emptyDiv.innerHTML = '...'
emptyDiv.style.color = 'transparent'

othersDiv.append(emptyDiv, searchDiv, pages)
//add it all to the section
abilsfilter.append(header, filtersDiv, othersDiv)
export { abilsfilter}
