//import { init } from '../jobsjs.js'

let jobmain = document.createElement('section')
jobmain.classList.add('section', 'shadow')
//HEADER
let maindiv = document.createElement('div');
maindiv.id = 'jobmaindiv'
maindiv.className = 'row'

let header = document.createElement('h1')
header.classList.add('col-12')
header.id = 'jobheader'
maindiv.append(header)

//JOB BASIC INFO
let div1 = document.createElement('div')
div1.id = 'basicinfo'
div1.className = 'row';

let imgdiv = document.createElement('div')
let jobimg = document.createElement('img')
imgdiv.classList.add('col-2')
jobimg.alt = 'jobicon'
jobimg.src = ''
jobimg.classList.add('d-block', 'mx-auto')
imgdiv.appendChild(jobimg)

let attrs = document.createElement('div')
attrs.classList.add('col-10', 'row')
let rarity = document.createElement('div')
rarity.id = 'rarity'
let hp = document.createElement('h4')
hp.id = 'hp'
let str = document.createElement('h4')
str.id = 'str'
let agi = document.createElement('h4')
agi.id = 'agi'
let int = document.createElement('h4')
int.id = 'int'
let attrsArr = [rarity, hp, str, agi, int]
attrsArr.map(attr => {
  attr.classList.add('col', 'jobattr')
  attrs.appendChild(attr)
})

div1.append(imgdiv, attrs)

//JOB PASSIVE & SWITCH
let div2 = document.createElement('div')
div2.classList.add('row')

let passiveSkill = document.createElement('div')
passiveSkill.id = 'passiveSkill'
passiveSkill.classList.add('col')
let passiveH = document.createElement('h4')
passiveH.id = 'passiveH'
let passiveDesc = document.createElement('h5')
passiveDesc.id = 'passiveDesc'
passiveSkill.append( passiveH, passiveDesc)

let switchSkill = document.createElement('div')
switchSkill.id = 'switchSkill'
switchSkill.classList.add('col')
let switchH = document.createElement('h4')
switchH.id = 'switchH'
let switchDesc = document.createElement('h5')
switchDesc.id = 'switchDesc'
switchSkill.append(switchH, switchDesc)


div2.append(passiveSkill, switchSkill)
jobmain.append(maindiv, div1, div2)

export {jobmain}
