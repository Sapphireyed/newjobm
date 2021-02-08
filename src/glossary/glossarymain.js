import { glossfilter } from './glossfilter.js'
import { glossTable } from './glossTable.js'
import { applyTable } from './glossTable2.js'

let glossarymain = document.createElement('section')
glossarymain.id = 'glossarymain'

glossfilter.style.color = 'white'
glossfilter.append(glossTable, applyTable)
glossarymain.classList.add('section')
glossTable.classList.add('w-100')
glossarymain.append(glossfilter)

export {glossarymain}
