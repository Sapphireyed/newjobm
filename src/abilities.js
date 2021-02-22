import './style.scss';
import '../abils.scss';
import nav from './nav/nav';
import { sideDiv, toggleSide } from './side/side.js'
import { abilsmain } from './abilities/abilsmain.js'
import {abilities, characters, jobsData, abilitiesAllInfo} from './abilitiesData.js'
import { getAbilImgs, abilImagesComplete, getJobImgs } from './img/imgsHTML.js'
import { abilitiesFn } from './abilities/abilitiesjs.js'
import theadimg from './img/Traits/Dumb.png'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
import { jobs } from './abilitiesData.js'

//import { jobs} from './jobs/jobsjs.js'
var $ = require("jquery")
//import { jobsTable } from './jobs/jobsTable'

document.body.append( nav(), abilsmain, sideDiv)

cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#abilsmain')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section,navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}
abilities.units()
    .then(data => {
        abilities.passivesFn()
        abilities.glossary()
        abilities.abils()
          .then(res => {
              getAbilImgs()
              abilitiesFn()
            })
          })
          
characters.chars()
jobsData.jobs()
jobsData.craft()
    .then(data => {
        jobsData.materials()
    })


let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
