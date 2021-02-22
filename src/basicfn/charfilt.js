export function abfilt(ch, abilitiesAllInfo, f, elemRegex, attrRegex, chosenAttr, typeVal) {
  let abil1 = ch[13]
  let abil2 = ch[14]
  let abilsboth = abilitiesAllInfo.filter(ab => abil1 == ab[2] || abil2 == ab[2])
  abilsboth.map(a => {
    let skills = [5, 8, 11, 14]
    let effects = [6,9,12, 15]
    if (f.id == 'type') {
      switch (f.value) {
        case 'Other':
        ch = skills.some((unit) => a[unit] == 'Null' && a[unit+1] == 'Null') ? ch.push('type') : a
        ch = skills.some((unit) => a[unit] == 'InstantBoost' && a[unit+1] == 'Direct') ? ch.push('type') : a
        skills.some((unit) => (a[unit] == undefined ? '' : (a[unit].includes('Protect') && (a[unit+1] == 'Direct' || a[unit+1] == 'Guard' || a[unit+1] == 'Draw')))) ? ch.push('type') : ''
        break;
      case 'Remove Debuff':
        skills.some((unit) => a[unit].includes('Protect') && a[unit+1].match(elemRegex)) ? ch.push('type') : ''
        break;
      case 'Protect':
        skills.some((unit) => a[unit].includes('Protect') && (chosenAttr == 'All' ? a[unit+1].match(attrRegex) : a[unit+1].includes(chosenAttr))) ? ch.push('type') : ''
        break;
      case 'Negative':
        skills.some((unit) => a[unit] == 'Curse' || a[unit] == 'Sacrifice') ? ch.push('type') : ''
        break;
      default:
        skills.some((unit) => a[unit] == f.value && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? ch.push('type') : ''
      }
    }
    if (f.id == 'attrSel' && f.value !== 'All') {
        if (typeVal == 'All') {
          skills.some(s=> {
            a[s] == undefined ? '' : a[s].includes(f.value) ? ch.push('attrSel') : ''
          })
          effects.some(s=> {
            a[s] == undefined ? '' : a[s].includes(f.value) ? ch.push('attrSel') : ''
          })
        } else {
          if (typeVal == 'Protect') {
            skills.some(s => a[s] == undefined ? '' : a[s].includes('Protect') && a[s+1].includes(f.value)) ? ch.push('attrSel') : ''
          } else {
              skills.some(s=> {
                (a[s] == typeVal && a[s+1].includes(f.value)) ? ch.push('attrSel') : ''
                a[s].includes(f.value) ? ch.push('attrSel') : ''
              })

          }
          }
      }
      if (f.id == 'apply') {
        if ([a[17], a[18], a[19]].some(el => el = el.includes(f.value))) {
          ch.push('apply')
        }
      }
      if (f.id == 'element') {
        effects.some(s => a[s] == undefined ? '' : a[s].includes(f.value)) ? ch.push('element') : ''
      }
  })

}


  export function passfilt(ch, passivesAllInfo, f, elemRegex, attrRegex, chosenAttr, typeVal) {
    let passive1 = ch[11]
    let passive2 = ch[12]
    let abilsboth = passivesAllInfo.filter(ab => passive1 == ab[2] || passive2 == ab[2])
    abilsboth.map(a => {
      let skills = [4, 7, 10, 13]
      let effects = [5,8,13, 14]
      if (f.id == 'whenSel' && f.value !== 'All') {
        switch (f.value) {
          case 'Reflect':
            skills.some((unit) => a[unit] == 'Reflect' && (chosenAttr == 'All' ? (a[unit+1].match(attrRegex) || a[unit+1].match(elemRegex)) : a[unit+1].includes(chosenAttr))) ? ch.push('whenSel') : ''
            break;
          case 'Immune':
            skills.some((unit) => a[unit].includes('Protect') && a[unit+1].match(elemRegex)) ? ch.push('whenSel') : ''
            break;
          case 'After Action':
            skills.some((unit) => a[unit].includes('Action') && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? ch.push('whenSel') : ''
            break;
          case 'Combat Start':
            skills.some((unit) => a[unit] == 'Curse' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? ch.push('whenSel') : ''
            skills.some((unit) => a[unit] == 'InstantBoost' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? ch.push('whenSel') : ''
            skills.some((unit) => a[unit].includes('Protect') && (chosenAttr == 'All' ? a[unit+1].match(attrRegex) : (a[unit+1].includes(chosenAttr) || a[unit+1] == 'Guard'))) ? ch.push('whenSel') : ''
            break;
          case 'Dmg mitigate':
            skills.some((unit) => a[unit] == 'Buff' && a[unit+1].includes('Protect')) ? ch.push('whenSel') : ''
            break;
          case 'HP Threshold':
            skills.some((unit) => a[unit] == 'Sacrifice') ? ch.push('whenSel') : ''
            skills.some(unit => a[unit].includes('Protect') && (a[unit+1] == 'Direct' /*|| a[unit+1] == 'Guard'*/)) ? ch.push('whenSel') : ''
            break;
          case 'Heal':
            skills.some((unit) => a[unit].includes('Heal') && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? ch.push('whenSel') : ''
        //    skills.some((unit) => a[unit] == 'Heal') ? tableRows[ind].classList.add(filter, 'attrSel') : ''
            break;
          case 'Master':
            skills.some((unit) => a[unit] == 'Upgrade' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? ch.push('whenSel') : ''
            break;
          case 'Stat Boost':
            skills.some((unit) => a[unit] == 'Buff' && (a[unit+1].includes('Protect')==false) && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? ch.push('whenSel') : ''
            skills.some((unit) => a[unit] == 'Debuff' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? ch.push('whenSel') : ''
            break;
          case 'Turn End':
            skills.some((unit) => a[unit].includes('Turn') && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? ch.push('whenSel') : ''
            break;
          default:
        }
      }
      if (f.id == 'attrSel' && f.value !== 'All') {
        switch (typeVal) {
          case 'Reflect':
            skills.some(s => a[s] == 'Reflect' && a[s+1].includes(f.value)) ? ch.push('attrSel') : ''
            break;
          case 'After Action':
            skills.some(s => a[s].includes('Action') && a[s+1].includes(f.value)) ? ch.push('attrSel') : ''
            break;
          case 'Combat Start':
            skills.some(s => (a[s] == 'Curse' || a[s] == 'InstantBoost' || a[s].includes('Protect')) && a[s+1].includes(f.value)) ? ch.push('attrSel') : ''
          //  skills.some(s => a[s] == 'InstantBoost' && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter, 'whenSel') : ''
            break;
          case 'Heal':
            skills.some(s => a[s].includes('Heal') && a[s+1].includes(f.value)) ? ch.push('attrSel') : ''
            break;
          case 'Master':
            skills.some(s => a[s] == 'Upgrade' && a[s+1].includes(f.value)) ? ch.push('attrSel') : ''
            break;
          case 'Master':
            skills.some(s => a[s] == 'Buff' && (a[s+1].includes('Protect')==false) && a[s+1].includes(f.value)) ? ch.push('attrSel') : ''
            skills.some(s => a[s] == 'Debuff' && a[s+1].includes(f.value)) ? ch.push('attrSel') : ''
            break;
          case 'Turn End':
            skills.some(s => a[s].includes('Turn') && a[s+1].includes(f.value)) ? ch.push('attrSel') : ''
            break;
          default:
            skills.some(s=> {
              a[s] == undefined ? '' : a[s].includes(f.value) ? ch.push('attrSel') : ''
            })
            effects.some(s=> {
              a[s] == undefined ? '' : a[s].includes(f.value) ?  ch.push('attrSel') : ''
            })
          }
        }
        if (f.id == 'apply') {
          if ([a[16], a[17], a[18]].some(el => el = el.includes(f.value))) {
            ch.push('apply')
          }
        }
        if (f.id == 'element') {
          effects.some(s => a[s] == undefined ? '' : a[s].includes(f.value)) ? ch.push('element') : ''
        }
    })
}
