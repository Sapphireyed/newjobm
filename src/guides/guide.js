import '../style.scss';
import './faq.scss'
import './guide.scss'

//import fontawesome from '@fortawesome/fontawesome-free'
import nav from '../nav/nav';
import { stickyNav, cursor } from '../basicfn/stickyNav.js'
import { toggle} from '../basicfn/toggle.js'

import theadimg from '../img/materials/secret training.png'
import {preload } from '../preload/preload.js'
var $ = require("jquery")

import gameinfo from '../img/guide/gameinfo.png'
import guideimg1 from '../img/guide/subhero1.jpg'
import guideimg2 from '../img/guide/subhero2.jpg'
import guideimg3 from '../img/guide/subhero3.jpg'
import guideimg4 from '../img/guide/subhero4.jpg'
import maxhpimg from '../img/attr/hp.png'
import strimg from '../img/attr/str.png'
import agiimg from '../img/attr/agi.png'
import intimg from '../img/attr/int.png'
import protect from '../img/attr/protect.png'

let maxhp = '<img src="' + maxhpimg + '" alt="maxhpicon" class="icon"><span class="maxhp">Max HP</span>';
let str = '<img src="' + strimg + '" alt="stricon" class="icon"><span class="str">Strength</span>';
let agi = '<img src="' + agiimg + '" alt="agiicon" class="icon"><span class="agi">Agility</span>';
let int = '<img src="' + intimg + '" alt="inticon" class="icon"><span class="int">Intelligence</span>';
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
contentDiv.classList.add('col-12', 'col-lg-3')
let contentH = document.createElement('h3')
contentH.innerHTML = 'Table of Contents'
let list = document.createElement('ol')
let i = 1;
while (i <= 5) {
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
      li.innerHTML = '<a href="#chars">Hero Analysis, Pairings, and Ratings</a>'
          break;
     case 5:
        li.innerHTML = '<a href="#subheroGuide">Sub-hero Guide</a>'
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
strbuildH.innerHTML = 'str Builds'
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

    let agibuildH = document.createElement('h5')
    agibuildH.innerHTML = 'Agility Builds'
    let agibuild = document.createElement('p')
    agibuild.innerHTML = 'Ah yes. The legendary “PILLS ONLY” builds, made popular here. Notably squishy.<br><br>'
        + 'Sample Team:<br>'
    + '<b>Infinity Blades</b>(start with <b>Trinity Blades</b> job for starter deck and swap into Infinity Blades), <b>Dragon Rider</b>, Any - kage<br>'
    + '<b>Infinity Blades</b>: Average AGI, deals 70 % AGI damage at turn end and 40 % AGI damage per action during Job On, making it a very strong Job On candidate<br>'
    + '<b>Dragon Rider</b>: Slight below average AGI, heals for 25 % of AGI per action when job on. 25 % STR reflect(this can break your combo). '
             + 'Subpar swap skill, since it’s very painful to swap into this job(you lose 20 % mHP).You will want to start the battle in this job and actively avoid swapping to it.<br>'
     +  '<b>Kage</b> Jobs: Elemental Masters, average AGI, good swap skills, stack element and 25 % AGI reflect while Job On.Agility Master.<br><br>'
    + '<b>Other Notable Jobs</b>:<br>'
    + '<b>Dragon Descendant</b>: Average AGI, excellent swap skill(spammable restrain that gets stronger the more it’s used)<br>'
    + '<b>Hawkeyes</b>: Blind immunity while job - on, draw + 1, AGI vulnerable and good damage swap skill.Low HP, sadly<br>.'
    + '<b>Phantom</b>: Humanoid Master, draw + 1, excellent swap skill, but also insanely low HP<br>.'
    + '<b>Starkiller</b>: High AGI, Matter Master, +1 STR / AGI, and possibly the strongest swap skill in the game.<br>'
    + '<b>Deadshot</b>: High AGI, +2 AGI, strong swap skill(cleanse blind for free), and a strong starting deck.Above - average HP for an AGI job.<br><br>'

    let hpbuildH = document.createElement('h5')
    hpbuildH.innerHTML = 'HP build'
    let hpbuild = document.createElement('p')
    hpbuild.innerHTML = 'HP builds offer some very satisfying bulk without sacrificing their offense or defense. They have steady damage, like AGI builds, but don\’t suffer from the same '
            + 'sustain problems(as much).They are also innately good for crawling in later levels, since the high bulk means that you don’t get one - tapped by problematic first - strikes.'

        + 'That being said, they are also rather restrictive job - wise; some of the jobs on this list can’t be substituted for others, making the overall flexibility crater if you run '
        + 'into the "Jobs Can\’t Level Up" rule.<br><br>'

            + '<b>Sample Team</b>:<br>'

        + '<b>Sacred Knight</b>, <b>Demon Possessor</b>, <b>Surgeon</b><br>'
        + '<b>Surgeon</b>: Already a flex option for other builds, Surgeon excels here.Its heal scales fully with your max HP, and it gives you Charge as well. Massive bonus. '
                + 'The Job On and end - of - turn bonuses scale with INT, so a bit of it is wasted, but you\’re ultimately looking at a great swap skill.<br>'
        + '<b>Demon Possessor</b>: Insane damage, but you’re playing with fire when you use this job. There is no substitute for this job for HP builds, since it will inflict 15 % of your '
                + 'maxHP as damage to the enemy after every action in Job On.<br>'
        + '<b>Sacred Knight</b>: Hallowed Blow for damage, heals for 25 % of maxHP and takes reduced damage while Job On.Has Light synergy.<br>'
        + '<b>Barrier Master</b>: The only source of Protect Master from a job.A bit heavy on the INT, and low on HP for a mHP - based job, but there aren’t that many substitutes.<br>'
        + '<b>Viking Legend</b>: HP and STR Master in one package.Swap skill applies HP Vulnerable, making it a good job to swap to first.There aren’t many sources of HP Vulnerable '
                + 'in the game, making it quite invaluable.<br><br>'

    let intbuildH = document.createElement('h5')
    intbuildH.innerHTML = 'int build'
    let intbuild = document.createElement('p')
    intbuild.innerHTML = ''


    let flexjobsH = document.createElement('h5')
    flexjobsH.innerHTML = 'Flex Jobs (Fit into any build; usually utility jobs'
    let flexjobs = document.createElement('p')
    flexjobs.innerHTML = '<b>Reaper</b> - gain lifesteal and mHP boost, balanced stats<br>'
        + '<b>Hawkeyes</b> - innate immunity to blind and draw + 1<br>'
        + '<b>Starkiller</b> - very high damage based on card draw'
        + '<b>Planet Destroyer</b> - very high early damage; good for low - level heroes<br>'
        + '<b>Surgeon</b> - applies charge and 35 % mHP heal on swap for some insane sustain and support<br>'
        + '<b>Herb Sage</b> - fixed damage swap skill with +3 Venom and + 2 Seed, immunity to Venom, Paralysis, and Bleed while Job On, and heals 70 % AGI at turn end<br><br>'

    jobAnalysis.append(jobH, jobText, strbuildH, strbuild, agibuildH, agibuild, intbuildH, intbuild, hpbuildH, hpbuild, flexjobsH, flexjobs)

    let charAnalysis = document.createElement('div')
    charAnalysis.id = 'chars'
    let charH = document.createElement('h2')
    charH.innerHTML = 'Hero Analysis, Pairings, and Ratings'
    let charText = document.createElement('p')
    charText.innerHTML = 'Here is a listing of <b>notable</b> heroes for different stat builds. <b>Not all</b> of them are listed, and many more than are here are <b>very viable</b>.'
    let strcharH = document.createElement('h5')
    strcharH.innerHTML = 'str-focused Heroes'
    let strChar = document.createElement('p')
    strChar.innerHTML = '<b>Odin</b> - a strong hero with Humanoid Master, Spirit Master, Creature Master, +1 STR, free attack with 50% lifesteal at turn end. '
                + 'Also has extreme burst with Zantetsuken on turn 4. Can flex into AGI builds with his innate + 2 AGI.<br>'

        + '<b>Orc King Grishnall</b> - an extremely straightforward STR Master, +2 STR, stat debuff immunity, +1 mHP, chill immune, and strong innate skills with low CD<br>'
        + '<b>Bahamut</b> - Blind immunity, allowing you to use Zantetsuken or Shogun base job without worrying about Iai Strike / Zantetsuken’s innate blind, charge / guard master, +1 maxHP<br<'
        + '<b>Son of Valhalla</b> - +2 STR, Guard Master, 1 - turn CD on Heavy Axe Smash<br>'
        + '<b>Legendary Knight Raziel</b> - AP + 1, combo master, but impossible to combo with as STR, since he deals AGI damage.However, he has a 1 - turn CD on Gravity and a 2 - turn CD '
                + 'on Wind Blade, making for high damage.<br>'
        + '<b>King Ansellus - Can be flexed as STR hero; he has Draw + 1, +2 STR, and blind immunity, which goes well with the Zantesuken job.Set your starter card as Zantetsuken and '
            + 'breeze through the first 100 floors<br><br>'

    let agicharH = document.createElement('h5')
    agicharH.innerHTML = 'agi-focused Heroes'
    let agiChar = document.createElement('p')
    agiChar.innerHTML = '<b>Yggdrasil</b> - +1 HP, Earth Master, heals for 25% of AGI after every action. Very strong sustain, and a 1-turn CD on Sonic Thrust (150% damage)<br>'
        + '<b>Zax</b> - King of bonus damage.Suffers from Draw - 1, but has 25 % AGI reflect, and deals 25 + 10 % of AGI damage after every action.Paralysis immunity.<br>'
        + '<b>Spider Queen Jorogumo</b> - Tankier version of Zax with slightly less damage. + 2 mHP, paralysis + dizzy immune, deals 25 % AGI damage after every action. 1 - turn CD on both of her skills.<br>'
        + '<b>King Ansellus</b> - generalist with Draw + 1, +3 INT / AGI, +2 STR, blind immunity.Good synergy with Starkiller job.<br><br>'

    let intcharH = document.createElement('h5')
    intcharH.innerHTML = 'int-focused Heroes'
    let intChar = document.createElement('p')
    intChar.innerHTML = 'As a whole, INT-based heroes have very strong sustain or low-CD burst skills.<br><br>'
        + '<b>Lonely Queen</b> - Draw + 1, +2 INT, reflect elemental status, and + 40 % INT shield at battle start.<br>'
        + '<b>Goblin King Glass</b> - Humanoid Master, +25 % INT reflect, chill / paralysis immunity, and low CD on usable skills; Goblin Cannon is available on first turn.<br>'
        + '<b>ErlKing</b> - +4 INT, +70 % INT shield at battle start, 1 - turn CD on both skills<br>'
        + '<b>Mermaid Princess Undine</b> - Water Master, +2 INT, +1 HP, 50 % overheal damage to opponent(doesn’t stack with Pure Faith from Pope job), 1 - turn CD on damage skill.<br>'
        + '<b>Oberon</b> - Wind Master, Int Master, Debuff Master, +1 INT, immunity to paralysis / chill / blind.<br>'
        + '<b>Legendary Knight Dante</b> - Combo Master, 100 % INT damage at end of turn, 100 % INT heal at end of turn.Long CD on burst damage skills.<br>'
        + '<b>The Lich King</b> - Lifesteal Master, +1 mHP, free revive, 1 - turn CD on Drain Knowledge for high damage and sustain.<br>'
        + '<b>Shiva</b> - 20 % damage - taken reduction, 150 % initial INT shield, Water Master, chill immunity, 1 - turn CD on damage spell.'
                + '(IMO, Shiva is the strongest survival - focused INT hero.)<br>'
        + '<b>Carbuncle</b> - Wind Master, +1 maxHP, 40 % INT heal after every action (IMO, strongest sustain option and a reliable source of damage with the Pope job).<br><br>'

    let hpcharH = document.createElement('h5')
    hpcharH.innerHTML = 'maxhp-focused Heroes'
    let hpChar = document.createElement('p')
    hpChar.innerHTML = '<b>Life Titan Aphylia</b> - <br>'
            + 'All Elemental <b>Titans</b> - <br>'
            + '<b>Archangel Michael</b> -<br>'
            + '<b>Archangel Gabriel</b> - <br>'

    charAnalysis.append(charH, charText, strcharH, strChar, agicharH, agiChar, intcharH, intChar, hpcharH, hpChar)

    let subheroesGuide = document.createElement('div')
    subheroesGuide.id = 'subheroGuide'
    let subheroesH = document.createElement('h2')
    subheroesH.innerHTML = 'Sub-hero guide'
    let subheroes = document.createElement('div')
    subheroes.classList.add('row')
    let subheroesImg = document.createElement('div')
    subheroesImg.classList.add('col-12', 'col-lg-3')
    let guideimg1src = document.createElement('img')
    guideimg1src.src = guideimg1
    subheroesImg.appendChild(guideimg1src)
    let subheroesText = document.createElement('p')
    subheroesText.classList.add('col-12', 'col-lg-9')
    subheroesText.innerHTML = 'An important part of progression is getting a sub-job for your hero, which is a means of permanent progression.'
        + 'Here, we can see that this hero has <b>never</b> entered the dungeon before - the highest level he has reached is 0.'
        + 'As you crawl to higher floors of the dungeon, the recorded floor will rise, and you will get achievements unlocking higher level - up caps.'
        + 'On the right - hand circle, you can see the upgrade option.Here, you can pay essence to upgrade the hero.If a hero has never entered the dungeon, the maximum upgrade level is 10.<br><br>'
        + 'For example, I have now upgraded him to level 10. As you can see, the upgrade option is gone, and I have unlocked the secondary hero slot. I can assign a new hero and use its passives, '
            + 'and swap to it in a dungeon run.Note that you cannot fully utilize the sub - hero system until you have upgraded your main hero to + 50, which will allow you to use other 5* heroes '
            + 'as sub - heroes.<br></p>'

    let subhero2 = document.createElement('div')
    subhero2.innerHTML = '<img class="col-12 col-lg-4" src="' + guideimg2 + '" alt="subhero examples">'
                        + '<img class="col-12 col-lg-4" src = "' + guideimg3 + '" alt = "subhero examples">'
                        + '<img class="col-12 col-lg-4" src = "' + guideimg4 + '" alt = "subhero examples"> '

    let subheroesText2 = document.createElement('p')
    subheroesText2.innerHTML = 'For heroes with strong unique skills, getting them to +25 is a must - this allows you to set 1 copy of either innate ability (like Zantetsuken for Odin) '
            + 'without having to roll it in the gacha.This can significantly simplify your early - game experience, since you can then use that card as a starter once you reach any merchant.'

        subheroes.append(subheroesText, subheroesImg)
    subheroesGuide.append(subheroesH, subheroes, subhero2, subheroesText2)
        maindiv.append(intro, newbieGuide, beginnerTips, jobAnalysis, charAnalysis, subheroesGuide)
        maindiv.innerHTML = maindiv.innerHTML.replace(/\bstr\b|\bstrength\b/gi, str)
        maindiv.innerHTML = maindiv.innerHTML.replace(/\bagi\b|\bagility\b/gi, agi)
        maindiv.innerHTML = maindiv.innerHTML.replace(/\bmaxhp\b|\bhp\b/gi, maxhp)
        maindiv.innerHTML = maindiv.innerHTML.replace(/\bint\b|\bintelligence\b/gi, int)


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
}, 10)
    if (w < targetWidth) {
        mainsect.append(contentDiv, maindiv)
        console.log('dupa')
    } else {
        mainsect.append(maindiv, contentDiv)
    }

document.body.append(mainsect)
let skip = Array.from(document.getElementsByClassName('skip'))
skip[0].style.animation = 'skipTop 20s linear infinite alternate'
skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
}


//console.log(gsheet)
let button = document.getElementById('navbtn')
let menu = document.getElementById('collapsemenu')
toggle(menu, button)
