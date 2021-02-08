import './style.scss';
import './passives.scss';
import nav from './nav/nav';
import { passivesmain } from './passives/passivesmain.js'
import {abilities, jobsData,abilitiesAllInfo} from './abilitiesData.js'
import { getAbilImgs, abilImagesComplete, getJobImgs } from './img/imgsHTML.js'
import { passivesFn } from './passives/passivesjs.js'
import theadimg from './img/Materials/Guardian Necklace.png'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
import { jobs } from './abilitiesData.js'

document.body.append( nav(), passivesmain)
cursor()
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
        abilities.passivesFn()
          .then(res => {
            //  getAbilImgs()
              passivesFn()
            })
          })


let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
