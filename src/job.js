import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import './style.scss';
import './job.scss';
import { sideDiv, toggleSide } from './side/side.js'
var $ = require("jquery")
import 'tablesorter'
import nav from './nav/nav';
import { jobmain } from './jobs/job/jobmain.js'
import { init, jobValues } from './jobs/jobsjs.js'
import { jobsImgs } from './importImgs.js'
import { openNew } from './basicfn/openNew.js'
import {getMatImgs, getJobImgs, getAbilImgs, matImagesComplete, jobImagesComplete, abilImagesComplete} from './img/imgsHTML.js'
import {abilities,
        jobsData, jobsDataAll, jobsStats, craft, mats,
        descFinale, abilSkills, abilEffects, abilTraits,
        passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        appliesAllInfo} from './abilitiesData.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { preload } from './preload/preload.js'
import { localization, descriptions } from './local/local.js'
import { changeMenu } from './basicfn/changeMenu.js'

document.body.append(nav(),preload, jobmain, sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#jobmainsect')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section,navmain)

abilities.units().then(unit => {
  abilities.abils()
  abilities.passivesFn()
})

window.onload = function () {
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
            jobsData.craft()
            jobsData.jobs()
                .then(j => {
                    getJobImgs()
                    setTimeout(function () {
                        changeMenu()
                        // jobicon
                        let jobmain = document.getElementById('jobimg')
                        let jobmain2 = document.getElementById('jobimg2')
                        var header = document.getElementById('jobheader')
                        console.log(header)
                        console.log(jobheader.innerHTML)
                        let currentjobImg = jobImagesComplete.filter(img => img.id == jobheader.innerHTML)

                        jobmain.innerHTML = currentjobImg[0].outerHTML
                        jobmain2.innerHTML = currentjobImg[0].outerHTML
                        //bg imgs
                        let jobsrc = Object.entries(jobsImgs).filter(img => img[0] == jobheader.innerHTML + '.png')
                        document.body.style.backgroundImage = 'url("' + jobsrc[0][1] + '")'
                        document.body.style.backgroundSize = '190px'
                    }, 1500)
                }).then(d => {
                    abilities.abils().then(f => {
                        abilities.passivesFn()

                        getAbilImgs()
                    }).then(d => {
                        setTimeout(function () {
                            // abilities icons
                            let switchimg = document.getElementById('switchimg')
                            var switchH = document.getElementById('switchH')
                            switchH = switchH.innerHTML.split(':')[1].trim()

                            let currentSwitchImg = abilImagesComplete.filter(img => img.id == switchH)
                            switchimg.innerHTML = currentSwitchImg[0].outerHTML

                            let cardHname = Array.from(document.querySelectorAll('#deck h5')).map(h => {
                                let ext = h.innerHTML.indexOf('(')
                                let name = h.innerHTML.substring(0, ext - 1)
                                return name
                            })

                            let card1img = document.getElementById('card1img')
                            let currentCard1Img = abilImagesComplete.filter(img => img.id == cardHname[0])

                            card1img == null ? '' : card1img.innerHTML = currentCard1Img[0].outerHTML

                            let card2img = document.getElementById('card2img')
                            let currentCard2Img = abilImagesComplete.filter(img => img.id == cardHname[1])
                            card2img == null ? '' : card2img.innerHTML = currentCard2Img[0].outerHTML

                            let card3img = document.getElementById('card3img')
                            let currentCard3Img = abilImagesComplete.filter(img => img.id == cardHname[2] || img.id == cardHname[1])
                            card3img == null ? '' : card3img.innerHTML = currentCard3Img[0].outerHTML

                            let card4img = document.getElementById('card4img')
                            let currentCard4Img = abilImagesComplete.filter(img => img.id == cardHname[3] || img.id == cardHname[2] || img.id == cardHname[1])
                            card4img == null ? '' : card4img.innerHTML = currentCard4Img[0].outerHTML
                        })

                        // change jobsStats
                        let changelvl = document.getElementById('levelSel')
                        let stats = Array.from(document.getElementsByClassName('spanattr'))
                        let jobmCryst = document.getElementById('jobmCrystal')
                        if (document.getElementById('rarity').children.length == 6) {
                            document.querySelectorAll('#lvlbtns button')[0].onclick = function () {
                                stats.map(stat => stat.innerHTML = Math.ceil(stat.id / 10 * changelvl.value) + Math.ceil((stat.id / 10 * changelvl.value) * jobmCryst.value / 10))
                            }
                            document.querySelectorAll('#lvlbtns button')[1].onclick = function () {
                                changelvl.value = 10
                                document.getElementById('jobmCrystal').value = 0
                                stats.map(stat => stat.innerHTML = Math.ceil(stat.id / 10 * changelvl.value) + Math.ceil((stat.id / 10 * changelvl.value) * jobmCryst.value / 10))
                            }
                        } else {
                            changelvl.onchange = function () {
                                stats.map(stat => stat.innerHTML = Math.ceil(stat.id / 10 * this.value))
                            }
                            jobmCryst.onchange = function () {
                                stats.map(stat => stat.innerHTML = Math.ceil(stat.id / 10 * changelvl.value) + Math.ceil((stat.id / 10 * changelvl.value) * jobmCryst.value / 10))
                            }
                        }
                    }, 1500)


                    jobsData.materials().then(d => {
                        getMatImgs()
                        // crafting
                        console.log(document.getElementById('craftmat'))
                        let matName = document.getElementById('craftmat').nextElementSibling.innerHTML
                        let craftmat = document.querySelectorAll('.craftmat span:nth-child(2)')
                        let craftmatparent = document.getElementById('craftmat')
                        let craftmatPic = document.querySelectorAll('.craftmat span:nth-child(1)')

                        let craftjob = document.querySelectorAll('.craftjob span:nth-child(2)')
                        let craftjobPic = document.querySelectorAll('.craftjob span:nth-child(1)')
                        for (var i = 0; i < craftmat.length; i++) {  // matimgs
                            let name = craftmat[i].innerHTML
                            matImagesComplete.map(m => {
                                name == m.id ? craftmatPic[i].innerHTML = m.outerHTML + '<br>' : ''
                            })
                            craftmatPic[i].innerHTML == '' ? craftmatPic[i].parentNode.parentNode.nextSibling.remove() : ''
                            craftmatPic[i].innerHTML == '' ? craftmatPic[i].parentNode.parentNode.remove() : ''

                        }
                        for (var i = 0; i < craftjob.length; i++) {  //jobimgs
                            let name = craftjob[i].innerHTML
                            jobImagesComplete.map(m => {
                                name == m.id ? craftjobPic[i].innerHTML = m.outerHTML + '<br>' : ''
                            })
                            craftjobPic[i].innerHTML == '' ? craftjobPic[i].parentNode.parentNode.nextSibling.remove() : ''
                            craftjobPic[i].innerHTML == '' ? craftjobPic[i].parentNode.parentNode.remove() : ''
                        }
                        //
                        let craftjobname = document.querySelectorAll('.craft.craftjob')
                        for (var i = 0; i < craftjobname.length; i++) {
                            let name = craftjobname[i].innerText

                            craftjobname[i].addEventListener('click', function () {

                                let ind = jobsDataAll.filter(job => job[1] == name.trim())
                                ind = parseInt(ind[0])
                                openNew('job', jobsDataAll, ind, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills, passiveEffects, passiveTraits)
                            })
                        }
                        // apply tooltips
                        /*abilities.glossary().then(p=>{
                          let switchDesc= document.getElementById('switchDesc')
                          switchDesc == undefined ? '' : switchDesc.onmouseenter = tip(switchDesc)
                          let passiveDesc= document.getElementById('passiveDesc')
                          passiveDesc == undefined ? '' : passiveDesc.onmouseenter = tip(passiveDesc)
                          let card1desc= document.getElementById('card1desc')
                          card1desc == undefined ? '' : card1desc.onmouseenter = tip(card1desc)
                          let card2desc= document.getElementById('card2desc')
                          card2desc == undefined ? '' : card2desc.onmouseenter = tip(card2desc)
                          let card3desc= document.getElementById('card3desc')
                          card3desc == undefined ? '' : card3desc.onmouseenter = tip(card3desc)
                          let card4desc= document.getElementById('card4desc')
                          card4desc == undefined ? '' :card4desc.onmouseenter = tip(card4desc)
                          function tip(desc) {
                            if (desc.innerText.includes('(')) {
                              let start= desc.innerHTML.indexOf('(')
                              let des = desc.innerHTML.substring(0, start)
                              let apply = desc.innerHTML.substring(start).replace(/\)|\(/g, '').split(',')
                              apply = apply.map(a=> a = '<span class="applyTip">' + a + '<span class="applyTip applyText"></span></span>')
                              desc.innerHTML = des + '(' + (apply[0] || '') +  (apply[1]  == undefined ? '' : ',' + apply[1]) + (apply[2] == undefined ? '' : ',' + apply[2]) + ')'
                              let applyTip = Array.from(document.querySelectorAll('.applyTip:not(.applyText)'))
                              applyTip.map(a => {
                                let inf = appliesAllInfo.filter(row => row[1].includes(a.innerText.replace(/\)|\(|,/g, '').trim()))
                    
                                a.getElementsByClassName('applyText')[0].innerHTML = inf[0][10]
                              })
                            }
                            desc.innerHTML = desc.innerHTML.replace('  ', ' ')
                          }
                    
                        })*/

                    })



                })
            setTimeout(function () {
                let skip = Array.from(document.getElementsByClassName('skip'))
                skip[0].style.animation = 'skipTop 20s linear infinite alternate'
                skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
            }, 1500)
        })))

    })
}
var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}
