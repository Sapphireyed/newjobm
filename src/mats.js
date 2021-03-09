import './style.scss';
//import './jobs.scss';
import './mats.scss'
import nav from './nav/nav';
import { jobsmain } from './mats/matsmain.js'
import {chapters, abilities, jobsData, characters} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, getCharsImages, matImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './mats/matsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
import { matsFn} from './mats/matsjs.js'
import { sideDiv, toggleSide } from './side/side.js'
import theadimg from './img/Materials/Water Spirit.png'
var $ = require("jquery")
import {preload } from './preload/preload.js'

document.body.append(nav(),preload, jobsmain, sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#jobsmain')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section, navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundPosition = 'center top'
//document.body.style.backgroundAttachment = 'fixed'
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

window.onload = function(){
  jobsData.jobs()
    .then(job => {
      jobsData.materials()
        .then(mat => {
          jobsData.craft()
          getMatImgs()
          abilities.units()
            .then(unit => {
              abilities.abils()
              abilities.passivesFn()
            })
        }).then(m => {
          matsFn()
          let skip = document.getElementById('skip')
          skip.style.display = 'block'
        })
    })
    }


//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
