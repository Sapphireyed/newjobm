//import { search } from './basicfn/search.js';
//import GetSheetDone from 'get-sheet-done';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'popper.js';
import './style.scss';
import './home.scss';
//import './home.scss';

//import fontawesome from '@fortawesome/fontawesome-free'
//var $ = require("jquery")
import nav from './nav/nav';
import { herodiv ,mainsec} from './home/homemain.js'
import {abilities, jobsData} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete, charsImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
import { jobs} from './jobs/jobsjs.js'
import { sideDiv, toggleSide } from './side/side.js'
import theadimg from './img/traits/costlyPower.png'
//var gplay = require('google-play-scraper');
var $ = require("jquery")

//let bgimg = document.createElement('img')
//bgimg.id = 'bgimg'
//bgimg.src = bg
//let preload = document.createElement('div')
//preload.id = 'preload'

/*var start = setInterval(function(){
		gplay.app({appId: 'com.aubjective.jobmania'})
			.then((x)=>console.log(x))
	}, 50000)*/

document.body.append(nav(), mainsec, herodiv, sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#jobsmain')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section, navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition= 'center center'
document.body.style.backgroundPosition = 'center center'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

window.onload = function(){

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
    el.src = arr == jobImagesComplete ? arr.[rand].children[0].src : arr[rand].src
    el.style.opacity = 0
    el.style.transition = '1s'
    el.style.opacity = 1
  }, 2000)
  setTimeout(function(){
    clearInterval(start)
  }, 7999)
}

  let divs = Array.from(document.getElementsByClassName('div'))
  let i = 0
  function div1Fn() {
    let randChar = Math.floor(Math.random() * charsImagesComplete.length)
    let randJob = Math.floor(Math.random() * jobImagesComplete.length)
    let divs = Array.from(document.getElementsByClassName('div'))
    divs[0].children[1].src = charsImagesComplete[randChar].src
    divs[1].children[1].src = jobImagesComplete[randJob].children[0].src
    divs[2].children[1].src = charsImagesComplete[randChar+1].src
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
        picInside(divs[next].children[1], charsImagesComplete)
        break;
      case 0:
        picInside(divs[next].children[1], jobImagesComplete)
        break;
      case 2:
        picInside(divs[next].children[1], charsImagesComplete)
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
  setTimeout(function(){
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
    picInside(divs[0].children[1], charsImagesComplete)
  },2000)
  setTimeout(function(){
    divs[0].style.transition = '1.3s'
    divs[0].style.opacity = 0
    divs[0].style.position = 'absolute'
  }, 8000)
  setInterval(div1Fn, 8000)
}

//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
