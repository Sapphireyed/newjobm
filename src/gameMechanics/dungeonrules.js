import '../style.scss';
//import '../jobs.scss';
import './dungeonrules.scss'
import nav from '../nav/nav';
import { jobsmain } from './dungrules/drulesmain.js'
import {dungeon, drulesDataAll, passiveFinale, chapters, abilities, jobsData, characters} from '../abilitiesData.js'
import { getMatImgs, getAbilImgs, getJobImgs, getCharsImages, matImagesComplete, jobImagesComplete} from '../img/imgsHTML.js'
import { rules } from '../importImgs'
import { jobsTable } from './dungrules/drulesTable.js'
import { stickyNav, cursor } from '../basicfn/stickyNav.js'
import { language } from '../basicfn/language.js'
import { showIcon, hideIcon } from '../basicfn/hoverIcons.js'
import { toggle} from '../basicfn/toggle.js'
import { drules} from './dungrules/drulesjs.js'
import { sideDiv, toggleSide } from '../side/side.js'
import theadimg from '../img/other/BadTissueAub.PNG'
var $ = require("jquery")
import tablesorter from 'tablesorter';
import {preload } from '../preload/preload.js'
import { localization, descriptions, passivesNamesLoc } from '../local/local.js'
import { getAllKeys } from '../basicfn/getAllKeys.js'
import { changeMenu } from '../basicfn/changeMenu.js'

document.body.append(nav(),preload, jobsmain, sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#drulesmain')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section, navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition = 'top center'
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}
document.getElementById('langSel').addEventListener('change', function () {
    document.querySelector('tbody').innerHTML = '';
    language();
    loadAll()
})
function loadAll() {
    if (localStorage.getItem('language')) {
        document.getElementById('langSel').value = localStorage.getItem('language')
    }
    localization.skills().then(skill => {
        localization.words()
        localization.wiki()
        localization.passives().then(p => {

            localization.abils().then(c => descriptions.abilities().then(b => descriptions.passives().then(a => {
                localization.rules().then(r => {
                abilities.units()
                    .then(unit => {
                        abilities.passivesFn()
                            .then(pass => {
                                dungeon.rules()
                                    .then(dr => {
                                        drules()
                                        $('.myTable').tablesorter();
                                        //localization
                                        getAllKeys()
                                        let keysVals = getAllKeys()
                                        let jobsHeaderEl = document.querySelector('#drulesmain h1')
                                        jobsHeaderEl.innerHTML = keysVals.find(word => word.key == 'DungeonRules').value

                                        document.getElementById('search').previousElementSibling.innerText = keysVals.find(word => word.key == 'Search').value

                                        Array.from(document.querySelector('#jobsThead').children).map(thead => {
                                            let val = keysVals.find(word => word.key == thead.id)
                                            if (val) thead.innerHTML = val.value
                                        })
                                        //tooltips
                                        changeMenu()
                                                    let tips = Array.from(document.querySelectorAll('.tooltipMy:nth-child(odd)'))
                                                    tips.map(tip => {
                                                        if (tip.classList.contains('tooltiptext') == false) {
                                                            let name = tip.parentNode.innerText.split('-')[1].trim()
                                                            console.log(passiveFinale)
                                                            let descArr = passiveFinale.map(pass => pass.split(':<br>'))
                                                            let desc = descArr.filter(p => p[0] == name)[0][1]
                                                            tip.children[0].innerHTML = desc
                                                            tip.children[0].backgroundColor = 'grey'

                                                        }
                                                        // coloring red Rules
                                                        let redRule = Array.from(document.querySelectorAll('td:nth-child(6)'))
                                                        redRule = redRule.map(rule => rule.innerText == '' ? '' : rule.parentNode.classList.add('redRule'))

                                                        // Icons on sides of the table
                                                        /* let abilrows = Array.from(document.querySelectorAll('tr'))
                                                         abilrows.shift()
                                                         for (var i = 0; i < abilrows.length; i++) {
                                                             //  tooltipsFn(abilrows[i])
                                                             let name = abilrows[i].children[2].innerText.replace(/ /g, '')
                                                             abilrows[i].addEventListener('mousemove', function () {
                                                                 showIcon(name, rules)
                                                             })
                                                             abilrows[i].addEventListener('mouseleave', function () {
                                                                 hideIcon(rules)
                                                             })
                                                         }*/
                                                    })

                                    })

                            })
                    })
                })

            })))
        })
    })



}

window.onload = loadAll()
//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
