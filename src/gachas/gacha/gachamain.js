//arrays
import { abilImagesComplete, getAbilImgs,
    matImagesComplete, getMatImgs, getCharsImages, charsImagesComplete} from '../../img/imgsHTML'
import { abilities, abilitiesAllInfo, passivesAllInfo,
         characters, charsAllInfoRaw, charsAllInfo,
         descFinale, abilSkills, abilEffects, abilTraits,
         passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
         jobsData, mats, gachas, gachasDataAll} from '../../abilitiesData'
import { charsImgs } from '../../importImgs.js'
import { openNew } from '../../basicfn/openNew.js'
//imgs
import gold from '../../img/events/gold.PNG'
import eventPoint from '../../img/events/eventPoint.png'
import crystal from '../../img/events/crystal.PNG'
import mission from '../../img/icons/mission.png'
import deckbg from '../../img/icons/deckBg.png'
import pergBg from '../../img/other/pergLong.png'
import pergRotate from '../../img/other/pergBg.png'
import { localization, descriptions, wordsLoc, fireName, waterName, windName, earthName, thunderName, darkName, lightName } from '../../local/local.js'
import { changeMenu } from '../../basicfn/changeMenu.js'
import defaultBg from '../../img/materials/elemental Runestones.png'

export {gachamain}

let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
let targetWidth = 768;
let targetMid = 1000

let gachamain = document.createElement('section')
gachamain.className = 'section'
let header = document.createElement('div')
header.id ='header'

