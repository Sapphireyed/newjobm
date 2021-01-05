import 'tablesorter';

const jobsfilter = document.createElement('div');
jobsfilter.classList.add('section', 'shadow')
jobsfilter.id = 'jobs'

const header = document.createElement('h1')
header.classList.add('col-12')
header.innerHTML = 'JOBS'

// RARITY filter
const rarSel = document.createElement('select');
//rarSel.classList.add('col-4')
rarSel.id = 'rarity'
rarSel.name = 'rarity'
const optionsArr = ['Rarity', 1, 2, 3, 4, 5];

const options = optionsArr.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
});

rarSel.innerHTML = options;

// SEARCH
const search = document.createElement('input')
//search.classList.add('col-4')
search.type = 'text'
search.value = 'Search...'
search.classList.add('rounded', 'float-right')
console.log(search)

// DISPLAY PAGE / PAGER
var pages = document.createElement('div')
pages.id = 'pages'
pages.classList.add('float-right')
//pager.classList.add()
pages.innerHTML = '<!-- pager -->' +
    '<button class="pages" id="first"><i class="fas fa-step-backward"></i></button>' +
    '<button class="pages" id="prev"><i class="fas fa-caret-left"></i></button>'+
    ' <select class="pagesize" id="numOfPages">' +
        '<option selected="selected" value="10">10</option>'+
        '<option value="20">20</option>'+
        '<option value="30">30</option> '+
        '<option value="all">All</option>'+
    '</select> '+
    '<button class="pages" id="next"><i class="fas fa-caret-right"></i></button>'+
    '<button class="pages" id="last"><i class="fas fa-step-forward"></i></button>'


//add it all to the section
jobsfilter.append(header, search, rarSel, pages)
export { jobsfilter}
