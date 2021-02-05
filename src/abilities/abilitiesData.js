global.fetch = require('node-fetch');
const GetSheetDone = require('get-sheet-done');
const id = '1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g';

export { powlvl, unitDesc, abilitiesArr, descFinale }

let powlvl;     // power level table from sheet 4
let unitDesc;  // unit desc table from sheet 4
let abilitiesArr = [];   // abilites from sheet 6
let descFinale = []
let abilTraits = []
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
          return {
            skill: row[7],
            type: row[8],
            desc: row[9]
          }
        })
      })
  },

  abils:() => {
    return GetSheetDone
      .raw(id, 6).then(data => data.data).then(res => {
        res.shift()
        console.log(res.map(res=> res[6] + '|' + res[9] + '|' + res[12] + '|' + res[15]))
        //gt the description
        var name, desc, desc1, desc2, desc3, desc4

        function getDesc(arrToMap, arrToCompare, powlvl, skill, effect, multiplier) {
         abilitiesArr.push(arrToMap.map(row => {
            desc = arrToCompare.filter(res => row[skill] == res.skill && row[effect] == res.type)
            var multi1 = powlvl.filter(lvl => lvl.lvl == row[multiplier])
            var multi1maxhp = multi1.map(multi => multi.maxHP)
            var multi1attr = multi1.map(multi => multi.strAgiInt)

            if (row[skill] == 'Damage' || row[skill] == 'Heal' || row[skill] == "Protect" && (row[effect] == 'MaxHP' || row[effect] == 'Strength' || row[effect] == 'Agility' || row[effect] == 'Intelligence'))
            {
              desc = row[effect] == 'MaxHP' ? desc.map(desc => desc.desc.replace('X%', multi1maxhp)) : desc.map(desc => desc.desc.replace('X%', multi1attr))
              desc = row[effect] == 'Null' ?  desc[0].replace('X', row[multiplier]) : desc[0].replace('X', row[multiplier])
            } else {
              desc = row[skill] == 'Sacrifice' && row[effect] == 'MaxHP' ? desc.map(desc => desc.desc.replace('10x', 10 * row[multiplier])) : desc.map(desc => desc.desc)
              desc = desc[0] == undefined ? '' : desc[0].replace('X%', '%')
              desc = desc.replace('X', row[multiplier])

            }
            name = row[2]
            return {
              name: name,
              desc: desc
            }
          }))

        }
          getDesc(res, unitDesc, powlvl, 5, 6, 7)
          getDesc(res, unitDesc, powlvl, 8, 9, 10)
          getDesc(res, unitDesc, powlvl, 11, 12, 13)
          getDesc(res, unitDesc, powlvl, 14, 15, 16)
          desc1 = abilitiesArr[0]
          desc2 = abilitiesArr[1]
          desc3 = abilitiesArr[2]
          desc4 = abilitiesArr[3]

          for (var i = 0; i < desc1.length; i++) {
            descFinale.push(desc1[i].name + ':<br>'
            + (desc1[i].desc || '')
            + '<br>' + (desc2[i].desc || '')
            + '<br>' + (desc3[i].desc || '')
            + '<br>' + (desc4[i].desc || ''))
          }

        //get the traits


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

  };

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
