//import { toggle } from './basicfn/toggle.js';
//import GetSheetDone from 'get-sheet-done';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import './style.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
var $ = require("jquery")
import nav from './nav/nav';
import { jobsmain } from './jobs/jobsmain.js'
import { jobs, abilities, unitPerc, powlvl, unitDesc, abilitiesArr} from './jobs/jobsjs.js'

document.body.append(nav(), jobsmain)
abilities.units()
    .then(data => {
        jobs()
    })





//console.log(abilities.find)
document.getElementById('thead').click()

//console.log(gsheet)
//let button = document.getElementById('navbtn')
//let menu = document.getElementById('collapsemenu')
//toggle(menu, button)
