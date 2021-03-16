//import { search } from './basicfn/search.js';
//import GetSheetDone from 'get-sheet-done';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'popper.js';
import './style.scss';
import './jobs.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
import nav from './nav/nav';
import { jobsmain } from './jobs/jobsmain.js'
import {abilities, jobsData, descFinale, passiveFinale, abilTraits, passiveTraits} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
import { jobs} from './jobs/jobsjs.js'
import { sideDiv, toggleSide } from './side/side.js'
import theadimg from './img/Jobs/BG/inthp.jpg'
import {preload} from './preload/preload.js'
var $ = require("jquery")


document.body.append(preload, nav(), jobsmain, sideDiv)


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

abilities.units()
    .then(data => {
        abilities.abils().then(ab => {
          getAbilImgs()
          //switch imgs
          let switchskills = document.querySelectorAll('td .tooltipMy')

          for (var i=0; i< switchskills.length; i++) {
            let switchskillsimg = document.createElement('div')
            let src = abilImagesComplete.filter(img => switchskills[i].parentNode.id == img.id)
            if (src.length > 0) {
              switchskills[i].parentNode.prepend(switchskillsimg)
              switchskillsimg.innerHTML = src[0].outerHTML
            }

          //  if (switchskill[i].innerHTML)
          }
        })
        abilities.passivesFn()
      })
jobsData.craft()
    .then(data => {
      jobsData.materials()
      jobsData.jobs()
      .then(res => {
        //getMatImgs()
        getJobImgs()
        jobs()
        setTimeout(function(){
          let tableRows = document.querySelectorAll('tr')

          var descFinaleSplit = descFinale.map(desc => desc.split(':<br>'))
          var passiveFinaleSplit = passiveFinale.map(desc => desc.split(':<br>'))
          var switchCells =  document.getElementsByClassName('tooltiptext')

          for (var i=0; i < switchCells.length; i++) {
              var switchName = switchCells[i].parentNode.innerText
              var tooltipsAb = descFinaleSplit.filter(desc=> desc[0] == switchName)
              var tooltipsPass = passiveFinaleSplit.filter(desc=> desc[0] == switchName)
              var tooltipsApply = abilTraits.map(trait => trait.split(': ')).filter(desc=> desc[0] == switchName)
              var passApply = passiveTraits.map(trait => trait.split(': ')).filter(desc=> desc[0] == switchName)

              tooltipsAb.map((desc, ind) => {
                if (desc[0] == switchName) {
                //  console.log(desc[1])
                  switchCells[i].innerHTML = desc[1] + '<br> <span class="tipApply">(' + tooltipsApply[ind][1] + ')</span>'
                  switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\(, , , \)|, ,|, , ,|\(, , , \)|\(\)|<br><br>/g, '')
                  switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\( \)/g, '')
                  switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/, \)/g, ')')
                }
              })

              tooltipsPass.map((desc, ind) => {
                if (desc[0] == switchName) {
                  switchCells[i].innerHTML = desc[1] + '<br> <span class="tipApply">(' + passApply[ind][1] + ')</span>'
                  switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\(, , , \)|, ,|, , ,|\(, , , \)|\(\)|<br><br>/g, '')
                  switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\( \)/g, '')
                  switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/, \)/g, ')')
                }
              })
            }
          },2000)

      })

    })
}

//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
