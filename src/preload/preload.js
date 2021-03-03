import michael from '../img/character/archangel Michael.png'
import thanatos from '../img/character/Death Thanatos.png'
import lonely from '../img/character/The Lonely Queen.png'
import pizarro from '../img/character/Legendary Knight Pizarro.png'
import aphylia from '../img/character/Life Titan Aphylia.png'


import jobmJ from '../img/other/jobmJ.png'
import obmania from '../img/other/obmania.png'
import eternal from '../img/other/eternal.png'
import dark from '../img/materials/dark spirit.png'
import light from '../img/materials/light spirit.png'
import power from '../img/traits/costlyPower.png'
import bless from '../img/traits/Blessed.png'
import badTissue from '../img/materials/earth Spirit.png'
import cryst from '../img/materials/jobmania Crystal.png'

export {preload}

let chars = [pizarro, thanatos, lonely, michael, aphylia]
 document.body.style.overflow = 'hidden'
let preload = document.createElement('div')
preload.style.width = screen.width + 'px'
preload.style.height = screen.height + 'px'
preload.id = 'preload'
let preloaddiv =document.createElement('div')
preloaddiv.id = 'preloaddiv'
let jimg = document.createElement('img')
jimg.style.backgroundImage = 'url("' + jobmJ + '")'
jimg.src = jobmJ
jimg.id = 'jimg'
let jwidth = jimg.clientWidth
let jheight = jimg.clientHeight
let obmaniaimg = document.createElement('img')
obmaniaimg.src = obmania
obmaniaimg.id = 'obmania'
let obmheight = obmaniaimg.height
let eternalimg = document.createElement('img')
eternalimg.src = eternal
let skip = document.createElement('a')
skip.innerHTML = 'Skip'
skip.id = 'skip'
skip.onclick = function(){
  preload.style.transition = '0.8s'
  preload.style.opacity = 0
  preload.style.zIndex = -100
  preloaddiv.style.animation = 'none'
  chardiv.style.animation = 'none'
  document.body.style.overflow = 'visible'
  setTimeout(function(){
    preload.style.display = 'none'
  },400)
}
preloaddiv.append(jimg, obmaniaimg, eternalimg)

let chardiv = document.createElement('div')
chardiv.id = 'chardiv'
let char = document.createElement('img')
let rand = Math.floor(Math.random() * chars.length)
//char.src = lonely//chars[rand]
char.id = 'hero'
chardiv.appendChild(char)
preload.append(preloaddiv, skip, chardiv)
let imgs = Array.from(document.querySelectorAll('#preload img:not(#hero)'))
let ind = Math.floor(Math.random() * chars.length)

switch (ind) {
  case 0:
    preload.style.backgroundImage = 'url(' + dark + ')'
    preload.style.backgroundPosition = 'center center'
    char.style.width = '200px'
    char.src = lonely
    break;
  case 1:
    preload.style.backgroundImage = 'url(' + cryst + ')'
    preload.style.backgroundPosition = 'center top'
    jimg.style.filter = 'brightness(0) invert(1)'
    obmaniaimg.style.filter = 'brightness(0) invert(1)'
    eternalimg.style.filter = 'brightness(0) invert(1)'

    char.src = michael
    break;
  case 2:
    preload.style.backgroundImage = 'url(' + power + ')'
    preload.style.backgroundPosition = 'center top'
    jimg.style.filter = 'brightness(0) invert(1)'
    obmaniaimg.style.filter = 'brightness(0) invert(1)'
    eternalimg.style.filter = 'brightness(0) invert(1)'

    char.src = thanatos
    break;
  case 3:
    preload.style.backgroundImage = 'url(' + light + ')'
    preload.style.backgroundPosition = 'center top'
    jimg.style.filter = 'brightness(0) invert(1)'
    obmaniaimg.style.filter = 'brightness(0) invert(1)'
    eternalimg.style.filter = 'brightness(0) invert(1)'

    char.src = aphylia
    break;
  case 4:
    preload.style.backgroundImage = 'url(' + badTissue + ')'
    preload.style.backgroundPosition = 'center center'
  //  jimg.style.filter = 'brightness(0) invert(1)'
  //  obmaniaimg.style.filter = 'brightness(0) invert(1)'
  //  eternalimg.style.filter = 'brightness(0) invert(1)'

    char.src = pizarro
      break;
  default:

}
preload.style.backgroundSize = 'cover'

setTimeout(function(){
    jimg.style.transform = 'scale(1.5)'
    char.style.transform = 'scale(2)'
}, 1)
setTimeout(function(){
      obmaniaimg.style.height = jimg.height * 0.55 * 1.5 + 'px'
      eternalimg.style.top = obmheight + 'px'
      obmaniaimg.style.width = jimg.width * 0.95 + 'px'

}, 1501)
setTimeout(function(){
    eternalimg.style.height = jimg.width * 0.15 + 'px'
    eternalimg.style.width = jimg.width * 0.71 + 'px'
  //  obmaniaimg.style.right = '5px'

}, 3002)
setTimeout(function() {
  preloaddiv.style.animation = 'pulse 1.5s infinite ease-in-out alternate'
  chardiv.style.animation = 'pulse 1.5s infinite ease-in-out alternate'

},4000)

/*setTimeout(function(){
  preloaddiv.style.animation = 'none'
  chardiv.style.animation= 'none'
},10000)*/
setTimeout(function(){
  document.getElementById('preload').style.transition = '1.1s'
  document.getElementById('preload').style.opacity = 0
  document.getElementById('preload').style.zIndex = -100
  preloaddiv.style.animation = 'none'
  chardiv.style.animation = 'none'
 document.body.style.overflow = 'visible'
}, 8000)

setTimeout(function(){
  preload.style.display = 'none'
},9000)
