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
import {getMatImgs, getJobImgs, matImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import {jobsData, jobsDataAll, jobsStats, craft, mats} from './abilitiesData.js'

document.body.append(nav(), jobmain)
jobsData.materials().then(d => {
  jobsData.jobs().then(j => {
    getMatImgs()
    getJobImgs()
console.log(jobImagesComplete)
      // jobicon
      let jobmain = document.getElementById('jobimg')
      var header = document.getElementById('jobheader')
      let currentjobImg = jobImagesComplete.filter(img => img.id == jobheader.innerHTML)

      jobmain.innerHTML = currentjobImg[0].outerHTML
      // crafting
      let matName = document.getElementById('craftmat').nextElementSibling.innerHTML
      let craftmat = document.querySelectorAll('.craftmat span:nth-child(2)')
      let craftmatPic = document.querySelectorAll('.craftmat span:nth-child(1)')

      let craftjob = document.querySelectorAll('.craftjob span:nth-child(2)')
      let craftjobPic = document.querySelectorAll('.craftjob span:nth-child(1)')
      for (var i=0; i<craftmat.length; i++) {
        let name = craftmat[i].innerHTML
        matImagesComplete.map(m => {
            name == m.id ? craftmatPic[i].innerHTML = m.outerHTML + '<br>': ''
        })
        craftmatPic[i].innerHTML == '' ? craftmatPic[i].parentNode.remove() : ''
      }
      for (var i=0; i<craftjob.length; i++) {
        let name = craftjob[i].innerHTML
        jobImagesComplete.map(m => {
            name == m.id ? craftjobPic[i].innerHTML = m.outerHTML + '<br>': ''
          })
        craftjobPic[i].innerHTML == '' ? craftjobPic[i].parentNode.remove() : ''
      }

  /*  setTimeout(function(){
      clearInterval(crafstart)
    }, 101)*/
    //    m.id == matName ? document.getElementById('craftmat').innerHTML = m.outerHTML + '<br>' : ''
    //    m.id == matName ? document.getElementById('craftjob').innerHTML = m.outerHTML + '<br>' : ''
    //    m.id == matName ? document.getElementById('craftjob').innerHTML = m.outerHTML + '<br>' : ''
  })

})



//p.innerHTML = newHTML
