import { charsfilter } from './charsfilter.js'
import { heroesTable } from './heroesTable.js'
import { enemiesTable } from './enemiesTable.js'
import { dialogBox } from '../nav/thana.js'

let glossarymain = document.createElement('section')
glossarymain.id = 'glossarymain'

charsfilter.style.color = 'white'
charsfilter.append(heroesTable, enemiesTable)
glossarymain.classList.add('section')
heroesTable.classList.add('w-100')
glossarymain.append(charsfilter, dialogBox)

export {glossarymain}
