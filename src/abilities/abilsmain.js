import { abilsfilter } from './abilsfilter.js'
import { abilsTable } from './abilsTable.js'

let abilsmain = document.createElement('section')
abilsmain.id = 'abilsmain'
abilsfilter.style.backgroundColor = '#4d636f'

abilsfilter.style.color = 'white'
abilsmain.classList.add('section')
//jobsTable.classList.add('w-100')
abilsmain.append(abilsfilter, abilsTable)

export {abilsmain}
