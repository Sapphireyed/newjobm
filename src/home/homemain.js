import { charsImagesComplete, getCharsImages, getJobImgs, jobImagesComplete} from '../img/imgsHTML'
import { characters, jobsStats,charsAllInfo, jobsData, verlog, verArr} from '../abilitiesData'
import {jobsImgs} from '../importimgs.js'
import book from '../img/other/pergBg.png'
import bannerimg from '../img/post/sins Event.png'
import dice from '../img/other/spaseStoneSol.png'
import ghost from '../img/events/ghostBlue.png'
import gplay from '../img/google-play-badge.png'
import discordimg from '../img/discord.png'
import redditimg from '../img/reddit.png'
import fbimg from '../img/fb.png'
import chosseHero from '../img/other/chooseHero.png'
var $ = require("jquery")
//import "turn-js";

//unknown
import tana from '../img/dungeon/portalPurp.png'
import unknownRed from '../img/dungeon/unknownRed.png'
import pwhite from '../img/dungeon/portalWhite.png'
import tanatxt from '../img/dungeon/portalPurpTxt.png'

//dungeon
import descend1 from '../img/dungeon/descend1.png'
import descend2 from '../img/dungeon/descend2.png'
import descend3 from '../img/dungeon/descend3.png'
import descend4 from '../img/dungeon/descend4.png'

//treasuers
import gold from '../img/dungeon/chestgold.png'
import job from '../img/dungeon/chestjob.png'
import midas from '../img/events/midas.png'
import crystal from '../img/events/crystal.png'

//howfar
import thana666 from '../img/dungeon/thana666.png'
import newrules from '../img/dungeon/newrules.png'

let unknown = [tana, tanatxt, pwhite, unknownRed]
let descend = [descend1, descend2, descend3, descend4]
let treasures = [gold,job,midas, crystal]
let howfar = [thana666, newrules]

let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
let targetWidth = 768;
let targetMid = 1000


export {herodiv,mainsec, herodiv2}

let mainsec = document.createElement('section')
mainsec.id = 'mainsec'
let info = document.createElement('div')

info.classList.add('row')
info.id = 'info'
let infoInf = document.createElement('div')
infoInf.classList.add( 'maininf', 'row')
infoInf.id = 'infoInf'
//infoInf.style.backgroundImage = 'url("' + book + '")'
//infoInf.style.backgroundSize = 'contain'
let smallHead = document.createElement('h1')
smallHead.classList.add('col-12')
smallHead.innerHTML = 'Jobmania - Eternal Dungeon'

let features = document.createElement('ul')
features.classList.add('col-lg-10','co-12')
features.innerHTML = '<li><img src="' + dice + '"> Roguelite dungeon crawler with a strategic deck-building and turn-based combat</li>'
                   + '<li><img src="' + dice + '"> A great variety of heroes, jobs and abilities ensures limitless replayability and unique experience on every run</li>'
                   + '<li><img src="' + dice + '"> Generous gacha system allows to obtain powerful charcters or crafting materials and make a quick progress in the game</li>'
                   + '<li><img src="' + dice + '"> Frequant updates with new content make the game feel fresh even to veterans</li>'
                   + '<li><img src="' + dice + '"> Portrait screen makes it easy to play everywhere and at any time!</li>'
                   + '<li><img src="' + dice + '"> A friendly and active community on discord and reddit including constant support from game\'s marvelous creator, Aubrey Puan!</li></br>'
