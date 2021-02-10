//import 'tablesorter';
import next from '../img/other/swordnext3.png'
import last from '../img/other/swordlast3.png'
import bgh1 from '../img/other/bgh1.png'
import theadimg from '../img/Jobs/BG/inthp.jpg'


const glossfilter = document.createElement('div');
glossfilter.style.backgroundColor = '#5b707a'
//glossfilter.style.backgroundSize = 'cover'
//glossfilter.style.backgroundPosition = 'center center'
glossfilter.classList.add('section', 'shadow', 'row', 'filtersmain')
glossfilter.id = 'passives'

const header = document.createElement('h1')
header.classList.add('col-12', 'shadow')
header.innerHTML = 'Glossary'
header.style.textShadow = '2px 1px #728bbc'
//header.style.backgroundImage = 'url("' + bgh1 +'")'
//header.style.backgroundSize = 'cover'

const filtersDiv = document.createElement('div');
filtersDiv.id = 'glossfilter'
filtersDiv.classList.add('col-12', 'row', 'filtersSub');

const othersDiv = document.createElement('div');
othersDiv.classList.add('col-12', 'row');
othersDiv.id = 'otherfilters'

// SEARCH
const searchDiv = document.createElement('div')
searchDiv.classList.add('col-6')
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
pages.classList.add('col-6')
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

othersDiv.append(searchDiv, pages)

// tabs to switch between buff/debuff keywords and applies keywords
let tabs = document.createElement('div')
tabs.id = 'tabs'
let buffs = document.createElement('button')
//buffs.classList.add('rounded')
buffs.innerHTML = 'Buff/Debbuf Keywords'
buffs.id = 'glossButton'
let applies = document.createElement('button')
//applies.classList.add('rounded')
applies.innerHTML = 'Apply Keywords'
applies.id = 'applyButton'
tabs.append(buffs, applies)
//add it all to the section
glossfilter.append(header, filtersDiv, othersDiv, tabs)
export { glossfilter}
