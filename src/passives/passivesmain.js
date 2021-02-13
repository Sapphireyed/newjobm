import { passivesfilter } from './passivesfilter.js'
import { passivesTable } from './passivesTable.js'

let passivesmain = document.createElement('section')
passivesmain.id = 'passivesmain'

passivesfilter.style.color = 'white'
passivesfilter.append(passivesTable)
passivesmain.classList.add('section')
passivesTable.classList.add('w-100')

let dialogBox = document.createElement('div')
dialogBox.id = 'dialog'
dialogBox.classList.add('rounded')
dialogBox.title = 'No results'
dialogBox.innerHTML = 'There\'s no results,<br> Only doom, doom doom...'
let close = document.createElement('button')
close.id = 'closedialog'
close.classNam = 'rounded'
close.innerHTML = 'X'
dialogBox.appendChild(close)
passivesmain.append(passivesfilter,dialogBox)

export {passivesmain}
