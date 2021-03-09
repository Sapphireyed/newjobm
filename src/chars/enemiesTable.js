
var enemiesTable = document.createElement('table');
enemiesTable.id = 'enemiesTable';
enemiesTable.classList.add('section', 'tablesorter', 'myTable', 'w-100', 'shadow')
var thead = document.createElement('thead')
//thead.style.backgroundImage = 'url("' + theadimg + '")'
//thead.style.backgroundSize = 'cover'
thead.classList.add('thead', 'shadow-lg', 'w-100')
thead.id = 'enthead'
thead.innerHTML =  '<tr id="abilsThead">'
    + '<th data-sort="number">#<i class="fas fa-sort float-right"></i></th>'
    + '<th>Icon<i class="fas fa-sort float-right"></i></th>'
    + '<th>Name<i class="fas fa-sort float-right"></i></th>'
    + '<th>Difficulty<i class="fas fa-sort float-right"></i></th>'
    + '<th>Passives<i class="fas fa-sort float-right"></i></th>'
    + '<th>Abilities<i class="fas fa-sort float-right"></i></th>'
    + '<th style="line-height: 80%">Threshold<br>'
        +'<span style="font-size:12px; font-weight:normal;">'
          + '(<span style="color: forestgreen">Act first</span> | <span style="color:#FFDE00"><50%</span> | <span style="color:red"><30%</span>)'
        +'</span>'
      +'</th>'
  //  + '<th>Stack Increase at<i class="fas fa-sort float-right"></i></th>'
    + '<th>Special<i class="fas fa-sort float-right"></i></th>'
    + '<th>Race<i class="fas fa-sort float-right"></i></th>'
    + '<th>HP<i class="fas fa-sort float-right"></i></th>'
    + '<th>STR<i class="fas fa-sort float-right"></i></th>'
    + '<th>AGI<i class="fas fa-sort float-right"></i></th>'
    + '<th>INT<i class="fas fa-sort float-right"></i></th>'
    + '</tr>'
  var applyBody = document.createElement('tbody')
  applyBody.id = 'applyBody'
//  tbody.style.backgroundImage = 'url("' + sword + '")'
//  tbody.style.backgroundSize = 'contain'
//  tbody.style.backgroundRepeat = 'no-repeat'
//  tbody.style.backgroundPosition = 'center'
enemiesTable.append(thead, applyBody)
export { enemiesTable }
