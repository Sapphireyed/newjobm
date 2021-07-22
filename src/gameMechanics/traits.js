import '../style.scss';
//import '../gloss.scss';
import './traits.scss';
import nav from '../nav/nav';
import { glossarymain } from './traits/traitsmain.js'
import {traitsAll, traitsDataAll} from '../abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete} from '../img/imgsHTML.js'
import { traits } from '../importImgs.js'
import { stickyNav, cursor } from '../basicfn/stickyNav.js'
import { language } from '../basicfn/language.js'
import { glossFn, applyTableFn } from './traits/traitsjs.js'
import theadimg from '../img/traits/joker.png'
import {preload } from '../preload/preload.js'
var $ = require("jquery")
import { toggle } from '../basicfn/toggle.js'
import { localization, descriptions } from '../local/local.js'
import { getAllKeys } from '../basicfn/getAllKeys.js'
import { changeMenu } from '../basicfn/changeMenu.js'

//let bgimg = document.createElement('img')
//bgimg.id = 'bgimg'
//bgimg.src = bg

document.body.append( preload, nav(), glossarymain)
cursor()
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition = 'center 30%'
//add sticky nav
setTimeout(function(){
  var headernav = document.getElementById("navMain");
  window.onscroll = function() {
    stickyNav(headernav)
  }
}, 500)
document.getElementById('langSel').addEventListener('change', function () {
    document.querySelector('tbody').innerHTML = '';
    language();
    loadAll();
})
function loadAll() {
    if (localStorage.getItem('language')) {
        document.getElementById('langSel').value = localStorage.getItem('language')
    }
    localization.skills()
    localization.words()
    localization.wiki()
    localization.abils().then(c => descriptions.abilities().then(b => descriptions.passives().then(t => {
        localization.passives()
        localization.traits().then(trait => {
            traitsAll.traitsFn()
                .then(trait => {
                    getAbilImgs()
                    function localization() {
                        //localization
                        getAllKeys()
                        let keysVals = getAllKeys()
                        let jobsHeaderEl = document.querySelector('#glossarymain h1')
                        jobsHeaderEl.innerHTML = keysVals.find(word => word.key == 'Materials').value

                        document.getElementById('search').previousElementSibling.innerText = keysVals.find(word => word.key == 'Search').value
                        document.getElementById('glossButton').innerText = keysVals.find(word => word.key == 'JobsTraits').value
                        document.getElementById('applyButton').innerText = keysVals.find(word => word.key == 'AbilitiesTraits').value

                        Array.from(document.querySelector('#abilsThead').children).map(thead => {
                            let val = keysVals.find(word => word.key == thead.id)
                            if (val) thead.innerHTML = val.value
                        })
                        Array.from(document.querySelector('#glossTable #abilsThead').children).map(thead => {
                            let val = keysVals.find(word => word.key == thead.id)
                            if (val) thead.innerHTML = val.value
                        })
                        
                    }
                    localization()

                    glossFn()
                    changeMenu()
                    let glossTable = document.getElementById('abilsBody')
                    let applyTable = document.getElementById('applyBody')
                    let button1 = document.getElementById('glossButton')
                    let button2 = document.getElementById('applyButton')
                    let imgsonSide = Array.from(document.querySelectorAll('.traitimg'))
                    button1.style.backgroundColor = '#c09601'

                    button1.onclick = function () {
                        switchTable(glossTable, applyTable)
                        changesrc(2)
                        this.style.backgroundColor = '#c09601'
                        button2.style.backgroundColor = 'rgba(192, 150, 1, 0.5);'
                        imgsonSide.map(img => img.style.width = '200px')
                    }
                    let index = 0
                    let pageList = traitsDataAll
                    let end = [];
                    button2.onclick = function (pageList) {
                        this.style.backgroundColor = '#c09601'
                        button1.style.backgroundColor = 'rgba(192, 150, 1, 0.5);'
                        if (index == 0) {
                            applyTableFn()
                        }
                        switchTable(applyTable, glossTable)
                        changesrc(3)
                        imgsonSide.map(img => img.style.width = '150px')
                        //  let rows = Array.from(document.querySelectorAll('#applyBody tr'))
                        //rows.map(row => row.children.length < 3 ? row.style.display = 'none' : row)
                    }
                    function switchTable(table, table2) {
                        table.style.display = 'table-row-group';
                        table2.style.display = 'none'
                    }
                    let replay = document.querySelectorAll('.navbtns img:nth-child(1)')
                    let stop = document.querySelectorAll('.navbtns img:nth-child(2)')
                    let play = document.querySelectorAll('.navbtns img:nth-child(3)')
                    let traitimg = Array.from(document.querySelectorAll('.traitimg'))
                    console.log(play)
                    play[0].onclick = function () {
                        traitimg.map(img => img.style.animation = 'rotation 5s infinite linear')
                    }
                    play[1].onclick = function () {
                        traitimg.map(img => img.style.animation = 'rotation 5s infinite linear')
                    }
                    stop[0].onclick = function () {
                        traitimg.map(img => img.style.animation = 'rotation 0')
                    }
                    stop[1].onclick = function () {
                        traitimg.map(img => img.style.animation = 'rotation 0')
                    }
                    replay[0].onclick = function () {
                        traitimg.map(img => {
                            let rand = Math.floor(Math.random() * Object.entries(traits).length)
                            img.src = Object.entries(traits)[rand][1]
                        })
                    }
                    replay[1].onclick = function () {
                        traitimg.map(img => {
                            let rand = Math.floor(Math.random() * Object.entries(traits).length)
                            img.src = Object.entries(traits)[rand][1]
                        })
                    }
                    changesrc(2)
                    function changesrc(nameInd) {
                        // Icons on sides of the table
                        let abilrows = Array.from(document.querySelectorAll('tr'))
                        abilrows.shift()
                        for (var i = 0; i < abilrows.length; i++) {
                            //  tooltipsFn(abilrows[i])
                            let name = abilrows[i].children[nameInd].innerText.toLowerCase() + '.png'
                            abilrows[i].addEventListener('mousemove', function () {
                                traitimg.map(img => img.src = Object.entries(traits).find(src => src[0].toLowerCase() == name)[1])
                            })
                            abilrows[i].addEventListener('mouseleave', function () {
                                traitimg.map(img => {
                                    let rand = Math.floor(Math.random() * Object.entries(traits).length)
                                    img.src = Object.entries(traits)[rand][1]
                                })
                            })
                        }
                    }
                    let skip = Array.from(document.getElementsByClassName('skip'))
                    skip[0].style.animation = 'skipTop 20s linear infinite alternate'
                    skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
                })
        })
    })))
    
}

loadAll()


let togglebtn = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, togglebtn)
