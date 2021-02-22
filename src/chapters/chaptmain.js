import { jobsfilter } from './chaptersfilter.js'
import { jobsTable } from './chaptTable.js'
import theadimg from '../img/other/thead.png'

let jobsmain = document.createElement('section')
jobsmain.id = 'jobsmain'
jobsfilter.style.backgroundColor = '#4d636f'

jobsfilter.style.color = 'white'
jobsmain.classList.add('section')
//jobsTable.classList.add('w-100')
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
jobsmain.append(jobsfilter, jobsTable, dialogBox)
//$( "#pages" ).clone(true, true).appendTo( "#tfoot" );
export {jobsmain}
