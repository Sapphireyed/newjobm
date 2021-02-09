//import { init } from '../jobsjs.js'
import hpbar from '../../img/other/hpbar.png'

let jobmain = document.createElement('section')
jobmain.classList.add('section', 'shadow')
jobmain.id= 'jobmainsect'
//HEADER
let maindiv = document.createElement('div');
maindiv.id = 'jobmaindiv'
maindiv.className = 'row'

let header = document.createElement('h1')
header.classList.add('col-12')
header.id = 'jobheader'
let span = document.createElement('span')
span.id = 'top'
maindiv.append(span, header)

//JOB BASIC INFO
let div1 = document.createElement('div')
div1.id = 'basicinfo'
div1.className = 'row';

let imgdiv = document.createElement('div')
let jobimg = document.createElement('div')
imgdiv.classList.add('col-12', 'col-sm-2')
jobimg.id = 'jobimg'
jobimg.classList.add('d-block', 'mx-auto')
imgdiv.appendChild(jobimg)

let attrs = document.createElement('div')
attrs.classList.add('col-10', 'row', 'my-auto')
let rarLvlOrb = document.createElement('div')
rarLvlOrb.id = 'rarLvlOrb'
rarLvlOrb.classList.add('col-6')
//rarity
let rarity = document.createElement('div')
rarity.id = 'rarity'
rarity.classList.add('jobattr',)
//l3vel
let level = document.createElement('div')
level.id = 'level';
level.style.marginTop = '10px'
//level.classList.add('col-3')
let labelh4 = document.createElement('h4')
let levelLabel = document.createElement('label')
levelLabel.innerHTML = 'Level: '
let levelSel = document.createElement('input')
levelSel.id = 'levelSel'
levelSel.type = 'number'
levelSel.min = 1
levelSel.step = 10
levelSel.value = 10
levelSel.style.width = '50px'
levelSel.classList.add('rounded')
labelh4.append(levelLabel)
level.append(labelh4, levelSel)
//jobmania crystal
const crystDiv = document.createElement('div');
crystDiv.id = 'crystDiv'
//crystDiv.classList.add('col-3')
const crysth4 = document.createElement('h4')
const jobmCrystal = document.createElement('label');
jobmCrystal.for = 'jobmCrystal'
jobmCrystal.innerHTML = 'Jobmania Orb: '
//jobmCrystal.style.textAlign = 'right'
jobmCrystal.style.marginRight = '4px'
crysth4.appendChild(jobmCrystal)
const numOfCryst = document.createElement('select');
numOfCryst.id = 'jobmCrystal'
numOfCryst.name = 'jobmCrystal'
numOfCryst.value = 0
numOfCryst.style.width = '50px'
numOfCryst.classList.add('rounded')
numOfCryst.style.textAlign = 'right'
const crystOptArr = [0, 1, 2, 3, 4, 5];

const crystOpt = crystOptArr.map(opt => {
  const value = opt
  return `<option value="${value}">${opt}</option>`;
});
numOfCryst.innerHTML = crystOpt;
crystDiv.append(crysth4, numOfCryst)

rarLvlOrb.append(rarity, level, crystDiv)

let attrsAttrs = document.createElement('div')
attrsAttrs.id= 'attrsAttrs'
attrsAttrs.className = 'col-5'
let hp = document.createElement('h4')
hp.id = 'hp'
//hp.className = 'maxhp'
let str = document.createElement('h4')
str.id = 'str'
//str.className = 'str'
let agi = document.createElement('h4')
agi.id = 'agi'
//agi.className = 'agi'
let int = document.createElement('h4')
int.id = 'int'
//int.className = 'int'
let attrsArr = [ hp, str, agi, int]
attrsArr.map(attr => {
  attr.classList.add('jobattr')
  attrsAttrs.appendChild(attr)
})

let rarAndAttrs = document.createElement('div')
rarAndAttrs.classList.add('col-8', 'row')
rarAndAttrs.id = 'rarAndAttrs'

