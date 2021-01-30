//import { search } from './basicfn/search.js';
//import GetSheetDone from 'get-sheet-done';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'popper.js';
import './style.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
//var $ = require("jquery")
import nav from './nav/nav';
import { jobsmain } from './jobs/jobsmain.js'
import {abilities, jobsData,abilitiesAllInfo} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './jobs/jobsTable.js'
import theadimg from './img/Jobs/BG/inthp.jpg'
import { stickyNav } from './basicfn/stickyNav.js'
import { jobs} from './jobs/jobsjs.js'
var $ = require("jquery")

//let bgimg = document.createElement('img')
//bgimg.id = 'bgimg'
//bgimg.src = bg

document.body.append( nav(), jobsmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
//document.body.style.backgroundPosition= 'center center'
//document.body.style.backgroundPosition = 'center center'
//add sticky nav
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
        // tooltips to work on first load
        var switchCells =  document.getElementsByClassName('tooltiptext')
        for (var i=0; i < switchCells.length; i++) {
        var switchName = switchCells[i].parentNode.innerHTML
        var indexof = switchName.indexOf('<')
        switchName = switchName.substring(0, indexof)
        var tooltipsAb = descFinaleSplit.filter(desc=> desc[0] == switchName)
        var tooltipsPass = passiveFinaleSplit.filter(desc=> desc[0] == switchName)
        tooltipsAb.map(desc => {
          if (desc[0] == switchName) {
            switchCells[i].innerHTML = desc[1]
          }
        })
        tooltipsPass.map(desc => {
          if (desc[0] == switchName) {
            switchCells[i].innerHTML = desc[1]
          }
        })
        }
      })

    })
}

//console.log(abilities.find)


//console.log(gsheet)
//let button = document.getElementById('navbtn')
//let menu = document.getElementById('collapsemenu')
//toggle(menu, button)
