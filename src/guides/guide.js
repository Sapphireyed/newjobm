import '../style.scss';
import './faq.scss'
import './guide.scss'

//import fontawesome from '@fortawesome/fontawesome-free'
import nav from '../nav/nav';
import { stickyNav, cursor } from '../basicfn/stickyNav.js'
import { toggle} from '../basicfn/toggle.js'
import { jobs} from '../jobs/jobsjs.js'
//
import theadimg from '../img/materials/secret training.png'
import stonesrc from '../img/other/spaseStoneSol.png'
import {preload } from '../preload/preload.js'
import { elements, elStatuses} from './elements.js'
var $ = require("jquery")

import gameinfo from '../img/guide/gameinfo.png'
document.body.append(nav(), preload)
cursor()
//let playBtnDiv = document.getElementById('gplay')

let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
let targetWidth = 768;
let targetMid = 1000

let section = $('#jobsmain')
let navmain = document.getElementById('navMain')
//toggleSide(sidenav, section, navmain)
document.body.style.backgroundImage = 'url("' + theadimg + '")'
document.body.style.backgroundColor = 'dimgrey'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition= 'left top'
//add sticky nav
var headernav = document.getElementById("navMain");
window.addEventListener('scroll', function() {
  stickyNav(headernav)

})

window.onload = function(){

let mainsect = document.createElement('section')
mainsect.id = 'mainsect'
mainsect.classList.add('row')

let contentDiv = document.createElement('div')
contentDiv.id = 'contentDiv'
contentDiv.classList.add('col-3')
let contentH = document.createElement('h3')
contentH.innerHTML = 'Table of Contents'
let list = document.createElement('ol')
let i = 1;
while (i <= 10) {
  let li = document.createElement('li')
  switch (i) {
    case 1:
      li.innerHTML = '<a href="#newbie">Newbie Guide</a>'
      break;
    case 2:
      li.innerHTML = '<a href="#tips">Beginner Tips</a>'
      break;
    case 3:
      li.innerHTML = '<a href="#jobs">Job Analysis, Pairings, and Ratings</a>'
      break;
    case 4:
      li.innerHTML = '<a href="#heroes">Hero Analysis, Pairings, and Ratings</a>'
      break;
    default:

  }
  list.append(li)
  i++
}

contentDiv.append(contentH, list)

let maindiv = document.createElement('div')
maindiv.classList.add('col-lg-9', 'col-12')
maindiv.id = 'mainguide'

let intro = document.createElement('h5')
intro.id = 'intro'
intro.innerHTML = '<em>Guide content by Burtgang#9627<em>'

let newbieGuide = document.createElement('div')
newbieGuide.id = 'newbie'
let newbieH = document.createElement('h2')
newbieH.innerHTML = 'Newbie Guide'
let newbieText = document.createElement('p')
newbieText.innerHTML = 'Just started out? No worries. This will explain the basic combat system for you so that you can start delving into the dungeon.'
                      + '<br>Key:<br>'
                      + 'Red circle : press around location for further information. (reading these will provide further info)'
                      + 'Arrow circle : Drag in the indicated direction (hero abilities have cooldowns; job swaps cost AP)<br>'
                      + 'The game explains this in the tutorial, but the text is easy to miss.'
                      + 'These indicators should help you to figure out which locations will provide you with more information.'
let newbieText2 = document.createElement('p')
newbieText2.innerHTML = 'What Is AP:<br>'
+ 'AP or Action Points are needed in order to do many actions in Job Mania. Switching jobs (after the first free switch), using ability cards to do damage, heal, buff, debuff etc are all based on the AP available. With so many possible actions, but so little AP, knowing how to manage your AP is very important.'

+ 'Some actions require AP, but you can switch jobs to use their active ability for free once each turn. It’s free, and we recommend using these to your advantage.'

+ '<br><br>Getting, Regaining, and Maintaining AP:<br>'
+ 'AP is regained each round, and you start each round with 3. It can be increased via certain classes, Agility Combos (explained in the combo section), certain Abilities Cards and discarding Ability Cards. Each Ability Card can only be discarded once per turn (unless reset via AGI combo), and gives +1 AP upon being discarded.'

+ 'Certain debuffs will also reduce your AP - Chilled, for example.'

+ '<br><br>What are Jobs:<br>'
+ 'Jobs are the classes in Job Mania and each comes with a different starting deck of Ability Cards. Each job also may come with Passive and/or Active abilities which could activate at the beginning, during or at the end of the battle. The Jobs themselves can be anything from straight up damage, to healing, buffing/debuffing, DoTs etc with many flavors in between. '
+ 'Each Job has a rank, with 1 Star being a basic Job to 5 Star being the highest tier. Jobs can also be combined with certain items to create new, higher tier Jobs.'

+ '<br><br>Job Switching:<br>'
+ 'When starting a run, you will be given a choice of a starting job. This job will determine what Ability Cards you have access to in the beginning. Once the run starts, you will be given a second class that of which is randomly picked from all unlocked Jobs. Having two jobs allows access to Job Switching. Certain jobs have active abilities with each activating during the swapping of Jobs. Each swap will trigger the listed ability with the first three swaps costing 0 AP. However, each swap     will cause the Job to cost 1AP more than the previous activation.'
+ 'There are also “Job On” Abilities to think about during Job Switching.'
+ 'Any passives which specify “Job On” require that job to be the middle/main job.'

+ '<br><br>Obtaining New Jobs:<br>'
+ 'There are many Jobs available in Job Mania and to get them, knowing how to Combine Jobs is the key. When first starting Job Mania, the only available job is “Jobless”. In order to get different Jobs, the “Jobless” Job must be Combined with certain Materials to create new Jobs. The first batch of Materials are sold in the Market for 4,000 gold apiece'
+ 'Each of the newly created Jobs will each branch out and require multiple different Materials to Combine with for an even more diverse set of Jobs. Farther Materials can be obtained within the'
+ 'Gacha for either Gold or Crystals.'

+ 'In case you didn’t understand something, please press/hold press that location OR tap the  “?” icon around it to read the in-game description.'

let infopic = document.createElement('img')
infopic.src = gameinfo
newbieGuide.append(newbieH, newbieText, infopic, newbieText2)

let beginnerTips = document.createElement('div')
beginnerTips.id = 'tips'
let tipsH = document.createElement('h2')
tipsH.innerHTML = 'Beginner Tips'
let tipsText = document.createElement('p')
tipsText.innerHTML = 'Things to know when you first start:<br>'

+ '<br>1.) After you craft a job for the first time, it can potentially show up in your subsequent dungeon runs.'
+ '<br>2.) The market/gacha only stocks abilities from categories that you have unlocked (i.e., insane, wind, fire, etc.) These new ability types are unlocked by clearing missions, which are purchased in the market.'
+ '<br>3.) You can bring 1 ability into the dungeon as a 1-use item, and it will remain in your deck throughout the entire run.'
+ '<br>4.) You can set a job loadout for the dungeon and force only the jobs in the loadout to spawn by crafting over 10 jobs in any * category, and then filling out a loadout slot via the book icon on the job page.'
+ '<br>Remember to hit "set" if you do this'
+ '<br>5.) Your starting "deck" is based on the job you chose at the beginning of the run. These basic cards will remain even if you swap out your initial job during the run.'
+ '<br>Your deck can only be edited by acquiring new cards (merchant, encounters), or by removing cards (merchant, curse removal fairy).'
+ '<br>6.) Turn on your auto-save checkpoint in ‘settings’. Otherwise, even after you buy the perk, you will have to hit "save" each time you venture into the dungeon.'

beginnerTips.append(tipsH,tipsText)

let jobAnalysis = document.createElement('div')
jobAnalysis.id = 'jobs'
let jobH = document.createElement('h2')
jobH.innerHTML = 'Job Analysis, Pairings, and Ratings'
let jobText = document.createElement('p')
jobText.innerHTML = 'Well, here is the meat and potatoes of the guide. Here are some potential job combos that you can enjoy for different builds.'
                  + 'There are 4 primary builds, and then there are elemental builds. You can mix and match most jobs to your liking, but your runs will be more effective if you use synergistic jobs - jobs that match your damage type.'
                  + 'I’ve included some sample job combinations below for you to start out with. The job in BOLD will be your starting job so that you can use that job’s starting deck. Bear in mind that these are just suggestions. You do not have to follow these builds specifically - they are just to give you an idea of what you can do.'
let strbuildH = document.createElement('h5')
strbuildH.innerHTML = '<b><span style="color:red">Str Builds</span></b>'
let strbuild = document.createElement('p')
strbuild.innerHTML = '<b>Sample Team:</b><br>'

+ '<br><b><span class="job">Shogun</span>, <span class="job">Arena Champion</span>, <span class="job">Shaolin Master</span></b>'
+ '<br><b><span class="job">Shogun</span>:</b> Stands head and shoulders above the other STR-based jobs for its innate sustain, humanoid mastery, and excellent swap skill. It’s also not a bad starting job if you can deal with the innate blind that Iai Strike has (this can be dealt with by either running Hawkeyes, using a blind-immune character like King Ansellus or Bahamut, or setting an Elixir as your first draw.)'
+ '<br><b><span class="job">Arena Champion</span>:</b> Has very solid stats and an excellent starting deck if you don’t like the Shogun’s starter deck.'
+ '<br><b><span class="job">Shaolin Master<span class="job">:</b> Doesn’t have a good starting deck, but has a very useful -30% damage taken during Job On, and gives a natural +1 STR/HP. The swap skill is also very solid and universally strong against just about anything due to Matter Master.'

+ '<br><br>Other Notable Jobs:<br>'
+ '<span class="job"><b>Demon Knight</b></span> - Above-average HP for a STR job, high STR, good starting deck (0 cost cards, charge abilities, and high damage)'
+ '<br><span class="job"><b>Oblivion Knight</b></span> - Even higher HP, high STR, bad starting deck (uses INT cards), mediocre swap skill (Insanity damage is based on your int). Basically a worse stat stick.'
+ '<br><span class="job"><b>Dragon Slayer</b></span> - Even HIGHER HP, high STR, good starting deck, but not a particularly notable job later on. Take it for the deck if you want; the swap skill is not very good.'
+ '<br><span class="job"><b>Dragon Hunter</b></span> - High HP, +2 HP boost, Creature Master, strong swap skill, bad starting deck'
+ '<br><span class="job"><b>Viking Legend</b></span>: Above-average HP, extremely high STR, very good starting deck, but rather weak passives (STR/HP Mastery). Much better in an HP-focused build.'
+ '<br><span class="job"><b>Planet Destroyer</b></span>: Average HP, highest STR, good swap skill. Deck is useless past around F80 and must be replaced, but is good for early cheese.'

jobAnalysis.append(jobH,jobText, strbuildH, strbuild)
maindiv.append(intro, newbieGuide, beginnerTips, jobAnalysis)

let collapse = document.createElement('a')
collapse.innerHTML = ' - '
setTimeout(function(){
  let guideNames= Array.from(document.querySelectorAll('#mainguide h2'))
  guideNames.map(name => {
    name.append(collapse.cloneNode(true))
    name.onclick = function() {
      $(this).parent().children().not($(this)).toggle()
      this.children[0].innerHTML == ' + ' ? $(this).parent().find('a').html(' - ') : $(this).parent().find('a').html(' + ')
    }
  })
},10)
mainsect.append(maindiv, contentDiv)
document.body.append(mainsect)
document.getElementById('skip').style.display = 'block'
}


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
