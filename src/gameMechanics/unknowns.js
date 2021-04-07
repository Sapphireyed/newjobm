import '../style.scss';
import '../home.scss';

import nav from '../nav/nav';
import { herodiv, herodiv2 } from '../home/homemain.js'
import { stickyNav, cursor } from '../basicfn/stickyNav.js'
import { toggle } from '../basicfn/toggle.js'
import theadimg from '../img/other/spacestoneBg.png'
import stonesrc from '../img/other/spaseStoneSol.png'
import { preload } from '../preload/preload.js'
var $ = require("jquery")


document.body.append(nav(), preload, herodiv, herodiv2)
cursor()

let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
let targetWidth = 768;
let targetMid = 1000


document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundColor = 'dimgrey'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition = 'left top'

var headernav = document.getElementById("navMain");
window.addEventListener('scroll', function () {
    stickyNav(headernav)
    if (w > targetMid) {
        document.getElementById('herodiv').style.top = headernav.getBoundingClientRect().bottom + 'px'
        document.getElementById('herodiv2').style.top = headernav.getBoundingClientRect().bottom + 'px'
    }
})

window.onload = function () {

    let section = document.createElement('section')
    section.id = 'soonSect'
    let comingsoon = document.createElement('h1')
    comingsoon.innerHTML = 'COMING SOON'
    comingsoon.id = 'comingsoon'
    section.appendChild(comingsoon)
    document.body.append(section)

    let stones = document.createElement('div')
    stones.id = 'stones'
    let stone = document.createElement('img')
    stone.src = stonesrc
    stone.className = 'stone'
    let stonei = 0
    while (stonei <= 9) {
        stones.appendChild(stone.cloneNode(true))
        stonei++
    }
    document.body.appendChild(stones)

    let skip = Array.from(document.getElementsByClassName('skip'))
    skip[0].style.animation = 'skipTop 20s linear infinite alternate'
    skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
}

let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
