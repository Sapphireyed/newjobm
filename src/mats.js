import './style.scss';
//import './jobs.scss';
import './mats.scss'
import nav from './nav/nav';
import { changeLang } from './nav/nav';
import { jobsmain } from './mats/matsmain.js'
import {chapters, abilities, jobsData, characters} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, getCharsImages, matImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './mats/matsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { language } from './basicfn/language.js'
import { toggle} from './basicfn/toggle.js'
import { matsFn} from './mats/matsjs.js'
import { sideDiv, toggleSide } from './side/side.js'
import theadimg from './img/Materials/Water Spirit.png'
var $ = require("jquery")
import { preload } from './preload/preload.js'
import { localization, descriptions } from './local/local.js';
import { getAllKeys } from './basicfn/getAllKeys.js'
import { changeMenu } from './basicfn/changeMenu.js'

document.body.append(nav(),preload, jobsmain, sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#jobsmain')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section, navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundPosition = 'center top'
//document.body.style.backgroundAttachment = 'fixed'
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

window.onload = function () {


    document.getElementById('langSel').addEventListener('change', function () {
    })
    function loadAll() {
        if (localStorage.getItem('language')) {
            document.getElementById('langSel').value = localStorage.getItem('language')
        }
        localization.skills().then(skill => {
            localization.words()
            localization.wiki()
            localization.abils().then(c => descriptions.abilities().then(b => {
                localization.materials()
                localization.jobs()
                jobsData.jobs()

                    .then(job => {
                        changeMenu()
                        jobsData.materials()
                            .then(mat => {
                                jobsData.craft()
                                getMatImgs()
                                abilities.units()
                                    .then(unit => {
                                        abilities.abils()
                                        abilities.passivesFn()
                                    })
                            }).then(m => {
                                //localization
                                getAllKeys()
                                let keysVals = getAllKeys()
                                let jobsHeaderEl = document.querySelector('#jobsmain h1')
                                jobsHeaderEl.innerHTML = keysVals.find(word => word.key == 'Materials').value

                                document.getElementById('search').previousElementSibling.innerText = keysVals.find(word => word.key == 'Search').value

                                Array.from(document.getElementById('jobsThead').children).map(thead => {
                                    let val = keysVals.find(word => word.key == thead.id)
                                    if (val) thead.innerHTML = val.value
                                })

                                matsFn()
                                let skip = Array.from(document.getElementsByClassName('skip'))
                                skip[0].style.animation = 'skipTop 20s linear infinite alternate'
                                skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
                            })
                    })
            }))
        })


    }
    loadAll()
}


//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
