import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import './style.scss';
import './job.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
//var $ = require("jquery")
import 'tablesorter'
import nav from './nav/nav';
import { jobmain } from './jobs/job/jobmain.js'
import { init, jobValues } from './jobs/jobsjs.js'
import { jobsImgs } from './importImgs.js'
import { openNew } from './basicfn/openNew.js'
import {getMatImgs, getJobImgs, getAbilImgs, matImagesComplete, jobImagesComplete, abilImagesComplete} from './img/imgsHTML.js'
import {abilities, jobsData, jobsDataAll, jobsStats, craft, mats, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits} from './abilitiesData.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'

document.body.append(nav(), jobmain)
cursor()
abilities.units().then(unit => {
  abilities.abils()
  abilities.passivesFn()
})

window.onload = function() {
  jobsData.craft()
jobsData.jobs().then(j => {
  getJobImgs()
  // jobicon
  let jobmain = document.getElementById('jobimg')
  let jobmain2 = document.getElementById('jobimg2')
  var header = document.getElementById('jobheader')
  let currentjobImg = jobImagesComplete.filter(img => img.id == jobheader.innerHTML)

  jobmain.innerHTML = currentjobImg[0].outerHTML
  jobmain2.innerHTML = currentjobImg[0].outerHTML
  //bg imgs
  let jobsrc = Object.entries(jobsImgs).filter(img => img[0] == jobheader.innerHTML + '.png')
  document.body.style.backgroundImage = 'url("' + jobsrc[0][1] + '")'
  document.body.style.backgroundSize = '190px'
  //document.body.style.backgroundSize = 'contain'
}).then(d => {
  abilities.abils().then(f=> {
    abilities.passivesFn()
    getAbilImgs()



}).then(d => {
  // abilities icons
  let switchimg = document.getElementById('switchimg')
  var switchH = document.getElementById('switchH')
  switchH = switchH.innerHTML.split(':')[1].trim()

  let currentSwitchImg = abilImagesComplete.filter(img => img.id == switchH)
  switchimg.innerHTML = currentSwitchImg[0].outerHTML

let cardHname = Array.from(document.querySelectorAll('#deck h5')).map(h => {
  let ext = h.innerHTML.indexOf('(')
  let name = h.innerHTML.substring(0, ext-1)
  return name
})

  let card1img = document.getElementById('card1img')
  let currentCard1Img = abilImagesComplete.filter(img => img.id == cardHname[0])

  card1img == null ? '' : card1img.innerHTML = currentCard1Img[0].outerHTML

  let card2img = document.getElementById('card2img')
  let currentCard2Img = abilImagesComplete.filter(img => img.id == cardHname[1])
  card2img == null ? '' : card2img.innerHTML = currentCard2Img[0].outerHTML

  let card3img = document.getElementById('card3img')
  let currentCard3Img = abilImagesComplete.filter(img => img.id == cardHname[2] || img.id == cardHname[1])
  card3img == null ? '' : card3img.innerHTML = currentCard3Img[0].outerHTML

  let card4img = document.getElementById('card4img')
  let currentCard4Img = abilImagesComplete.filter(img => img.id == cardHname[3] || img.id == cardHname[2] || img.id == cardHname[1])
  card4img == null ? '' : card4img.innerHTML = currentCard4Img[0].outerHTML
  })
  // tooltips
  let apply = document.getElementById
  // change jobsStats
  let changelvl = document.getElementById('levelSel')
  let stats = Array.from(document.getElementsByClassName('spanattr'))
  changelvl.onchange = function() {
    stats.map(stat => stat.innerHTML = Math.ceil(stat.id/10 * this.value))
  }
  let jobmCryst = document.getElementById('jobmCrystal')
  jobmCryst.onchange = function() {
    stats.map(stat => stat.innerHTML = Math.ceil(stat.id/10 * changelvl.value) + Math.ceil((stat.id/10 * changelvl.value) * jobmCryst.value/10))
  }
  jobsData.materials().then(d => {
    getMatImgs()
    // crafting
    let matName = document.getElementById('craftmat').nextElementSibling.innerHTML
    let craftmat = document.querySelectorAll('.craftmat span:nth-child(2)')
    let craftmatparent = document.getElementById('craftmat')
    let craftmatPic = document.querySelectorAll('.craftmat span:nth-child(1)')

    let craftjob = document.querySelectorAll('.craftjob span:nth-child(2)')
    let craftjobPic = document.querySelectorAll('.craftjob span:nth-child(1)')
    for (var i=0; i<craftmat.length; i++) {  // matimgs
      let name = craftmat[i].innerHTML
      matImagesComplete.map(m => {
          name == m.id ? craftmatPic[i].innerHTML = m.outerHTML + '<br>': ''
      })
      craftmatPic[i].innerHTML == '' ? craftmatPic[i].parentNode.parentNode.nextSibling.remove() : ''
      craftmatPic[i].innerHTML == '' ? craftmatPic[i].parentNode.parentNode.remove() : ''

    }
    for (var i=0; i<craftjob.length; i++) {  //jobimgs
      let name = craftjob[i].innerHTML
      jobImagesComplete.map(m => {
          name == m.id ? craftjobPic[i].innerHTML = m.outerHTML + '<br>': ''
        })
      craftjobPic[i].innerHTML == '' ? craftjobPic[i].parentNode.parentNode.nextSibling.remove() : ''
      craftjobPic[i].innerHTML == '' ? craftjobPic[i].parentNode.parentNode.remove() : ''
    }
    //
    let craftjobname = document.querySelectorAll('.craft.craftjob')
    for(var i=0; i< craftjobname.length; i++) {
    let name = craftjobname[i].innerText

      craftjobname[i].addEventListener('click', function() {

        let ind = jobsDataAll.filter(job => job[1] == name.trim())
        ind = parseInt(ind[0])
        openNew(jobsDataAll, ind, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits)
      })
    }
})



})

}
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}
