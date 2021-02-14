import './style.scss';
//import './gloss.scss';
import './chars.scss';
import nav from './nav/nav';
import { glossarymain } from './chars/charsmain.js'
import {abilities, jobsData, characters, charsAllInfo} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getCharsImages, abilImagesComplete, charsImagesComplete} from './img/imgsHTML.js'
//import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { glossFn, applyTableFn } from './chars/charsjs.js'
import theadimg from './img/materials/Space Stone.png'
var $ = require("jquery")
import { toggle} from './basicfn/toggle.js'

//let bgimg = document.createElement('img')
//bgimg.id = 'bgimg'
//bgimg.src = bg

document.body.append( nav(), glossarymain)
cursor()
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition = 'center 20%'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}
 window.addEventListener('load', function() {
   abilities.units()
    .then(unit => {
      abilities.passivesFn()
      abilities.abils()
       .then(ab => {
         getAbilImgs()
         characters.chars()
           .then(res => {
             getCharsImages()
          console.log(charsImagesComplete)
             glossFn()
             let heroesTable = document.getElementById('heroesTable')
             let enemiesTable = document.getElementById('enemiesTable')
             let button1= document.getElementById('glossButton')
             let button2= document.getElementById('applyButton')
             button1.style.backgroundColor = 'rgb(3, 26, 42)'
             let heroes = true
             button1.onclick = function(){
               if (heroes == false) {
                 glossFn()
                 switchTable(heroesTable, enemiesTable)
                 this.style.backgroundColor = 'rgb(3, 26, 42)'
                 button2.style.backgroundColor = 'rgba(3, 26, 42, .5)'
                 heroes = true
               }
             }
             button2.onclick = function(){
               if (heroes == true) {
                 console.log('poo')
                 this.style.backgroundColor = 'rgb(3, 26, 42)'
                 button1.style.backgroundColor = 'rgba(3, 26, 42, .5)'
                 let trs = document.querySelectorAll('#applyTable tr')
                 if (trs.length < 3) {
                   applyTableFn()
                //   document.querySelectorAll('#enemiesTable thead').style.display = 'block'
                 }
                 switchTable(enemiesTable, heroesTable)
                 heroes = false
               }
             }
             function switchTable(table, table2) {
               table.style.display = 'table';
               table2.style.display = 'none'
             }
           })
           })
       })
    })





let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
