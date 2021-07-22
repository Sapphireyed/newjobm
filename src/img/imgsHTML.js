global.fetch = require('node-fetch');
const GetSheetDone = require('get-sheet-done');
const id = '1W-ptBX6fjkQcZXrrr4KTZRp2qNcer66Ak4VANW2dM8';
import {jobsData, jobsDataAll, mats, jobsStats, abilitiesAllInfo, abilSkills,abilEffects, abilTraits, charsAllInfo} from '../abilitiesData.js'
import {jobsImgs, jobsFrames, jobsBg,
        matsImgs, matsFrames,
        abilsImgs, abilsBg,
        charsImgs, charsBg} from '../importImgs.js'
import { materialsLoc, charsLoc, wordsLoc, jobsNamesLoc} from '../local/local.js'

let matImagesComplete = []
let jobImagesComplete = []
let abilImagesComplete = []
let charsImagesComplete = []

export { matImagesComplete, jobImagesComplete, abilImagesComplete, charsImagesComplete } // full DOM element containing job/mat img

//mats frames
let  common = Object.entries(matsFrames).filter(frame => frame[0] == 'Common.png')
common = Object.values(common)[0][1]
let rare = Object.entries(matsFrames).filter(frame => frame[0] == 'Rare.png')
rare = Object.values(rare)[0][1]
let epic = Object.entries(matsFrames).filter(frame => frame[0] == 'Epic.png')
epic = Object.values(epic)[0][1]
let legendary = Object.entries(matsFrames).filter(frame => frame[0] == 'Legendary.png')
legendary = Object.values(legendary)[0][1]
// mats img complete
export function getMatImgs() {
    matImagesComplete = []
    let lang = document.getElementById('langSel').value
    Object.entries(matsImgs).map(mat => {
        
    let ext = mat[0].indexOf('.')
        let name = mat[0].substring(0, ext)

        switch (lang) {
            case 'English':
                name = materialsLoc.filter(m => name != undefined && name == m[0])[0]
                name = name == undefined ? 'n/a' : name[1]
                break
            case 'Chinese':
                name = materialsLoc.filter(m => name != undefined && name == m[0])[0]
                name = name == undefined ? 'n/a' : name[2]
                break
            case 'Chinese(Trad)':
                name = materialsLoc.filter(m => name != undefined && name == m[0])[0]
                name = name == undefined ? 'n/a' : name[3]
                break
        }

    let matImgHtml = document.createElement('img');  //create mat img empty
    matImgHtml.style.backgroundImage = "url('" + mat[1] + "')";  // set shape as backgrond
    matImgHtml.id = name;
    matImgHtml.className = 'material'
    matImgHtml.style.backgroundSize = 'cover'
        mats.map(material => {
            
      if (material[1] == matImgHtml.id) { // set frame as img src dep on rarity
          let rarity = material[2]
          
          switch (lang) {
              case 'English':
                  rarity = wordsLoc.filter(loc => loc[1] == rarity)[0][1];
                  break;
              case 'Chinese':
                  console.log(rarity)
                  rarity = wordsLoc.filter(loc => loc[2] == rarity)[0][1];
                  break;
              case 'Chinese(Trad)':
                  rarity = wordsLoc.filter(loc => loc[3] == rarity)[0][1];
                  break;
          }
          let translateRar = wordsLoc.filter(loc => loc[1] == rarity)
          //translateRar[0] = translateRar[0] == undefined ? 'n/a' : translateRar[0]

          switch (rarity) {
              case 'Common':
                matImgHtml.src = common
                break;
              case 'Rare':
                matImgHtml.src = rare
                break;
              case 'Epic':
                matImgHtml.src = epic
                break;
              case 'Legendary':
                matImgHtml.src = legendary
                break;
            default:
          }
        matImagesComplete.push(matImgHtml)
      }

    })

  })
}


// jobs frames
let  one = Object.entries(jobsFrames).filter(frame => frame[0] == '1.png')
one = Object.values(one)[0][1]
let two = Object.entries(jobsFrames).filter(frame => frame[0] == '2.png')
two = Object.values(two)[0][1]
let three = Object.entries(jobsFrames).filter(frame => frame[0] == '3.png')
three = Object.values(three)[0][1]
let four = Object.entries(jobsFrames).filter(frame => frame[0] == '4.png')
four = Object.values(four)[0][1]
let five = Object.entries(jobsFrames).filter(frame => frame[0] == '5.png')
five = Object.values(five)[0][1]

let sortable = []
var bgs;