let summary = document.createElement('h5')
summary.innerHTML = 'Countless combinations ensure great replayability. Try various builds, choose different paths'
let dicepic = document.createElement('img')
dicepic.id = 'ghost'
dicepic.src = ghost
let ghostdiv = document.createElement('div')
ghostdiv.classList.add('col-lg-2', 'col-12')
ghostdiv.id = 'ghostdiv'
ghostdiv.appendChild(dicepic)
let dicepic2 = dicepic.cloneNode(true)
setInterval(function() {
  dicepic.style.animation = 'hithere 7s ease infinite'
  dicepic2.style.animation = 'hithere 7s ease infinite'
//  dicepic.style.animationIterationCount = '1';
}, 2000)
let playBtnDiv = document.createElement('div')
playBtnDiv.id = 'gplay'
playBtnDiv.classList.add('row', 'col-12')
let playdiv = document.createElement('div')
playdiv.classList.add('col-md-6', 'col-12')
playdiv.id = 'playdiv'
let playimg = document.createElement('img')
playimg.src= gplay
playimg.id = 'playimg'
let gplayLink = document.createElement('a')
gplayLink.target = '_blank'
gplayLink.href = 'https://play.google.com/store/apps/details?id=com.aubjective.jobmania'
let gplayshine = document.createElement('div')
gplayshine.className='gshine'
gplayLink.append(playimg, gplayshine)
playdiv.append(gplayLink)
let media = document.createElement('div')
media.classList.add('col-md-6', 'col-12')
media.id = 'media'
let shinemedia = document.createElement('div')
shinemedia.className='shine'
let discord = document.createElement('img')
discord.src= discordimg
discord.id = 'discord'
let discordLink = document.createElement('a')
discordLink.target = '_blank'
discordLink.href = 'https://discord.com/invite/B6aYFffm6j'
discordLink.append(discord, shinemedia)
let reddit = document.createElement('img')
reddit.src= redditimg
let redditLink = document.createElement('a')
redditLink.target = '_blank'
redditLink.href = 'https://www.reddit.com/r/jobmania/'
redditLink.append(reddit, shinemedia.cloneNode(true))
let fb = document.createElement('img')
fb.src= fbimg
let fbLink = document.createElement('a')
fbLink.target = '_blank'
fbLink.href = 'https://www.facebook.com/JobmaniaOfficialPage'
fbLink.append(fb, shinemedia.cloneNode(true))

media.append(discordLink, redditLink, fbLink)
playBtnDiv.append(media,playdiv)

infoInf.append(smallHead, features, ghostdiv, playBtnDiv)

let updates= document.createElement('div')
updates.id = 'updates'
updates.classList.add('maininf', 'row')
let updatesH = document.createElement('h3')
updatesH.innerHTML = 'What\'s new'
let banner = document.createElement('img')
banner.src = bannerimg
banner.id = 'banner'
verlog.log()
  .then(v => {
    let ver = document.createElement('h5')
    ver.innerHTML = 'Version: ' + verArr[0]
    let news = document.createElement('ul')
    verArr.map((row,i) => {
      if (i > 0) {
        let liI = document.createElement('li')
        liI.innerHTML = '<img src="' + dice + '"> ' + row
        news.append(liI)
      }
    })

    updates.append( banner, news)
  })

let change = document.createElement('div')
change.className = 'change'
let change1 = change.cloneNode(true)
change1.id = 'change1'
let change2 = change.cloneNode(true)
change2.id = 'change2'
let change3 = change.cloneNode(true)
change.id = 'change'
//change.classList.add('row')

let animationHeader = document.createElement('h1')
animationHeader.id = 'animationHeader'
animationHeader.innerHTML = 'Descend <br>into the <span style="color: #36c1f9">Dungeon</span>'
let div1 = document.createElement('div')
div1.classList.add('row', 'col-6')
div1.id = 'div1'
let img1 = document.createElement('img')
let img1div = document.createElement('div')
img1div.classList.add('col-md-6', 'col-12')
img1div.appendChild(img1)
img1.src = chosseHero
let txt = document.createElement('div')
txt.classList.add('col-md-6', 'col-12','txtdiv')
txt.id = 'txtdiv'
let txtp1 = document.createElement('h2')
txtp1.classList.add('txt')
txtp1.innerText = 'Choose'
let txtp2 = document.createElement('h2')
txtp2.classList.add('txt')
txtp2.innerText = 'Your'
let txtp3 = document.createElement('h2')
txtp3.classList.add('txt')
txtp3.innerHTML = '<span style="color: #36c1f9">Hero</span>'
txt.append(txtp1, txtp2, txtp3)
div1.append(txt, img1div)

