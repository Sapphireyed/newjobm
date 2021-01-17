import { mats, jobsDataAll } from '../abilitiesData.js'
import {jobsImgs, jobsFrames, jobsBg, matsImgs, matsFrames} from '../importImgs.js'


let matImagesComplete = []
let jobImagesComplete = []


export { matImagesComplete, jobImagesComplete }


let  common = Object.entries(matsFrames).filter(frame => frame[0] == 'Common.png')
common = Object.values(common)[0][1]
let rare = Object.entries(matsFrames).filter(frame => frame[0] == 'Rare.png')
rare = Object.values(rare)[0][1]
let epic = Object.entries(matsFrames).filter(frame => frame[0] == 'Epic.png')
epic = Object.values(epic)[0][1]
let legendary = Object.entries(matsFrames).filter(frame => frame[0] == 'Legendary.png')
legendary = Object.values(legendary)[0][1]

export function getMatImgs() {
  Object.entries(matsImgs).map(mat => {
    let ext = mat[0].indexOf('.')
    let name = mat[0].substring(0, ext)
    let matImgHtml = document.createElement('img');
    matImgHtml.style.backgroundImage = "url('" + mat[1] + "')";
    matImgHtml.id = name;
    matImgHtml.className = 'material'
    matImgHtml.style.backgroundSize = 'cover'
    mats.map(material => {
      if (material[1] == matImgHtml.id) {
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

export function getJobImgs() {
  console.log(jobsDataAll)
  Object.entries(jobsImgs).map(job => {
    let ext = job[0].indexOf('.')
    let name = job[0].substring(0, ext)
    let jobImgHtml = document.createElement('img');
    jobImgHtml.style.backgroundImage = "url('" + job[1] + "')";
    jobImgHtml.id = name;
    jobImgHtml.className = 'jobic'
    jobImgHtml.style.backgroundSize = 'cover'
setTimeout(function() {
  jobsDataAll.map(data => {
    //console.log(data)
    if (data[1] == jobImgHtml.id) {

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
          jobImgHtml.src = five
          break;
        case '5':
          jobImgHtml.src = five
          break;
      default:
      }
      jobImagesComplete.push(jobImgHtml)
    }

  })
}, 1000)

  })
}
console.log(jobImagesComplete)