//jobs img complete
export function getJobImgs() {

  let jobImgDiv;
  let jobImgBg;

  Object.entries(jobsImgs).map(job => {
    let ext = job[0].indexOf('.')
      let name = job[0].substring(0, ext)
      let lang = document.getElementById('langSel').value
      switch (lang) {
          case 'English':
              name = jobsNamesLoc.filter(j => j[0] == name)[0] == undefined ? name : jobsNamesLoc.filter(j => j[0] == name)[0][1]
              break
          case 'Chinese':
              name = jobsNamesLoc.filter(j => j[0] == name)[0] == undefined ? name : jobsNamesLoc.filter(j => j[0] == name)[0][2]
              break
          case 'Chinese(Trad)':
              name = jobsNamesLoc.filter(j => j[0] == name)[0] == undefined ? name : jobsNamesLoc.filter(j => j[0] == name)[0][3]
              console.log(name)
              break
      }
    jobImgDiv = document.createElement('div');  // create empty div to hold 2 imgs
    jobImgDiv.id = name;
    jobImgDiv.style.position = 'relative'
    let jobImgHtml = document.createElement('img'); // 1st img frame + shape as bg
  //  jobImgHtml.height = 'auto'
    jobImgHtml.src = job[1];
    jobImgHtml.classList.add('jobic')
    jobImgHtml.style.backgroundSize = 'contain'
    jobImgHtml.style.position = 'relative'
    jobImgHtml.style.zIndex = '99'


    jobImgDiv.append(jobImgHtml)
      jobsDataAll.map(data => {
        if (data[1] == jobImgDiv.id) {
          let rarity = data[2]
          switch (rarity) {
            case '1':
              jobImgHtml.style.backgroundImage = "url('" + one + "')";
              break;
            case '2':
              jobImgHtml.style.backgroundImage = "url('" + two + "')";
              break;
            case '3':
              jobImgHtml.style.backgroundImage = "url('" + three + "')";
              break;
            case '4':
              jobImgHtml.style.backgroundImage = "url('" + four + "')";
              break;
            case '5':
              jobImgHtml.style.backgroundImage = "url('" + five + "')";
              break;
          default:
          }
          jobImagesComplete.push(jobImgDiv)
        }
      })
  })
  //2nd img for div element - job bg img

  Object.entries(jobsStats).map(j => {
    sortable.push(Object.entries(j[1]).sort(((a,b) => b[1]-a[1])))
  })
  bgs = sortable.map(job => {
    job = Object.entries(job)
    var attr1 = job[1][1]
    var attr2 = job[2][1]
    var attr3 = job[3][1]
    var attr4 = job[4][1]

    var diff = attr1[1] - attr2[1]
    var difPerc = diff/attr1[1] * 100
    if (difPerc > 5) {
      return job[0][1][1] + ',' + attr1[0]
    } else if ((attr1[1] - attr4[1])/attr1[1] * 100 < 5) {
      return job[0][1][1] + ',' + 'balance'
    } else {
      if (attr2[0] == 'str' || attr1[0] == 'hp' || (attr1[0] == 'int' && attr2[0] == 'agi')) {
        return job[0][1][1] + ',' + attr2[0] + attr1[0]
      } else {
        return job[0][1][1] + ',' + attr1[0] + attr2[0]
      }

    }
  })
  let jobbg = bgs.map(bg => bg.split(','))

  Object.entries(jobsBg).map(bg => {
    jobbg.map(jobbg => {
      jobbg[1] +'.jpg' == bg[0] ? jobbg.push(bg[1]) : ''
    })

  })

    jobImagesComplete.map(imgdiv => {

    let jobImgBg = document.createElement('img');
    jobImgBg.style.position = 'absolute'
    jobImgBg.style.zIndex = '1'
    let x = jobbg.find(bg => bg[0] == imgdiv.id)
        jobImgBg.src = x[2]
        if (!imgdiv.innerHTML.includes(jobImgBg.src)) {
            imgdiv.append(jobImgBg)
        }

  })
}

// abilities
let  curse = Object.entries(abilsBg).filter(bg => bg[0] == 'Curse.jpg')
curse = Object.values(curse)[0][1]
let damage = Object.entries(abilsBg).filter(frame => frame[0] == 'Damage.jpg')
damage = Object.values(damage)[0][1]
let heal = Object.entries(abilsBg).filter(frame => frame[0] == 'Heal.jpg')
heal = Object.values(heal)[0][1]
let debuff = Object.entries(abilsBg).filter(frame => frame[0] == 'Debuff.jpg')
debuff = Object.values(debuff)[0][1]
let buff = Object.entries(abilsBg).filter(frame => frame[0] == 'Buff.jpg')
buff = Object.values(buff)[0][1]
let nothing = Object.entries(abilsBg).filter(frame => frame[0] == 'Nothing.jpg')
nothing = Object.values(nothing)[0][1]

let abilImgArr =[]