let div2 = document.createElement('div')
div2.classList.add('row','col-6')
div2.id = 'div2'
let img2 = document.createElement('img')
let img2div = document.createElement('div')
img2div.classList.add('col-md-6', 'col-12')
img2div.appendChild(img2)
//img2.src = chosseHero
let txt2 = document.createElement('div')
txt2.classList.add('col-md-6', 'col-12', 'txtdiv')
txt2.id = 'txtdiv'
let txt2p1 = document.createElement('h2')
txt2p1.classList.add('txt')
txt2p1.innerText = 'Assign'
let txt2p2 = document.createElement('h2')
txt2p2.classList.add('txt')
txt2p2.innerText = 'a'
let txt2p3 = document.createElement('h2')
txt2p3.classList.add('txt')
txt2p3.innerHTML = '<span style="color: #36c1f9">Job</span>'
txt2.append(txt2p1, txt2p2, txt2p3)
div2.append(img2div, txt2)

change1.classList.add('row')
change1.append(div1, div2)

/*let div3 = document.createElement('div')
div3.classList.add('row', 'div')
div3.id = 'div3'
let img3 = document.createElement('img')
let img3div = document.createElement('div')
img3div.classList.add('col-6')
img3div.append(img3)
//img3.src = chosseHero
let txt3 = document.createElement('div')
txt3.classList.add('col-6', 'txtdiv')
txt3.id = 'txtdiv'
let txt3p1 = document.createElement('h1')
txt3p1.classList.add('txt')
txt3p1.innerText = 'Descend'
let txt3p2 = document.createElement('h1')
txt3p2.classList.add('txt')
txt3p2.innerText = 'into the'
let txt3p3 = document.createElement('h1')
txt3p3.classList.add('txt')
txt3p3.innerText = 'Dungeon'
txt3.append(txt3p1, txt3p2, txt3p3)
div3.append(txt3, img3div)*/

let div4 = document.createElement('div')
div4.classList.add('row', 'div')
div4.id = 'div4'
let img4div = document.createElement('div')
let img4 = document.createElement('img')
img4div.classList.add('col-12')
img4div.append(img4)
//img4.src = chosseHero
let txt4 = document.createElement('div')
txt4.classList.add('col-12', 'txtdiv')
let txt4next = txt4.cloneNode(true)
txt4.id = 'txtdiv'
let txt4p1 = document.createElement('h1')
txt4p1.classList.add('txt')
txt4p1.innerText = 'Face '
let txt4p2 = document.createElement('h1')
txt4p2.classList.add('txt')
txt4p2.innerText = 'the'
let txt4p3 = document.createElement('h1')
txt4p3.classList.add('txt')
txt4p3.innerText = 'Unknown '
txt4.append(txt4p1, txt4p2)
txt4next.appendChild(txt4p3)
div4.append(txt4, img4div, txt4p3)

let div5 = document.createElement('div')
div5.classList.add('row', 'div')
div5.id = 'div5'
let img5div = document.createElement('div')
let img5 = document.createElement('img')
img5div.classList.add('col-12')
img5div.append(img5)
//img4.src = chosseHero
let txt5 = document.createElement('div')
txt5.classList.add('col-12', 'txtdiv')
let txt5next = txt5.cloneNode(true)
txt5.id = 'txtdiv'
let txt5p1 = document.createElement('h1')
txt5p1.classList.add('txt')
txt5p1.innerText = 'Crash '
let txt5p2 = document.createElement('h1')
txt5p2.classList.add('txt')
txt5p2.innerText = 'Your '
let txt5p3 = document.createElement('h1')
txt5p3.classList.add('txt')
txt5p3.innerText = 'Enemies'
txt5.append(txt5p1, txt5p2)
txt5next.appendChild(txt5p3)
div5.append(txt5, img5div, txt5p3)

