import './style.scss';
import './jobs.scss';
import './chapt.scss'
import nav from './nav/nav';
import { jobsmain } from './chapters/chaptmain.js'
import {chapters, abilities, jobsData, characters} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, getCharsImages, abilImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './chapters/chaptTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { toggle } from './basicfn/toggle.js'
import { language } from './basicfn/language.js'
import { chaptersFn} from './chapters/chaptjs.js'
import { sideDiv, toggleSide } from './side/side.js'
import theadimg from './img/Materials/Thunder Spirit.png'
import { changeMenu } from './basicfn/changeMenu.js'
var $ = require("jquery")
import { preload } from './preload/preload.js'
import { localization, descriptions } from './local/local.js';
import { getAllKeys } from './basicfn/getAllKeys.js'

document.body.append(nav(),preload, jobsmain, sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#jobsmain')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section, navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

window.onload = function () {
    document.getElementById('langSel').addEventListener('change', function () {
        document.querySelector('tbody').innerHTML = '';
        language()
        loadAll()
    })
    function loadAll() {
        if (localStorage.getItem('language')) {
            document.getElementById('langSel').value = localStorage.getItem('language')
        }
        localization.skills().then(skill => {
            localization.words()
            localization.wiki()
            localization.abils().then(c => descriptions.abilities().then(b => {
                localization.chapters()
                localization.characters()
                    .then(c => {
                        characters.chars()
                            .then(char => {
                                getAbilImgs()
                                getCharsImages()
                            }).then(ch => {
                                changeMenu()
                                chapters.chapt()
                                    .then(chapt => {
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
                                        chaptersFn()
                                        let skip = Array.from(document.getElementsByClassName('skip'))
                                        skip[0].style.animation = 'skipTop 20s linear infinite alternate'
                                        skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
                                    })
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
