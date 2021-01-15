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
import {getMatImgs, matImagesComplete} from './img/imgsHTML.js'
import {jobsData, craft, mats} from './abilitiesData.js'

document.body.append(nav(), jobmain)
jobsData.materials().then(d => {
  getMatImgs()
  setTimeout(function() {
    let matName = document.getElementById('craftmat').nextElementSibling.innerHTML
    let craftmat = document.querySelectorAll('.craftmat span:nth-child(2)')
    let craftmatPic = document.querySelectorAll('.craftmat span:nth-child(1)')
    let craftjob = document.querySelectorAll('.craftjob span:nth-child(2)')
    let craftjobPic = document.querySelectorAll('.craftjob span:nth-child(1)')
    for (var i=0; i<craftmat.length; i++) {
      let name = craftmat[i].innerHTML
      matImagesComplete.map(m => {
          name == m.id ? craftmatPic[i].innerHTML = m.outerHTML : ''
    })
  //    m.id == matName ? document.getElementById('craftmat').innerHTML = m.outerHTML + '<br>' : ''
  //    m.id == matName ? document.getElementById('craftjob').innerHTML = m.outerHTML + '<br>' : ''
  //    m.id == matName ? document.getElementById('craftjob').innerHTML = m.outerHTML + '<br>' : ''
    }
  },1000)

})



//p.innerHTML = newHTML
