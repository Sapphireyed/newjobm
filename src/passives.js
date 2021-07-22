import './style.scss';
import './passives.scss';
import nav from './nav/nav';
import { passivesmain } from './passives/passivesmain.js'
import {abilities, jobsData,abilitiesAllInfo,characters} from './abilitiesData.js'
import { getAbilImgs, abilImagesComplete, getJobImgs } from './img/imgsHTML.js'
import { passivesFn } from './passives/passivesjs.js'
import theadimg from './img/Materials/Guardian Necklace.png'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { language } from './basicfn/language.js'
import { toggle} from './basicfn/toggle.js'
import { jobs } from './abilitiesData.js'
import { sideDiv, toggleSide } from './side/side.js'
var $ = require("jquery")
import { preload } from './preload/preload.js'
import 'regenerator-runtime/runtime';
import {
    localization, descriptions,
    fireName, waterName, windName, earthName, thunderName, darkName, lightName,
    strName, hpName, agiName, intName, protectName
} from './local/local.js';
import { getAllKeys } from './basicfn/getAllKeys.js'
import { changeMenu } from './basicfn/changeMenu.js'

document.body.append( nav(),preload, passivesmain,sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#passives')
let navmain = document.getElementById('abilsmain')
toggleSide(sidenav, section,navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundPosition = 'center center'
document.body.style.backgroundAttachment = 'fixed'

var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

document.getElementById('langSel').addEventListener('change', function () {
    document.querySelector('tbody').innerHTML = '';
    language();
    loadAll()
})

async function loadAll() {
    if (localStorage.getItem('language')) {
        document.getElementById('langSel').value = localStorage.getItem('language')
    }
    localization.skills().then(skill => {
        localization.words()
        localization.wiki()
        localization.abils().then(c => descriptions.abilities().then(b => descriptions.passives().then(a => {
            localization.passives()
            localization.characters()
            localization.materials()
            localization.jobs()
                .then(j => {
                    jobsData.jobs()
                    abilities.units()
                        .then(j => {
                            changeMenu()
                            abilities.abils()
                            characters.chars()
                            abilities.glossary()
                            abilities.passivesFn()
                                .then(res => {
                                    getAllKeys()
                                    //localization
                                    let keysVals = getAllKeys()
                                    let jobsHeaderEl = document.querySelector('#passives h1')
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

                                    //passives filter
                                    document.getElementById('whenSel').parentNode.querySelector('label').innerText = keysVals.find(word => word.key == 'Passive').value
                                    document.querySelectorAll('#whenSel option')[0].innerText = keysVals.find(word => word.key == 'All').value
                                    Array.from(document.querySelectorAll('#whenSel option')).map(apply => {
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
                                    passivesFn()
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


            
        })))
           
    })

    


}
loadAll()



let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
