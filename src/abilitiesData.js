global.fetch = require('node-fetch');
const GetSheetDone = require('get-sheet-done');
const id = '1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g';

import { rules, traits } from './importImgs'

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
import {
    abilsDesc, materialsLoc, wordsLoc, jobsNamesLoc, charsLoc, chaptersLoc, abilsNamesLoc, passivesNamesLoc, races, rulesLoc, traitsLoc, skillsNamesLoc,
    abilsDescAdjusted, applies, passivesDescAdjusted, skillsDescAdjusted, skillsNamesAdjusted,
    fireName, waterName, windName, earthName, thunderName, darkName, lightName,
    burnName, chillName, seedName, dizzyName, paralysysName, depressName, blindName, venomName, insaneName, bleedName, injuryName, restrainName,
    strName, hpName, agiName, intName, protectName
} from './local/local.js';


export {
    powlvl, unitDesc,
    abilitiesAllInfo, abilitiesArr, descFinale, abilBasic, abilSkills, abilEffects, abilTraits,
    passives, passivesAllInfo, passivesArr, passiveFinale, passiveSkills, passiveEffects, passiveTraits,
    jobsData, jobsStats, jobsDataAll, craft, mats,
    glossAllInfo, appliesAllInfo, glossRaw, applyRaw,
    characters, charsAllInfo, charsAllInfoRaw,
    chapters, chaptAllInfo,
    verlog, verArr,
    dungeon, drulesDataAll, rulesImgs,
    traitsAll, traitsDataAll, traitsImgs, gachas, gachasDataAll,
    faq, faqDataAll
}

let verArr = []
let faqDataAll = []
//skillunits
let powlvl;     // power level table from sheet 4
let unitDesc;  // unit desc table from sheet 4
//abilities
let abilitiesArr = [];   // abilites from sheet 6
let abilitiesAllInfo = [];
let descFinale = []; // name +desc with changed color and X value
let abilSkills = [];  // Damage/Sacrifice/Heal etc
let abilEffects = []  // attr, element etc
let abilTraits = []; // draw, multiply, element, exhaust etc
let abilBasic = [];   // name +rarity+ cost
//passives
let passives = [];  // passives skillunits
let passivesArr = [];
let passivesAllInfo = [];
let passiveFinale = []  // passiveswith changed color and x value
let passiveSkills = []; // turnDamage/turnHeal etc
let passiveEffects = [] // attr, element etc
let passiveTraits = [];
//jobs
let jobsDataAll = []//jobs
let jobsStats;
let craft = [];
let mats = [];   //materials to craft jobs
//glossary
let glossAllInfo = [];
let appliesAllInfo = []
let glossRaw = []
let applyRaw = [];
//characters
let charsAllInfo = [];
let charsAllInfoRaw = [] //without colors and icons on keywords
//chapters
let chaptAllInfo = []
//glossAllInfo.length = 63
let drulesDataAll = []
let rulesImgs = []
let traitsDataAll = []
let traitsImgs = []
let gachasDataAll = []

