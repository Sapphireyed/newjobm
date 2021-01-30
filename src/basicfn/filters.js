// FILTERS
export function singularFilter(arr, elem, filter, pageList, tableRows, ind, i, skill) {
  arr.map(a => {  //switch typa & traits
    pageList[ind-1][i] = pageList[ind-1][i] == '' ? 'n/a' : pageList[ind-1][i]
    if (elem == 'Protect' || elem == 'Debuff Protection' || elem == 'Other') {
      if (a[skill] == 'Protect' || a[skill+3] == 'Protect' || a[skill+6] == 'Protect' || a[skill+9] == 'Protect') { //skill == protect
        let protectInd = a.map((el, i) => el.includes('Protect') ? i : '').filter(num => num == skill || num == skill + 3 || num == skill + 6 || num == skill + 9)
      //  protectInd = protectInd[0]
        if (elem == 'Debuff Protection') { //
          if (a[2] == pageList[ind-1][i]) {
            // effect includes any of elements or debuffs
            if (protectInd.some(el => a[el+1].includes("<span class='thunder'>")
                                                || a[el+1].includes("<span class='light'>")
                                                || a[el+1].includes("<span class='dark'>")
                                                || a[el+1].includes("<span class='wind'>")
                                                || a[el+1].includes("<span class='fire'>")
                                                || a[el+1].includes("<span class='earth'>")
                                                || a[el+1].includes("<span class='bleed'>")
                                                || a[el+1].includes("<span class='restrain'>")
                                                || a[el+1].includes("<span class='venom'>")
                                                || a[el+1].includes("<span class='insane'>")
                                                || a[el+1].includes("<span class='injury'>")
                                                || a[el+1].includes("Debuff")
                                                || a[el+1].includes("Element"))) {
              tableRows[ind].classList.add(filter)
            }
          }
        } else if (elem == 'Protect') {
          if (a[2] == pageList[ind-1][i]) {
            // if skill == protect and effect == attr or null
            if (protectInd.some(el => a[el+1].includes("<span class='maxhp'>") || a[el+1].includes("<span class='strength'>")
                || a[el+1].includes("<span class='agility'>") || a[el+1].includes("<span class='intelligence'>")
                || a[el+1].includes("Null"))) {
              tableRows[ind].classList.add(filter)
            }
          }
        }
        if (elem == 'Other') {
          if (a[2] == pageList[ind-1][i]) {
            console.log(protectInd.filter(el => a[el+1].includes("<span class='maxhp'>") || a[el+1].includes("<span class='strength'>")
                || a[el+1].includes("<span class='agility'>") || a[el+1].includes("<span class='intelligence'>")
                || a[el+1].includes("Null") || a[el+1].includes("<span class='thunder'>")
                                                  || a[el+1].includes("<span class='light'>")
                                                  || a[el+1].includes("<span class='dark'>")
                                                  || a[el+1].includes("<span class='wind'>")
                                                  || a[el+1].includes("<span class='fire'>")
                                                  || a[el+1].includes("<span class='earth'>")
                                                  || a[el+1].includes("<span class='bleed'>")
                                                  || a[el+1].includes("<span class='restrain'>")
                                                  || a[el+1].includes("<span class='venom'>")
                                                  || a[el+1].includes("<span class='insane'>")
                                                  || a[el+1].includes("<span class='injury'>")
                                                  || a[el+1].includes("Debuff")
                                                  || a[el+1].includes("Element")))
            // if skill == protect and effect == attr or null
            if (protectInd.filter(el => a[el+1].includes("<span class='maxhp'>") || a[el+1].includes("<span class='strength'>")
                || a[el+1].includes("<span class='agility'>") || a[el+1].includes("<span class='intelligence'>")
                || a[el+1].includes("Null") || a[el+1].includes("<span class='thunder'>")
                                                  || a[el+1].includes("<span class='light'>")
                                                  || a[el+1].includes("<span class='dark'>")
                                                  || a[el+1].includes("<span class='wind'>")
                                                  || a[el+1].includes("<span class='fire'>")
                                                  || a[el+1].includes("<span class='earth'>")
                                                  || a[el+1].includes("<span class='bleed'>")
                                                  || a[el+1].includes("<span class='restrain'>")
                                                  || a[el+1].includes("<span class='venom'>")
                                                  || a[el+1].includes("<span class='insane'>")
                                                  || a[el+1].includes("<span class='injury'>")
                                                  || a[el+1].includes("Debuff")
                                                  || a[el+1].includes("Element")).length == 0) {

              tableRows[ind].classList.add(filter)
            }
          }
        }
      }
      if (elem == 'Other') {
        if (a[2] == pageList[ind-1][i] && (a[skill+1] == 'Protect' || a[skill+4] == 'Protect' || a[skill+7] == 'Protect' || a[skill+10] == 'Protect')) {
            tableRows[ind].classList.add(filter)
        }
      }
      // for apply search in column r s and t only
    } else if (filter == 'apply') {
      // if within <span
      if (a[2] == pageList[ind-1][i] && [a[17], a[18], a[19]].some(el => el == undefined ? '' : el.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>"))) {
        tableRows[ind].classList.add(filter)
      }
      //if no span tag
      if (a[2] == pageList[ind-1][i] && [a[17], a[18], a[19]].some(el => el == undefined ? '' : el.includes(elem)) && elem !== 'Protect' && elem !== '1' && elem !== '2' && elem !== '3' && elem !== 4 && elem !== '5') {
        tableRows[ind].classList.add(filter)
      }
    } else { // all other filters
      // if within <span
      if (a[2] == pageList[ind-1][i] &&  a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>")) {
        tableRows[ind].classList.add(filter)
      }
      //if no span tag
      if (a[2] == pageList[ind-1][i] && a.includes(elem) && elem !== 'Protect' && elem !== '1' && elem !== '2' && elem !== '3' && elem !== 4 && elem !== '5') {
        tableRows[ind].classList.add(filter)
      }
    }
    pageList[ind-1][i] = pageList[ind-1][i] == 'n/a' ? '' : pageList[ind-1][i]
  })
}
