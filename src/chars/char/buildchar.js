import {jobmain} from './charmain.js'
import { splitDesc, splitApply } from '../../basicfn/splitFn.js'
import {jobsData, jobsDataAll, jobsStats, craft, mats,
        descFinale, abilSkills, abilEffects, abilTraits,
        passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        appliesAllInfo, characters, charsAllInfo} from '../../abilitiesData.js'

        let herobtn = document.getElementsByClassName('navbtns')[0]
        let enemybtn = document.getElementsByClassName('navbtns')[1]
        let heroAttr = document.getElementById('attrsAttrs')
        let enemyAttr = document.getElementById('attrsAttrsEn')


export function whichChar(button, button2, attr, attr2) {
    button.style.opacity = '1'
    button2.style.opacity = '0.5'
    attr.style.display = 'block'
    attr2.style.display = 'none'
  }
export function buildHero() {

}

export function buildEnemy(charname) {
let char = charsAllInfo.filter(chars => chars[1] == charname)
let div2 = document.getElementById('passiveAndSwitch')

let passivesDiv = document.createElement('div')
passivesDiv.classList.add('col-6')
// build passives
let passives = char[0][7].split('-')
passives.map((pass, i) => {
  let passiveSkill = document.createElement('div')
  passiveSkill.id = 'passiveSkill' + i
  passiveSkill.classList.add('col-sm', 'col-12')
  let passiveH = document.createElement('h4')
  passiveH.id = 'passiveH' + i
  passiveH.innerHTML = 'Passive: ' + (i+1) + pass || ''
  let passiveDesc = document.createElement('h5')
  passiveDesc.id = 'passiveDesc' + i
  var descText = splitDesc(passiveFinale, pass)
  descText = descText.length == 0 ? '' : descText[0][1]
  console.log(descText)
  passiveDesc.innerHTML = descText

  passiveSkill.append(passiveH, passiveDesc)
  passivesDiv.appendChild(passiveSkill)
  div2.appendChild(passivesDiv)
})

// build abilities
let mainabils = char[0][8].split('-')
let abilsmainDiv = document.createElement('div')
abilsmainDiv.classList.add('col-6')
abilsmainDiv.id = 'abilsmainDiv'
mainabils.map((ab, i) => {
  let switchSkill = document.createElement('div')
  switchSkill.id = 'switchSkill' +i
  switchSkill.classList.add('col-12')
  let switchH = document.createElement('h4')
  switchH.id = 'switchH' + i
  switchH.innerHTML = 'Ability' + (i+1) + ': ' + ab
  let switchimg = document.createElement('div')
  switchimg.id = 'switchimg' + i
  let switchDesc = document.createElement('h5')
  switchDesc.id = 'switchDesc' + i
  var descText = splitDesc(descFinale, ab)
  descText = descText.length == 0 ? '' : descText[0][1]
  switchDesc.innerHTML = descText

  switchSkill.append(switchH, switchDesc)
  abilsmainDiv.appendChild(switchSkill)
  div2.appendChild(abilsmainDiv)
})
}
