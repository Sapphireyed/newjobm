//import { toggle } from './basicfn/toggle.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import './style.scss';
import fontawesome from '@fortawesome/fontawesome-free'
var $ = require("jquery")
import nav from './nav/nav';
import { jobsmain } from './jobs/jobsmain.js'
import { init } from './jobs/jobsjs.js'

document.body.append(nav(), jobsmain)
init()

//let button = document.getElementById('navbtn')
//let menu = document.getElementById('collapsemenu')
//toggle(menu, button)
