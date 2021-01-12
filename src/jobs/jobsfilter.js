import 'tablesorter';

const jobsfilter = document.createElement('div');
jobsfilter.classList.add('section', 'shadow', 'row')
jobsfilter.id = 'jobs'

const header = document.createElement('h1')
header.classList.add('col-12')
header.innerHTML = 'JOBS'

// RARITY filter
const rarFilter = document.createElement('div');
rarFilter.classList.add('col', 'row')
const rarLabel = document.createElement('label');
rarLabel.for = 'rarit'
rarLabel.innerHTML = 'Rarity: '
rarLabel.className = 'col-12'
const rarSel = document.createElement('select');
rarSel.id = 'rarity'
rarSel.name = 'rarity'
rarSel.classList.add('filter', 'rounded', 'float-right')
rarSel.style.width = '100px'
const optionsArr = ['All', 1, 2, 3, 4, 5];

const options = optionsArr.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
});

rarSel.innerHTML = options;
rarFilter.append(rarLabel, rarSel)

// Element filter
const elemFilter = document.createElement('div');
elemFilter.classList.add('col', 'row')
const elemLabel = document.createElement('label');
elemLabel.for = 'element'
elemLabel.innerHTML = 'Element: '
elemLabel.className = 'col-12'
const elemSel = document.createElement('select');
elemSel.id = 'element'
elemSel.name = 'element'
elemSel.classList.add('filter', 'rounded', 'float-right')
const optionsArrElem = ['All', 'Fire', 'Water', 'Earth', 'Wind', 'Thunder', 'Light', 'Dark'];

const optionsElem = optionsArrElem.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
});

elemSel.innerHTML = optionsElem;
elemFilter.append(elemLabel, elemSel)

// Attribute filter
const attrFilterDiv = document.createElement('div');
attrFilterDiv.classList.add('col', 'row')
const attrLabel = document.createElement('label');
attrLabel.for = 'attrSel'
attrLabel.innerHTML = 'Attribute: '
attrLabel.className = 'col-12'
const attrSel = document.createElement('select');
attrSel.id = 'attrSel'
attrSel.name = 'attrSel'
attrSel.classList.add('filter', 'rounded', 'float-right')
const optionsArrAttr = ['All', 'MaxHP', 'Strength', 'Agility', 'Intelligence'];

const optionsAttr = optionsArrAttr.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
});

attrSel.innerHTML = optionsAttr;
attrFilterDiv.append(attrLabel, attrSel)

// TYPE filter
const typeFilterDiv = document.createElement('div');
typeFilterDiv.classList.add('col', 'row')
const typeLabel = document.createElement('label');
typeLabel.for = 'type'
typeLabel.innerHTML = 'Type: '
typeLabel.className = 'col-12'
const typeSel = document.createElement('select');
//rarSel.classList.add('col-4')
typeSel.id = 'type'
typeSel.name = 'type'
typeSel.classList.add('filter', 'rounded')
const typeOptionsArr = ['All', 'Buff', 'Curse', 'Damage', 'Debuff', 'Heal', 'InstantBoost', 'Protect', 'Sacrifice', 'Vulnerable'];

const optionsType = typeOptionsArr.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
});

typeSel.innerHTML = optionsType;
typeFilterDiv.append(typeLabel, typeSel)

// Apply filter
const applyFilterDiv = document.createElement('div');
applyFilterDiv.classList.add('col', 'row')
const applyLabel = document.createElement('label');
applyLabel.for = 'apply'
applyLabel.innerHTML = 'Trait: '
applyLabel.className = 'col-12'
const applySel = document.createElement('select');
applySel.id = 'apply'
applySel.name = 'apply'
applySel.classList.add('filter', 'rounded')
const applyOptionsArr = ['All', 'Combo', 'CreatureExpert', 'Exhaust', 'HumanoidExpert', 'LifeSteal'];

const optionsApply = applyOptionsArr.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
});

applySel.innerHTML = optionsApply;
applyFilterDiv.append(applyLabel, applySel)

// SEARCH
const searchDiv = document.createElement('div')
searchDiv.className = 'col'
const searchLabel = document.createElement('label')
searchLabel.for = 'search'
searchLabel.innerHTML = 'Search: '
searchLabel.className = 'col-12'
const search = document.createElement('input')
//search.classList.add('col-4')
search.type = 'text'
search.id = 'search'
search.name = 'search'
//search.value = 'Search...'
search.classList.add('rounded')

searchDiv.append(searchLabel, search)

// DISPLAY PAGE / PAGER
var pages = document.createElement('div')
pages.id = 'pages'
pages.classList.add('float-right')
//pager.classList.add()
pages.innerHTML = '<!-- pager -->' +
    '<button class="pages" id="first"><i class="fas fa-step-backward"></i></button>' +
    '<button class="pages" id="prev"><i class="fas fa-caret-left"></i></button>'+
    ' <select class="pagesize pages" id="numOfPages">' +
        '<option selected="selected" value="10">10</option>'+
        '<option value="20">20</option>'+
        '<option value="50">50</option> '+
        '<option value="all">All</option>'+
    '</select> '+
    '<button class="pages" id="next"><i class="fas fa-caret-right"></i></button>'+
    '<button class="pages" id="last"><i class="fas fa-step-forward"></i></button>'
header.append(pages)

//add it all to the section
jobsfilter.append(header, rarFilter, elemFilter, attrFilterDiv, typeFilterDiv, applyFilterDiv, searchDiv)
export { jobsfilter}
