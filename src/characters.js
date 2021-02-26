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
import { sideDiv, toggleSide } from './side/side.js'
import {options2, options } from './chars/charsfilter.js'
import {preload } from './preload/preload.js'

//let bgimg = document.createElement('img')
//bgimg.id = 'bgimg'
//bgimg.src = bg

document.body.append( nav(),preload, glossarymain, sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#glossarymain')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section,navmain)
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
      characters.charsRaw()
        .then(ch => {
          abilities.abils()
           .then(ab => {
             getAbilImgs()
             characters.chars()
               .then(res => {
                 getCharsImages()
                 glossFn()
                 let heroesTable = document.getElementById('heroesTable')
                 let enemiesTable = document.getElementById('enemiesTable')
                 let navfilters = document.getElementById('navFiters')
                 let button1= document.getElementById('glossButton')
                 let button2= document.getElementById('applyButton')
                 let level =document.getElementById('chooselvl')
                 let raroptions = document.getElementById('rarity')
                 //level.value = 10
                 let start= document.querySelectorAll('#lvlbtns button')[0]
                 let resetlvls = document.querySelectorAll('#lvlbtns button')[1]
                 let startfilters =document.getElementById('start')
                 let resetfilters =document.getElementById('jobsclear')
                 let starten =document.getElementById('start2')
                 let reseten =document.getElementById('clear2')
                 resetlvls.click()
                 start.click()
                 button1.style.backgroundColor = 'rgb(3, 26, 42)'
                 let heroes = true
                 function heroesFn() {
                   if (heroes == false) {
                     glossFn()
                     switchTable(heroesTable, enemiesTable)
                     this.style.backgroundColor = 'rgb(3, 26, 42)'
                     button2.style.backgroundColor = 'rgba(3, 26, 42, .5)'
                     resetlvls.click()
                     start.click()
                     resetfilters.click()
                     raroptions.innerHTML = options
                     startfilters.style.display = 'block'
                     resetfilters.style.display = 'block'
                     starten.style.display = 'none'
                     reseten.style.display = 'none'
                     heroes = true
                   }
                 }
                 button1.onclick = heroesFn
                 button2.onclick = function(){
                   if (heroes == true) {
                     this.style.backgroundColor = 'rgb(3, 26, 42)'
                     button1.style.backgroundColor = 'rgba(3, 26, 42, .5)'
                     let trs = document.querySelectorAll('#applyTable tr')
                     if (trs.length < 3) {
                       applyTableFn()
                    //   document.querySelectorAll('#enemiesTable thead').style.display = 'block'
                     }
                     switchTable(enemiesTable, heroesTable)
                     level.value = 100
                     resetlvls.click()
                     start.click()
                     reseten.click()
                     raroptions.innerHTML = options2
                     startfilters.style.display = 'none'
                     resetfilters.style.display = 'none'
                     starten.style.display = 'block'
                     reseten.style.display = 'block'
                     heroes = false
                   }
                 }
                 function switchTable(table, table2) {
                   table.style.display = 'table';
                   table2.style.display = 'none'
                 }
                 let skip = document.getElementById('skip')
                 skip.style.display = 'block'
               })
               })
        })

       })
    })





let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
