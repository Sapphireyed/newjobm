import './style.scss';
//import './gloss.scss';
import './chars.scss';
import nav from './nav/nav';
import { glossarymain } from './chars/charsmain.js'
import {abilities, jobsData, characters, charsAllInfo} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getCharsImages, abilImagesComplete, charsImagesComplete} from './img/imgsHTML.js'
//import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { language } from './basicfn/language.js'
import { glossFn, applyTableFn } from './chars/charsjs.js'
import theadimg from './img/materials/Space Stone.png'
var $ = require("jquery")
import { toggle} from './basicfn/toggle.js'
import { sideDiv, toggleSide } from './side/side.js'
import {options2, options } from './chars/charsfilter.js'
import { preload } from './preload/preload.js'
import {
    localization, descriptions,
    fireName, waterName, windName, earthName, thunderName, darkName, lightName,
    strName, hpName, agiName, intName, protectName
} from './local/local.js';
import { changeMenu } from './basicfn/changeMenu.js'
import { getAllKeys } from './basicfn/getAllKeys.js'

//let bgimg = document.createElement('img')
//bgimg.id = 'bgimg'
//bgimg.src = bg

document.body.append( nav(),preload, glossarymain, sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#glossarymain')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section,navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition = 'center 20%'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}
window.addEventListener('load', function () {
    //change language
    document.getElementById('langSel').addEventListener('change', function () {
        document.querySelector('tbody').innerHTML = '';
        language();
        loadAll();
    })
    // main functionn
    function loadAll() {
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
                // localization.materials()

                jobsData.jobs()
                abilities.units()
                    .then(unit => {
                        abilities.passivesFn()
                        characters.charsRaw()
                            .then(ch => {
                                abilities.abils()
                                    .then(ab => {
                                        getAbilImgs()
                                        characters.chars()
                                            .then(res => {
                                                changeMenu()
                                                getCharsImages()
                                                glossFn()
                                                function localization() {
                                                    //localization
                                                    let keysVals = getAllKeys()
                                                    let jobsHeaderEl = document.querySelector('#jobs h1')
                                                    jobsHeaderEl.innerHTML = keysVals.find(word => word.key == 'Heroes').value

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

                                                    //passives filter
                                                    document.getElementById('whenSel').parentNode.querySelector('label').innerText = keysVals.find(word => word.key == 'Passive').value
                                                    document.querySelectorAll('#whenSel option')[0].innerText = keysVals.find(word => word.key == 'All').value
                                                    Array.from(document.querySelectorAll('#whenSel option')).map(apply => {
                                                        let applyVal = keysVals.find(word => word.key == apply.id)
                                                        if (applyVal) apply.innerText = applyVal.value
                                                    })

                                                    //race filter
                                                    document.getElementById('race').parentNode.querySelector('label').innerText = keysVals.find(word => word.key == 'Race').value
                                                    document.querySelectorAll('#race option')[0].innerText = keysVals.find(word => word.key == 'All').value
                                                    Array.from(document.querySelectorAll('#race option')).map(apply => {
                                                        let applyVal = keysVals.find(word => word.key == apply.id)
                                                        if (applyVal) apply.innerText = applyVal.value
                                                    })

                                                    document.getElementById('searchin').previousElementSibling.innerText = keysVals.find(word => word.key == 'SearchIn').value
                                                    //  document.querySelectorAll('#searchin option')[0].innerText = keysVals.find(word => word.key == 'Both').value
                                                    document.querySelectorAll('#searchin option')[1].innerText = keysVals.find(word => word.key == 'Passive').value
                                                    //  document.querySelectorAll('#searchin option')[2].innerText = keysVals.find(word => word.key == 'Switch').value


                                                    document.getElementById('jobsclear').innerText = keysVals.find(word => word.key == 'Reset').value
                                                    document.getElementById('start').innerText = keysVals.find(word => word.key == 'Search').value

                                                    document.getElementById('glossButton').innerText = keysVals.find(word => word.key == 'Heroes').value
                                                    document.getElementById('applyButton').innerText = keysVals.find(word => word.key == 'Enemies') == undefined ? 'Enemies' : keysVals.find(word => word.key == 'Enemies').value

                                                    document.getElementById('chooselvl').previousElementSibling.innerText = keysVals.find(word => word.key == 'ChangeLvl').value

                                                    document.getElementById('lvlbtns').children[0].innerText = keysVals.find(word => word.key == 'Reset').value
                                                    document.getElementById('lvlbtns').children[1].innerText = keysVals.find(word => word.key == 'Apply').value
                                                    document.getElementById('search').previousElementSibling.innerText = keysVals.find(word => word.key == 'Search').value

                                                    Array.from(document.getElementById('abilsThead').children).map(thead => {
                                                        let val = keysVals.find(word => word.key == thead.id)
                                                        if (val) thead.innerHTML = val.value
                                                    })
                                                    Array.from(document.querySelector('#enthead #abilsThead').children).map(thead => {
                                                        let val = keysVals.find(word => word.key == thead.id)
                                                        if (val) thead.innerHTML = val.value
                                                    })
                                                }
                                                localization()
                                                
                                                let heroesTable = document.getElementById('heroesTable')
                                                let enemiesTable = document.getElementById('enemiesTable')
                                                let navfilters = document.getElementById('navFiters')
                                                let button1 = document.getElementById('glossButton')
                                                let button2 = document.getElementById('applyButton')
                                                let level = document.getElementById('chooselvl')
                                                let raroptions = document.getElementById('rarity')
                                                //level.value = 10
                                                let start = document.querySelectorAll('#lvlbtns button')[0]
                                                let resetlvls = document.querySelectorAll('#lvlbtns button')[1]
                                                let startfilters = document.getElementById('start')
                                                let resetfilters = document.getElementById('jobsclear')
                                                let starten = document.getElementById('start2')
                                                let reseten = document.getElementById('clear2')
                                                resetlvls.click()
                                                start.click()
                                                button1.style.backgroundColor = 'rgb(3, 26, 42)'
                                                let heroes = true
                                          
                                                function heroesFn() {
                                                    
                                                    if (heroes == false) {
                                                        localization()
                                                        glossFn()
                                                        switchTable(heroesTable, enemiesTable)
                                                        this.style.backgroundColor = 'rgb(3, 26, 42)'
                                                        button2.style.backgroundColor = 'rgba(3, 26, 42, .5)'
                                                        resetlvls.click()
                                                        start.click()
                                                        resetfilters.click()
                                                        raroptions.innerHTML = options
                                                        startfilters.style.display = 'block'
                                                        resetfilters.style.display = 'block'
                                                        starten.style.display = 'none'
                                                        reseten.style.display = 'none'
                                                        heroes = true
                                                    }
                                                }
                                                button1.onclick = heroesFn
                                                button2.onclick = function () {
                                                    if (heroes == true) {
                                                        localization()
                                                        this.style.backgroundColor = 'rgb(3, 26, 42)'
                                                        button1.style.backgroundColor = 'rgba(3, 26, 42, .5)'
                                                     //   let trs = document.querySelectorAll('#applyTable tr')
                                                       // if (trs.length < 3) {
                                                            applyTableFn()
                                                            //   document.querySelectorAll('#enemiesTable thead').style.display = 'block'
                                                     //   }
                                                        switchTable(enemiesTable, heroesTable)
                                                        level.value = 100
                                                        resetlvls.click()
                                                        start.click()
                                                        reseten.click()
                                                        raroptions.innerHTML = options2
                                                        startfilters.style.display = 'none'
                                                        resetfilters.style.display = 'none'
                                                        starten.style.display = 'block'
                                                        reseten.style.display = 'block'
                                                        heroes = false
                                                    }
                                                }
                                                function switchTable(table, table2) {
                                                    table.style.display = 'table';
                                                    table2.style.display = 'none'
                                                }

                                                let skip = Array.from(document.getElementsByClassName('skip'))
                                                skip[0].style.animation = 'skipTop 20s linear infinite alternate'
                                                skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
                                            })
                                    })
                            })

                    })

            })))
        })



    }
    loadAll()
    })





let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
