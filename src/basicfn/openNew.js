import {jobmain, abilities} from '../jobs/job/jobmain.js'

export function openNew(arr, i, abilArr) {
    var abil = abilArr

    var jobItem = Object.values(arr[i - 1])
    var win = window.open('job.html')
    // fires in the new tab
    var newWin = setInterval(function(){  //could be setInterval that stops after 2 mins
      var header = win.document.getElementById('jobheader')
      header.innerHTML = jobItem[1]
      let rarity = win.document.getElementById('rarity')
      switch (jobItem[2]) {
          case "1":
              rarity.innerHTML = '<i class="fa fa-star fa-2x"></i>'
              break;
          case "2":
              rarity.innerHTML = '<i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i>'
              break;
          case "3":
              rarity.innerHTML = '<i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i>'
              break;
          case "4":
              rarity.innerHTML = '<i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i>'
              break;
          case "5":
              rarity.innerHTML = '<i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i>'
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

        // PASSIVE & SWITCH
        let passiveH = win.document.getElementById('passiveH')
        let passiveDesc = win.document.getElementById('passiveDesc')
        passiveH.innerHTML = jobItem[7] || ''
        passiveDesc.innerHTML = ''
        let switchH = win.document.getElementById('switchH')
        let switchDesc = win.document.getElementById('switchDesc')
        var switchSkill = abil.filter(ab => jobItem[8] == ab.name)
        console.log(switchSkill)
        switchH.innerHTML = jobItem[8] || ''
        switchDesc.innerHTML = switchSkill[0].desc1
}, 40)

setTimeout(function() {
  clearInterval(newWin)
}, 1000)
}
