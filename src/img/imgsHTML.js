import { mats } from '../abilitiesData.js'
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

/*export function getJobImgs() {
  Object.entries(jobsImgs).map(job => {
    let ext = job[0].indexOf('.')
    let name = job[0].substring(0, ext)
    let jobImgHtml = document.createElement('img');
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
}*/
