import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import './style.scss';
import './job.scss';
import fontawesome from '@fortawesome/fontawesome-free'
var $ = require("jquery")
import 'tablesorter'
import nav from './nav/nav';
import { jobmain } from './jobs/job/jobmain.js'
import { init } from './jobs/jobsjs.js'

document.body.append(nav(), jobmain)
const water = 'Water'

const doc = document.getElementsByTagName('h5')
//var newHTML = doc.innerHTML
let changecolor = setInterval(function() {
  for (var i=0; i < doc.length;i++) {
    console.log(doc[i].innerHTML)
  /*  doc[i].innerHTML = doc[i].innerHTML.replace("MaxHp", "<span style='color: yellow'>MaxHP</span>")
    doc[i].innerHTML = doc[i].innerHTML.replace("Str", "<span style='color: red'>Strength</span>")
    doc[i].innerHTML = doc[i].innerHTML.replace("Agi", "<span style='color: green'>Agility</span>")
    doc[i].innerHTML = doc[i].innerHTML.replace("Int", "<span style='color: blue'>Intelligence</span>")
    doc[i].innerHTML = doc[i].innerHTML.replace("Thunder", "<span style='color: red'>Strength</span>")*/
  }
}, 100)
setTimeout(function() {
  clearInterval(changecolor)
}, 1000)


//p.innerHTML = newHTML
