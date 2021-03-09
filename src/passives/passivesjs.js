import { tbody } from './passivesTable.js'
import { openNew } from '../basicfn/openNew.js'
import { abilitiesAllInfo, descFinale, abilSkills, abilEffects, abilTraits,
        passivesAllInfo, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        jobsDataAll, appliesAllInfo,charsAllInfo} from '../abilitiesData.js'
//import { openNew } from '../basicfn/openNew.js'
//import { abilImagesComplete} from '../img/imgsHTML.js'
import { passivesfilter } from './passivesfilter'
import {filterPass} from '../basicfn/filters.js'
import { showIcon, hideIcon } from '../basicfn/hoverIcons.js'
var $ = require("jquery")
import tablesorter from 'tablesorter';

export function passivesFn() {

  var filters = document.querySelectorAll('.filter')
  var pagesSel = document.getElementById('numOfPages')
  var list = passivesAllInfo
  var pageList = [];
  var currentPage = 1;
  var numberPerPage = pagesSel.value;
  var numberOfPages = 0;
  numberOfPages = getNumberOfPages(list)

  function getNumberOfPages(arr) {
      return Math.ceil(arr.length / numberPerPage);
  }
  function pagesNum() {
        numberPerPage = pagesSel.value
        numberPerPage = parseInt(numberPerPage)
        numberOfPages = getNumberOfPages(list)
        load()
      }

  pagesSel.onchange = pagesNum
function nextPage() {
  currentPage += 1;
  loadList();
}

function previousPage() {
  currentPage -= 1;
  loadList();
}

function firstPage() {
  currentPage = 1;
  loadList();
}

function lastPage() {
  currentPage = numberOfPages;
  loadList();
}

function loadList() {

  numberPerPage = parseInt(numberPerPage) || 'all'
    var abilsBody = document.getElementById('abilsBody');
    filters = Array.from(filters)
    if (filters.filter(f => f.value == 'All').length == filters.length) {
      var begin
      if (numberPerPage == 10) {
        $("table").trigger("destroy");
        begin = ((currentPage - 1) * numberPerPage);
      } else if ( numberPerPage == 'all') {
        begin = 0
        numberPerPage = list.length
        $("table").trigger("destroy");

      } else {
        $("table").trigger("destroy");
         begin = currentPage == 1 ? currentPage - 1 : (currentPage-1)*numberPerPage
      }
      var end = begin + numberPerPage;
      pageList = list.slice(begin, end);
    } else {
      if (numberPerPage == list.length) {
        pageList.length = pageList.length
      } else if (pageList.length >= numberPerPage) {
        pageList.length = numberPerPage
      }
    }
    drawList();
    check()
    $('.myTable').tablesorter();
// Icons on sides of the table
    let abilrows = Array.from(document.querySelectorAll('tr'))
    abilrows.shift()
    for (var i = 0; i < abilrows.length; i++) {
      let name = abilrows[i].children[2]
      // Description
      let desc = passiveFinale.map(desc => desc.split(':<br>'))
      desc = desc.filter(d => d[0] == name.innerText)[0]
      abilrows[i].children[4].innerHTML = desc[1].replace(/<br><br>/, '')
      // Jobs
      let jobs = jobsDataAll.filter(job => job[7] == name.innerText)
      jobs = jobs == [] ? '' : jobs
      jobs = jobs.map(j=> '<br><span class="openNew">' + j[1] + '</span>')
      abilrows[i].children[6].innerHTML = jobs == '' ? '' : jobs
      let jobLinks = Array.from(document.getElementsByClassName('openNew'))
      jobLinks.map(link =>{
        link.onclick = function() {
          let job = charsAllInfo.filter(job => job[1] == this.innerText)
          let ind = job[0][0]
          openNew('job', jobsDataAll, ind, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits)
        }
      })
      // heroes
      let chars = charsAllInfo.filter(char => char[11] == name.innerText || char[12] == name.innerText)
      chars = chars == [] ? '' : chars
      chars = chars.map(j=> '<br><span class="openNewHero">' + j[1] + '</span>')
      abilrows[i].children[7].innerHTML = chars == '' ? '' : '<div>' + chars + '</div>'
      let charLinks = Array.from(document.getElementsByClassName('openNewHero'))
      charLinks.map(link =>{
        link.onclick = function() {
          let char = charsAllInfo.filter(job => job[1] == this.innerText)
          let ind = char[0][0]
          openNew('char', charsAllInfo, ind, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,'heroes')
        }
      })
      //tooltips
    /*  abilrows[i] = abilrows[i] == undefined ? 'n/A' : abilrows[i]
      let apply = abilrows[i].children[5].innerHTML.split('<br>')
      apply = apply.map(a=> a = '<span class="applyTip">' + a + '<span class="applyTip applyText"></span></span>')
      abilrows[i].children[5].innerHTML = (apply[0] || '') + (apply[1] == undefined ? '' : '<br>' + apply[1] || '') + (apply[2] == undefined ? '' : '<br>' + apply[2] || '')
      let applyTip = Array.from(document.querySelectorAll('.applyTip:not(.applyText)'))

      applyTip = applyTip.filter(tip => tip.innerText.length > 1)
      function tooltip() {
        applyTip.map((a, index) => {
          let inf = appliesAllInfo.filter(row => row[1].includes(a.innerText.trim()))
          a.getElementsByClassName('applyText')[0].innerHTML = inf[0][10]
        })
      }
      let counter = 0
      document.getElementById('abilsBody').onmouseenter = function() {
        if (counter == 0) {
          tooltip()
          counter +=1
          console.log('here counter' + counter)
        }
      }*/

    }
  }
  //filters
  filters = Array.from(filters)
  function filter(passivesAllInfo) {
    passivesAllInfo.map(a => a.push('sep'))
    pageList = passivesAllInfo
    let newList = passivesAllInfo
    filters.map((f, ind) => {
      if (f.value == 'All') {
        newList.map(a => a.push(f.id))
      } else {
        const elemRegex = /fire|water|earth|thunder|wind|light|dark|bleed|injury|venom|restrain|insane|Element|Debuff|Null/g;
        const attrRegex = /MaxHp|Strength|Agility|Intelligence|Protect/gi
        let chosenAttr = document.getElementById('attrSel').value
        let typeVal = document.getElementById('whenSel').value
        newList.map(a => {

          let skills = [4, 7, 10, 13]
          let effects = [5,8,13, 14]
            if (f.id == 'rarity' && f.value !== 'All') {
              a[3] == f.value ? a.push('rarity') : ''
            }
            if (f.id == 'whenSel' && f.value !== 'All') {
              switch (f.value) {
                case 'Reflect':
                  skills.some((unit) => a[unit] == 'Reflect' && (chosenAttr == 'All' ? (a[unit+1].match(attrRegex) || a[unit+1].match(elemRegex)) : a[unit+1].includes(chosenAttr))) ? a.push('whenSel') : ''
                  break;
                case 'Immune':
                  skills.some((unit) => a[unit].includes('Protect') && a[unit+1].match(elemRegex)) ? a.push('whenSel') : ''
                  break;
                case 'After Action':
                  skills.some((unit) => a[unit].includes('Action') && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? a.push('whenSel') : ''
                  break;
                case 'Combat Start':
                  skills.some((unit) => a[unit] == 'Curse' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? a.push('whenSel') : ''
                  skills.some((unit) => a[unit] == 'InstantBoost' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? a.push('whenSel') : ''
                  skills.some((unit) => a[unit].includes('Protect') && (chosenAttr == 'All' ? a[unit+1].match(attrRegex) : (a[unit+1].includes(chosenAttr) || a[unit+1] == 'Guard'))) ? a.push('whenSel') : ''
                  break;
                case 'Dmg mitigate':
                  skills.some((unit) => a[unit] == 'Buff' && a[unit+1].includes('Protect')) ? a.push('whenSel') : ''
                  break;
                case 'HP Threshold':
                  skills.some((unit) => a[unit] == 'Sacrifice') ? a.push('whenSel') : ''
                  skills.some(unit => a[unit].includes('Protect') && (a[unit+1] == 'Direct' /*|| a[unit+1] == 'Guard'*/)) ? a.push('whenSel') : ''
                  break;
                case 'Heal':
                  skills.some((unit) => a[unit].includes('Heal') && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? a.push('whenSel') : ''
              //    skills.some((unit) => a[unit] == 'Heal') ? tableRows[ind].classList.add(filter, 'attrSel') : ''
                  break;
                case 'Master':
                  skills.some((unit) => a[unit] == 'Upgrade' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? a.push('whenSel') : ''
                  break;
                case 'Stat Boost':
                  skills.some((unit) => a[unit] == 'Buff' && (a[unit+1].includes('Protect')==false) && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? a.push('whenSel') : ''
                  skills.some((unit) => a[unit] == 'Debuff' && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? a.push('whenSel') : ''
                  break;
                case 'Turn End':
                  skills.some((unit) => a[unit].includes('Turn') && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? a.push('whenSel') : ''
                  break;
                default:
              }
            }
            if (f.id == 'attrSel' && f.value !== 'All') {
              switch (typeVal) {
                case 'Reflect':
                  skills.some(s => a[s] == 'Reflect' && a[s+1].includes(f.value)) ? a.push('attrSel') : ''
                  break;
                case 'After Action':
                  skills.some(s => a[s].includes('Action') && a[s+1].includes(f.value)) ? a.push('attrSel') : ''
                  break;
                case 'Combat Start':
                  skills.some(s => (a[s] == 'Curse' || a[s] == 'InstantBoost' || a[s].includes('Protect')) && a[s+1].includes(f.value)) ? a.push('attrSel') : ''
                //  skills.some(s => a[s] == 'InstantBoost' && a[s+1].includes(elem)) ? tableRows[ind].classList.add(filter, 'whenSel') : ''
                  break;
                case 'Heal':
                  skills.some(s => a[s].includes('Heal') && a[s+1].includes(f.value)) ? a.push('attrSel') : ''
                  break;
                case 'Master':
                  skills.some(s => a[s] == 'Upgrade' && a[s+1].includes(f.value)) ? a.push('attrSel') : ''
                  break;
                case 'Master':
                  skills.some(s => a[s] == 'Buff' && (a[s+1].includes('Protect')==false) && a[s+1].includes(f.value)) ? a.push('attrSel') : ''
                  skills.some(s => a[s] == 'Debuff' && a[s+1].includes(f.value)) ? a.push('attrSel') : ''
                  break;
                case 'Turn End':
                  skills.some(s => a[s].includes('Turn') && a[s+1].includes(f.value)) ? a.push('attrSel') : ''
                  break;
                default:
                  skills.some(s=> {
                    a[s] == undefined ? '' : a[s].includes(f.value) ? a.push('attrSel') : ''
                  })
                  effects.some(s=> {
                    a[s] == undefined ? '' : a[s].includes(f.value) ?  a.push('attrSel') : ''
                  })
                }
              }
              if (f.id == 'apply') {
                if ([a[16], a[17], a[18]].some(el => el = el.includes(f.value))) {
                  a.push('apply')
                }
              }
              if (f.id == 'element') {
                effects.some(s => a[s] == undefined ? '' : a[s].includes(f.value)) ? a.push('element') : ''
              }
          })
      }

    })
    pageList = newList.filter(l=> l.includes('element') && l.includes('rarity') && l.includes('attrSel') && l.includes('apply') && l.includes('whenSel'))
    pageList.map(a => a.splice(a.length-5,5))
    if (pageList.length == 0 ) {
      document.getElementById('dialog').style.display = 'block';
      document.getElementById('closedialog').onclick = function() {
      document.getElementById('dialog').style.display = 'none';
      }
  }
    passivesAllInfo.map(a => a.splice(a.indexOf('sep'), 5))
  }


  //const eventChange = new Event('change')
  let start = document.getElementById('start')
  let clear = document.getElementById('jobsclear')

     start.addEventListener('click', function() {
       filter(passivesAllInfo)
       loadList()
     })
     clear.addEventListener('click', function() {
       filters.map(f => f.value = 'All')
       filter(passivesAllInfo)
       loadList()
       document.getElementById('dialog').style.display = 'none'
     })

  function drawList() {
    document.getElementById("abilsBody").innerHTML = "";
      for (var i=0; i < pageList.length; i++) {
        var jobItem = Object.values(pageList[i])
      //  jobItem[i] = jobItem[i] == undefined ? '' : jobItem[i]
        jobItem.splice(1, 1, "pic")
        jobItem.splice(4, 12, 'n/a')
      //  jobItem.pop()

        jobItem[3] = '<span class="' + jobItem[3] + '">' + jobItem[3] + '</span>'
        jobItem[5] = ((jobItem[5] == undefined ? '' : jobItem[5] + '<br>')
                    + (jobItem[6] == undefined ? '' : jobItem[6] + '<br>')
                     + (jobItem[7] == undefined ? '' : jobItem[7]))

        jobItem.splice(7, 2, '', '')
        jobItem.length = 8
        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
        i % 2 == 0 ? tableRow.style.backgroundColor = '#b7b7c4' : tableRow.style.backgroundColor = 'rgb(114 139 188)'
    //    i % 2 == 0 ? tableRow.style.color = 'bloack' : tableRow.style.color = 'white'
console.log(jobItem)

        jobItem.map( (job, ind) => {

          var cell = document.createElement('td')
          cell.id = cell.innerHTML
          switch (job) {
            case 'Low':
              cell.innerHTML = '<td class="low">Low</td>'
              break;
            case 'Medium':
              cell.innerHTML = '<td class="medium">Low</td>'
              break;
            case 'High':
              cell.innerHTML = '<td class="high">High</td>'
              break;
            case 'Master':
              cell.innerHTML = '<td class="master">master</td>'
              break;
            default: cell.innerHTML = '<td>' + job + '</td>'
          }

        /*  var tooltip = document.createElement('span')
          tooltip.classList.add('tooltipMy', 'tooltiptext')


            cell.innerHTML == jobItem[5] ? cell.appendChild(tooltip) && cell.classList.add('tooltipMy') : ''
            cell.innerHTML == jobItem[4] ? cell.appendChild(tooltip) && cell.classList.add('tooltipMy') : ''*/

          //add images to pic cell
        /*  var imgComplete = abilImagesComplete.find(jobimg => jobimg.id == jobItem[2])

          if (cell.innerHTML == 'pic') {
            cell.id = 'pic'
            cell.innerHTML = ''
            cell.append(imgComplete)
          }*/

          tableRow.appendChild(cell)
          abilsBody.append(tableRow)

          Array.from(document.querySelectorAll('.jobRow td:nth-child(3)')).filter(td => {
            td.childNodes.length > 1 ? td.removeChild(td.childNodes[1]) : ''
          })
        })
  }
} // end of drawList

function check() {
  if (numOfPages.value == 'all') {
    document.getElementById("next").disabled = true
    document.getElementById("prev").disabled = true
    document.getElementById("first").disabled = true
    document.getElementById("last").disabled = true
  } else {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("prev").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
  }
}

function load() {
    loadList();
}
load()
document.getElementById('next').onclick = nextPage
document.getElementById('first').onclick = firstPage
document.getElementById('last').onclick = lastPage
document.getElementById('prev').onclick = previousPage

$("#search").on("keyup", function() {
  var input = $(this).val().toLowerCase();
    $("#abilsBody tr").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
    });
  });
}
