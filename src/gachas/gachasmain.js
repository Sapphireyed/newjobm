
import {abilities, jobsData, verlog} from '../abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete, charsImagesComplete} from '../img/imgsHTML.js'
import {gachasImgs} from '../importImgs'


import {preload } from '../preload/preload.js'
var $ = require("jquery")

export {gachasmain}

let banners = Object.entries(gachasImgs)
let gachasmain = document.createElement('section')
gachasmain.className = 'section'
let divmain = document.createElement('div')
divmain.id = 'gachalist'
let header = document.createElement('h1')
header.innerHTML = 'Gachas'
let gachaList = document.createElement('ul')
gachaList.classList.add('row')
banners.map(banner => {
  let gacha= document.createElement('li')
  gacha.innerHTML = '<img src="' + banner[1]+ '">'
  gacha.classList.add('col-md-6', 'col-12')
  console.log(banner.lastModified)
  if (banner[0] == 'Space Gacha.png' || banner[0] == 'Xmas Gacha.png') {
    gacha.style.filter = 'grayscale(95%)'
  }
  gacha.onclick = function(){
    var win = window.open('gacha.html')
    setTimeout(function() {
      let header = win.document.getElementById('header')
      header.innerHTML ='<img src="' + banner[1]+ '" id="' + banner[0] + '">'
    },2000)

  }
  gachaList.appendChild(gacha)
})
divmain.append(header, gachaList)
gachasmain.append(divmain)
