global.fetch = require('node-fetch');
const GetSheetDone = require('get-sheet-done');
const id = '1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g';

export { powlvl, unitDesc,
         abilitiesArr, descFinale, abilBasic, abilSkills, abilEffects, abilTraits,
         passives, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits }

let powlvl;     // power level table from sheet 4
let unitDesc;  // unit desc table from sheet 4
let abilitiesArr = [];   // abilites from sheet 6
let descFinale = [];
let abilSkills = [];
let abilEffects = []
let abilTraits = [];
let abilBasic = [];
let passives = [];
let passivesArr = [];
let passiveFinale = []
let passiveSkills = [];
let passiveEffects = []
let passiveTraits = [];

var x = 0
var name, desc, desc1, desc2, desc3, desc4
function getDesc(arrToGet, arrToMap, arrToCompare, powlvl, skill, effect, multiplier) {

 arrToGet.push(arrToMap.map(row => {
    desc = arrToCompare.filter(res => row[skill] == res.skill && row[effect] == res.type)
    row = row == undefined ? 'n/a' : row
    var multi1 = powlvl.filter(lvl => lvl.lvl == row[multiplier]) || ''
    var multi1maxhp = multi1.map(multi => multi.maxHP)
    var multi1attr = multi1.map(multi => multi.strAgiInt)
    row[skill] = row[skill] == undefined ? 'n/a' : row[skill]


    if (row[skill].includes('Damage') || row[skill].includes('Heal') || row[skill].includes("Protect") && (row[effect] == 'MaxHP' || row[effect] == 'Strength' || row[effect] == 'Agility' || row[effect] == 'Intelligence'))
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
    }
    row[skill] = row[skill] == 'n/a' ? '' : row[skill]
    name = row[2]
    return {
      name: name,
      desc: desc
    }
  }))

}

