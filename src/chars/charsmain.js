import { charsfilter } from './charsfilter.js'
import { heroesTable } from './heroesTable.js'
import { enemiesTable } from './enemiesTable.js'

let glossarymain = document.createElement('section')
glossarymain.id = 'glossarymain'

charsfilter.style.color = 'white'
charsfilter.append(heroesTable, enemiesTable)
glossarymain.classList.add('section')
heroesTable.classList.add('w-100')
let dialogBox = document.createElement('div')
dialogBox.id = 'dialog'
dialogBox.classList.add('rounded')
dialogBox.title = 'No results'
dialogBox.innerHTML = 'No matching results'
let close = document.createElement('button')
close.id = 'closedialog'
close.classNam = 'rounded'
close.innerHTML = 'X'
dialogBox.appendChild(close)
glossarymain.append(charsfilter, dialogBox)

export {glossarymain}
