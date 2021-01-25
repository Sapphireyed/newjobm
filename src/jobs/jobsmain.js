import { jobsfilter } from './jobsfilter.js'
import { jobsTable } from './jobsTable.js'

let jobsmain = document.createElement('section')
jobsmain.id = 'jobsmain'
jobsfilter.style.backgroundColor = '#4d636f'
jobsfilter.style.color = 'white'
jobsmain.classList.add('section')
//jobsTable.classList.add('w-100')
jobsmain.append(jobsfilter, jobsTable)

export {jobsmain}