function changeColors(arr) {
  arr.map(r => {
    for (var i=0; i<r.length; i++) {
      if ((i !== 2) && (r[i] !== undefined)) {
        // attr change colors
        r[i] = r[i].replace(/\bMaxHp\b/gi, '<span class=\'maxhp\'>MaxHP</span>')
        r[i] = r[i].replace(/\bstr\b|\bstrength\b/gi, '<span class=\'str\'>Strength</span>')
        r[i] = r[i].replace(/\bagi\b|\bagility\b/gi, '<span class=\'agi\'>Agility</span>')
        r[i] = r[i].replace(/\bint\b|\bintelligence\b/gi, '<span class=\'int\'>Inteligence</span>')
        // elements change color
        r[i] = r[i].replace(/\bwater\b/gi, '<span class=\'water\'>Water</span>')
        r[i] = r[i].replace(/\bfire\b/gi, '<span class=\'fire\'>Fire</span>')
        r[i] = r[i].replace(/\bearth\b/gi, '<span class=\'earth\'>Earth</span>')
        r[i] = r[i].replace(/\bwind\b/gi, '<span class=\'wind\'>Wind</span>')
        r[i] = r[i].replace(/\bthunder\b/gi, '<span class=\'thunder\'>Thunder</span>')
        r[i] = r[i].replace(/\blight\b/gi, '<span class=\'light\'>Light</span>')
        r[i] = r[i].replace(/\bdark\b/gi, '<span class=\'dark\'>Dark</span>')
        // apply debuffs change col
        r[i] = r[i].replace(/\bbleed\b/gi, '<span class=\'bleed\'>Bleed</span>')
        r[i] = r[i].replace(/\binsane\b/gi, '<span class=\'insane\'>Insane</span>')
        r[i] = r[i].replace(/\bdepress\b/gi, '<span class=\'depress\'>Depress</span>')
        r[i] = r[i].replace(/\bburn\b/gi, '<span class=\'burn\'>Burn</span>')
        r[i] = r[i].replace(/\bchill\b/gi, '<span class=\'chill\'>Chill</span>')
        r[i] = r[i].replace(/\binjury\b/gi, '<span class=\'injury\'>Injury</span>')
        r[i] = r[i].replace(/\bparalysis\b/gi, '<span class=\'paralysis\'>Paralysis</span>')
        r[i] = r[i].replace(/\brestrain\b/gi, '<span class=\'restrain\'>Restrain</span>')
        r[i] = r[i].replace(/\bseed\b/gi, '<span class=\'seed\'>Seed</span>')
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
          row[9] = row[9].replace(/\bMaxHp\b/gi, '<span class=\'maxhp\'>MaxHP</span>')
          row[9] = row[9].replace(/\bstr\b/gi, '<span class=\'str\'>Strength</span>')
          row[9] = row[9].replace(/\bagi\b/gi, '<span class=\'agi\'>Agility</span>')
          row[9] = row[9].replace(/\bint\b/gi, '<span class=\'int\'>Inteligence</span>')
          //elements
          row[9] = row[9].replace(/\bwater\b/gi, '<span class=\'water\'>Water</span>')
          row[9] = row[9].replace(/\bfire\b/gi, '<span class=\'fire\'>Fire</span>')
          row[9] = row[9].replace(/\bearth\b/gi, '<span class=\'earth\'>Earth</span>')
          row[9] = row[9].replace(/\bwind\b/gi, '<span class=\'wind\'>Wind</span>')
          row[9] = row[9].replace(/\bthunder\b/gi, '<span class=\'thunder\'>Thunder</span>')
          row[9] = row[9].replace(/\blight\b/gi, '<span class=\'light\'>Light</span>')
          row[9] = row[9].replace(/\bdark\b/gi, '<span class=\'dark\'>Dark</span>')
          //debuffs
          row[9] = row[9].replace(/\bblind\b/gi, '<span class=\'blind\'>Blind</span>')
          row[9] = row[9].replace(/\bbleed\b/gi, '<span class=\'bleed\'>Bleed</span>')
          row[9] = row[9].replace(/\binsane\b/gi, '<span class=\'insane\'>Insane</span>')
          row[9] = row[9].replace(/\bdepress\b/gi, '<span class=\'depress\'>Depress</span>')
          row[9] = row[9].replace(/\bburn\b/gi, '<span class=\'burn\'>Burn</span>')
          row[9] = row[9].replace(/\bdizzy\b/gi, '<span class=\'dizzy\'>Dizzy</span>')
          row[9] = row[9].replace(/\bchill\b/gi, '<span class=\'chill\'>Chill</span>')
          row[9] = row[9].replace(/\binjury\b/gi, '<span class=\'injury\'>Injury</span>')
          row[9] = row[9].replace(/\bparalysis\b/gi, '<span class=\'paralysis\'>Paralysis</span>')
          row[9] = row[9].replace(/\brestrain\b/gi, '<span class=\'restrain\'>Restrain</span>')
          row[9] = row[9].replace(/\bseed\b/gi, '<span class=\'seed\'>Seed</span>')

          return {
            skill: row[7],
            type: row[8],
            desc: row[9]
          }
        })
        passives = res.map(row => {
          //attr
          row[30] = row[30] == undefined ? '' : row[30]
          row[30] = row[30].replace(/\bMaxHp\b/gi, '<span class=\'maxhp\'>MaxHP</span>')
          row[30] = row[30].replace(/\bagi\b/gi, '<span class=\'agi\'>Agility</span>')
          row[30] = row[30].replace(/\bstr\b/gi, '<span class=\'str\'>Strength</span>')
          row[30] = row[30].replace(/\bint\b/gi, '<span class=\'int\'>Inteligence</span>')
          //elements
          row[30] = row[30].replace(/\bwater\b/gi, '<span class=\'water\'>Water</span>')
          row[30] = row[30].replace(/\bfire\b/gi, '<span class=\'fire\'>Fire</span>')
          row[30] = row[30].replace(/\bearth\b/gi, '<span class=\'earth\'>Earth</span>')
          row[30] = row[30].replace(/\bwind\b/gi, '<span class=\'wind\'>Wind</span>')
          row[30] = row[30].replace(/\bthunder\b/gi, '<span class=\'thunder\'>Thunder</span>')
          row[30] = row[30].replace(/\blight\b/gi, '<span class=\'light\'>Light</span>')
          row[30] = row[30].replace(/\bdark\b/gi, '<span class=\'dark\'>Dark</span>')
          //debuffs
          row[30] = row[30].replace(/\bblind\b/gi, '<span class=\'blind\'>Blind</span>')
          row[30] = row[30].replace(/\bbleed\b/gi, '<span class=\'bleed\'>Bleed</span>')
          row[30] = row[30].replace(/\binsane\b/gi, '<span class=\'insane\'>Insane</span>')
          row[30] = row[30].replace(/\bdepress\b/gi, '<span class=\'depress\'>Depress</span>')
          row[30] = row[30].replace(/\bburn\b/gi, '<span class=\'burn\'>Burn</span>')
          row[30] = row[30].replace(/\bdizzy\b/gi, '<span class=\'dizzy\'>Dizzy</span>')
          row[30] = row[30].replace(/\bchill\b/gi, '<span class=\'chill\'>Chill</span>')
          row[30] = row[30].replace(/\binjury\b/gi, '<span class=\'injury\'>Injury</span>')
          row[30] = row[30].replace(/\bparalysis\b/gi, '<span class=\'paralysis\'>Paralysis</span>')
          row[30] = row[30].replace(/\brestrain\b/gi, '<span class=\'restrain\'>Restrain</span>')
          row[30] = row[30].replace(/\bseed\b/gi, '<span class=\'seed\'>Seed</span>')
          return {
            skill: row[25],
            type: row[26],
            desc: row[30],
          }
        })
      })
  },

  abils:() => {
    return GetSheetDone
      .raw(id, 6).then(data => data.data).then(res => {
        res.shift()
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

        //get cost+tier / skills / effects / TRAITS arrays
res.map(res=> abilBasic.push(res[2] + ':' + res[3]/*tier*/ + '\t\t' + res[4]/*cost*/))
res.map(res=> abilSkills.push(res[2] + ':' + (res[5] || '') + '<br>' + (res[8] || '') + '<br>' + (res[11] || '') + '<br>' + (res[14] || '')))
res.map(res=> abilEffects.push(res[2] + ':' + (res[6] || '') + '<br>' + (res[9] || '') + '<br>' + (res[12] || '') + '<br>' + (res[15] || '')))
res.map(res=> abilTraits.push(res[2] + ':' + (res[17] || '') + '<br>' + (res[18] || '') + '<br>' + (res[19] || '')))
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
            console.log(res.length)

            getDesc(passivesArr, res, passives, powlvl, 4, 5, 6)
            getDesc(passivesArr, res, unitDesc, powlvl, 7, 8, 9)
            getDesc(passivesArr, res, unitDesc, powlvl, 10, 11, 12)
            getDesc(passivesArr, res, unitDesc, powlvl, 13, 14, 15)
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
            changeColors(res)  // change colors of keywords in skills/effects/traits

          //  res.map(res=> abilBasic.push(res[2] + ':' + res[3]/*tier*/ + '\t\t' + res[4]/*cost*/))
            res.map(res=> passiveSkills.push(res[2] + ':' + (res[4] || '') + '<br>' + (res[7] || '') + '<br>' + (res[10] || '') + '<br>' + (res[13] || '')))
            res.map(res=> passiveEffects.push(res[2] + ':' + (res[5] || '') + '<br>' + (res[8] || '') + '<br>' + (res[11] || '') + '<br>' + (res[14] || '')))
            res.map(res=> passiveTraits.push(res[2] + ':' + (res[16] || '') + '<br>' + (res[17] || '') + '<br>' + (res[18] || '')))

          })
      }

  };
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
