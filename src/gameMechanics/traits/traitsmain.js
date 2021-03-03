import { glossfilter } from './traitsfilter.js'
import { glossTable } from './jobstraitsTable.js'
import { applyTable } from './abilstraitsTable.js'
import {traits} from '../../importImgs'
import playsrc from '../../img/other/play.png'
import pause from '../../img/other/pause.png'
import replaysrc from '../../img/other/replay.png'

let glossarymain = document.createElement('section')
glossarymain.id = 'glossarymain'
glossarymain.classList.add('row')

glossfilter.style.color = 'white'
glossfilter.classList.add('col-9')
glossfilter.append(glossTable, applyTable)
glossarymain.classList.add('section')
glossTable.classList.add('w-100')

let randomImg = document.createElement('div')
randomImg.classList.add('col-2')
randomImg.id = 'randimg'
let img = document.createElement('img')
img.classList.add('traitimg')
let img2 = document.createElement('img')
img2.classList.add('traitimg')
let img3 = document.createElement('img')
img3.classList.add('traitimg')
let rand = Math.floor(Math.random() * Object.entries(traits).length)
let rand2 = Math.floor(Math.random() * Object.entries(traits).length)
let rand3 = Math.floor(Math.random() * Object.entries(traits).length)
img.src = Object.entries(traits)[rand][1]
img2.src = Object.entries(traits)[rand2][1]
img3.src = Object.entries(traits)[rand3][1]
let navbtns = document.createElement('div')
navbtns.className = 'col-12'
navbtns.id = 'navbtns'
let play = document.createElement('img')
let stop = document.createElement('img')
let replay = document.createElement('img')
play.src = playsrc
stop.src = pause
replay.src = replaysrc
navbtns.append(replay, stop, play)
randomImg.append(navbtns, img,img2,img3)

let empty = document.createElement('div')
empty.classList.add('col-1')
glossarymain.append(glossfilter,empty, randomImg)

export {glossarymain}
