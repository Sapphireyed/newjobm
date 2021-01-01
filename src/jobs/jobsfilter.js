import 'tablesorter';

const jobsfilter = document.createElement('div');
jobsfilter.classList.add('section', 'shadow')
jobsfilter.id = 'jobs'

const header = document.createElement('h1')
header.innerHTML = 'JOBS'

// RARITY filter
const label = document.createElement('label');
label.for = 'rarity'
label.innerHTML = 'Choose Rarity'
const rarSel = document.createElement('select');
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
search.type = 'text'
search.value = 'Search...'
search.classList.add('rounded')
console.log(search)

// DISPLAY PAGE / PAGER
var pages = document.createElement('div')
pages.id = 'pages'
//pager.classList.add()
pages.innerHTML = '<!-- pager -->' +
    '<img src="https://mottie.github.io/tablesorter/addons/pager/icons/first.png" class="first pages" id="first"/>' +
    '<img src="https://mottie.github.io/tablesorter/addons/pager/icons/prev.png" class="pages" id="prev"/>'+
        '<span class="pagedisplay"></span> <!-- this can be any element, including an input -->'+
        '<img src="https://mottie.github.io/tablesorter/addons/pager/icons/next.png" class="pages" id="next" value="first"/>'+
        '<img src="https://mottie.github.io/tablesorter/addons/pager/icons/last.png" class="pages" id="last"/>' +
        '<select class="pagesize" title="Select page size">' +
            '<option selected="selected" value="10">10</option>'+
            '<option value="20">20</option>'+
            '<option value="30">30</option> '+
            '<option value="all">All</option>'+
        '</select>'

//add it all to the section
jobsfilter.append(header, search, rarSel, pages)
export { jobsfilter}
