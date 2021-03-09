import { charsImagesComplete, getCharsImages, getJobImgs, jobImagesComplete} from '../img/imgsHTML'
import { characters, jobsStats,charsAllInfo, jobsData, verlog, verArr} from '../abilitiesData'
import {jobsImgs} from '../importimgs.js'
import book from '../img/other/pergBgBig.png'
import dice from '../img/events/HeroEssence.png'
import ghost from '../img/events/ghostRed.png'
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


export {herodiv,mainsec}

let mainsec = document.createElement('section')
let info = document.createElement('div')
info.style.backgroundImage = 'url("' + book + '")'
info.style.backgroundSize = 'contain'
info.classList.add('row')
info.id = 'info'
let infoInf = document.createElement('div')
infoInf.classList.add('col-6', 'maininf')
infoInf.id = 'infoInf'
let smallHead = document.createElement('h3')
smallHead.innerHTML = 'Jobmania - Eternal Dungeon'
let updBtn = document.createElement('a')
updBtn.innerHTML = ' > '
updBtn.id = 'updbtn'
smallHead.appendChild(updBtn)
let desc = document.createElement('h5')
desc.innerHTML = 'is a roguelite dungeon crawler with a strategic deck-building and turn-based combat.'
let features = document.createElement('ul')
features.innerHTML = '<br><li><img src="' + dice + '"> Procedural enemies and event generation</li>'
                   + '<li><img src="' + dice + '"> 300+ Heroess</li>'
                   + '<li><img src="' + dice + '"> 200+ Jobs</li>'
                   + '<li><img src="' + dice + '"> 800+ Abilities</li>'
                   + '<li><img src="' + dice + '"> 20+ Chapters</li></br>'
let summary = document.createElement('h5')
summary.innerHTML = 'Countless combinations ensure great replayability. Try various builds, choose different paths'
let dicepic = document.createElement('img')
dicepic.id = 'dice'
dicepic.src = ghost
let dicepic2 = dicepic.cloneNode(true)
setInterval(function() {
  dicepic.style.animation = 'hithere 7s ease infinite'
  dicepic2.style.animation = 'hithere 7s ease infinite'
//  dicepic.style.animationIterationCount = '1';
}, 2000)
infoInf.append(smallHead, desc, features, summary, dicepic)

let updates= document.createElement('div')
updates.id = 'updates'
updates.classList.add('col-6', 'maininf')
let updatesH = document.createElement('h3')
updatesH.innerHTML = 'What\'s new'
let aboutBtn = document.createElement('a')
aboutBtn.innerHTML = ' < '
aboutBtn.id = 'aboutbtn'
updatesH.appendChild(aboutBtn)
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

    updates.append(updatesH, ver, news, dicepic2)
  })


let change = document.createElement('div')
change.classList.add('col-6')
change.id = 'change'

let div1 = document.createElement('div')
div1.classList.add('row', 'div')
div1.id = 'div1'
let img1 = document.createElement('img')
let img1div = document.createElement('div')
img1div.classList.add('col-6')
img1div.appendChild(img1)
img1.src = chosseHero
let txt = document.createElement('div')
txt.classList.add('col-6')
txt.id = 'txtdiv'
let txtp1 = document.createElement('h1')
txtp1.classList.add('txt')
txtp1.innerText = 'Choose'
let txtp2 = document.createElement('h1')
txtp2.classList.add('txt')
txtp2.innerText = 'Your'
let txtp3 = document.createElement('h1')
txtp3.classList.add('txt')
txtp3.innerText = 'Hero'
txt.append(txtp1, txtp2, txtp3)
div1.append(txt, img1div)

let div2 = document.createElement('div')
div2.classList.add('row', 'div')
div2.id = 'div2'
let img2 = document.createElement('img')
let img2div = document.createElement('div')
img2div.classList.add('col-6')
img2div.appendChild(img2)
//img2.src = chosseHero
let txt2 = document.createElement('div')
txt2.classList.add('col-6')
txt2.id = 'txtdiv'
let txt2p1 = document.createElement('h1')
txt2p1.classList.add('txt')
txt2p1.innerText = 'Assign'
let txt2p2 = document.createElement('h1')
txt2p2.classList.add('txt')
txt2p2.innerText = 'a'
let txt2p3 = document.createElement('h1')
txt2p3.classList.add('txt')
txt2p3.innerText = 'Job'
txt2.append(txt2p1, txt2p2, txt2p3)
div2.append(txt2, img2div)

let div3 = document.createElement('div')
div3.classList.add('row', 'div')
div3.id = 'div3'
let img3 = document.createElement('img')
let img3div = document.createElement('div')
img3div.classList.add('col-6')
img3div.append(img3)
//img3.src = chosseHero
let txt3 = document.createElement('div')
txt3.classList.add('col-6')
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
div3.append(txt3, img3div)

let div4 = document.createElement('div')
div4.classList.add('row', 'div')
div4.id = 'div4'
let img4div = document.createElement('div')
let img4 = document.createElement('img')
img4div.classList.add('col-6')
img4div.append(img4)
//img4.src = chosseHero
let txt4 = document.createElement('div')
txt4.classList.add('col-6')
txt4.id = 'txtdiv'
let txt4p1 = document.createElement('h1')
txt4p1.classList.add('txt')
txt4p1.innerText = 'Face'
let txt4p2 = document.createElement('h1')
txt4p2.classList.add('txt')
txt4p2.innerText = 'the'
let txt4p3 = document.createElement('h1')
txt4p3.classList.add('txt')
txt4p3.innerText = 'Unknown'
txt4.append(txt4p1, txt4p2, txt4p3)
div4.append(txt4, img4div)

