import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import './style.scss';
import './chars.scss';
import './char.scss';
var $ = require("jquery")
import 'tablesorter'
import nav from './nav/nav';
import { jobmain } from './chars/char/charmain.js'
//import { openNew } from './basicfn/openNew.js'
import {getCharsImages, getAbilImgs,charsImagesComplete, abilImagesComplete} from './img/imgsHTML.js'
import {abilities,
        jobsData, 
        descFinale, abilTraits,
        passiveFinale, passiveTraits,
        characters, charsAllInfo,
        chapters, chaptAllInfo} from './abilitiesData.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { splitDesc, splitApply } from './basicfn/splitFn.js'
import { sideDiv, toggleSide } from './side/side.js'
import {rarityFn} from './basicfn/rarity.js'
import {charStats} from './chars/charsjs.js'
import { preload } from './preload/preload.js'
import { localization, descriptions } from './local/local.js';
import { changeMenu } from './basicfn/changeMenu.js'

document.body.append(nav(),preload, jobmain, sideDiv)
cursor()
let sidenav = document.getElementById('sidenav')
let section = $('#jobmainsect')
let navmain = document.getElementById('navMain')
toggleSide(sidenav, section,navmain)

abilities.units().then(unit => {
  abilities.passivesFn()
})

window.onload = function() {
    localization.skills().then(skill => {
        localization.words()
        localization.wiki()
        localization.passives()
        localization.abils().then(c => descriptions.abilities().then(b => descriptions.passives().then(a => {
            
            localization.characters()
            localization.materials()
            localization.jobs()
            // localization.materials()

            jobsData.jobs()
            abilities.units()
                .then(j => {
                    abilities.glossary()
                    abilities.passivesFn()
                    characters.chars()
                        .then(j => {
                            getCharsImages()
                            changeMenu()
                            //bg imgstr
                            //  document.body.style.backgroundImage = 'url("' + currentjobImg[0].src + '")'
                            //  document.body.style.backgroundSize = '190px'
                            //  document.body.style.backgroundSize = 'contain'

                            chapters.chapt()
                        }).then(d => {
                            abilities.abils().then(f => {
                                abilities.passivesFn()
                                getAbilImgs()
                                // jobicon
                                let jobmain = document.getElementById('jobimg')
                                let jobmain2 = document.getElementById('jobimg2')
                                var header = document.getElementById('jobheader')
                                let currentjobImg = charsImagesComplete.filter(img => img.id == header.innerHTML)
                                jobmain.innerHTML = currentjobImg[0].outerHTML
                                jobmain2.innerHTML = currentjobImg[0].outerHTML
                            }).then(d => {
                                setTimeout(function () {
                                    //hero or enemy
                                    let charname = document.getElementById('jobheader').innerText
                                    let rarity = document.getElementById('rarity')
                                    let rarityEn = document.getElementById('rarityEn')
                                    let herobtn = document.getElementsByClassName('navbtns')[0]
                                    let enemybtn = document.getElementsByClassName('navbtns')[1]
                                    let heroAttr = document.getElementById('attrsAttrs')
                                    let enemyAttr = document.getElementById('attrsAttrsEn')
                                    let div2 = document.getElementById('passiveAndSwitch')
                                    let div2bis = document.getElementById('passiveAndSwitchBis')
                                    let div2en = document.getElementById('passiveAndSwitchEn')
                                    let char = charsAllInfo.filter(chars => chars[1] == charname)[0]
                                    let myreg = /([A-Z])\w+/gi
                                    let heroclicked = 0
                                    let enemyclicked = 0
                                    herobtn.addEventListener('click', function () {
                                        whichChar(this, enemybtn, heroAttr, enemyAttr, rarity, rarityEn, div2, div2en, div2bis)
                                        passiveAndSwitchBis.style.display = 'flex'
                                        rarityFn(rarity, char[2], 'heroes')
                                        document.getElementById('threshdiv').style.display = 'none'
                                        document.getElementById('scdiv').style.display = 'none'
                                        document.getElementById('dropdiv').style.display = 'none'
                                        document.getElementById('chapt').style.display = 'none'
                                        //change stats
                                        let start = document.querySelectorAll('#lvlbtns button')[0]
                                        let resetlvls = document.querySelectorAll('#lvlbtns button')[1]
                                        let stat = document.getElementById('levelSel')
                                        let hero = document.getElementById('heroSel')
                                        hero.disabled = false
                                        stat.value = 10
                                        hero.value = 1
                                        let hpStat = Array.from(document.querySelectorAll('.spanattr'))
                                        start.addEventListener('click', function () {
                                            charStats(hpStat, stat, hero)
                                        })
                                        resetlvls.addEventListener('click', function () {
                                            stat.value = 10
                                            hero.value = 1
                                            charStats(hpStat)
                                        })
                                        start.click()
                                        document.getElementById('herolvl').style.display = 'block'
                                        if (heroclicked == 0) {
                                            // build passive1
                                            let passivesDiv = document.createElement('div')
                                            passivesDiv.classList.add('col-12', 'col-md-6')
                                            passivesDiv.id = 'passiveSkill1'
                                            let passiveH = document.createElement('h4')
                                            passiveH.id = 'passiveH1'
                                            passiveH.innerHTML = 'Passive1: ' + char[11] || ''
                                            if (char[11] !== '') {
                                                passiveH.innerText = passiveH.innerText.replace(/  /g, ' ')
                                                let passiveDesc = document.createElement('h5')
                                                passiveDesc.id = 'passiveDesc1'
                                                var descText = splitDesc(passiveFinale, passiveH.innerText.split(':')[1].trim())
                                                console.log(descText)
                                                if (descText.lengtt != 0) {
                                                    descText = descText[0][1] == '' ? descText[1][1] : descText[0][1]
                                                }
                                                passiveDesc.innerHTML = descText
                                                let pTraits = splitApply(passiveTraits, passiveH.innerText.split(':')[1].trim())[0] || 'n/a'
                                                if (pTraits !== 'n/a') {
                                                    pTraits[1] !== ', , ' ? passiveDesc.innerHTML = passiveDesc.innerHTML + '<br>(' + pTraits[1] + ')' : ''
                                                    passiveDesc.innerHTML = passiveDesc.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
                                                    passiveDesc.innerHTML = passiveDesc.innerHTML.replace(/, \)/g, ')')
                                                }

                                                passivesDiv.append(passiveH, passiveDesc)
                                                div2.appendChild(passivesDiv)
                                            }


                                            // passive2
                                            let passivesDiv2 = document.createElement('div')
                                            passivesDiv2.classList.add('col-12', 'col-md-6')
                                            passivesDiv2.id = 'passiveSkill2'
                                            let passiveH2 = document.createElement('h4')
                                            passiveH2.id = 'passiveH1'
                                            passiveH2.innerHTML = 'Passive2: ' + char[12] || ''
                                            passiveH2.innerText = passiveH2.innerText.replace(/  /g, ' ')
                                            let passiveDesc2 = document.createElement('h5')
                                            if (char[12] !== '') {
                                                passiveDesc2.id = 'passiveDesc2'
                                                var descText2 = splitDesc(passiveFinale, passiveH2.innerText.split(':')[1].trim())
                                                if (descText2.lengtt != 0) {
                                                    descText2 = descText2[0][1] == '' ? descText2[1][1] : descText2[0][1]
                                                }
                                                passiveDesc2.innerHTML = descText2
                                                let pTraits2 = splitApply(passiveTraits, passiveH2.innerText.split(':')[1].trim())[0] || 'n/a'
                                                if (pTraits2 !== 'n/a') {
                                                    pTraits2[1] !== ', , ' ? passiveDesc2.innerHTML = passiveDesc2.innerHTML + '<br>(' + pTraits2[1] + ')' : ''
                                                    passiveDesc2.innerHTML = passiveDesc2.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
                                                    passiveDesc2.innerHTML = passiveDesc2.innerHTML.replace(/, \)/g, ')')
                                                }

                                            }
                                            passivesDiv2.append(passiveH2, passiveDesc2)
                                            div2bis.append(passivesDiv2)


                                            //abilitiy1
                                            let abilsmainDiv = document.createElement('div')
                                            abilsmainDiv.classList.add('col-12', 'col-md-6')
                                            abilsmainDiv.id = 'switchSkill1'
                                            let switchH = document.createElement('h4')
                                            switchH.id = 'switchH11'
                                            switchH.innerHTML = 'Ability1: ' + char[13] || ''
                                            if (char[13] !== '') {
                                                switchH.innerHTML = switchH.innerText.replace(/  /g, ' ')
                                                let switchimg = document.createElement('div')
                                                switchimg.id = 'switchimg1'
                                                switchimg.className = 'abilimg'

                                                switchimg.innerHTML = abilImagesComplete.filter(a => a.id == switchH.innerText.split(': ')[1].trim())[0].outerHTML
                                                let switchDesc = document.createElement('h5')
                                                switchDesc.id = 'switchDesc1'
                                                console.log(descFinale)
                                                var descText = splitDesc(descFinale, switchH.innerText.split(':')[1].trim())
                                                descText = descText.length == 0 ? '' : descText[0][1]
                                                switchDesc.innerHTML = descText
                                                let pTraits3 = splitApply(abilTraits, switchH.innerText.split(':')[1].trim())[0]
                                                pTraits3[1] !== ', , ' ? switchDesc.innerHTML = switchDesc.innerHTML + '<br>(' + pTraits3[1] + ')' : ''
                                                switchDesc.innerHTML = switchDesc.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
                                                switchDesc.innerHTML = switchDesc.innerHTML.replace(/, \)/g, ')')

                                                abilsmainDiv.append(switchH, switchDesc, switchimg)
                                                div2.appendChild(abilsmainDiv)
                                            }

                                            //abilitiy2
                                            let abilsmainDiv2 = document.createElement('div')
                                            abilsmainDiv2.classList.add('col-12', 'col-md-6')
                                            abilsmainDiv2.id = 'switchSkill2'
                                            let switchH2 = document.createElement('h4')
                                            switchH2.id = 'switchH2'
                                            switchH2.innerHTML = 'Ability2: ' + char[14] || ''
                                            if (char[14] !== '') {
                                                switchH2.innerHTML = switchH2.innerText.replace(/  /g, ' ')
                                                let switchimg2 = document.createElement('div')
                                                switchimg2.id = 'switchimg2'
                                                switchimg2.className = 'abilimg'
                                                switchimg2.innerHTML = abilImagesComplete.filter(a => a.id == switchH2.innerText.split(':')[1].trim())[0].outerHTML
                                                let switchDesc2 = document.createElement('h5')
                                                switchDesc2.id = 'switchDesc2'
                                                var descText2 = splitDesc(descFinale, switchH2.innerText.split(':')[1].trim())
                                                descText2 = descText2.length == 0 ? '' : descText2[0][1]
                                                switchDesc2.innerHTML = descText2
                                                let pTraits4 = splitApply(abilTraits, switchH2.innerText.split(':')[1].trim())[0]
                                                pTraits4[1] !== ', , ' ? switchDesc2.innerHTML = switchDesc2.innerHTML + '<br>(' + pTraits4[1] + ')' : ''
                                                switchDesc2.innerHTML = switchDesc2.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
                                                switchDesc2.innerHTML = switchDesc2.innerHTML.replace(/, \)/g, ')')

                                                abilsmainDiv2.append(switchH2, switchDesc2, switchimg2)
                                                div2bis.appendChild(abilsmainDiv2)
                                            }

                                            heroclicked = 1
                                        }
                                    })

                                    enemybtn.onclick = function () {
                                        whichChar(this, herobtn, enemyAttr, heroAttr, rarityEn, rarity, div2en, div2, div2bis)
                                        passiveAndSwitchBis.style.display = 'none'
                                        rarityFn(rarityEn, char[2], 'enemies')
                                        document.getElementById('threshdiv').style.display = 'flex'
                                        document.getElementById('scdiv').style.display = 'block'
                                        document.getElementById('dropdiv').style.display = 'block'
                                        document.getElementById('chapt').style.display = 'block'
                                        // change enemy starts
                                        let start = document.querySelectorAll('#lvlbtns button')[0]
                                        let resetlvls = document.querySelectorAll('#lvlbtns button')[1]
                                        let stat = document.getElementById('levelSel')
                                        let hero = document.getElementById('heroSel')
                                        stat.value = 100
                                        hero.disabled = true
                                        let hpStat = Array.from(document.querySelectorAll('.spanattr'))
                                        start.addEventListener('click', function () {
                                            hpStat.map(hp => hp.innerHTML = Math.ceil(hp.id / 100 * stat.value))
                                        })
                                        resetlvls.addEventListener('click', function () {
                                            stat.value = 100
                                            hpStat.map(hp => hp.innerHTML = Math.ceil(hp.id / 100 * stat.value))
                                        })
                                        start.click()
                                        document.getElementById('herolvl').style.display = 'none'

                                        if (enemyclicked == 0) {
                                            let passivesDiv = document.createElement('div')
                                            passivesDiv.classList.add('col-md-6', 'col-12')
                                            passivesDiv.id = 'passivesmainDiv'
                                            let passivesH = document.createElement('h4')
                                            passivesH.innerHTML = 'Passives'
                                            let abilsCollapse1 = document.createElement('a')
                                            abilsCollapse1.innerHTML = ' - '
                                            passivesH.appendChild(abilsCollapse1)
                                            passivesDiv.appendChild(passivesH)
                                            // build passives
                                            let passives = char[7].split('-')
                                            passives.map((pass, i) => {
                                                let passiveSkill = document.createElement('div')
                                                passiveSkill.id = 'passiveSkill' + i
                                                passiveSkill.classList.add('col-sm', 'col-12', 'row')
                                                let passiveH = document.createElement('h5')
                                                passiveH.id = 'passiveH' + i
                                                passiveH.classList.add('col-4')
                                                passiveH.innerHTML = /*'Passive' + (i+1) + ': ' + */pass || ''
                                                passiveH.innerText = passiveH.innerText.replace(/  /g, ' ')
                                                let passiveDesc = document.createElement('h6')
                                                passiveDesc.id = 'passiveDesc' + i
                                                passiveDesc.classList.add('col-8')
                                                var descText = splitDesc(passiveFinale, passiveH.innerText.trim())
                                                console.log(descText[1][1])
                                                if (descText.length != 0) {
                                                    descText = descText[0][1] == '' ? descText[1][1] : descText[0][1]
                                                }
                                                passiveDesc.innerHTML = descText
                                                if (passiveH.innerText !== '') {
                                                    let pTraits = splitApply(passiveTraits, passiveH.innerText.trim())[0] || 'n/a'
                                                    if (pTraits !== 'n/a') {
                                                        pTraits[1] !== ', , ' ? passiveDesc.innerHTML = passiveDesc.innerHTML + '<br>(' + pTraits[1] + ')' : ''
                                                        passiveDesc.innerHTML = passiveDesc.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
                                                        passiveDesc.innerHTML = passiveDesc.innerHTML.replace(/, \)/g, ')')
                                                    }
                                                }


                                                passiveSkill.append(passiveH, passiveDesc)
                                                passivesDiv.appendChild(passiveSkill)
                                                div2en.appendChild(passivesDiv)
                                            })

                                            // build abilities
                                            console.log(char[8])
                                            let mainabils = char[8].replace(/\|/g, '-').split('-')
 
                                            let abilsmainDiv = document.createElement('div')
                                            abilsmainDiv.classList.add('col-md-6', 'col-12')
                                            abilsmainDiv.id = 'abilsmainDiv'
                                            let abilsH = document.createElement('h4')
                                            abilsH.innerHTML = 'Random Abilities'
                                            abilsH.innerHTML = abilsH.innerText
                                            let abilsCollapse = document.createElement('a')
                                            abilsCollapse.innerHTML = ' - '
                                            abilsH.appendChild(abilsCollapse)
                                            abilsmainDiv.appendChild(abilsH)
                                            function count(arr) {
                                                return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
                                            }
                                            mainabils = count(mainabils)
                                            console.log(Object.entries(mainabils))
                                            Object.entries(mainabils).map((ab, i) => {
                                                console.log(ab)
                                                let switchSkill = document.createElement('div')
                                                switchSkill.id = 'switchSkill' + ab[1]
                                                switchSkill.classList.add('col-12', 'row')
                                                let switchH = document.createElement('h5')
                                                switchH.classList.add('col-4', 'skillname')
                                                switchH.id = 'switchH' + ab[1]
                                                switchH.innerHTML = ab[0]
                                                switchH.innerText = switchH.innerText.replace(/  /g, ' ')
                                                let switchimg = document.createElement('div')
                                                switchimg.id = 'switchimg' + ab[1]
                                                switchimg.className = 'abilimg'
                                                console.log(switchH.innerText.trim())
                                                switchimg.innerHTML = abilImagesComplete.filter(a => a.id == switchH.innerText.trim())[0].outerHTML

                                                let switchDesc = document.createElement('h6')
                                                switchDesc.id = 'switchDesc' + ab[1]
                                                switchDesc.classList.add('col-8')
                                                var descText = splitDesc(descFinale, switchH.innerText.trim())
                                                descText = descText.length == 0 ? '' : descText[0][1]
                                                switchDesc.innerHTML = descText
                                                let pTraits = splitApply(abilTraits, switchH.innerText.trim())[0]
                                                pTraits[1] !== ', , ' ? switchDesc.innerHTML = switchDesc.innerHTML + '<br>(' + pTraits[1] + ')' : ''
                                                switchDesc.innerHTML = switchDesc.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
                                                switchDesc.innerHTML = switchDesc.innerHTML.replace(/, \)/g, ')')
                                                switchH.innerHTML = ab[1] > 1 ? ab[0] + '(' + ab[1] + ')' : ab[0]
                                                switchH.appendChild(switchimg)

                                                switchSkill.append(switchH, switchDesc)
                                                abilsmainDiv.appendChild(switchSkill)
                                                div2en.appendChild(abilsmainDiv)
                                            })
                                            // collapse passives and abils
                                            let abilities = document.querySelectorAll('.abilsmainDiv h5')
                                            document.querySelectorAll('#abilsmainDiv h4')[0].onclick = function () {
                                                $('#abilsmainDiv div').toggle('slow')
                                                abilsCollapse.innerHTML == ' - ' ? abilsCollapse.innerHTML = ' + ' : abilsCollapse.innerHTML = ' - '
                                            }
                                            document.querySelectorAll('#passivesmainDiv h4')[0].onclick = function () {
                                                $('#passivesmainDiv div').toggle('slow')
                                                abilsCollapse1.innerHTML == ' - ' ? abilsCollapse1.innerHTML = ' + ' : abilsCollapse1.innerHTML = ' - '
                                            }
                                            // threshold
                                            let div3 = document.getElementById('threshdiv')
                                            let one = document.getElementById('thresh1')
                                            let two = document.getElementById('thresh2')
                                            let three = document.getElementById('thresh3')
                                            let oneH = document.getElementById('oneH')

                                            let thresh = char[9]
                                            if (thresh == '') {
                                                document.getElementById('threshdiv').style.display = 'none'
                                            } else if (thresh.includes('|') == false) {
                                                one.style.display = 'none'
                                                two.style.display = 'none'
                                                three.style.display = 'none'
                                                let all = document.createElement('div')
                                                all.className = 'col-12'
                                                all.id = 'threshall'
                                                thresh = thresh.split('-')
                                                thresh.map(th => {
                                                    let name = document.createElement('h6')
                                                    name.innerHTML = th
                                                    let desc = document.createElement('span')
                                                    desc.innerHTML = descFinale.filter(abil => abil.split(':<br>')[0] == name.innerText.trim())[0].split(':<br>')[1]
                                                    all.append(name, desc)
                                                    div3.appendChild(all)

                                                })
                                            } else {
                                                if (thresh.split('|').length == 3) {
                                                    thresh.split('|')
                                                } else if (thresh.split('|').length == 2) {
                                                    thresh = thresh.split('|')
                                                    thresh.push(thresh[1])
                                                }
                                                thresh = thresh.includes('|') ? thresh.split('|') : thresh
                                                if (typeof thresh !== 'string') {
                                                    thresh = thresh == '' ? '' : thresh.map(it => it = it == '' ? 'none' : it)
                                                }
                                                let th1 = thresh[0]
                                                let th2 = thresh[1]
                                                let th3 = thresh[2]
                                                //names
                                                th1 = th1 == 'none' ? 'none' : th1.split('-').map(it => '<h5 class="th1">' + it + '</h5>').join('')
                                                th2 = th2 == 'none' ? 'none' : th2.split('-').map(it => '<h5 class="th2">' + it + '</h5>').join('')
                                                th3 = th3 == 'none' ? 'none' : th3.split('-').map(it => '<h5 class="th3">' + it + '</h5>').join('')
                                                one.innerHTML = one.innerHTML + th1
                                                two.innerHTML = two.innerHTML + th2
                                                three.innerHTML = three.innerHTML + th3
                                                // descs
                                                let desc1 = Array.from(document.querySelectorAll('.th1'))
                                                let desctxt = desc1.map(a => a == 'none' ? 'none' : descFinale.filter(abil => abil.split(':<br>')[0] == a.innerText.trim())[0].split(':<br>')[1])

                                                desc1.map((d, i) => {
                                                    let descspan = document.createElement('span')
                                                    descspan.innerHTML = '<br>' + desctxt[i].replace(/<br>/g, '. ') + '<br>'
                                                    console.log(descspan.innerHTML)
                                                    d.innerHTML = '<br>' + d.innerHTML
                                                    //  descspan.innerHTML = descspan.innerHTML.replace(/ . | . ./g, '')
                                                    d.append(descspan)
                                                })
                                                let desc2 = Array.from(document.querySelectorAll('.th2'))
                                                let desctxt2 = desc2.map(a => a == 'none' ? 'none' : descFinale.filter(abil => abil.split(':<br>')[0] == a.innerText.trim())[0].split(':<br>')[1])
                                                desc2.map((d, i) => {
                                                    let descspan2 = document.createElement('span')
                                                    descspan2.innerHTML = '<br>' + desctxt2[i].replace(/<br>/g, '. ') + '<br>'
                                                    descspan2.innerHTML = descspan2.innerHTML.replace(/ . | . ./g, '')
                                                    d.innerHTML = '<br>' + d.innerHTML
                                                    d.append(descspan2)
                                                })
                                                let desc3 = Array.from(document.querySelectorAll('.th3'))
                                                console.log(desc3)
                                                let desctxt3 = desc3.map(a => a == 'none' ? 'none' : descFinale.filter(abil => abil.split(':<br>')[0] == a.innerText.trim())[0].split(':<br>')[1])
                                                desc3.map((d, i) => {
                                                    let descspan3 = document.createElement('span')
                                                    descspan3.innerHTML = '<br>' + desctxt3[i].replace(/<br>/g, '. ') + '<br>'
                                                    descspan3.innerHTML = descspan3.innerHTML.replace(/ . | . ./g, '')
                                                    d.innerHTML = '<br>' + d.innerHTML
                                                    d.append(descspan3)
                                                })

                                            }

                                            //collapse thresh
                                            //    char[9] == '' ? document.getElementById('threshH').click() : ''
                                            let threshH = document.getElementById('threshH')
                                            let threshCollapse = document.createElement('a')
                                            threshCollapse.innerHTML = ' - '
                                            threshH.appendChild(threshCollapse)
                                            threshH.onclick = function () {
                                                $('#threshdiv div').toggle('slow')
                                                threshCollapse.innerHTML == ' - ' ? threshCollapse.innerHTML = ' + ' : threshCollapse.innerHTML = ' - '
                                            }
                                            // Drops
                                            let dropdesc = descFinale.map(d => d.split(':<br>'))
                                            let dropdiv = document.getElementById('dropdiv')
                                            let dropsub = document.createElement('div')
                                            let drop1 = document.getElementsByClassName('drop')[0]
                                            if (char[13] !== '') {
                                                drop1.innerHTML = '<h5>' + char[13] + '</h5><div class="dropdesc"></div>'
                                                let drop1img = abilImagesComplete.filter(img => img.id == drop1.innerText)
                                                drop1.innerHTML = '<div>' + drop1img[0].outerHTML + ' ' + drop1.innerHTML + '</div><br>'
                                            }
                                            let drop2 = document.getElementsByClassName('drop')[1]
                                            if (char[14] !== '') {
                                                drop2.innerHTML = '<h5>' + char[14] + '</h5><div class="dropdesc"></div>'
                                                let drop2img = abilImagesComplete.filter(img => img.id == drop2.innerText)
                                                drop2.innerHTML = '<div>' + drop2img[0].outerHTML + ' ' + drop2.innerHTML + '<div><br>'
                                            }
                                            let tips = Array.from(document.getElementsByClassName('dropdesc'))
                                            console.log(tips)
                                            dropdesc = tips.map(t => dropdesc.filter(dsc => dsc[0] == t.previousElementSibling.innerText.trim())[0][1])
                                            tips.map((t, index) => t.innerHTML = '<br>' + dropdesc[index])
                                            dropsub.append(drop1, drop2)
                                            dropdiv.appendChild(dropsub)
                                            //special cases
                                            let scdiv = document.getElementById('scdiv')
                                            let scsub = document.getElementById('scsub')
                                            console.log(char[10])
                                            scsub.innerHTML = char[10]

                                            let scs = scsub.innerText.split('|')

                                            let cond = scs.map(abil => abil.split(':')[0])
                                            let name = scs.map(abil => abil.split(':')[1])
                                            if (char[10] !== '') {
                                                if (char[10].includes('|')) {
                                                    name = Array.from(name)
                                                    scsub.innerHTML = ''
                                                    scs.map((abil, i) => {
                                                        let newCase = document.createElement('h5')
                                                        newCase.innerHTML = name
                                                        if (Array.from(name).some(el => el.includes('-'))) {
                                                            name = newCase.innerText.split(',').map(n => n.split('-'))
                                                            name.map((n, index) => {
                                                                let img = n.map(ni => abilImagesComplete.filter(abimg => abimg.id == ni.trim())[0])
                                                                n = n.map((ni, ind) => '<div class="scall">' + img[ind].outerHTML + '<h5 class="scname">' + ni + '</h5>' + '<div class="scdesc"><br></div></div>')
                                                                scsub.innerHTML = scsub.innerHTML.includes(cond[index]) ? scsub.innerHTML : scsub.innerHTML + '<br><h5 class="cond">' + cond[index] + ': </h5><br><br>' + n
                                                                scsub.innerHTML = scsub.innerHTML.replace(/,/g, '')
                                                            })

                                                        } else {
                                                            name = name.includes('-') ? newCase.innerText.split('-') : newCase.innerText.split(',')
                                                            let img = name.map(n => abilImagesComplete.filter(a => a.id == n.trim())[0].outerHTML)
                                                            name = name.map(n => '<h5 class="scname">' + n + '</h5>')
                                                            i == 0 ? scsub.innerText = '' : ''
                                                            name.map((n, ind) => scsub.innerHTML = scsub.innerHTML.includes(cond[i]) ? scsub.innerHTML : scsub.innerHTML + '<br><h5 class="cond">' + cond[i] + ': </h5><br><br><div class="scall">' + img[ind] + ' ' + n + '<div class="scdesc"></div>')

                                                            //  scsub.append(newCase)
                                                        }

                                                    })
                                                } else {
                                                    scs.map((abil, i) => {
                                                        let newCase = document.createElement('h5')
                                                        newCase.innerHTML = name
                                                        name = newCase.innerText.split('-')
                                                        let img = name.map(n => abilImagesComplete.filter(a => a.id == n.trim())[0].outerHTML)
                                                        name = name.map(n => '<h5 class="scname">' + n + '</h5>')
                                                        i == 0 ? scsub.innerHTML = '<h5 class="cond">' + cond[i] + ': </h5><br><br>' : ''
                                                        name.map((n, ind) => scsub.innerHTML = scsub.innerHTML + '<div class="scall">' + img[ind] + ' ' + n + '<div class="scdesc"></div></div><br>')
                                                        //  scsub.append(newCase)
                                                    })
                                                }

                                                scsub.innerHTML = scsub.innerHTML.split('|').join('<br>')
                                                let tips = Array.from(document.getElementsByClassName('scdesc'))
                                                let desc = descFinale.map(d => d.split(':<br>'))
                                                desc = tips.map(t => desc.filter(dsc => dsc[0] == t.previousElementSibling.innerText.trim())[0][1])
                                                tips.map((t, index) => t.innerHTML = desc[index]) + '<br>'
                                            }
                                            let scnames = Array.from(document.querySelectorAll('.scname'))
                                            scnames.map(sc => {
                                                let coll = document.createElement('a')
                                                coll.className = 'sccoll'
                                                coll.innerHTML = ' + '
                                                sc.append(coll)
                                                sc.nextElementSibling.style.display = 'none'
                                                sc.onclick = function () {
                                                    let thisdesc = this.nextElementSibling
                                                    thisdesc.style.display = thisdesc.style.display == 'none' ? 'block' : 'none'
                                                    coll.innerHTML = coll.innerHTML == ' - ' ? ' + ' : ' - '
                                                }
                                            })
                                            if (scsub.innerText == '') {
                                                scdiv.style.display = 'none'
                                                dropdiv.classList.remove('col-md-6')
                                                dropdiv.children[1].classList.add('row')
                                                document.querySelectorAll('.drop')[0].classList.add('col-12', 'col-md-6')
                                                document.querySelectorAll('.drop')[1].classList.add('col-12', 'col-md-6')
                                            }
                                            // chapters
                                            let chaptdiv = document.getElementById('chapt')
                                            var header = document.getElementById('jobheader')
                                            let chapts = chaptAllInfo.filter(row => (row[6] == undefined ? '' : row[6].split('-').some(en => en == header.innerText)) || (row[7] == undefined ? '' : row[7].split('-').some(en => en == header.innerText)) || (row[8] == undefined ? '' : row[8].split('-').some(en => en == header.innerText)))
                                            let boss = chaptAllInfo.filter(chapt => chapt[8] == undefined ? false : chapt[8].includes(header.innerHTML))
                                            let miniboss = chaptAllInfo.filter(chapt => chapt[7] == undefined ? false : chapt[7].includes(header.innerHTML))
                                            let enemy = chaptAllInfo.filter(chapt => chapt[6] == undefined ? false : chapt[6].includes(header.innerHTML))
                                            if (chapts.length == 0) {
                                                document.getElementById('chapt').style.display = 'none'
                                            }
                                            chapts.map(ch => {
                                                let div = document.createElement('div')
                                                div.classList.add('row', 'col-12')
                                                let chname = document.createElement('h5')
                                                chname.classList.add('col')
                                                chname.innerHTML = ch[1]
                                                ch[2] == 'none' ? '' : chname.innerHTML = chname.innerHTML + '(' + ch[2] + ')'
                                                ch == '' ? ch = 'n/a' : ch = ch
                                                let type = document.createElement('h5')
                                                type.classList.add('col')
                                                switch (true) {
                                                    case ch[8].split('-').some(e => e == header.innerText):
                                                        type.innerHTML = 'Boss'
                                                        break;
                                                    case ch[7] == undefined ? false : ch[7].split('-').some(e => e == header.innerText):
                                                        type.innerHTML = 'Mini-Boss'
                                                        break;
                                                    case ch[6].split('-').some(e => e == header.innerText):
                                                        type.innerHTML = 'Enemy'
                                                        break;
                                                    default:
                                                }
                                                let chimg = document.createElement('div')
                                                chimg.classList.add('col')
                                                chimg.innerHTML = charsImagesComplete.filter(img => img.id == ch[8].split('-')[0])[0].outerHTML
                                                let chimg2 = chimg.cloneNode(true)
                                                chimg2.id = 'chimg2'
                                                div.append(chimg, chname, type, chimg2)

                                                chaptdiv.appendChild(div)
                                            })

                                            //  console.log(charsImagesComplete.filter(img => img.id == ch[8].split('-')[0]))


                                            /*
                                          /*  let abilsmainDiv = document.createElement('div')
                                            abilsmainDiv.classList.add('col-6')
                                            abilsmainDiv.id = 'abilsmainDiv'
                                            let abilsH = document.createElement('h4')
                                            abilsH.innerHTML = 'Random Abilities'
                                            abilsH.innerHTML = abilsH.innerText
                                            let abilsCollapse = document.createElement('a')
                                            abilsCollapse.innerHTML = ' - '
                                            abilsH.appendChild(abilsCollapse)
                                            abilsmainDiv.appendChild(abilsH)
                                            mainabils.map((ab, i) => {
                                              let abilname = Array.from(document.querySelectorAll('.skillname'))
                                              let samename = abilname.filter(a => ab == a.innerText)
                                              if (samename.length > 0 ) {
                                                let counter = mainabils.filter(a => a == samename[0].innerText).length
                                                samename[0].innerHTML = samename[0].innerHTML + 'x' + counter
                                              } else {
                                                let switchSkill = document.createElement('div')
                                                switchSkill.id = 'switchSkill' +i
                                                switchSkill.classList.add('col-12','row')
                                                let switchH = document.createElement('h5')
                                                switchH.classList.add('col-4', 'skillname')
                                                switchH.id = 'switchH' + i
                                                switchH.innerHTML = ab.replace(/  /g, ' ')
                                                let switchimg = document.createElement('div')
                                                switchimg.id = 'switchimg' + i
                                                switchimg.className = 'abilimg'
                                                switchimg.innerHTML = abilImagesComplete.filter(a=> a.id == switchH.innerText.trim())[0].outerHTML
                                                switchH.appendChild(switchimg)
                                                let switchDesc = document.createElement('h6')
                                                switchDesc.id = 'switchDesc' + i
                                                switchDesc.classList.add('col-8')
                                                var descText = splitDesc(descFinale, switchH.innerText.trim())
                                                descText = descText.length == 0 ? '' : descText[0][1]
                                                switchDesc.innerHTML = descText
                                                let pTraits = splitApply(abilTraits, switchH.innerText.trim())[0]
                                                pTraits[1] !== ', , ' ? switchDesc.innerHTML = switchDesc.innerHTML  + '<br>(' + pTraits[1] +')' : ''
                                                switchDesc.innerHTML = switchDesc.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
                                                switchDesc.innerHTML = switchDesc.innerHTML.replace(/, \)/g, ')')
                                    
                                                switchSkill.append(switchH, switchDesc)
                                                abilsmainDiv.appendChild(switchSkill)
                                                div2en.appendChild(abilsmainDiv)
                                              }
                                    
                                            })*/
                                            oneH.style.width = one.getBoundingClientRect().height + 'px'
                                            enemyclicked = 1

                                        }
                                    }
                                    function whichChar(button, button2, attr, attr2, rar, rar2, passive, passive2, passive3, passive4) {
                                        button.style.opacity = '1'
                                        button2.style.opacity = '0.5'
                                        attr.style.display = 'block'
                                        attr2.style.display = 'none'
                                        rar.style.display = 'inline'
                                        rar2.style.display = 'none'
                                        passive.style.display = 'flex'
                                        passive2.style.display = 'none'
                                    }
                                    setTimeout(function () {
                                        herobtn.classList.contains('active') ? herobtn.click() : enemybtn.click()
                                    }, 1000)

                                    // abilities icons
                                    let switchimg = document.getElementById('switchimg')
                                    var switchH = document.getElementById('switchH')
                                    //switchH = switchH.innerHTML.split(':')[1].trim()

                                    /*let currentSwitchImg = abilImagesComplete.filter(img => img.id == switchH)
                                    switchimg.innerHTML = currentSwitchImg[0].outerHTML*/

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
                                /*let changelvl = document.getElementById('levelSel')
                                let stats = Array.from(document.getElementsByClassName('spanattr'))
                                let jobmCryst = document.getElementById('jobmCrystal')
                                if (document.getElementById('rarity').children.length == 6) {
                                  document.querySelectorAll('#lvlbtns button')[0].onclick = function() {
                                    stats.map(stat => stat.innerHTML = Math.ceil(stat.id/10 * changelvl.value) + Math.ceil((stat.id/10 * changelvl.value) * jobmCryst.value/10))
                                  }
                                  document.querySelectorAll('#lvlbtns button')[1].onclick = function() {
                                    changelvl.value = 10
                                    document.getElementById('jobmCrystal').value = 0
                                    stats.map(stat => stat.innerHTML = Math.ceil(stat.id/10 * changelvl.value) + Math.ceil((stat.id/10 * changelvl.value) * jobmCryst.value/10))
                                  }
                                } else {
                                  changelvl.onchange = function() {
                                    stats.map(stat => stat.innerHTML = Math.ceil(stat.id/10 * this.value))
                                  }
                                  jobmCryst.onchange = function() {
                                    stats.map(stat => stat.innerHTML = Math.ceil(stat.id/10 * changelvl.value) + Math.ceil((stat.id/10 * changelvl.value) * jobmCryst.value/10))
                                  }
                                }*/

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
                          
                                })
                          
                            })*/
                            }, 1010)



                        })
                })

        })))
        setTimeout(function () {
            let skip = Array.from(document.getElementsByClassName('skip'))
            skip[0].style.animation = 'skipTop 20s linear infinite alternate'
            skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
        }, 2500)
    })
}

var headernav = document.getElementById("navMain");
window.onscroll = function() {
  stickyNav(headernav)
}
