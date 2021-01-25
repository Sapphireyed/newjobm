global.fetch = require('node-fetch');
const GetSheetDone = require('get-sheet-done');
const id = '1W-ptBX6fjkQcZXrrr4KTZRp2qNcer66Ak4VANW2dM8';
import {jobsData, jobsDataAll, mats, jobsStats, abilitiesAllInfo, abilSkills} from '../abilitiesData.js'
import {jobsImgs, jobsFrames, jobsBg,
        matsImgs, matsFrames,
        abilsImgs, abilsBg } from '../importImgs.js'

let matImagesComplete = []
let jobImagesComplete = []
let abilImagesComplete = []

export { matImagesComplete, jobImagesComplete, abilImagesComplete } // full DOM element containing job/mat img

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
  Object.entries(matsImgs).map(mat => {
    let ext = mat[0].indexOf('.')
    let name = mat[0].substring(0, ext)
    let matImgHtml = document.createElement('img');  //create mat img empty
    matImgHtml.style.backgroundImage = "url('" + mat[1] + "')";  // set shape as backgrond
    matImgHtml.id = name;
    matImgHtml.className = 'material'
    matImgHtml.style.backgroundSize = 'cover'
    mats.map(material => {
      if (material[1] == matImgHtml.id) { // set frame as img src dep on rarity
        let rarity = material[2]
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
    jobImgDiv = document.createElement('div');  // create empty div to hold 2 imgs
    jobImgDiv.id = name;
    jobImgDiv.style.position = 'relative'
    let jobImgHtml = document.createElement('img'); // 1st img frame + shape as bg
  //  jobImgHtml.height = 'auto'
    jobImgHtml.style.backgroundImage = "url('" + job[1] + "')";
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
              jobImgHtml.src = one
              break;
            case '2':
              jobImgHtml.src = two
              break;
            case '3':
              jobImgHtml.src = three
              break;
            case '4':
              jobImgHtml.src = four
              break;
            case '5':
              jobImgHtml.src = five
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
    imgdiv.append(jobImgBg)

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

let abilImgArr =[]


export function getAbilImgs() {
  let abilSkillsSplit = Object.values(abilSkills).map(ab => ab == undefined ? '' : ab.split(':'))
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

      if (bgtype[0][1].includes('Curse')) {
        img.style.backgroundImage = 'url("' + curse + '")'
      } else if (bgtype[0][1].includes('Damage') == true) {
        img.style.backgroundImage = 'url("' + damage + '")'
      } else if (bgtype[0][1].includes('Heal')) {
        img.style.backgroundImage = 'url("' + heal + '")'
      } else if (bgtype[0][1].includes('Debuff')) {
        img.style.backgroundImage = 'url("' + debuff + '")'
      } else {
        img.style.backgroundImage = 'url("' + buff + '")'
      }
      img.style.backgroundSize = 'cover'
    })

      return abilImagesComplete.push(img)
  //    abilImagesComplete.push(abilImgHtml)

    })

}
