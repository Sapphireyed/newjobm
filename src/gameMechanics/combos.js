import '../style.scss';
import './combos.scss';

import nav from '../nav/nav';
import { stickyNav, cursor } from '../basicfn/stickyNav.js'
import { toggle } from '../basicfn/toggle.js'
import theadimg from '../img/materials/compass.png'
import { preload } from '../preload/preload.js'
var $ = require("jquery")

import combo0 from '../img/guide/combo0.png'
import combo1 from '../img/guide/combo1.png'
import element from '../img/icons/element.png';
import elementCycle from '../img/guide/elements.jpg'
import maxhpimg from '../img/attr/hp.png'
import strimg from '../img/attr/str.png'
import agiimg from '../img/attr/agi.png'
import intimg from '../img/attr/int.png'
import fire from '../img/icons/fireCol.png'
import water from '../img/icons/waterCol.png'
import earth from '../img/icons/earthCol.png'
import wind from '../img/icons/windCol.png'
import thunder from '../img/icons/thunderCol.png'
import light from '../img/icons/lightCol.png'
import dark from '../img/icons/darkCol.png'
import blind from '../img/abilities/blindCol.png'
import depress from '../img/abilities/depressCol.png'
import burn from '../img/abilities/burnCol.png'
import chill from '../img/abilities/chillCol.png'
import dizzy from '../img/abilities/dizzyCol.png'
import seed from '../img/abilities/seedCol.png'
import restrain from '../img/abilities/restrainCol.png'
import bleed from '../img/abilities/bleedCol.png'
import injury from '../img/abilities/injuryCol.png'
import insane from '../img/abilities/insaneCol.png'
import paralysis from '../img/abilities/paralysisCol.png'
import venom from '../img/abilities/venomCol.png'

document.body.append(nav(), preload)
cursor()

let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
let targetWidth = 768;
let targetMid = 1000

document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundColor = 'dimgrey'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition = 'left top'
//add sticky nav
var headernav = document.getElementById("navMain");
window.addEventListener('scroll', function () {
    stickyNav(headernav)

})

let agi = '<span class="agi"><img class="icon" src="' + agiimg + '" alt="str"/><b> AGI</b></span></span>'
let str = '<span class="str"><img class="icon" src="' + strimg + '" alt="str"/><b> STR</b></span></span>'
let int = '<span class="int"><img class="icon" src="' + intimg + '" alt="str"/><b> INT</b></span></span>'
let maxhp = '<span class="maxhp"><img class="icon" src="' + maxhpimg + '" alt="hp"/><b> HP</b></span></span>'
let fireimg = '<img class="icon" src="' + fire + '" alt="hp" />'
let waterimg = '<img class="icon" src="' + water + '" alt="hp" />'
let earthimg = '<img class="icon" src="' + earth + '" alt="hp" />'
let windimg = '<img class="icon" src="' + wind + '" alt="hp" />'
let thunderimg = '<img class="icon" src="' + thunder + '" alt="hp" />'
let lightimg = '<img class="icon" src="' + light + '" alt="hp" />'
let darkimg = '<img class="icon" src="' + dark + '" alt="hp" />'
let blindimg = '<img class="icon" src="' + blind + '" alt="hp" />'
let depressimg = '<img class="icon" src="' + depress + '" alt="hp" />'
let burnimg = '<img class="icon" src="' + burn + '" alt="hp" />'
let chillimg = '<img class="icon" src="' + chill + '" alt="hp" />'
let seedimg = '<img class="icon" src="' + seed + '" alt="hp" />'
let paralizedimg = '<img class="icon" src="' + paralysis + '" alt="hp" />'
let dizzyimg = '<img class="icon" src="' + dizzy + '" alt="hp" />'

