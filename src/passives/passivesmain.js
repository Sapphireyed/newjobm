import { passivesfilter } from './passivesfilter.js'
import { passivesTable } from './passivesTable.js'

let passivesmain = document.createElement('section')
passivesmain.id = 'passivesmain'

passivesfilter.style.color = 'white'
passivesfilter.append(passivesTable)
passivesmain.classList.add('section')
passivesTable.classList.add('w-100')
passivesmain.append(passivesfilter)

export {passivesmain}