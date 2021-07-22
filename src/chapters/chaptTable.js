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
    + '<th id="Icon">Icon</th>'
    + '<th id="Chapter">Chapter(Series)</th>'
    + '<th id="Enemies" data-sort="number">Enemies</th>'
    + '<th id="MiniBosses" data-sort="number">Mini-bosses</th>'
    + '<th id="Bosses" data-sort="number">Bosses</th>'
    + '<th id="Event" data-sort="number">Event</th>'
    + '</tr>'
  var tbody = document.createElement('tbody')
  tbody.id = 'jobsBody'
jobsTable.append(thead, tbody)
export { jobsTable }
