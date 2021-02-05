import './style.scss';
import '../abils.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
//var $ = require("jquery")
import nav from './nav/nav';
import { abilsmain } from './abilities/abilsmain.js'
import {abilities, jobsData,abilitiesAllInfo} from './abilitiesData.js'
import { getAbilImgs, abilImagesComplete } from './img/imgsHTML.js'
import { abilsTable } from './abilities/abilsTable.js'
import theadimg from './img/Abilities/bg/nothing.jpg'
import { stickyNav } from './basicfn/stickyNav.js'
//import { jobs} from './jobs/jobsjs.js'
var $ = require("jquery")
//import { jobsTable } from './jobs/jobsTable'

document.body.append( nav(), abilsmain, abilsTable)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}