gachamain.append(header)
export function gachaFn() {
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
                    characters.charsRaw()
                    characters.chars()
                        .then(char => {
                            getCharsImages()
                        })
                    jobsData.materials()
                        .then(mat => {
                            getMatImgs()
                        })
                    abilities.passivesFn()
                    gachas.gachas()
                    abilities.abils()
                        .then(abil => {
                            getAbilImgs()
                        })
                }).then(all => {
                    changeMenu()
                    setTimeout(function () {

                        //get the nameof gacha from gaca banner
                        let name = document.querySelectorAll('#header img')
                        name = name[0].id
                        let end = name.indexOf('.')
                        name = name.substring(0, end)
                        console.log(name)
                        let price1, price10, curr, standRates, bestHero, bestAbil, bestMat, req,
                            classname, chanceHero, chanceAbil, chanceMat, element, elementName, event
                        let lang = document.getElementById('langSel').value
                        let beginner, easy, medium, hard, boss, low, abmedium, high, master, common, rare, epic, legendary
                        switch (lang) {
                            case 'English':
                                beginner = wordsLoc.filter(loc => loc[0] == 'EnemyBeginner')[0][1]
                                easy = wordsLoc.filter(loc => loc[0] == 'EnemyEasy')[0][1]
                                medium = wordsLoc.filter(loc => loc[0] == 'EnemyMedium')[1]
                                hard = wordsLoc.filter(loc => loc[0] == 'EnemyHard')[0][1]
                                boss = wordsLoc.filter(loc => loc[0] == 'EnemyBoss')[0][1]

                                low = wordsLoc.filter(loc => loc[0] == 'AbilityLow')[0][1]
                                abmedium = wordsLoc.filter(loc => loc[0] == 'AbilityMedium')[0][1]
                                high = wordsLoc.filter(loc => loc[0] == 'AbilityHigh')[0][1]
                                master = wordsLoc.filter(loc => loc[0] == 'AbilityMaster')[0][1]

                                common = wordsLoc.filter(loc => loc[0] == 'MaterialCommon')[0][1]
                                rare = wordsLoc.filter(loc => loc[0] == 'MaterialRare')[0][1]
                                epic = wordsLoc.filter(loc => loc[0] == 'MaterialEpic')[0][1]
                                legendary = wordsLoc.filter(loc => loc[0] == 'MaterialLegendary')[0][1]
                                break;
                            case 'Chinese':
                                //  name = wordsLoc.filter(loc => loc[0] == name.replace(' ', ''))[0][2]
                                beginner = wordsLoc.filter(loc => loc[0] == 'EnemyBeginner')[0][2]
                                easy = wordsLoc.filter(loc => loc[0] == 'EnemyEasy')[0][2]
                                medium = wordsLoc.filter(loc => loc[0] == 'EnemyMedium')[2]
                                hard = wordsLoc.filter(loc => loc[0] == 'EnemyHard')[0][2]
                                boss = wordsLoc.filter(loc => loc[0] == 'EnemyBoss')[0][2]

                                low = wordsLoc.filter(loc => loc[0] == 'AbilityLow')[0][2]
                                abmedium = wordsLoc.filter(loc => loc[0] == 'AbilityMedium')[0][2]
                                high = wordsLoc.filter(loc => loc[0] == 'AbilityHigh')[0][2]
                                master = wordsLoc.filter(loc => loc[0] == 'AbilityMaster')[0][2]

                                common = wordsLoc.filter(loc => loc[0] == 'MaterialCommon')[0][2]
                                rare = wordsLoc.filter(loc => loc[0] == 'MaterialRare')[0][2]
                                epic = wordsLoc.filter(loc => loc[0] == 'MaterialEpic')[0][2]
                                legendary = wordsLoc.filter(loc => loc[0] == 'MaterialLegendary')[0][2]
                                break;
                            case 'Chinese(Trad)':
                                beginner = wordsLoc.filter(loc => loc[0] == 'EnemyBeginner')[0][3]
                                easy = wordsLoc.filter(loc => loc[0] == 'EnemyEasy')[0][3]
                                medium = wordsLoc.filter(loc => loc[0] == 'EnemyMedium')[3]
                                hard = wordsLoc.filter(loc => loc[0] == 'EnemyHard')[0][3]
                                boss = wordsLoc.filter(loc => loc[0] == 'EnemyBoss')[0][3]

                                low = wordsLoc.filter(loc => loc[0] == 'AbilityLow')[0][3]
                                abmedium = wordsLoc.filter(loc => loc[0] == 'AbilityMedium')[0][3]
                                high = wordsLoc.filter(loc => loc[0] == 'AbilityHigh')[0][3]
                                master = wordsLoc.filter(loc => loc[0] == 'AbilityMaster')[0][3]

                                common = wordsLoc.filter(loc => loc[0] == 'MaterialCommon')[0][3]
                                rare = wordsLoc.filter(loc => loc[0] == 'MaterialRare')[0][3]
                                epic = wordsLoc.filter(loc => loc[0] == 'MaterialEpic')[0][3]
                                legendary = wordsLoc.filter(loc => loc[0] == 'MaterialLegendary')[0][3]
                                break;
                        }
                        //decide on specific values for each gacha
                        switch (name) {
                            case 'Standard Gacha':
                                price1 = '100 '
                                price10 = '2000 '
                                curr = gold
                                standRates = '40-35-25'
                                bestHero = medium
                                chanceHero = '25'
                                bestAbil = high
                                chanceAbil = '35'
                                bestMat = epic
                                chanceMat = '40'
                                req = '<em>A Standard Gacha. <br>Always available in the Market.<em>'
                                classname = name
                                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                break;
                            case 'Material Gacha':
                                price1 = '100 '
                                price10 = '900 '
                                curr = crystal
                                standRates = '0-100-0'
                                bestHero = ''
                                chanceHero = '0'
                                bestAbil = ''
                                chanceAbil = '0'
                                bestMat = legendary
                                chanceMat = '100'
                                req = ''
                                classname = name
                                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                break;
                            case 'Premium Gacha':
                                price1 = '100 '
                                price10 = '900 '
                                curr = crystal
                                standRates = '25-40-35'
                                bestHero = boss
                                chanceHero = '35'
                                bestAbil = master
                                chanceAbil = '25'
                                bestMat = legendary
                                chanceMat = '40'
                                req = '<em>A Premium Gacha. <br>Better rewards but higher cost<br>Always available in the Market.<em>'
                                classname = name.replace(/ /g, '').toLowerCase()
                                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                break;
                            case 'Special Gacha':
                                price1 = '1 '
                                price10 = '50000+ '
                                curr = gold
                                bestHero = boss
                                chanceHero = '25+'
                                bestAbil = ''
                                chanceAbil = ''
                                bestMat = legendary
                                chanceMat = '75'
                                req = '<em>Defeat 5 unique enemies during a run<br>As best rewards contains the enemies defeated of highest rarity<br>Every 100 floors will increase the drop chance of the highest-rarity heroes<em>'
                                classname = name.replace(/ /g, '').toLowerCase()
                                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                break;
                            case 'Light Gacha':
                                element = true
                                elementName = lightName
                                price1 = '150 '
                                price10 = '1350 '
                                curr = crystal
                                bestHero = boss
                                chanceHero = '100'
                                bestAbil = ''
                                chanceAbil = ''
                                bestMat = ''
                                chanceMat = ''
                                req = '<em>Available on Saturdays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                                classname = name
                                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                break;
                            case 'Dark Gacha':
                                element = true
                                elementName = darkName
                                price1 = '150 '
                                price10 = '1350 '
                                curr = crystal
                                bestHero = boss
                                chanceHero = '100'
                                bestAbil = ''
                                chanceAbil = ''
                                bestMat = ''
                                chanceMat = ''
                                req = '<em>Available on Sundays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                                classname = name
                                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                break;
                            case 'Fire Gacha':
                                element = true
                                elementName = fireName
                                price1 = '150 '
                                price10 = '1350 '
                                curr = crystal
                                bestHero = boss
                                chanceHero = '100'
                                bestAbil = ''
                                chanceAbil = ''
                                bestMat = ''
                                chanceMat = ''
                                req = '<em>Available on Mondays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                                classname = name
                                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                break;
                            case 'Water Gacha':
                                element = true
                                elementName = waterName
                                price1 = '150 '
                                price10 = '1350 '
                                curr = crystal
                                bestHero = boss
                                chanceHero = '100'
                                bestAbil = ''
                                chanceAbil = ''
                                bestMat = ''
                                chanceMat = ''
                                req = '<em>Available on Tuesdays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                                classname = name
                                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                break;
                            case 'Earth Gacha':
                                element = true
                                elementName = earthName
                                price1 = '150 '
                                price10 = '1350 '
                                curr = crystal
                                bestHero = boss
                                chanceHero = '100'
                                bestAbil = ''
                                chanceAbil = ''
                                bestMat = ''
                                chanceMat = ''
                                req = '<em>Available on Thursdays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                                classname = name
                                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                break;
                            case 'Wind Gacha':
                                element = true
                                elementName = windName
                                price1 = '150 '
                                price10 = '1350 '
                                curr = crystal
                                bestHero = boss
                                chanceHero = '100'
                                bestAbil = ''
                                chanceAbil = ''
                                bestMat = ''
                                chanceMat = ''
                                req = '<em>Available on Fridays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                                classname = name
                                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                break;
                            case 'Thunder Gacha':
                                element = true
                                elementName = thunderName
                                price1 = '150 '
                                price10 = '1350 '
                                curr = crystal
                                bestHero = boss
                                chanceHero = '100'
                                bestAbil = ''
                                chanceAbil = ''
                                bestMat = ''
                                chanceMat = ''
                                req = '<em>Available on Wednesdays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                                classname = name
                                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                break;

                            default:
                                gachasDataAll.map(gacha => {
                                    if (name == gacha[1]) {
                                        console.log(gacha[7])
                                        event = true
                                        price1 = gacha[3] + ' '
                                        price10 = gacha[4] + ' '
                                        curr = gacha[5] == 'EventPoint' ? eventPoint : crystal
                                        bestHero = gacha[7]
                                        chanceHero = gacha[6].split('-')[2]
                                        bestAbil = master
                                        chanceAbil = gacha[6].split('-')[0]
                                        bestMat = legendary
                                        chanceMat = gacha[6].split('-')[1]
                                        req = '<em>A special event <br>available only for limited time.<em>'
                                        classname = name
                                        document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                                    }
                                })
                        }
                        let maindiv = document.createElement('div')
                        maindiv.id = 'maindiv'
                        //  maindiv.style.backgroundColor = 'rgba(255,255,255, .3)'

                        // gacha price
                        //    curr == 'EventPoints' ? curr = '' : curr
                        let costdiv = document.createElement('div')
                        costdiv.classList.add('row', 'div')
                        costdiv.id = 'costdiv'
                        let cost1 = document.createElement('div')
                        cost1.classList.add('col-6')
                        cost1.innerHTML = '<span><h4>Draw 1: ' + price1 + '</h4><img src ="' + curr + '"></span>'
                        let cost10 = document.createElement('div')
                        cost10.classList.add('col-6')
                        cost10.innerHTML = '<span><h4>Draw 10: ' + price10 + '</h4><img src ="' + curr + '"></span>'
                        costdiv.append(cost1, cost10)
                        //requirements
                        let reqdiv = document.createElement('div')
                        reqdiv.id = 'req'
                        reqdiv.classList.add('row', 'div')
                        let reqcontainer = document.createElement('div')
                        reqcontainer.classList.add('col-sm-6', 'col-12')
                        let reqtext = document.createElement('h4')
                        w < targetWidth ? reqtext.style.backgroundImage = 'url("' + pergRotate + '")' : reqtext.style.backgroundImage = 'url("' + pergBg + '")'
                        reqtext.style.backgroundSize = 'contain'
                        reqtext.style.backgroundRepeat = 'no-repeat'
                        reqtext.style.backgroundPosition = 'center center'
                        reqtext.innerHTML = req
                        reqcontainer.append(reqtext)
                        let reqimgDiv = document.createElement('div')
                        reqimgDiv.classList.add('col-sm-2', 'col-12')
                        let reqimg = document.createElement('img')
                        reqimg.src = mission
                        reqimg.className = 'reqimg'
                        reqimgDiv.append(reqimg)
                        let empty = document.createElement('div')
                        empty.className = 'col-1'
                        reqdiv.append(empty, reqimgDiv, reqcontainer, reqimgDiv.cloneNode(true), empty.cloneNode(true))
                        reqimg.style.transform = 'scaleX(-1)'

                        // chancesand rewards
                        let rewardsDiv = document.createElement('div')
                        rewardsDiv.classList.add('row')
                        rewardsDiv.id = 'rewards'
                        //heroes
                        let heroes = document.createElement('div')
                        chanceHero == '100' ? heroes.classList.add('col-12', 'reward') : heroes.classList.add('col', 'reward')
                        let heroesH = document.createElement('h4')
                        heroesH.innerHTML = 'Best Heroes'
                        let heroChance = '<span>' + chanceHero + '%</span>'
                        heroesH.innerHTML = heroesH.innerHTML + heroChance
                        let hlist = document.createElement('ul')
                        if (chanceHero.length > 4) {
                            /* bestHero = bestHero.split('-')
                             bestHero.map(best => {
                               let li = document.createElement('li')
                               let img = Object.entries(charsImgs).filter(pic => pic[0].toLowerCase() == best.toLowerCase() + '.png')[0]
                               let heroimg = document.createElement('img')
                               heroimg.src = img[1]
                               li.append(heroimg)
                               li.innerHTML = li.innerHTML + '<h5> ' + best + '</h5>'
                               hlist.append(li)
                             })
                             heroes.append(heroesH, hlist)*/
                        } else if (element == true) {
                            console.log(elementName)
                            let abilSplit = abilTraits.map(abil => abil.split(':<br>'))
                            let passivesSplit = passiveTraits.map(abil => abil.split(':<br>'))
                            console.log(charsAllInfoRaw)
                            charsAllInfoRaw.map(char => {
                                if (char[2] == bestHero) {
                                    //13 14 abilities check
                                    let check1 = abilSplit.filter(abil => abil[1] == undefined ? '' : abil[1].includes(elementName))
                                    check1 = check1.filter(abil => abil[0] == char[13] || abil[0] == char[14])
                                    let exceptions = new RegExp(/Debuff|Protect|Curse|Sacrifice/gi)
                                    let inEffects = abilitiesAllInfo.filter(abil => ((abil[6].includes(elementName) && !abil[5].match(exceptions))
                                        || (abil[9].includes(elementName) && !abil[8].match(exceptions))
                                        || (abil[12].includes(elementName) && !abil[11].match(exceptions))
                                        || (abil[15].includes(elementName) && !abil[14].match(exceptions))))
                                    inEffects = inEffects.filter(abil => abil[2] == char[13] || abil[2] == char[14])
                                    //11 12 passives check
                                    let check2 = passivesSplit.filter(abil => abil[1] == undefined ? '' : abil[1].includes(elementName))
                                    check2 = check2.filter(abil => abil[0] == char[11] || abil[0] == char[12])
                                    let exceptionsPass = new RegExp(/Protect|Curse/gi)
                                    let inEffectsPass = passivesAllInfo.map(abil => {
                                        for (var i = 0; i < abil.length; i++) {
                                            abil[i] == undefined ? abil.splice(i, 1, '') : abil[i]
                                        }
                                        return abil
                                    })
                                    inEffectsPass = inEffectsPass.filter(abil => ((abil[5].includes(elementName) && !abil[4].match(exceptionsPass))
                                        || (abil[8].includes(elementName) && !abil[7].match(exceptionsPass))
                                        || (abil[11].includes(elementName) && !abil[10].match(exceptionsPass))
                                        || (abil[14].includes(elementName) && !abil[13].match(exceptionsPass))))
                                    inEffectsPass = inEffectsPass.filter(abil => abil[2] == char[11] || abil[2] == char[12])
                                    if (check1.length > 0 || inEffects.length > 0 || check2.length > 0 || inEffectsPass.length > 0) {
                                        let li = document.createElement('li')
                                        hlist.classList.add('row')
                                        li.className = 'col'
                                        let img = charsImagesComplete.filter(pic => pic.id == char[1])
                                        if (img && img[0]) li.innerHTML = img[0].outerHTML
                                        let heroName = document.createElement('h5')
                                        heroName.innerHTML = char[1]
                                        heroName.style.backgroundImage = 'url("' + pergBg + '")'
                                        heroName.style.backgroundSize = 'contain'
                                        heroName.style.backgroundPosition = 'center center'
                                        heroName.style.backgroundRepeat = 'no-repeat'
                                        li.append(heroName)
                                        hlist.append(li)
                                        hlist.id = 'elementHeroesList'
                                    }
                                }
                            })
                            heroes.append(heroesH, hlist)
                        } else {

                            charsAllInfoRaw.map(char => {
                                if (char[2] == bestHero) {


                                    let li = document.createElement('li')
                                    let img = charsImagesComplete.filter(pic => pic.id == char[1])
                                    if (img && img[0]) li.innerHTML = img[0].outerHTML
                                    li.innerHTML = li.innerHTML + '<h5> ' + char[1] + '</h5>'
                                    hlist.append(li)
                                }
                            })
                            if (event) {
                                bestHero.split('-').map(b => {
                                    console.log(b)
                                    let li = document.createElement('li')
                                    let img = charsImagesComplete.filter(pic => pic.id == b)
                                    if (img && img[0]) {
                                        li.innerHTML = img[0].outerHTML
                                        li.innerHTML = li.innerHTML + '<h5> ' + b + '</h5>'
                                        hlist.append(li)
                                    }

                                })
                            }
                            heroes.append(heroesH, hlist)
                        }
                        //abils
                        let abils = document.createElement('div')
                        chanceHero == '100' ? abils.classList.add('d-none',) : abils.classList.add('col', 'reward',)
                        let abilsH = document.createElement('h4')
                        abilsH.innerHTML = 'Best Abilities'
                        let abilChance = '<span>' + chanceAbil + '%</span>'
                        abilsH.innerHTML = abilsH.innerHTML + abilChance
                        let alist = document.createElement('ul')
                        abilitiesAllInfo.map(char => {
                            if (char[3] == bestAbil) {

                                let li = document.createElement('li')
                                let img = abilImagesComplete.filter(pic => pic.id == char[2])
                                li.innerHTML = img[0].outerHTML
                                li.innerHTML = li.innerHTML + '<h5> ' + char[2] + '</h5>'
                                alist.append(li)
                            }
                        })
                        abils.append(abilsH, alist)
                        //mats
                        let matsEl = document.createElement('div')
                        chanceHero == '100' ? matsEl.classList.add('d-none') : matsEl.classList.add('col', 'reward')
                        let matsH = document.createElement('h4')
                        matsH.innerHTML = 'Best Materials'
                        let matChance = '<span>' + chanceMat + '%</span>'
                        matsH.innerHTML = matsH.innerHTML + matChance
                        let mlist = document.createElement('ul')
                        mats.map(char => {
                            if (char[2] == bestMat) {
                                let li = document.createElement('li')
                                let img = matImagesComplete.filter(pic => pic.id == char[1])
                                li.innerHTML = img[0].outerHTML
                                li.innerHTML = li.innerHTML + '<h5> ' + char[1] + '</h5>'
                                mlist.append(li)
                            }
                        })
                        matsEl.append(matsH, mlist)
                        Array.from([heroes, abils, matsEl]).map((el, i) => {
                            if (chanceHero !== '100') {
                                el.style.backgroundImage = 'url("' + deckbg + '")'
                                el.style.backgroundSize = 'cover'
                            }

                        })
                        rewardsDiv.append(heroes, abils, matsEl)
                        let rates = document.createElement('table')
                        if (name == 'Special Gacha') {

                            let thead = document.createElement('thead')
                            thead.innerHTML = '<th>Floor</th>'
                                //  + '<th>Highest Rarity<th>'
                                + '<th style="line-height:0.8">Character Chance<br></th>'
                                + '<th style="line-height:0.8">Highest Rarity Standard Chance</th>'
                                + '<th style="line-height:0.8">Highest Rarity Chance with Boost</th>'
                                + '<th>Cost (x10)</th>'
                            rates.append(thead)
                            rates.innerHTML = rates.innerHTML + '<tr>'
                                + '<td>< B100F</td><td>25%</td><td>1.25%</td><td>3.75% </td><td>50000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B200F</td><td>35%</td><td>1.75%</td><td>5.25% </td><td>75000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B300F</td><td>45%</td><td>2.25%</td><td>6.75% </td><td>100000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B400F</td><td>55%</td><td>2.75%</td><td>8.25% </td><td>125000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B500F</td><td>65%</td><td>3.25%</td><td>9.75% </td><td>150000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B600F / <span class="pro">Pro </span> < B100F</td><td>75%</td><td>3.75%</td><td>11.25% </td><td>175000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B700F / <span class="pro">Pro </span> < B200F</td><td>85%</td><td>4.25%</td><td>12.75% </td><td>200000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B800F / <span class="pro">Pro </span> < B300F</td><td>95%</td><td>4.75%</td><td>14.25% </td><td>225000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B900F / <span class="pro">Pro </span> < B400F</td><td>100%</td><td>5%</td><td>15% </td><td>250000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B1000F / <span class="pro">Pro </span> < B500F</td><td>100%</td><td>10%</td><td>20% </td><td>275000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B1100F / <span class="pro">Pro </span> < B600F</td><td>100%</td><td>15%</td><td>25% </td><td>300000</td>'
                                + '</tr>'
                                + '<tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>'
                                + '<tr>'
                                + '<td>< B2600F / <span class="pro">Pro </span> < B2100F</td><td>100%</td><td>90%</td><td>100% </td><td>500000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B2700F / <span class="pro">Pro </span> < B2200F</td><td>100%</td><td>95%</td><td>100% </td><td>500000</td>'
                                + '</tr>'
                                + '<tr>'
                                + '<td>< B2800F / <span class="pro">Pro </span> < B2300F</td><td>100%</td><td>100%</td><td>100% </td><td>500000</td>'
                                + '</tr>'
                        }
                        maindiv.append(costdiv, reqdiv, rewardsDiv, rates)
                        gachamain.append(maindiv)
                        let rewards = Array.from(document.querySelectorAll('#rewards .reward'))
                        rewards.map(rew => {
                            rew.children[1].innerText == '' ? rew.style.display = 'none' : rew
                        })

                        // heroes links
                        let chars = Array.from(document.querySelectorAll('.reward h5'))
                        chars = chars.map(j => j.classList.add('openNewHero'))
                        let charLinks = Array.from(document.getElementsByClassName('openNewHero'))
                        charLinks.map(link => {
                            link.onclick = function () {
                                let charname = charsAllInfo.filter(job => job[1] == this.innerText.trim())
                                let ind = charname[0] == undefined ? charname : charname[0][0]
                                openNew('char', charsAllInfo, ind, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills, passiveEffects, passiveTraits, 'heroes')
                            }
                        })
                        let skip = Array.from(document.getElementsByClassName('skip'))
                        skip[0].style.animation = 'skipTop 20s linear infinite alternate'
                        skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
                    }, 4500)
                })


        })))
    })


    abilities.units()
}

