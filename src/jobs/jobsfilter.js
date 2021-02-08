//import 'tablesorter';
import next from '../img/other/swordnext3.png'
import last from '../img/other/swordlast3.png'
import bgh1 from '../img/other/bgh1.png'
import theadimg from '../img/Jobs/BG/inthp.jpg'

const br = document.createElement('br')
const jobsfilter = document.createElement('div');
//jobsfilter.style.backgroundImage = 'url("' + theadimg + '")'
//jobsfilter.style.backgroundSize = 'cover'
//jobsfilter.style.backgroundPosition = 'center center'
jobsfilter.classList.add('section', 'shadow', 'row', 'filtersmain')
jobsfilter.id = 'jobs'

const header = document.createElement('h1')
header.classList.add('col-12')
header.innerHTML = 'JOBS'
header.style.textShadow = '2px 2px grey'
header.id = 'top'
//header.style.backgroundImage = 'url("' + bgh1 +'")'
//header.style.backgroundSize = 'cover'

const filtersDiv = document.createElement('div');
filtersDiv.id = 'jobsfilter'
filtersDiv.classList.add('col-12', 'col-lg-6', 'row', 'filtersSub');
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

const options = optionsArr.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
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
  return `<option value="${value}">${opt}</option>`;
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
typeSel.innerHTML = '<option value="All">All</option>'
                + '<option value="Damage">Damage</option>'
                + '<option value="Heal">Heal</option>'
                + '<option value="Buff">Buff</option>'
                + '<option value="InstantBoost">Action Buff</option>'
                + '<option value="Debuff">Debuff</option>'
                + '<option value="Vulnerable">Vulnerable</option>'
              //    + '<optgroup label="Protect">'
                + '<option value="Protect">Protect</option>'
                + '<option value="Remove Debuff">Remove Debuff</option>'
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
const applyOptionsArr = ['Action', 'Turn Charge', 'Combo', 'CreatureExpert', 'Draw', 'Exhaust', 'HumanoidExpert', 'LifeSteal', 'MatterExpert', 'Multiply', 'SpiritExpert',    ].sort();

const optionsApply = applyOptionsArr.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
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
  return `<option value="${value}">${opt}</option>`;
});
optionsWhen.unshift('<option value="All">All</option>')
whenSel.innerHTML = optionsWhen;
whenFilterDiv.append(whenLabel, whenSel)

// search in passive/switch/both
const searchinDiv = document.createElement('div');
searchinDiv.classList.add('col-6')
//searchinDiv.style.borderBottom = '2px solid #2a434a'
const searchinLabel = document.createElement('label');
searchinLabel.for = 'searchin'
searchinLabel.innerHTML = 'Search in: '
//applyLabel.className = 'col-12'
const searchinSel = document.createElement('select');
searchinSel.id = 'searchin'
searchinSel.name = 'searchin'
searchinSel.classList.add('rounded')
searchinSel.innerHTML = '<option value="both">Both</option><option value="passive">Passive</option><option value="switch">Switch</option>'
searchinDiv.append(searchinLabel, searchinSel)

//clear filters button
let cleardiv = document.createElement('div')
cleardiv.className = 'col-6'
let clear = document.createElement('button')
clear.id = 'jobsclear'
clear.innerHTML = 'Reset filters'
clear.classList.add('rounded')
clear.style.color = 'white'
clear.style.fontSize = '18px'
clear.style.backgroundColor = '#3a5863'//'#4d636f'
cleardiv.appendChild(clear)
/*const filtersLabels = document.createElement('div');
filtersLabels.classList.add('col-6')
filtersLabels.append(rarLabel, br.cloneNode(true), elemLabel, br.cloneNode(true), attrLabel, br.cloneNode(true), typeLabel, br.cloneNode(true), applyLabel)
const filtersSelect = document.createElement('div')
filtersSelect.classList.add('col-6')
filtersSelect.append(rarSel, br, elemSel, attrSel, typeSel, applySel)*/
let navFiters = document.createElement('div')
navFiters.id = 'navFiters'
navFiters.classList.add('col-12', 'row')
navFiters.append(searchinDiv, cleardiv)
filtersDiv.append(rarFilter, elemFilter, attrFilterDiv, typeFilterDiv, applyFilterDiv, whenFilterDiv, navFiters)

const othersDiv = document.createElement('div');
othersDiv.classList.add('col-12', 'col-lg-6', 'row');
othersDiv.id = 'otherfilters'

// choose Lvl
const chooseLvlDiv = document.createElement('div');
chooseLvlDiv.classList.add('col-6', 'col-lg-12')
//chooseLvlDiv.style.textAlign = 'right'
const chooseLabel = document.createElement('label');
chooseLabel.for = 'chooselvl'
chooseLabel.innerHTML = 'Change lvl: '
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

//jobmania crystal
const crystDiv = document.createElement('div');
crystDiv.classList.add('col-6','col-lg-12')
crystDiv.style.textAlign = 'right'
const jobmCrystal = document.createElement('label');
jobmCrystal.for = 'jobmCrystal'
jobmCrystal.innerHTML = 'Jobmania Crystal: '
jobmCrystal.style.textAlign = 'right'
jobmCrystal.style.marginRight = '4px'
const numOfCryst = document.createElement('select');
numOfCryst.id = 'jobmCrystal'
numOfCryst.name = 'jobmCrystal'
numOfCryst.value = 0
numOfCryst.style.width = '50px'
numOfCryst.classList.add('rounded')
numOfCryst.style.textAlign = 'right'
const crystOptArr = [0, 1, 2, 3, 4, 5];

const crystOpt = crystOptArr.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
});
numOfCryst.innerHTML = crystOpt;

crystDiv.append(jobmCrystal, numOfCryst)

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
othersDiv.append(chooseLvlDiv, crystDiv, searchDiv, pages)
//add it all to the section
jobsfilter.append(header, filtersDiv, othersDiv)
export { jobsfilter}