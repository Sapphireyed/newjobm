import './style.scss';
import './jobs.scss';
import './chapt.scss'
import nav from './nav/nav';
import { jobsmain } from './chapters/chaptmain.js'
import {chapters, abilities, jobsData, characters} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, getCharsImages, abilImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './chapters/chaptTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
import { chaptersFn} from './chapters/chaptjs.js'
import { sideDiv, toggleSide } from './side/side.js'
import theadimg from './img/Materials/Thunder Spirit.png'
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
document.body.style.backgroundAttachment = 'fixed'
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

window.onload = function(){
  characters.chars()
    .then(char => {
      getCharsImages()
    }).then(ch => {
      chapters.chapt()
        .then(chapt => {
          chaptersFn()
          let skip = Array.from(document.getElementsByClassName('skip'))
          skip[0].style.animation = 'skipTop 20s linear infinite alternate'
          skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
        })
    })

}

//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
