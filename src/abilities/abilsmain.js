import { abilsfilter } from './abilsfilter.js'
import { abilsTable } from './abilsTable.js'

let abilsmain = document.createElement('section')
abilsmain.id = 'abilsmain'

abilsfilter.style.color = 'white'
abilsfilter.append(abilsTable)
abilsmain.classList.add('section')
let dialogBox = document.createElement('div')
dialogBox.id = 'dialog'
dialogBox.classList.add('rounded')
dialogBox.title = 'There\'s no results,<br> Only doom, doom doom...'
dialogBox.innerHTML = 'There\'s no results,<br> Only doom, doom doom...'
let close = document.createElement('button')
close.id = 'closedialog'
close.classNam = 'rounded'
close.innerHTML = 'X'
dialogBox.appendChild(close)
abilsmain.append(abilsfilter, dialogBox)

export {abilsmain}
