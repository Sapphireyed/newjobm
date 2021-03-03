//arrays
import { abilImagesComplete, getAbilImgs,
         matImagesComplete, getMatImgs} from '../../img/imgsHTML'
import { abilities, abilitiesAllInfo,
         characters, charsAllInfoRaw,
         jobsData, mats} from '../../abilitiesData'
import { charsImgs } from '../../importImgs.js'
//imgs
import gold from '../../img/events/gold.png'
import crystal from '../../img/events/crystal.png'
import mission from '../../img/icons/mission.png'
import deckbg from '../../img/icons/deckBg.png'
import pergBg from '../../img/other/perg.png'

import defaultBg from '../../img/materials/elemental Runestones.png'

export {gachamain}

let gachamain = document.createElement('section')
gachamain.className = 'section'
let header = document.createElement('div')
header.id ='header'


gachamain.append(header)
window.addEventListener('load', function(){
  abilities.units()
    .then(unit => {
      characters.charsRaw()
      jobsData.materials()
        .then(mat => {
          getMatImgs()
        })
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
            let price1, price10, curr, standRates, bestHero, bestAbil, bestMat, req, classname, chanceHero, chanceAbil, chanceMat
            //decide on specific values for each gacha
            switch (name) {
              case 'Standard Gacha':
                price1 = '100'
                price10 = '2000'
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
                price1 = '100'
                price10 ='900'
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
                price1 = ''
                price10 =''
                curr =''
                standRates = ''
                bestHero = ''
                bestAbil =''
                bestMat = ''
                classname = name.replace(/ /g, '').toLowerCase()
                document.body.style.backgroundImage = 'url("' + defaultBg + '")'
                break;
              case 'Light Gacha':

                break;
              case 'Dark Gacha':

                break;
              case 'Fire Gacha':

                break;
              case 'Water Gacha':

                break;
              case 'Earth Gacha':

                break;
              case 'Wind Gacha':

                break;
              case 'Thunder Gacha':

                break;

              default:

            }
            let maindiv = document.createElement('div')
          //  maindiv.style.backgroundColor = 'rgba(255,255,255, .3)'

            // gacha price
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
            reqcontainer.classList.add('col-8')
            let reqtext = document.createElement('h4')
            reqtext.style.backgroundImage = 'url("' + pergBg + '")'
            reqtext.style.backgroundSize = 'contain'
            reqtext.innerHTML = req
            reqcontainer.append(reqtext)
            let reqimgDiv = document.createElement('div')
            reqimgDiv.classList.add('col-2')
            let reqimg = document.createElement('img')
            reqimg.src = mission
            reqimg.className = 'reqimg'
            reqimgDiv.append(reqimg)
            reqdiv.append(reqimgDiv, reqcontainer, reqimgDiv.cloneNode(true))
            reqimg.style.transform = 'scaleX(-1)'

            // chancesand rewards
            let rewardsDiv = document.createElement('div')
            rewardsDiv.classList.add('row')
            rewardsDiv.id = 'rewards'
            //heroes
            let heroes = document.createElement('div')
            heroes.classList.add('col', 'reward')
            let heroesH = document.createElement('h4')
            heroesH.innerHTML = 'Best Heroes'
            let heroChance = '<span>' + chanceHero + '%</span>'
            heroesH.innerHTML = heroesH.innerHTML + heroChance
            let hlist = document.createElement('ul')
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
            //abils
            let abils = document.createElement('div')
            abils.classList.add('col', 'reward')
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
            matsEl.classList.add('col', 'reward')
            let matsH = document.createElement('h4')
            matsH.innerHTML = 'Best Materials'
            let matChance = '<span>' + chanceMat + '%</span>'
            matsH.innerHTML = matsH.innerHTML + matChance
            let mlist = document.createElement('ul')
            mats.map(char => {
              if (char[2] == bestMat) {
                console.log(char)
                let li = document.createElement('li')
                let img = matImagesComplete.filter(pic => pic.id == char[1])
                console.log(img[0].outerHTML)
                li.innerHTML = img[0].outerHTML
                li.innerHTML = li.innerHTML + '<h5> ' + char[1] + '</h5>'
                mlist.append(li)
              }
            })
            matsEl.append(matsH, mlist)
            Array.from([heroes, abils, matsEl]).map((el,i) => {
              el.style.backgroundImage = 'url("' + deckbg +'")'
              el.style.backgroundSize = 'cover'
            })
            rewardsDiv.append(heroes, abils, matsEl)

            maindiv.append(costdiv, reqdiv, rewardsDiv)
            gachamain.append(maindiv)

            let skip = document.getElementById('skip')
            skip.style.display = 'block'
          },4000)
        })
})
