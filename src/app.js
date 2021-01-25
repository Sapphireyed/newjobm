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
import { jobs} from './jobs/jobsjs.js'
import {abilities, jobsData,} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import bg from './img/other/bgmain2.png'
import { jobsTable } from './jobs/jobsTable.js'

let bgimg = document.createElement('img')
bgimg.id = 'bgimg'
bgimg.src = bg

document.body.append(bgimg, nav(), jobsmain)

window.onscroll = function() {stickyHeader()};
var header = document.getElementById("navMain");
var sticky = header.offsetTop + 60;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
    bgimg.style.top = '-10px'
//          let width = document.getElementById('jobsBody').offsetWidth
//          header.style.width = width + 'px'
  } else {
    header.classList.remove("sticky");
    bgimg.style.top = '90px'
  }
}
window.onload = function(){

abilities.units()
    .then(data => {
        abilities.abils().then(ab => {
          getAbilImgs()

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
