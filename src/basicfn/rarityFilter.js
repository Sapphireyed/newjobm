// RARITY FILTER JS
export function rarityFilter(arr, arr2, el, elemEl, attrEl) {
  for (var i = 1; i < arr.length; i++) {
    arr[i].classList.remove('rarity')
    if ((arr[i].classList.contains('passive') || arr[i].classList.contains('switch') || elemEl.value == 'Element') && (arr[i].classList.contains('passiveArr') || arr[i].classList.contains('switchArr') || elemEl.value == 'Element')) {
      arr[i].classList.remove('d-none')
    }
    if (el.value == arr2[i-1][2]) {
      arr[i].classList.add('rarity')
    }

    if (arr[i].classList.contains('rarity')) {
    } else {
      arr[i].classList.add('d-none')
    }
    if (el.value == 'Rarity' && (arr[i].classList.contains('passive') || arr[i].classList.contains('switch') || elemEl.value == 'Element') && (arr[i].classList.contains('passiveArr') || arr[i].classList.contains('switchArr') || attrEl.value == 'Attribute')) {
      arr[i].classList.remove('d-none')
    }
  }
}

export function elementFilter(arr, arr2, el, passivesarr, abilarr, rarEl, attrEl) {
  var elem = el.value
  for (var i = 1; i < arr.length; i++) {
    arr[i].classList.remove('passive', 'switch')
    if ((arr[i].classList.contains('rarity') || rarEl.value == 'Rarity') && ((arr[i].classList.contains('passiveAttr') ||  arr[i].classList.contains('switchAttr')))) {
      arr[i].classList.remove('d-none')
    }
    arr2[i-1][8] = arr2[i-1][8] == '' ? 'n/a' : arr2[i-1][8]  // switch name
    var abilname = arr2[i-1][8]

    abilarr.map(a => {
      if (a[2] == arr2[i-1][8] && a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>")) {
        arr[i].classList.add('switch')
      }

    })

    arr2[i-1][7] = arr2[i-1][7] == '' ? 'n/a' : arr2[i-1][7]  // passive name
    passivesarr.map(a => {
      if (a[2] == arr2[i-1][7] && a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>")) {
        arr[i].classList.add('passive')
      }
    })

    if (arr[i].classList.contains('switch') || arr[i].classList.contains('passive')) {
    } else {
      arr[i].classList.add('d-none')
    }

    if (el.value == 'Element' && arr[i].classList.contains('rarity') && (arr[i].classList.contains('passiveAttr') ||  arr[i].classList.contains('switchAttr'))) {
      arr[i].classList.remove('d-none')
    }
  }
}

export function attrsFilter(arr, arr2, el, passivesarr, abilarr) {
  var elem = el.value
  for (var i = 1; i < arr.length; i++) {
    arr[i].classList.remove('passiveAttr', 'switchAttr')
    arr[i].classList.contains('rarity') && (arr[i].classList.contains('passive') ||  arr[i].classList.contains('switch')) ? arr[i].classList.remove('d-none') : ''
    arr2[i-1][8] = arr2[i-1][8] == '' ? 'n/a' : arr2[i-1][8]  // switch name
    var abilname = arr2[i-1][8]
    abilarr.map(a => {
      if (a[2] == arr2[i-1][8] && a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>")) {
        arr[i].classList.add('switchAttr')
      }

    })

    arr2[i-1][7] = arr2[i-1][7] == '' ? 'n/a' : arr2[i-1][7]  // passive name
    passivesarr.map(a => {
      if (a[2] == arr2[i-1][7] && a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>")) {
        arr[i].classList.add('passiveAttr')
      }
    })

    if (arr[i].classList.contains('switchAttr') || arr[i].classList.contains('passiveAttr')) {
    } else {
      arr[i].classList.add('d-none')
    }

    if (el.value == 'Attribute' && arr[i].classList.contains('rarity') && (arr[i].classList.contains('passive') ||  arr[i].classList.contains('switch'))) {
      arr[i].classList.remove('d-none')
    }
  }
}
