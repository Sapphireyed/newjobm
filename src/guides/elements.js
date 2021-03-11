import firesrc from '../img/icons/fireCol.png'
import watersrc from '../img/icons/waterCol.png'
import windsrc from '../img/icons/windCol.png'
import thundersrc from '../img/icons/thunderCol.png'
import earthsrc from '../img/icons/earthCol.png'
import lightsrc from '../img/icons/lightCol.png'
import darksrc from '../img/icons/darkCol.png'

import blind from '../img/abilities/blindCol.png'
import depress from '../img/abilities/depressCol.png'
import burn from '../img/abilities/burnCol.png'
import chill from '../img/abilities/chillCol.png'
import dizzy from '../img/abilities/dizzyCol.png'
import seed from '../img/abilities/seedCol.png'
import restrain from '../img/abilities/restrainCol.png'
import bleed from '../img/abilities/bleedCol.png'
import injury from '../img/abilities/injuryCol.png'
import insane from '../img/abilities/insaneCol.png'
import paralysis from '../img/abilities/paralysisCol.png'
import venom from '../img/abilities/venomCol.png'

import sword from '../img/other/swordnext2.png'

export { elements, elStatuses}

let elements = document.createElement('div')
elements.classList.add('col-lg-3', 'col-12')
elements.id='elements'
let elCont1 = document.createElement('div')
elCont1.classList.add('row', 'elCont')
let fire = document.createElement('img')
fire.src = firesrc
let swordimg = document.createElement('img')
swordimg.src = sword
swordimg.classList.add('sword')
let sword2 = swordimg.cloneNode(true)
let sword3 = swordimg.cloneNode(true)
let sword4 = swordimg.cloneNode(true)
let sword5 = swordimg.cloneNode(true)
let sword6 = swordimg.cloneNode(true)
let sword7 = swordimg.cloneNode(true)
swordimg.id = 'sword1'
sword2.id = 'sword2'
sword3.id = 'sword3'
sword4.id = 'sword4'
sword5.id = 'sword5'
sword6.id = 'sword6'
sword7.id = 'sword7'
elCont1.append(fire, swordimg, sword3)
let elCont2 = document.createElement('div')
elCont2.classList.add('row', 'elCont')
let water = document.createElement('div')
let waterimg = document.createElement('img')
waterimg.src = watersrc
waterimg.style.float = 'right'
water.classList.add('col-6')
water.appendChild(waterimg)
let wind = document.createElement('div')
let windimg = document.createElement('img')
windimg.style.float= 'left'
windimg.src = windsrc
wind.classList.add('col-6')
wind.append(windimg)
elCont2.append(wind, water, sword2)
let elCont3 = document.createElement('div')
elCont3.classList.add('row', 'elCont')
let earth = document.createElement('div')
let earthimg = document.createElement('img')
earthimg.src = earthsrc
earth.classList.add('col-6')
earth.appendChild(earthimg)
let thunder = document.createElement('div')
let thunderimg = document.createElement('img')
thunderimg.src = thundersrc
thunder.classList.add('col-6')
thunder.appendChild(thunderimg)
elCont3.append(earth,thunder, sword4, sword5)
let elCont4 = document.createElement('div')
elCont4.classList.add('row', 'elCont')
let light = document.createElement('div')
light.classList.add('col-6')
let lightimg = document.createElement('img')
lightimg.src = lightsrc
light.appendChild(lightimg)
let dark = document.createElement('div')
dark.classList.add('col-6')
let darkimg = document.createElement('img')
darkimg.src= darksrc
dark.appendChild(darkimg)
elCont4.append(light, dark, sword6, sword7)
elements.append(elCont1, elCont2, elCont3, elCont4)

let elStatuses = document.createElement('div')
elStatuses.classList.add('col-lg-3', 'col-12')
let elTable = document.createElement('table')
let i = 0;
while (i < 7) {
  let elRow = document.createElement('tr')
  let elCell = document.createElement('td')
  let elStat = document.createElement('td')
  let statimg = document.createElement('img')
  switch (i) {
    case 0:
      elCell.appendChild(fire.cloneNode(true))
      statimg.src = burn
      break;
    case 1:
      elCell.appendChild(waterimg.cloneNode(true))
      statimg.src = chill
      break;
      case 2:
        elCell.appendChild(earthimg.cloneNode(true))
        statimg.src = seed
        break;
      case 3:
        elCell.appendChild(windimg.cloneNode(true))
        statimg.src = dizzy
        break;
      case 4:
        elCell.appendChild(thunderimg.cloneNode(true))
        statimg.src = paralysis
        break;
      case 5:
        elCell.appendChild(lightimg.cloneNode(true))
        statimg.src = blind
        break;
      case 6:
        elCell.appendChild(darkimg.cloneNode(true))
        statimg.src = depress
        break;
    default:
  }
  elStat.append(statimg, swordimg.cloneNode(true))
  elRow.append(elCell, elStat)
  elTable.append(elRow)
  i++
}
elStatuses.appendChild(elTable)
