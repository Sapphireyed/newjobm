import './style.scss';
import './home.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
import nav from './nav/nav';
import { herodiv ,mainsec} from './home/homemain.js'
import {abilities, jobsData, verlog} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete, charsImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
import { jobs} from './jobs/jobsjs.js'
//
import theadimg from './img/other/Guardian Necklace3.png'
import {preload } from './preload/preload.js'
var $ = require("jquery")


document.body.append(nav(), preload, mainsec, herodiv)
cursor()

let section = $('#jobsmain')
let navmain = document.getElementById('navMain')
//toggleSide(sidenav, section, navmain)
//document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundColor = 'dimgrey'
document.body.style.backgroundSize = 'cover'
//document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition= 'center top'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

window.onload = function(){
  let updates = document.getElementById('updates')
  let infoInf = document.getElementById('infoInf')
  let upd = document.querySelectorAll('h3 a')[0]
  upd.onclick = function(){
    infoInf.style.display = 'none'
    updates.style.display = 'block'
    let about = document.querySelectorAll('h3 a')[1]
    about.onclick = function(){
      infoInf.style.display = 'block'
      updates.style.display = 'none'
    }
  }

function el1(el1, fontsize){
  let s = 0;
  el1.style.fontSize = 0
  let start = setInterval(function(){
    el1.style.fontSize = s >= fontsize ? fontsize+'px' : s+1 + 'px'
    s++
  },4)
  setTimeout(function() {
    clearInterval(start)
  }, 1000)
}
function picInside(el,arr) {
  let start = setInterval(function(){
    let rand = Math.floor(Math.random() * arr.length)
    el.src = arr == jobImagesComplete ? arr.[rand].children[0].src : arr[rand].src || arr[rand]
    el.style.opacity = 0
    el.style.transition = '1s'
    el.style.opacity = 1
  }, 2000)
  setTimeout(function(){
    clearInterval(start)
  }, 7999)
}

  let divs = Array.from(document.getElementsByClassName('div'))
    let i = divs.length-1
  divs[i].style.opacity = 1
  divs[i].style.position = 'inherit'
  setTimeout(function(){
    let skip = document.getElementById('skip')
    skip.style.display = 'block'
    div1Fn()
  }, 2000)
  function div1Fn() {
  //  let divs = Array.from(document.getElementsByClassName('div'))

    i = i > divs.length-1 ? 0 : i
    Array.from(divs[i].children[0].children).map(txt => {
      txt.style.fontSize = 0
    })

    let next = i == divs.length-1 ? 0 : i+1
    divs[i].style.transition = '1s'
    divs[i].style.opacity = 0
    divs[i].style.position = 'absolute'
    divs[next].style.transition = '1.3s'
    divs[next].style.opacity = 1
    divs[next].style.position = 'inherit'
    switch (i) {
      case 1:
    //    picInside(divs[next].children[1].children[0], descend)
        break;
      case 0:
    //    picInside(divs[next].children[1].children[0], jobImagesComplete)
        break;
      case 2:
      //  picInside(divs[next].children[1].children[0], unknown)
        break;
      case 3:
            console.log(divs[i])
      //  picInside(divs[next].children[1].children[0], charsImagesComplete)
        break;
      case 4:
    //    picInside(divs[next].children[1].children[0], treasures)
        break;
      case 5:
      //  picInside(divs[next].children[1].children[0], charsImagesComplete)
        break;
      default:

    }

    el1(divs[next].children[0].children[0], 48)
    setTimeout(function(){
      el1(divs[next].children[0].children[1], 40)
    },600)
    setTimeout(function(){
      el1(divs[next].children[0].children[2], 54)
    },1200)
    i++
  }
/*  setTimeout(function(){
    divs[0].style.transition = '1.3s'
    divs[0].style.opacity = 1
    divs[0].style.position = 'inherit'
    el1(divs[0].children[0].children[0], 48)
    setTimeout(function(){
      el1(divs[0].children[0].children[1], 40)
    },600)
    setTimeout(function(){
      el1(divs[0].children[0].children[2], 54)
    },1200)
    picInside(divs[0].children[1].children[0], charsImagesComplete)
  },2000)
  setTimeout(function(){
    divs[0].style.transition = '1.3s'
    divs[0].style.opacity = 0
    divs[0].style.position = 'absolute'
  }, 8000)*/
  setInterval(div1Fn, 8000)

}

//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
