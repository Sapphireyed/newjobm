import './style.scss';
import './passives.scss';
import nav from './nav/nav';
import { passivesmain } from './passives/passivesmain.js'
import {abilities, jobsData,abilitiesAllInfo} from './abilitiesData.js'
import { getAbilImgs, abilImagesComplete, getJobImgs } from './img/imgsHTML.js'
import { passivesFn } from './passives/passivesjs.js'
import theadimg from './img/Materials/Guardian Necklace.png'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { jobs } from './abilitiesData.js'

document.body.append( nav(), passivesmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'

var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}
jobsData.jobs()
abilities.abils()
jobsData.craft()
    .then(data => {
      jobsData.materials()
    })
abilities.units()
    .then(data => {
        abilities.passivesFn()
          .then(res => {
            //  getAbilImgs()
              passivesFn()
            })
          })
