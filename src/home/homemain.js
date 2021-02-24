import { charsImagesComplete, getCharsImages, getJobImgs, jobImagesComplete} from '../img/imgsHTML'
import { characters, charsAllInfo, jobsData} from '../abilitiesData'
import book from '../img/other/book2.png'
import dice from '../img/events/HeroEssence.png'
import sapphire from '../img/events/ghostRed.png'
import gplay from '../img/google-play-badge.png'
import chosseHero from '../img/other/chooseHero.png'
var $ = require("jquery")
//import "turn-js";

export {herodiv,mainsec}

jobsData.jobs()
.then(job => {
  getJobImgs()
})

let mainsec = document.createElement('section')
let info = document.createElement('div')
info.style.backgroundImage = 'url("' + book + '")'
info.style.backgroundSize = 'contain'
info.classList.add('row')
info.id = 'info'
let infoInf = document.createElement('div')
infoInf.classList.add('col-6')
infoInf.id = 'infoInf'
let smallHead = document.createElement('h3')
smallHead.innerHTML = 'Jobmania - Etarnal Dungeon'
let desc = document.createElement('h5')
desc.innerHTML = 'is a roguelite dungeon crawler with a strategic deck-building and turn-based combat.'
let features = document.createElement('ul')
features.innerHTML = '<br><li><img src="' + dice + '"> Procedural enemies and event generation</li>'
                   + '<li><img src="' + dice + '"> 300+ Heroess</li>'
                   + '<li><img src="' + dice + '"> 200+ Jobs</li>'
                   + '<li><img src="' + dice + '"> 800+ Abilities</li>'
                   + '<li><img src="' + dice + '"> 20+ Chapters</li></br>'
let summary = document.createElement('h5')
summary.innerHTML = 'Countless combinations ensure great replayability. Try various builds, choose different paths'
let dicepic = document.createElement('img')
dicepic.id = 'dice'
dicepic.src = sapphire
infoInf.append(smallHead, desc, features, summary, dicepic)

let change = document.createElement('div')
change.classList.add('col-6')
change.id = 'change'

let div1 = document.createElement('div')
div1.classList.add('row', 'div')
div1.id = 'div1'
let img1 = document.createElement('img')
img1.classList.add('col-6')
img1.src = chosseHero
let txt = document.createElement('div')
txt.classList.add('col-6')
txt.id = 'txtdiv'
let txtp1 = document.createElement('h1')
txtp1.classList.add('txt')
txtp1.innerText = 'Choose'
let txtp2 = document.createElement('h1')
txtp2.classList.add('txt')
txtp2.innerText = 'Your'
let txtp3 = document.createElement('h1')
txtp3.classList.add('txt')
txtp3.innerText = 'Hero'
txt.append(txtp1, txtp2, txtp3)
div1.append(txt, img1)

let div2 = document.createElement('div')
div2.classList.add('row', 'div')
div2.id = 'div2'
let img2 = document.createElement('img')
img2.classList.add('col-6')
img2.src = chosseHero
let txt2 = document.createElement('div')
txt2.classList.add('col-6')
txt2.id = 'txtdiv'
let txt2p1 = document.createElement('h1')
txt2p1.classList.add('txt')
txt2p1.innerText = 'Assign'
let txt2p2 = document.createElement('h1')
txt2p2.classList.add('txt')
txt2p2.innerText = 'a'
let txt2p3 = document.createElement('h1')
txt2p3.classList.add('txt')
txt2p3.innerText = 'Job'
txt2.append(txt2p1, txt2p2, txt2p3)
div2.append(txt2, img2)

let div3 = document.createElement('div')
div3.classList.add('row', 'div')
div3.id = 'div3'
let img3 = document.createElement('img')
img3.classList.add('col-6')
img3.src = chosseHero
let txt3 = document.createElement('div')
txt3.classList.add('col-6')
txt3.id = 'txtdiv'
let txt3p1 = document.createElement('h1')
txt3p1.classList.add('txt')
txt3p1.innerText = 'Descend'
let txt3p2 = document.createElement('h1')
txt3p2.classList.add('txt')
txt3p2.innerText = 'into the'
let txt3p3 = document.createElement('h1')
txt3p3.classList.add('txt')
txt3p3.innerText = 'Dungeon'
txt3.append(txt3p1, txt3p2, txt3p3)
div3.append(txt3, img3)

let playBtnDiv = document.createElement('div')
playBtnDiv.id = 'gplay'
let playimg = document.createElement('img')
playimg.src= gplay
playBtnDiv.appendChild(playimg)
change.append(div1, div2, div3, playBtnDiv)
info.append(change, infoInf)
//info.innerHTML= '<br><br><br><br><br>'
let charCont = document.createElement('div')
charCont.id = 'wrapper'
charCont.innerHTML = '<br><br><br><br><br><br>'
mainsec.append(info, charCont)

let herodiv = document.createElement('div')
herodiv.classList.add('row')
herodiv.id = 'herodiv'


characters.chars()
  .then(char=> {
    getCharsImages()
    
  let i = 0
  while ( i <= 11) {
    let rand = Math.floor(Math.random() * charsImagesComplete.length)
    let imgi = document.createElement('div')
    imgi.classList.add('col', 'charimg')
    imgi.id = 'img'+i
    imgi.innerHTML = charsImagesComplete[rand].outerHTML
    herodiv.append(imgi)
    i++
  }
  let ind = 0
  while ( ind <= 11) {
    let rand = Math.floor(Math.random() * charsImagesComplete.length)
    let imgind = document.getElementById('img' + ind)
    imgind.innerHTML = imgind.innerHTML + charsImagesComplete[rand].outerHTML
    ind++
  }
  let charimgsAll = Array.from(document.getElementsByClassName('charimg'))
  charimgsAll.map(chimg => {
    Array.from(chimg.children).map(child => {
      child.style.position = 'absolute'
      child.style.top = '0'
      child.style.left = '0'
      child.style.height = '100px'
    })
    chimg.children[1].style.opacity = 0
  //  chimg.children[1].classlist.add('hidden')
  })
  let charimgs =document.getElementsByClassName('charimg')
setInterval(function(){
  let rand = Math.floor(Math.random() * charsImagesComplete.length)
  let rand2 = Math.floor(Math.random() * charsImagesComplete.length)
  let randimg = Math.floor(Math.random() * charimgs.length)
  let imgToChange = charimgs[randimg]

  if (imgToChange.children[1].classList.contains('hidden')) {
    imgToChange.children[0].src = charsImagesComplete[rand].src
    imgToChange.children[0].style.transition = '1.8s';
    imgToChange.children[0].style.opacity = 1;
    imgToChange.children[1].style.transition = '1.8s';
    imgToChange.children[1].style.opacity = 0;
    imgToChange.children[1].classList.remove('hidden')
  } else {
    imgToChange.children[1].src = charsImagesComplete[rand2].src
    imgToChange.children[1].style.transition = '1.8s';
    imgToChange.children[1].style.opacity = 1;
    imgToChange.children[0].style.transition = '1.8s';
    imgToChange.children[0].style.opacity = 0;
    imgToChange.children[1].classList.add('hidden')
  }
//  let imgToChange2 = $('#img' + randimg)
}, 2000)

  })