window.addEventListener('load', function () {

    let mainsect = document.createElement('section')
    mainsect.id = 'mainsect'
    let disclaimer = document.createElement('p')
    disclaimer.id = 'disclaimer'
    disclaimer.innerHTML = 'Guide content by Burtgang#9627'
    let header = document.createElement('div')
    let h1 = document.createElement('h1')
    h1.innerHTML = 'COMBOS'
    header.appendChild(h1)
    mainsect.append(disclaimer, header)

    let div1 = document.createElement('div')
    div1.classList.add('row');
    div1.id = 'div1'
    let subDiv1 = document.createElement('div')
    subDiv1.classList.add('col-12', 'col-md-3')
    let img1 = document.createElement('img')
    img1.src = combo0
    subDiv1.appendChild(img1)

    let subDiv2 = document.createElement('div')
    subDiv2.classList.add('col-12', 'col-md-6')
    subDiv2.innerHTML = '<p>There are two types of combo counters in Jobmania, <span class="str"><b>S</b></span><span class="agi"><b>T</b></span><span class="int"><b>Y</b></span><span class="maxhp"><b>L</b></span><b>E</b> and element.'
        + 'Style Combo - This is split into 4 different types, ' + agi + ', ' + str + ', ' + int + ' and ' + maxhp + '.'
            + 'Each time you use or preview an ability, it will have a colored pip indicating which type of combo counter the action will generate, and how many.</p>'

    let subDiv3 = document.createElement('div')
    subDiv3.classList.add('col-12', 'col-md-3')
    let img2 = document.createElement('img')
    img2.src = combo1
    subDiv3.appendChild(img2)

    div1.append(subDiv1, subDiv2, subDiv3)

    let div2 = document.createElement('div')
    div2.id = 'div2'
    let h4 = document.createElement('h4')
    h4.innerHTML = '<span class="str"><b>S</b></span><span class="agi"><b>T</b></span><span class="int"><b>Y</b></span><span class="maxhp"><b>L</b></span><b>E</b> breakdown'
    div2.append(h4)
    div2.innerHTML = div2.innerHTML + agi + '<p> Agility specializes in dealing multiple small hits, which drive up the combo counter quickly. '
                                            + 'As a result, it\'s easier to generate '+ agi + ' combos than most others.The cards tend to be low in cost, to better make use of the ability '
                                            + 'to spend cards.</p>' 
                                            + '<p>Every time the ' + agi + ' combo hits a multiple of 8 (16, 24, etc.), you draw an ability. Every time the ' + agi + ' combo hits a multiple of 40, '
                                            + 'the same abilities already discarded(for example, if you\'ve discarded the ability "Stab" for AP earlier that turn), can be discarded again '
                                            + 'for AP(if you have another copy of it TO discard).You also gain 2 AP</p> '
                                    + str + '<br>  Strength tends to deal big single hits. The cards often self-boost or make use of Protect Pierce.'
                                        + 'Every time the ' + str + ' combo hits a multiple of 6, you gain a buff - Guard if you have no Guard buff, and Charge otherwise.'
                                        + 'There is no "big" 40 - combo reset or bonus.<br><br>'
                                    + int + '<br>Intelligence tends to deal smaller single hits or use effects to make single large hits. The cards often provide buffs or healing, '
                                            + 'and occasionally make use of elements.<br>'
                                            + 'Every time the ' + int + ' combo hits a multiple of 8(16, 24, etc.), you gain 1 free AP.Additionally, when you hit 40 combo count, '
                                            + 'the cost of all your job\'s abilities is set to 0 again(so you can use them for free again once), and you draw 1 abilities.<br><br>'
                                    + maxhp + '<br>Tends to deal medium-large single hits. The cards often provide Protect bonus or maxHP buffs. (In-game, this color is represented '
                                            + 'by a lighter shade of yellow.)'
                                            + 'Every time the ' + maxhp + ' combo hits 6, the player heals for 15 % of maximum health.If your health is full, you gain 10 % protection instead.'
                                    + '<br><br><span class="agi">C</span><span class="str">o</span><span class="maxhp">m</span><span class="int">b</span><span class="agi">o</span>'
                                    + '<span class="str"> B</span><span class="maxhp">l</span><span class="int">e</span><span class="agi">n</span><span class="str">d</span>'
                                            + '<br>Abilities with "Combo Blend" will add +1 or +2 to the CURRENT combo count, regardless of the type of actions in the ability itself '
                                            + '(for example, Gemstone Heal, despite triggering STR / AGI / INT - type healing, will still only add 1 to the existing combo counter).'
                                            + 'Just think of combo blend cards as a rainbow addition.'
        + '<br><br><br><b>Not</b> all abilities generate combo count. Many buff/debuff cards and actions don\'t generate combo count. '
        + '<br>Do keep in mind, however, that many jobs and heroes also add an extra action after every ability played, which WILL drive up your combo counter, even if the original ability played did not.'
        + '<br>For example, <b>Archangel Michael</b>, as seen above, generates 1 stack of ' + maxhp + ' combo at the end of each turn, because he heals himself.'
        + '<br><br>Other heroes, such as <b>Underground Ruler Zax</b>, deal additional hits after EACH action.'
        + 'For example, if Zax uses the ability "Assassinate", he will gain 3 ' + agi + ' combo instead of 1, since he will deal 1 hit with Assassinate, and then 2 hits from his passive ' + agi + ' damage.'
        + 'This can greatly complicate stacking, so keep that in mind.'

    let breaker = document.createElement('div')
    breaker.innerHTML = '<img src="' + element + '" width="90" height="90" class="breakimg">'
    let div3 = document.createElement('div3')
    div3.id = 'div3'
    let elH4 = document.createElement('h4')
    elH4.innerHTML = '<span class="fire"><b>E</b></span><span class="light"><b>L</b></span><span class="earth"><b>E</b></span><span class="water"><b>M</b></span><span class="wind"><b>E</b></span>' +
        '<span class="dark"><b>N</b></span><span class="thunder"><b>T</b></span>(al) Breakdown'
    let div3Cont = document.createElement('p')
    div3Cont.innerHTML = 'The ELEMENT counter stacks in much the same way; however, there are different stack limits, and elements are generally slower. They also do NOT have an inherent stack bonus, '
    + 'though there ARE abilities that utilize all your elemental stacks.'
        + 'Elemental progress is tracked via the outer ring(4 portions of the circle light up) and via letters on top of the combo counter.Every time FOUR of the same element is used in a row, '
        + 'a single stack of the elemental buff is gained.These buffs are shown the bottom of the screen, with a stack ranging from 5(base) to 10(with element master).</p>'
        + '<br><img src="' + elementCycle + '" alt="elementsCycle" class="elementCycle"><br>'
        + '<p><span class="light">Li</span> for ' + lightimg + '<span class="light"><b> Light</b></span> - Each stack increases damage dealt against enemies with ' + darkimg
                + '<span class="dark"> Dark </span>element or ' + blindimg + '<span class="blind"> Blinded </span>by 5%. Lose a stack when hit by ' + darkimg + '<span class="dark"> Dark</span>.<br><br>'
        + '<span class="dark">Dr</span> for ' + darkimg + '<span class="dark"><b> Dark</b> </span>- Deal 5 % bonus per stack to enemies with ' + lightimg + '<span class="light"> Light </span>element or '
                + depressimg + '<span class="depress"> Depress</span>. Lose a stack when hit by' + lightimg + '<span class="light"> Light</span>.<br><br> '
        + '<span class="water">Wa</span> for ' + waterimg + '<span class="water"><b> Water</b></span> - Each stack increases your damage against enemies with ' + fireimg
        + ' <span class="fire"> Fire</span> element or ' + chillimg + '<span class="chill"> Chilled</span> by 5 %.Lose a stack when hit by ' + thunderimg + '<span class="thunder">Thunder</span>.<br><br>'
        + '<span class="thunder">Th</span> for ' + thunderimg + '<span class="thunder"><b> Thunder</b></span> - Deal 5 % bonus per stack to enemies with ' + waterimg + '<span class="water">Water</span> element or '
                + paralizedimg + ' <span class="paralysis">Paralysis</span>. Lose a stack when struck by ' + earthimg + '<span class="earth">Earth</span> element.<br><br> '
        + '<span class="fire">Fi</span> for ' + fireimg + '<span class="fire"> Fire</span> - Deal 5 % bonus per stack to enemies with ' + windimg + '<span class="wind">Wind</span> element or '
                + burnimg + '<span class="burn">Burn</span>.Lose a stack when struck by ' + waterimg + '<span class="water">Water</span>.<br><br> '
        + '<span class="earth">Ea</span> for ' + earthimg + '<span class="earth">Earth</span> - Deal 5 % bonus per stack to enemies with ' + thunderimg + '<span class="thunder">Thunder</span>'
                + 'element or ' + seedimg + '<span class="seed">Seed</span>.Lose a stack when struck by ' + windimg + '<span class="wind">Wind</span>.<br><br> '
        + '<span class="wind">Wi</span> for ' + windimg + '<span class="wind">Wind</span> - Deal 5 % bonus per stack to enemies with ' + earthimg + '<span class="earth">Earth</span>'
                + 'element or ' + dizzyimg + '<span class="dizzy">Dizzy</span>.Lose a stack when struck by ' + fireimg + '<span class="fire">Fire</span>.<br><br> '

        + 'Elemental damage inherently deals 20 % (30 % when upgraded) extra damage to enemy weaknesses, on top of the bonus per buff stack.You can use this to get some really high damage!</p>'

    div3.append(elH4, div3Cont)

    mainsect.append(div1, div2, breaker, div3)
    document.body.appendChild(mainsect)
    let skip = Array.from(document.getElementsByClassName('skip'))
    skip[0].style.animation = 'skipTop 20s linear infinite alternate'
    skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
})



//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)