import { abilsfilter } from './abilsfilter.js'
import { abilsTable } from './abilsTable.js'

let abilsmain = document.createElement('section')
abilsmain.id = 'abilsmain'

abilsfilter.style.color = 'white'
abilsfilter.append(abilsTable)
abilsmain.classList.add('section')
//jobsTable.classList.add('w-100')
abilsmain.append(abilsfilter)

export {abilsmain}