let div5 = document.createElement('div')
div5.classList.add('row', 'div')
div5.id = 'div5'
let img5div = document.createElement('div')
let img5 = document.createElement('img')
img5div.classList.add('col-6')
img5div.append(img5)
//img4.src = chosseHero
let txt5 = document.createElement('div')
txt5.classList.add('col-6')
txt5.id = 'txtdiv'
let txt5p1 = document.createElement('h1')
txt5p1.classList.add('txt')
txt5p1.innerText = 'Crash'
let txt5p2 = document.createElement('h1')
txt5p2.classList.add('txt')
txt5p2.innerText = 'Your'
let txt5p3 = document.createElement('h1')
txt5p3.classList.add('txt')
txt5p3.innerText = 'Enemies'
txt5.append(txt5p1, txt5p2, txt5p3)
div5.append(txt5, img5div)

let div6 = document.createElement('div')
div6.classList.add('row', 'div')
div6.id = 'div6'
let img6div = document.createElement('div')
let img6 = document.createElement('img')
img6div.classList.add('col-6')
img6div.append(img6)
//img4.src = chosseHero
let txt6 = document.createElement('div')
txt6.classList.add('col-6')
txt6.id = 'txtdiv'
let txt6p1 = document.createElement('h1')
txt6p1.classList.add('txt')
txt6p1.innerText = 'Collect'
let txt6p2 = document.createElement('h1')
txt6p2.classList.add('txt')
txt6p2.innerText = ''
let txt6p3 = document.createElement('h1')
txt6p3.classList.add('txt')
txt6p3.innerText = 'Treasures'
txt6.append(txt6p1, txt6p2, txt6p3)
div6.append(txt6, img6div)

let div7 = document.createElement('div')
div7.classList.add('row', 'div')
div7.id = 'div7'
let img7div = document.createElement('div')
let img7 = document.createElement('img')
img7div.classList.add('col-6')
img7div.append(img7)
let txt7 = document.createElement('div')
txt7.classList.add('col-6')
txt7.id = 'txtdiv'
let txt7p1 = document.createElement('h1')
txt7p1.classList.add('txt')
txt7p1.innerText = 'How deep'
let txt7p2 = document.createElement('h1')
txt7p2.classList.add('txt')
txt7p2.innerText = 'can You'
let txt7p3 = document.createElement('h1')
txt7p3.classList.add('txt')
txt7p3.innerText = 'descend ?'
txt7.append(txt7p1, txt7p2, txt7p3)
div7.append(txt7, img7div)

let playBtnDiv = document.createElement('div')
playBtnDiv.id = 'gplay'
playBtnDiv.classList.add('row')
let playdiv = document.createElement('div')
playdiv.classList.add('col-6')
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
media.classList.add('col-6')
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
change.append(div1, div2, div3, div4, div5, div6, div7, playBtnDiv)

info.append(change, infoInf, updates)
//info.innerHTML= '<br><br><br><br><br>'
let charCont = document.createElement('div')
charCont.id = 'wrapper'
charCont.innerHTML = '<br><br><br><br><br><br>'
mainsec.append(info, charCont)

let herodiv = document.createElement('div')
herodiv.classList.add('row')
herodiv.id = 'herodiv'


jobsData.craft()
    .then(data => {
      jobsData.materials()
      jobsData.jobs()
    }).then(res => {
characters.chars()
  .then(char=> {
    getCharsImages()
        let i = 0
        while ( i <= 11) {
          let rand = Math.floor(Math.random() * charsImagesComplete.length)
          let imgi = document.createElement('div')
          imgi.classList.add('col', 'charimg')
          imgi.id = 'img'+i
          imgi.innerHTML = charsImagesComplete[rand].outerHTML
          herodiv.append(imgi)
          i++
        }
        let ind = 0
        while ( ind <= 11) {
          let rand = Math.floor(Math.random() * charsImagesComplete.length)
          let imgind = document.getElementById('img' + ind)
          imgind.innerHTML = imgind.innerHTML + charsImagesComplete[rand].outerHTML
          ind++
        }
        let charimgsAll = Array.from(document.getElementsByClassName('charimg'))
        charimgsAll.map(chimg => {
          Array.from(chimg.children).map(child => {
            child.style.position = 'absolute'
            child.style.top = '0'
            child.style.left = '0'
            child.style.height = '100px'
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
        // images changing inside slideshow (inside specific slide)
        let jobsImages = Object.entries(jobsImgs)
        let randChar = Math.floor(Math.random() * charsImagesComplete.length)
        let randJob = Math.floor(Math.random() * jobsImages.length)
        let unknownRand = Math.floor(Math.random() * unknown.length)
        let randDescend = Math.floor(Math.random() * descend.length)
        let randTreasure = Math.floor(Math.random() * treasures.length)
        let randFar = Math.floor(Math.random() * howfar.length)
        img1.src = charsImagesComplete[rand].src
        img2.src = jobsImages[randJob][1]
        img3.src = descend[randDescend]
        img4.src = unknown[unknownRand]
        img5.src = charsImagesComplete[rand].src
        img6.src = treasures[randTreasure]
        img7.src = howfar[randFar]
      //  let imgToChange2 = $('#img' + randimg)
      }, 2000)

    })
})
