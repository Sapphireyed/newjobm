import sword from '../img/other/blades.png'

var abilsTable = document.createElement('table');
abilsTable.id = 'abilsTable';
abilsTable.classList.add('section', 'tablesorter', 'myTable', 'w-100', 'shadow')
var thead = document.createElement('thead')
//thead.style.backgroundImage = 'url("' + theadimg + '")'
//thead.style.backgroundSize = 'cover'
thead.classList.add('thead', 'shadow-lg', 'w-100')
thead.id = 'thead'
thead.innerHTML = '<tr id="abilsThead">'
    + '<th data-sort="number">#<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Icon">Icon<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Name">Name<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Tier">Tier<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Cost">Cost<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Description">Description<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Apply">Apply<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Job">Job(Switch)<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Hero">Hero<i class="fas fa-sort float-right"></i></th>'
    + '</tr>'
  var tbody = document.createElement('tbody')
  tbody.id = 'abilsBody'
  tbody.id = 'abilsBody'
//  tbody.style.backgroundImage = 'url("' + sword + '")'
//  tbody.style.backgroundSize = 'contain'
//  tbody.style.backgroundRepeat = 'no-repeat'
//  tbody.style.backgroundPosition = 'center'
abilsTable.append(thead, tbody)
export { abilsTable }