var name, desc, desc1, desc2, desc3, desc4
function getDesc(arrToGet, arrToMap, arrToCompare, powlvl, skill, effect, multiplier) {

    arrToGet.push(arrToMap.map(row => {

        desc = arrToCompare.filter(res => row[skill] == res.skill && row[effect] == res.type)
        row = row == undefined ? 'n/a' : row
        var multi1 = powlvl.filter(lvl => lvl.lvl == row[multiplier]) || ''
        var multi1maxhp = multi1.map(multi => multi.maxHP)
        var multi1attr = multi1.map(multi => multi.strAgiInt)
        row[skill] = row[skill] == undefined ? 'n/a' : row[skill]
        if (row[skill] == 'Buff' && (row[effect] == 'MaxHP' || row[effect] == 'Strength' || row[effect] == 'Agility' || row[effect] == 'Intelligence')) {

            desc[0] = desc.map(desc => desc.desc)
            //  desc[0] = 'Gain ' + row[multiplier] +  ' ' + desc
            desc = desc[0]
            if (desc[0].includes('10x%')) {
                desc = desc[0].length > 0 ? desc[0].replace('10x%', 10 * row[multiplier] + '%') : desc
            } else {
                desc = desc[0].length > 0 ? desc[0].replace('X', row[multiplier]) : desc
            }


        } else if (row[skill] == 'Debuff' && (row[effect] == 'MaxHP' || row[effect] == 'Strength' || row[effect] == 'Agility' || row[effect] == 'Intelligence')) {
            desc[0] = desc.map(desc => desc.desc)
            //  desc[0] = 'Apply ' + row[multiplier] +  ' ' + desc + ' to the enemy'
            desc = desc[0]
            if (desc[0].includes('10X%')) {
                desc = desc[0].length > 0 ? desc[0].replace('10X%', 10 * row[multiplier] + '%') : desc
            } else {
                desc = desc[0].length > 0 ? desc[0].replace('X', row[multiplier]) : desc
            }
        } else if (arrToCompare == passives && row[skill] == 'Upgrade') {
            desc[0] = desc.map(desc => desc.desc)
            desc = desc[0]
        } else if (arrToCompare == passives && row[skill] == 'Protect' && row[effect] == 'Direct') {
            desc[0] = desc.map(desc => desc.desc)
            desc = desc[0]
        } else if (arrToCompare == passives && row[skill] == 'Sacrifice' && row[effect] == 'Charge') {
            desc[0] = desc.map(desc => desc.desc)[0].replace('X', row[multiplier])
            desc = desc[0]
        } else if (arrToCompare == passives && row[skill] == 'Sacrifice' && row[effect] == 'Guard') {
            desc[0] = desc.map(desc => desc.desc)[0].replace('X', row[multiplier])
            desc = desc[0]
        } else if (row[skill].includes('Damage') || row[skill].includes('Heal') || row[skill].includes('Reflect') || row[skill].includes("Protect") && (row[effect] == 'MaxHP' || row[effect] == 'Strength' || row[effect] == 'Agility' || row[effect] == 'Intelligence' || row[effect] == 'Null')) {

            desc = row[effect] == 'MaxHP' ? desc.map(desc => desc.desc.replace('X%', multi1maxhp)) : desc.map(desc => desc.desc.replace('X%', multi1attr))
            desc[0] = desc[0] == undefined ? '' : desc[0]
            //   desc = row[effect] == 'Null' ? desc[0].replace('X', row[multiplier]) : desc
            desc = desc[0].replace('X%', '')
            desc = desc.replace('X', row[multiplier])
        } else {

            desc = row[skill] == 'Sacrifice' && row[effect] == 'MaxHP' ? desc.map(desc => desc.desc.replace('10x%', multi1maxhp)) : desc.map(desc => desc.desc)
            if (desc != undefined) {
                //  console.log(desc)
                //   desc = desc[0].replace('X', row[multiplier])
            }
            desc = desc[0] == undefined ? '' : desc[0].replace('X%', '%')
            desc = desc.replace('X', row[multiplier])
            desc = (row[skill] == 'Buff' || row[skill] == 'InstantBoost') ? desc.replace('Add/minus', 'Add') : desc
            desc = row[skill] == 'Debuff' ? desc.replace('Add/minus', 'Minus') : desc
            desc = row[skill] == 'Buff' ? desc.replace('10%', 10 * row[multiplier] + '%') : desc
            desc = row[skill] == 'Vulnerable' ? desc.replace('Apply', 'Apply ' + row[multiplier]) : desc

        }
        let name;
        row[skill] = row[skill] == 'n/a' ? '' : row[skill]
        //   console.log(abilsNamesLoc.filter(a => a[2] == row[2])[0][2])
        let lang = document.getElementById('langSel').value
        switch (lang) {
            case 'English':
                if (arrToCompare == passives) {
                    // console.log(row[2])
                    //      passivesNamesLoc.map(a => console.log(a))
                    name = passivesNamesLoc.filter(a => a[1] == row[2])[0] == undefined ? row[2] : passivesNamesLoc.filter(a => a[1] == row[2])[0][1]
                } else {
                    name = abilsNamesLoc.filter(a => a[1] == row[2])[0] == undefined ? row[2] : abilsNamesLoc.filter(a => a[1] == row[2])[0][1]
                }

                break
            case 'Chinese':
                if (arrToCompare == passives) {
                    name = passivesNamesLoc.filter(a => a[2] == row[2])
                    if (name && name[0]) name = name[0][2]
                } else {
                    name = abilsNamesLoc.filter(a => a[2] == row[2])
                    if (name && name[0]) name = name[0][2]
                }
                break
            case 'Chinese(Trad)':
                if (arrToCompare == passives) {
                    name = passivesNamesLoc.filter(a => a[3] == row[2])
                    if (name && name[0]) name = name[0][3]
                } else {
                    name = abilsNamesLoc.filter(a => a[3] == row[2])
                    if (name && name[0]) name = name[0][3]
                }
                break
            default: name = row[2]
        }

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
        r[i] = r[i].replace('Draw', 'LastResort')
        r[i] = r[i].replace('Multiply', 'Overloaded')
        r[i] = r[i].replace('Charge', 'TurnCharge')
        r[i] = r[i].replace('Action', 'PracticePerfect')
        r[i] = r[i].replace('Buff', 'FocusEnergy')
        r[i] = r[i].replace('Debuff', 'NegativePower')
        r[i] = r[i].replace('Combo', 'Combo Blend')
        r[i] = r[i].replace('Delay', 'Scheduled')
        r[i] = r[i].replace('Direct', 'AutoFire')
        r[i] = r[i].replace('Dice', 'Gamble')
        r[i] = r[i] == 'n/a' ? '' : r[i]
    })
}
function changeColors(arr, nameind) {

    arr.map(r => {
        for (var i = 0; i < r.length; i++) {
            if (i == 20) {

            } else if ((i !== nameind) && (r[i] !== undefined)) {

                // attr change colors
                r[i] = r[i].replace(/\bMaxHp\b|Max HP/gi, '<span class=\'maxhp\'><img class="icon" src="' + maxhpimg + '" alt="hp"/> MaxHP</span>')
                r[i] = r[i].replace(/\bstr\b|\bstrength\b/gi, '<span class=\'strength\'><img class="icon" src="' + strimg + '" alt="str"/> Strength</span>')
                r[i] = r[i].replace(/\bagi\b|\bagility\b/gi, '<span class=\'agility\'><img class="icon" src="' + agiimg + '" alt="agi"/> Agility</span>')
                r[i] = r[i].replace(/\bint\b|\bintelligence\b/gi, '<span class=\'intelligence\'><img class="icon" src="' + intimg + '" alt="int"/> Intelligence</span>')
                r[i] = r[i].replace(/\bprotect\b/gi, '<span class=\'protect\'><img class="icon" src="' + protect + '" alt="protect"/> Protect</span>')
                // elements change color
                r[i] = r[i].replace(/\bwater\b/gi, '<span class=\'water\'><img class="icon" src="' + water + '" alt="water"/> ' + waterName + '</span>')
                r[i] = r[i].replace(/\bfire\b/gi, '<span class=\'fire\'><img class="icon" src="' + fire + '" alt="fire"/> ' + fireName + '</span>')
                r[i] = r[i].replace(/\bearth\b/gi, '<span class=\'earth\'><img class="icon" src="' + earth + '" alt="earth"/> ' + earthName + '</span>')
                r[i] = r[i].replace(/\bwind\b/gi, '<span class=\'wind\'><img class="icon" src="' + wind + '" alt="wind"/> ' + windName + '</span>')
                r[i] = r[i].replace(/\bthunder\b/gi, '<span class=\'thunder\'><img class="icon" src="' + thunder + '" alt="thunder"/>' + thunderName + '</span>')
                r[i] = r[i].replace(/\blight\b/gi, '<span class=\'light\'><img class="icon" src="' + light + '" alt="light"/> ' + lightName + '</span>')
                r[i] = r[i].replace(/\bdark\b/gi, '<span class=\'dark\'><img class="icon" src="' + dark + '" alt="dark"/> ' + darkName + '</span>')
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
                r[i] = r[i].replace(/\bblind\b/gi, '<span class=\'blind\'><img class="icon" src="' + blind + '" alt="blind"/>Blind</span>')
                r[i] = r[i].replace(/\bvenom\b/gi, '<span class=\'venom\'><img class="icon" src="' + venom + '" alt="venom"/>Venom</span>')
            } else if (i == nameind) {
                r[i] = r[nameind]
            } else {
                r[i] = ''
            }
        }
    })
}

// merge skill unitis andabilities data to get full info on every ability
let abilities = {
    glossary: () => {
        return GetSheetDone
            .raw(id, 'Skill Unit').then(data => data.data).then(res => {
                res.shift()
                appliesAllInfo = []
                glossAllInfo = []

                res.map((row, ind) => {
                    res[ind].splice(0, 11)
                    res[ind].splice(12)
                })
                changeColors(res, 1)
                res.map(r => glossAllInfo.push(r))
                let end = res.findIndex(r => r[0] == 'Applies')
                glossAllInfo.length = end
                glossAllInfo.map(r => {
                    let translatedName
                    let lang = document.getElementById('langSel').value
                    switch (lang) {
                        case 'English':
                            r[10] = skillsDescAdjusted.filter(loc => loc.includes(r[1]))[0] == undefined ? r[10] : skillsDescAdjusted.filter(loc => loc.includes(r[1]))[0][1]
                            translatedName = skillsNamesAdjusted.filter(loc => loc[0] == r[1])[0]
                            if (translatedName) r[1] = translatedName[1]
                            break;
                        case 'Chinese':
                            r[10] = skillsDescAdjusted.filter(loc => loc.includes(r[1] || loc == r[1]))[0] == undefined ? r[10] : skillsDescAdjusted.filter(loc => loc.includes(r[1]))[0][2]
                            translatedName = skillsNamesAdjusted.filter(loc => loc[0] == r[1])[0]
                            if (translatedName) r[1] = translatedName[2]
                            break;
                        case 'Chinese(Trad)':
                            r[10] = skillsDescAdjusted.filter(loc => loc.includes(r[1] || loc == r[1]))[0] == undefined ? r[10] : skillsDescAdjusted.filter(loc => loc.includes(r[1]))[0][3]
                            translatedName = skillsNamesAdjusted.filter(loc => loc[0] == r[1])[0]
                            if (translatedName) r[1] = translatedName[3]
                            break;
                    }
                })

                res.map(inf => appliesAllInfo.push(inf))
                appliesAllInfo = appliesAllInfo.slice(end + 1, appliesAllInfo.length)
                appliesAllInfo.length = 29
                appliesAllInfo.map(r => {
                    let translatedName
                    let lang = document.getElementById('langSel').value
                    switch (lang) {
                        case 'English':
                            r[10] = skillsDescAdjusted.filter(loc => loc.includes(r[1]))[0] == undefined ? r[10] : skillsDescAdjusted.filter(loc => loc.includes(r[1]))[0][1]
                            translatedName = skillsNamesAdjusted.filter(loc => loc[0] == r[1])[0]
                            if (translatedName) r[1] = translatedName[1]
                            break;
                        case 'Chinese':
                            r[10] = skillsDescAdjusted.filter(loc => loc.includes(r[1] || loc == r[1]))[0] == undefined ? r[10] : skillsDescAdjusted.filter(loc => loc.includes(r[1]))[0][2]
                            translatedName = skillsNamesAdjusted.filter(loc => loc[1] == r[1])[0]
                            if (translatedName) r[1] = translatedName[2]
                            break;
                        case 'Chinese(Trad)':
                            r[10] = skillsDescAdjusted.filter(loc => loc.includes(r[1] || loc == r[1]))[0] == undefined ? r[10] : skillsDescAdjusted.filter(loc => loc.includes(r[1]))[0][3]
                            translatedName = skillsNamesAdjusted.filter(loc => loc[1] == r[1])[0]
                            if (translatedName) r[1] = translatedName[3]
                            break;
                    }
                })

                glossAllInfo = glossAllInfo.map(g => g = g[1] == undefined ? ['N/A', 'N/A'] : g)
                glossRaw = glossAllInfo.filter(gl => gl[1].includes('Boost') == false
                    && gl[1].includes('Buff') == false
                    && gl[1].includes('Debuff') == false
                    && gl[1].includes('Vulnerable') == false)

                glossRaw.splice(2, 2)
                glossRaw.splice(0, 0, res[0], res[14], res[31], res[49])

                //  glossRaw = glossRaw.map((row, ind)=> {
                //    if (ind < 6) {
                //      row[1] = row[1].replace(/Strength|Fire|Intelligence/, '')
                //    }
                //  })
            })
    },
    glossRaw: () => {
        return GetSheetDone
            .raw(id, 'Skill Unit').then(data => data.data).then(res => {
                res.shift()

                res.map((row, ind) => {
                    res[ind].splice(0, 11)
                    res[ind].splice(12)
                })
                changeColors(res, 1)
                let end = res.findIndex(r => r[0] == 'Applies')
                res.length = end
                glossRaw = res.filter(gl => gl[1].includes('Boost') == false
                    && gl[1].includes('Buff') == false
                    && gl[1].includes('Debuff') == false
                    && gl[1].includes('Element') == false
                    && gl[1].includes('Vulnerable') == false)

                glossRaw.splice(2, 2)
                let rage = ['', 'Rage']
                let instinct = ['', 'Instinct']
                let master = ['', 'Master']
                let element = ['', 'Element']

                glossRaw.splice(0, 0, res[0], res[14], res[31], res[49], rage, instinct, master, element)
                glossRaw.map((row, ind) => {
                    row.length = 12;
                    row[1] = row[1].replace(/Strength|Fire|Intelligence/, '')
                    switch (row[1].trim()) {
                        case 'InstantBoost':
                            row[10] = 'Buff next action\'s <em>attribute/ element</em> attack, heal and protect by 5X% (Max 75%, 100% if upgraded)'
                            break;
                        case 'Buff':
                            row[10] = 'Buff <em>attribute</em> by 10X% for x turn'
                            break;
                        case 'Debuff':
                            row[10] = 'For next action\'s <em>element</em> attack or heal, boost 5X% (Max 75%, 100% if upgraded)'
                            break;
                        case 'Vulnerable':
                            row[10] = 'Received 5X% more damage from <em>attribute/element</em> damage, boost <em>element corresponding debuff</em> effect by 10%'
                            break;
                        case 'Protect Pierce: ':
                            row[10] = '10X% damage will pierce through Protect (Max 100%)'
                            break;
                        case 'Rage':
                            row[10] = 'HP below 50%, buff attack damage by 5x% (Max 50%)'
                            break;
                        case 'Instinct':
                            row[10] = 'HP below 50%, damage mitigate by 5x% (Max 50%)'
                            break;
                        case 'Element':
                            row[10] = 'Deal 5X% more damage to target <em>corresponding debuff</em> and <em>element</em>, and reduce 5X% damage from <em>element</em>.<br><br>'
                                + '<img class="icon" src="' + fire + '" alt="water"/>' + fireName + '</span>: <img class="icon" src="' + burn + '" alt="chill"/>Burn</span><br>'
                                + '<img class="icon" src="' + water + '" alt="water"/>Water</span>: <img class="icon" src="' + chill + '" alt="chill"/>Chill</span><br>'
                                + '<img class="icon" src="' + thunder + '" alt="water"/>Thunder</span>: <img class="icon" src="' + paralysis + '" alt="chill"/>Paralysis</span><br>'
                                + '<img class="icon" src="' + earth + '" alt="water"/>Earth</span>: <img class="icon" src="' + seed + '" alt="chill"/>Seed</span><br>'
                                + '<img class="icon" src="' + wind + '" alt="water"/>Wind</span>: <img class="icon" src="' + dizzy + '" alt="chill"/>Dizzy</span><br>'
                                + '<img class="icon" src="' + dark + '" alt="water"/>Dark</span>: <img class="icon" src="' + depress + '" alt="chill"/>Depress</span><br>'
                                + '<img class="icon" src="' + light + '" alt="water"/>Light</span>: <img class="icon" src="' + blind + '" alt="chill"/>Blind</span>'
                            break;
                        case 'Master':
                            row[10] = 'Attribute: buff/act buff max stack increase, required combo -1<br><br>'
                                + 'Debuff: Max stack increase for stat debuff, Venom, Restrain and Insane<br><br>'
                                + 'Combo: All Stat combo required decrease<br><br>'
                                + 'Skill Stack: Max stack increase for turn charge, practice perfect<br><br>'
                                + 'Charge/Guard: Upgrade Charge and Stack Charge/Guard and Stack Guadr<br><br>'
                                + 'LifeSteal: Normal attack gain 25% lifesteal, buff life steal skills<br><br>'
                                + 'Race: Apply race Expert to every attack and heal<br><br>'
                                + 'Element: Increase max stack for element, corresponding debuff boost <br><br>'
                                + 'Normal:On every Hero level up, increase direct damage, heal and protect value by 10% <br><br>'
                            break;
                        default:
                    }
                })

                glossRaw = Array.from(glossRaw).sort(function (a, b) {
                    return a[1] > b[1] ? 1 : -1;
                })


            })
    },
    apply: () => {
        return GetSheetDone
            .raw(id, 'Skill Unit').then(data => data.data).then(res => {
                res.shift()
                res.map((row, ind) => {
                    res[ind].splice(0, 11)
                    res[ind].splice(12)
                })
                changeColors(res, 1)
                let end = res.findIndex(r => r[0] == 'Applies')
                res = res.slice(end + 17, res.length)
                res.length = 11
                let attr = ['', 'Attribute Synergy']
                let expert = ['', 'Race Expert']
                let element = ['', 'Element']
                let lifesteal = ['', 'Life Steal']
                res.splice(0, 0, attr, expert, element, lifesteal)
                applyRaw = res
                applyRaw.map((row, ind) => {
                    row.length = 12
                    switch (row[1].trim()) {
                        case 'Attribute Synergy':
                            row[10] = 'Boost <em>attribute</em> damage/heal<br>'
                                + '<img class="icon strimg" src="' + strimg + '" alt="water"/>Strength</span><img class="icon hpimg" src="' + maxhpimg + '" alt="water"/>MaxHP: 2X%</span><br>'
                                + '<img class="icon agiimg" src="' + agiimg + '" alt="water"/>Agility</span><img class="icon intimg" src="' + intimg + '" alt="water"/>Intelligence: 1X%</span><br>'
                                + 'X = attr Combo Counter (Max 100%)'
                            break;
                        case 'Race Expert':
                            row[10] = 'If race matches, 30% more damage for enemy, 30% more heal on self'
                            break;
                        case 'Life Steal':
                            row[10] = 'Add 50%, 100% if upgraeded life steal on ability\'s attack.'
                            break;
                        case 'Element':
                            row[10] = 'Deal 5X% more damage to target <em>corresponding debuff</em> and <em>element</em>, and reduce 5X% damage from <em>element</em>.<br><br>'
                                + '<img class="icon" src="' + fire + '" alt="water"/>' + fireName + '</span>: <img class="icon" src="' + burn + '" alt="chill"/>Burn</span><br>'
                                + '<img class="icon" src="' + water + '" alt="water"/>Water</span>: <img class="icon" src="' + chill + '" alt="chill"/>Chill</span><br>'
                                + '<img class="icon" src="' + thunder + '" alt="water"/>Thunder</span>: <img class="icon" src="' + paralysis + '" alt="chill"/>Paralysis</span><br>'
                                + '<img class="icon" src="' + earth + '" alt="water"/>Earth</span>: <img class="icon" src="' + seed + '" alt="chill"/>Seed</span><br>'
                                + '<img class="icon" src="' + wind + '" alt="water"/>Wind</span>: <img class="icon" src="' + dizzy + '" alt="chill"/>Dizzy</span><br>'
                                + '<img class="icon" src="' + dark + '" alt="water"/>Dark</span>: <img class="icon" src="' + depress + '" alt="chill"/>Depress</span><br>'
                                + '<img class="icon" src="' + light + '" alt="water"/>Light</span>: <img class="icon" src="' + blind + '" alt="chill"/>Blind</span>'
                            break;
                        default:
                    }
                })

            })
    },
    units: () => {
        return GetSheetDone
            .raw(id, 'Skill Unit').then(data => data.data).then(res => {
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
                    let lang = document.getElementById('langSel').value
                    row[9] = abilsDescAdjusted.filter(name => name[0] == row[6]).length == 0 ? row[9] : abilsDescAdjusted.filter(name => name[0] == row[6])[0] // switch
                    row[24] = row[24] == undefined ? '' : row[24]
                    row[9] = row[9] == undefined ? 'n//a' : row[9]
                    row[30] = passivesDescAdjusted.filter(name => name[0] == undefined ? '' : name[0] == row[24].trim())[0] //passive
                    //   console.log(passivesDescAdjusted.filter(name => name[0] == 'Damage Mitigate'))

                    switch (lang) {
                        case 'English':
                            row[9] = row[9].length < 10 ? row[9][1] : row[9]
                            row[30] = row[30] == undefined ? '' : row[30]
                            row[30] = row[30].length < 10 ? row[30][1] : row[30]
                            break;
                        case 'Chinese':
                            row[9] = row[9].length < 10 ? row[9][2] : row[9]
                            row[30] = row[30] == undefined ? '' : row[30]
                            row[30] = row[30].length < 10 ? row[30][2] : row[30]
                            break;
                        case 'Chinese(Trad)':
                            row[9] = row[9].length < 10 ? row[9][3] : row[9]
                            row[30] = row[30] == undefined ? '' : row[30]
                            row[30] = row[30].length < 10 ? row[30][3] : row[30]
                            break;
                    }
                    //attr
                    console.log('row9', row[9])
                    if (row[9]) {
                        row[9] = row[9].replace(hpName, '<span class=\'maxhp\'><img class="icon" src="' + maxhpimg + '" alt="hp"/> ' + hpName + '</span>')
                        row[9] = row[9].replace(strName, '<span class=\'strength\'><img class="icon" src="' + strimg + '" alt="str"/> ' + strName + '</span>')
                        row[9] = row[9].replace(agiName, '<span class=\'agility\'><img class="icon" src="' + agiimg + '" alt="agi"/> ' + agiName + '</span>')
                        row[9] = row[9].replace(intName, '<span class=\'intelligence\'><img class="icon" src="' + intimg + '" alt="int"/> ' + intName + '</span>')
                        row[9] = row[9].replace(protectName, '<span class=\'protect\'><img class="icon" src="' + protect + '" alt="protect"/> ' + protectName + '</span>')
                        /* row[6] = row[6].replace(/\bMaxHp\b/gi, '<span class=\'maxhp\'><img class="icon" src="' + maxhpimg + '" alt="hp"/> MaxHP</span>')
                         row[6] = row[6].replace(/\bstr\b|\bStrength\b/gi, '<span class=\'strength\'><img class="icon" src="' + strimg + '" alt="str"/> Strength</span>')
                         row[6] = row[6].replace(/\bagi\b|\bAgility\b/gi, '<span class=\'agility\'><img class="icon" src="' + agiimg + '" alt="agi"/> Agility</span>')
                         row[6] = row[6].replace(/\bint\b|\bIntelligence\b/gi, '<span class=\'intelligence\'><img class="icon" src="' + intimg + '" alt="int"/> Intelligence</span>')
                         row[6] = row[6].replace(/\bprotect\b/gi, '<span class=\'protect\'><img class="icon" src="' + protect + '" alt="protect"/> Protect</span>')*/
                        //elements
                        row[9] = row[9].replace(waterName, '<span class=\'water\'><img class="icon" src="' + water + '" alt="water"/> ' + waterName + '</span>')
                        row[9] = row[9].replace(fireName, '<span class=\'fire\'><img class="icon" src="' + fire + '" alt="fire"/> ' + fireName + '</span>')
                        row[9] = row[9].replace(earthName, '<span class=\'earth\'><img class="icon" src="' + earth + '" alt="earth"/> ' + earthName + '</span>')
                        row[9] = row[9].replace(windName, '<span class=\'wind\'><img class="icon" src="' + wind + '" alt="wind"/> ' + windName + '</span>')
                        row[9] = row[9].replace(thunderName, '<span class=\'thunder\'><img class="icon" src="' + thunder + '" alt="thunder"/> ' + thunderName + '</span>')
                        row[9] = row[9].replace(lightName, '<span class=\'light\'><img class="icon" src="' + light + '" alt="light"/> ' + lightName + '</span>')
                        row[9] = row[9].replace(darkName, '<span class=\'dark\'><img class="icon" src="' + dark + '" alt="dark"/> ' + darkName + '</span>')
                        /* row[6] = row[6].replace(/\bwater\b/gi, '<span class=\'water\'><img class="icon" src="' + water + '" alt="water"/> Water</span>')
                         row[6] = row[6].replace(/\bfire\b/gi, '<span class=\'fire\'><img class="icon" src="' + fire + '" alt="fire"/> ' + fireName + '</span>')
                         row[6] = row[6].replace(/\bearth\b/gi, '<span class=\'earth\'><img class="icon" src="' + earth + '" alt="earth"/> Earth</span>')
                         row[6] = row[6].replace(/\bwind\b/gi, '<span class=\'wind\'><img class="icon"src="' + wind + '" alt="wind"/> Wind</span>')
                         row[6] = row[6].replace(/\bthunder\b/gi, '<span class=\'thunder\'><img class="icon" src="' + thunder + '" alt="thunder"/> Thunder</span>')
                         row[6] = row[6].replace(/\blight\b/gi, '<span class=\'light\'><img class="icon" src="' + light + '" alt="light"/> Light</span>')
                         row[6] = row[6].replace(/\bdark\b/gi, '<span class=\'dark\'><img class="icon" src="' + dark + '" alt="dark"/> Dark</span>')*/
                        //debuffs
                        row[9] = row[9].replace(blindName, '<span class=\'blind\'><img class="icon" src="' + blind + '" alt="blind"/>' + blindName + '</span>')
                        row[9] = row[9].replace(bleedName, '<span class=\'bleed\'><img class="icon" src="' + bleed + '" alt="bleed"/>' + bleedName + '</span>')
                        row[9] = row[9].replace(insaneName, '<span class=\'insane\'><img class="icon" src="' + insane + '" alt="insane"/>' + insaneName + '</span>')
                        row[9] = row[9].replace(depressName, '<span class=\'depress\'><img class="icon" src="' + depress + '" alt="depress"/>' + depressName + '</span>')
                        row[9] = row[9].replace(burnName, '<span class=\'burn\'><img class="icon" src="' + burn + '" alt="burn"/>' + burnName + '</span>')
                        row[9] = row[9].replace(dizzyName, '<span class=\'dizzy\'><img class="icon" src="' + dizzy + '" alt="dizzy"/>' + dizzyName + '</span>')
                        row[9] = row[9].replace(chillName, '<span class=\'chill\'><img class="icon" src="' + chill + '" alt="chill"/>' + chillName + '</span>')
                        row[9] = row[9].replace(injuryName, '<span class=\'injury\'><img class="icon" src="' + injury + '" alt="injury"/>' + injuryName + '</span>')
                        row[9] = row[9].replace(paralysysName, '<span class=\'paralysis\'><img class="icon" src="' + paralysis + '" alt="paralysis"/>' + paralysysName + '</span>')
                        row[9] = row[9].replace(restrainName, '<span class=\'restrain\'><img class="icon" src="' + restrain + '" alt="restrained"/>' + restrainName + '</span>')
                        row[9] = row[9].replace(seedName, '<span class=\'seed\'><img class="icon" src="' + seed + '" alt="seed"/>' + seedName + '</span>')
                        row[9] = row[9].replace(venomName, '<span class=\'venom\'><img class="icon" src="' + venom + '" alt="venom"/>' + venomName + '</span>')
                        /*  row[6] = row[6].replace(/\bblind\b/gi, '<span class=\'blind\'><img class="icon" src="' + blind + '" alt="blind"/>Blind</span>')
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
                          row[6] = row[6].replace(/\bvenom\b/gi, '<span class=\'venom\'><img class="icon" src="' + venom + '" alt="venom"/>Venom</span>')*/
                    }


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
                    row[30] = row[30].replace(/\bMaxHp|Max HP\b/gi, '<span class=\'maxhp\'><img class="icon" src="' + maxhpimg + '" alt="hp"/> MaxHP</span>')
                    row[30] = row[30].replace(/\bagi\b|\bagility\b/gi, '<span class=\'agi\'><img class="icon" src="' + agiimg + '" alt="agi"/> Agility</span>')
                    row[30] = row[30].replace(/\bstr\b|\bstrength\b/gi, '<span class=\'str\'><img class="icon" src="' + strimg + '" alt="str"/> Strength</span>')
                    row[30] = row[30].replace(/\bint\b|\bintelligence\b/gi, '<span class=\'intelligence\'><img class="icon" src="' + intimg + '" alt="int"/> Intelligence</span>')
                    row[30] = row[30].replace(/\bprotect\b/gi, '<span class=\'protect\'><img class="icon" src="' + protect + '" alt="protect"/> Protect</span>')
                    row[24] = row[24].replace(/\bMaxHp|Max HP\b/gi, '<span class=\'maxhp\'><img class="icon" src="' + maxhpimg + '" alt="hp"/> MaxHP</span>')
                    row[24] = row[24].replace(/\bagi\b|\bagility\b/gi, '<span class=\'agility\'><img class="icon" src="' + agiimg + '" alt="agi"/> Agility</span>')
                    row[24] = row[24].replace(/\bstr\b|\bstrength\b/gi, '<span class=\'strength\'><img class="icon" src="' + strimg + '" alt="str"/> Strength</span>')
                    row[24] = row[24].replace(/\bint\b|\bintelligence\b/gi, '<span class=\'intelligence\'><img class="icon" src="' + intimg + '" alt="int"/> Intelligence</span>')
                    row[24] = row[24].replace(/\bprotect\b/gi, '<span class=\'protect\'><img class="icon" src="' + protect + '" alt="protect"/> Protect</span>')
                    //elements
                    row[30] = row[30].replace(/\bwater\b/gi, '<span class=\'water\'><img class="icon" src="' + water + '" alt="water"/> Water</span>')
                    row[30] = row[30].replace(/\bfire\b/gi, '<span class=\'fire\'><img class="icon" src="' + fire + '" alt="fire"/> ' + fireName + '</span>')
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

    abils: () => {

        return GetSheetDone
            .raw(id, 'Abilities').then(data => data.data).then(res => {
                res.shift()
                changeApply(res, 17)
                changeApply(res, 18)
                changeApply(res, 19)
                let lang = document.getElementById('langSel').value
                switch (lang) {
                    case 'English':
                        res.map(r => {
                            let skillunits = [r[5], r[6], r[8], r[9], r[11], r[12], r[14], r[15]]
                            let translatedName = abilsNamesLoc.filter(loc => loc[0] == r[2])
                            r[2] = translatedName[0] == undefined ? r[2] : translatedName[0][1]
                            skillunits.map(el => el == undefined ? el : el.replace(/Fire/gi, fireName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Water/gi, waterName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Earth/gi, earthName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Wind/gi, windName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Thunder/gi, thunderName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Dark/gi, darkName))
                            skillunits.map(el => el == undefined ? el : el.replace(/light/gi, lightName))
                            // applies

                            let applyTranslated1 = applies.filter(a => a[0] == r[17])[0]
                            r[17] = applyTranslated1 == undefined ? r[17] : applyTranslated1[1]
                            let applyTranslated2 = applies.filter(a => a[0] == r[18])[0]
                            r[18] = applyTranslated2 == undefined ? r[18] : applyTranslated2[1]
                            let applyTranslated3 = applies.filter(a => a[0] == r[19])[0]
                            r[19] = applyTranslated3 == undefined ? r[19] : applyTranslated3[1]
                            //  let translatedRar = wordsLoc.filter(loc => loc[1] == r[2])
                            //  r[2] = translatedRar[0][1]
                            /*if (r[3] != undefined) {
                                r[3] = r[3].split('|').map(jobs => jobs.split('-').map(j => jobsNamesLoc.find(loc => loc[0] == j && j.length > 1) == undefined ? '' : jobsNamesLoc.find(loc => loc[0] == j && j.length > 1)[1]).join('-')).join('|')
                            }*/
                        })
                        break
                    case 'Chinese':
                        res.map(r => {
                            let skillunits = [r[5], r[6], r[8], r[9], r[11], r[12], r[14], r[15]]
                            let translated = abilsNamesLoc.filter(loc => loc[0] == r[2])
                            if (translated && translated[0]) r[2] = translated[0][2]
                            skillunits.map(el => el == undefined ? el : el.replace(/Fire/gi, fireName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Water/gi, waterName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Earth/gi, earthName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Wind/gi, windName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Thunder/gi, thunderName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Dark/gi, darkName))
                            skillunits.map(el => el == undefined ? el : el.replace(/light/gi, lightName))
                            r[3] = wordsLoc.filter(loc => loc[1] == r[3])[0][2]
                            // applies

                            let applyTranslated1 = applies.filter(a => a[0] == r[17])[0]
                            r[17] = applyTranslated1 == undefined ? r[17] : applyTranslated1[2]
                            let applyTranslated2 = applies.filter(a => a[0] == r[18])[0]
                            r[18] = applyTranslated2 == undefined ? r[18] : applyTranslated2[2]
                            let applyTranslated3 = applies.filter(a => a[0] == r[19])[0]
                            r[19] = applyTranslated3 == undefined ? r[19] : applyTranslated3[2]

                            /*   let translatedRar = wordsLoc.filter(loc => loc[1] == r[2])
                               r[2] = translatedRar[0][2]
                               if (r[3] != undefined) {
                                   r[3] = r[3].split('|').map(jobs => jobs.split('-').map(j => jobsNamesLoc.find(loc => loc[0] == j && j.length > 1) == undefined ? '' : jobsNamesLoc.find(loc => loc[0] == j && j.length > 1)[2]).join('-')).join('|')
                                   // r[3] = r[3].join('|')
                               }*/

                        })
                        break
                    case 'Chinese(Trad)':
                        res.map(r => {
                            let skillunits = [r[5], r[6], r[8], r[9], r[11], r[12], r[14], r[15]]
                            let translated = abilsNamesLoc.filter(loc => loc[0] == r[3])
                            if (translated && translated[0]) r[2] = translated[0][3]
                            r[3] = wordsLoc.filter(loc => loc[1] == r[3])[0][3]
                            skillunits.map(el => el == undefined ? el : el.replace(/Fire/gi, fireName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Water/gi, waterName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Earth/gi, earthName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Wind/gi, windName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Thunder/gi, thunderName))
                            skillunits.map(el => el == undefined ? el : el.replace(/Dark/gi, darkName))
                            skillunits.map(el => el == undefined ? el : el.replace(/light/gi, lightName))
                            // applies
                            let applyTranslated1 = applies.filter(a => a[0] == r[17])[0]
                            r[17] = applyTranslated1 == undefined ? r[17] : applyTranslated1[3]
                            let applyTranslated2 = applies.filter(a => a[0] == r[18])[0]
                            r[18] = applyTranslated2 == undefined ? r[18] : applyTranslated2[3]
                            let applyTranslated3 = applies.filter(a => a[0] == r[19])[0]
                            r[19] = applyTranslated3 == undefined ? r[19] : applyTranslated3[3]
                            /*let translatedRar = wordsLoc.filter(loc => loc[1] == r[2])
                            r[2] = translatedRar[0][3]
                            if (r[3] != undefined) {
                                r[3] = r[3].split('|').map(jobs => jobs.split('-').map(j => jobsNamesLoc.find(loc => loc[0] == j && j.length > 1) == undefined ? '' : jobsNamesLoc.find(loc => loc[0] == j && j.length > 1)[3]).join('-')).join('|')
                                // r[3] = r[3].join('|')
                            }*/
                        })
                        break
                }
                abilitiesAllInfo = res
                // call the function to get the desc for each of 4 skill units that build ability desc
                abilitiesArr = []
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
                descFinale = descFinale.map(desc => desc.replace(/<br><br><br>|<br><br>/, '<br>'))
                changeColors(res, 2)  // change colors of keywords in skills/effects/traits


                //get cost+tier / skills / effects / TRAITS arrays
                res.map(res => abilBasic.push(res[2] + ':' + res[3]/*tier*/ + '\t\t' + res[4]/*cost*/))
                res.map(res => abilSkills.push(res[2] + ':<br>' + (res[5] || '') + ', ' + (res[8] || '') + ', ' + (res[11] || '') + ', ' + (res[14] || '')))
                res.map(res => abilEffects.push(res[2] + ':<br>' + (res[6] || '') + ', ' + (res[9] || '') + ', ' + (res[12] || '') + ', ' + (res[15] || '')))
                res.map(res => abilTraits.push(res[2] + ':<br>' + (res[17] || '') + ', ' + (res[18] || '') + ', ' + (res[19] || '')))
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


    passivesFn: () => {
        return GetSheetDone
            .raw(id, 'PassiveSkills').then(data => data.data).then(res => {
                res.shift()

                changeApply(res, 16)
                changeApply(res, 17)
                changeApply(res, 18)
                let lang = document.getElementById('langSel').value
                switch (lang) {
                    case 'English':
                        res.map(r => {

                            let translatedName = passivesNamesLoc.filter(loc => loc[0] == r[2])[0]
                            r[2] = translatedName == undefined ? r[2] : translatedName[1]
                            // applies
                            if (applies !== undefined) {
                                let applyTranslated1 = applies.filter(a => a[0] == r[16])[0]
                                r[16] = applyTranslated1 == undefined ? r[16] : applyTranslated1[1]
                                let applyTranslated2 = applies.filter(a => a[0] == r[17])[0]
                                r[17] = applyTranslated2 == undefined ? r[17] : applyTranslated2[1]
                                let applyTranslated3 = applies.filter(a => a[0] == r[18])[0]
                                r[18] = applyTranslated3 == undefined ? r[18] : applyTranslated3[1]
                            }

                        })
                        break
                    case 'Chinese':
                        res.map(r => {
                            let translatedName = passivesNamesLoc.filter(loc => loc[0] == r[2])[0]
                            r[2] = translatedName == undefined ? r[2] : translatedName[2]
                            r[3] = wordsLoc.filter(loc => loc[1] == r[3])[0][2]
                            // applies

                            let applyTranslated1 = applies.filter(a => a[0] == r[16])[0]
                            r[16] = applyTranslated1 == undefined ? r[16] : applyTranslated1[2]
                            let applyTranslated2 = applies.filter(a => a[0] == r[17])[0]
                            r[17] = applyTranslated2 == undefined ? r[17] : applyTranslated2[2]
                            let applyTranslated3 = applies.filter(a => a[0] == r[18])[0]
                            r[18] = applyTranslated3 == undefined ? r[18] : applyTranslated3[2]
                        })
                        break
                    case 'Chinese(Trad)':
                        res.map(r => {
                            let translated = passivesNamesLoc.filter(loc => loc[0] == r[2])[0]
                            r[2] = translated == undefined ? r[2] : translated[3]
                            r[3] = wordsLoc.filter(loc => loc[1] == r[3])[0][3]

                            // applies
                            let applyTranslated1 = applies.filter(a => a[0] == r[16])[0]
                            r[16] = applyTranslated1 == undefined ? r[16] : applyTranslated1[3]
                            let applyTranslated2 = applies.filter(a => a[0] == r[17])[0]
                            r[17] = applyTranslated2 == undefined ? r[17] : applyTranslated2[3]
                            let applyTranslated3 = applies.filter(a => a[0] == r[18])[0]
                            r[18] = applyTranslated3 == undefined ? r[18] : applyTranslated3[3]
                        })
                        break
                }
                passivesAllInfo = res
                passivesArr = []
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
                        + '<br>' + (desc4[i].desc || ''))
                }
                passiveFinale = passiveFinale.map(desc => desc.replace(/<br><br><br>|<br><br>/, '<br>'))
                changeColors(res, 2)  // change colors of keywords in skills/effects/traits

                //  res.map(res=> abilBasic.push(res[2] + ':' + res[3] + '\t\t' + res[4]))
                res.map(res => passiveSkills.push(res[2] + ':' + (res[4] || '') + ', ' + (res[7] || '') + ', ' + (res[10] || '') + ', ' + (res[13] || '')))
                res.map(res => passiveEffects.push(res[2] + ':' + (res[5] || '') + ', ' + (res[8] || '') + ', ' + (res[11] || '') + ', ' + (res[14] || '')))
                res.map(res => passiveTraits.push(res[2] + ': ' + (res[16] || '') + ', ' + (res[17] || '') + ', ' + (res[18] || '')))

            })
    },
};


let jobsData = {
    jobs: () => {
        return GetSheetDone

            .labeledCols(id, 'Jobs').then(data => data.data).then(res => {
                
                res.shift()
                let lang = document.getElementById('langSel').value
                switch (lang) {
                    case 'English':
                        res.map(r => {

                            let nameTranslated = jobsNamesLoc.filter(loc => loc[0] == r[1])
                            if (nameTranslated != undefined && nameTranslated[0]) r[1] = nameTranslated[0] == undefined ? r[6] : nameTranslated[0][1]

                            let passTranslated = passivesNamesLoc.filter(loc => loc[0] == r[7])
                            if (passTranslated != undefined) r[7] = passTranslated[0] == undefined ? r[7] : passTranslated[0][1]

                            let switchTranslated = abilsNamesLoc.filter(loc => loc[0] == r[8])
                            if (switchTranslated != undefined) r[8] = switchTranslated[0] == undefined ? r[8] : switchTranslated[0][1]

                            let ab5translated = abilsNamesLoc.filter(loc => loc[0] == r[9])
                            if (ab5translated != undefined) r[9] = ab5translated[0] == undefined ? r[9] : ab5translated[0][1]

                            let ab3translated = abilsNamesLoc.filter(loc => loc[0] == r[10])
                            if (ab3translated != undefined) r[10] = ab3translated[0] == undefined ? r[10] : ab3translated[0][1]

                            let ab2translated = abilsNamesLoc.filter(loc => loc[0] == r[11])
                            if (ab2translated != undefined) r[11] = ab2translated[0] == undefined ? r[11] : ab2translated[0][1]

                            let ab1translated = abilsNamesLoc.filter(loc => loc[0] == r[12])
                            if (ab1translated != undefined) r[12] = ab1translated[0] == undefined ? r[12] : ab1translated[0][1]

                        })

                        break;
                    case 'Chinese':
                        res.map(r => {
                            let nameTranslated = jobsNamesLoc.filter(loc => loc[0] == r[1])
                            if (nameTranslated != undefined && nameTranslated[0]) r[1] = nameTranslated[0][2]

                            let abilTranslated = abilsNamesLoc.filter(loc => loc[0] == r[8])
                            if (abilTranslated[0] != undefined) r[8] = abilTranslated[0][2]

                            let passTranslated = passivesNamesLoc.filter(loc => loc[0] == r[7])
                            if (passTranslated != undefined) r[7] = passTranslated[0] == undefined ? r[7] : passTranslated[0][2]

                            let ab5translated = abilsNamesLoc.filter(loc => loc[0] == r[9])
                            if (ab5translated != undefined) r[9] = ab5translated[0] == undefined ? r[9] : ab5translated[0][2]

                            let ab3translated = abilsNamesLoc.filter(loc => loc[0] == r[10])
                            if (ab3translated != undefined) r[10] = ab3translated[0] == undefined ? r[10] : ab3translated[0][2]

                            let ab2translated = abilsNamesLoc.filter(loc => loc[0] == r[11])
                            if (ab2translated != undefined) r[11] = ab2translated[0] == undefined ? r[11] : ab2translated[0][2]

                            let ab1translated = abilsNamesLoc.filter(loc => loc[0] == r[12])
                            if (ab1translated != undefined) r[12] = ab1translated[0] == undefined ? r[12] : ab1translated[0][2]
                        })
                        break;
                    case 'Chinese(Trad)':
                        res.map(r => {
                            let nameTranslated = jobsNamesLoc.filter(loc => loc[0] == r[1])
                            if (nameTranslated != undefined && nameTranslated[0]) r[1] = nameTranslated[0][3]

                            let abilTranslated = abilsNamesLoc.filter(loc => loc[0] == r[8])
                            if (abilTranslated != undefined && abilTranslated[0]) r[8] = abilTranslated[0][3]

                            let passTranslated = passivesNamesLoc.filter(loc => loc[0] == r[7])
                            if (passTranslated != undefined && passTranslated[0]) r[7] = passTranslated[0] == undefined ? r[7] : passTranslated[0][3]

                            let ab5translated = abilsNamesLoc.filter(loc => loc[0] == r[9])
                            if (ab5translated != undefined) r[9] = ab5translated[0] == undefined ? r[9] : ab5translated[0][3]

                            let ab3translated = abilsNamesLoc.filter(loc => loc[0] == r[10])
                            if (ab3translated != undefined) r[10] = ab3translated[0] == undefined ? r[10] : ab3translated[0][3]

                            let ab2translated = abilsNamesLoc.filter(loc => loc[0] == r[11])
                            if (ab2translated != undefined) r[11] = ab2translated[0] == undefined ? r[11] : ab2translated[0][3]

                            let ab1translated = abilsNamesLoc.filter(loc => loc[0] == r[12])
                            if (ab1translated != undefined) r[12] = ab1translated[0] == undefined ? r[12] : ab1translated[0][3]
                        })
                        break;
                }
                jobsStats = res.map(job => {
                    return {
                        name: job[1],
                        hp: job[3] / 5,
                        str: job[4] / 1,
                        agi: job[5] / 1,
                        int: job[6] / 1,
                    }
                })
                jobsDataAll = res

            })
    },
    craft: () => {
        return GetSheetDone
            .raw(id, 'Job Craft Chart').then(data => data.data).then(res => {
                let lang = document.getElementById('langSel').value
                res.shift()
                switch (lang) {
                    case 'English':
                        res.map(r => r.map((name, i) => i % 2 == 0 ? materialsLoc.filter(mat => mat[0] == name)[0] == undefined ? name : materialsLoc.filter(mat => mat[0] == name)[0][1] : jobsNamesLoc.filter(mat => mat[0] == name)[0] == undefined ? name : jobsNamesLoc.filter(mat => mat[0] == name)[0][1]))

                        break;
                }
                craft = res
            })
    },
    materials: () => {
        let lang = document.getElementById('langSel').value

        return GetSheetDone
            .raw(id, 'Materials').then(data => data.data).then(res => {
                mats = []
                res.shift()

                switch (lang) {
                    case 'English':
                        res.map(r => {
                            let translatedName = materialsLoc.filter(loc => loc[0] == r[1])
                            r[1] = translatedName[0] == undefined ? r[1] : translatedName[0][1]
                            //  let translatedRar = wordsLoc.filter(loc => loc[1] == r[2])
                            //  r[2] = translatedRar[0][1]
                            /*  if (r[3] != undefined) {
                                  r[3] = r[3].split('|').map(jobs => jobs.split('-').map(j => jobsNamesLoc.find(loc => loc[0] == j && j.length > 1) == undefined ? '' : jobsNamesLoc.find(loc => loc[0] == j && j.length > 1)[1]).join('-')).join('|')
                              }*/
                        })
                        break
                    case 'Chinese':
                        res.map(r => {
                            let translated = materialsLoc.filter(loc => loc[0] == r[1])
                            r[1] = translated[0][2]
                            let translatedRar = wordsLoc.filter(loc => loc[1] == r[2])
                            r[2] = translatedRar[0][2]
                            if (r[3] != undefined) {
                                r[3] = r[3].split('|').map(jobs => jobs.split('-').map(j => jobsNamesLoc.find(loc => loc[0] == j && j.length > 1) == undefined ? '' : jobsNamesLoc.find(loc => loc[0] == j && j.length > 1)[2]).join('-')).join('|')
                                // r[3] = r[3].join('|')

                            }

                        })
                        break
                    case 'Chinese(Trad)':
                        res.map(r => {
                            let translated = materialsLoc.filter(loc => loc[0] == r[1])
                            if (translated && translated[0]) r[1] = translated[0][3]
                            let translatedRar = wordsLoc.filter(loc => loc[1] == r[3])
                            if (translatedRar && translatedRar[0]) r[2] = translatedRar[0][3]
                            if (r[3] != undefined) {
                                r[3] = r[3].split('|').map(jobs => jobs.split('-').map(j => jobsNamesLoc.find(loc => loc[0] == j && j.length > 1) == undefined ? '' : jobsNamesLoc.find(loc => loc[0] == j && j.length > 1)[3]).join('-')).join('|')
                                // r[3] = r[3].join('|')
                            }
                        })
                        break
                }

                mats = res

            })


    },
}
let characters = {
    charsRaw: () => {
        return GetSheetDone
            .raw(id, 'Characters').then(data => data.data).then(res => {
                res.shift()
                let lang = document.getElementById('langSel').value
                switch (lang) {
                    case 'English':
                        res.map(r => {
                            let translatedName = charsLoc.filter(loc => loc[0] == r[1])
                            if (translatedName[0] != undefined) r[1] = translatedName[0][1]

                            let translatedAbil1 = abilsNamesLoc.filter(loc => loc[0] == r[13])
                            if (translatedAbil1[0] != undefined) r[13] = translatedAbil1[0][1]
                            if (translatedAbil1[0] == undefined) r[13] = ['n/a', 'n/a', 'n/a', 'n/a']

                            let translatedAbil2 = abilsNamesLoc.filter(loc => loc[0] == r[14])
                            if (translatedAbil2[0] != undefined) r[14] = translatedAbil2[0][1]

                            let translatedPass1 = passivesNamesLoc.filter(loc => loc[0] == r[11])
                            if (translatedPass1[0] != undefined) r[11] = translatedPass1[0][1]

                            let translatedPass2 = passivesNamesLoc.filter(loc => loc[0] == r[12])
                            if (translatedPass2[0] != undefined) r[12] = translatedPass2[0][1]

                            let passivesEn = r[7] == undefined ? '' : r[7].split('-')
                            passivesEn = passivesEn.length > 0 ? passivesEn.map(pass => passivesNamesLoc.filter(loc => loc[0] == pass)[0] == undefined ? '' : passivesNamesLoc.filter(loc => loc[0] == pass)) : passivesEn
                            passivesEn = passivesEn.length > 0 ? passivesEn.map(pass => pass[0] == undefined ? '' : pass[0][1]) : passivesEn
                            r[7] = passivesEn.length > 0 ? passivesEn.join('-') : passivesEn

                            let randomAbils = r[8] == undefined ? '' : r[8].split('-')
                            randomAbils = randomAbils.length > 0 ? randomAbils.map(pass => abilsNamesLoc.filter(loc => loc[0] == pass)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == pass)) : randomAbils
                            if (randomAbils.length > 0) {
                                randomAbils = randomAbils.map(ab => ab[0] == undefined ? '' : ab[0][1])
                                r[8] = randomAbils.length > 0 ? randomAbils.join('-') : randomAbils

                            }

                            //threshold abils
                            let thresh = r[9]
                            if (thresh != undefined) {
                                thresh = thresh.includes('|') ? thresh.split('|') : thresh
                                if (typeof thresh != 'string') {
                                    thresh = thresh.map(th => th.includes('-') ? (th.split('-').map(t => abilsNamesLoc.filter(loc => loc[0] == t)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == t)[0][1]).join('-')) : abilsNamesLoc.filter(loc => loc[0] == th)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == th)[0][1])
                                }
                                r[9] = typeof thresh == 'string' ? thresh : thresh.join('|')

                            }

                            //special case
                            let spec = r[10]
                            if (spec != undefined) {
                                spec = spec.includes(':') ? spec.split(':') : spec
                                if (typeof spec != 'string') {
                                    spec = spec.map(th => th.includes('-') ? (th.split('-').map(t => abilsNamesLoc.filter(loc => loc[0] == t)[0] == undefined ? t : abilsNamesLoc.filter(loc => loc[0] == t)[0][1]).join('-')) : abilsNamesLoc.filter(loc => loc[0] == th)[0] == undefined ? th : abilsNamesLoc.filter(loc => loc[0] == th)[0][1])
                                }
                                r[10] = typeof spec == 'string' ? spec : spec.join(':')

                            }
                            // race
                            r[15] = races.filter(race => race[0] == r[15])[0] == undefined ? '' : races.filter(race => race[0] == r[15])[0][1]
                        })
                        break
                    case 'Chinese':
                        res.map(r => {
                            let translatedRar = wordsLoc.filter(loc => loc[0] == r[2])
                            if (translatedRar[0] != undefined) r[2] = translatedRar[0][2]

                            let translatedName = charsLoc.filter(loc => loc[0] == r[1])
                            if (translatedName[0] != undefined) r[1] = translatedName[0][2]

                            let translatedAbil1 = abilsNamesLoc.filter(loc => loc[0] == r[13])
                            if (translatedAbil1[0] != undefined) r[13] = translatedAbil1[0][2]
                            if (translatedAbil1[0] == undefined) r[13] = ['n/a', 'n/a', 'n/a', 'n/a']

                            let translatedAbil2 = abilsNamesLoc.filter(loc => loc[0] == r[14])
                            if (translatedAbil2[0] != undefined) r[14] = translatedAbil2[0][2]

                            let translatedPass1 = passivesNamesLoc.filter(loc => loc[0] == r[11])
                            if (translatedPass1[0] != undefined) r[11] = translatedPass1[0][2]

                            let translatedPass2 = passivesNamesLoc.filter(loc => loc[0] == r[12])
                            if (translatedPass2[0] != undefined) r[12] = translatedPass2[0][2]

                            let passivesEn = r[7] == undefined ? '' : r[7].split('-')
                            passivesEn = passivesEn.length > 0 ? passivesEn.map(pass => passivesNamesLoc.filter(loc => loc[0] == pass)[0] == undefined ? '' : passivesNamesLoc.filter(loc => loc[0] == pass)) : passivesEn
                            passivesEn = passivesEn.length > 0 ? passivesEn.map(pass => pass[0] == undefined ? '' : pass[0][2]) : passivesEn
                            r[7] = passivesEn.length > 0 ? passivesEn.join('-') : passivesEn

                            let randomAbils = r[8] == undefined ? '' : r[8].split('-')
                            randomAbils = randomAbils.length > 0 ? randomAbils.map(pass => abilsNamesLoc.filter(loc => loc[0] == pass)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == pass)) : randomAbils
                            if (randomAbils.length > 0) {
                                randomAbils = randomAbils.map(ab => ab[0] == undefined ? '' : ab[0][2])
                                r[8] = randomAbils.length > 0 ? randomAbils.join('-') : randomAbils

                            }

                            //threshold abils
                            let thresh = r[9]
                            if (thresh != undefined) {
                                thresh = thresh.includes('|') ? thresh.split('|') : thresh
                                if (typeof thresh != 'string') {
                                    thresh = thresh.map(th => th.includes('-') ? (th.split('-').map(t => abilsNamesLoc.filter(loc => loc[0] == t)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == t)[0][2]).join('-')) : abilsNamesLoc.filter(loc => loc[0] == th)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == th)[0][2])
                                }
                                r[9] = typeof thresh == 'string' ? thresh : thresh.join('|')

                            }

                            //special case
                            let spec = r[10]
                            if (spec != undefined) {
                                spec = spec.includes(':') ? spec.split(':') : spec
                                if (typeof spec != 'string') {
                                    spec = spec.map(th => th.includes('-') ? (th.split('-').map(t => abilsNamesLoc.filter(loc => loc[0] == t)[0] == undefined ? t : abilsNamesLoc.filter(loc => loc[0] == t)[0][2]).join('-')) : abilsNamesLoc.filter(loc => loc[0] == th)[0] == undefined ? th : abilsNamesLoc.filter(loc => loc[0] == th)[0][2])
                                }
                                r[10] = typeof spec == 'string' ? spec : spec.join(':')

                            }
                            // race
                            r[15] = races.filter(race => race[0] == r[15])[0] == undefined ? '' : races.filter(race => race[0] == r[15])[0][2]

                        })
                        break
                    case 'Chinese(Trad)':
                        res.map(r => {
                            let translated = charsLoc.filter(loc => loc[0] == r[1])
                            if (translated[0] != undefined) r[1] = translated[0][3]

                            let translatedAbil1 = abilsNamesLoc.filter(loc => loc[0] == r[13])
                            if (translatedAbil1[0] != undefined) r[13] = translatedAbil1[0][3]

                            let translatedAbil2 = abilsNamesLoc.filter(loc => loc[0] == r[14])
                            if (translatedAbil2[0] != undefined) r[14] = translatedAbil2[0][3]
                        })
                        break
                }
                //    changeColors(res, 1)

                charsAllInfoRaw = res
            })
    },
    chars: () => {
        let lang = document.getElementById('langSel').value
        return GetSheetDone
            .raw(id, 'Characters').then(data => data.data).then(res => {
                charsAllInfo = []
                res.shift()
                switch (lang) {
                    case 'English':
                        res.map(r => {
                            let translatedName = charsLoc.filter(loc => loc[0] == r[1])
                            if (translatedName[0] != undefined) r[1] = translatedName[0][1]

                            let translatedAbil1 = abilsNamesLoc.filter(loc => loc[0] == r[13])
                            if (translatedAbil1[0] != undefined) r[13] = translatedAbil1[0][1]

                            let translatedAbil2 = abilsNamesLoc.filter(loc => loc[0] == r[14])
                            if (translatedAbil2[0] != undefined) r[14] = translatedAbil2[0][1]

                            let translatedPass1 = passivesNamesLoc.filter(loc => loc[0] == r[11])
                            if (translatedPass1[0] != undefined) r[11] = translatedPass1[0][1]

                            let translatedPass2 = passivesNamesLoc.filter(loc => loc[0] == r[12])
                            if (translatedPass2[0] != undefined) r[12] = translatedPass2[0][1]

                            let passivesEn = r[7] == undefined ? '' : r[7].split('-')
                            passivesEn = passivesEn.length > 0 ? passivesEn.map(pass => passivesNamesLoc.filter(loc => loc[0] == pass)[0] == undefined ? '' : passivesNamesLoc.filter(loc => loc[0] == pass)) : passivesEn
                            passivesEn = passivesEn.length > 0 ? passivesEn.map(pass => pass[0] == undefined ? '' : pass[0][1]) : passivesEn
                            r[7] = passivesEn.length > 0 ? passivesEn.join('-') : passivesEn

                            let randomAbils = r[8] == undefined ? '' : r[8].replace(/\|/g, '-').split('-')
                            randomAbils = randomAbils.length > 0 ? randomAbils.map(pass => abilsNamesLoc.filter(loc => loc[0] == pass)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == pass)) : randomAbils
                            if (randomAbils.length > 0) {
                                randomAbils = randomAbils.map(ab => ab[0] == undefined ? '' : ab[0][1])
                                r[8] = randomAbils.length > 0 ? randomAbils.join('-') : randomAbils

                            }

                            //threshold abils
                            let thresh = r[9]
                            if (thresh != undefined) {
                                thresh = thresh.includes('|') ? thresh.split('|') : thresh
                                if (typeof thresh != 'string') {
                                    thresh = thresh.map(th => th.includes('-') ? (th.split('-').map(t => abilsNamesLoc.filter(loc => loc[0] == t)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == t)[0][1]).join('-')) : abilsNamesLoc.filter(loc => loc[0] == th)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == th)[0][1])
                                }
                                r[9] = typeof thresh == 'string' ? thresh : thresh.join('|')

                            }

                            //special case
                            let spec = r[10]
                            if (spec != undefined) {
                                spec = spec.includes(':') ? spec.split(':') : spec
                                if (typeof spec != 'string') {
                                    spec = spec.map(th => th.includes('-') ? (th.split('-').map(t => abilsNamesLoc.filter(loc => loc[0] == t)[0] == undefined ? t : abilsNamesLoc.filter(loc => loc[0] == t)[0][1]).join('-')) : abilsNamesLoc.filter(loc => loc[0] == th)[0] == undefined ? th : abilsNamesLoc.filter(loc => loc[0] == th)[0][1])
                                }
                                r[10] = typeof spec == 'string' ? spec : spec.join(':')

                            }

                            // race
                            r[15] = races.filter(race => race[0] == r[15])[0] == undefined ? '' : races.filter(race => race[0] == r[15])[0][1]
                            //  let translatedRar = wordsLoc.filter(loc => loc[1] == r[2])
                            //  r[2] = translatedRar[0][1]
                            /* if (r[3] != undefined) {
                                 r[3] = r[3].split('|').map(jobs => jobs.split('-').map(j => jobsNamesLoc.find(loc => loc[0] == j && j.length > 1) == undefined ? '' : jobsNamesLoc.find(loc => loc[0] == j && j.length > 1)[1]).join('-')).join('|')
                             }*/
                        })
                        break
                    case 'Chinese':
                        res.map(r => {
                            let translatedRar = wordsLoc.filter(loc => loc[1] == r[2])
                            if (translatedRar[0] != undefined) r[2] = translatedRar[0][2]

                            let translatedName = charsLoc.filter(loc => loc[0] == r[1])
                            if (translatedName[0] != undefined) r[1] = translatedName[0][2]

                            let translatedAbil1 = abilsNamesLoc.filter(loc => loc[0] == r[13])
                            if (translatedAbil1[0] != undefined) r[13] = translatedAbil1[0][2]

                            let translatedAbil2 = abilsNamesLoc.filter(loc => loc[0] == r[14])
                            if (translatedAbil2[0] != undefined) r[14] = translatedAbil2[0][2]

                            let translatedPass1 = passivesNamesLoc.filter(loc => loc[0] == r[11])
                            if (translatedPass1[0] != undefined) r[11] = translatedPass1[0][2]

                            let translatedPass2 = passivesNamesLoc.filter(loc => loc[0] == r[12])
                            if (translatedPass2[0] != undefined) r[12] = translatedPass2[0][2]

                            let passivesEn = r[7] == undefined ? '' : r[7].split('-')
                            passivesEn = passivesEn.length > 0 ? passivesEn.map(pass => passivesNamesLoc.filter(loc => loc[0] == pass)[0] == undefined ? '' : passivesNamesLoc.filter(loc => loc[0] == pass)) : passivesEn
                            passivesEn = passivesEn.length > 0 ? passivesEn.map(pass => pass[0] == undefined ? '' : pass[0][2]) : passivesEn
                            r[7] = passivesEn.length > 0 ? passivesEn.join('-') : passivesEn

                            let randomAbils = r[8] == undefined ? '' : r[8].replace(/\|/g, '-').split('-')
                            randomAbils = randomAbils.length > 0 ? randomAbils.map(pass => abilsNamesLoc.filter(loc => loc[0] == pass)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == pass)) : randomAbils
                            if (randomAbils.length > 0) {
                                randomAbils = randomAbils.map(ab => ab[0] == undefined ? '' : ab[0][2])
                                r[8] = randomAbils.length > 0 ? randomAbils.join('-') : randomAbils

                            }

                            //threshold abils
                            let thresh = r[9]
                            if (thresh != undefined) {
                                thresh = thresh.includes('|') ? thresh.split('|') : thresh
                                if (typeof thresh != 'string') {
                                    thresh = thresh.map(th => th.includes('-') ? (th.split('-').map(t => abilsNamesLoc.filter(loc => loc[0] == t)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == t)[0][2]).join('-')) : abilsNamesLoc.filter(loc => loc[0] == th)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == th)[0][2])
                                }
                                r[9] = typeof thresh == 'string' ? thresh : thresh.join('|')

                            }

                            //special case
                            let spec = r[10]
                            if (spec != undefined) {
                                spec = spec.includes(':') ? spec.split(':') : spec
                                if (typeof spec != 'string') {
                                    spec = spec.map(th => th.includes('-') ? (th.split('-').map(t => abilsNamesLoc.filter(loc => loc[0] == t)[0] == undefined ? t : abilsNamesLoc.filter(loc => loc[0] == t)[0][2]).join('-')) : abilsNamesLoc.filter(loc => loc[0] == th)[0] == undefined ? th : abilsNamesLoc.filter(loc => loc[0] == th)[0][2])
                                }
                                r[10] = typeof spec == 'string' ? spec : spec.join(':')

                            }

                            // race
                            r[15] = races.filter(race => race[0] == r[15])[0] == undefined ? '' : races.filter(race => race[0] == r[15])[0][2]
                        })
                        break
                    case 'Chinese(Trad)':
                        res.map(r => {
                            let translatedName = charsLoc.filter(loc => loc[0] == r[1])
                            if (translatedName[0] != undefined) r[1] = translatedName[0][3]

                            let translatedAbil1 = abilsNamesLoc.filter(loc => loc[0] == r[13])
                            if (translatedAbil1[0] != undefined) r[13] = translatedAbil1[0][3]

                            let translatedAbil2 = abilsNamesLoc.filter(loc => loc[0] == r[14])
                            if (translatedAbil2[0] != undefined) r[14] = translatedAbil2[0][3]

                            let translatedPass1 = passivesNamesLoc.filter(loc => loc[0] == r[11])
                            if (translatedPass1[0] != undefined) r[11] = translatedPass1[0][3]

                            let translatedPass2 = passivesNamesLoc.filter(loc => loc[0] == r[12])
                            if (translatedPass2[0] != undefined) r[12] = translatedPass2[0][3]

                            let passivesEn = r[7] == undefined ? '' : r[7].split('-')
                            passivesEn = passivesEn.length > 0 ? passivesEn.map(pass => passivesNamesLoc.filter(loc => loc[0] == pass)[0] == undefined ? '' : passivesNamesLoc.filter(loc => loc[0] == pass)) : passivesEn
                            passivesEn = passivesEn.length > 0 ? passivesEn.map(pass => pass[0] == undefined ? '' : pass[0][3]) : passivesEn
                            r[7] = passivesEn.length > 0 ? passivesEn.join('-') : passivesEn

                            let randomAbils = r[8] == undefined ? '' : r[8].replace(/\|/g, '-').split('-')
                            randomAbils = randomAbils.length > 0 ? randomAbils.map(pass => abilsNamesLoc.filter(loc => loc[0] == pass)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == pass)) : randomAbils
                            if (randomAbils.length > 0) {
                                randomAbils = randomAbils.map(ab => ab[0] == undefined ? '' : ab[0][3])
                                r[8] = randomAbils.length > 0 ? randomAbils.join('-') : randomAbils

                            }

                            //threshold abils
                            let thresh = r[9]
                            if (thresh != undefined) {
                                thresh = thresh.includes('|') ? thresh.split('|') : thresh
                                if (typeof thresh != 'string') {
                                    thresh = thresh.map(th => th.includes('-') ? (th.split('-').map(t => abilsNamesLoc.filter(loc => loc[0] == t)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == t)[0][3]).join('-')) : abilsNamesLoc.filter(loc => loc[0] == th)[0] == undefined ? '' : abilsNamesLoc.filter(loc => loc[0] == th)[0][3])
                                }
                                r[9] = typeof thresh == 'string' ? thresh : thresh.join('|')

                            }

                            //special case
                            let spec = r[10]
                            if (spec != undefined) {
                                spec = spec.includes(':') ? spec.split(':') : spec
                                if (typeof spec != 'string') {
                                    spec = spec.map(th => th.includes('-') ? (th.split('-').map(t => abilsNamesLoc.filter(loc => loc[0] == t)[0] == undefined ? t : abilsNamesLoc.filter(loc => loc[0] == t)[0][3]).join('-')) : abilsNamesLoc.filter(loc => loc[0] == th)[0] == undefined ? th : abilsNamesLoc.filter(loc => loc[0] == th)[0][3])
                                }
                                r[10] = typeof spec == 'string' ? spec : spec.join(':')

                            }

                            // race
                            r[15] = races.filter(race => race[0] == r[15])[0] == undefined ? '' : races.filter(race => race[0] == r[15])[0][3]
                        })
                        break
                }
                changeColors(res, 1)
                charsAllInfo = res;
            })
    }
}
let chapters = {
    chapt: () => {
        return GetSheetDone
            .raw(id, 'Chapters').then(data => data.data).then(res => {
                res.shift()
                let lang = document.getElementById('langSel').value
                switch (lang) {
                    case 'English':
                        res.map(r => {
                            let translatedName = chaptersLoc.filter(loc => loc[0] == r[1])
                            if (translatedName[0] != undefined) r[1] = translatedName[0][1]

                            let seriesName = chaptersLoc.filter(loc => loc[0] == r[2])
                            if (seriesName[0] != undefined) r[2] = seriesName[0][1]

                            let conditions = chaptersLoc.filter(loc => loc[0] == r[3])

                            if (conditions[0] != undefined) {
                                if (r[3].includes('-')) r[3] = r[3].split('-').map(a => chaptersLoc.filter(loc => loc[0] == a)).join('-')
                                r[3] = conditions[0][1]
                            }

                            let enemies = r[6] || ''
                            let miniboss = r[7] || ''
                            let boss = r[8] || ''
                            r[6] = enemies.includes('-') ? enemies.split('-').map(en => (charsLoc.filter(loc => loc[0] == en)[0] == undefined ? '' : charsLoc.filter(loc => loc[0] == en)[0][1])).join('-') : (charsLoc.filter(loc => loc[0] == r[6])[0] == undefined ? '' : charsLoc.filter(loc => loc[0] == r[6])[0][1])
                            r[7] = miniboss.includes('-') ? miniboss.split('-').map(en => charsLoc.filter(loc => loc[0] == en)[0][1]).join('-') : (charsLoc.filter(loc => loc[0] == r[7])[0] == undefined ? '' : charsLoc.filter(loc => loc[0] == r[7])[0][1])
                            r[8] = boss.includes('-') ? boss.split('-').map(en => charsLoc.filter(loc => loc[0] == en)[0][1]).join('-') : charsLoc.filter(loc => loc[0] == r[8])[0][1]
                        })
                        break;
                    case 'Chinese':
                        res.map(r => {
                            let translatedName = chaptersLoc.filter(loc => loc[0].trim() == r[1].trim())

                            if (translatedName[0] != undefined) r[1] = translatedName[0][2]

                            let seriesName = chaptersLoc.filter(loc => loc[0] == r[2])
                            if (seriesName[0] != undefined) r[2] = seriesName[0][2]

                            let conditions = chaptersLoc.filter(loc => loc[0] == r[3])
                            if (conditions[0] != undefined) {
                                if (r[3].includes('-')) r[3] = r[3].split('-').map(a => chaptersLoc.filter(loc => loc[0] == a)).join('-')
                                r[3] = conditions[0][2]
                            }

                            let enemies = r[6] || ''
                            let miniboss = r[7] || ''
                            let boss = r[8] || ''
                            try {
                                r[6] = enemies.includes('-') ? enemies.split('-').map(en => charsLoc.filter(loc => loc[0] == en)[0][2]).join('-') : charsLoc.filter(loc => loc[0] == r[6])[0][2]
                            } catch (err) { }


                            r[7] = miniboss.includes('-') ? miniboss.split('-').map(en => charsLoc.filter(loc => loc[0] == en)[0][2]).join('-') : (charsLoc.filter(loc => loc[0] == r[7])[0] == undefined ? '' : charsLoc.filter(loc => loc[0] == r[7])[0][2])
                            r[8] = boss.includes('-') ? boss.split('-').map(en => charsLoc.filter(loc => loc[0] == en)[0][2]).join('-') : charsLoc.filter(loc => loc[0] == r[8])[0][2]
                        })
                        break;
                    case 'Chinese(Trad)':
                        res.map(r => {
                            let translatedName = chaptersLoc.filter(loc => loc[0] == r[1])
                            if (translatedName[0] != undefined) r[1] = translatedName[0][3]

                            let seriesName = chaptersLoc.filter(loc => loc[0] == r[2])
                            if (seriesName[0] != undefined) r[2] = seriesName[0][3]

                            let conditions = chaptersLoc.filter(loc => loc[0] == r[3])
                            if (conditions[0] != undefined) r[3] = conditions[0][3]

                            let enemies = r[6] || ''
                            let miniboss = r[7] || ''
                            let boss = r[8] || ''
                            r[6] = enemies.includes('-') ? enemies.split('-').map(en => charsLoc.filter(loc => loc[0] == en)[0][3]).join('-') : charsLoc.filter(loc => loc[0] == r[6])[0][3]
                            r[7] = miniboss.includes('-') ? miniboss.split('-').map(en => charsLoc.filter(loc => loc[0] == en)[0][3]).join('-') : (charsLoc.filter(loc => loc[0] == r[7])[0] == undefined ? '' : charsLoc.filter(loc => loc[0] == r[7])[0][3])
                            r[8] = boss.includes('-') ? boss.split('-').map(en => charsLoc.filter(loc => loc[0] == en)[0][3]).join('-') : charsLoc.filter(loc => loc[0] == r[8])[0][3]
                        })
                        break;
                }
                res.map(row => {
                    for (let i = 0; i < row.length; i++) {
                        row[i] == undefined ? row.splice(i, 1, '') : row[i]
                    }
                    return row
                })
                //  res= res.map(row=> row= row.filter((r,i) => r == empty))
                chaptAllInfo = res;
            })
    }
}
let verlog = {
    log: () => {
        return GetSheetDone
            .raw(id, 'VerLog').then(data => data.data).then(res => {
                res.shift()
                res.length = 30
                let lasti = []
                res.map((row, i) => {
                    i == 0 ? verArr.push(res[0][1]) : ''
                    verArr.push(row[3])
                    if (i > 0 && row[1] !== undefined) {
                        lasti.push(i)
                    }



                })
                verArr.length = lasti[0] + 1
            })
    }
}
let dungeon = { //dungeon rules
    rules: () => {
        return GetSheetDone
            .raw(id, 'Rules').then(data => data.data).then(res => {
                res.shift()
                let lang = document.getElementById('langSel').value
                switch (lang) {
                    case 'English':
                        res.map(r => {
                            let translatedDesc = rulesLoc.filter(loc => loc[0] == r[0].replace(/ /g, '') + 'Descr')
                            if (translatedDesc[0] != undefined) r[1] = translatedDesc[0][1].replace('[{1}]', '')
                            r[1] = r[1].replace('{0}', r[0])
                            r[1] = r[1].replace('Boss ', '').trim()
                            if (r[1].includes(' - ')) {
                                r[1] = r[1].split(' - ')
                                r[1][1] = passivesNamesLoc.filter(pass => pass[0] == r[1][1].split('.')[0])[0][1]
                                r[1] = r[1].join(' - ')
                            }
                            
                            rulesImgs = Object.entries(rules).map(rule => {
                                if (rulesLoc.find(loc => loc[0] + '.png' == rule[0])) {
                                   return [rulesLoc.find(loc => loc[0] + '.png' == rule[0])[1] + '.png', rule[1]]
                                }
                            })
                            rulesImgs = rulesImgs.filter(r => r !== undefined)
                            let translatedName = rulesLoc.filter(loc => loc[0] == r[0].replace(/ /g, ''))
                            if (translatedName[0] != undefined) r[0] = translatedName[0][1]
                        })
                        break;
                    case 'Chinese':
                        res.map(r => {
                            let translatedDesc = rulesLoc.filter(loc => loc[0] == r[0].replace(/ /g, '') + 'Descr')
                            if (translatedDesc[0] != undefined) r[1] = translatedDesc[0][2].replace('[{1}]', '')
                            r[1] = r[1].replace('{0}', r[0])
                            r[1] = r[1].replace('Boss ', '').trim()
                            if (r[1].includes(' - ')) {
                                r[1] = r[1].split(' - ')
                                r[1][1] = passivesNamesLoc.filter(pass => pass[0] == r[1][2])//.split('.')[0])[0][2]
                                r[1] = r[1].join(' - ')
                            }

                            rulesImgs = Object.entries(rules).map(rule => [rulesLoc.find(loc => loc[0] + '.png' == rule[0])[2] + '.png', rule[1]])
                            let translatedName = rulesLoc.filter(loc => loc[0] == r[0].replace(/ /g, ''))
                            if (translatedName[0] != undefined) r[0] = translatedName[0][2]
                        })
                        break;
                    case 'Chinese(Trad)':
                        res.map(r => {
                            let translatedDesc = rulesLoc.filter(loc => loc[0] == r[0].replace(/ /g, '') + 'Descr')
                            if (translatedDesc[0] != undefined) r[1] = translatedDesc[0][3].replace('[{1}]', '')
                            r[1] = r[1].replace('{0}', r[0])
                            r[1] = r[1].replace('Boss ', '').trim()
                            if (r[1].includes(' - ')) {
                                r[1] = r[1].split(' - ')
                                r[1][1] = passivesNamesLoc.filter(pass => pass[0] == r[1][3].split('.')[0])[0][3]
                                r[1] = r[1].join(' - ')
                            }

                            rulesImgs = Object.entries(rules).map(rule => [rulesLoc.find(loc => loc[0] + '.png' == rule[0])[3] + '.png', rule[1]])
                            let translatedName = rulesLoc.filter(loc => loc[0] == r[0].replace(/ /g, ''))
                            if (translatedName[0] != undefined) r[0] = translatedName[0][3]
                        })
                        break;
                }
                res.map((dr, i) => dr.splice(0, 0, i + 1))
                drulesDataAll = res
            })
    }
}
let traitsAll = { //dungeon rules
    traitsFn: () => {
        return GetSheetDone
            .raw(id, 'Traits').then(data => data.data).then(res => {
                res.shift()
                let lang = document.getElementById('langSel').value
                let exhaust = skillsNamesLoc.filter(loc => loc[0] == 'Exhaust')[0]
                switch (lang) {
                    case 'English':
                        res.map((r, i) => {
                            let translatedDesc = traitsLoc.filter(loc => loc[0] == r[0] + 'Descr')
                            if (translatedDesc[0] != undefined) r[1] = translatedDesc[0][1].replace('Exhaust', exhaust[1])
                            let translatedDesc1 = traitsLoc.filter(loc => loc[0] == r[3] + 'Descr')
                            if (translatedDesc1[0] != undefined) r[4] = translatedDesc1[0][1].replace('Exhaust', exhaust[1])
                            // abils traits desc r[4]
                            if (i <= 1) r[4] = r[4].replace('{0}', 'Protect').replace('{1}', '10%')
                            if (i == 2 || i == 6) r[4] = r[4].replace('{0}', exhaust[1])
                            if (i == 3) r[4] = r[4] = r[4].replace('{0}', protectName[1]).replace('{1}', '20%')
                            if (i == 5) r[4] = r[4] = r[4].replace('{0}', '1').replace('{1}', protectName[1])
                            if (i == 9) r[4] = r[4] = r[4].split('.')[0]
                            // jobs traits desc r[1]
                            if (i <= 3) r[1] = r[1].replace('{0}', '10%')
                            if (i == 4 || i == 9) {
                                r[1] = r[1].replace('{0}', '5%')
                            }
                            if (i > 4 && i <= 8) {
                                r[1] = r[1].replace('{0}', '10%')
                            }
                            if (i == 11) r[1] = r[1].replace('{0}', '20%').replace('{1}', '1')
                            if (i == 12) r[1] = r[1].replace('{0}', '200')
                            if (i == 13) r[1] = r[1].replace('{0}', '100').replace('{1}', protectName[1])

                            traitsImgs = Object.entries(traits).map(rule => [traitsLoc.filter(loc => loc[0] + '.PNG' == rule[0]).length == 0 ? traitsLoc.filter(loc => loc[0] + '.png' == rule[0])[0][1] + '.PNG' : traitsLoc.filter(loc => loc[0] + '.PNG' == rule[0])[0][1] + '.PNG', rule[1]])
                            let translatedName = traitsLoc.filter(loc => loc[0] == r[0].replace(/ /g, ''))
                            if (translatedName[0] != undefined) r[0] = translatedName[0][1]
                            let translatedName1 = traitsLoc.filter(loc => loc[0] == r[3])
                            if (translatedName1[0] != undefined) r[3] = translatedName1[0][1]

                        })
                        break;
                    case 'Chinese':
                        res.map((r, i) => {
                            let translatedDesc = traitsLoc.filter(loc => loc[0] == r[0] + 'Descr')
                            if (translatedDesc[0] != undefined) r[1] = translatedDesc[0][2].replace('Exhaust', exhaust[2])
                            let translatedDesc1 = traitsLoc.filter(loc => loc[0] == r[3] + 'Descr')
                            if (translatedDesc1[0] != undefined) r[4] = translatedDesc1[0][2].replace('Exhaust', exhaust[2])
                            // abils traits desc r[4]
                            if (i <= 1) r[4] = r[4].replace('{0}', 'Protect').replace('{1}', '10%')
                            if (i == 2 || i == 6) r[4] = r[4].replace('{0}', exhaust[2])
                            if (i == 3) r[4] = r[4] = r[4].replace('{0}', protectName[2]).replace('{1}', '20%')
                            if (i == 5) r[4] = r[4] = r[4].replace('{0}', '1').replace('{1}', protectName[2])
                            if (i == 9) r[4] = r[4] = r[4].split('.')[0]
                            // jobs traits desc r[1]
                            if (i <= 3) r[1] = r[1].replace('{0}', '10%')
                            if (i == 4 || i == 9) {
                                r[1] = r[1].replace('{0}', '5%')
                            }
                            if (i > 4 && i <= 8) {
                                r[1] = r[1].replace('{0}', '10%')
                            }
                            if (i == 11) r[1] = r[1].replace('{0}', '20%').replace('{1}', '1')
                            if (i == 12) r[1] = r[1].replace('{0}', '200')
                            if (i == 13) r[1] = r[1].replace('{0}', '100').replace('{1}', protectName[2])

                            traitsImgs = Object.entries(traits).map(rule => [traitsLoc.filter(loc => loc[0] + '.PNG' == rule[0]).length == 0 ? traitsLoc.filter(loc => loc[0] + '.png' == rule[0])[0][2] + '.PNG' : traitsLoc.filter(loc => loc[0] + '.PNG' == rule[0])[0][2] + '.PNG', rule[1]])
                            let translatedName = traitsLoc.filter(loc => loc[0] == r[0].replace(/ /g, ''))
                            if (translatedName[0] != undefined) r[0] = translatedName[0][2]
                            let translatedName1 = traitsLoc.filter(loc => loc[0] == r[3])
                            if (translatedName1[0] != undefined) r[3] = translatedName1[0][2]

                        })
                        break;
                    case 'Chinese(Trad)':
                        res.map((r, i) => {
                            let translatedDesc = traitsLoc.filter(loc => loc[0] == r[0] + 'Descr').replace('Exhaust', exhaust[3])
                            if (translatedDesc[0] != undefined) r[1] = translatedDesc[0][3]
                            let translatedDesc1 = traitsLoc.filter(loc => loc[0] == r[3] + 'Descr').replace('Exhaust', exhaust[3])
                            if (translatedDesc1[0] != undefined) r[4] = translatedDesc1[0][3]
                            // abils traits desc r[4]
                            if (i <= 1) r[4] = r[4].replace('{0}', 'Protect').replace('{1}', '10%')
                            if (i == 2 || i == 6) r[4] = r[4].replace('{0}', exhaust[3])
                            if (i == 3) r[4] = r[4] = r[4].replace('{0}', protectName[3]).replace('{1}', '20%')
                            if (i == 5) r[4] = r[4] = r[4].replace('{0}', '1').replace('{1}', protectName[3])
                            if (i == 9) r[4] = r[4] = r[4].split('.')[0]
                            // jobs traits desc r[1]
                            if (i <= 3) r[1] = r[1].replace('{0}', '10%')
                            if (i == 4 || i == 9) {
                                r[1] = r[1].replace('{0}', '5%')
                            }
                            if (i > 4 && i <= 8) {
                                r[1] = r[1].replace('{0}', '10%')
                            }
                            if (i == 11) r[1] = r[1].replace('{0}', '20%').replace('{1}', '1')
                            if (i == 12) r[1] = r[1].replace('{0}', '200')
                            if (i == 13) r[1] = r[1].replace('{0}', '100').replace('{1}', protectName[3])

                            traitsImgs = Object.entries(traits).map(rule => [traitsLoc.filter(loc => loc[0] + '.PNG' == rule[0]).length == 0 ? traitsLoc.filter(loc => loc[0] + '.png' == rule[0])[0][3] + '.PNG' : traitsLoc.filter(loc => loc[0] + '.PNG' == rule[0])[0][3] + '.PNG', rule[1]])
                            let translatedName = traitsLoc.filter(loc => loc[0] == r[0].replace(/ /g, ''))
                            if (translatedName[0] != undefined) r[0] = translatedName[0][3]
                            let translatedName1 = traitsLoc.filter(loc => loc[0] == r[3])
                            if (translatedName1[0] != undefined) r[3] = translatedName1[0][3]

                        })
                        break;
                }
                changeColors(res, 0)
                traitsDataAll = res
            })
    }
}
let gachas = { //dungeon rules
    gachas: () => {
        return GetSheetDone
            .raw(id, 'Gachas').then(data => data.data).then(res => {
                res.shift()
                let lang = document.getElementById('langSel').value
                let gachasLoc = wordsLoc.filter(word => word[0].includes('Gacha'))
                switch (lang) {
                    case 'English':
                        res.map(r => {
                            let translatedName = gachasLoc.filter(loc => loc[0] == r[1])
                            // if (translatedName[0] != undefined) r[1] = translatedName[0][1]

                            let heroes = r[7] == undefined ? r[7] : r[7].split('-')
                            if (heroes) {
                                heroes.pop()
                                heroes = heroes.map(hero => charsLoc.find(char => char[0] == hero) == undefined ? hero : charsLoc.find(char => char[0] == hero)[1])
                                r[7] = heroes.join('-')
                            }
                        })
                        break
                    case 'Chinese':
                        res.map(r => {
                            let translatedName = gachasLoc.filter(loc => loc[0] == r[1])
                            //  if (translatedName[0] != undefined) r[1] = translatedName[0][2]

                            let heroes = r[7] == undefined ? r[7] : r[7].split('-')
                            if (heroes) {
                                heroes.pop()
                                heroes = heroes.map(hero => charsLoc.find(char => char[0] == hero) == undefined ? hero : charsLoc.find(char => char[0] == hero)[2])
                                r[7] = heroes.join('-')
                            }
                        })
                        break;
                    case 'Chinese(Trad)':
                        res.map(r => {
                            let translatedName = gachasLoc.filter(loc => loc[0] == r[1])
                            if (translatedName[0] != undefined) r[1] = translatedName[0][3]

                            let heroes = r[7] == undefined ? r[7] : r[7].split('-')
                            if (heroes) {
                                heroes.pop()
                                heroes = heroes.map(hero => charsLoc.find(char => char[0] == hero) == undefined ? hero : charsLoc.find(char => char[0] == hero)[3])
                                r[7] = heroes.join('-')
                            }
                        })
                        break
                }
                gachasDataAll = res
            })
    }
}
let faq = { //dungeon rules
    faq: () => {
        return GetSheetDone
            .raw(id, 'FAQ').then(data => data.data).then(res => {
                res.shift()
                changeColors(res)
                faqDataAll = res
            })
    }
}

export { abilities }