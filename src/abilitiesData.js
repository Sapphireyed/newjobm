global.fetch = require('node-fetch');
const GetSheetDone = require('get-sheet-done');
const id = '1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g';
import fire from './img/icons/fireCol.png'
import water from './img/icons/waterCol.png'
import earth from './img/icons/earthCol.png'
import wind from './img/icons/windCol.png'
import thunder from './img/icons/thunderCol.png'
import light from './img/icons/lightCol.png'
import dark from './img/icons/darkCol.png'
import blind from './img/abilities/blindCol.png'
import depress from './img/abilities/depressCol.png'
import burn from './img/abilities/burnCol.png'
import chill from './img/abilities/chillCol.png'
import dizzy from './img/abilities/dizzyCol.png'
import seed from './img/abilities/seedCol.png'
import restrain from './img/abilities/restrainCol.png'
import bleed from './img/abilities/bleedCol.png'
import injury from './img/abilities/injuryCol.png'
import insane from './img/abilities/insaneCol.png'
import paralysis from './img/abilities/paralysisCol.png'
import venom from './img/abilities/venomCol.png'
import maxhpimg from './img/attr/hp.png'
import strimg from './img/attr/str.png'
import agiimg from './img/attr/agi.png'
import intimg from './img/attr/int.png'
import protect from './img/attr/protect.png'

export { powlvl, unitDesc,
         abilitiesAllInfo, abilitiesArr, descFinale, abilBasic, abilSkills, abilEffects, abilTraits,
         passives, passivesAllInfo, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
         jobsData, jobsStats, jobsDataAll, craft, mats,
          glossAllInfo,appliesAllInfo}

let powlvl;     // power level table from sheet 4
let unitDesc;  // unit desc table from sheet 4
let abilitiesArr = [];   // abilites from sheet 6
let abilitiesAllInfo = [];
let descFinale = []; // name +desc with changed color and X value
let abilSkills = [];  // Damage/Sacrifice/Heal etc
let abilEffects = []  // attr, element etc
let abilTraits = []; // draw, multiply, element, exhaust etc
let abilBasic = [];   // name +rarity+ cost
let passives = [];  // passives skillunits
let passivesArr = [];
let passivesAllInfo = [];
let passiveFinale = []  // passiveswith changed color and x value
let passiveSkills = []; // turnDamage/turnHeal etc
let passiveEffects = [] // attr, element etc
let passiveTraits = [];
let jobsDataAll = []//jobs
let jobsStats;
let craft = [];
let mats = [];   //materials to craft jobs
let glossAllInfo = [];
let appliesAllInfo = []
//glossAllInfo.length = 63

