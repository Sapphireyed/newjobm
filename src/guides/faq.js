import '../style.scss';
import './faq.scss'

import nav from '../nav/nav';
import { stickyNav, cursor } from '../basicfn/stickyNav.js'
import { toggle} from '../basicfn/toggle.js'
import { faq, faqDataAll} from '../abilitiesData.js'
import theadimg from '../img/materials/secret training.png'
import stonesrc from '../img/other/spaseStoneSol.png'
import {preload } from '../preload/preload.js'
import { elements, elStatuses} from './elements.js'
var $ = require("jquery")



document.body.append(nav(), preload)
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

})

window.onload = function(){
faq.faq()
  .then(f => {
    console.log(faqDataAll)

let mainsect = document.createElement('section')
mainsect.classList.add('row')

let maindiv = document.createElement('div')
maindiv.classList.add('col-lg-6', 'col-12')
maindiv.id = 'mainfaq'
let collapse = document.createElement('a')
collapse.innerHTML = ' + '
let quest7 = document.createElement('div')
let quest7q = document.createElement('h4')
quest7q.id = 'note'
quest7q.innerHTML = '<em>Please always make sure you\'re using the latest version of the game in order to avoid potential bugs.</em>'
quest7.append(quest7q,)
maindiv.appendChild(quest7)
faqDataAll.map(f => {
  let quest1 = document.createElement('div')
  let quest1q = document.createElement('h4')
  let quest1a = document.createElement('p')
  quest1q.innerHTML = f[0]
  quest1q.append(collapse.cloneNode(true))
  quest1a.innerHTML = f[1].replace(/\|/g, '<br>')
  console.log(f[1].replace(/\\n/g, '<br>'))
  quest1.append(quest1q, quest1a)
  console.log(quest1)
  maindiv.append(quest1)
})


/*let quest2 = document.createElement('div')
let quest2q = document.createElement('h4')
let quest2a = document.createElement('p')
quest2q.innerHTML = 'How do I buy the F21/31/41/etc. checkpoint?'
quest2q.append(collapse.cloneNode(true))
quest2a.innerHTML = 'You need to wait a day to purchase the next checkpoint. The market resets at daily refresh.'
quest2.append(quest2q, quest2a)

let quest3 = document.createElement('div')
let quest3q = document.createElement('h4')
let quest3a = document.createElement('p')
quest3q.innerHTML = 'How do I upgrade heroes past level 10?'
quest3q.append(collapse.cloneNode(true))
quest3a.innerHTML = 'You can get dupes from the gacha, or you can climb floors (the latter is highly recommended). Climbing floors will allow leveling up your hero with Hero Essence.'
                  + 'Reaching the following floors will allow you to raise the level cap:<br>'
                  + 'F150: Up to +20<br>'
                  + 'F250: Up to +30<br>'
                  + 'F300: Up to +40<br>'
                  + 'F350: Up to +50'
quest3.append(quest3q, quest3a)

let quest4 = document.createElement('div')
let quest4q = document.createElement('h4')
let quest4a = document.createElement('p')
quest4q.innerHTML = 'How do I farm heroes to their maximum level?'
quest4q.append(collapse.cloneNode(true))
quest4a.innerHTML = 'Step 1 - Trigger the Special Gacha as described above<br>'
                  + 'Step 2 - Knock out the desired unit in your run'
                  + 'Step 3 : Utilize checkpoints to knock out the desired unity repeatedly'
quest4.append(quest4q, quest4a)

let quest5 = document.createElement('div')
let quest5q = document.createElement('h4')
let quest5a = document.createElement('p')
quest5q.innerHTML = 'What is Cross Combo and how do I use it?'
quest5q.append(collapse.cloneNode(true))
quest5a.innerHTML = 'There are two types of Cross Combo.'
                  + 'Both require you to use a different type of ability (STR/AGI/INT/HP) at exactly Combo Count 5 or 10 (multiples do not work).'
quest5.append(quest5q, quest5a)

let quest6 = document.createElement('div')
let quest6q = document.createElement('h4')
let quest6a = document.createElement('p')
quest6q.innerHTML = 'How do I update to the latest version of the app?'
quest6q.append(collapse.cloneNode(true))
quest6a.innerHTML = 'Under your phones settings, go to the application, the play store, and remove the local cache.'
                  + 'Then you can update successfully'
quest6.append(quest6q, quest6a)

let quest8 = document.createElement('div')
let quest8q = document.createElement('h4')
let quest8a = document.createElement('p')
quest8q.innerHTML = 'What do the ‘start’ and ‘end’ numbers inside boxes signify?'
quest8q.append(collapse.cloneNode(true))
quest8a.innerHTML = 'These are indicators of what is going to happen to you or your enemy on turn end/start.<br>'
                    + '<span style="color:red">Red:</span> damage to the enemy (or you if this is the enemy’s box)<br>'
                    + '<span style="color:purple">Purple:</span> self-damage (poison, restrain, etc.)<br>'
                    + '<span style="color:green">Green:</span> heal self<br>'
                    + '<span style="color:yellow">Yellow:</span> protect self<br>'
                    + 'Tapping the job skill icon will show the colored number value to know how much '
                    + '<span style="color:red">damage</span>/'
                    + '<span style="color:green">heal</span>/'
                    + '<span style="color:yellow">protect</span>/'
                    + 'self damage resulted in that job\'s active abilities.'

quest8.append(quest8q, quest8a)

let quest9 = document.createElement('div')
let quest9q = document.createElement('h4')
let quest9a = document.createElement('p')
quest9q.innerHTML = 'What is AP?'
quest9q.append(collapse.cloneNode(true))
quest9a.innerHTML = 'AP or Action Points are needed in order to do many actions in Job Mania. Switching jobs (after the first free switch), using ability cards to do damage, heal, buff, debuff etc are all based on the AP available.'
                  + '<br>Some actions require AP, but you can switch jobs to use their active ability for free once each turn. It’s free, and we recommend using these to your advantage.'


quest9.append(quest9q, quest9a)

let quest10 = document.createElement('div')
let quest10q = document.createElement('h4')
let quest10a = document.createElement('p')
quest10q.innerHTML = 'What are Jobs?'
quest10q.append(collapse.cloneNode(true))
quest10a.innerHTML = 'Jobs are the classes in Job Mania and each comes with a different starting deck of Ability Cards. Each job also may come with Passive and/or Active abilities which could activate at the beginning, during or at the end of the battle. The Jobs themselves can be anything from straight up damage, to healing, buffing/debuffing, DoTs etc with many flavors in between. '
                    + 'Each Job has a rank, with 1 Star being a basic Job to 5 Star being the highest tier. Jobs can also be combined with certain items to create new, higher tier Jobs.'



quest10.append(quest10q, quest10a)*/
setTimeout(function(){
  let toggleNames = Array.from(document.querySelectorAll('#mainfaq h4'))

  toggleNames.map(tn => {
    tn.onclick = function() {
      $(this).parent().find('p').toggle()
      this.children[0].innerHTML == ' + ' ? $(this).parent().find('a').html(' - ') : $(this).parent().find('a').html(' + ')
    }
  })
})

//maindiv.append(quest7, quest6, quest1, quest2, quest3, quest4, quest5, quest8, quest9,quest10)


mainsect.append(elements, maindiv, elStatuses)
document.body.appendChild(mainsect)
let skip = Array.from(document.getElementsByClassName('skip'))
skip[0].style.animation = 'skipTop 20s linear infinite alternate'
skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
})
}

//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
