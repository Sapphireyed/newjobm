import './style.scss';
import './gloss.scss';
import nav from './nav/nav';
import { glossarymain } from './glossary/glossarymain.js'
import {abilities, jobsData} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { glossFn, applyTableFn } from './glossary/glossjs.js'
import theadimg from './img/traits/costlyPower.PNG'
import {preload } from './preload/preload.js'
var $ = require("jquery")
import { toggle } from './basicfn/toggle.js'
import { localization, descriptions } from './local/local.js'
import { changeMenu } from './basicfn/changeMenu.js'
import { getAllKeys } from './basicfn/getAllKeys.js'
import { language } from './basicfn/language.js'

//let bgimg = document.createElement('img')
//bgimg.id = 'bgimg'
//bgimg.src = bg
let bgimg = document.createElement('img')
bgimg.src = theadimg
bgimg.id = 'bgimg'
document.body.append( nav(), glossarymain)
document.body.innerHTML = '<div id="wrapper"><div id="subwrapper">' + document.body.innerHTML + '</div></div>'
cursor()
let body = document.getElementById('wrapper')
body.append(preload)
body.style.backgroundImage = 'url("' + theadimg + '")'
body.style.backgroundSize = 'cover'
body.style.backgroundAttachment = 'fixed'
body.style.backgroundPosition = 'center center'
body.style.backgroundRepeat = 'no-repeat'
//add sticky nav
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}

document.getElementById('langSel').addEventListener('change', function () {
    document.querySelector('tbody').innerHTML = '';
    document.querySelectorAll('tbody')[1].innerHTML = '';
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
        localization.abils().then(c => descriptions.abilities().then(a => {
            descriptions.glossary()
            abilities.units()
                .then(data => {
                    //  abilities.passivesFn()
                    abilities.glossary()
                        .then(res => {
                            changeMenu()
                            getAbilImgs()

                            getAllKeys()
                            let keysVals = getAllKeys()
                            let jobsHeaderEl = document.querySelector('#glossarymain h1')
                            jobsHeaderEl.innerHTML = keysVals.find(word => word.key == 'Glossary').value

                            document.getElementById('search').previousElementSibling.innerText = keysVals.find(word => word.key == 'Search').value
                            document.getElementById('glossButton').innerText = keysVals.find(word => word.key == 'BuffsOrDebuffs').value
                            document.getElementById('applyButton').innerText = keysVals.find(word => word.key == 'ApplyKeywords').value

                            Array.from(document.getElementById('abilsThead').children).map(thead => {
                                let val = keysVals.find(word => word.key == thead.id)
                                if (val) thead.innerHTML = val.value
                            })

                            //
                            let glossTable = document.getElementById('glossTable')
                            let applyTable = document.getElementById('applyTable')
                            let button1 = document.getElementById('glossButton')
                            let button2 = document.getElementById('applyButton')
                            button1.style.backgroundColor = '#725142'

                            button1.onclick = function () {
                                switchTable(glossTable, applyTable)
                                glossFn()
                                this.style.backgroundColor = '#725142'
                                button2.style.backgroundColor = 'rgba(170, 108, 78, .5)'
                                document.body.style.overflowX = 'visible'

                            }
                            button2.onclick = function () {
                                this.style.backgroundColor = '#725142'
                                button1.style.backgroundColor = 'rgba(170, 108, 78, .5)'
                                let trs = document.querySelectorAll('#applyTable tr')
                                //    if (trs.length < 3) {
                                applyTableFn()
                                //  }
                                switchTable(applyTable, glossTable)
                                document.body.style.overflowX = 'visible'
                            }
                            button1.click()
                            function switchTable(table, table2) {
                                table.style.display = 'block';
                                table2.style.display = 'none'
                            }


                        })
                })
        }))
    })
}
loadAll()


let togglebtn = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, togglebtn)
