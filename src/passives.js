import './style.scss';
import './passives.scss';
import nav from './nav/nav';
import { passivesmain } from './passives/passivesmain.js'
import {abilities, jobsData,abilitiesAllInfo,characters} from './abilitiesData.js'
import { getAbilImgs, abilImagesComplete, getJobImgs } from './img/imgsHTML.js'
import { passivesFn } from './passives/passivesjs.js'
import theadimg from './img/Materials/Guardian Necklace.png'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
import { jobs } from './abilitiesData.js'
import { sideDiv, toggleSide } from './side/side.js'
var $ = require("jquery")
import {preload } from './preload/preload.js'

document.body.append( nav(),preload, passivesmain,sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#jobmainsect')
let navmain = document.getElementById('abilsmain')
toggleSide(sidenav, section,navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'

var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}
jobsData.jobs()
jobsData.craft()
    .then(data => {
      jobsData.materials()
    })
abilities.units()
    .then(data => {
        abilities.abils()
        characters.chars()
        abilities.glossary()
          .then(p => {
            abilities.passivesFn()
              .then(res => {
                //  getAbilImgs()
                  passivesFn()
                  let skip = document.getElementById('skip')
                  skip.style.display = 'block'
                })
              })
          })



let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
