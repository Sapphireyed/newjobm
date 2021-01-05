
var jobsTable = document.createElement('table');
jobsTable.id = 'jobsTable';
jobsTable.classList.add('tablesorter', 'myTable', 'w-100', 'shadow')
var thead = document.createElement('thead')
thead.classList.add('thead', 'shadow-lg', 'w-100')
thead.id = 'thead'
thead.innerHTML = '<tr>'
    + '<th>Index<i class="fas-sort float-right"></i></th>'
    + '<th>Icon<i class="fas fa-sort float-right"></i></th>'
    + '<th>Name<i class="fas fa-sort float-right"></i></th>'
    + '<th>Rarity<i class="fas fa-sort float-right"></i></th>'
    + '<th>Passive<i class="fas fa-sort float-right"></i></th>'
    + '<th>Switch<i class="fas fa-sort float-right"></i></th>'
    + '<th>Deck<i class="fas fa-sort float-right"></i></th>'
    + '<th>Lv 10 HP<i class="fas fa-sort float-right"></i></th>'
    + '<th>Lv 10 STR<i class="fas fa-sort float-right"></i></th>'
    + '<th>Lv 10 AGI<i class="fas fa-sort float-right"></i></th>'
    + '<th>Lv 10 INT<i class="fas fa-sort float-right"></i></th>'
    + '</tr>'
  var tbody = document.createElement('tbody')
  tbody.id = 'jobsBody'
jobsTable.append(thead, tbody)
export { jobsTable }
