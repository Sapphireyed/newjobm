import { jobsfilter } from './drulesfilter.js'
import { drulesTable } from './drulesTable.js'
import theadimg from '../../img/other/thead.png'

let jobsmain = document.createElement('section')
jobsmain.id = 'jobsmain'
jobsfilter.style.backgroundColor = '#4d636f'

jobsfilter.style.color = 'white'
jobsmain.classList.add('section')

jobsmain.append(jobsfilter, drulesTable)

export {jobsmain}