let div6 = document.createElement('div')
div6.classList.add('row', 'div')
div6.id = 'div6'
let img6div = document.createElement('div')
let img6 = document.createElement('img')
img6div.classList.add('col-12')
img6div.append(img6)
//img4.src = chosseHero
let txt6 = document.createElement('div')
txt6.classList.add('col-12', 'txtdiv')
let txt6next = txt6.cloneNode(true)
txt6.id = 'txtdiv'
let txt6p1 = document.createElement('h1')
txt6p1.classList.add('txt')
txt6p1.innerText = 'Collect '
let txt6p2 = document.createElement('h1')
txt6p2.classList.add('txt')
txt6p2.innerText = ''
let txt6p3 = document.createElement('h1')
txt6p3.classList.add('txt')
txt6p3.innerText = 'Treasures'
txt6.append(txt6p1, txt6p2)
txt6next.appendChild(txt6p3)
div6.append(txt6, img6div, txt6p3)

change2.append(div4, div5, div6)

let div7 = document.createElement('div')
div7.classList.add('row',)
div7.id = 'div7'

let img7div = document.createElement('div')
let img7 = document.createElement('img')
img7div.classList.add('col-md-3', 'col-12')
let img7div2 = img7div.cloneNode(true)
img7div.append(img7)
let img7next = document.createElement('img')
img7div2.append(img7next)

let txt7 = document.createElement('div')
txt7.classList.add('col-md-6', 'col-12', 'txtdiv')
txt7.id = 'txtdiv'
let txt7p1 = document.createElement('h1')
txt7p1.classList.add('txt')
txt7p1.innerHTML = 'How <span style="color: #36c1f9">deep</span>'
let txt7p2 = document.createElement('h1')
txt7p2.classList.add('txt')
txt7p2.innerHTML = 'will you dare<br>'
let txt7p3 = document.createElement('h1')
txt7p3.classList.add('txt')
txt7p3.innerHTML = 'to <span style="color: #36c1f9">delve</span> ?'
txt7.append(txt7p1, txt7p2, txt7p3)
div7.append(img7div, txt7, img7div2)
change3.append(div7)
//let change2 = change.cloneNode(true)

change.append(animationHeader, change1, change2, change3)

/*let changeWrapper = document.createElement('div')
changeWrapper.classList.add('col-6')
changeWrapper.style.backgroundImage = 'url("' + book + '")'
changeWrapper.style.backgroundSize = 'cover'
changeWrapper.append(change)*/
info.append(infoInf, updates, change, document.body.appendChild(playBtnDiv.cloneNode(true)))
//info.innerHTML= '<br><br><br><br><br>'
let charCont = document.createElement('div')
charCont.id = 'wrapper'
charCont.innerHTML = '<br><br><br><br><br><br>'
mainsec.append(info)

let herodiv = document.createElement('div')
herodiv.classList.add('herodiv', 'col-lg-1', 'col-12', 'row')
herodiv.id = 'herodiv'
let herodiv2 = herodiv.cloneNode(true)
herodiv2.id = 'herodiv2'

