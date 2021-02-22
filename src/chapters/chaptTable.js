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
    + '<th data-sort="number">#</th>'
    + '<th>Icon</th>'
    + '<th>Chapter</th>'
    + '<th>Conditions</th>'
    + '<th>Start</th>'
    + '<th>Floors</th>'
    + '<th id="thHp" data-sort="number">Enemies</th>'
    /*+ '<th id="thStr" data-sort="number">Mini-bosses</th>'
    + '<th data-sort="number">Bosses</th>'*/
    + '<th data-sort="number">Event</th>'
    + '</tr>'
  var tbody = document.createElement('tbody')
  tbody.id = 'jobsBody'
//  tbody.style.backgroundImage = 'url("' + sword + '")'
//  tbody.style.backgroundSize = 'contain'
//  tbody.style.backgroundRepeat = 'no-repeat'
//  tbody.style.backgroundPosition = 'center'
jobsTable.append(thead, tbody)
export { jobsTable }
