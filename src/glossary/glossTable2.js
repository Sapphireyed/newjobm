
var applyTable = document.createElement('table');
applyTable.id = 'applyTable';
applyTable.classList.add('section', 'tablesorter', 'myTable', 'w-100', 'shadow')
var thead = document.createElement('thead')
//thead.style.backgroundImage = 'url("' + theadimg + '")'
//thead.style.backgroundSize = 'cover'
thead.classList.add('thead', 'shadow-lg', 'w-100')
thead.id = 'thead'
thead.innerHTML =  '<tr id="abilsThead">'
    + '<th data-sort="number">#<i class="fas fa-sort float-right"></i></th>'
  //  + '<th>Icon<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Name">Name<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Description">Description<i class="fas fa-sort float-right"></i></th>'
    + '<th id="MaxStack">Max Stack<i class="fas fa-sort float-right"></i></th>'
    + '<th id="UpgrMaxStack">Upgr Max Stack<i class="fas fa-sort float-right"></i></th>'
   // + '<th id="StackDecreaseAt">Stack Decrease at<i class="fas fa-sort float-right"></i></th>'
   // + '<th id="StackIncreaseAt">Stack Increase at<i class="fas fa-sort float-right"></i></th>'
  //  + '<th id="RemovedAt">Removed at<i class="fas fa-sort float-right"></i></th>'
    + '</tr>'
  var applyBody = document.createElement('tbody')
  applyBody.id = 'applyBody'
applyTable.append(thead, applyBody)
export { applyTable }
