// FILTERS
export function filterFn(i, elem, filter, talerowsarr, pagelistarr, abilitiesallinfoarr, passivesallinfoarr, filtersarr) {
console.log(talerowsarr)

  for (var ind = 1; ind < talerowsarr.length; ind++) {
    //hide all rows. Particular rowswill be isplayed as per filtersarrarrarr
    talerowsarr[ind].classList.add('d-none')
    //remove all classes added during preious filter run.
    talerowsarr[ind].classList.remove('6', '5', '4', '3', '2', '1', filter.id)

  if (filter.value == pagelistarr[ind-1][2]) {  // rarity
    talerowsarr[ind].classList.add(filter.id)
  }

  pagelistarr[ind-1][8] = pagelistarr[ind-1][8] == '' ? 'n/a' : pagelistarr[ind-1][8]  // switch name
  var abilname = pagelistarr[i-1][8]
  // loop through abil all info to find matches
  abilitiesallinfoarr.map(a => {  //switch typa & traits
    if (elem == 'Protect' || elem == 'Debuff Protection' || elem == 'Other') {
      if (a[5] == 'Protect' || a[8] == 'Protect' || a[11] == 'Protect' || a[14] == 'Protect') { //skill == protect
        let protectInd = a.indexOf('Protect')
        if (elem == 'Debuff Protection') { //
          if (a[2] == pagelistarr[ind-1][8]) {
            // effect includes any of elements or debuffs
            if (a[protectInd+1].includes("<span class='thunder'>")
                                                || a[protectInd+1].includes("<span class='light'>")
                                                || a[protectInd+1].includes("<span class='dark'>")
                                                || a[protectInd+1].includes("<span class='wind'>")
                                                || a[protectInd+1].includes("<span class='fire'>")
                                                || a[protectInd+1].includes("<span class='earth'>")
                                                || a[protectInd+1].includes("<span class='bleed'>")
                                                || a[protectInd+1].includes("<span class='restrain'>")
                                                || a[protectInd+1].includes("<span class='venom'>")
                                                || a[protectInd+1].includes("<span class='insane'>")
                                                || a[protectInd+1].includes("<span class='injury'>")
                                                || a[protectInd+1].includes("Debuff")
                                                || a[protectInd+1].includes("Element")) {
              talerowsarr[ind].classList.add(filter.id)
            }
          }
        } else if (elem == 'Protect') {
          if (a[2] == pagelistarr[ind-1][8]) {
            // if skill == protect and effect == attr or null
            if (a[protectInd+1].includes("<span class='maxhp'>") || a[protectInd+1].includes("<span class='strength'>")
                || a[protectInd+1].includes("<span class='agility'>") || a[protectInd+1].includes("<span class='intelligence'>")
                || a[protectInd+1].includes("Null")) {
              talerowsarr[ind].classList.add(filter.id)
            }
          }
        }
      }
      // for apply search in column r s and t only
    } else if (filter == 'apply') {
      // if within <span
      if (a[2] == pagelistarr[ind-1][8] && [a[17], a[18], a[19]].some(el => el == undefined ? '' : el.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>"))) {
        talerowsarr[ind].classList.add(filter.id)
      }
      //if no span tag
      if (a[2] == pagelistarr[ind-1][8] && [a[17], a[18], a[19]].some(el => el == undefined ? '' : el.includes(elem)) && elem !== 'Protect' && elem !== '1' && elem !== '2' && elem !== '3' && elem !== 4 && elem !== '5') {
        talerowsarr[ind].classList.add(filter.id)
      }
    } else { // all other filtersarrarrarr
      // if within <span
      if (a[2] == pagelistarr[ind-1][8] &&  a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>")) {
        talerowsarr[ind].classList.add(filter.id)
      }
      //if no span tag
      if (a[2] == pagelistarr[ind-1][8] && a.includes(elem) && elem !== 'Protect' && elem !== '1' && elem !== '2' && elem !== '3' && elem !== 4 && elem !== '5') {
        talerowsarr[ind].classList.add(filter.id)
      }
    }
  })

  pagelistarr[ind-1][7] = pagelistarr[ind-1][7] == '' ? 'n/a' : pagelistarr[ind-1][7]  // passive name

  passivesallinfoarr.map(a => {  //switch typa & traits
    if (elem == 'Protect' || elem == 'Debuff Protection' || elem == 'Other') {
      if (a[4] == 'Protect' || a[7] == 'Protect' || a[10] == 'Protect' || a[13] == 'Protect') { //skill == protect
        let protectInd = a.indexOf('Protect')
        if (elem == 'Debuff Protection') { //
          if (a[2] == pagelistarr[ind-1][7]) {
            // effect includes any of elements or debuffs
            if (a[protectInd+1].includes("<span class='thunder'>")
                                                || a[protectInd+1].includes("<span class='light'>")
                                                || a[protectInd+1].includes("<span class='dark'>")
                                                || a[protectInd+1].includes("<span class='wind'>")
                                                || a[protectInd+1].includes("<span class='fire'>")
                                                || a[protectInd+1].includes("<span class='earth'>")
                                                || a[protectInd+1].includes("<span class='bleed'>")
                                                || a[protectInd+1].includes("<span class='restrain'>")
                                                || a[protectInd+1].includes("<span class='venom'>")
                                                || a[protectInd+1].includes("<span class='insane'>")
                                                || a[protectInd+1].includes("<span class='injury'>")
                                                || a[protectInd+1].includes("Debuff")
                                                || a[protectInd+1].includes("Element")) {
              talerowsarr[ind].classList.add(filter.id)
            }
          }

        } else if (elem == 'Protect') {
          if (a[2] == pagelistarr[ind-1][7]) {
            // if skill == protect and effect == attr or null
            if (a[protectInd+1].includes("<span class='maxhp'>") || a[protectInd+1].includes("<span class='strength'>")
                || a[protectInd+1].includes("<span class='agility'>") || a[protectInd+1].includes("<span class='intelligence'>")
                || a[protectInd+1].includes("Null")) {
              talerowsarr[ind].classList.add(filter.id)
            }
          }
        }
      }
      //aply filter to look only in 3 last columns
    } else if (filter == 'apply') { //within <span>
      elem == 'Turn Charge' ? elem = 'Charge' : ''
      if (a[2] == pagelistarr[ind-1][7] && [a[17], a[18], a[19]].some(el => el == undefined ? '' : el.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>"))) {
        talerowsarr[ind].classList.add(filter.id)
      }
      //if no span tag
      if (a[2] == pagelistarr[ind-1][7] && [a[17], a[18], a[19]].some(el => el == undefined ? '' : el.includes(elem)) && elem !== 'Protect' && elem !== '1' && elem !== '2' && elem !== '3' && elem !== 4 && elem !== '5')
       {
        talerowsarr[ind].classList.add(filter.id)
      }
    } else { // all other filtersarrarrarr
      // if within <span
      if (a[2] == pagelistarr[ind-1][7] && a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>")) {
        talerowsarr[ind].classList.add(filter.id)
      }
      //if no span tag
      if (a[2] == pagelistarr[ind-1][7] && a.includes(elem) && elem !== 'Protect' && elem !== '1' && elem !== '2' && elem !== '3' && elem !== 4 && elem !== '5') {
        talerowsarr[ind].classList.add(filter.id)
      }
    }
  })
  // counter adds numeric classesfor each much
var counter = 1
  for (var index=0; index < filtersarr.length; index++) {
    if (talerowsarr[ind].classList.contains(filtersarr[index].id) || filtersarr[index].value == 'All') {
      talerowsarr[ind].classList.add(counter += 1)
    }
  }
  if (talerowsarr[ind].classList.contains('6')) {
    talerowsarr[ind].classList.remove('d-none')
  } else {
    talerowsarr[ind].classList.add('d-none')
  }
  }
}
