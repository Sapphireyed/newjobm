import {jobmain} from '../jobs/job/jobmain.js'
import { charmain } from '../chars/char/charmain.js'
import { materialsLocal, matsLoc, wordsLoc } from '../local/local.js';
import {abilities, descFinale, abilSkills, abilEffects, abilTraits,
        passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        craft, jobsStats } from '../abilitiesData.js'
import {getMatImgs, getJobImgs, matImagesComplete, jobImagesComplete } from '../img/imgsHTML.js'
//import {whichChar} from '../char.js'
import star from '../img/events/StarColor.png'
import hpimg from '../img/other/hp.png'
import strimg from '../img/other/str.png'
import agiimg from '../img/other/agi.png'
import intimg from '../img/attr/int.png'
import { splitDesc, splitApply } from './splitFn.js'
import {rarityFn} from './rarity.js'
import { preload } from '../preload/preload.js'

export function openNew(page, arr, i, abilArr, abilskills, abileffects, abiltraits, passivesarr, passivedesc, passiveskills, passiveeffects, passivetraits, table = 'table') {
    let lang = document.getElementById('langSel')
    var abil = abilArr
    var jobItem = arr[i-1]
//    var jobItem = Object.values(arr[i - 1])
    var win = window.open(page +'.html')
    // fires in the new tab
    var newWin = setTimeout(function () {
        win.document.getElementById('langSel').value = lang.value
        console.log(win.document.getElementById('langSel').value)
      win.document.body.appendChild(preload)
      var header = win.document.getElementById('jobheader')
      header.innerHTML = jobItem[1]

    //  attributes hero
      let hp = win.document.getElementById('hp')
      hp.innerHTML = '<img src="' + hpimg + '" alt="hp" class="hpicon"> HP: <span class="spanattr" id="' + Math.ceil(jobItem[3] * 0.75)  + '">' + Math.ceil(jobItem[3] * 0.75)  + '</span>'
      let str = win.document.getElementById('str')
      str.innerHTML = '<img src="' + strimg + '" alt="str" class="stricon"> Strength: <span class="spanattr"  id="' + Math.ceil(jobItem[4] * 1.5) + '">' + Math.ceil(jobItem[4] * 1.5) + '</span>'
      let agi = win.document.getElementById('agi')
      agi.innerHTML = '<img src="' + agiimg + '" alt="agi" class="agiicon"> Agility: <span class="spanattr"  id="' + Math.ceil(jobItem[5] * 1.5) + '">' + Math.ceil(jobItem[5] * 1.5)+ '</span>'+ '</span>'
      let int = win.document.getElementById('int')
      int.innerHTML = '<img src="' + intimg + '" alt="int" class="inticon"> Intelligence: <span class="spanattr"  id="' + Math.ceil(jobItem[6] * 1.5) + '">' + Math.ceil(jobItem[6] * 1.5) + '</span>'
      //attributs en
      if (page !== 'job') {
        let race = win.document.getElementById('race')
        race.innerHTML = jobItem[15]
        let acq = win.document.getElementById('acq')
        acq.innerHTML = 'Acquire: ' + jobItem[16]
        let hpEn = win.document.getElementById('hpEn')
        hpEn.innerHTML = '<img src="' + hpimg + '" alt="hp" class="hpicon"> HP: <span class="spanattr" id="' + jobItem[3] + '">' + jobItem[3]+ '</span>'
        let strEn = win.document.getElementById('strEn')
        strEn.innerHTML = '<img src="' + strimg + '" alt="str" class="stricon"> Strength: <span class="spanattr"  id="' + jobItem[4] + '">' + jobItem[4] + '</span>'
        let agiEn = win.document.getElementById('agiEn')
        agiEn.innerHTML = '<img src="' + agiimg + '" alt="agi" class="agiicon"> Agility: <span class="spanattr"  id="' + jobItem[5] + '">' + jobItem[5] + '</span>'
        let intEn = win.document.getElementById('intEn')
        intEn.innerHTML = '<img src="' + intimg + '" alt="int" class="inticon"> Intelligence: <span class="spanattr"  id="' + jobItem[6] + '">' + jobItem[6] + '</span>'
        let herobtn = win.document.getElementsByClassName('navbtns')[0]
        let enemybtn = win.document.getElementsByClassName('navbtns')[1]
        let heroAttr = document.getElementById('attrsAttrs')
        let enemyAttr = document.getElementById('attrsAttrsEn')
        table == 'heroes' ? herobtn.classList.add('active') : ''

      }

        let beginner, easy, medium, hard, boss
        beginner = wordsLoc.filter(loc => loc[0] == 'EnemyBeginner')
        easy = wordsLoc.filter(loc => loc[0] == 'EnemyEasy')
        medium = wordsLoc.filter(loc => loc[0] == 'EnemyMedium')
        hard = wordsLoc.filter(loc => loc[0] == 'EnemyHard')
        boss = wordsLoc.filter(loc => loc[0] == 'EnemyBoss')
        //change the new tab look based on job/char rarity
        switch (jobItem[2]) {
            case beginner[0][1]:
            case beginner[0][2]:
            case beginner[0][3]:
            case '1':
                win.document.body.classList.add('job1star')
                break;
            case easy[0][1]:
            case easy[0][2]:
            case easy[0][3]:
            case '2':
                win.document.body.classList.add('job2star')
                break;
            case medium[0][1]:
            case medium[0][2]:
            case medium[0][3]:
            case '3':
                win.document.body.classList.add('job3star')
                break;
            case hard[0][1]:
            case hard[0][2]:
            case hard[0][3]:
            case '4':
                win.document.body.classList.add('job4star')
                break;
            case boss[0][1]:
            case boss[0][2]:
            case boss[0][3]:
            case '5':
                win.document.body.classList.add('job5star')
                break;
        }
        //regex to check if there are any kewords to be put in brackets
let myreg = /([A-Z])\w+/gi
        // PASSIVE & SWITCH
        if (page == 'char') {

        } else if (page == 'job') {
          let rarity = win.document.getElementById('rarity')
          rarityFn(rarity, jobItem[2], 'heroes')
          let passiveH = win.document.getElementById('passiveH')
          let passiveDesc = win.document.getElementById('passiveDesc')
          let passiveTraits = win.document.getElementById('passiveTraits')
          var ptraits = splitApply(passivetraits, jobItem[7])
          ptraits = ptraits.length == 0 ? '' : ptraits[0][1]
          var passive = splitDesc(passivedesc, jobItem[7])
          passive = passive.length == 0 ? '' : passive[0][1]
          passiveH.innerHTML = 'Passive: ' + (jobItem[7] || '')
          passiveDesc.innerHTML = passive + '<br>(' + ptraits + ')'
          myreg.test(ptraits) ? passiveDesc.innerHTML = passive + '<br>(' + ptraits + ')' : passiveDesc.innerHTML = passive
          passiveDesc.innerHTML = passiveDesc.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
          passiveDesc.innerHTML = passiveDesc.innerHTML.replace(/, \)/g, ')')

          //passive skills
          /*let passiveSkills = win.document.getElementById('passiveSkills')
          var pskills = splitDesc(passiveskills, jobItem[7])
          pskills = pskills.length == 0 ? '' : pskills[0][1]
          passiveSkills.innerHTML = ' ' + pskills
          passiveSkills.innerHTML = passiveSkills.innerHTML.replace(', ,', '')
          //passive effects
          let passiveEffects = win.document.getElementById('passiveEffects')
          var peffects = splitDesc(passiveeffects, jobItem[7])
          peffects = peffects.length == 0 ? '' : peffects[0][1]
          passiveEffects.innerHTML = ' ' + peffects
          passiveEffects.innerHTML = passiveEffects.innerHTML.replace(', ,', '')*/
          //passive traits

        //  passiveTraits.innerHTML = ' ' + ptraits
        //  passiveTraits.innerHTML = passiveTraits.innerHTML.replace(', ,', '')

          //switsch header
          let switchH = win.document.getElementById('switchH')
          //switch desc
          let switchDesc = win.document.getElementById('switchDesc')
          var switchSkill = splitDesc(abil, jobItem[8])
          switchSkill = switchSkill.length == 0 ? '' : switchSkill[0][1]
          //let switchtraits = win.document.getElementById('switchtraits')
          var traits = splitApply(abiltraits, jobItem[8])
          traits = traits.length == 0 ? '' : traits[0][1]
          switchH.innerHTML = 'Switch: ' + jobItem[8] || ''
        //  switchDesc.innerHTML = switchSkill + '<br>(' + traits + ')'
          myreg.test(traits) ? switchDesc.innerHTML = switchSkill + '<br>(' + traits + ')' : switchDesc.innerHTML = switchSkill
          switchDesc.innerHTML = switchDesc.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
          switchDesc.innerHTML = switchDesc.innerHTML.replace(/, \)/g, ')')

          //switch skills
          /*let switchskills = win.document.getElementById('switchskills')
          var skills = splitDesc(abilskills, jobItem[8])
          skills = skills.length == 0 ? '' : skills[0][1]
          switchskills.innerHTML = ' ' + skills
          switchskills.innerHTML = switchskills.innerHTML.replace(', ,', '')
          //switch effects
          let switcheffects = win.document.getElementById('switcheffects')
          var effects = splitDesc(abilEffects, jobItem[8])
          effects = effects.length == 0 ? '' : effects[0][1]
          switcheffects.innerHTML = ' ' + effects
          switcheffects.innerHTML = switcheffects.innerHTML.replace(', ,', '')*/
          //switch traits

      //    switchtraits.innerHTML = ' ' + traits
      //    switchtraits.innerHTML = switchtraits.innerHTML.replace(', ,', '')


          // DECK
          let card1 = splitDesc(abil, jobItem[9])
          card1 = card1.length == 0 ? '' : card1[0]
          /*let card1skills = splitDesc(abilskills, jobItem[9])
          card1skills = card1skills.length == 0 ? '' : card1skills[0][1]
          let card1effects = splitDesc(abilEffects, jobItem[9])
          card1effects = card1effects.length == 0 ? '' : card1effects[0][1]*/
          let card1traits = splitApply(abiltraits, jobItem[9])
          card1traits = card1traits.length == 0 ? '' : card1traits[0][1]

          let card2 = splitDesc(abil, jobItem[10])
          card2 = card2.length == 0 ? '' : card2[0]
          /*let card2skills = splitDesc(abilskills, jobItem[10])
          card2skills = card2skills.length == 0 ? '' : card2skills[0][1]
          let card2effects = splitDesc(abilEffects, jobItem[10])
          card2effects = card2effects.length == 0 ? '' : card2effects[0][1]*/
          let card2traits = splitApply(abiltraits, jobItem[10])
          card2traits = card2traits.length == 0 ? '' : card2traits[0][1]

          let card3 = splitDesc(abil, jobItem[11])
          card3 = card3.length == 0 ? '' : card3[0]
          /*let card3skills = splitDesc(abilskills, jobItem[11])
          card3skills = card3skills.length == 0 ? '' : card3skills[0][1]
          let card3effects = splitDesc(abilEffects, jobItem[11])
          card3effects = card3effects.length == 0 ? '' : card3effects[0][1]*/
          let card3traits = splitApply(abiltraits, jobItem[11])
          card3traits = card3traits.length == 0 ? '' : card3traits[0][1]

          let card4 = splitDesc(abil, jobItem[12])
          card4 = card4.length == 0 ? '' : card4[0]
          /*let card4skills = splitDesc(abilskills, jobItem[12])
          card4skills = card4skills.length == 0 ? '' : card4skills[0][1]
          let card4effects = splitDesc(abilEffects, jobItem[12])
          card4effects = card4effects.length == 0 ? '' : card4effects[0][1]*/
          let card4traits = splitApply(abiltraits, jobItem[12])
          card4traits = card4traits.length == 0 ? '' : card4traits[0][1]

          let card1H = win.document.getElementById('card1H')
          card1H.innerHTML = card1[0] + ' (x5)'

          let card1desc = win.document.getElementById('card1desc')
          myreg.test(card1traits) ? card1desc.innerHTML = card1[1] + '<br>(' + card1traits + ')' : card1desc.innerHTML = card1[1]
          card1desc.innerHTML = card1desc.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
          card1desc.innerHTML = card1desc.innerHTML.replace(/, \)/g, ')')

          let card2H = win.document.getElementById('card2H')
          card2H.innerHTML = card2[0] + ' (x3)'
          let card2desc = win.document.getElementById('card2desc')
          myreg.test(card2traits) ? card2desc.innerHTML = card2[1] + '<br>(' + card2traits + ')' : card2desc.innerHTML = card2[1]
          card2desc.innerHTML = card2desc.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
          card2desc.innerHTML = card2desc.innerHTML.replace(/, \)/g, ')')

          let card3H = win.document.getElementById('card3H')
          card3H.innerHTML = card3[0] + ' (x2)'
          let card3desc = win.document.getElementById('card3desc')
          myreg.test(card3traits) ? card3desc.innerHTML = card3[1] + '<br>(' + card3traits + ')' : card3desc.innerHTML = card3[1]
          card3desc.innerHTML = card3desc.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
          card3desc.innerHTML = card3desc.innerHTML.replace(/, \)/g, ')')

          let card4H = win.document.getElementById('card4H')
          card4H.innerHTML = card4[0] + ' (x1)'
          let card4desc = win.document.getElementById('card4desc')
          myreg.test(card4traits) ? card4desc.innerHTML = card4[1] + '<br>(' + card4traits + ')' : card4desc.innerHTML = card4[1]
          card4desc.innerHTML = card4desc.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g, '')
          card4desc.innerHTML = card4desc.innerHTML.replace(/, \)/g, ')')

          let cards = [card1H, card2H, card3H, card4H]
          for (var i=0; i< cards.length; i++) {
            if (cards[i].innerHTML.includes(undefined)) {
              cards[i].parentNode.remove()
            }
          }
          // Craft
          let craftdiv = win.document.getElementById('craftCraft')
          let craftjob = Object.entries(craft).map(job => {
            job.shift()
              job = job[0]

              job[9] = job[9] == undefined ? 'n/a' : job[9]

            let material = job[0]
            let matImg = matImagesComplete.filter(m => m.id == material)
              console.log(job)
            switch (jobItem[1]) {
              case job[9]:
                craftdiv.innerHTML = '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[0] + '</span></div></div><span></span>'
                                      + '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[1] + '</span></div></div><span></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[2] + '</span></div></div><span></span>'
                                      + '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[3] + '</span></div></div><span></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[4] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                      + '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[5] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[6] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                      + '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[7] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[8] + '</span></div></div>'
                break;
              case job[7]:
                craftdiv.innerHTML = '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[0] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                      + '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[1] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[2] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                      + '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[3] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[4] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                      + '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[5] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[6] + '</span></div></div>'
                break;
              case job[5]:
                craftdiv.innerHTML = '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[0] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                      + '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[1] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[2] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                      + '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[3] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[4] + '</span></div></div>'
                break;
              case job[3]:
                craftdiv.innerHTML = '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[0] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                      + '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[1] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[2] + '</span></div></div>'
                break;
              case job[1]:
                craftdiv.innerHTML = '<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span>'
                                      + '<div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[0] + '</span></div></div>'
                break;
              default:

            }
          })
        }


    //    console.log(jobcraft)

}, 1120)


}
