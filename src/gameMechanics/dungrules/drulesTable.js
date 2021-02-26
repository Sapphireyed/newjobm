//import sword from '../img/other/blades.png'

var drulesTable = document.createElement('table');
drulesTable.id = 'drulesTable';
drulesTable.classList.add('section', 'tablesorter', 'myTable', 'w-100', 'shadow')
var thead = document.createElement('thead')
//thead.style.backgroundImage = 'url("' + theadimg + '")'
//thead.style.backgroundSize = 'cover'
thead.classList.add('thead', 'shadow-lg', 'w-100')
thead.id = 'thead'
thead.innerHTML = '<tr id="jobsThead">'
    + '<th data-sort="number">#</th>'
    + '<th>Icon</th>'
    + '<th>Name</th>'
    //+ '<th>Conditions</th>'
  //  + '<th>Start</th>'
  //  + '<th>Floors</th>'
    + '<th id="thHp" style="width:42.4px"></th>'
    + '<th data-sort="number">Description</th>'
    + '<th data-sort="number">Special</th>'
    + '</tr>'
  var tbody = document.createElement('tbody')
  tbody.id = 'jobsBody'
//  tbody.style.backgroundImage = 'url("' + sword + '")'
//  tbody.style.backgroundSize = 'contain'
//  tbody.style.backgroundRepeat = 'no-repeat'
//  tbody.style.backgroundPosition = 'center'
drulesTable.append(thead, tbody)
export { drulesTable }
