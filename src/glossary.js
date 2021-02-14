import './style.scss';
import './gloss.scss';
import nav from './nav/nav';
import { glossarymain } from './glossary/glossarymain.js'
import {abilities, jobsData} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { glossFn, applyTableFn } from './glossary/glossjs.js'
import theadimg from './img/traits/Protective.png'
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

abilities.units()
    .then(data => {
      //  abilities.passivesFn()
        abilities.glossary()
          .then(res => {
              getAbilImgs()
              glossFn()

              let glossTable = document.getElementById('glossTable')
              let applyTable = document.getElementById('applyTable')
              let button1= document.getElementById('glossButton')
              let button2= document.getElementById('applyButton')
              button1.style.backgroundColor = '#264553'

              button1.onclick = function(){
                switchTable(glossTable, applyTable)
                this.style.backgroundColor = '#264553'
                button2.style.backgroundColor = 'rgba(38, 69, 83, .5)'
              }
              button2.onclick = function(){
                this.style.backgroundColor = '#264553'
                button1.style.backgroundColor = 'rgba(38, 69, 83, .5)'
                let trs = document.querySelectorAll('#applyTable tr')
                if (trs.length < 3) {
                  applyTableFn()
                }

                switchTable(applyTable, glossTable)
              }
              function switchTable(table, table2) {
                table.style.display = 'block';
                table2.style.display = 'none'
              }
            })
          })

let togglebtn = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, togglebtn)