/*let hpdiv = document.createElement('div')
hpdiv.classList.add('col-12')
let hpname = document.createElement('h4')
hpname.innerHTML = 'HP'
hpname.style.display = 'inline'
let hpbarimg = document.createElement('img')
hpbarimg.src = hpbar
let hp = document.createElement('h4')
hp.id = 'hp'
hp.style.display = 'inline'
hpdiv.append(hpname, hpbarimg, hp)*/

rarAndAttrs.append(rarLvlOrb, attrsAttrs)

let img2nd = imgdiv.cloneNode(true)
img2nd.id = 'jobimg2'
//attrs.prepend(rarLvlOrb)
div1.append(imgdiv, rarAndAttrs, img2nd)

//JOB PASSIVE & SWITCH
let div2 = document.createElement('div')
div2.classList.add('row')
div2.id = 'passiveAndSwitch'

let passiveSkill = document.createElement('div')
passiveSkill.id = 'passiveSkill'
passiveSkill.classList.add('col')
let passiveH = document.createElement('h4')
passiveH.id = 'passiveH'
let passiveDesc = document.createElement('h5')
passiveDesc.id = 'passiveDesc'
//traits etc
//let traitsdivPassive = document.createElement('div')
//traitsdivPassive.id = 'traitsdivPassive'
// skills
//let passiveSkillsDiv = document.createElement('div')
//passiveSkillsDiv.id = 'passiveSkillsDiv'
//let passiveSkillsH = document.createElement('h5')
//passiveSkillsH.innerHTML = 'Skills:'
//passiveSkillsH.id = 'passiveSkillsH'
//let passiveSkills = document.createElement('h6')
//passiveSkills.id = 'passiveSkills'
//passiveSkillsDiv.append(passiveSkillsH, passiveSkills)
// effects
//let passiveEffectsDiv = document.createElement('div')
//passiveEffectsDiv.id = 'passiveEffectsDiv'
//let passiveEffectsH = document.createElement('h5')
//passiveEffectsH.innerHTML = 'Effects:'
//passiveEffectsH.id = 'passiveEffectsH'
//let passiveEffects = document.createElement('h6')
//passiveEffects.id = 'passiveEffects'
//passiveEffectsDiv.append(passiveEffectsH, passiveEffects)
//traits
//let passiveTraitsDiv = document.createElement('div')
//passiveTraitsDiv.id = 'passiveTraitsDiv'
//let passiveTraitsH = document.createElement('h5')
//passiveTraitsH.innerHTML = 'Traits:'
//passiveTraitsH.id = 'passiveTraitsH'
//let passiveTraits = document.createElement('h6')
//passiveTraits.id = 'passiveTraits'
//passiveTraitsDiv.append(passiveTraitsH, passiveTraits)
//traitsdivPassive.append(passiveSkillsDiv, passiveEffectsDiv, passiveTraitsDiv)
passiveSkill.append(passiveH, passiveDesc)

