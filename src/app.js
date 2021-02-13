//import { search } from './basicfn/search.js';
//import GetSheetDone from 'get-sheet-done';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'popper.js';
import './style.scss';
import './jobs.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
//var $ = require("jquery")
import nav from './nav/nav';
import { jobsmain } from './jobs/jobsmain.js'
import {abilities, jobsData} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
import { jobs} from './jobs/jobsjs.js'
import { sideDiv, toggleSide } from './side/side.js'
import theadimg from './img/Jobs/BG/inthp.jpg'
var $ = require("jquery")

//let bgimg = document.createElement('img')
//bgimg.id = 'bgimg'
//bgimg.src = bg
let preload = document.createElement('div')
preload.id = 'preload'
document.body.append(preload, nav(), jobsmain, sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#jobsmain')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section, navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
//document.body.style.backgroundPosition= 'center center'
//document.body.style.backgroundPosition = 'center center'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

window.onload = function(){

abilities.units()
    .then(data => {
        abilities.abils().then(ab => {
          getAbilImgs()
          //switch imgs
          let switchskills = document.querySelectorAll('td .tooltipMy')

          for (var i=0; i< switchskills.length; i++) {
            let switchskillsimg = document.createElement('div')
            let src = abilImagesComplete.filter(img => switchskills[i].parentNode.id == img.id)
            if (src.length > 0) {
              switchskills[i].parentNode.prepend(switchskillsimg)
              switchskillsimg.innerHTML = src[0].outerHTML
            }

          //  if (switchskill[i].innerHTML)
          }
        })
        abilities.passivesFn()
      })
jobsData.craft()
    .then(data => {
      jobsData.materials()
      jobsData.jobs()
      .then(res => {
        //getMatImgs()
        getJobImgs()
        jobs()

      })

    })
}

//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
