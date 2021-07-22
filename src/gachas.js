import './style.scss';
import './gachas.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
import nav from './nav/nav';
import { gachasmain} from './gachas/gachasmain.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle } from './basicfn/toggle.js'
import { language } from './basicfn/language.js'
import { localization } from './local/local.js'
import { changeMenu } from './basicfn/changeMenu.js'
import theadimg from './img/traits/BrokenDefend.PNG'
import {preload } from './preload/preload.js'
var $ = require("jquery")

document.body.append(nav(), preload, gachasmain)
cursor()

let section = $('#jobsmain')
let navmain = document.getElementById('navMain')
//toggleSide(sidenav, section, navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition= 'center center'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

document.getElementById('langSel').addEventListener('change', function () {
    language()
    loadAll()
})

function loadAll() {
    localization.wiki()
        .then(loc => {
            localization.words()
                .then(word => {
                    changeMenu()
                })
        })
    if (localStorage.getItem('language')) {
        document.getElementById('langSel').value = localStorage.getItem('language')
    }

  let skip = Array.from(document.getElementsByClassName('skip'))
  skip[0].style.animation = 'skipTop 20s linear infinite alternate'
  skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
}
loadAll()

let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
