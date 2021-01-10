// RARITY FILTER JS
export function rarityFilter(arr, arr2, el) {
  for (var i = 1; i < arr.length; i++) {
  //arr[i].classList.add('d-none')
    if (el.value !== arr2[i-1][2]) {
      arr[i].classList.add('d-none')
    }
    if (el.value == 'Rarity'){
      arr[i].classList.remove('d-none')
    }
  }
}

export function elementFilter(arr, arr2, el, passivesarr, abilarr) {
  var elem = el.value
  for (var i = 1; i < arr.length; i++) {
    arr2[i-1][8] = arr2[i-1][8] == '' ? 'n/a' : arr2[i-1][8]  // switch name
    var abilname = arr2[i-1][8]
    abilarr.map(a => {
      if ((a[2] == arr2[i-1][8] || arr2[i-1][8] == 'n/a') && (a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>") == false)) {
        arr[i].classList.add('d-none')
      }
      if (el.value == 'Element') {
          arr[i].classList.remove('d-none')
      }
    })

    arr2[i-1][7] = arr2[i-1][7] == '' ? 'n/a' : arr2[i-1][7]  // passive name
    passivesarr.map(a => {
      if ((a[2] == arr2[i-1][7] || arr2[i-1][7] == 'n/a') && (a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>") == false)) {
        arr[i].classList.add('d-none')
      }
      if (el.value == 'Element') {
          arr[i].classList.remove('d-none')
      }
    })
  }
}
