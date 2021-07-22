import './style.scss';
import './jobs.scss';
import nav from './nav/nav';

import { jobsmain } from './jobs/jobsmain.js'
import {abilities, jobsData, descFinale, passiveFinale, abilTraits, passiveTraits} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { language } from './basicfn/language.js'
import { toggle} from './basicfn/toggle.js'
import { jobs} from './jobs/jobsjs.js'
import { sideDiv, toggleSide } from './side/side.js'
import theadimg from './img/Jobs/BG/inthp.jpg'
import {preload} from './preload/preload.js'
var $ = require("jquery")
import {changeMenu} from './basicfn/changeMenu.js'
import {
    localization, descriptions, wordsLoc, wikiWords,
    fireName, waterName, windName, earthName, thunderName, darkName, lightName,
    burnName, chillName, seedName, dizzyName, paralysysName, depressName, blindName, venomName, insaneName, bleedName, injuryName, restrainName,
    strName, hpName, agiName, intName, protectName 
} from './local/local.js';
import { getAllKeys } from './basicfn/getAllKeys.js'

document.body.append(preload, nav(), jobsmain, sideDiv)

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
        localization.abils().then(c => descriptions.abilities().then(b => descriptions.passives().then(a => {
            localization.passives()
            localization.characters()
            changeMenu()
            localization.jobs().then(localJob => {
                    abilities.units().then(j => {
                        abilities.abils().then(ab => {
                            //localization
                            let keysVals = getAllKeys()
                            let jobsHeaderEl = document.querySelector('#jobs h1')
                            jobsHeaderEl.innerHTML = keysVals.find(word => word.key == 'Jobs').value

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
                                        apply.innerText =earthName;
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

                            document.getElementById('searchin').previousElementSibling.innerText = keysVals.find(word => word.key == 'SearchIn').value
                          //  document.querySelectorAll('#searchin option')[0].innerText = keysVals.find(word => word.key == 'Both').value
                            document.querySelectorAll('#searchin option')[1].innerText = keysVals.find(word => word.key == 'Passive').value
                          //  document.querySelectorAll('#searchin option')[2].innerText = keysVals.find(word => word.key == 'Switch').value


                            document.getElementById('jobsclear').innerText = keysVals.find(word => word.key == 'Reset').value
                            document.getElementById('start').innerText = keysVals.find(word => word.key == 'Search').value

                            document.getElementById('chooselvl').previousElementSibling.innerText = keysVals.find(word => word.key == 'ChangeLvl').value
                            document.getElementById('jobmCrystal').previousElementSibling.innerText = keysVals.find(word => word.key == 'Search').value
                            document.getElementById('lvlbtns').children[0].innerText = keysVals.find(word => word.key == 'Reset').value
                            document.getElementById('lvlbtns').children[1].innerText = keysVals.find(word => word.key == 'Apply').value
                            document.getElementById('search').previousElementSibling.innerText = keysVals.find(word => word.key == 'Search').value

                            Array.from(document.getElementById('jobsThead').children).map(thead => {
                                let val = keysVals.find(word => word.key == thead.id)
                                if (val) thead.innerHTML = val.value
                            })

                            jobsData.jobs()
                            getAbilImgs()
                            //switch imgs
                            let switchskills = document.querySelectorAll('td .tooltipMy')

                            for (var i = 0; i < switchskills.length; i++) {
                                let switchskillsimg = document.createElement('div')
                                let src = abilImagesComplete.filter(img => switchskills[i].parentNode.id == img.id)
                                if (src.length > 0) {
                                    switchskills[i].parentNode.prepend(switchskillsimg)
                                    switchskillsimg.innerHTML = src[0].outerHTML
                                }

                                //  if (switchskill[i].innerHTML)
                            }
                        })
                        abilities.passivesFn()
                    })
                jobsData.craft()
                    .then(data => {
                        jobsData.materials()
                        jobsData.jobs()
                            .then(res => {
                                //getMatImgs()
                                getJobImgs()
                                jobs()
                                setTimeout(function () {
                                    let tableRows = document.querySelectorAll('tr')

                                    var descFinaleSplit = descFinale.map(desc => desc.split(':<br>'))
                                    var passiveFinaleSplit = passiveFinale.map(desc => desc.split(':<br>'))
                                    var switchCells = document.getElementsByClassName('tooltiptext')

                                    for (var i = 0; i < switchCells.length; i++) {
                                        var switchName = switchCells[i].parentNode.innerText
                                        var tooltipsAb = descFinaleSplit.filter(desc => desc[0] == switchName)
                                        var tooltipsPass = passiveFinaleSplit.filter(desc => desc[0] == switchName)
                                        var tooltipsApply = abilTraits.map(trait => trait.split(': ')).filter(desc => desc[0] == switchName)
                                        var passApply = passiveTraits.map(trait => trait.split(': ')).filter(desc => desc[0] == switchName)

                                        tooltipsAb.map((desc, ind) => {
                                            if (desc[0] == switchName) {
                                                //  console.log(desc[1])
                                                switchCells[i].innerHTML = desc[1] + '<br> <span class="tipApply">(' + tooltipsApply[ind][1] + ')</span>'
                                                switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\(, , , \)|, ,|, , ,|\(, , , \)|\(\)|<br><br>/g, '')
                                                switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\( \)/g, '')
                                                switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/, \)/g, ')')
                                            }
                                        })

                                        tooltipsPass.map((desc, ind) => {
                                            if (desc[0] == switchName) {
                                                switchCells[i].innerHTML = desc[1] + '<br> <span class="tipApply">(' + passApply[ind][1] + ')</span>'
                                                switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\(, , , \)|, ,|, , ,|\(, , , \)|\(\)|<br><br>/g, '')
                                                switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\( \)/g, '')
                                                switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/, \)/g, ')')
                                            }
                                        })
                                    }
                                }, 2000)

                            })

                    })
            })


            // localization.materials()


        })))


    })
}

window.onload = loadAll



//console.log(abilities.find)


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
