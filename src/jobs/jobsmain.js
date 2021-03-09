import { jobsfilter } from './jobsfilter.js'
import { jobsTable } from './jobsTable.js'
import theadimg from '../img/other/thead.png'
import { dialogBox } from '../nav/thana.js'
var $ = require("jquery")

let jobsmain = document.createElement('section')
jobsmain.id = 'jobsmain'
jobsfilter.style.backgroundColor = '#4d636f'

jobsfilter.style.color = 'white'
jobsmain.classList.add('section')

jobsmain.append(jobsfilter, jobsTable, dialogBox)
//$( "#pages" ).clone(true, true).appendTo( "#tfoot" );
export {jobsmain}
