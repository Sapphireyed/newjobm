global.fetch = require('node-fetch');
const GetSheetDone = require('get-sheet-done');
const id = '1B2olPb1sTgFSskGBC68czBBt1ICh2jGmQkIKOi_c39w';

let wikiWords
let materialsLoc = []
let matsDescLoc = []
let wordsLoc = []
let jobsNamesLoc = []
let abilsNamesLoc = []
let passivesNamesLoc = []
let charsLoc = []
let chaptersLoc = []
let skillsDesc = []
let skillsDescAdjusted = []
let skillsNamesAdjusted = []
let rulesLoc = []
let traitsLoc = []

//skils names
let skillsNamesLoc = []
//skils desc
let abilsDesc = []
let passivesDesc = []
let buffsDesc = []

let localization = { 

    wiki: () => {
        return GetSheetDone
            .raw(id, 'Wiki').then(data => data.data).then(res => {
                res.shift()
                res.shift()

                //find indexes to seperate arrays into smaller ones
                let sentencesIndex = res.map((r, i) => {
                    if (r[0] == 'Sentences') {
                        return i
                    }
                })
                sentencesIndex = sentencesIndex.find(d => d != undefined)
                wikiWords = res.slice(0, sentencesIndex)
            })
    },
    skills: () => {
        return GetSheetDone
            .raw(id, 'skills%20description').then(data => data.data).then(res => {
                res.shift()
                res.shift()

                //find indexes to seperate arrays into smaller ones
                let skillTitlesIndex = res.map((r, i) => {
                    if (r[0] == 'Skills Titles') {
                        return i
                    }
                })
                skillTitlesIndex = skillTitlesIndex.find(d => d != undefined)
                let skillsDescIndex = res.map((r, i) => {
                    if (r[0] == 'Skills Descriptions') {
                        return i
                    }
                })
                skillsDescIndex = skillsDescIndex.find(d => d != undefined)

                let buffsEtcDescIndex = res.map((r, i) => {
                    if (r[0] == 'Buffs, Debuffs, Applies & Passives Descriptions') {
                        return i
                    }
                })
                buffsEtcDescIndex = buffsEtcDescIndex.find(d => d != undefined)

                let abilsDescIndex = res.map((r, i) => {
                    if (r[0] == 'Ability\'s Skill Unit Term/Descriptions') {
                        return i
                    }
                })
                abilsDescIndex = abilsDescIndex.find(d => d != undefined)

                let passivesDescIndex = res.map((r, i) => {
                    if (r[0] == 'Passive\'s Skill Unit Term/Desciptions') {
                        return i
                    }
                })
                passivesDescIndex = passivesDescIndex.find(d => d != undefined)


                // fill the arrays 
                skillsNamesLoc = res.slice(0, skillsDescIndex)
                skillsDesc = res.slice(skillsDescIndex, buffsEtcDescIndex)
                buffsDesc = res.slice(buffsEtcDescIndex, abilsDescIndex)
                abilsDesc = res.slice(abilsDescIndex, passivesDescIndex)
                abilsDesc.shift()
                passivesDesc = res.slice(passivesDescIndex)
                passivesDesc.shift()
            })
    },
    characters: () => {
        return GetSheetDone
            .raw(id, 'Characters').then(data => data.data).then(res => {
                res.shift()
                res.shift()
                charsLoc = res
                // materialsLoc.length = descIndex 
                /* matsDescLoc = res.slice(descIndex+1, res.length)
                 console.log(matsDescLoc)*/

            })
    },
    chapters: () => {
        return GetSheetDone
            .raw(id, 'Chapters').then(data => data.data).then(res => {
                res.shift()
                res.shift()
                chaptersLoc = res
            })
    },
    rules: () => {
        return GetSheetDone
            .raw(id, 'Rules').then(data => data.data).then(res => {
                res.shift()
                res.shift()
                rulesLoc = res
            })
    },
    traits: () => {
        return GetSheetDone
            .raw(id, 'Traits').then(data => data.data).then(res => {
                res.shift()
                res.shift()
                traitsLoc = res
            })
    },
    materials: () => {
        return GetSheetDone
            .raw(id, 'Materials').then(data => data.data).then(res => {
                res.shift()
                res.shift()
                let descIndex = res.map((r, i) => {
                    if (r[0] == 'Description') {
                        return i
                    }
                })
                descIndex = descIndex.find(d => d!= undefined)
                materialsLoc = res
               // materialsLoc.length = descIndex 
               /* matsDescLoc = res.slice(descIndex+1, res.length)
                console.log(matsDescLoc)*/
                materialsLoc.length = descIndex 
            })
    },
    words: () => {
        return GetSheetDone
            .raw(id, 'Words').then(data => data.data).then(res => {
                res.shift()
                res.shift()
                wordsLoc = res
            })
    },
    jobs: () => {
        return GetSheetDone
            .raw(id, 'Jobs').then(data => data.data).then(res => {
                res.shift()
                res.shift()
                jobsNamesLoc = res
            })
    },
    abils: () => {
        return GetSheetDone
            .raw(id, 'Abilities').then(data => data.data).then(res => {
                res.shift()
                res.shift()
                abilsNamesLoc = res
            })
    },
    passives: () => {
        return GetSheetDone
            .raw(id, 'Passives').then(data => data.data).then(res => {
                res.shift()
                res.shift()
                res.pop()
                passivesNamesLoc = res
            })
    }
}

//get keaywords names
let random, all, handLimit
let fireName, waterName, earthName, windName, thunderName, darkName, lightName, element
let elementsNames = []
let burnName, chillName, seedName, dizzyName, paralysysName, depressName, blindName
let venomName, restrainName, insaneName, injuryName, bleedName, confuseName, slackName
let debuffs = []
let vri = []
let charge, guard, stackCharge, stackGuard, certain, rage, instinct, lifeSteal
let hpName, strName, agiName, intName, protectName
let attrsNames = []
let finale, enchant
let buff, actionBuff, boost, debuff, actionDebuff, nerf, drain, absorb
let reflect, immune
let elementalStatus, statDebuffs
let protectiveHeal, offensiveHeal

let vulnerable
let enhance 
let curse
let secondChance, invulnerable
let action, actionNext, drawNext

let skillStackMasterName
let normalMaster
let master
let masters = []
let attrs = ['Max HP', 'Strength', 'Agility', 'Intelligence']
let elements = ['Fire', 'Water', 'Earth', 'Wind', 'Thunder', 'Dark', 'Light']

let applies 

let humanoid, creature, spirit, matter
let races = []
function getKeywordEngName(arr, keyword) {
    return arr.filter(a => a[0] == keyword)
   // return arr.filter(a => a[0] == keyword)[0]
}
function replaceVariablesInDesc(desc, keyword, perc, var3, var4, var5, var6, var7) {
    if (keyword != false) {
        desc = desc.replace(/\{0\}/g, keyword)
        desc = desc.replace(/\{1\}/g, perc)
    } else {
        desc = desc.replace(/\{0\}/g, perc)
    }
    
    desc = desc.replace(/\{1\}/g, perc)
    desc = desc.replace(/\{2\}/g, var3)
    desc = desc.replace(/\{3\}/g, var4)
    desc = desc.replace(/\{4\}/g, var5)
    desc = desc.replace(/\{5\}/g, var6)
    desc = desc.replace(/\{6\}/g, var7)
    return desc
}

function getFullDesc(name, abil, keyword, keyword2) {
    
    name = [
        name,
        replaceVariablesInDesc(abil[1], (keyword[1] || keyword), 'X%', (keyword[1] || keyword) + ' ' + (keyword2[1] || keyword2)),
        replaceVariablesInDesc(abil[2], (keyword[2] || keyword), 'X%', (keyword[2] || keyword) + ' ' + (keyword2[2] || keyword2)),
        replaceVariablesInDesc(abil[3], (keyword[3] || keyword), 'X%', (keyword[3] || keyword) + ' ' + (keyword2[3] || keyword2))
    ]
    return name
}

function getFullDescNoPerc(name, abil, keyword, keyword2) {

    name = [
        name,
        replaceVariablesInDesc(abil[1], (keyword[1] || keyword), '', (keyword[1] || keyword) + ' ' + (keyword2[1] || keyword2)),
        replaceVariablesInDesc(abil[2], (keyword[2] || keyword), '', (keyword[2] || keyword) + ' ' + (keyword2[2] || keyword2)),
        replaceVariablesInDesc(abil[3], (keyword[3] || keyword), '', (keyword[3] || keyword) + ' ' + (keyword2[3] || keyword2))
    ]
    return name
}

function vulnDescs(name, arr, key, keyword) {
    let arrToGet = [name]
    arr.map((a, i) => {
        arrToGet.push(a.replace(key, (keyword[i] || keyword)))
    })
    arrToGet.splice(1, 1)
    return arrToGet
}

//the abilities description array after matching it to jobmania database spreadsheet
let abilsDescAdjusted = [] 
let passivesDescAdjusted = [] 

