import { jobsfilter } from './matsfilter.js'
import { jobsTable } from './matsTable.js'
import theadimg from '../img/other/thead.png'

let jobsmain = document.createElement('section')
jobsmain.id = 'jobsmain'
jobsfilter.style.backgroundColor = '#4d636f'

jobsfilter.style.color = 'white'
jobsmain.classList.add('section')

jobsmain.append(jobsfilter, jobsTable)
//$( "#pages" ).clone(true, true).appendTo( "#tfoot" );
export {jobsmain}
