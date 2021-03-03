import sword from '../img/other/blades.png'

var passivesTable = document.createElement('table');
passivesTable.id = 'passivesTable';
passivesTable.classList.add('section', 'tablesorter', 'myTable', 'w-100', 'shadow')
var thead = document.createElement('thead')
//thead.style.backgroundImage = 'url("' + theadimg + '")'
//thead.style.backgroundSize = 'cover'
thead.classList.add('thead', 'shadow-lg', 'w-100')
thead.id = 'thead'
thead.innerHTML = '<tr id="abilsThead">'
    + '<th data-sort="number">#<i class="fas fa-sort float-right"></i></th>'
  //  + '<th>Icon<i class="fas fa-sort float-right"></i></th>'
    + '<th>Name<i class="fas fa-sort float-right"></i></th>'
    + '<th>Skill Rank<i class="fas fa-sort float-right"></i></th>'
    + '<th>Description<i class="fas fa-sort float-right"></i></th>'
    + '<th>Apply<i class="fas fa-sort float-right"></i></th>'
    + '<th>Job<i class="fas fa-sort float-right"></i></th>'
    + '<th>Hero<i class="fas fa-sort float-right"></i></th>'
    + '</tr>'
  var tbody = document.createElement('tbody')
  tbody.id = 'abilsBody'
  tbody.id = 'abilsBody'
//  tbody.style.backgroundImage = 'url("' + sword + '")'
//  tbody.style.backgroundSize = 'contain'
//  tbody.style.backgroundRepeat = 'no-repeat'
//  tbody.style.backgroundPosition = 'center'
passivesTable.append(thead, tbody)
export { passivesTable }
