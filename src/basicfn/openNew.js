import {jobmain} from '../jobs/job/jobmain.js'
import {abilities, descFinale, abilSkills, abilEffects, abilTraits,
        passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        craft, jobsStats } from '../abilitiesData.js'
import {getMatImgs, getJobImgs, matImagesComplete, jobImagesComplete } from '../img/imgsHTML.js'
import star from '../img/events/StarColor.png'

function splitDesc(arr, item){
  arr = Object.values(arr).map(ab => ab == undefined ? '' : ab.split(':'))
  return arr.filter(ab => item == ab[0])
}
abilities.units().then(unit => {
  abilities.abils()
  abilities.passivesFn()
})

export function openNew(arr, i, abilArr, abilskills, abileffects, abiltraits, passivesarr, passivedesc, passiveskills,  passiveeffects, passivetraits) {
    var abil = abilArr

    var jobItem = Object.values(arr[i - 1])
    var win = window.open('job.html')
    // fires in the new tab
    var newWin = setInterval(function(){
      var header = win.document.getElementById('jobheader')
      header.innerHTML = jobItem[1]
      let rarity = win.document.getElementById('rarity')
      switch (jobItem[2]) {
          case "1":
              rarity.innerHTML = '<img id="star" src="' + star + '" width="45">'
              break;
          case "2":
              rarity.innerHTML = '<img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45">'
              break;
          case "3":
              rarity.innerHTML = '<img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45">'
              break;
          case "4":
              rarity.innerHTML = '<img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45">'
              break;
          case "5":
              rarity.innerHTML = '<img id="star" src="' + star + '" width="40"><img id="star" src="' + star + '" width="40"><img id="star" src="' + star + '" width="40"><img id="star" src="' + star + '" width="40"><img id="star" src="' + star + '" width="40">'
              break;
          }

    //  attributes
      let hp = win.document.getElementById('hp')
      console.log(hp)
      hp.innerHTML = 'HP: ' + jobItem[3]
      let str = win.document.getElementById('str')
      str.innerHTML = 'STR: ' + jobItem[4]
      let agi = win.document.getElementById('agi')
      agi.innerHTML = 'AGI: ' + jobItem[5]
      let int = win.document.getElementById('int')
      int.innerHTML = 'INT: ' + jobItem[6]

        //change the new tab look based on job/char rarity
        switch (jobItem[2]) {
            case '1':
                win.document.body.classList.add('job1star')
                break;
            case '2':
                win.document.body.classList.add('job2star')
                break;
            case '3':
                win.document.body.classList.add('job3star')
                break;
            case '4':
                win.document.body.classList.add('job4star')
                break;
            case '5':
                win.document.body.classList.add('job5star')
                break;
        }
        //regex to check if there are any kewords to be put in brackets
let myreg = /([A-Z])\w+/gi
        // PASSIVE & SWITCH
        let passiveH = win.document.getElementById('passiveH')
        let passiveDesc = win.document.getElementById('passiveDesc')
        let passiveTraits = win.document.getElementById('passiveTraits')
        var ptraits = splitDesc(passivetraits, jobItem[7])
        ptraits = ptraits.length == 0 ? '' : ptraits[0][1]
        var passive = splitDesc(passivedesc, jobItem[7])
        passive = passive.length == 0 ? '' : passive[0][1]
        passiveH.innerHTML = 'Passive: ' + jobItem[7] || ''
        passiveDesc.innerHTML = passive + '<br>(' + ptraits + ')'
        myreg.test(ptraits) ? switchDesc.innerHTML = passive + '<br>(' + ptraits + ')' : passiveDesc.innerHTML = passive
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
        var traits = splitDesc(abiltraits, jobItem[8])
        traits = traits.length == 0 ? '' : traits[0][1]
        switchH.innerHTML = 'Switch: ' + jobItem[8] || ''
        switchDesc.innerHTML = switchSkill + '<br>(' + traits + ')'
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
        let card1traits = splitDesc(abiltraits, jobItem[9])
        card1traits = card1traits.length == 0 ? '' : card1traits[0][1]

        let card2 = splitDesc(abil, jobItem[10])
        card2 = card2.length == 0 ? '' : card2[0]
        /*let card2skills = splitDesc(abilskills, jobItem[10])
        card2skills = card2skills.length == 0 ? '' : card2skills[0][1]
        let card2effects = splitDesc(abilEffects, jobItem[10])
        card2effects = card2effects.length == 0 ? '' : card2effects[0][1]*/
        let card2traits = splitDesc(abiltraits, jobItem[10])
        card2traits = card2traits.length == 0 ? '' : card2traits[0][1]

        let card3 = splitDesc(abil, jobItem[11])
        card3 = card3.length == 0 ? '' : card3[0]
        /*let card3skills = splitDesc(abilskills, jobItem[11])
        card3skills = card3skills.length == 0 ? '' : card3skills[0][1]
        let card3effects = splitDesc(abilEffects, jobItem[11])
        card3effects = card3effects.length == 0 ? '' : card3effects[0][1]*/
        let card3traits = splitDesc(abiltraits, jobItem[11])
        card3traits = card3traits.length == 0 ? '' : card3traits[0][1]

        let card4 = splitDesc(abil, jobItem[12])
        card4 = card4.length == 0 ? '' : card4[0]
        /*let card4skills = splitDesc(abilskills, jobItem[12])
        card4skills = card4skills.length == 0 ? '' : card4skills[0][1]
        let card4effects = splitDesc(abilEffects, jobItem[12])
        card4effects = card4effects.length == 0 ? '' : card4effects[0][1]*/
        let card4traits = splitDesc(abiltraits, jobItem[12])
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

          switch (jobItem[1]) {
            case job[9]:
              craftdiv.innerHTML = '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[0] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                    + '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[1] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[2] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                    + '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[3] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[4] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                    + '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[5] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[6] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                    + '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[7] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[8] + '</span></div></div>'
              break;
            case job[7]:
              craftdiv.innerHTML = '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[0] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                    + '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[1] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[2] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                    + '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[3] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[4] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                    + '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[5] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[6] + '</span></div></div>'
              break;
            case job[5]:
              craftdiv.innerHTML = '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[0] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                    + '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[1] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[2] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                    + '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[3] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[4] + '</span></div></div>'
              break;
            case job[3]:
              craftdiv.innerHTML = '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[0] + '</span></div></div><span><i class="fas fa-arrow-right"></i></span>'
                                    + '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">' + job[1] + '</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[2] + '</span></div></div>'
              break;
            case job[1]:
              craftdiv.innerHTML = '<div class="col col-sm craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span>'
                                    + '<div class="col col-sm craft craftmat"><div><span id="craftmat"></span><span class="craft">' + job[0] + '</span></div></div>'
              break;
            default:

          }
        })

    //    console.log(jobcraft)

}, 40)

setTimeout(function() {
  clearInterval(newWin)
}, 500)
}
