import jobsBg from '../img/Jobs/BG/inthp.jpg'
import abilbg from '../img/Traits/Dumb.png'
import charsbg from '../img/materials/Space Stone.png'
import chaptbg from '../img/materials/Thunder Spirit.png'
var $ = require("jquery")
import {jobImagesComplete, abilImagesComplete, charsImagesComplete } from '../img/imgsHTML.js'

let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
let targetWidth = 768;

export function showIcon(item, arr, notchapt='notchapt') {
  let mouseY = event.clientY; //get mouseposition to decide where to display img
  let bgimg = arr.filter(img => img.id == item.innerText.trim())
  let theadimg;
  switch (arr) {
    case jobImagesComplete:
      theadimg = jobsBg
      break;
    case abilImagesComplete:
      theadimg = abilbg
      break;
    case charsImagesComplete:
      theadimg = notchapt == 'notchapt' ? charsbg : chaptbg
      break;
    default:
  }
console.log(theadimg)
  //on hovering on jobname disply jib icons on bot sides of the table
  if (arr == jobImagesComplete) {
    document.body.style.backgroundImage = 'url("' + bgimg[0].childNodes[0].currentSrc + '"), url("' + theadimg + '")'
  } else if (arr == abilImagesComplete ){
    document.body.style.backgroundImage = 'url("' + bgimg[0].currentSrc + '"), url("' + abilbg + '")'
  } else if (arr == charsImagesComplete ){
    document.body.style.backgroundImage = 'url("' + bgimg[0].currentSrc + '"), url("' + theadimg + '")'
  }
  document.body.style.backgroundSize = '155px, cover'
  document.body.style.backgroundColor = 'rgba(51,66,74,1)'
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundAttachment = 'fixed'
  document.body.style.backgroundPosition = '-15px ' + (mouseY-100) +'px, center center'
//  document.body.style.backgroundClip = 'content-box'
  if ( w <= targetWidth) {
    document.body.style.backgroundSize = '70px, cover';
    document.body.style.backgroundPosition = '-15px ' + (mouseY-40) +'px, center center'

}
  //add img on the other side of table for big screens only)
  if ( w > targetWidth) {
    if (arr == jobImagesComplete) {
      $('head').append('<style>body::after '
                      + '{background-image: url("' + bgimg[0].childNodes[0].currentSrc + '");'
                      + 'background-repeat: no-repeat; '
                      + 'background-attachment: fixed; '
                      + 'background-size: 155px;'
                      + 'background-position: ' + (window.innerWidth-(window.innerWidth-1)) + 'px ' + (mouseY - 100) + 'px ;'
                      + 'height: 100%; width:100%; '
                      + 'display: block; '
                      + 'transform: scaleX(-1); '
                      + 'top: 0; left: 0;} </style>')
    } else if (arr = abilImagesComplete) {
      $('head').append('<style>body::after '
                      + '{background-image: url("' + bgimg[0].currentSrc + '");'
                      + 'background-repeat: no-repeat; '
                      + 'background-attachment: fixed; '
                      + 'background-size: 155px;'
                      + 'background-position: ' + (window.innerWidth-(window.innerWidth-1)) + 'px ' + (mouseY - 100) + 'px ;'
                      + 'height: 100%; width:100%; '
                      + 'display: block; '
                      + 'transform: scaleX(-1); '
                      + 'top: 0; left: 0;} </style>')
    }  else if (arr = charsImagesComplete) {
      $('head').append('<style>body::before '
                      + '{background-image: url("' + bgimg[0].currentSrc + '");'
                      + 'background-repeat: no-repeat; '
                      + 'background-attachment: fixed; '
                      + 'background-size: 155px;'
                      + 'background-position: ' + (window.innerWidth-(window.innerWidth-1)) + 'px ' + (mouseY - 100) + 'px ;'
                      + 'height: 100%; width:100%; '
                      + 'display: block; '
                      + 'transform: scaleX(-1); '
                      + 'top: 0; left: 0;} </style>')
    }

  }
}

export function hideIcon(arr, notchapt='notchapt') {
  let theadimg;
  switch (arr) {
    case jobImagesComplete:
      theadimg = jobsBg
      break;
    case abilImagesComplete:
      theadimg = abilbg
      break;
    case charsImagesComplete:
      theadimg = notchapt == 'chapt' ? chaptbg : charsbg
      break;
    default:
  }
  if ( w > targetWidth) {
    $('head').append('<style>body::after{background-image: url("' + theadimg + '"); background-repeat: no-repeat; background-size: cover; background-position: center center ; height: 100%; width:100%; display: block; transform: none; top: 0; left: 0;z-index: -20}</style>')
  }
  document.body.style.backgroundColor = 'rgb(245,247,248)';
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center center'
  document.body.style.backgroundImage = 'url("' + theadimg + '")'
}
