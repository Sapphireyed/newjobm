import './style.scss';
import '../abils.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
//var $ = require("jquery")
import nav from './nav/nav';
import { abilsmain } from './abilities/abilsmain.js'
import {abilities, jobsData, abilitiesAllInfo} from './abilitiesData.js'
import { getAbilImgs, abilImagesComplete, getJobImgs } from './img/imgsHTML.js'
import { abilitiesFn } from './abilities/abilitiesjs.js'
import theadimg from './img/Traits/Dumb.png'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { jobs } from './abilitiesData.js'
//import { jobs} from './jobs/jobsjs.js'
var $ = require("jquery")
//import { jobsTable } from './jobs/jobsTable'

document.body.append( nav(), abilsmain)

cursor()
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
        abilities.abils()
          .then(res => {
              getAbilImgs()
              abilitiesFn()
            })
          })

jobsData.jobs()
jobsData.craft()
    .then(data => {
        jobsData.materials()
    })
