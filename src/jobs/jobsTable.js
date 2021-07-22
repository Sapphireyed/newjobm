import bgh1 from '../img/other/bgh1.png'

var jobsTable = document.createElement('table');
jobsTable.id = 'jobsTable';
jobsTable.classList.add('section', 'tablesorter', 'myTable', 'w-100', 'shadow')
var thead = document.createElement('thead')
//thead.style.backgroundImage = 'url("' + theadimg + '")'
//thead.style.backgroundSize = 'cover'
thead.classList.add('thead', 'shadow-lg', 'w-100')
thead.id = 'thead'
//thead.style.backgroundImage = 'url("' + bgh1 + '")'
//thead.style.backgroundPosition = 'center bottom'
//thead.style.backgroundSize = 'cover'
thead.innerHTML = '<tr id="jobsThead">'
    + '<th id="#" data-sort="number">#<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Icon">Icon<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Name">Name<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Rarity">Rarity<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Passive">Passive<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Switch">Switch<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Deck">Deck<i class="fas fa-sort float-right"></i></th>'
    + '<th id="HP" data-sort="number">HP<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Str" data-sort="number">STR<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Agi" data-sort="number">AGI<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Int" data-sort="number">INT<i class="fas fa-sort float-right"></i></th>'
    + '</tr>'
  var tbody = document.createElement('tbody')
  tbody.id = 'jobsBody'

//  tbody.style.backgroundImage = 'url("' + sword + '")'
//  tbody.style.backgroundSize = 'contain'
//  tbody.style.backgroundRepeat = 'no-repeat'
//  tbody.style.backgroundPosition = 'center'
jobsTable.append(thead, tbody)
export { jobsTable }
