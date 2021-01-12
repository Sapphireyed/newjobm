export function filter(tableRows, pageList, filter, i, abilitiesAllInfo, passivesAllInfo, filters) {
  var elem = filter.value
  for (var ind = 1; ind < tableRows.length; ind++) {
    tableRows[ind].classList.add('d-none')
    tableRows[ind].classList.remove('4', '3', '2', '1', filter.id)
  if (filter.value == pageList[ind-1][2]) {  // rarity
    tableRows[ind].classList.add(filter.id)
  }

  pageList[ind-1][8] = pageList[ind-1][8] == '' ? 'n/a' : pageList[ind-1][8]  // switch name
  var abilname = pageList[i-1][8]
  abilitiesAllInfo.map(a => {  //switch
    if (a[2] == pageList[ind-1][8] && a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>")) {
      tableRows[ind].classList.add(filter.id)
    }
  })

  pageList[ind-1][7] = pageList[ind-1][7] == '' ? 'n/a' : pageList[ind-1][7]  // passive name
  passivesAllInfo.map(a => {
    if (a[2] == pageList[ind-1][7] && a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>")) {
      tableRows[ind].classList.add(filter.id)
    }
  })

var counter = 1
  for (var index=0; index < filters.length; index++) {
    if (tableRows[ind].classList.contains(filters[index].id) || filters[index].value == 'All') {
      tableRows[ind].classList.add(counter += 1)
    }
  }
console.log(counter)
  if (tableRows[ind].classList.contains('4')) {
    tableRows[ind].classList.remove('d-none')
  } else {
    tableRows[ind].classList.add('d-none')
  }
  }
}