var name, desc, desc1, desc2, desc3, desc4
function getDesc(arrToGet, arrToMap, arrToCompare, powlvl, skill, effect, multiplier) {

 arrToGet.push(arrToMap.map(row => {
    desc = arrToCompare.filter(res => row[skill] == res.skill && row[effect] == res.type)
    row = row == undefined ? 'n/a' : row
    var multi1 = powlvl.filter(lvl => lvl.lvl == row[multiplier]) || ''
    var multi1maxhp = multi1.map(multi => multi.maxHP)
    var multi1attr = multi1.map(multi => multi.strAgiInt)
  //  console.log(arrToCompare)

    row[skill] = row[skill] == undefined ? 'n/a' : row[skill]
    if ((row[skill] == 'Buff' || row[skill] == 'Debuff') && (row[effect] == 'MaxHP' || row[effect] == 'Strength' || row[effect] == 'Agility' || row[effect] == 'Intelligence')) {
         desc[0] = desc.map(desc => desc.name)
         desc[0] = 'Gain ' + row[multiplier] +  ' ' + desc
         desc = desc[0]
    } else if (arrToCompare == passives && row[skill] == 'Upgrade') {
        desc[0] = desc.map(desc => desc.name)
        desc[0] = 'Become ' + desc
        desc = desc[0]
    } else if (arrToCompare == passives && row[skill] == 'Sacrifice' && row[effect] == 'Charge') {
        desc[0] = desc.map(desc => desc.name)
        desc[0] = 'Gain ' + row[multiplier] +  ' ' + desc
        desc = desc[0]
    } else if (arrToCompare == passives && row[skill] == 'Sacrifice' && row[effect] == 'Guard') {
        desc[0] = desc.map(desc => desc.name)
        desc[0] = 'Gain ' + row[multiplier] +  ' ' + desc
        desc = desc[0]
    } else if (row[skill].includes('Damage')  || row[skill].includes('Heal')  || row[skill].includes('Reflect') || row[skill].includes("Protect") && (row[effect] == 'MaxHP' || row[effect] == 'Strength' || row[effect] == 'Agility' || row[effect] == 'Intelligence'))
    {
      desc = row[effect] == 'MaxHP' ? desc.map(desc => desc.desc.replace('X%', multi1maxhp)) : desc.map(desc => desc.desc.replace('X%', multi1attr))
      desc[0] = desc[0] == undefined ? '' : desc[0]
      desc = row[effect] == 'Null' ?  desc[0].replace('X', row[multiplier]) : desc[0].replace('X', row[multiplier])
    } else {
      desc = row[skill] == 'Sacrifice' && row[effect] == 'MaxHP' ? desc.map(desc => desc.desc.replace('10x', 10 * row[multiplier])) : desc.map(desc => desc.desc)
      desc = desc[0] == undefined ? '' : desc[0].replace('X%', '%')
      desc = desc.replace('X', row[multiplier])
      desc = (row[skill] == 'Buff'|| row[skill] == 'InstantBoost') ?  desc.replace('Add/minus', 'Add') : desc
      desc = row[skill] == 'Debuff' ?  desc.replace('Add/minus', 'Minus') : desc
      desc = row[skill] == 'Buff' ?  desc.replace('10%', 10 * row[multiplier] + '%') : desc
      desc = row[skill] == 'Vulnerable' ?  desc.replace('Apply', 'Apply ' + row[multiplier]) : desc
    }
    row[skill] = row[skill] == 'n/a' ? '' : row[skill]
    name = row[2]
    return {
      name: name,
      desc: desc,
      level: row[multiplier]
    }
  }))

}
function changeApply(arr, i) {
  arr.map(r => {
    r[i] = r[i] == undefined ? 'n/a' : r[i]
    r[i] = r[i].replace('Strength', 'Strength Synergy')
    r[i] = r[i].replace('Agility', 'Agility Synergy')
    r[i] = r[i].replace('Intelligence', 'Intelligence Synergy')
    r[i] = r[i].replace('MaxHP', 'MaxHP Synergy')
    r[i] = r[i].replace('Draw', 'Last Resort')
    r[i] = r[i].replace('Multiply', 'Overloaded')
    r[i] = r[i].replace('Charge', 'Turn Charge')
    r[i] = r[i].replace('Action', 'Practice Perfect')
    r[i] = r[i].replace('Buff', 'Focus Power')
    r[i] = r[i].replace('Debuff', 'Negative Energy')
    r[i] = r[i].replace('Combo', 'Combo Blend')
    r[i] = r[i].replace('Delay', 'Scheduled')
    r[i] = r[i].replace('Direct', 'Auto Fire')
    r[i] = r[i] == 'n/a' ? '' : r[i]
  })
}
function changeColors(arr) {
  arr.map(r => {
    for (var i=0; i<r.length; i++) {
      if ( i == 20 ) {
        r[i] = r[i]
      } else if ((i !== 2) && (r[i] !== undefined)) {
        // attr change colors
        r[i] = r[i].replace(/\bMaxHp\b/gi, '<span class=\'maxhp\'><img class="icon" src="' + maxhpimg + '" alt="hp"/> MaxHP</span>')
        r[i] = r[i].replace(/\bstr\b|\bstrength\b/gi, '<span class=\'strength\'><img class="icon" src="' + strimg + '" alt="str"/> Strength</span>')
        r[i] = r[i].replace(/\bagi\b|\bagility\b/gi, '<span class=\'agility\'><img class="icon" src="' + agiimg + '" alt="agi"/> Agility</span>')
        r[i] = r[i].replace(/\bint\b|\bintelligence\b/gi, '<span class=\'intelligence\'><img class="icon" src="' + intimg + '" alt="int"/> Intelligence</span>')
        r[i] = r[i].replace(/\bprotect\b/gi, '<span class=\'protect\'><img class="icon" src="' + protect + '" alt="protect"/> Protect</span>')
        // elements change color
        r[i] = r[i].replace(/\bwater\b/gi, '<span class=\'water\'><img class="icon" src="' + water + '" alt="water"/> Water</span>')
        r[i] = r[i].replace(/\bfire\b/gi, '<span class=\'fire\'><img class="icon" src="' + fire + '" alt="fire"/> Fire</span>')
        r[i] = r[i].replace(/\bearth\b/gi, '<span class=\'earth\'><img class="icon" src="' + earth + '" alt="earth"/> Earth</span>')
        r[i] = r[i].replace(/\bwind\b/gi, '<span class=\'wind\'><img class="icon" src="' + wind + '" alt="wind"/> Wind</span>')
        r[i] = r[i].replace(/\bthunder\b/gi, '<span class=\'thunder\'><img class="icon" src="' + thunder + '" alt="thunder"/> Thunder</span>')
        r[i] = r[i].replace(/\blight\b/gi, '<span class=\'light\'><img class="icon" src="' + light + '" alt="light"/> Light</span>')
        r[i] = r[i].replace(/\bdark\b/gi, '<span class=\'dark\'><img class="icon" src="' + dark + '" alt="dark"/> Dark</span>')
        // apply debuffs change col
        r[i] = r[i].replace(/\bbleed\b/gi, '<span class=\'bleed\'><img class="icon" src="' + bleed + '" alt="bleed"/>Bleed</span>')
        r[i] = r[i].replace(/\binsane\b/gi, '<span class=\'insane\'><img class="icon" src="' + insane + '" alt="insane"/>Insane</span>')
        r[i] = r[i].replace(/\bdepress\b/gi, '<span class=\'depress\'><img class="icon" src="' + depress + '" alt="depress"/>Depress</span>')
        r[i] = r[i].replace(/\bburn\b/gi, '<span class=\'burn\'><img class="icon" src="' + burn + '" alt="burn"/>Burn</span>')
        r[i] = r[i].replace(/\bchill\b/gi, '<span class=\'chill\'><img class="icon" src="' + chill + '" alt="chill"/>Chill</span>')
        r[i] = r[i].replace(/\binjury\b/gi, '<span class=\'injury\'><img class="icon" src="' + injury + '" alt="injury"/>Injury</span>')
        r[i] = r[i].replace(/\bparalysis\b/gi, '<span class=\'paralysis\'><img class="icon" src="' + paralysis + '" alt="paralysis"/>Paralysis</span>')
        r[i] = r[i].replace(/\brestrain\b/gi, '<span class=\'restrain\'><img class="icon" src="' + restrain + '" alt="restrain"/>Restrain</span>')
        r[i] = r[i].replace(/\bseed\b/gi, '<span class=\'seed\'><img class="icon" src="' + seed + '" alt="seed"/>Seed</span>')
        r[i] = r[i].replace(/\bseed\b/gi, '<span class=\'seed\'><img class="icon" src="' + blind + '" alt="blind"/>Blind</span>')
        r[i] = r[i].replace(/\bseed\b/gi, '<span class=\'seed\'><img class="icon" src="' + venom + '" alt="venom"/>Venom</span>')
      } else if (i == 2){
        r[i] = r[2]
      } else {
        r[i] = ''
      }
    }
  })
}

