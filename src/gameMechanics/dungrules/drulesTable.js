//import sword from '../img/other/blades.png'

var drulesTable = document.createElement('table');
drulesTable.id = 'drulesTable';
drulesTable.classList.add('section', 'tablesorter', 'myTable', 'w-100', 'shadow')
var thead = document.createElement('thead')
thead.classList.add('thead', 'shadow-lg', 'w-100')
thead.id = 'thead'
thead.innerHTML = '<tr id="jobsThead">'
    + '<th  data-sort="number">#</th>'
    + '<th id="Icon">Icon</th>'
    + '<th id="Name">Name</th>'
    + '<th class="pic2" style="width:42.4px"></th>'
    + '<th id="Description" data-sort="number">Description</th>'
    + '<th id="Special"data-sort="number">Special</th>'
    + '<th class="pic2"></th>' + '<th></th>' 
    + '</tr>'
  var tbody = document.createElement('tbody')
  tbody.id = 'jobsBody'

drulesTable.append(thead, tbody)
export { drulesTable }
