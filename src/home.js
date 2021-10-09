import './style.scss';
import './home.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
import nav from './nav/nav';
import { herodiv ,mainsec, herodiv2} from './home/homemain.js'
import {abilities, jobsData, verlog} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete, charsImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
import { jobs } from './jobs/jobsjs.js'
import { materialsLocal, matsLoc } from './local/local.js';
//
import theadimg from './img/other/spacestoneBg.png'
import stonesrc from './img/other/spaseStoneSol.png'
import { preload } from './preload/preload.js'
import { localization } from './local/local.js'
import { changeMenu } from './basicfn/changeMenu.js'
var $ = require("jquery")


document.body.append(nav(), preload, mainsec, herodiv, herodiv2)
cursor()
//let playBtnDiv = document.getElementById('gplay')

let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
let targetWidth = 768;
let targetMid = 1000

let section = $('#jobsmain')
let navmain = document.getElementById('navMain')
//toggleSide(sidenav, section, navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundColor = 'dimgrey'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition= 'left top'
//add sticky nav
var headernav = document.getElementById("navMain");
window.addEventListener('scroll', function() {
  stickyNav(headernav)
  if (w > targetMid) {
    document.getElementById('herodiv').style.top = headernav.getBoundingClientRect().bottom + 'px'
    document.getElementById('herodiv2').style.top = headernav.getBoundingClientRect().bottom + 'px'
  }
})

window.onload = function () {
    
  let stones = document.createElement('div')
  stones.id= 'stones'
let stone = document.createElement('img')
stone.src = stonesrc
stone.className = 'stone'
let stonei = 0
while (stonei<= 9) {
  stones.appendChild(stone.cloneNode(true))
  stonei++
}
document.body.appendChild(stones)

let header = document.querySelectorAll('.maininf h1')[0]
let headersplit = header.innerHTML.split('<br>')
headersplit[0] = headersplit[0].split('').map(h => h = '<span class="head">' + h + '</span>').join('')
headersplit[2] = headersplit[2].split('').map(h => h = '<span class="head">' + h + '</span>').join('')
header.innerHTML = headersplit[0] + '<br><span class="eternal">' + headersplit[1] + '</span><br>' + headersplit[2]

//add hithere animaton to the otherghost
let ghost = document.getElementsByClassName('ghostdiv')[0].children[0]
setInterval(function() {
  ghost.style.animation = 'hithere 7s ease infinite'
},8000)

    if (localStorage.getItem('language')) {
        document.getElementById('langSel').value = localStorage.getItem('language')
    }

    localization.words()
    localization.wiki()
    localization.abils()
    localization.passives()
    localization.characters()
    localization.jobs()
        .then(loc => {
            changeMenu()
            function el1(el1, fontsize) {
                let s = 0;
                el1.style.fontSize = 0
                let start = setInterval(function () {
                    el1.style.fontSize = s >= fontsize ? fontsize + 'px' : s + 1 + 'px'
                    s++

                }, 4)
                setTimeout(function () {
                    el1.style.fontSize = fontsize + 'px'
                    clearInterval(start)
                }, 1000)
            }
            function picInside(el, arr) {
                let start = setInterval(function () {
                    let rand = Math.floor(Math.random() * arr.length)
                    el.src = arr == jobImagesComplete ? arr[rand].children[0].src : arr[rand].src || arr[rand]
                    el.style.opacity = 0
                    el.style.transition = '1s'
                    el.style.opacity = 1
                }, 2000)
                setTimeout(function () {
                    clearInterval(start)
                }, 7999)
            }

            let divs = Array.from(document.getElementsByClassName('div'))
            let i = divs.length - 1
            divs[i].style.opacity = 1
            divs[i].style.position = 'inherit'
            setTimeout(function () {
                let skip = Array.from(document.getElementsByClassName('skip'))
                skip[0].style.animation = 'skipTop 20s linear infinite alternate'
                skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
                skip[2].style.animation = 'skipLeft 20s linear infinite alternate'
                skip[3].style.animation = 'skipRight 20s linear infinite alternate'
                div1Fn()
            }, 2000)
            function div1Fn() {
                //  let divs = Array.from(document.getElementsByClassName('div'))

                i = i > divs.length - 1 ? 0 : i
                Array.from(divs[i].children[0].children).map(txt => {
                    txt.style.fontSize = 0
                })
                divs[i].children[2].style.fontSize = 0
                let next = i == divs.length - 1 ? 0 : i + 1
                divs[i].style.transition = '1s'
                divs[i].style.opacity = 0
                divs[i].style.position = 'absolute'
                divs[next].style.transition = '1.3s'
                divs[next].style.opacity = 1
                divs[next].style.position = 'inherit'


                el1(divs[next].children[0].children[0], 48)
                setTimeout(function () {
                    el1(divs[next].children[0].children[1], 40)
                }, 600)
                setTimeout(function () {
                    el1(divs[next].children[2], 54)
                }, 1200)
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
        })


}

//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
