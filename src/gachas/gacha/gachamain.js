//arrays
import { abilImagesComplete, getAbilImgs,
         matImagesComplete, getMatImgs} from '../../img/imgsHTML'
import { abilities, abilitiesAllInfo, passivesAllInfo,
         characters, charsAllInfoRaw, charsAllInfo,
         descFinale, abilSkills, abilEffects, abilTraits,
         passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
         jobsData, mats, gachas, gachasDataAll} from '../../abilitiesData'
import { charsImgs } from '../../importImgs.js'
import { openNew } from '../../basicfn/openNew.js'
//imgs
import gold from '../../img/events/gold.PNG'
import crystal from '../../img/events/crystal.PNG'
import mission from '../../img/icons/mission.png'
import deckbg from '../../img/icons/deckBg.png'
import pergBg from '../../img/other/pergLong.png'
import pergRotate from '../../img/other/pergBg.png'

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
window.addEventListener('load', function(){
  abilities.units()
    .then(unit => {
      characters.charsRaw()
      characters.chars()
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
          setTimeout(function(){

            //get the nameof gacha from gaca banner
            let name = document.querySelectorAll('#header img')
            name = name[0].id
            let end = name.indexOf('.')
            name = name.substring(0, end)
            let price1, price10, curr, standRates, bestHero, bestAbil, bestMat, req,
                classname, chanceHero, chanceAbil, chanceMat, element, elementName
            //decide on specific values for each gacha
            switch (name) {
              case 'Standard Gacha':
                price1 = '100 '
                price10 = '2000 '
                curr = gold
                standRates = '40-35-25'
                bestHero = 'Medium'
                chanceHero = '25'
                bestAbil ='High'
                chanceAbil = '35'
                bestMat = 'Epic'
                chanceMat = '40'
                req = '<em>A Standard Gacha. <br>Always available in the Market.<em>'
                classname = name
                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                break;
              case 'Premium Gacha':
                price1 = '100 '
                price10 ='900 '
                curr = crystal
                standRates = '25-40-35'
                bestHero = 'Boss'
                chanceHero = '35'
                bestAbil ='Master'
                chanceAbil = '25'
                bestMat = 'Legendary'
                chanceMat = '40'
                req = '<em>A Premium Gacha. <br>Better rewards but higher cost<br>Always available in the Market.<em>'
                classname = name.replace(/ /g, '').toLowerCase()
                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                break;
              case 'Special Gacha':
                price1 = '1 '
                price10 ='50000 '
                curr = gold
                bestHero = 'Boss'
                chanceHero = '25'
                bestAbil =''
                chanceAbil = ''
                bestMat = 'Legendary'
                chanceMat = '75'
                req = '<em>Defeat 5 unique enemies during a run<br>As best rewards contains the enemies defeated of highest rarity<em>'
                classname = name.replace(/ /g, '').toLowerCase()
                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                break;
              case 'Light Gacha':
                element = true
                elementName = 'Light'
                price1 = '150 '
                price10 = '1350 '
                curr = crystal
                bestHero = 'Boss'
                chanceHero = '100'
                bestAbil =''
                chanceAbil = ''
                bestMat = ''
                chanceMat = ''
                req = '<em>Available on Saturdays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                classname = name
                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                break;
              case 'Dark Gacha':
                element = true
                elementName = 'Dark'
                price1 = '150 '
                price10 = '1350 '
                curr = crystal
                bestHero = 'Boss'
                chanceHero = '100'
                bestAbil =''
                chanceAbil = ''
                bestMat = ''
                chanceMat = ''
                req = '<em>Available on Sundays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                classname = name
                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                break;
              case 'Fire Gacha':
                element = true
                elementName = 'Fire'
                price1 = '150 '
                price10 = '1350 '
                curr = crystal
                bestHero = 'Boss'
                chanceHero = '100'
                bestAbil =''
                chanceAbil = ''
                bestMat = ''
                chanceMat = ''
                req = '<em>Available on Mondays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                classname = name
                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                break;
              case 'Water Gacha':
                element = true
                elementName = 'Water'
                price1 = '150 '
                price10 = '1350 '
                curr = crystal
                bestHero = 'Boss'
                chanceHero = '100'
                bestAbil =''
                chanceAbil = ''
                bestMat = ''
                chanceMat = ''
                req = '<em>Available on Tuesdays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                classname = name
                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                break;
              case 'Earth Gacha':
                element = true
                elementName = 'Earth'
                price1 = '150 '
                price10 = '1350 '
                curr = crystal
                bestHero = 'Boss'
                chanceHero = '100'
                bestAbil =''
                chanceAbil = ''
                bestMat = ''
                chanceMat = ''
                req = '<em>Available on Thursdays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                classname = name
                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                break;
              case 'Wind Gacha':
                element = true
                elementName = 'Wind'
                price1 = '150 '
                price10 = '1350 '
                curr = crystal
                bestHero = 'Boss'
                chanceHero = '100'
                bestAbil =''
                chanceAbil = ''
                bestMat = ''
                chanceMat = ''
                req = '<em>Available on Fridays.<br>An Elemental chapter needs to be bought and appropriate reward claimed.<em>'
                classname = name
                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                break;
              case 'Thunder Gacha':
                element = true
                elementName = 'Thunder'
                price1 = '150 '
                price10 = '1350 '
                curr = crystal
                bestHero = 'Boss'
                chanceHero = '100'
                bestAbil =''
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
                    price1 = gacha[3] + ' '
                    price10 = gacha[4] + ' '
                    curr = gacha[5]
                    bestHero = gacha[7]
                    chanceHero = gacha[6].split('-')[2]
                    bestAbil ='Master'
                    chanceAbil = gacha[6].split('-')[0]
                    bestMat = 'Legendary'
                    chanceMat = gacha[6].split('-')[1]
                    req = '<em>A special event <br>available only for limited time.<em>'
                    classname = name
                    document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                    console.log(curr)
                  }
                })
            }
            let maindiv = document.createElement('div')
          //  maindiv.style.backgroundColor = 'rgba(255,255,255, .3)'

            // gacha price
        //    curr == 'EventPoints' ? curr = '' : curr
            let costdiv = document.createElement('div')
            costdiv.classList.add('row', 'div')
            costdiv.id ='costdiv'
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
            reqdiv.classList.add('row','div')
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
            if (bestHero.length > 4) {
              bestHero = bestHero.split('-')
              bestHero.map(best => {
                let li = document.createElement('li')
                let img = Object.entries(charsImgs).filter(pic => pic[0].toLowerCase() == best.toLowerCase() + '.png')[0]
                let heroimg = document.createElement('img')
                heroimg.src = img[1]
                li.append(heroimg)
                li.innerHTML = li.innerHTML + '<h5> ' + best + '</h5>'
                hlist.append(li)
              })
              heroes.append(heroesH, hlist)
            } else if (element == true) {
              let abilSplit = abilTraits.map(abil => abil.split(': '))
              let passivesSplit = passiveTraits.map(abil => abil.split(': '))
              charsAllInfoRaw.map(char => {
                if (char[2] == bestHero) {
                  //13 14 abilities check
                  let check1 = abilSplit.filter(abil => abil[1].includes(elementName))
                  check1 = check1.filter(abil => abil[0] == char[13] || abil[0] == char[14])
                  let exceptions = new RegExp(/Debuff|Protect|Curse|Sacrifice/gi)
                  let inEffects = abilitiesAllInfo.filter(abil => ((abil[6].includes(elementName) && !abil[5].match(exceptions))
                                                                || (abil[9].includes(elementName) && !abil[8].match(exceptions))
                                                                || (abil[12].includes(elementName) && !abil[11].match(exceptions))
                                                                || (abil[15].includes(elementName) && !abil[14].match(exceptions))))
                 inEffects = inEffects.filter(abil => abil[2] == char[13] || abil[2] == char[14])
                 //11 12 passives check
                 let check2 = passivesSplit.filter(abil => abil[1].includes(elementName))
                 check2 = check2.filter(abil => abil[0] == char[11] || abil[0] == char[12])
                 let exceptionsPass = new RegExp(/Protect|Curse/gi)
                 let inEffectsPass = passivesAllInfo.map(abil => {
                   for (var i=0; i< abil.length; i++) {
                     abil[i] == undefined ? abil.splice(i,1, '') : abil[i]
                   }
                   return abil
                 })
                 inEffectsPass = inEffectsPass.filter(abil => ((abil[5].includes(elementName) && !abil[4].match(exceptionsPass))
                                                               || (abil[8].includes(elementName) && !abil[7].match(exceptionsPass))
                                                               || (abil[11].includes(elementName) && !abil[10].match(exceptionsPass))
                                                               || (abil[14].includes(elementName) && !abil[13].match(exceptionsPass))))
                inEffectsPass = inEffectsPass.filter(abil => abil[2] == char[11] || abil[2] == char[12])
                console.log(gachasDataAll)
                  if (check1.length > 0 || inEffects.length > 0 || check2.length > 0 || inEffectsPass.length > 0) {
                    let li = document.createElement('li')
                    hlist.classList.add('row')
                    li.className = 'col'
                    let img = document.createElement('img')
                    let imgsrc = Object.entries(charsImgs).filter(pic => pic[0] == char[1] + '.png')[0]
                    img.src = imgsrc[1]
                    let heroName = document.createElement('h5')
                    heroName.innerHTML = char[1]
                    heroName.style.backgroundImage = 'url("' + pergBg + '")'
                    heroName.style.backgroundSize = 'contain'
                    heroName.style.backgroundPosition = 'center center'
                    heroName.style.backgroundRepeat = 'no-repeat'
                    li.append(img, heroName)
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
                  let img = Object.entries(charsImgs).filter(pic => pic[0].toLowerCase() == char[1].toLowerCase() + '.png')[0]
                  let heroimg = document.createElement('img')
                  heroimg.src = img[1]
                  li.append(heroimg)
                  li.innerHTML = li.innerHTML + '<h5> ' + char[1] + '</h5>'
                  hlist.append(li)
                }
              })
              heroes.append(heroesH, hlist)
            }
            //abils
            let abils = document.createElement('div')
            chanceHero == '100' ? abils.classList.add('d-none', ) : abils.classList.add('col', 'reward', )
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
            Array.from([heroes, abils, matsEl]).map((el,i) => {
              if (chanceHero !== '100') {
                el.style.backgroundImage = 'url("' + deckbg +'")'
                el.style.backgroundSize = 'cover'
              }

            })
            rewardsDiv.append(heroes, abils, matsEl)
            maindiv.append(costdiv, reqdiv, rewardsDiv)
            gachamain.append(maindiv)

            let rewards = Array.from(document.querySelectorAll('#rewards .reward'))
            rewards.map(rew => {
              rew.children[1].innerText == '' ? rew.style.display = 'none' : rew
            })

            // heroes links
            let chars = Array.from(document.querySelectorAll('.reward h5'))
            chars = chars.map(j=> j.classList.add('openNewHero'))
            let charLinks = Array.from(document.getElementsByClassName('openNewHero'))
            charLinks.map(link =>{
              link.onclick = function() {
                let charname = charsAllInfo.filter(job => job[1] == this.innerText.trim())
                let ind = charname[0] == undefined ? charname : charname[0][0]
                openNew('char', charsAllInfo, ind, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,'heroes')
              }
            })

            let skip = document.getElementById('skip')
            skip.style.display = 'block'
          },4500)
        })
})
