import './style.scss';
import './home.scss';
import './credits.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
import nav from './nav/nav';
import { herodiv , herodiv2} from './home/homemain.js'
//import {abilities, jobsData, verlog} from './abilitiesData.js'
//import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete, charsImagesComplete} from './img/imgsHTML.js'
//import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle} from './basicfn/toggle.js'
import { jobs} from './jobs/jobsjs.js'
//
import theadimg from './img/other/spacestoneBg.png'
import stonesrc from './img/other/spaseStoneSol.png'
import {preload } from './preload/preload.js'
var $ = require("jquery")

import aub from './img/character/aub.png'
import dream from './img/character/Dream Slime Ækashics.png'
import dfs from './img/credit/DFS.png'
import icons from './img/credit/gameIcons.png'
import rangers from './img/credit/rangers.png'


document.body.append(nav(), preload, herodiv, herodiv2)
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

window.onload = function(){
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

let mainsect = document.createElement('section')
mainsect.classList.add('row', 'mainsect')
mainsect.style.color = '#cfcfcf'
mainsect.style.fontWeight = '200'
let header = document.createElement('h1')
header.classList.add('col-12')
header.innerHTML ='Credit'

let credit1 = document.createElement('div')
credit1.classList.add('col-12', 'row', 'credit')
let credit2 = credit1.cloneNode(true)
let credit3 = credit1.cloneNode(true)
let credit4 = credit1.cloneNode(true)
let credit5 = credit1.cloneNode(true)
let credit6 = credit1.cloneNode(true)

let role1 = document.createElement('h4')
role1.classList.add('col-md-5','col-12', 'role')
let role2 = role1.cloneNode(true)
let role3 = role1.cloneNode(true)
let role4 = role1.cloneNode(true)
let role5 = role1.cloneNode(true)
let role6 = role1.cloneNode(true)
role1.innerHTML = 'Creator:'
role2.innerHTML = 'BGM Music:'
role3.innerHTML = 'Character Arts:'
role4.innerHTML = 'Rangers Arts:'
role5.innerHTML = 'Icon Arts:'

let name1 = document.createElement('h4')
name1.classList.add('name')
let name2 = name1.cloneNode(true)
let name3 = name1.cloneNode(true)
let name4 = name1.cloneNode(true)
let name5 = name1.cloneNode(true)
let name6 = name1.cloneNode(true)
name1.innerHTML = 'Aubjective Aub<br><a href="mailto: aubjective2020@gmail.com"><em>aubjective2020@gmail.com<em><a>'
name2.innerHTML = 'Dark Fantasy Studio<br>'
                + '<a href="https://www.facebook.com/darkfantasystudio/" target="_blank">https://www.facebook.com/darkfantasystudio/</a>'
                + '<a href="https://twitter.com/darkfantasystud" target="_blank">https://twitter.com/darkfantasystud</a>'
                + '<a href="https://www.youtube.com/channel/UCjfrwtG6UekZJyYRki3OfEw" target="_blank">https://www.youtube.com/channel/UCjfrwtG6UekZJyYRki3OfEw</a>'
name3.innerHTML = 'Aekashics<br><a href="https://www.patreon.com/aekashics/posts" target="_blank">https://www.patreon.com/aekashics/posts</a>'
name4.innerHTML = 'Arkalagna<br><a href="https://www.fiverr.com/arkalagna/draw-an-cartoon-comic-and-anything" target="_blank">https://www.fiverr.com/arkalagna/draw-an-cartoon-comic-and-anything</a>'
name5.innerHTML = 'Game-icons.net<br><a href="https://game-icons.net/" target="_blank">https://game-icons.net/</a>'

let img1div = document.createElement('div')
let img2div = img1div.cloneNode(true)
let img3div = img1div.cloneNode(true)
let img4div = img1div.cloneNode(true)
let img5div = img1div.cloneNode(true)

let name1div = document.createElement('div')
let img1 = document.createElement('img')
img1.src = aub
img1div.append(img1)
name1div.classList.add('row', 'col-md-4', 'col-12')
name1.classList.add('col-md-6', 'col-12')
img1div.classList.add('col-lg-6', 'col-12', 'img')
name1.append(img1div)
name1div.append(name1, img1div)

let name2div = document.createElement('div')
let img2 = document.createElement('img')
img2.src = dfs
img2.style.width = '120px'
img2div.append(img2)
name2div.classList.add('row', 'col-md-4', 'col-12')
name2.classList.add('col-md-6', 'col-12')
img2div.classList.add('col-md-6', 'col-12', 'img')
name2.append(img2div)
name2div.append(name2, img2div)

let name3div = document.createElement('div')
let img3 = document.createElement('img')
img3.src = dream
img3div.append(img3)
name3div.classList.add('row', 'col-md-4', 'col-12')
name3.classList.add('col-md-6', 'col-12')
img3div.classList.add('col-md-6', 'col-12', 'img')
name3.append(img3div)
name3div.append(name3, img3div)

let name4div = document.createElement('div')
let img4 = document.createElement('img')
img4.src = rangers
img4.style.width = '100px'
img4div.append(img4)
name4div.classList.add('row', 'col-md-4', 'col-12')
name4.classList.add('col-md-6', 'col-12')
img4div.classList.add('col-md-6', 'col-12', 'img')
name4.append(img4div)
name4div.append(name4,img4div)

let name5div = document.createElement('div')
let img5 = document.createElement('img')
img5.src = icons
img5div.append(img5)
name5div.classList.add('row', 'col-md-4', 'col-12')
name5.classList.add('col-md-6', 'col-12')
img5div.classList.add('col-md-6', 'col-12', 'img')
name5.append(img5div)
name5div.append(name5, img5div)

credit1.append(role1, name1div)
credit2.append(role2, name2div)
credit3.append(role3, name3div)
credit4.append(role4, name4div)
credit5.append(role5, name5div)
// /credit6.append(role6, name6)

let toggleNames = [name1,name2,name3,name4,name5]
console.log(toggleNames)
toggleNames.map(tn => {
  tn.onclick = function() {
    console.log('boo')
    $('a', this).toggle()
  }
})

mainsect.append(header, credit1, credit2, credit3, credit4, credit5)

let designed = document.createElement('div')
designed.classList.add('designed')
let designedTxt = document.createElement('h6')
designedTxt.innerHTML = '<em>Web designed by ........</em>'
designed.append(designedTxt)

document.body.append(mainsect, designed)
/*  let stones = Array.from(document.getElementsByClassName('stone'))
  let index = 0
  let randTop = [5, 75, 45, 25, 35, 15]
  stones.map(st => {
    setInterval(function(){
      let rand = Math.floor(Math.random() * randTop.length)
      st.style.transform = 'rotate(' + randTop[rand] + 'deg)'
      st.style.top = randTop[rand] + '%'
      st.style.left = randTop[rand] + '%'
      st.style.width = randTop[rand]/4 + '%'
      console.log(randTop[rand])
    }, 25000)

})*/
let skip = Array.from(document.getElementsByClassName('skip'))
skip[0].style.animation = 'skipTop 20s linear infinite alternate'
skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
}

//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
