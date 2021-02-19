import { abilsfilter } from './abilsfilter.js'
import { abilsTable } from './abilsTable.js'
import { dialogBox } from '../nav/thana.js'

let abilsmain = document.createElement('section')
abilsmain.id = 'abilsmain'

abilsfilter.style.color = 'white'
abilsfilter.append(abilsTable)
abilsmain.classList.add('section')

abilsmain.append(abilsfilter, dialogBox)

export {abilsmain}
