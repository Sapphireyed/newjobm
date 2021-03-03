import sword from '../img/other/blades.png'

var jobsTable = document.createElement('table');
jobsTable.id = 'jobsTable';
jobsTable.classList.add('section', 'tablesorter', 'myTable', 'w-100', 'shadow')
var thead = document.createElement('thead')
//thead.style.backgroundImage = 'url("' + theadimg + '")'
//thead.style.backgroundSize = 'cover'
thead.classList.add('thead', 'shadow-lg', 'w-100')
thead.id = 'thead'
thead.innerHTML = '<tr id="jobsThead">'
    + '<th data-sort="number">#<i class="fas fa-sort float-right"></i></th>'
    + '<th>Icon<i class="fas fa-sort float-right"></i></th>'
    + '<th>Name<i class="fas fa-sort float-right"></i></th>'
    + '<th>Rarity<i class="fas fa-sort float-right"></i></th>'
    + '<th>Passive<i class="fas fa-sort float-right"></i></th>'
    + '<th>Switch<i class="fas fa-sort float-right"></i></th>'
    + '<th>Deck<i class="fas fa-sort float-right"></i></th>'
    + '<th id="thHp" data-sort="number">HP<i class="fas fa-sort float-right"></i></th>'
    + '<th id="thStr" data-sort="number">STR<i class="fas fa-sort float-right"></i></th>'
    + '<th data-sort="number">AGI<i class="fas fa-sort float-right"></i></th>'
    + '<th data-sort="number">INT<i class="fas fa-sort float-right"></i></th>'
    + '</tr>'
  var tbody = document.createElement('tbody')
  tbody.id = 'jobsBody'

//  tbody.style.backgroundImage = 'url("' + sword + '")'
//  tbody.style.backgroundSize = 'contain'
//  tbody.style.backgroundRepeat = 'no-repeat'
//  tbody.style.backgroundPosition = 'center'
jobsTable.append(thead, tbody)
export { jobsTable }