export function getAbilImgs() {
  let abilSkillsSplit = Object.values(abilSkills).map(ab => ab == undefined ? '' : ab.split(':<br>'))
  let abilTraitsSplit = Object.values(abilTraits).map(ab => ab == undefined ? '' : ab.split(':<br>'))
  let abilEffectsSplit = Object.values(abilEffects).map(ab => ab == undefined ? '' : ab.split(':<br>'))
  const elemRegex = /fire|water|earth|thunder|wind|light|dark|bleed|injury|venom|restrain|insane|Element|Debuff/gi;

  abilitiesAllInfo.map(img => {
    let abilImgHtml = document.createElement('img');  //create abil img empty
    abilImgHtml.classList.add(img[20])
    abilImgHtml.id = img[2].trim()
    abilImgArr.push(abilImgHtml)
  })

  Array.from(abilImgArr).map(img => {
    let imgsrc = Object.entries(abilsImgs).filter(abil => abil[0] == img.classList[0] + '.png')
    imgsrc.map(src => {
      let ext = src[0].indexOf('.')
      let name = src[0].substring(0, ext)
      if (name == img.classList[0]) {
         img.src = src[1]
      }
        let bgtype = abilSkillsSplit.filter(abil => abil[0] == img.id)

        let isCurse = abilTraitsSplit.filter(abil => abil[0] == img.id)
      //  isCurse = isCurse.map(c =>console.log(c[1]))
      //  console.log(isCurse[0][1])
      let effect = abilEffectsSplit.filter(abil => abil[0] == img.id)
        isCurse[0] = isCurse[0] == undefined ? ['N/A', 'N/A'] : isCurse[0]
        bgtype[0] = bgtype[0] == undefined ? ['N/A', 'N/A'] : bgtype[0]

      switch (true) {
        case isCurse[0][1].includes('Curse'):
          img.style.backgroundImage = 'url("' + curse + '")'
          break;
        case bgtype[0][1].includes('Damage') == true:
          img.style.backgroundImage = 'url("' + damage + '")'
          break
        case bgtype[0][1].includes('Heal') || (bgtype[0][1].includes('protect') && elemRegex.test(effect[0][1])):
          img.style.backgroundImage = 'url("' + heal + '")'
          break;
        case bgtype[0][1].includes('Debuff') || bgtype[0][1].includes('Vulnerable'):
          img.style.backgroundImage = 'url("' + debuff + '")'
          break
        case bgtype[0][1].includes('Buff') || bgtype[0][1].includes('InstantBoost') || bgtype[0][1].includes('protect') || bgtype[0][1].includes('Sacrifice'):
          img.style.backgroundImage = 'url("' + buff + '")'
          break
        default:
          img.style.backgroundImage = 'url("' + nothing + '")'
        }

      img.style.backgroundSize = 'cover'
    })

      return abilImagesComplete.push(img)
  //    abilImagesComplete.push(abilImgHtml)

    })

}

//chars
//frames
let cone = Object.entries(charsBg).filter(frame => frame[0] == '1.png')
cone = Object.values(cone)[0][1]
let ctwo = Object.entries(charsBg).filter(frame => frame[0] == '2.png')
ctwo = Object.values(ctwo)[0][1]
let cthree = Object.entries(charsBg).filter(frame => frame[0] == '3.png')
cthree = Object.values(cthree)[0][1]
let cfour = Object.entries(charsBg).filter(frame => frame[0] == '4.png')
cfour = Object.values(cfour)[0][1]
let cfive = Object.entries(charsBg).filter(frame => frame[0] == '5.png')
cfive = Object.values(cfive)[0][1]
// mats img complete
export function getCharsImages() {
    let lang = document.getElementById('langSel').value
  Object.entries(charsImgs).map(mat => {
    let ext = mat[0].indexOf('.')
      let name = mat[0].substring(0, ext)
      switch (lang) {
          case 'English':
              name = charsLoc.filter(m => name != undefined && name == m[0])[0]
              name = name == undefined ? 'n/a' : name[1]
              break
          case 'Chinese':
              name = charsLoc.filter(m => name != undefined && name == m[0])[0]
              name = name == undefined ? 'n/a' : name[2]
              break
          case 'Chinese(Trad)':
              name = charsLoc.filter(m => name != undefined && name == m[0])[0]
              name = name == undefined ? 'n/a' : name[3]
              break
      }
    let matImgHtml = document.createElement('img');  //create mat img empty
    matImgHtml.src=  mat[1]  // set shape as backgrond
    matImgHtml.id = name;
    matImgHtml.className = 'material'
    matImgHtml.style.transform= 'scaleX(-1)'
    matImgHtml.style.backgroundSize = 'cover'
    charsAllInfo.map(material => {
      if (material[1] == matImgHtml.id) { // set frame as img src dep on rarity
        let rarity = material[2]
      /*  switch (rarity) {
          case 'Beginner':
            matImgHtml.style.backgroundImage = 'url("' + cone + '")'
            break;
          case 'Easy':
            matImgHtml.style.backgroundImage = 'url("' + ctwo + '")'
            break;
          case 'Medium':
            matImgHtml.style.backgroundImage = 'url("' + cthree + '")'
            break;
          case 'Hard':
            matImgHtml.style.backgroundImage = 'url("' + cfour + '")'
            break;
          case 'Boss':
            matImgHtml.style.backgroundImage = 'url("' + cfive + '")'
            break;
        default:
      }*/
          charsImagesComplete.push(matImgHtml)

      }

    })

  })
}