let descriptions = {
    abilities: () => {
        return GetSheetDone
            .raw(id, 'Skills Description').then(data => data.data).then(res => {
                //from words Array
                random = wordsLoc.filter(a => a[0] == 'Random')[0]
                all = wordsLoc.filter(a => a[0] == 'All')[0]
                handLimit = wordsLoc.filter(a => a[0] == 'HandDraw')[0]
                //from descriptions first part (words/names)

                let comboMasterName = getKeywordEngName(skillsNamesLoc, 'Combo')[0]
                skillStackMasterName = getKeywordEngName(skillsNamesLoc, 'SkillStackMaster')[0]
                normalMaster = getKeywordEngName(skillsNamesLoc, 'NormalMaster')[0]
                master = getKeywordEngName(skillsNamesLoc, 'XMaster')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XMaster')[0].map(f => f.replace(/\{0\}/g, ''))

                fireName = getKeywordEngName(skillsNamesLoc, 'Fire')[0]
                waterName = getKeywordEngName(skillsNamesLoc, 'Water')[0]
                earthName = getKeywordEngName(skillsNamesLoc, 'Earth')[0]
                windName = getKeywordEngName(skillsNamesLoc, 'Wind')[0]
                thunderName = getKeywordEngName(skillsNamesLoc, 'Thunder')[0]
                darkName = getKeywordEngName(skillsNamesLoc, 'Dark')[0]
                lightName = getKeywordEngName(skillsNamesLoc, 'Light')[0]
                element = getKeywordEngName(skillsNamesLoc, 'Element')[0]
                elementsNames = [fireName, waterName, earthName, windName, thunderName, darkName, lightName, element]

                burnName = getKeywordEngName(skillsNamesLoc, 'Burn')[0]
                chillName = getKeywordEngName(skillsNamesLoc, 'Chill')[0]
                seedName = getKeywordEngName(skillsNamesLoc, 'Seed')[0]
                dizzyName = getKeywordEngName(skillsNamesLoc, 'Dizzy')[0]
                paralysysName = getKeywordEngName(skillsNamesLoc, 'Paralysis')[0]
                depressName = getKeywordEngName(skillsNamesLoc, 'Depress')[0]
                blindName = getKeywordEngName(skillsNamesLoc, 'Blind')[0]

                venomName = getKeywordEngName(skillsNamesLoc, 'Venom')[0]
                restrainName = getKeywordEngName(skillsNamesLoc, 'Restrain')[0]
                insaneName = getKeywordEngName(skillsNamesLoc, 'Insane')[0]
                injuryName = getKeywordEngName(skillsNamesLoc, 'Injury')[0]
                bleedName = getKeywordEngName(skillsNamesLoc, 'Bleed')[0]
                confuseName = getKeywordEngName(skillsNamesLoc, 'Confuse')[0]
                slackName = getKeywordEngName(skillsNamesLoc, 'Slack')[0]
                debuffs = [burnName, chillName, seedName, dizzyName, paralysysName, depressName, blindName, injuryName, bleedName, confuseName, slackName]
                vri = [venomName, insaneName, restrainName]
                elementalStatus = getKeywordEngName(skillsNamesLoc, 'EStatusEffect')[0]
                statDebuffs = getKeywordEngName(skillsNamesLoc, 'StatDebuff')[0]

                charge = getKeywordEngName(skillsNamesLoc, 'Charge')[0]
                guard = getKeywordEngName(skillsNamesLoc, 'Guard')[0]
                stackCharge = getKeywordEngName(skillsNamesLoc, 'StackCharge')[0]
                stackGuard = getKeywordEngName(skillsNamesLoc, 'StackGuard')[0]
                rage = getKeywordEngName(skillsNamesLoc, 'Rage')[0]
                instinct = getKeywordEngName(skillsNamesLoc, 'Instinct')[0]
                certain = getKeywordEngName(skillsNamesLoc, 'Certain')[0]

                hpName = getKeywordEngName(skillsNamesLoc, 'MaxHP')[0]
                strName = getKeywordEngName(skillsNamesLoc, 'Strength')[0]
                agiName = getKeywordEngName(skillsNamesLoc, 'Agility')[0]
                intName = getKeywordEngName(skillsNamesLoc, 'Intelligence')[0]
                attrsNames.push(hpName, strName, agiName, intName)

                buff = getKeywordEngName(skillsNamesLoc, 'Buff')[0]
                actionBuff = getKeywordEngName(skillsNamesLoc, 'XActBuff')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XActBuff')[0].map(f => f = f.replace(/\{0\}/g, ''))
                boost = getKeywordEngName(skillsNamesLoc, 'XStatBoost')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XStatBoost')[0].map(f => f = f.replace(/\{0\}/g, ''))
                debuff = getKeywordEngName(skillsNamesLoc, 'Debuff')[0]
                actionDebuff = getKeywordEngName(skillsNamesLoc, 'XActDebuff')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XActDebuff')[0].map(f => f.replace(/\{0\}/g, ''))
                nerf = getKeywordEngName(skillsNamesLoc, 'XStatNerf')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XStatNerf')[0].map(f => f.replace(/\{0\}/g, ''))
                drain = getKeywordEngName(skillsNamesLoc, 'XStatDrain')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XStatDrain')[0].map(f => f.replace(/\{0\}/g, ''))
                absorb = getKeywordEngName(skillsNamesLoc, 'XAbsorb')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XAbsorb')[0].map(f => f.replace(/\{0\}/g, ''))

                reflect = getKeywordEngName(skillsNamesLoc, 'Reflect')[0]
                immune = getKeywordEngName(skillsNamesLoc, 'XImmune')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XImmune')[0].map(f => f = f.replace(/\{0\}/g, ''))
                protectiveHeal = getKeywordEngName(skillsNamesLoc, 'ProtectiveHeal')[0]
                offensiveHeal = getKeywordEngName(skillsNamesLoc, 'AggressiveHeal')[0]

                vulnerable = getKeywordEngName(skillsNamesLoc, 'XVulnerable')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XVulnerable')[0].map(f => f.replace(/\{0\}/g, ''))
                enhance = getKeywordEngName(skillsNamesLoc, 'XProtectEnhance')[0]
                secondChance = getKeywordEngName(skillsNamesLoc, 'SecondChance')[0]
                protectName = getKeywordEngName(skillsNamesLoc, 'Protect')[0]
                invulnerable = getKeywordEngName(skillsNamesLoc, 'Invulnerable')[0]
                action = getKeywordEngName(skillsNamesLoc, 'XActionPoint')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XActionPoint')[0].map(f => f.replace(/\{0\}/g, ''))
                actionNext = getKeywordEngName(skillsNamesLoc, 'XActionPointNext')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XActionPointNext')[0].map(f => f.replace(/\{0\}/g, ''))
                drawNext = getKeywordEngName(skillsNamesLoc, 'XDrawNext')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XDrawNext')[0].map(f => f.replace(/\{0\}/g, ''))

                finale = getKeywordEngName(skillsNamesLoc, 'XFinale')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XFinale')[0].map(f => f.replace(/\{0\}/g, ''))
                enchant = getKeywordEngName(skillsNamesLoc, 'XEnchant')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XEnchant')[0].map(f => f.replace(/\{0\}/g, ''))
                lifeSteal = getKeywordEngName(skillsNamesLoc, 'LifeSteal')[0]

                curse = getKeywordEngName(skillsNamesLoc, 'Curse')[0]

                humanoid = getKeywordEngName(skillsNamesLoc, 'Humanoid')[0]
                creature = getKeywordEngName(skillsNamesLoc, 'Creature')[0]
                spirit = getKeywordEngName(skillsNamesLoc, 'Spirit')[0]
                matter = getKeywordEngName(skillsNamesLoc, 'Matter')[0]
                races = [humanoid, creature, spirit, matter]

                masters = [strName, agiName, intName, hpName, protectName,
                    fireName, waterName, earthName, thunderName, windName, darkName, lightName, element,
                    humanoid, creature, spirit, matter,
                    debuff, comboMasterName, curse, charge, guard, lifeSteal, reflect,
                    bleedName, injuryName]

                function getAppliesNames() {
                    applies = ['Humanoid', 'Creature', 'Spirit', 'Matter',
                        'LifeSteal', 'TurnCharge', 'PracticePerfect', 'FocusEnergy', 'NegativePower',
                        'ComboBlend', 'Scheduled', 'AutoFire', 'Overloaded', 'LastResort', 'Gamble',
                        'Exhaust', 'Curse']
                    let synergy = getKeywordEngName(skillsNamesLoc, 'XSynergy')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XSynergy')[0].map(f => f.replace(/\{0\}/g, '').replace('X', ''))
                    applies = applies.map(apply => getKeywordEngName(skillsNamesLoc, apply)[0])
                    attrsNames.map((attr, ind) => {

                        let translatedName = attr == undefined ? '' : attr.map((a, i) => a + ' ' + synergy[i])
                        applies.push(translatedName)
                    })
                }
                getAppliesNames()
                applies = applies.map(a => {
                    if (a !== undefined) {
                        return [a[0] == 'ComboBlend' ? a[0] = 'Combo Blend' : a[0], a[1], a[2], a[3]]
                    }
                })
                abilsDesc.map(abil => {
                    let nameKey = abil[0]
                    switch (nameKey) {
                        case 'EElementXAttackDescr':

                            let fireAttack = getFullDesc('Fire Attack', abil, fireName, finale)
                            let waterAttack = getFullDesc('Water Attack', abil, waterName, finale)
                            let earthAttack = getFullDesc('Earth Attack', abil, earthName, finale)
                            let windAttack = getFullDesc('Wind Attack', abil, windName, finale)
                            let thunderAttack = getFullDesc('Thunder Attack', abil, thunderName, finale)
                            let darkAttack = getFullDesc('Dark Attack', abil, darkName, finale)
                            let lightAttack = getFullDesc('Light Attack', abil, lightName, finale)
                            let elementAttack = getFullDesc('Element Attack', abil, element, finale)
                            abilsDescAdjusted.push(fireAttack, waterAttack, earthAttack, windAttack, thunderAttack, darkAttack, lightAttack, elementAttack)
                            break;
                        case 'VRIDamageXDescr':
                            let venomExplode = getFullDesc('Venom Explode', abil, venomName, '20%', 'Strength')
                            let restrainExplode = getFullDesc('Restrain Explode', abil, restrainName, '20%', 'Agility')
                            let insaneExplode = getFullDesc('Insane Explode', abil, insaneName, '20%', 'Intelligence')
                            abilsDescAdjusted.push(venomExplode, restrainExplode, insaneExplode);
                            break;
                        case 'DebuffRemoveXAttackDescr':
                            let removalAttack = ['Removal attack', abil[1], abil[2], abil[3]].map(a => a.replace('{0}', 'X%'))
                            abilsDescAdjusted.push(removalAttack);
                            break;
                        case 'EElementXHealDescr':
                            let fireHeal = getFullDesc('Fire Heal', abil, fireName, 'X%', enchant)
                            let waterHeal = getFullDesc('Water Heal', abil, waterName, 'X%', enchant)
                            let earthHeal = getFullDesc('Earth Heal', abil, earthName, 'X%', enchant)
                            let windHeal = getFullDesc('Wind Heal', abil, windName, 'X%', enchant)
                            let thunderHeal = getFullDesc('Thunder Heal', abil, thunderName, 'X%', enchant)
                            let darkHeal = getFullDesc('Dark Heal', abil, darkName, 'X%', enchant)
                            let lightHeal = getFullDesc('Light Heal', abil, lightName, 'X%', enchant)
                            let elementHeal = getFullDesc('Elemental Heal', abil, element, 'X%', enchant)
                            abilsDescAdjusted.push(fireHeal, waterHeal, earthHeal, windHeal, thunderHeal, darkHeal, lightHeal, elementHeal)
                            break;
                        case 'BuffRemoveXHealDescr':
                            let removalHeal = getFullDesc('Removal heal', abil, protectName, secondChance, invulnerable, 'x%')
                            abilsDescAdjusted.push(removalHeal);
                            break;
                        case 'DrawXAbilityDescr':
                            let drawAbility = ['Draw Ability', abil[1], abil[2], abil[3]].map(a => a.replace('{0}', 'X'))
                            abilsDescAdjusted.push(drawAbility)
                            break;
                        case 'ForceXTurnPassDescr':
                            let skipTurn = ['Pass Turn', abil[1], abil[2], abil[3]].map(a => a.replace('{0}', 'X'))
                            abilsDescAdjusted.push(skipTurn)
                            break;
                        case 'DoubleActionBuffDescr':
                            let doubleActBuff = ['Double Action Buff', abil[1], abil[2], abil[3]]
                            abilsDescAdjusted.push(doubleActBuff)
                            break;
                        case 'DoubleBuffDescr':
                            let doubleBuff = ['Double Buff', abil[1], abil[2], abil[3]]
                            abilsDescAdjusted.push(doubleBuff)
                            break;
                        case 'DoubleDebuffDescr':
                            let doubleDebuff = ['Double Debuffs', abil[1], abil[2], abil[3]]
                            abilsDescAdjusted.push(doubleDebuff)
                            break;
                        case 'DoubleVulnDescr':
                            let doubleVuln = ['Double Vulnerable', abil[1], abil[2], abil[3]]
                            abilsDescAdjusted.push(doubleVuln)
                            break;
                        case 'StatVuln':

                            break;
                        case 'ElementVuln':
                            break;
                        case 'RecoverXAbilityDescr':
                            let recoverAbil = vulnDescs('Recover skill', abil, '{0}', '1')
                            abilsDescAdjusted.push(recoverAbil)
                            break
                        case 'LoseXMaxHPDescr':
                            //  let sacrifice = vulnDescs('Sacrifice HP', abil, '{0}', 'x')
                            let sacrifice = vulnDescs('Sacrifice HP', abil, '{1}', hpName).map(a => a.replace('{0}', '10x%'))
                            abilsDescAdjusted.push(sacrifice)
                            break
                        case 'DiscardXDescr':
                            let discardHand = vulnDescs('Discard hand', abil, '{0}', '1')
                            abilsDescAdjusted.push(discardHand)
                            break
                        case 'FarewellXDescr':
                            let farewell = vulnDescs('Fare Well', abil, '{0}', '99999')
                            abilsDescAdjusted.push(farewell)
                            break
                        case 'BuffSwapXDescr':
                            let swapBuffs = vulnDescs('Swap Buffs', abil, '{0}', protectName).map((a,i) => a.replace('{1}', invulnerable[i]))
                            swapBuffs = swapBuffs.map((a,i)=> a.replace('{2}', secondChance[i]))
                            abilsDescAdjusted.push(swapBuffs)
                            break
                        case 'DebuffSwapDescr':
                            let swapDebuffs = ['Swap Debuffs', abil[1], abil[2], abil[3]]
                            abilsDescAdjusted.push(swapDebuffs)
                            break
                        case 'CurseStartXDebuffDescr':
                            let curseHp = getFullDesc('Weak MaxHP (Ability become Passive)', abil, 'X', hpName).map((a, i) => a.replace('X%', hpName[i] + ' Debuff'))
                            let curseStr = getFullDesc('Weak Strength (Ability become Passive)', abil, 'X', strName).map((a, i) => a.replace('X%', strName[i] + ' Debuff'))
                            let curseAgi = getFullDesc('Weak Agility (Ability become Passive)', abil, 'X', agiName).map((a, i) => a.replace('X%', agiName[i] + ' Debuff'))
                            let curseInt = getFullDesc('Weak Intelligence (Ability become Passive)', abil, 'X', intName).map((a, i) => a.replace('X%', intName[i] + ' Debuff'))
                            let curseFire = getFullDesc('Burned (Ability become Passive)', abil, 'X', burnName).map((a, i) => a.replace('X%', burnName[i]))
                            let curseWater = getFullDesc('Chill (Ability become Passive)', abil, 'X', chillName).map((a, i) => a.replace('X%', chillName[i]))
                            let curseEarth = getFullDesc('Seeded (Ability become Passive)', abil, 'X', seedName).map((a, i) => a.replace('X%', seedName[i]))
                            let curseWind = getFullDesc('Dizzy (Ability become Passive)', abil, 'X', dizzyName).map((a, i) => a.replace('X%', dizzyName[i]))
                            let curseThunder = getFullDesc('Paralysed (Ability become Passive)', abil, 'X', paralysysName).map((a, i) => a.replace('X%', paralysysName[i]))
                            let curseDark = getFullDesc('Depress (Ability become Passive)', abil, 'X', depressName).map((a, i) => a.replace('X%', depressName[i]))
                            let curseLight = getFullDesc('Blinded (Ability become Passive)', abil, 'X', blindName).map((a, i) => a.replace('X%', blindName[i]))
                            let curseBleed = getFullDesc('Bleeding (Ability become Passive)', abil, 'X', bleedName).map((a, i) => a.replace('X%', bleedName[i]))
                            let curseInjury = getFullDesc('Injured (Ability become Passive)', abil, 'X', injuryName).map((a, i) => a.replace('X%', injuryName[i]))
                            let curseInsane = getFullDesc('Insane (Ability become Passive)', abil, 'X', insaneName).map((a, i) => a.replace('X%', insaneName[i]))
                            let curseRestrain = getFullDesc('Restrained (Ability become Passive)', abil, 'X', restrainName).map((a, i) => a.replace('X%', restrainName[i]))
                            let curseVenom = getFullDesc('Venomed (Ability become Passive)', abil, 'X', venomName).map((a, i) => a.replace('X%', venomName[i]))
                            let curseConfuse = getFullDesc('Venomed (Ability become Passive)', abil, 'X', confuseName).map((a, i) => a.replace('X%', confuseName[i]))
                            let curseSlack = getFullDesc('Venomed (Ability become Passive)', abil, 'X', slackName).map((a, i) => a.replace('X%', slackName[i]))
                            let curseElement = getFullDesc('Cursed (Ability become Passive)', abil, 'X', random).map((a, i) => a.replace('X%', random[i] + ' ' + elementalStatus[i]))
                            abilsDescAdjusted.push(curseFire, curseWater, curseEarth, curseWind, curseThunder, curseDark, curseLight, curseElement,
                                curseBleed, curseInjury, curseInsane, curseRestrain, curseVenom, curseConfuse, curseSlack,
                                curseHp, curseStr, curseAgi, curseInt)
                            break
                        case 'DiscardAbilityXAttackDescr':
                            let discardPileHp = getFullDesc('Discard HP Attack', abil, hpName, 'X', 20)
                            let discardPileStr = getFullDesc('Discard Str Attack', abil, strName, 'X', 20)
                            let discardPileAgi = getFullDesc('Discard Agi Attack', abil, agiName, 'X', 20)
                            let discardPileInt = getFullDesc('Discard Int Attack', abil, intName, 'X', 20)
                            abilsDescAdjusted.push(discardPileHp, discardPileStr, discardPileAgi, discardPileInt)
                            break
                        case 'RemoveXDebuffsJoin':
                            let removeFire = getFullDesc('Burn Remove', abil, burnName, finale)
                            let removeWater = getFullDesc('Chill Remove', abil, chillName, finale)
                            let removeEarth = getFullDesc('Seed Remove', abil, seedName, finale)
                            let removeWind = getFullDesc('Dizzy Remove', abil, dizzyName, finale)
                            let removeThunder = getFullDesc('Paralysis Remove', abil, paralysysName, finale)
                            let removeDark = getFullDesc('Depress Remove', abil, depressName, finale)
                            let removeLight = getFullDesc('Blind Remove', abil, blindName, finale)
                            let removeBleed = getFullDesc('Bleed Remove', abil, bleedName, finale)
                            let removeInjury = getFullDesc('Injury Remove', abil, injuryName, finale)
                            let removeInsane = getFullDesc('Insane Remove', abil, insaneName, finale)
                            let removeRestrain = getFullDesc('Restrain Remove', abil, restrainName, finale)
                            let removeVenom = getFullDesc('Venom Remove', abil, venomName, finale)
                            let removeElement = getFullDesc('All Elemental Status Effect Remove', abil, element, finale)
                            let removeDebuff = getFullDesc('Debuff Remove', abil, 'X', finale).map((a, i) => a.replace('X', all[i] + ' ' + debuff[i] + ', ' + vulnerable[i]))
                            abilsDescAdjusted.push(removeFire, removeWater, removeEarth, removeWind, removeThunder, removeDark, removeLight,
                                removeBleed, removeInjury, removeInsane, removeRestrain, removeVenom, removeElement, removeDebuff)
                            break
                        case 'ApplyXSelfJoin':
                            let applyCharge = getFullDesc('Charge', abil, charge, finale)
                            let applyGuard = getFullDesc('Guard', abil, guard, finale)
                            let applyStackCharge = getFullDesc('Stack Charge', abil, stackCharge, finale)
                            let applyStackGuard = getFullDesc('Stack Guard', abil, stackGuard, finale)
                            let applyCertain = getFullDesc('Apply Certain', abil, 'X', finale).map((a,i)=> a.replace('X', 'X ' + certain[i]))
                            let applyPureElement = getFullDesc('Pure Element', abil, element, finale)
                            let applyProtectEnhance = getFullDesc('Protect Enhance', abil, protectName, enhance)
                            abilsDescAdjusted.push(applyCharge, applyGuard, applyStackCharge, applyStackGuard, applyCertain, applyPureElement, applyProtectEnhance)
                            //gain element action buffs

                            elements.map((attr, ind) => {
                                let attrName = elementsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Element'
                                let attrBuff = abil.map((a, i) => a.replace(/\{0\}/g, 'X' + ' ' + attrName[i] + ' ' + element[i]))
                                attrBuff.splice(0, 1, translatedName)
                                abilsDescAdjusted.push(attrBuff)
                            })
                            let paralysedCurse = getFullDesc('Paralyed On Self', abil, 'X', enhance).map((a, i) => a.replace('X', 'X ' + paralysysName[i]))
                            let burnedCurse = getFullDesc('Burned On Self', abil, 'X', enhance).map((a, i) => a.replace('X', 'X ' + burnName[i]))
                            let seededCurse = getFullDesc('Seeded On Self', abil, 'X', enhance).map((a, i) => a.replace('X', 'X ' + seedName[i]))
                            let bleedingCurse = getFullDesc('Bleeding On Self', abil, 'X', enhance).map((a, i) => a.replace('X', 'X ' + bleedName[i]))
                            let blindedCurse = getFullDesc('Blinded On Self', abil, 'X', enhance).map((a, i) => a.replace('X', 'X ' + blindName[i]))
                            let injuredCurse = getFullDesc('Injured On Self', abil, 'X', enhance).map((a, i) => a.replace('X', 'X ' + injuryName[i]))
                            abilsDescAdjusted.push(paralysedCurse, burnedCurse, seededCurse, bleedingCurse, blindedCurse, injuredCurse)
                            //gain stat debuffs
                            debuffs.map((attr, ind) => {
                                let attrName = debuffs.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' On Self'
                                let attrBuff = abil.map((a, i) => a.replace(/\{0\}/g, 'X' + ' ' + attrName[i] + ' ' + element[i]))
                                attrBuff.splice(0, 1, translatedName)
                                abilsDescAdjusted.push(attrBuff)
                            })
                            vri.map((attr, ind) => {
                                let attrName = vri.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' On Self'
                                let attrBuff = abil.map((a, i) => a.replace(/\{0\}/g, 'X' + ' ' + attrName[i] + ' ' + element[i]))
                                attrBuff.splice(0, 1, translatedName)
                                abilsDescAdjusted.push(attrBuff)
                            })
                            attrs.map((attr, ind) => {
                                if (ind > 0) {
                                    let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                    let translatedName = 'Debuff ' + attrName[1] + ' On Self'
                                    let attrBuff = abil.map((a, i) => a.replace(/\{0\}/g, 'X' + ' ' + attrName[i] + ' ' + debuff[i]))
                                    attrBuff.splice(0, 1, translatedName)
                                    abilsDescAdjusted.push(attrBuff)
                                }
                            })
                            let randomESsacrifice = getFullDesc('Cursed On Self', abil, 'X', enhance).map((a, i) => a.replace('X', 'X ' + random[i] + ' ' + elementalStatus[i]))
                            abilsDescAdjusted.push(randomESsacrifice)
                            break
                        case 'ApplyXOpponentJoin':
                            //vulnerable
                            let hpVuln = vulnDescs('HP Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + hpName[i] + ' Vulnerable'))
                            let strVuln = vulnDescs('Strength Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + strName[i] + ' ' + vulnerable[i]))
                            let agiVuln = vulnDescs('Agility Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + agiName[i] + ' ' + vulnerable[i]))
                            let intVuln = vulnDescs('Intelligence Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + intName[i] + ' ' + vulnerable[i]))
                            let protVuln = vulnDescs('Protect Pierce', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + protectName[i] + ' ' + vulnerable[i]))
                            let fireVuln = vulnDescs('Fire Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + fireName[i] + ' ' + vulnerable[i]))
                            let waterVuln = vulnDescs('Water Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + waterName[i] + ' ' + vulnerable[i]))
                            let earthVuln = vulnDescs('Earth Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + earthName[i] + ' ' + vulnerable[i]))
                            let windVuln = vulnDescs('Wind Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + windName[i] + ' ' + vulnerable[i]))
                            let thunderVuln = vulnDescs('Thunder Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + thunderName[i] + ' ' + vulnerable[i]))
                            let darkVuln = vulnDescs('Dark Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + darkName[i] + ' ' + vulnerable[i]))
                            let lightVuln = vulnDescs('Light Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + lightName[i] + ' ' + vulnerable[i]))
                            let injuryVuln = vulnDescs('Injury Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + injuryName[i] + ' ' + vulnerable[i]))
                            let bleedVuln = vulnDescs('Bleed Vulnerable', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + bleedName[i] + ' ' + vulnerable[i]))
                            let randomES = vulnDescs('Inflict Random status effects', abil, '{0}', 'X').map((a, i) => a.replace('X', 'X ' + random[i] + ' ' + elementalStatus[i]))
                            abilsDescAdjusted.push(fireVuln, waterVuln, earthVuln, windVuln, thunderVuln, darkVuln, lightVuln, injuryVuln, bleedVuln, randomES,
                                hpVuln, strVuln, agiVuln, intVuln, protVuln)
                            //attr debuff
                            attrs.map((attr, ind) => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Debuff'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X' + ' ' + attrName[i] + ' ' + debuff[i]))
                                attrBuff.splice(0, 1, translatedName)
                                abilsDescAdjusted.push(attrBuff)
                            })
                            debuffs.map((attr, ind) => {
                                let attrName = debuffs.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = 'Inflict ' + attrName[1]
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X' + ' ' + attrName[i]))
                                attrBuff.splice(0, 1, translatedName)
                                abilsDescAdjusted.push(attrBuff)
                            })
                            vri.map((attr, ind) => {
                                let attrName = vri.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = 'Inflict ' + attrName[1]
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X' + ' ' + attrName[i] + ' ' + debuff[i]))
                                attrBuff.splice(0, 1, translatedName)
                                abilsDescAdjusted.push(attrBuff)
                            })
                            break;
                        case 'GainXProtectJoin':
                            let hpProtect = getFullDesc('HP Protect', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + hpName[i] + ' ' + protectName[i]).replace('{1}', ''))
                            let strProtect = getFullDesc('Strength Protect', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + strName[i] + ' ' + protectName[i]).replace('{1}', ''))
                            let agiProtect = getFullDesc('Agility Protect', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + agiName[i] + ' ' + protectName[i]).replace('{1}', ''))
                            let intProtect = getFullDesc('Intelligence Protect', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + intName[i] + ' ' + protectName[i]).replace('{1}', ''))
                            let rawProtect = getFullDesc('Raw Protect', abil, false, 'X').map((a, i) => a.replace('X', 'X ' + ' ' + protectName[i]).replace('{1}', ''))
                            //special case gain action fits here actually too
                            let gainSecondChance = vulnDescs('Second Chance', abil, '{0}', 'X').map((a, i) => a.replace('{1}', secondChance[i]))
                            let gainInvulnerable = vulnDescs('Invulnerable', abil, '{0}', 'X').map((a, i) => a.replace('{1}', invulnerable[i]))
                            let gainAction = vulnDescs('Gain AP', abil, '{0}', 'X').map((a, i) => a.replace('{1}', action[i]))
                            let gainActionNext = vulnDescs('Gain AP Next', abil, '{0}', 'X').map((a, i) => a.replace('{1}', actionNext[i]))
                            let gainDrawNext = vulnDescs('Draw Ability Next', abil, '{0}', 'X').map((a, i) => a.replace('{1}', drawNext[i]))

                            abilsDescAdjusted.push(hpProtect, strProtect, agiProtect, intProtect, gainAction, gainActionNext, gainDrawNext, rawProtect, gainSecondChance, gainInvulnerable)
                            //gain attr buffs
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Buff'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X').replace('{1}', attrName[i] + ' ' + buff[i]))
                                attrBuff.splice(0, 1, translatedName)
                                abilsDescAdjusted.push(attrBuff)
                            })
                            //gain attr action buffs
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Action Buff'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X').replace('{1}', attrName[i] + ' ' + actionBuff[i]))
                                attrBuff.splice(0, 1, translatedName)
                                abilsDescAdjusted.push(attrBuff)
                            })
                            //gain action debuff
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Action Debuff'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X').replace('{1}', attrName[i] + ' ' + actionDebuff[i]))
                                attrBuff.splice(0, 1, translatedName)
                                abilsDescAdjusted.push(attrBuff)
                            })
                            //gain element action buffs
                            elements.map(attr => {
                                let attrName = elementsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Action Buff'
                                let attrBuff = abil.map((a, i) => a.replace(/\{0\}/g, 'X').replace('{1}', attrName[i] + ' ' + actionBuff[i]))
                                attrBuff.splice(0, 1, translatedName)
                                abilsDescAdjusted.push(attrBuff)
                            })

                            break
                        case 'DealXDamageJoin':
                            let rawAttack = getFullDesc('Raw Attack', abil, false, 'X%').map((a, i) => a.replace('X%', 'X'))
                            let hpAttack = getFullDesc('HP Attack', abil, false, 'X% ').map((a, i) => a.replace('X%', 'X% ' + hpName[i]))
                            let strAttack = getFullDesc('Strength Attack', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + strName[i]))
                            let agiAttack = getFullDesc('Agility Attack', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + agiName[i]))
                            let intAttack = getFullDesc('Intelligence Attack', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + intName[i]))
                            let protectAttack = getFullDesc('Protect Attack', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + protectName[i]))
                            abilsDescAdjusted.push(rawAttack, hpAttack, strAttack, agiAttack, intAttack, protectAttack)
                            break
                        case 'HealXJoin':
                            let rawHeal = getFullDesc('Raw Heal', abil, false, 'X', hpName)
                            let hpHeal = getFullDesc('HP Heal', abil, false, 'X% ').map((a, i) => a.replace('X%', 'X% ' + hpName[i]))
                            let strHeal = getFullDesc('Strength Heal', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + strName[i]))
                            let agiHeal = getFullDesc('Agility Heal', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + agiName[i]))
                            let intHeal = getFullDesc('Intelligence Heal', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + intName[i]))
                            let protectHeal = getFullDesc('Protect Heal', abil, false, 'X%').map((a, i) => a.replace('X%', 'X% ' + protectName[i]))
                            let doNothing = ['Do nothing', 'Do nothing', 'Do nothing', 'Do nothing']
                            abilsDescAdjusted.push(rawHeal, hpHeal, strHeal, agiHeal, intHeal, protectHeal, doNothing)
                            break
                    }

                })
                let lang = document.getElementById('langSel').value
                switch (lang) {
                    case 'English':
                        hpName = hpName[1]
                        strName = strName[1]
                        agiName = agiName[1]
                        intName = intName[1]
                        protectName = protectName[1]

                        fireName = fireName[1]
                        waterName = waterName[1]
                        earthName = earthName[1]
                        windName = windName[1]
                        thunderName = thunderName[1]
                        darkName = darkName[1]
                        lightName = lightName[1]

                        burnName = burnName[1]
                        chillName = chillName[1]
                        seedName = seedName[1]
                        dizzyName = dizzyName[1]
                        paralysysName = paralysysName[1]
                        depressName = depressName[1]
                        blindName = blindName[1]
                        venomName = venomName[1]
                        insaneName = insaneName[1]
                        bleedName = bleedName[1]
                        restrainName = restrainName[1]
                        injuryName = injuryName[1]
                        break;
                    case 'Chinese':
                        hpName = hpName[2]
                        strName = strName[2]
                        agiName = agiName[2]
                        intName = intName[2]
                        protectName = protectName[2]

                        fireName = fireName[2]
                        waterName = waterName[2]
                        earthName = earthName[2]
                        windName = windName[2]
                        thunderName = thunderName[2]
                        darkName = darkName[2]
                        lightName = lightName[2]

                        burnName = burnName[2]
                        chillName = chillName[2]
                        seedName = seedName[2]
                        dizzyName = dizzyName[2]
                        paralysysName = paralysysName[2]
                        depressName = depressName[2]
                        blindName = blindName[2]
                        venomName = venomName[2]
                        insaneName = insaneName[2]
                        bleedName = bleedName[2]
                        restrainName = restrainName[2]
                        injuryName = injuryName[2]
                        break;
                    case 'Chinese(Trad)':
                        hpName = hpName[3]
                        strName = strName[3]
                        agiName = agiName[3]
                        intName = intName[3]
                        protectName = protectName[3]

                        fireName = fireName[3]
                        waterName = waterName[3]
                        earthName = earthName[3]
                        windName = windName[3]
                        thunderName = thunderName[3]
                        darkName = darkName[3]
                        lightName = lightName[3]

                        burnName = burnName[3]
                        chillName = chillName[3]
                        seedName = seedName[3]
                        dizzyName = dizzyName[3]
                        paralysysName = paralysysName[3]
                        depressName = depressName[3]
                        blindName = blindName[3]
                        venomName = venomName[3]
                        insaneName = insaneName[3]
                        bleedName = bleedName[3]
                        restrainName = restrainName[3]
                        injuryName = injuryName[3]
                        break;
                }
            })
 

    }, 

    glossary: () => {
        return GetSheetDone
            .raw(id, 'Skills Description').then(data => data.data).then(res => {
                localization.skills()
                protectName = getKeywordEngName(skillsNamesLoc, 'Protect')[0]
                skillsDesc.shift()
                // AP and draw NExt
                action = getKeywordEngName(skillsNamesLoc, 'XActionPoint')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XActionPoint')[0]
                actionNext = getKeywordEngName(skillsNamesLoc, 'XActionPointNext')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XActionPointNext')[0]
                drawNext = getKeywordEngName(skillsNamesLoc, 'XDrawNext')[0] == undefined ? '' : getKeywordEngName(skillsNamesLoc, 'XDrawNext')[0]

                let actionNextN = actionNext.map(a => a.replace('XActionPointNext', 'Gain AP Next').replace('{0}', ''))
                let drawNextN = drawNext.map(a => a.replace('XDrawNext', 'Draw Ability Next').replace('{0}', ''))
                skillsNamesAdjusted.push(actionNextN, drawNextN)

                actionNext.splice(0, 1, 'Gain AP Next')
                actionNext = actionNext.map(a => a.replace('{0}', '+X'))
                drawNext.splice(0, 1, 'Draw Ability Next')
                drawNext = drawNext.map(a => a.replace('{0}', '+X'))
                skillsDescAdjusted.push(actionNext, drawNext)

                let attrHp = attrsNames.filter(b => b[0] == 'MaxHP')[0]
                let attrStr = attrsNames.filter(b => b[0] == 'Strength')[0]
                let attrAgi = attrsNames.filter(b => b[0] == 'Agility')[0]
                let attrInt = attrsNames.filter(b => b[0] == 'Intelligence')[0]

                let attrWater = elementsNames.filter(b => b[0] == 'Water')[0]

                let debuffParal = debuffs.filter(d => d[0] == 'Paralysis')[0]
                let debuffSlack = debuffs.filter(d => d[0] == 'Slack')[0]
                let debuffConfuse = debuffs.filter(d => d[0] == 'Confuse')[0]
                let debuffInjury = debuffs.filter(d => d[0] == 'Injury')[0]
                let debuffBlind = debuffs.filter(d => d[0] == 'Blind')[0]
                let debuffDizzy = debuffs.filter(d => d[0] == 'Dizzy')[0]
                let debuffDepress = debuffs.filter(d => d[0] == 'Depress')[0]
                let debuffBleed = debuffs.filter(d => d[0] == 'Bleed')[0]

                //other buffs debuffs etc
                buffsDesc.map(skill => {
                    let skillName = skill[0]
                    switch (skillName) {
                        case 'SuddenDeathDescr':
                            let sdDesc = skill.map((s, i) => s.replace(/\{0\}/gi, protectName[i]))
                            sdDesc.splice(0, 1, 'Sudden Death')
                            skillsDescAdjusted.push(sdDesc)

                            let sdName = skillsNamesLoc.filter(loc => loc[0] == 'SuddenDeath')[0]
                            sdName.splice(0, 1, 'Sudden Death')
                            skillsNamesAdjusted.push(sdName)
                            break
                    }
                })
                skillsDesc.map(skill => {
                    let skillName = skill[0]
                    switch (skillName) {
                        case 'XActBuffDescr':
                            attrs.map((attr,ind) => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let statActBuff = skill.map((s, i) => s.replace('{0}', attrName[i]))
                                statActBuff = statActBuff.map((s, i) => s.replace('{1}', protectName[i]))
                                statActBuff = statActBuff.map((s, i) => s.replace('{2}', '5X%'))
                                statActBuff = statActBuff.map(s => s.split('。')[0])
                                statActBuff = statActBuff.map(s => s.split('.')[0])
                                statActBuff.splice(0, 1, attr + ' Action Buff')
                                skillsDescAdjusted.push(statActBuff)

                                let sdName = skillsNamesLoc.filter(loc => loc[0] == 'XActBuff')[0]
                                if (sdName != undefined) {
                                    sdName = sdName.map((s, i) => s.replace('{0}', attrName[i]))
                                    sdName.splice(0, 1, attr + ' Action Buff')
                                    skillsNamesAdjusted.push(sdName)
                                } 
                            })
                            let statActBuff = skill.map((s, i) => s.replace('{0}', protectName[i]))
                            statActBuff = statActBuff.map((s, i) => s.replace('{1}', protectName[i]))
                            statActBuff = statActBuff.map((s, i) => s.replace('{2}', '5X%'))
                            statActBuff = statActBuff.map(s => s.split('。')[0])
                            statActBuff = statActBuff.map(s => s.split('.')[0])
                            statActBuff.splice(0, 1, 'Protect Enhance')
                            skillsDescAdjusted.push(statActBuff)

                            let protectEnchName = skillsNamesLoc.filter(loc => loc[0] == 'XProtectEnhance')[0]
                            protectEnchName.splice(0, 1, 'Protect Enhance')
                            protectEnchName = protectEnchName.map((s,i) => s.replace('{0}', protectName[i]))
                            skillsNamesAdjusted.push(protectEnchName)
                            break;
                        case 'XDebuffDescr':
                            attrs.map((attr, ind) => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let statActBuff = skill.map((s, i) => s.replace('{0}', attrName[i]))
                                statActBuff = statActBuff.map((s, i) => s.replace('{1}', '10%'))
                                statActBuff = statActBuff.map((s, i) => s.replace('{2}', '3').replace('{3}', '5'))
                                statActBuff.splice(0, 1, attr + ' Debuff')
                                skillsDescAdjusted.push(statActBuff)

                                let statDebuffName = skillsNamesLoc.filter(loc => loc[0] == 'XDebuff')[0]
                                if (statDebuffName != undefined) {
                                    statDebuffName = statDebuffName.map((s, i) => s.replace('{0}', attrName[i]))
                                    statDebuffName.splice(0, 1, attr + ' Debuff')
                                    skillsNamesAdjusted.push(statDebuffName)
                                } 
                            })
                        case 'ChargeXDescr':
                            let chargeDescr = skill.map((s, i) => s.replace('{0}', '30%').replace('{1}', '50%'))
                            chargeDescr.splice(0, 1, 'Charge')
                            skillsDescAdjusted.push(chargeDescr)

                            let chargeN = skillsNamesLoc.filter(loc => loc[0] == 'Charge')[0]
                            chargeN.splice(0, 1, 'Charge')
                            skillsNamesAdjusted.push(chargeN)
                            break
                        case 'GuardXDescr':
                            let guardDescr = skill.map((s, i) => s.replace('{0}', '30%').replace('{1}', '50%'))
                            guardDescr.splice(0, 1, 'Guard')
                            skillsDescAdjusted.push(guardDescr)

                            let guardN = skillsNamesLoc.filter(loc => loc[0] == 'Guard')[0]
                            guardN.splice(0, 1, 'Guard')
                            skillsNamesAdjusted.push(guardN)
                            break
                        case 'StackChargeXDescr':
                            let stackChargeDesc = skill.map((s, i) => s.replace('{0}', '15X%').replace('{1}', '500%').replace('{2}', '800%'))
                            stackChargeDesc.splice(0, 1, 'Stack Charge')
                            skillsDescAdjusted.push(stackChargeDesc)

                            let stackChargeN = skillsNamesLoc.filter(loc => loc[0] == 'StackCharge')[0]
                            stackChargeN.splice(0, 1, 'Stack Charge')
                            skillsNamesAdjusted.push(stackChargeN)
                            break
                        case 'StackGuardXDescr':
                            let stackGuardDesc = skill.map((s, i) => s.replace('{0}', '30%').replace('{1}', '40%').replace('{2}', '10%'))
                            stackGuardDesc.splice(0, 1, 'Stack Guard')
                            skillsDescAdjusted.push(stackGuardDesc)

                            let stackGuardN = skillsNamesLoc.filter(loc => loc[0] == 'StackGuard')[0]
                            stackGuardN.splice(0, 1, 'Stack Guard')
                            skillsNamesAdjusted.push(stackGuardN)
                            break
                        case 'XEActBuffDescr':
                            elements.map(attr => {
                                let attrName = elementsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Action Buff'
                                let attrBuff = skill.map((s, i) => s.replace('{0}', attr).replace('{1}', '5X%').replace('{2}', '15').replace('{3}', '20'))
                                attrBuff.splice(0, 1, translatedName)
                                skillsDescAdjusted.push(attrBuff)

                                let elActBuffName = skillsNamesLoc.filter(loc => loc[0] == 'XActBuff')[0]
                                if (elActBuffName != undefined) {
                                    elActBuffName = elActBuffName.map((s, i) => s.replace('{0}', attrName[i]))
                                    elActBuffName.splice(0, 1, attr + ' Action Buff')
                                    skillsNamesAdjusted.push(elActBuffName)
                                } 
                            })
                            break;
                        case 'FWTEWElementXDescr':
                            let elStatus, elOpposite, el
                            elements.map((attr,ind) => {
                                switch (attr) {
                                    case 'Fire':
                                        el = elementsNames[0]
                                        elStatus = debuffs.filter(d => d[0] == 'Burn')[0]
                                        elOpposite = elementsNames[ind + 3]
                                        break;
                                    case 'Water':
                                        el = elementsNames[1]
                                        elStatus = debuffs.filter(d => d[0] == 'Chill')[0]
                                        elOpposite = elementsNames[ind - 1]
                                        break;
                                    case 'Earth':
                                        el = elementsNames[2]
                                        elStatus = debuffs.filter(d => d[0] == 'Seed')[0]
                                        elOpposite = elementsNames[ind + 2]
                                        break;
                                    case 'Thunder':
                                        el = elementsNames[4]
                                        elStatus = debuffs.filter(d => d[0] == 'Paralysis')[0]
                                        elOpposite = elementsNames[ind -3]
                                        break;
                                    case 'Wind':
                                        el = elementsNames[3]
                                        elStatus = debuffs.filter(d => d[0] == 'Dizzy')[0]
                                        elOpposite = elementsNames[ind - 1]
                                        break;
                                    case 'Light':
                                        el = elementsNames[5]
                                        elStatus = debuffs.filter(d => d[0] == 'Blind')[0]
                                        elOpposite = elementsNames[ind + 1]
                                        break;
                                    case 'Dark':
                                        el = elementsNames[6]
                                        elStatus = debuffs.filter(d => d[0] == 'Depress')[0]
                                        elOpposite = elementsNames[ind - 1]
                                        break;
                                }
                                let attrName = elementsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Element'
                                let attrBuff = skill.map((s, i) => s.replaceAll(/\{0\}/gi, '5X%').replaceAll(/\{1\}/gi, elStatus[i]).replaceAll(/\{2\}/gi, elOpposite[i]).replaceAll(/\{3\}/gi, el[i]).replaceAll(/\{4\}/gi, '5').replaceAll(/\{5\}/gi, '10').replaceAll(/\{6\}/gi, elOpposite[i]))
                                attrBuff.splice(0, 1, translatedName)
                                skillsDescAdjusted.push(attrBuff)

                                let elElementName = skillsNamesLoc.filter(loc => loc[0] == 'XElement')[0]
                                if (elElementName != undefined) {
                                    elElementName = elElementName.map((s, i) => s.replace('{0}', attrName[i]))
                                    elElementName.splice(0, 1, attr + ' Element')
                                    skillsNamesAdjusted.push(elElementName)
                                } 
                            })
                            break;

                        case 'XBuffDescr':
                            attrs.map((attr, ind) => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let statBuff = skill.map((s, i) => s.replace('{0}', attrName[i]))
                                statBuff = statBuff.map((s, i) => s.replace('{1}', '10X%'))
                                statBuff = statBuff.map((s, i) => s.replace('{2}', '3').replace('{3}', '5'))
                                statBuff.splice(0, 1, attr + ' Buff') 
                                skillsDescAdjusted.push(statBuff)

                                let statBuffName = skillsNamesLoc.filter(loc => loc[0] == 'XBuff')[0]
                                if (statBuffName != undefined) {
                                    statBuffName = statBuffName.map((s, i) => s.replace('{0}', attrName[i]))
                                    statBuffName.splice(0, 1, attr + ' Buff')
                                    skillsNamesAdjusted.push(statBuffName)
                                } 
                            })

                            break
                        case 'BurnXDescr':
                            let attrFire = elementsNames.filter(b => b[0] == 'Fire')[0] // added bc fireName won't translate properly on switching lang, only on page reload
                            let burnDesc = skill.map((s, i) => s.replace('{0}', '5%').replace('{1}', attrHp[i]).replace('{2}', attrFire[i]).replaceAll(/\{3 \}/gi, '3').replace('{4}', '5'))
                            burnDesc.splice(0, 1, 'Burned')
                            skillsDescAdjusted.push(burnDesc)

                            let burnedN = skillsNamesLoc.filter(loc => loc[0] == 'Burn')[0]
                            burnedN.splice(0, 1, 'Burned')
                            skillsNamesAdjusted.push(burnedN)
                            break
                        case 'ChillXDescr':
                            let chilledDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '1').replace(/\{1\}/gi, attrWater[i]).replace(/\{2\}/gi, '2'))
                            chilledDesc.splice(0, 1, 'Chilled')
                            skillsDescAdjusted.push(chilledDesc)

                            let chilledN = skillsNamesLoc.filter(loc => loc[0] == 'Chill')[0]
                            chilledN.splice(0, 1, 'Chilled')
                            skillsNamesAdjusted.push(chilledN)
                            break
                        case 'ParalysisXDescr':
                            let attrThund = elementsNames.filter(b => b[0] == 'Thunder')[0]
                            let paralDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '10%').replace(/\{1\}/gi, attrThund[i]).replace(/\{2\}/gi, '3').replace(/\{3\}/gi, '5'))
                            paralDesc.splice(0, 1, 'Paralyzed')
                            skillsDescAdjusted.push(paralDesc)

                            let paralN = skillsNamesLoc.filter(loc => loc[0] == 'Paralysis')[0]
                            paralN.splice(0, 1, 'Paralyzed')
                            skillsNamesAdjusted.push(paralN)
                            break
                        case 'SeedXDescr':
                            let attrEarth = elementsNames.filter(b => b[0] == 'Earth')[0]
                            let seedDesc = skill.map((s, i) => s.replace(/\{0\}/gi, attrEarth[i]).replace(/\{1\}/gi, '20%').replace(/\{2\}/gi, '3').replace(/\{3\}/gi, '5'))
                            seedDesc.splice(0, 1, 'Seeded')
                            skillsDescAdjusted.push(seedDesc)

                            let seededN = skillsNamesLoc.filter(loc => loc[0] == 'Seed')[0]
                            seededN.splice(0, 1, 'Seeded')
                            skillsNamesAdjusted.push(seededN)
                            break
                        case 'DizzyXDescr':
                            let attrWind = elementsNames.filter(b => b[0] == 'Wind')[0]
                            let dizzyDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '10%').replace(/\{1\}/gi, attrWind[i]).replace(/\{2\}/gi, '3').replace(/\{3\}/gi, '5'))
                            dizzyDesc.splice(0, 1, 'Dizzy')
                            skillsDescAdjusted.push(dizzyDesc)


                            let dizzyN = skillsNamesLoc.filter(loc => loc[0] == 'Dizzy')[0]
                            dizzyN.splice(0, 1, 'Dizzy')
                            skillsNamesAdjusted.push(dizzyN)
                            break
                        case 'BlindXDescr':
                            let attrLight = elementsNames.filter(b => b[0] == 'Light')[0]
                            let blindDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '15%').replace(/\{1\}/gi, attrLight[i]).replace(/\{2\}/gi, '3').replace(/\{3\}/gi, '5'))
                            blindDesc.splice(0, 1, 'Blinded')
                            skillsDescAdjusted.push(blindDesc)

                            let blindN = skillsNamesLoc.filter(loc => loc[0] == 'Blind')[0]
                            blindN.splice(0, 1, 'Blinded')
                            skillsNamesAdjusted.push(blindN)
                            break
                        case 'DepressXDescr':
                            let attrDark = elementsNames.filter(b => b[0] == 'Dark')[0]
                            let depressDesc = skill.map((s, i) => s.replace(/\{0\}/gi, protectName[i]).replace(/\{1\}/gi, '15%').replace(/\{2\}/gi, attrDark[i]).replace(/\{3\}/gi, '3').replace(/\{4\}/gi, '5'))
                            depressDesc.splice(0, 1, 'Depressd')
                            skillsDescAdjusted.push(depressDesc)

                            let depressN = skillsNamesLoc.filter(loc => loc[0] == 'Depress')[0]
                            depressN.splice(0, 1, 'Depressd')
                            skillsNamesAdjusted.push(depressN)
                            break
                        case 'BleedXDescr':
                            let bleedDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '1%').replace(/\{1\}/gi, attrHp[i]).replace(/\{2\}/gi, '4').replace(/\{3\}/gi, '7'))
                            bleedDesc.splice(0, 1, 'Bleeding')
                            skillsDescAdjusted.push(bleedDesc)

                            let bleedN = skillsNamesLoc.filter(loc => loc[0] == 'Bleed')[0]
                            bleedN.splice(0, 1, 'Bleeding')
                            skillsNamesAdjusted.push(bleedN)
                            break
                        case 'InjuryXDescr':
                            let injuryDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '3%').replace(/\{1\}/gi, '8').replace(/\{2\}/gi, '15'))
                            injuryDesc.splice(0, 1, 'Injured')
                            skillsDescAdjusted.push(injuryDesc)

                            let injuryN = skillsNamesLoc.filter(loc => loc[0] == 'Injury')[0]
                            injuryN.splice(0, 1, 'Injured')
                            skillsNamesAdjusted.push(injuryN)
                            break
                        case 'VRIXDescr':
                            vri.map(v => {
                                let vriDesc = skill.map(s => s.replace('{0}', '10%').replace('{2}', '25').replace('{3}', '40'))
                                if (v[0] == 'Venom') {
                                    vriDesc = vriDesc.map((r, i) => r.replace('{1}', attrStr[i]))
                                    vriDesc.splice(0, 1, 'Venomed')

                                    let venomN = skillsNamesLoc.filter(loc => loc[0] == 'Venom')[0]
                                    venomN.splice(0, 1, 'Venomed')
                                    skillsNamesAdjusted.push(venomN)
                                }
                                if (v[0] == 'Restrain') {
                                    vriDesc = vriDesc.map((r, i) => r.replace('{1}', attrAgi[i]))
                                    vriDesc.splice(0, 1, 'Restrained')

                                    let restrainN = skillsNamesLoc.filter(loc => loc[0] == 'Restrain')[0]
                                    restrainN.splice(0, 1, 'Restrained')
                                    skillsNamesAdjusted.push(restrainN)
                                }
                                if (v[0] == 'Insane') {
                                    vriDesc = vriDesc.map((r, i) => r.replace('{1}', attrInt[i]))
                                    vriDesc.splice(0, 1, 'Insane')

                                    let insaneN = skillsNamesLoc.filter(loc => loc[0] == 'Insane')[0]
                                    insaneN.splice(0, 1, 'Insane')
                                    skillsNamesAdjusted.push(insaneN)
                                }
                                skillsDescAdjusted.push(vriDesc)
                            })
                            break
                        case 'ProtectXDescr':
                            let protectDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '50%').replace(/\{1\}/gi, attrHp).replace(/\{2\}/gi, '80%'))
                            protectDesc.splice(0, 1, 'Protect')
                            skillsDescAdjusted.push(protectDesc)

                            let protectN = skillsNamesLoc.filter(loc => loc[0] == 'Protect')[0]
                            protectN.splice(0, 1, 'Protect')
                            skillsNamesAdjusted.push(protectN)
                            break
                        case 'SecondChanceXDescr':
                            let sndChanceDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '10%').replace(/\{1\}/gi, '2'))
                            sndChanceDesc.splice(0, 1, 'Second Chance')
                            skillsDescAdjusted.push(sndChanceDesc)

                            let scN = skillsNamesLoc.filter(loc => loc[0] == 'SecondChance')[0]
                            scN.splice(0, 1, 'Second Chance')
                            skillsNamesAdjusted.push(scN)
                            break
                        case 'FTEWLDVulnXDescr':
                            let elStatus2, el2
                            elements.map(attr => {
                                if (attr != 'Water') {
                                    switch (attr) {
                                        case 'Fire':
                                            el2 = elementsNames[0]
                                            elStatus2 = debuffs.filter(d => d[0] == 'Burned')[0]
                                            break;
                                        case 'Earth':
                                            el = elementsNames[2]
                                            elStatus2 = debuffs.filter(d => d[0] == 'Seeded')[0]
                                            break;
                                        case 'Thunder':
                                            el2 = elementsNames[4]
                                            elStatus2 = debuffs.filter(d => d[0] == 'Paralyzed')[0]
                                            break;
                                        case 'Wind':
                                            el2 = elementsNames[3]
                                            elStatus2 = debuffs.filter(d => d[0] == 'Dizzy')[0]
                                            break;
                                        case 'Light':
                                            el2 = elementsNames[5]
                                            elStatus2 = debuffs.filter(d => d[0] == 'Blinded')[0]
                                            break;
                                        case 'Dark':
                                            el2 = elementsNames[6]
                                            elStatus2 = debuffs.filter(d => d[0] == 'Depressd')[0]
                                            break;
                                    }

                                    let attrName = elementsNames.filter(a => a.includes(attr) || a == attr)[0]
                                    let translatedName = attrName[1] + ' Vulnerable'
                                    let attrBuff;
                                    if (elStatus2) {
                                        attrBuff = skill.map((s, i) => s.replaceAll(/\{0\}/gi, '5%').replaceAll(/\{1\}/gi, el2[i]).replaceAll(/\{2\}/gi, elStatus2[i]).replaceAll(/\{3\}/gi, '5%').replaceAll(/\{4\}/gi, '10'))
                                        attrBuff.splice(0, 1, translatedName)
                                        skillsDescAdjusted.push(attrBuff)
                                    }
                                    
                                    let elVulnN = skillsNamesLoc.filter(loc => loc[0] == 'XVulnerable')[0]
                                    if (elVulnN != undefined) {
                                        elVulnN = elVulnN.map((s, i) => s.replace('X', attr+ ' '))
                                        elVulnN = elVulnN.map((s, i) => s.replaceAll(/\{0\}/gi, (attrName[i])))
                                        skillsNamesAdjusted.push(elVulnN)
                                    } 
                                }
                            })

                            break;
                        case 'WaterVulnXDescr':
                            let waterVulnDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '5%').replace(/\{1\}/gi, attrWater[i]).replace('{2}', chillName).replace('{3}', '2'))
                            waterVulnDesc.splice(0, 1, 'Water Vulnerable')
                            skillsDescAdjusted.push(waterVulnDesc)

                            let attrName = elementsNames.filter(a => a.includes('Water') || a == 'Water')[0]
                            let waterCulnN = skillsNamesLoc.filter(loc => loc[0] == 'XVulnerable')[0]
                            waterCulnN = waterCulnN.map((s, i) => s.replace('X', 'Water '))
                            waterCulnN = waterCulnN.map((s, i) => s.replaceAll(/\{0\}/gi, (attrName[i])))
                            skillsNamesAdjusted.push(waterCulnN)
                            break
                        case 'StatVulnXDescr':
                            attrs.map((attr, ind) => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let statBuff = skill.map((s, i) => s.replace('{0}', '5%'))
                                statBuff = statBuff.map((s, i) => s.replace('{1}', attrName[i]))
                                statBuff = statBuff.map((s, i) => s.replace('{2}', '10'))

                                if (attr == 'Max HP') {
                                    statBuff.splice(0, 1, 'HP Vulnerable')

                                    let statHpN = skillsNamesLoc.filter(loc => loc[0] == 'XVulnerable')[0]
                                    statHpN = statHpN.map((s, i) => s.replace('X', 'HP '))
                                    statHpN = statHpN.map((s, i) => s.replaceAll(/\{0\}/gi, (attrName[i])))
                                    skillsNamesAdjusted.push(statHpN)
                                } else {
                                    statBuff.splice(0, 1, attr + ' Vulnerable')
                                    let statVulnN = skillsNamesLoc.filter(loc => loc[0] == 'XVulnerable')[0]
                                    if (statVulnN != undefined) {
                                        statVulnN = statVulnN.map((s, i) => s.replace('X', attr + ' '))
                                        statVulnN = statVulnN.map((s, i) => s.replaceAll(/\{0\}/gi, (attrName[i])))
                                        skillsNamesAdjusted.push(statVulnN)
                                    } 
                                }
                                
                                skillsDescAdjusted.push(statBuff)
                            })
                            break
                        case 'ProtectPierceXDescr':
                            let pierceDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '10%').replace(/\{1\}/gi, protectName[i]).replace('{2}', '10'))
                            pierceDesc.splice(0, 1, 'Protect Pirece')
                            skillsDescAdjusted.push(pierceDesc)

                            let protectPierceN = skillsNamesLoc.filter(loc => loc[0] == 'XPierce')[0]
                            protectPierceN = protectPierceN.map((pp, i) => pp.replace('XPierce', protectName[i] + ' Pirece'))
                            protectPierceN = protectPierceN.map((pp, i) => pp.replace('{0}', ''))
                            skillsNamesAdjusted.push(protectPierceN)
                            break
                        case 'BleedVulnXDescr':
                            let bleedVulnDesc = skill.map((s, i) => s.replace(/\{0\}/gi, bleedName).replace(/\{1\}/gi, '3'))
                            bleedVulnDesc.splice(0, 1, 'Bleed Vulnerable')
                            skillsDescAdjusted.push(bleedVulnDesc)

                            let bleedVulnN = skillsNamesLoc.filter(loc => loc[0] == 'XVulnerable')[0]
                            bleedVulnN = bleedVulnN.map((pp, i) => pp.replace('X', debuffBleed[1] + ' '))
                            bleedVulnN = bleedVulnN.map((pp, i) => pp.replace('{0}', ''))
                            skillsNamesAdjusted.push(bleedVulnN)
                            break
                        case 'InjuryVulnXDescr':
                            let injuryVulnDesc = skill.map((s, i) => s.replaceAll(/\{0\}/gi, injuryName).replace(/\{1\}/gi, '3'))
                            injuryVulnDesc.splice(0, 1, 'Injury Vulnerable')
                            skillsDescAdjusted.push(injuryVulnDesc)

                            let injuryVulnN = skillsNamesLoc.filter(loc => loc[0] == 'XVulnerable')[0]
                            injuryVulnN = injuryVulnN.map((pp, i) => pp.replace('X', debuffInjury[1] + ' '))
                            injuryVulnN = injuryVulnN.map((pp, i) => pp.replace('{0}', ''))
                            skillsNamesAdjusted.push(injuryVulnN)
                            break
                        case 'InvulnerableDescr':
                            let invulnDesc = skill.map((s, i) => s.replace(/\{0\}/gi, 'X'))
                            invulnDesc.splice(0, 1, 'Invulnerable')
                            skillsDescAdjusted.push(invulnDesc)

                            let invulnN = skillsNamesLoc.filter(loc => loc[0] == 'Invulnerable')[0]
                            invulnN.splice(0, 1, 'Invulnerable')
                            skillsNamesAdjusted.push(invulnN)
                            break
                        case 'ConfuseXDescr':
                            let confuseDesc = skill.map((s, i) => s.replace(/\{0\}/gi, protectName[i]).replace(/\{1\}/gi, attrHp[i]).replace(/\{2\}/gi, '3'))
                            confuseDesc.splice(0, 1, 'Confuse')
                            skillsDescAdjusted.push(confuseDesc)

                            let confuseN = skillsNamesLoc.filter(loc => loc[0] == 'Confuse')[0]
                            confuseN.splice(0, 1, 'Confuse')
                            skillsNamesAdjusted.push(confuseN)
                            break
                        case 'SlackXDescr':
                            let slackDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '50%').replace(/\{1\}/gi, '10%').replace(/\{2\}/gi, attrHp[i]).replace(/\{3\}/gi, '2'))
                            slackDesc.splice(0, 1, 'Slack')
                            skillsDescAdjusted.push(slackDesc)

                            let slackN = skillsNamesLoc.filter(loc => loc[0] == 'Slack')[0]
                            slackN.splice(0, 1, 'Slack')
                            skillsNamesAdjusted.push(slackN)
                            break
                        case 'CertainXDescr':
                            let certainDesc = skill.map((s, i) => s.replace(/\{0\}/gi, debuffParal[i]).replace(/\{1\}/gi, debuffSlack[i]).replace(/\{2\}/gi, debuffConfuse[i])
                                .replace(/\{3\}/gi, debuffInjury[i]).replace(/\{4\}/gi, debuffBlind[i]).replace(/\{5\}/gi, debuffDizzy[i]).replace(/\{6\}/gi, debuffDepress[i]))
                            certainDesc.splice(0, 1, 'Certain')
                            skillsDescAdjusted.push(certainDesc)

                            let certainN = skillsNamesLoc.filter(loc => loc[0] == 'Certain')[0]
                            certainN.splice(0, 1, 'Certain')
                            skillsNamesAdjusted.push(certainN)
                            break
                        case 'RageXDescr':
                            let rageDesc = skill.map((s, i) => s.replace(/\{0\}/gi, protectName[i]))
                            rageDesc.splice(0, 1, 'Rage Buff')
                            skillsDescAdjusted.push(rageDesc)

                            let rageN = skillsNamesLoc.filter(loc => loc[0] == 'Rage')[0]
                            rageN.splice(0, 1, 'Rage Buff')
                            skillsNamesAdjusted.push(rageN)
                            break
                        case 'InstinctXDescr':
                            let instinctDesc = skill.map((s, i) => s.replace(/\{0\}/gi, protectName[i]))
                            instinctDesc.splice(0, 1, 'Instinct Buff')
                            skillsDescAdjusted.push(instinctDesc)

                            let instinctN = skillsNamesLoc.filter(loc => loc[0] == 'Instinct')[0]
                            instinctN.splice(0, 1, 'Instinct Buff')
                            skillsNamesAdjusted.push(instinctN)
                            break
                        case 'CorruptionXDescr':
                            let corruptionDesc = skill.map((s, i) => s.replace(/\{0\}/gi, protectName[i]))
                            corruptionDesc.splice(0, 1, 'Corruption')
                            skillsDescAdjusted.push(corruptionDesc)
                            break
                        case 'SealXDescr':
                            let sealDesc = skill.map((s, i) => s.replace(/\{0\}/gi, protectName[i]))
                            sealDesc.splice(0, 1, 'Seal')
                            skillsDescAdjusted.push(sealDesc)

                            let sealN = skillsNamesLoc.filter(loc => loc[0] == 'Seal')[0]
                            sealN.splice(0, 1, 'Seal')
                            skillsNamesAdjusted.push(sealN)
                            break
                        case 'MadnessXDescr':
                            let madnessDesc = skill.map((s, i) => s.replace(/\{0\}/gi, protectName[i]))
                            madnessDesc.splice(0, 1, 'Madness')
                            skillsDescAdjusted.push(madnessDesc)
                            break
                        case 'XActDebuffDescr':
                            attrs.map((attr, ind) => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let actDebuffDesc = skill.map((s, i) => s.replace('{0}', attrName[i]))
                                actDebuffDesc = actDebuffDesc.map((s, i) => s.replace('{1}', '10X%'))
                                actDebuffDesc = actDebuffDesc.map((s, i) => s.replace('{2}', '3').replace('{3}', '5'))
                                actDebuffDesc.splice(0, 1, attr + ' Action Debuff')
                                skillsDescAdjusted.push(actDebuffDesc)

                                let statActDebuffN = skillsNamesLoc.filter(loc => loc[0] == 'XActDebuff')[0]
                                if (statActDebuffN != undefined) {
                                    statActDebuffN = statActDebuffN.map((s, i) => s.replace('X', attr + ' '))
                                    statActDebuffN = statActDebuffN.map((s, i) => s.replaceAll(/\{0\}/gi, attrName[i]))
                                    statActDebuffN.splice(0, 1, statActDebuffN[1])
                                    skillsNamesAdjusted.push(statActDebuffN)
                                } 
                            })
                            break

                        // applies
                        case 'RaceApplyXDescr':
                            races.map((attr, ind) => {
                                let attrName = races.filter(a => a.includes(attr) || a == attr)[0]
                                let applyRace = skill.map((s, i) => s.replaceAll(/\{0\}/gi, '25%').replaceAll(/\{1\}/gi, attrName[i]).replaceAll(/\{2\}/gi, '40%'))
                                let translatedName = attrName[1]
                                applyRace.splice(0, 1, translatedName)
                                skillsDescAdjusted.push(applyRace)

                                skillsNamesAdjusted.push(races[ind])
                            })
                            break
                        case 'LifeStealApplyXDescr':
                            let lifestealDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '50%').replace(/\{1\}/gi, '100%'))
                            lifestealDesc.splice(0, 1, 'Lifesteal')
                            skillsDescAdjusted.push(lifestealDesc)

                            let lifestealN = skillsNamesLoc.filter(loc => loc[0] == 'LifeSteal')[0]
                            lifestealN.splice(0, 1, 'Lifesteal')
                            skillsNamesAdjusted.push(lifestealN)
                            break
                        case 'SynergyApplyXDescr':
                            attrs.map((attr, ind) => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let synergyDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '1%').replace(/\{1\}/gi, attrName[i]).replace(/\{2\}/gi, '100'))
                                synergyDesc.splice(0, 1, attr + ' Synergy')
                                skillsDescAdjusted.push(synergyDesc)

                                let statSynegyN = skillsNamesLoc.filter(loc => loc[0] == 'XSynergy')[0]
                                if (statSynegyN != undefined) {
                                    statSynegyN = statSynegyN.map((s, i) => s.replace('X', attr + ' '))
                                    statSynegyN = statSynegyN.map((s, i) => s.replaceAll(/\{0\}/gi, attrName[i]))
                                    skillsNamesAdjusted.push(statSynegyN)
                                } 
                            })
                            break
                        case 'ElementApplyXDescr':
                            elements.map((attr, ind) => {
                                let attrName = elementsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let applyElDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '1%').replace(/\{1\}/gi, attrName[i]).replace(/\{2\}/gi, '100'))
                                applyElDesc.splice(0, 1, attr)
                                skillsDescAdjusted.push(applyElDesc)

                                skillsNamesAdjusted.push(attrName)
                            })
                            break
                        case 'TurnChargeApplyXDescr':
                            let turnChargeDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '15%').replace(/\{1\}/gi, '4').replace(/\{2\}/gi, '6'))
                            turnChargeDesc.splice(0, 1, 'Chronocharge')
                            skillsDescAdjusted.push(turnChargeDesc)

                            let turnChargeN = skillsNamesLoc.filter(loc => loc[0] == 'TurnCharge')[0]
                            turnChargeN.splice(0, 1, 'Chronochargw')
                            skillsNamesAdjusted.push(turnChargeN)
                            break
                        case 'PracticePerfectApplyXDescr':
                            let practicePerfDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '10%').replace(/\{1\}/gi, '5').replace(/\{2\}/gi, '8'))
                            practicePerfDesc.splice(0, 1, 'Practice Perfect')
                            skillsDescAdjusted.push(practicePerfDesc)

                            let practicePerfN = skillsNamesLoc.filter(loc => loc[0] == 'PracticePerfect')[0]
                            practicePerfN.splice(0, 1, 'Practice Perfect')
                            skillsNamesAdjusted.push(practicePerfN)
                            break
                        case 'FocusEnergyApplyXDescr':
                            let focusEnergyDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '5%').replace(/\{1\}/gi, '10'))
                            focusEnergyDesc.splice(0, 1, 'Focus Energy')
                            skillsDescAdjusted.push(focusEnergyDesc)

                            let focusEnN = skillsNamesLoc.filter(loc => loc[0] == 'FocusEnergy')[0]
                            focusEnN.splice(0, 1, 'Focus Energy')
                            skillsNamesAdjusted.push(focusEnN)
                            break
                        case 'NegativePowerApplyXDescr':
                            let negPowerDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '10%').replace(/\{1\}/gi, '10'))
                            negPowerDesc.splice(0, 1, 'Desperate Power')
                            skillsDescAdjusted.push(negPowerDesc)

                            let despPowN = skillsNamesLoc.filter(loc => loc[0] == 'NegativePower')[0]
                            despPowN.splice(0, 1, 'Desperate Power')
                            skillsNamesAdjusted.push(despPowN)
                            break
                        case 'OverloadedApplyDescr':
                            let overloadedDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '2'))
                            overloadedDesc.splice(0, 1, 'Overloaded')
                            skillsDescAdjusted.push(overloadedDesc)

                            let overloadedN = skillsNamesLoc.filter(loc => loc[0] == 'Overloaded')[0]
                            overloadedN.splice(0, 1, 'Overloaded')
                            skillsNamesAdjusted.push(overloadedN)
                            break
                        case 'LastResortApplyXDescr':
                            let lastResortDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '100%').replace(/\{1\}/gi, '2'))
                            lastResortDesc.splice(0, 1, 'Last Resort')
                            skillsDescAdjusted.push(lastResortDesc)

                            let lastResortN = skillsNamesLoc.filter(loc => loc[0] == 'LastResort')[0]
                            lastResortN.splice(0, 1, 'Last Resort')
                            skillsNamesAdjusted.push(lastResortN)
                            break
                        case 'ExhaustApplyXDescr':
                            let exhaustDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '2'))
                            exhaustDesc.splice(0, 1, 'Exhaust')
                            skillsDescAdjusted.push(exhaustDesc)

                            let ExhaustN = skillsNamesLoc.filter(loc => loc[0] == 'Exhaust')[0]
                            ExhaustN.splice(0, 1, 'Exhaust')
                            skillsNamesAdjusted.push(ExhaustN)
                            break
                        case 'CurseApplyXDescr':
                            let curseDesc = skill
                            curseDesc.splice(0, 1, 'Curse')
                            skillsDescAdjusted.push(curseDesc)

                            let CurseN = skillsNamesLoc.filter(loc => loc[0] == 'Curse')[0]
                            CurseN.splice(0, 1, 'Curse')
                            skillsNamesAdjusted.push(CurseN)
                            break
                        case 'ComboBlendApplyXDescr':
                            let comboBlendDesc = skill.map((s, i) => s.replace(/\{0\}/gi, '1').replace(/\{1\}/gi, '2'))
                            comboBlendDesc.splice(0, 1, 'Combo Blend')
                            skillsDescAdjusted.push(comboBlendDesc)
                            let comboBlendN = skillsNamesLoc.filter(loc => loc[0] == 'Combo Blend')[0]
                            comboBlendN.splice(0, 1, 'Combo Blend')
                            skillsNamesAdjusted.push(comboBlendN)
                            break
                        case 'ScheduledApplyDescr':
                            let schedulesdDesd = skill
                            schedulesdDesd.splice(0, 1, 'Scheduled')
                            skillsDescAdjusted.push(schedulesdDesd)

                            let ScheduledN = skillsNamesLoc.filter(loc => loc[0] == 'Scheduled')[0]
                            ScheduledN.splice(0, 1, 'Scheduled')
                            skillsNamesAdjusted.push(ScheduledN)
                            break
                        case 'AutoFireApplyDescr':
                            let autFireDesc = skill.map((s, i) => s.replace(/\{0\}/gi, protectName[i]))
                            autFireDesc.splice(0, 1, 'Automatic')
                            skillsDescAdjusted.push(autFireDesc)

                            let autoFireN = skillsNamesLoc.filter(loc => loc[0] == 'AutoFire')[0]
                            autoFireN.splice(0, 1, 'Automatic')
                            skillsNamesAdjusted.push(autoFireN)
                            break
                        case 'GambleDescr':
                            let gambleDesc = skill
                            gambleDesc.splice(0, 1, 'Gamble')
                            skillsDescAdjusted.push(gambleDesc)

                            let gambleN = skillsNamesLoc.filter(loc => loc[0] == 'Gamble')[0]
                            gambleN.splice(0, 1, 'Gamble')
                            skillsNamesAdjusted.push(gambleN)
                            break
                    }

                })
            })
    },
    passives: () => {
        return GetSheetDone
            .raw(id, 'Skills Description').then(data => data.data).then(res => {
                localization.skills()
                protectName = getKeywordEngName(skillsNamesLoc, 'Protect')[0]
                venomName = getKeywordEngName(skillsNamesLoc, 'Venom')[0]
                insaneName = getKeywordEngName(skillsNamesLoc, 'Insane')[0]
                restrainName = getKeywordEngName(skillsNamesLoc, 'Restrain')[0]
                passivesDesc.map(abil => {
                    let jobon = passivesDescAdjusted[0] == undefined ? '' : passivesDescAdjusted[0].jobon
                    let nameKey = abil[0]
                    switch (nameKey) {
                        case 'JobIsOn':
                            passivesDescAdjusted.push({ 'jobon': abil })
                            break;
                        case 'DamageMitigateXDescrP':
                            let dmgMitigate = abil.map(a => a.replace('{0}', '10X%'))
                            dmgMitigate = dmgMitigate.map(a => a.replace('{1}', ''))
                            dmgMitigate.splice(0, 1, 'Damage Mitigate')
                            passivesDescAdjusted.push(dmgMitigate)
                            break;
                        case 'GainXPassiveJoin':
                            //gain attr buffs
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Boost'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X ' + attrName[i] + boost[i]))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)

                                let translatedDrain = attrName[1] + ' Drain'
                                let drainBuff = abil.map((a, i) => a.replace('{0}', 'X ' + attrName[i] + drain[i]))
                                drainBuff.splice(0, 1, translatedDrain)
                                passivesDescAdjusted.push(drainBuff)
                            })
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Nerf'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X ' + attrName[i] + nerf[i]))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            vri.map(attr => {
                                let attrName = vri.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Absorb'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', attrName[i] + absorb[i]))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            let gainProtHeal = ['Protective Heal', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X ' + protectiveHeal[i]))
                            let gainOffHeal = ['Aggressive Heal', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X ' + offensiveHeal[i]))
                            let gainRage = ['Rage', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X ' + rage[i]))
                            let gainInstinct = ['Instinct', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X ' + instinct[i]))
                            passivesDescAdjusted.push(gainProtHeal, gainOffHeal, gainRage, gainInstinct)
                            break;
                        case 'ApplyXReflectJoin':

                            debuffs.map(attr => {
                                let attrName = debuffs.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Reflect'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', attrName[i]))
                                attrBuff = attrBuff.map((a, i) => a.replace('{1}', ''))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            let protectRefelct = ['Protect Reflect', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X% ' + protectiveHeal[i]))
                            let statEffectReflect = ['Status Effects Reflect', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X ' + elementalStatus[i]))
                            passivesDescAdjusted.push(protectRefelct, statEffectReflect)
                            break;
                        case 'ApplyXCounterJoin':
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Reflect'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X% ' + attrName[i]))
                                attrBuff = attrBuff.map((a, i) => a.replace('{1}', ''))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            vri.map(attr => {
                                let attrName = vri.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Reflect'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X ' + attrName[i]))
                                attrBuff = attrBuff.map((a, i) => a.replace('{1}', ''))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            break;
                        case 'ImmuneToXJoin':
                            debuffs.map(attr => {
                                let attrName = debuffs.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Immune'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', attrName[i]))
                                attrBuff = attrBuff.map((a, i) => a.replace('{1}', ''))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            vri.map(attr => {
                                let attrName = vri.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Immune'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', attrName[i]))
                                attrBuff = attrBuff.map((a, i) => a.replace('{1}', ''))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            let debuffImmune = ['Debuff Immnue', abil[1], abil[2], abil[3]]
                            debuffImmune = debuffImmune.map((a, i) => a.replace('{0}', statDebuffs[i]))
                            debuffImmune = debuffImmune.map((a, i) => a.replace('{1}', ''))
                            let elementalStatusImmune = ['Element Status Immnue', abil[1], abil[2], abil[3]]
                            elementalStatusImmune = elementalStatusImmune.map((a, i) => a.replace('{0}', elementalStatus[i]))
                            elementalStatusImmune = elementalStatusImmune.map((a, i) => a.replace('{1}', ''))
                            passivesDescAdjusted.push(debuffImmune, elementalStatusImmune)
                            break;
                        case 'StartCombatXJoin':
                            let gainSecondChance = ['Second Chance', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X ' + secondChance[i]))
                            let startCharge = ['Start Charge', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', charge[i] + ', ' + stackCharge[i]))
                            let startGuard = ['Start Guard', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', guard[i] + ', ' + stackGuard[i]))
                            let startRage = ['Rage', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X ' + rage[i]))
                            let startInstinct = ['Instinct', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X ' + instinct[i]))
                            passivesDescAdjusted.push(gainSecondChance, startCharge, startGuard, startRage, startInstinct)
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Start Buff'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X ' + attrName[i] + ' ' + buff[i]))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            elements.map(attr => {
                                let attrName = elementsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Element'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X ' + attrName[i] + ' ' + element[i]))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Protect'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X% ' + attrName[i] + ' ' + protectName[i]
                                ))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = 'Weak ' + attrName[1]
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X ' + attrName[i] + ' ' + debuff[i]))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            debuffs.map(attr => {
                                let attrName = debuffs.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1]
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X ' + attrName[i]))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            vri.map(attr => {
                                let attrName = vri.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1]
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X ' + attrName[i]))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            let randomEStatus = getFullDesc('Cursed', abil, 'X', enhance).map((a, i) => a.replace('X', 'X ' + random[i] + ' ' + elementalStatus[i]))
                            passivesDescAdjusted.push(randomEStatus)
                            break;
                        case 'TurnDamageXJoin':
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Turn Attack'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X% ' + attrName[i]))
                                attrBuff = attrBuff.map((a, i) => a.replace('{1}', ''))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            let protectTurnDamage = ['Protect Turn Attack', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X% ' + protectName[i]))
                            protectTurnDamage = protectTurnDamage.map(a => a.replace('{1}', ''))
                            passivesDescAdjusted.push(protectTurnDamage)
                            break;
                        case 'TurnHealXJoin':
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Turn Heal'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X% ' + attrName[i]))
                                attrBuff = attrBuff.map((a, i) => a.replace('{1}', ''))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            let protectTurnHeal = ['Protect Turn Heal', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X% ' + protectName[i]))
                            protectTurnHeal = protectTurnHeal.map(a => a.replace('{1}', ''))
                            passivesDescAdjusted.push(protectTurnHeal)
                            break;
                        case 'AfterActionDamageXJoin':
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Action Attack'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X% ' + attrName[i]))
                                attrBuff = attrBuff.map((a, i) => a.replace('{1}', ''))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            let protectActionDamage = ['Protect Action Attack', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X% ' + protectName[i]))
                            protectActionDamage = protectActionDamage.map(a => a.replace('{1}', ''))
                            passivesDescAdjusted.push(protectActionDamage)
                            break;
                        case 'AfterActionHealXJoin':
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = attrName[1] + ' Action Heal'
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X% ' + attrName[i]))
                                attrBuff = attrBuff.map((a, i) => a.replace('{1}', ''))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            let protectActionHeal = ['Protect Action Heal', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X% ' + protectName[i]))
                            protectActionHeal = protectActionHeal.map(a => a.replace('{1}', ''))
                            passivesDescAdjusted.push(protectActionHeal)
                            break;
                        case 'AfterActionBuffXJoin':
                            attrs.map(attr => {
                                let attrName = attrsNames.filter(a => a.includes(attr) || a == attr)[0]
                                let translatedName = 'Stack ' + attrName[1]
                                let attrBuff = abil.map((a, i) => a.replace('{0}', 'X ' + attrName[i]))
                                attrBuff.splice(0, 1, translatedName)
                                passivesDescAdjusted.push(attrBuff)
                            })
                            break;
                        case 'AfterActionDebuffXJoin':
                            let afterActVenom = ['After Action Venom', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X ' + venomName[i]))
                            let afterActInsane = ['After Action Insane', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X ' + insaneName[i]))
                            let afterActRestrain = ['After Action Restrain', abil[1], abil[2], abil[3]].map((a, i) => a.replace('{0}', 'X ' + restrainName[i]))
                            passivesDescAdjusted.push(afterActVenom, afterActInsane, afterActRestrain)
                            break;

                    }

                })
                //get  some missing names
                let digger = getKeywordEngName(skillsNamesLoc, 'XDigger')[0].map(a => a.replace('{0}', ''))
                let crystal = getKeywordEngName(skillsNamesLoc, 'Crystal')[0]
                let gold = getKeywordEngName(skillsNamesLoc, 'Gold')[0]
                //autoprotect, invulnerable, add/reduce action/draw, diggers
                let autoprotect = buffsDesc.filter(a => a[0] == 'AutoProtectDescr')[0].map((a, i) => a.replace('{0}', protectName[i]))
                autoprotect = autoprotect.map((a, i) => a.replace('{1}', '10X%'))
                autoprotect.splice(0, 1, 'Auto Protect')
                let invulnPassive = buffsDesc.filter(a => a[0] == 'InvulnXFullStartDescr')[0].map((a, i) => a.replace('{0}', invulnerable[i]))
                invulnPassive.splice(0, 1, 'Invulnerable')

                let addAction = ['Add Action', 'AP +X', 'AP +X', 'AP +X']
                let reduceAction = ['Reduce Action', 'AP -X', 'AP -X', 'AP -X']
                let addDraw = ['Add Draw', 'X', 'X', 'X'].map((a, i) => a.replace('X', handLimit[i] + ' +X'))
                let reduceDraw = ['Reduce Draw', 'X', 'X', '-X'].map((a, i) => a.replace('X', handLimit[i] + ' -X'))
                let goldDigger = ['Gold Digger', 'X', 'X', 'X'].map((a, i) => a.replace('X', gold[i] + digger[i]))
                let crystalDigger = ['Crystal Digger', 'X', 'X', 'X'].map((a, i) => a.replace('X', crystal[i] + digger[i]))
                passivesDescAdjusted.push(addAction, reduceAction, addDraw, reduceDraw, goldDigger, crystalDigger, autoprotect, invulnPassive)

                masters.map(attr => {
                    let attrName = masters.filter(a => a.includes(attr) || a == attr)[0]

                    let masterName = attrName.map((a, i) => a + master[i])
                    if (attrName[0] == 'Humanoid' || attrName[0] == 'Creature' || attrName[0] == 'Spirit' || attrName[0] == 'Matter') {
                        masterName.splice(0, 1, attrName[0] + ' Expert')
                    } else {
                        attrName[0] == 'Reflect' ? masterName.splice(0, 1, attrName[0] + master[1]) : masterName.splice(0, 1, attrName[1] + master[1])
                    }
                    passivesDescAdjusted.push(masterName)
                })
                skillStackMasterName.splice(0, 1, 'Skill Stack Master')
                normalMaster.splice(0, 1, 'Jack-of-all-Trades')
                passivesDescAdjusted.push(normalMaster, skillStackMasterName)
            })


    }
}

export {
    localization, materialsLoc, wordsLoc, jobsNamesLoc, abilsNamesLoc, passivesNamesLoc, charsLoc, chaptersLoc, skillsDesc, abilsDesc, skillsNamesLoc, races, rulesLoc, traitsLoc,
    descriptions, abilsDescAdjusted, applies, passivesDescAdjusted, skillsDescAdjusted, skillsNamesAdjusted,
    fireName, waterName, windName, earthName, thunderName, darkName, lightName,
    burnName, chillName, seedName, dizzyName, paralysysName, depressName, blindName, venomName, insaneName, bleedName, restrainName, injuryName,
    hpName, strName, intName, agiName, protectName,
    wikiWords
}