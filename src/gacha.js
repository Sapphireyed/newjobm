import './style.scss';
import './gacha.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
import nav from './nav/nav';
import { gachamain} from './gachas/gacha/gachamain.js'
import {abilities, jobsData, verlog} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete, charsImagesComplete} from './img/imgsHTML.js'
//import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
//import { jobs} from './jobs/jobsjs.js'
//
import {preload } from './preload/preload.js'
var $ = require("jquery")

document.body.append(nav(), preload, gachamain)
cursor()

let section = $('#jobsmain')
let navmain = document.getElementById('navMain')
//toggleSide(sidenav, section, navmain)

document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition= 'center center'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

window.onload = function(){
  setTimeout(function() {
    let rewards = Array.from(document.querySelectorAll('#rewards .reward'))
    rewards.map(rew => rew.children[1].innerText == '' ? rew.style.diplay = 'none' : rew)
    console.log(rewards)
  }, 4500)

}

//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
