import './style.scss';
import '../abils.scss';
import nav from './nav/nav';
import { sideDiv, toggleSide } from './side/side.js'
import { abilsmain } from './abilities/abilsmain.js'
import {abilities, characters, jobsData, abilitiesAllInfo} from './abilitiesData.js'
import { getAbilImgs, abilImagesComplete, getJobImgs } from './img/imgsHTML.js'
import { abilitiesFn } from './abilities/abilitiesjs.js'
import theadimg from './img/Traits/Dumb.png'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { language } from './basicfn/language.js'
import { toggle} from './basicfn/toggle.js'
import { jobs } from './abilitiesData.js'
import { preload } from './preload/preload.js'
import {
    localization, descriptions,
    fireName, waterName, windName, earthName, thunderName, darkName, lightName,
    strName, hpName, agiName, intName, protectName
} from './local/local.js';
import { changeMenu } from './basicfn/changeMenu.js'
import { getAllKeys } from './basicfn/getAllKeys.js'
var $ = require("jquery")

document.body.append( nav(),preload, abilsmain, sideDiv)

cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#abilsmain')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section,navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

window.addEventListener('load', loadAll)
document.getElementById('langSel').addEventListener('change', function () {
    document.querySelector('tbody').innerHTML = '';
    language()
    loadAll()
})
function loadAll() {
        if (localStorage.getItem('language')) {
            document.getElementById('langSel').value = localStorage.getItem('language')
        }
    let lang = document.getElementById('langSel').value
    console.log(lang)
    //localization.materials()
    localization.skills()
    localization.words()
    localization.wiki()
    localization.abils()
    localization.materials()
    localization.jobs()
    descriptions.abilities()
    localization.characters()
        .then(l => {
            abilities.units()
                .then(data => {
                    getAllKeys()
                    abilities.passivesFn()
                    abilities.glossary()
                    abilities.abils()
                        .then(res => {
                            //localization
                            let keysVals = getAllKeys()
                            let jobsHeaderEl = document.querySelector('#abilsmain h1')
                            jobsHeaderEl.innerHTML = keysVals.find(word => word.key == 'Abilities').value

                            // attributes filter
                            document.getElementById('attrSel').parentNode.querySelector('label').innerText = keysVals.find(word => word.key == 'Attribute').value
                            document.querySelectorAll('#attrSel option')[0].innerText = keysVals.find(word => word.key == 'All').value
                            document.querySelectorAll('#attrSel option')[1].innerText = hpName
                            document.querySelectorAll('#attrSel option')[2].innerText = strName
                            document.querySelectorAll('#attrSel option')[3].innerText = agiName
                            document.querySelectorAll('#attrSel option')[4].innerText = intName

                            //rarity filter
                            document.getElementById('rarity').parentNode.querySelector('label').innerText = keysVals.find(word => word.key == 'Rarity').value
                            document.querySelectorAll('#rarity option')[0].innerText = keysVals.find(word => word.key == 'All').value

                            //apply filter
                            document.getElementById('apply').parentNode.querySelector('label').innerText = keysVals.find(word => word.key == 'Apply').value
                            document.querySelectorAll('#apply option')[0].innerText = keysVals.find(word => word.key == 'All').value
                            Array.from(document.querySelectorAll('#apply option')).map(apply => {
                                switch (apply.id) {
                                    case 'Fire':
                                        apply.innerText = fireName;
                                        break;
                                    case 'Water':
                                        apply.innerText = waterName;
                                        break;
                                    case 'Earth':
                                        apply.innerText = earthName;
                                        break;
                                    case 'Wind':
                                        apply.innerText = windName;
                                        break;
                                    case 'Thunder':
                                        apply.innerText = thunderName;
                                        break;
                                    case 'Light':
                                        apply.innerText = lightName;
                                        break;
                                    case 'Dark':
                                        apply.innerText = darkName;
                                        break;
                                }

                                let applyVal = keysVals.find(word => word.key == apply.id)
                                if (applyVal) {
                                    apply.innerText = applyVal.value
                                    apply.value = applyVal.value
                                }
                            })

                            //element filter
                            document.getElementById('element').parentNode.querySelector('label').innerText = keysVals.find(word => word.key == 'Element').value
                            document.querySelectorAll('#element option')[0].innerText = keysVals.find(word => word.key == 'All').value
                            Array.from(document.querySelectorAll('#element option')).map(apply => {
                                switch (apply.id) {
                                    case 'Fire':
                                        apply.innerText = fireName;
                                        break;
                                    case 'Water':
                                        apply.innerText = waterName;
                                        break;
                                    case 'Earth':
                                        apply.innerText = earthName;
                                        break;
                                    case 'Wind':
                                        apply.innerText = windName;
                                        break;
                                    case 'Thunder':
                                        apply.innerText = thunderName;
                                        break;
                                    case 'Light':
                                        apply.innerText = lightName;
                                        break;
                                    case 'Dark':
                                        apply.innerText = darkName;
                                        break;
                                }
                            })

                            //type filter
                            document.getElementById('type').parentNode.querySelector('label').innerText = keysVals.find(word => word.key == 'Type').value
                            document.querySelectorAll('#type option')[0].innerText = keysVals.find(word => word.key == 'All').value
                            Array.from(document.querySelectorAll('#type option')).map(apply => {
                                let applyVal = keysVals.find(word => word.key == apply.id)
                                if (applyVal) apply.innerText = applyVal.value
                            })

                            document.getElementById('jobsclear').innerText = keysVals.find(word => word.key == 'Reset').value
                            document.getElementById('start').innerText = keysVals.find(word => word.key == 'Search').value
                            document.getElementById('search').previousElementSibling.innerText = keysVals.find(word => word.key == 'Search').value

                            Array.from(document.getElementById('abilsThead').children).map(thead => {
                                let val = keysVals.find(word => word.key == thead.id)
                                if (val) thead.innerHTML = val.value
                            })


                            //
                            changeMenu()
                            getAbilImgs()
                            abilitiesFn()
                            let skip = Array.from(document.getElementsByClassName('skip'))
                            skip[0].style.animation = 'skipTop 20s linear infinite alternate'
                            skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
                        })
                })

            characters.chars()
            characters.charsRaw()
            jobsData.jobs()
            jobsData.craft()
                .then(data => {
                    jobsData.materials()
                })
        })
    
}
loadAll()


let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
