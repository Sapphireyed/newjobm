import '../style.scss';
//import '../gloss.scss';
import './traits.scss';
import nav from '../nav/nav';
import { glossarymain } from './traits/traitsmain.js'
import {traitsAll, traitsDataAll, abilities, jobsData} from '../abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete} from '../img/imgsHTML.js'
import { traits } from '../importImgs.js'
import { stickyNav, cursor } from '../basicfn/stickyNav.js'
import { glossFn, applyTableFn } from './traits/traitsjs.js'
import theadimg from '../img/traits/joker.png'
import {preload } from '../preload/preload.js'
var $ = require("jquery")
import { toggle} from '../basicfn/toggle.js'

//let bgimg = document.createElement('img')
//bgimg.id = 'bgimg'
//bgimg.src = bg

document.body.append( preload, nav(), glossarymain)
cursor()
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition = 'center 30%'
//add sticky nav
setTimeout(function(){
  var headernav = document.getElementById("navMain");
  window.onscroll = function() {
    stickyNav(headernav)
  }
},500)


traitsAll.traitsFn()
  .then(trait => {
    getAbilImgs()
    glossFn()

    let glossTable = document.getElementById('abilsBody')
    let applyTable = document.getElementById('applyBody')
    let button1= document.getElementById('glossButton')
    let button2= document.getElementById('applyButton')
    let imgsonSide = Array.from(document.querySelectorAll('.traitimg'))
    button1.style.backgroundColor = '#c09601'

    button1.onclick = function(){
      switchTable(glossTable, applyTable)
      changesrc(2)
      this.style.backgroundColor = '#c09601'
      button2.style.backgroundColor = 'rgba(192, 150, 1, 0.5);'
      imgsonSide.map(img=> img.style.width = '200px')
    }
    let index = 0
    let pageList = traitsDataAll
    let end =[];
    button2.onclick = function(pageList){
      this.style.backgroundColor = '#c09601'
      button1.style.backgroundColor = 'rgba(192, 150, 1, 0.5);'
      if (index == 0) {
        applyTableFn()
      }
        switchTable(applyTable, glossTable)
        changesrc(3)
        imgsonSide.map(img=> img.style.width = '150px')
      //  let rows = Array.from(document.querySelectorAll('#applyBody tr'))
        //rows.map(row => row.children.length < 3 ? row.style.display = 'none' : row)
    }
    function switchTable(table, table2) {
      table.style.display = 'table-row-group';
      table2.style.display = 'none'
    }
    let replay = document.querySelectorAll('#navbtns img')[0]
    let stop = document.querySelectorAll('#navbtns img')[1]
    let play  = document.querySelectorAll('#navbtns img')[2]
    let traitimg = Array.from(document.querySelectorAll('.traitimg'))
    play.onclick = function(){
      traitimg.map(img => img.style.animation = 'rotation 5s infinite linear')
    }
    stop.onclick = function(){
      traitimg.map(img => img.style.animation = 'rotation 0')
    }
    replay.onclick = function(){
      traitimg.map(img => {
        let rand = Math.floor(Math.random() * Object.entries(traits).length)
        img.src = Object.entries(traits)[rand][1]
      })
    }
    changesrc(2)
    function changesrc(nameInd) {
      // Icons on sides of the table
      let abilrows = Array.from(document.querySelectorAll('tr'))
      abilrows.shift()
      for (var i = 0; i < abilrows.length; i++) {
      //  tooltipsFn(abilrows[i])
        let name = abilrows[i].children[nameInd].innerText.toLowerCase() + '.png'
        abilrows[i].addEventListener('mousemove', function() {
          traitimg.map(img => img.src = Object.entries(traits).find(src=> src[0].toLowerCase() == name)[1])
        })
        abilrows[i].addEventListener('mouseleave', function(){
          traitimg.map(img => {
            let rand = Math.floor(Math.random() * Object.entries(traits).length)
            img.src = Object.entries(traits)[rand][1]
          })
        })
      }
    }

  })


let togglebtn = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, togglebtn)
