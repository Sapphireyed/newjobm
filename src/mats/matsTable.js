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
    + '<th id="Name">Name</th>'
    + '<th id="Rarity" data-sort="number">Rarity</th>'
    + '<th id="Craft"style="line-height: 80%" data-sort="number">Craft<br><span style="font-size:12px">(from->to)</span></th>'
    + '<th id="Acquire" data-sort="number">Acquire</th>'
    + '</tr>'
  var tbody = document.createElement('tbody')
  tbody.id = 'jobsBody'
//  tbody.style.backgroundImage = 'url("' + sword + '")'
//  tbody.style.backgroundSize = 'contain'
//  tbody.style.backgroundRepeat = 'no-repeat'
//  tbody.style.backgroundPosition = 'center'
jobsTable.append(thead, tbody)
export { jobsTable }