jobsData.craft()
    .then(data => {
      jobsData.materials()
      jobsData.jobs()
    }).then(res => {
characters.chars()
  .then(char=> {
    getCharsImages()
        let i = 0
        while ( i <= 7) {
          let rand = Math.floor(Math.random() * charsImagesComplete.length)
          let rand2 = Math.floor(Math.random() * charsImagesComplete.length)
          let imgi = document.createElement('div')
          w > targetMid ? imgi.style.height = '100px' : imgi.style.height = 'auto'
          imgi.style.position = 'relative'
          imgi.classList.add('charimg', 'img'+i, 'col-2', 'col-md-12')
          imgi.id = 'img'+i
          imgi.innerHTML = charsImagesComplete[rand].outerHTML
          console.log(charsImagesComplete[rand])
          herodiv.append(imgi)
          let imgi2 = imgi.cloneNode(true)
          imgi2.innerHTML = charsImagesComplete[rand2].outerHTML
          herodiv2.append(imgi2)

      //    herodiv.innerHTML = herodiv.innerHTML
          i++
        }
        let ind = 0
        while ( ind <= 7) {
          let rand = Math.floor(Math.random() * charsImagesComplete.length)
          let rand2 = Math.floor(Math.random() * charsImagesComplete.length)
          let imgind = document.getElementsByClassName('img' + ind)[0]
          let imgind2 = document.getElementsByClassName('img' + ind)[1]
          imgind.innerHTML = imgind.innerHTML + charsImagesComplete[rand].outerHTML
          imgind2.innerHTML = imgind2.innerHTML + charsImagesComplete[rand2].outerHTML
          ind++
        }
        let charimgsAll = Array.from(document.getElementsByClassName('charimg'))
        charimgsAll.map(chimg => {
          console.log(chimg)
          Array.from(chimg.children).map(child => {
            child.style.position = 'absolute'
            child.style.top = '0'
            child.style.left = '0'
            child.style.width = '100%'
          })
          chimg.children[1].style.opacity = 0
        //  chimg.children[1].classlist.add('hidden')
        })
        let charimgs =document.getElementsByClassName('charimg')
      setInterval(function(){
        //images chaning on the bottom
        let rand = Math.floor(Math.random() * charsImagesComplete.length)
        let rand2 = Math.floor(Math.random() * charsImagesComplete.length)
        let randimg = Math.floor(Math.random() * charimgs.length)
        let imgToChange = charimgs[randimg]

        if (imgToChange.children[1].classList.contains('hidden')) {
          imgToChange.children[0].src = charsImagesComplete[rand].src
          imgToChange.children[0].style.transition = '1.8s';
          imgToChange.children[0].style.opacity = 1;
          imgToChange.children[1].style.transition = '1.8s';
          imgToChange.children[1].style.opacity = 0;
          imgToChange.children[1].classList.remove('hidden')
        } else {
          imgToChange.children[1].src = charsImagesComplete[rand2].src
          imgToChange.children[1].style.transition = '1.8s';
          imgToChange.children[1].style.opacity = 1;
          imgToChange.children[0].style.transition = '1.8s';
          imgToChange.children[0].style.opacity = 0;
          imgToChange.children[1].classList.add('hidden')
        }
      //  let imgToChange2 = $('#img' + randimg)
    }, 1000)
    let index = 1
    setInterval(function() {
      // images changing inside slideshow (inside specific slide)
      let rand = Math.floor(Math.random() * charsImagesComplete.length)
      let rand2 = Math.floor(Math.random() * charsImagesComplete.length)
      let randimg = Math.floor(Math.random() * charimgs.length)
      let jobsImages = Object.entries(jobsImgs)
      let randChar = Math.floor(Math.random() * charsImagesComplete.length)
      let randJob = Math.floor(Math.random() * jobsImages.length)
      let unknownRand = Math.floor(Math.random() * unknown.length)
      let randDescend = Math.floor(Math.random() * descend.length)
      let randTreasure = Math.floor(Math.random() * treasures.length)
      let randFar = Math.floor(Math.random() * howfar.length)
      index % 2 == 0 ? img1.src = charsImagesComplete[rand].src : img2.src = jobsImages[randJob][1]
      img3.src = descend[randDescend]
      img4.src = unknown[unknownRand]
      img5.src = charsImagesComplete[rand2].src
      img6.src = treasures[randTreasure]
      img7.src = howfar[randFar]
      img7next.src = howfar[randFar]
      index++
    }, 2000)

    })
})