let switchSkill = document.createElement('div')
switchSkill.id = 'switchSkill'
switchSkill.classList.add('col')
let switchH = document.createElement('h4')
switchH.id = 'switchH'
let switchimg = document.createElement('div')
switchimg.id = 'switchimg'
let switchDesc = document.createElement('h5')
switchDesc.id = 'switchDesc'
//traits etc
/*let traitsdiv = document.createElement('div')
traitsdiv.id = 'traitsdiv'
// switch
let switchskillsdiv = document.createElement('div')
switchskillsdiv.id = 'switchskillsdiv'
//switchskillsdiv.className= 'col'
let switchskillsH = document.createElement('h5')
switchskillsH.innerHTML = 'Skills:'
switchskillsH.id = 'switchskillsH'
let switchskills = document.createElement('h6')
switchskills.id = 'switchskills'
switchskillsdiv.append(switchskillsH, switchskills)
// effects
let switcheffectsdiv = document.createElement('div')
switcheffectsdiv.id = 'switcheffectsdiv'
//switcheffectsdiv.className= 'col'
let switcheffectsH = document.createElement('h5')
switcheffectsH.innerHTML = 'Effects:'
switcheffectsH.id = 'switcheffectsH'
let switcheffects = document.createElement('h6')
switcheffects.id = 'switcheffects'
switcheffectsdiv.append(switcheffectsH, switcheffects)
//traits
let switchtraitsdiv = document.createElement('div')
switchtraitsdiv.id = 'switchtraitsdiv'
//switchtraitsdiv.className= 'col'
let switchtraitsH = document.createElement('h5')
switchtraitsH.id = 'switchtraitsH'
switchtraitsH.innerHTML = 'Traits:'
let switchtraits = document.createElement('h6')
switchtraits.id = 'switchtraits'
switchtraitsdiv.append(switchtraitsH, switchtraits)
traitsdiv.append(switchskillsdiv, switcheffectsdiv, switchtraitsdiv)*/
switchSkill.append(switchH, switchDesc, switchimg)

div2.append(passiveSkill, switchSkill)

// DECK
let div3 = document.createElement('div')
div3.id = 'deckdiv'
div3.style.margin = '10px'
let deck = document.createElement('div')
deck.id = 'deck'
deck.classList.add('row')
deck.style.margin = '5px'
let deckH = document.createElement('h3')
deckH.id = 'deckH'
deckH.className = 'col-12'
deckH.style.textAlign = 'center'
deckH.style.color= 'white'
deckH.style.margin = '7px 0'
deckH.innerHTML = 'Deck'

let card1 = document.createElement('div')
card1.className = 'col'
card1.id = 'card1'
card1.style.margin = '5px'
let card1H = document.createElement('h5')
card1H.id = 'card1H'
card1H.style.textAlign = 'center'
let card1img = document.createElement('div')
card1img.id = 'card1img'
let card1desc = document.createElement('h6')
card1desc.id = 'card1desc'

card1.append(card1H, card1img, card1desc)

let card2 = document.createElement('div')
card2.className = 'col'
card2.id = 'card2'
card2.style.margin = '5px'
let card2H = document.createElement('h5')
card2H.id = 'card2H'
card2H.style.textAlign = 'center'
let card2img = document.createElement('div')
card2img.id = 'card2img'
let card2desc = document.createElement('h6')
card2desc.id = 'card2desc'
card2.append(card2H, card2img, card2desc)

let card3 = document.createElement('div')
card3.className = 'col'
card3.id = 'card3'
card3.style.margin = '5px'
let card3H = document.createElement('h5')
card3H.id = 'card3H'
card3H.style.textAlign = 'center'
let card3img = document.createElement('div')
card3img.id = 'card3img'
let card3desc = document.createElement('h6')
card3desc.id = 'card3desc'
card3.append(card3H, card3img, card3desc)

let card4 = document.createElement('div')
card4.className = 'col'
card4.id = 'card4'
card4.style.margin = '5px'
let card4H = document.createElement('h5')
card4H.id = 'card4H'
card4H.style.textAlign = 'center'
let card4img = document.createElement('div')
card4img.id = 'card4img'
let card4desc = document.createElement('h6')
card4desc.id = 'card4desc'
card4.append(card4H, card4img, card4desc)

deck.append(deckH, card1, card2, card3, card4)

// CRAFT
let craftdiv = document.createElement('div')
craftdiv.id = 'craftdiv'
let craftH = document.createElement('h4')
craftH.innerHTML = 'Craft'
let craftCraft = document.createElement('div')
craftCraft.id = 'craftCraft'
craftCraft.className = 'row'

craftdiv.append(craftH, craftCraft)

div3.append(deck)


jobmain.append(maindiv, div1, div2, div3, craftdiv)

export {jobmain}