// merge skill unitis andabilities data to get full info on every ability
let abilities = {
  glossary:() => {
    return GetSheetDone
      .raw(id, 4).then(data => data.data).then(res => {
        res.shift()
        jobsStats = res.map(job => {
          return {
            name: job[1],
            hp: job[3]/5,
            str: job[4]/1,
            agi: job[5]/1,
            int: job[6]/1,
          }
        })

      res.map((row, ind) => {
        res[ind].splice(0,11)
        res[ind].splice(12)
      })
      changeColors(res)
        res.map(inf => glossAllInfo.push(inf))
        let end = res.findIndex(r => r[0] == 'Applies')
        glossAllInfo.length = end
        res.map(inf => appliesAllInfo.push(inf))
        appliesAllInfo.splice(0,end +1)
      })

  },
  units:() => {
    return GetSheetDone
      .raw(id, 4).then(data => data.data).then(res => {
        res.shift()
        powlvl = res.map(row => {
          return {
            lvl: row[0],
            strAgiInt: row[1],
            maxHP: row[3] + '/' + row[2]
          }
        })
        powlvl.length = 8


        unitDesc = res.map(row => {
          //attr
          row[9] = row[9].replace(/\bMaxHp\b/gi, '<span class=\'maxhp\'><img class="icon" src="' + maxhpimg + '" alt="hp"/> MaxHP</span>')
          row[9] = row[9].replace(/\bstr\b/gi, '<span class=\'strength\'><img class="icon" src="' + strimg + '" alt="str"/> Strength</span>')
          row[9] = row[9].replace(/\bagi\b/gi, '<span class=\'agility\'><img class="icon" src="' + agiimg + '" alt="agi"/> Agility</span>')
          row[9] = row[9].replace(/\bint\b/gi, '<span class=\'intelligence\'><img class="icon" src="' + intimg + '" alt="int"/> Intelligence</span>')
          row[9] = row[9].replace(/\bprotect\b/gi, '<span class=\'protect\'><img class="icon" src="' + protect + '" alt="protect"/> Protect</span>')
          row[6] = row[6].replace(/\bMaxHp\b/gi, '<span class=\'maxhp\'><img class="icon" src="' + maxhpimg + '" alt="hp"/> MaxHP</span>')
          row[6] = row[6].replace(/\bstr\b|\bStrength\b/gi, '<span class=\'strength\'><img class="icon" src="' + strimg + '" alt="str"/> Strength</span>')
          row[6] = row[6].replace(/\bagi\b|\bAgility\b/gi, '<span class=\'agility\'><img class="icon" src="' + agiimg + '" alt="agi"/> Agility</span>')
          row[6] = row[6].replace(/\bint\b|\bIntelligence\b/gi, '<span class=\'intelligence\'><img class="icon" src="' + intimg + '" alt="int"/> Intelligence</span>')
          row[6] = row[6].replace(/\bprotect\b/gi, '<span class=\'protect\'><img class="icon" src="' + protect + '" alt="protect"/> Protect</span>')
          //elements
          row[9] = row[9].replace(/\bwater\b/gi, '<span class=\'water\'><img class="icon" src="' + water + '" alt="water"/> Water</span>')
          row[9] = row[9].replace(/\bfire\b/gi, '<span class=\'fire\'><img class="icon" src="' + fire + '" alt="fire"/> Fire</span>')
          row[9] = row[9].replace(/\bearth\b/gi, '<span class=\'earth\'><img class="icon" src="' + earth + '" alt="earth"/> Earth</span>')
          row[9] = row[9].replace(/\bwind\b/gi, '<span class=\'wind\'><img class="icon" src="' + wind + '" alt="wind"/> Wind</span>')
          row[9] = row[9].replace(/\bthunder\b/gi, '<span class=\'thunder\'><img class="icon" src="' + thunder + '" alt="thunder"/> Thunder</span>')
          row[9] = row[9].replace(/\blight\b/gi, '<span class=\'light\'><img class="icon" src="' + light + '" alt="light"/> Light</span>')
          row[9] = row[9].replace(/\bdark\b/gi, '<span class=\'dark\'><img class="icon" src="' + dark + '" alt="dark"/> Dark</span>')
          row[6] = row[6].replace(/\bwater\b/gi, '<span class=\'water\'><img class="icon" src="' + water + '" alt="water"/> Water</span>')
          row[6] = row[6].replace(/\bfire\b/gi, '<span class=\'fire\'><img class="icon" src="' + fire + '" alt="fire"/> Fire</span>')
          row[6] = row[6].replace(/\bearth\b/gi, '<span class=\'earth\'><img class="icon" src="' + earth + '" alt="earth"/> Earth</span>')
          row[6] = row[6].replace(/\bwind\b/gi, '<span class=\'wind\'><img class="icon"src="' + wind + '" alt="wind"/> Wind</span>')
          row[6] = row[6].replace(/\bthunder\b/gi, '<span class=\'thunder\'><img class="icon" src="' + thunder + '" alt="thunder"/> Thunder</span>')
          row[6] = row[6].replace(/\blight\b/gi, '<span class=\'light\'><img class="icon" src="' + light + '" alt="light"/> Light</span>')
          row[6] = row[6].replace(/\bdark\b/gi, '<span class=\'dark\'><img class="icon" src="' + dark + '" alt="dark"/> Dark</span>')
          //debuffs
          row[9] = row[9].replace(/\bblind\b/gi, '<span class=\'blind\'><img class="icon" src="' + blind + '" alt="blind"/>Blind</span>')
          row[9] = row[9].replace(/\bbleed\b/gi, '<span class=\'bleed\'><img class="icon" src="' + bleed + '" alt="bleed"/>Bleed</span>')
          row[9] = row[9].replace(/\binsane\b/gi, '<span class=\'insane\'><img class="icon" src="' + insane + '" alt="insane"/>Insane</span>')
          row[9] = row[9].replace(/\bdepress\b/gi, '<span class=\'depress\'><img class="icon" src="' + depress + '" alt="depress"/>Depress</span>')
          row[9] = row[9].replace(/\bburn\b/gi, '<span class=\'burn\'><img class="icon" src="' + burn + '" alt="burn"/>Burn</span>')
          row[9] = row[9].replace(/\bdizzy\b/gi, '<span class=\'dizzy\'><img class="icon" src="' + dizzy + '" alt="dizzy"/>Dizzy</span>')
          row[9] = row[9].replace(/\bchill\b/gi, '<span class=\'chill\'><img class="icon" src="' + chill + '" alt="chill"/>Chill</span>')
          row[9] = row[9].replace(/\binjury\b/gi, '<span class=\'injury\'><img class="icon" src="' + injury + '" alt="injury"/>Injury</span>')
          row[9] = row[9].replace(/\bparalysis\b/gi, '<span class=\'paralysis\'><img class="icon" src="' + paralysis + '" alt="paralysis"/>Paralysis</span>')
          row[9] = row[9].replace(/\brestrain\b/gi, '<span class=\'restrain\'><img class="icon" src="' + restrain + '" alt="restrained"/>Restrained</span>')
          row[9] = row[9].replace(/\bseed\b/gi, '<span class=\'seed\'><img class="icon" src="' + seed + '" alt="seed"/>Seed</span>')
          row[9] = row[9].replace(/\bvenom\b/gi, '<span class=\'venom\'><img class="icon" src="' + venom + '" alt="venom"/>Venom</span>')
          row[6] = row[6].replace(/\bblind\b/gi, '<span class=\'blind\'><img class="icon" src="' + blind + '" alt="blind"/>Blind</span>')
          row[6] = row[6].replace(/\bbleed\b/gi, '<span class=\'bleed\'><img class="icon" src="' + bleed + '" alt="bleed"/>Bleed</span>')
          row[6] = row[6].replace(/\binsane\b/gi, '<span class=\'insane\'><img class="icon" src="' + insane + '" alt="insane"/>Insane</span>')
          row[6] = row[6].replace(/\bdepress\b/gi, '<span class=\'depress\'><img class="icon" src="' + depress + '" alt="depress"/>Depress</span>')
          row[6] = row[6].replace(/\bburn\b/gi, '<span class=\'burn\'><img class="icon" src="' + burn + '" alt="burn"/>Burn</span>')
          row[6] = row[6].replace(/\bdizzy\b/gi, '<span class=\'dizzy\'><img class="icon" src="' + dizzy + '" alt="dizzy"/>Dizzy</span>')
          row[6] = row[6].replace(/\bchill\b/gi, '<span class=\'chill\'><img class="icon" src="' + chill + '" alt="chill"/>Chill</span>')
          row[6] = row[6].replace(/\binjury\b/gi, '<span class=\'injury\'><img class="icon" src="' + injury + '" alt="injury"/>Injury</span>')
          row[6] = row[6].replace(/\bparalysis\b/gi, '<span class=\'paralysis\'><img class="icon" src="' + paralysis + '" alt="paralysis"/>Paralysis</span>')
          row[6] = row[6].replace(/\brestrain\b/gi, '<span class=\'restrain\'><img class="icon" src="' + restrain + '" alt="restrain"/>Restrain</span>')
          row[6] = row[6].replace(/\bseed\b/gi, '<span class=\'seed\'><img class="icon" src="' + seed + '" alt="seed"/>Seed</span>')
          row[6] = row[6].replace(/\bvenom\b/gi, '<span class=\'venom\'><img class="icon" src="' + venom + '" alt="venom"/>Venom</span>')

          return {
            skill: row[7],
            type: row[8],
            desc: row[9],
            name: row[6]
          }
        })

        passives = res.map(row => {
          //attr
          row[30] = row[30] == undefined ? '' : row[30]
          row[24] = row[24] == undefined ? '' : row[24]
          row[30] = row[30].replace(/\bMaxHp\b/gi, '<span class=\'maxhp\'><img class="icon" src="' + maxhpimg + '" alt="hp"/> MaxHP</span>')
          row[30] = row[30].replace(/\bagi\b/gi, '<span class=\'agi\'><img class="icon" src="' + agiimg + '" alt="agi"/> Agility</span>')
          row[30] = row[30].replace(/\bstr\b/gi, '<span class=\'str\'><img class="icon" src="' + strimg + '" alt="str"/> Strength</span>')
          row[30] = row[30].replace(/\bint\b/gi, '<span class=\'intelligence\'><img class="icon" src="' + intimg + '" alt="int"/> Intelligence</span>')
          row[30] = row[30].replace(/\bprotect\b/gi, '<span class=\'protect\'><img class="icon" src="' + protect + '" alt="protect"/> Protect</span>')
          row[24] = row[24].replace(/\bMaxHp\b/gi, '<span class=\'maxhp\'><img class="icon" src="' + maxhpimg + '" alt="hp"/> MaxHP</span>')
          row[24] = row[24].replace(/\bagi\b|\bagility\b/gi, '<span class=\'agility\'><img class="icon" src="' + agiimg + '" alt="agi"/> Agility</span>')
          row[24] = row[24].replace(/\bstr\b|\bstrength\b/gi, '<span class=\'strength\'><img class="icon" src="' + strimg + '" alt="str"/> Strength</span>')
          row[24] = row[24].replace(/\bint\b|\bintelligence\b/gi, '<span class=\'intelligence\'><img class="icon" src="' + intimg + '" alt="int"/> Intelligence</span>')
          row[24] = row[24].replace(/\bprotect\b/gi, '<span class=\'protect\'><img class="icon" src="' + protect + '" alt="protect"/> Protect</span>')
          //elements
          row[30] = row[30].replace(/\bwater\b/gi, '<span class=\'water\'><img class="icon" src="' + water + '" alt="water"/> Water</span>')
          row[30] = row[30].replace(/\bfire\b/gi, '<span class=\'fire\'><img class="icon" src="' + fire + '" alt="fire"/> Fire</span>')
          row[30] = row[30].replace(/\bearth\b/gi, '<span class=\'earth\'><img class="icon" src="' + earth + '" alt="earth"/> Earth</span>')
          row[30] = row[30].replace(/\bwind\b/gi, '<span class=\'wind\'><img class="icon" src="' + wind + '" alt="wind"/> Wind</span>')
          row[30] = row[30].replace(/\bthunder\b/gi, '<span class=\'thunder\'><img class="icon" src="' + thunder + '" alt="thunder"/> Thunder</span>')
          row[30] = row[30].replace(/\blight\b/gi, '<span class=\'light\'><img class="icon" src="' + light + '" alt="light"/> Light</span>')
          row[30] = row[30].replace(/\bdark\b/gi, '<span class=\'dark\'><img class="icon" src="' + dark + '" alt="dark"/> Dark</span>')
          //debuffs
          row[30] = row[30].replace(/\bblind\b/gi, '<span class=\'blind\'><img class="icon" src="' + blind + '" alt="blind"/>Blind</span>')
          row[30] = row[30].replace(/\bbleed\b/gi, '<span class=\'bleed\'><img class="icon" src="' + bleed + '" alt="bleed"/>Bleed</span>')
          row[30] = row[30].replace(/\binsane\b/gi, '<span class=\'insane\'><img class="icon" src="' + insane + '" alt="insane"/>Insane</span>')
          row[30] = row[30].replace(/\bdepress\b/gi, '<span class=\'depress\'><img class="icon" src="' + depress + '" alt="depress"/>Depress</span>')
          row[30] = row[30].replace(/\bburn\b/gi, '<span class=\'burn\'><img class="icon" src="' + burn + '" alt="burn"/>Burn</span>')
          row[30] = row[30].replace(/\bdizzy\b/gi, '<span class=\'dizzy\'><img class="icon" src="' + dizzy + '" alt="dizzy"/>Dizzy</span>')
          row[30] = row[30].replace(/\bchill\b/gi, '<span class=\'chill\'><img class="icon" src="' + chill + '" alt="chill"/>Chill</span>')
          row[30] = row[30].replace(/\binjury\b/gi, '<span class=\'injury\'><img class="icon" src="' + injury + '" alt="injury"/>Injury</span>')
          row[30] = row[30].replace(/\bparalysis\b/gi, '<span class=\'paralysis\'><img class="icon" src="' + paralysis + '" alt="paralysis"/>Paralysis</span>')
          row[30] = row[30].replace(/\brestrain\b/gi, '<span class=\'restrain\'><img class="icon" src="' + restrain + '" alt="restrain"/>Restrain</span>')
          row[30] = row[30].replace(/\bseed\b/gi, '<span class=\'seed\'><img class="icon" src="' + seed + '" alt="seed"/>Seed</span>')
          row[30] = row[30].replace(/\bvenom\b/gi, '<span class=\'venom\'><img class="icon" src="' + venom + '" alt="venom"/>venom</span>')
          return {
            skill: row[25],
            type: row[26],
            desc: row[30],
            activetype: row[28],
            passivetype: row[29],
            name: row[24]
          }
        })
      })
  },

  abils:() => {
    return GetSheetDone
      .raw(id, 6).then(data => data.data).then(res => {
        res.shift()
        res.map(inf => abilitiesAllInfo.push(inf))
        // call the function to get the desc for each of 4 skill units that build ability desc
          getDesc(abilitiesArr, res, unitDesc, powlvl, 5, 6, 7)
          getDesc(abilitiesArr, res, unitDesc, powlvl, 8, 9, 10)
          getDesc(abilitiesArr, res, unitDesc, powlvl, 11, 12, 13)
          getDesc(abilitiesArr, res, unitDesc, powlvl, 14, 15, 16)

          desc1 = abilitiesArr[0]
          desc2 = abilitiesArr[1]
          desc3 = abilitiesArr[2]
          desc4 = abilitiesArr[3]
        //descFinale to get info needed for building a description
          for (var i = 0; i < desc1.length; i++) {
            descFinale.push(desc1[i].name + ':<br>'
            + (desc1[i].desc || '')
            + '<br>' + (desc2[i].desc || '')
            + '<br>' + (desc3[i].desc || '')
            + '<br>' + (desc4[i].desc || ''))
          }

          changeColors(res)  // change colors of keywords in skills/effects/traits
          changeApply(res, 17)
          changeApply(res, 18)
          changeApply(res, 19)
console.log(res)
        //get cost+tier / skills / effects / TRAITS arrays
res.map(res=> abilBasic.push(res[2] + ':' + res[3]/*tier*/ + '\t\t' + res[4]/*cost*/))
res.map(res=> abilSkills.push(res[2] + ':' + (res[5] || '') + ', ' + (res[8] || '') + ', ' + (res[11] || '') + ', ' + (res[14] || '')))
res.map(res=> abilEffects.push(res[2] + ':' + (res[6] || '') + ', ' + (res[9] || '') + ', ' + (res[12] || '') + ', ' + (res[15] || '')))
res.map(res=> abilTraits.push(res[2] + ': ' + (res[17] || '') + ', ' + (res[18] || '') + ', ' + (res[19] || '')))

/*Draw = Last Resort
  Multiply = Overloaded
  */
/*descFinale = descFinale.map(data => data.replace(/\bMaxHp\b/gi, '<span class=\'maxhp\'>MaxHP</span>'))
descFinale = descFinale.map(data => data.replace(/\bStr\b/gi, '<span class=\'str\'>Strength</span>'))
descFinale = descFinale.map(data => data.replace(/\bAgi\b/gi, '<span class=\'agi\'>Agility</span>'))
descFinale = descFinale.map(data => data.replace(/\bInt\b/gi, '<span class=\'int\'>Intelligence</span>'))
descFinale = descFinale.map(data => data.replace(/\bFire\b/gi, '<span class=\'fire\'>Fire</span>'))
descFinale = descFinale.map(data => data.replace(/\bWater\b/gi, '<span class=\'water\'>Water</span>'))
descFinale = descFinale.map(data => data.replace(/\bEarth\b/gi, '<span class=\'earth\'>Earth</span>'))
descFinale = descFinale.map(data => data.replace(/\bWind\b/gi, '<span class=\'wind\'>Wind</span>'))
descFinale = descFinale.map(data => data.replace(/\bThunder\b/gi, '<span class=\'thunder\'>Thunder</span>'))
descFinale = descFinale.map(data => data.replace(/\bLight\b/gi, '<span class=\'light\'>Light</span>'))
descFinale = descFinale.map(data => data.replace(/\bDark\b/gi, '<span class=\'dark\'>Dark</span>'))*/

//console.log(descFinale)
        /*abilitiesArr = res.map(row => {
            var desc1 = unitDesc.filter(res => row[5] == res.skill && row[6] == res.type)
            var multi1 = powlvl.filter(lvl => lvl.lvl == row[7])
            var multi1maxhp = multi1.map(multi => multi.maxHP)
            var multi1attr = multi1.map(multi => multi.strAgiInt)
            if (row[5] == 'Damage' || row[5] == 'Heal' || (row[5] == "Protect" && (row[6] == 'MaxHP' || row[6] == 'Strength' || row[6] == 'Agility' || row[6] == 'Intelligence')))
            {
              desc1 = row[6] == 'MaxHP' ? desc1.map(desc => desc.desc.replace('X%', multi1maxhp)) : desc1.map(desc => desc.desc.replace('X%', multi1attr))
              desc1 = row[6] == 'Null' ?  desc1[0].replace('X', row[7]) : desc1[0].replace('X', multi1attr)
            } else {
              desc1 = row[5] == 'Sacrifice' ? desc1.map(desc => desc.desc.replace('10x', 10 * row[7])) : desc1.map(desc => desc.desc)
              desc1 = desc1[0] == undefined ? '' : desc1[0].replace('X%', '%')
              desc1 = desc1.replace('X', row[7])
            }*/
//console.log(row[2] + ' ' + desc1 + ' ' +  row[5] + ',' + row[6] + ',' + row[7])
      //    var desc2 = unitDesc.filter(res => row[8] == res.skill && row[9] ==res.type)
        //  var desc3 = unitDesc.filter(res => row[11] == res.skill && row[12] == res.type)
          //var desc4 = unitDesc.filter(res => row[14] == res.skill && row[15] == res.type)


        })
      },


    passivesFn:() => {
      return GetSheetDone
        .raw(id, 5).then(data => data.data).then(res => {
          res.shift()
          res.map(inf => passivesAllInfo.push(inf))

          getDesc(passivesArr, res, passives, powlvl, 4, 5, 6)
          getDesc(passivesArr, res, passives, powlvl, 7, 8, 9)
          getDesc(passivesArr, res, passives, powlvl, 10, 11, 12)
          getDesc(passivesArr, res, passives, powlvl, 13, 14, 15)
          desc1 = passivesArr[0]
          desc2 = passivesArr[1]
          desc3 = passivesArr[2]
          desc4 = passivesArr[3]
          //descFinale to get info needed for building a description
          for (var i = 0; i < desc1.length; i++) {
            passiveFinale.push(desc1[i].name + ':<br>'
            + (desc1[i].desc || '')
            + '<br>' + (desc2[i].desc || '')
            + '<br>' + (desc3[i].desc || '')
            + '<br>' + (desc4[i].desc || '') + '<br>')
            }
          changeColors(res)  // change colors of keywords in skills/effects/traits
          changeApply(res, 16)
          changeApply(res, 17)
          changeApply(res, 18)
          //  res.map(res=> abilBasic.push(res[2] + ':' + res[3]/*tier*/ + '\t\t' + res[4]/*cost*/))
          res.map(res=> passiveSkills.push(res[2] + ':' + (res[4] || '') + ', ' + (res[7] || '') + ', ' + (res[10] || '') + ', ' + (res[13] || '')))
          res.map(res=> passiveEffects.push(res[2] + ':' + (res[5] || '') + ', ' + (res[8] || '') + ', ' + (res[11] || '') + ', ' + (res[14] || '')))
          res.map(res=> passiveTraits.push(res[2] + ': ' + (res[16] || '') + ', ' + (res[17] || '') + ', ' + (res[18] || '')))

        })
    },
  };


  let jobsData = {
    jobs:() => {
      return GetSheetDone
        .raw(id, 7).then(data => data.data).then(res => {
          res.shift()
          jobsStats = res.map(job => {
            return {
              name: job[1],
              hp: job[3]/5,
              str: job[4]/1,
              agi: job[5]/1,
              int: job[6]/1,
            }
          })
          res.map(inf => jobsDataAll.push(inf))


        })
    },
    craft:() => {
      return GetSheetDone
        .raw(id, 3).then(data => data.data).then(res => {
          res.shift()
          res.map(inf => craft.push(inf))
        })
      },
      materials:() => {
        return GetSheetDone
          .raw(id, 8).then(data => data.data).then(res => {
            res.shift()
            res.map(inf => mats.push(inf))
          })
        },
  }
  //console.log(abilitiesArr)
  /*find:() => {
    return GetSheetDone.raw(id,6).then((sheet) => {
      sheet.data.map(data => abilSheet.push(data))
      return GetSheetDone
        .raw(id, 4)
        .then((res) => res.data)
        .then((data) => {
          var result = data;
          result.shift();
          var level = result.slice(0, 8)
          var power = level.map(pow => {
          return {
            lvl: pow[0],
            strAgiInt: pow[1],
            maxHP: pow[2] + '/' + pow[3]
          }
          })
          var abils = sheet.data.map((row) => {
            var desc1 = result.filter(res=> row[5] == res[7] && row[6] == res[8])
            var desc2 = result.filter(res => row[8] == res[7] && row[9] == res[8])
            var desc3 = result.filter(res => row[11] == res[7] && row[12] == res[8])
            var desc4 = result.filter(res => row[14] == res[7] && row[15] == res[8])
            return desc1.map(desc =>/* row[2] + ':\n' + desc[9] + '(Lvl ' + row[7] + ')' + row[5] + '/' + row[6] + '\n'
              + desc2.map(desc => desc[9]/*.replace('X', row[10]) + '(Lvl ' + row[10] + ')\n')
              + desc3.map(desc => desc[9]/*.replace('X', row[13]) + '(Lvl ' + row[13] + ')\n')
              + desc4.map(desc => desc[9]/*.replace('X', row[16])  + '(Lvl ' + row[16] + ')\n'))
          });
            Object.values(abils).map(val => abilSheet.map(row=> row[1] = val))
            //Object.values(abilAll).map(abil => abil == undefined ? '' : abil.split(':'))
 //abilAll = Object.values(abilAll).map(val => val[0] == undefined ? '' : val[0].split(':'))
//abilAll.map(val => {
  /*if (
    (row[5] == ('Damage' || 'Heal')
    || (row[5] == "Protect" && (row[6] == ('MaxHP' || 'Strength' || 'Agility' || 'Intelligence'))))
    && (row[5] == res[7] && row[6] == res[8])
  ) {
    var perc = power.map(lvl => {
      if (lvl.lvl == row[7]) {
        row[6] == 'MaxHP'
        ? res[9].replace('X%' , lvl.maxHP)
        : res[9].replace('X%' , lvl.strAgiInt)
      }
      })
  } else {
    res[9] = res[9].replace('X', row[7])
  }
  return res
//})
    })
    });
  },*/

export {abilities}
