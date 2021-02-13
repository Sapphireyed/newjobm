
export function filterAb(arr, elem, filter, tableRows,pageList,filters, ind, i,skill) {

  let skills = [skill, skill+3, skill+6, skill+9, /*skill+12, skill+13, skill+14*/]

  let effects = [skill+1, skill + 4, skill+7, skill+10]
  let chosenAttr = document.getElementById('attrSel').value
  let typeVal = document.getElementById('type').value
  // type

  let filtered = arr.filter(a => a[2] == pageList[ind-1][i])
  filtered.map(a => {

    a = a.map(ab => ab == '' ? 'n/a' : ab.replace(/[0-9]|icon|class|img|.png|:/g, ''))
    const elemRegex = /fire|water|earth|thunder|wind|light|dark|bleed|injury|venom|restrain|insane|Element|Debuff|Null/g;
    const attrRegex = /MaxHp|Strength|Agility|Intelligence|Protect/gi
  if (filter == 'type') {

    switch (elem) {
      case 'Other':
        skills.some((unit) => a[unit] == 'Null' && a[unit+1] == 'Null') ? tableRows[ind].classList.add(filter) : ''
        skills.some((unit) => a[unit] == 'InstantBoost' && a[unit+1] == 'Direct') ? tableRows[ind].classList.add(filter) : ''
        skills.some((unit) => (a[unit].includes('Protect') && (a[unit+1] == 'Direct' || a[unit+1] == 'Guard' || a[unit+1] == 'Draw'))) ? tableRows[ind].classList.add(filter) : ''
        break;
      case 'Remove Debuff':
        skills.some((unit) => a[unit].includes('Protect') && a[unit+1].match(elemRegex)) ? tableRows[ind].classList.add(filter) : ''
        break;
      case 'Protect':
        skills.some((unit) => a[unit].includes('Protect') && (chosenAttr == 'All' ? a[unit+1].match(attrRegex) : a[unit+1].includes(chosenAttr))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
        break;
      case 'Negative':
        skills.some((unit) => a[unit] == 'Curse' || a[unit] == 'Sacrifice') ? tableRows[ind].classList.add(filter) : ''
        break;
      default:
        skills.some((unit) => a[unit] == elem && (chosenAttr == 'All' ? a[unit+1].match(attrRegex) : a[unit+1].includes(chosenAttr))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
    }
    } else if (filter == 'attrSel') {
      if (typeVal == 'All') {
        skills.some(s=> {
          a[s] = a[s] == undefined ? 'n/a' : a[s]
          a[s].includes(elem) ? tableRows[ind].classList.add(filter) : ''
        })
        effects.some(s=> {
          a[s] = a[s] == undefined ? 'n/a' : a[s]
          a[s].includes(elem) ? tableRows[ind].classList.add(filter) : ''
        })
      } else {
        if (typeVal == 'Protect') {
          skills.some(s => a[s].includes('Protect') && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter,'type') : ''
        } else {
          if (elem == 'All') {
            //  a[s] = a[s] == undefined ? 'n/a' : a[s]
               tableRows[ind].classList.add(filter)
          } else {
            skills.some(s=> {
              (a[s] == typeVal && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter, 'type') : ''
          //    a[s].includes(elem) ? tableRows[ind].classList.add(filter) : ''
            })
          }

        }
        }
    } else if (filter == 'apply') {
      if ([a[17], a[18], a[19]].some(el => el = el.includes(elem))) {
        tableRows[ind].classList.add(filter)
      }
    } else if (filter == 'whenSel') {

    } else  {
      filter == 'whenSel' ? tableRows[ind].classList.add(filter) : ''
      skills.some(s=> {
        a[s] = a[s] == undefined ? 'n/a' : a[s]
        a[s].includes(elem) ? tableRows[ind].classList.add(filter) : ''
      })
      effects.some(s=> {
        a[s] = a[s] == undefined ? 'n/a' : a[s]
        a[s].includes(elem) ? tableRows[ind].classList.add(filter) : ''
      })
    }
  })

  }

///


export function filterPass(arr, elem, filter, tableRows,pageList,filters, ind, i,skill) {

    let skills = [skill, skill+3, skill+6, skill+9]
    let effects = [skill+1, skill + 4, skill+7, skill+10]
    let chosenAttr = document.getElementById('attrSel').value
    let passiveVal = document.getElementById('whenSel').value
    // type
    let filtered = arr.filter(a => a[2] == pageList[ind-1][i])
//    chosenAttr = chosenAttr == 'All' ? undefined : chosenAttr
    filtered.map(a => {
      // fill passives rows with empty cells if the length is < 19 (apply columns in sheet)
      while (a.length < 19) {
        a.push('')
      }
      a = a.map(ab => ab.replace(/[0-9]|icon|class|img|.png|:/g, ''))
      a = a.map(cell => cell == '' ? 'n/a' : cell)
      const elemRegex = /fire|water|earth|thunder|wind|light|dark|bleed|injury|venom|restrain|insane|Element|Debuff/g;
      const attrRegex = /MaxHp|Strength|Agility|Intelligence|Protect/gi
    if (filter == 'whenSel') {
      switch (elem) {
        case 'Reflect':
          skills.some((unit) => a[unit] == 'Reflect' && (chosenAttr == 'All' ? (a[unit+1].match(attrRegex) || a[unit+1].match(elemRegex)) : a[unit+1].includes(chosenAttr))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
          break;
        case 'Immune':
          skills.some((unit) => a[unit].includes('Protect') && a[unit+1].match(elemRegex)) ? tableRows[ind].classList.add(filter) : ''
          break;
        case 'After Action':
          skills.some((unit) => a[unit].includes('Action') && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
          break;
        case 'Combat Start':
          skills.some((unit) => a[unit] == 'Curse' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
          skills.some((unit) => a[unit] == 'InstantBoost' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
          skills.some((unit) => a[unit].includes('Protect') && (chosenAttr == 'All' ? a[unit+1].match(attrRegex) : (a[unit+1].includes(chosenAttr) || a[unit+1] == 'Guard'))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
          break;
        case 'Dmg mitigate':
          skills.some((unit) => a[unit] == 'Buff' && a[unit+1].includes('Protect')) ? tableRows[ind].classList.add(filter) : ''
          break;
        case 'HP Threshold':
          skills.some((unit) => a[unit] == 'Sacrifice') ? tableRows[ind].classList.add(filter) : ''
          skills.some(unit => a[unit].includes('Protect') && (a[unit+1] == 'Direct' /*|| a[unit+1] == 'Guard'*/)) ? tableRows[ind].classList.add(filter) : ''
          break;
        case 'Heal':
          skills.some((unit) => a[unit].includes('Heal') && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
      //    skills.some((unit) => a[unit] == 'Heal') ? tableRows[ind].classList.add(filter, 'attrSel') : ''
          break;
        case 'Master':
          skills.some((unit) => a[unit] == 'Upgrade' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
          break;
        case 'Stat Boost':
          skills.some((unit) => a[unit] == 'Buff' && (a[unit+1].includes('Protect')==false) && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
          skills.some((unit) => a[unit] == 'Debuff' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
          break;
        case 'Turn End':
          skills.some((unit) => a[unit].includes('Turn') && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? tableRows[ind].classList.add(filter, 'attrSel') : ''
          break;
        default:
      }
      } else if (filter == 'attrSel') {
        switch (passiveVal) {
          case 'Reflect':
            skills.some(s => a[s] == 'Reflect' && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter,'whenSel') : ''
            break;
          case 'After Action':
            skills.some(s => a[s].includes('Action') && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter, 'whenSel') : ''
            break;
          case 'Combat Start':
            skills.some(s => (a[s] == 'Curse' || a[s] == 'InstantBoost' || a[s].includes('Protect')) && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter, 'whenSel') : ''
          //  skills.some(s => a[s] == 'InstantBoost' && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter, 'whenSel') : ''
            break;
          case 'Heal':
            skills.some(s => a[s].includes('Heal') && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter, 'whenSel') : ''
            break;
          case 'Master':
            skills.some(s => a[s] == 'Upgrade' && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter, 'whenSel') : ''
            break;
          case 'Master':
            skills.some(s => a[s] == 'Buff' && (a[s+1].includes('Protect')==false) && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter, 'whenSel') : ''
            skills.some(s => a[s] == 'Debuff' && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter, 'whenSel') : ''
            break;
          case 'Turn End':
            skills.some(s => a[s].includes('Turn') && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter, 'whenSel') : ''
            break;
          default:
            skills.some(s=> {
              a[s] = a[s] == undefined ? 'n/a' : a[s]
              a[s].includes(elem) ? tableRows[ind].classList.add(filter) : ''
            })
            effects.some(s=> {
              a[s] = a[s] == undefined ? 'n/a' : a[s]
              a[s].includes(elem) ? tableRows[ind].classList.add(filter) : ''
            })
        }
      } else if (filter == 'apply') {
        if ([a[16], a[17], a[18]].some(el => el = el.includes(elem))) {
          tableRows[ind].classList.add(filter)
        }
      } else if (filter == 'type') {
        
      } else {
        filter == 'type' ? tableRows[ind].classList.add(filter) : ''
        skills.some(s=> {
          a[s] = a[s] == undefined ? 'n/a' : a[s]
          a[s].includes(elem) ? tableRows[ind].classList.add(filter) : ''
        })
        effects.some(s=> {
          a[s] = a[s] == undefined ? 'n/a' : a[s]
          a[s].includes(elem) ? tableRows[ind].classList.add(filter) : ''
        })
      }

      //apply

 //      if (f.id == 'attrSel' && f.value !== 'All') {
      /*  effects.map(s=> {
          a[s].includes(elem) ? tableRows[ind].classList.add(filter) : ''
        })*/
 //      }
    })




  }
