import './style.scss';
import './gachas.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
import nav from './nav/nav';
import { gachasmain} from './gachas/gachasmain.js'
import {abilities, jobsData, verlog} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete, charsImagesComplete} from './img/imgsHTML.js'
//import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
//import { jobs} from './jobs/jobsjs.js'
//
import theadimg from './img/traits/BrokenDefend.PNG'
import {preload } from './preload/preload.js'
var $ = require("jquery")

//let bgimg = document.createElement('img')
//bgimg.id = 'bgimg'
//bgimg.src = bg
//let preload = document.createElement('div')
//preload.id = 'preload'


document.body.append(nav(), preload, gachasmain)
cursor()

let section = $('#jobsmain')
let navmain = document.getElementById('navMain')
//toggleSide(sidenav, section, navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition= 'center center'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

window.onload = function(){

  let skip = Array.from(document.getElementsByClassName('skip'))
  skip[0].style.animation = 'skipTop 20s linear infinite alternate'
  skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
}

//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
