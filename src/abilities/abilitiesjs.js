import { tbody } from './abilsTable.js'
import { openNew } from '../basicfn/openNew.js'
import { abilities, abilitiesAllInfo, descFinale, abilSkills, abilEffects, abilTraits,
        passivesAllInfo, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        jobsDataAll, appliesAllInfo, charsAllInfo} from '../abilitiesData.js'
//import { openNew } from '../basicfn/openNew.js'
import { abilImagesComplete} from '../img/imgsHTML.js'
import { abilsfilter } from './abilsfilter'
import {filterAb} from '../basicfn/filters.js'
import { showIcon, hideIcon } from '../basicfn/hoverIcons.js'
var $ = require("jquery")
import tablesorter from 'tablesorter';

export function abilitiesFn() {

  var filters = document.getElementsByClassName('filter')

  var pagesSel = document.getElementById('numOfPages')
  var list = abilitiesAllInfo
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

  pagesSel.onchange = function(){
    filters.map(f => f.value = 'All')
    pagesNum()
  }
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
    //  tooltipsFn(abilrows[i])
      let name = abilrows[i].children[2]
      abilrows[i].addEventListener('mousemove', function() {
        showIcon(name, abilImagesComplete)
      })
      abilrows[i].addEventListener('mouseleave', function(){
        hideIcon(abilImagesComplete)
      })
      // Description
        let desc = descFinale.map(desc => desc.split(':<br>'))
        
        desc = desc.filter(d => d[0] == name.innerText)[0]

      abilrows[i].children[5].innerHTML = desc[1].replace(/<br><br>/, '')
      // Jobs
        let jobs = jobsDataAll.filter(job => job[8] == name.innerText)
       // console.log(jobsDataAll)
      jobs = jobs == [] ? '' : jobs
      jobs = jobs.map(j=> '<br><span class="openNew">' + j[1] + '</span>')
      abilrows[i].children[7].innerHTML = jobs == '' ? '' : jobs
      let jobLinks = Array.from(document.getElementsByClassName('openNew'))
      jobLinks.map(link =>{
        link.onclick = function() {
          let job = jobsDataAll.filter(job => job[1] == this.innerText)
          let ind = job[0][0]
          openNew('job', jobsDataAll, ind, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits)
        }
      })
      // heroes
        let chars = charsAllInfo.filter(char => char[13] == name.innerText || char[14] == name.innerText)
     
      chars = chars == [] ? '' : chars
      chars = chars.map(j=> '<br><span class="openNewHero">' + j[1] + '</span>')
      abilrows[i].children[8].innerHTML = chars == '' ? '' : '<div>' + chars + '</div>'
      let charLinks = Array.from(document.getElementsByClassName('openNewHero'))
      charLinks.map(link =>{
        link.onclick = function() {
          let char = charsAllInfo.filter(job => job[1] == this.innerText)
          let ind = char[0][0]
          openNew('char', charsAllInfo, ind, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,'heroes')
        }
      })

    }

  }

  //tooltips
  /*function tooltipsFn() {

    let applyTip = Array.from(document.querySelectorAll('.applyTip:not(.applyText)'))

    function tooltip() {
      applyTip = applyTip.filter(tip => tip.innerText.length > 1)
      applyTip.map(a => {
        let inf = appliesAllInfo.filter(row => row[1].includes(a.innerText.trim()))
        inf[0] == undefined ? '' : a.getElementsByClassName('applyText')[0].innerHTML = inf[0][10]
      })
    }
    let counter = 0
    document.getElementById('abilsBody').onmouseenter = function() {
      if (counter == 0) {
        tooltip()
        counter +=1
      }
    }
  }*/

  //filters
  filters = Array.from(filters)
  function filter(abilitiesAllInfo) {
    abilitiesAllInfo.map(a => a.push('sep'))
    pageList = abilitiesAllInfo
    let newList = abilitiesAllInfo
    filters.map((f, ind) => {
      if (f.value == 'All') {
        newList.map(a => a.push(f.id))
      } else {
        const elemRegex = /fire|water|earth|thunder|wind|light|dark|bleed|injury|venom|restrain|insane|Element|Debuff|Null/g;
        const attrRegex = /MaxHp|Strength|Agility|Intelligence|Protect/gi
        let chosenAttr = document.getElementById('attrSel').value
        let typeVal = document.getElementById('type').value
        newList.map(a => {

          let skills = [5, 8, 11, 14]
          let effects = [6,9,12, 15]
            if (f.id == 'rarity' && f.value !== 'All') {
              a = a[3] == f.value ? a.push('rarity') : a
            }
            if (f.id == 'type' && f.value !== 'All') {
              switch (f.value) {
                case 'Other':
                  a = skills.some((unit) => a[unit] == 'Null' && a[unit+1] == 'Null') ? a.push('type') : a
                  a = skills.some((unit) => a[unit] == 'InstantBoost' && a[unit+1] == 'Direct') ? a.push('type') : a
                  skills.some((unit) => (a[unit] == undefined ? '' : (a[unit].includes('Protect') && (a[unit+1] == 'Direct' || a[unit+1] == 'Guard' || a[unit+1] == 'Draw')))) ? a.push('type') : ''
                  break;
                case 'Remove Debuff':
                  skills.some((unit) => a[unit].includes('Protect') && a[unit+1].match(elemRegex)) ? a.push('type') : ''
                  break;
                case 'Protect':
                  skills.some((unit) => a[unit].includes('Protect') && (chosenAttr == 'All' ? a[unit+1].match(attrRegex) : a[unit+1].includes(chosenAttr))) ? a.push('type') : ''
                  break;
                case 'Negative':
                  skills.some((unit) => a[unit] == 'Curse' || a[unit] == 'Sacrifice') ? a.push('type') : ''
                  break;
                default:
                  skills.some((unit) => a[unit] == f.value && (chosenAttr == 'All' ? true : a[unit+1].includes(chosenAttr))) ? a.push('type') : ''
              }
            }
            if (f.id == 'attrSel' && f.value !== 'All') {
                if (typeVal == 'All') {
                  skills.some(s=> {
                    a[s] == undefined ? '' : a[s].includes(f.value) ? a.push('attrSel') : ''
                  })
                  effects.some(s=> {
                    a[s] == undefined ? '' : a[s].includes(f.value) ? a.push('attrSel') : ''
                  })
                } else {
                  if (typeVal == 'Protect') {
                    skills.some(s => a[s] == undefined ? '' : a[s].includes('Protect') && a[s+1].includes(f.value)) ? a.push('attrSel') : ''
                  } else {
                      skills.some(s=> {
                        (a[s] == typeVal && a[s+1].includes(f.value)) ? a.push('attrSel') : ''
                        a[s].includes(f.value) ? a.push('attrSel') : ''
                      })

                  }
                  }
              }
              if (f.id == 'apply') {
                if ([a[17], a[18], a[19]].some(el => el = el.includes(f.value))) {
                  a.push('apply')
                }
              }
              if (f.id == 'element') {
                effects.some(s => a[s] == undefined ? '' : a[s].includes(f.value)) ? a.push('element') : ''
              }
          })
      }

    })
      pageList = newList.filter(l => l.includes('element') && l.includes('rarity') && l.includes('attrSel') && l.includes('apply') && l.includes('type'))
    pageList.map(a => a.length = 22)
    if (pageList.length == 0 ) {
      document.getElementById('dialog').style.display = 'block';
      document.getElementById('closedialog').onclick = function() {
      document.getElementById('dialog').style.display = 'none';
      }
    }
    abilitiesAllInfo.map(a => a.splice(a.indexOf('sep'), 5))
  }


  //const eventChange = new Event('change')
  let start = document.getElementById('start')
  let clear = document.getElementById('jobsclear')
   start.addEventListener('click', function() {
       filter(abilitiesAllInfo)
       loadList()
   })
    clear.addEventListener('click', function() {
      filters.map(f => f.value = 'All')
      filter(abilitiesAllInfo)
      loadList()
      document.getElementById('dialog').style.display = 'none'
    })

  function drawList() {
    document.getElementById("abilsBody").innerHTML = "";
      for (var i=0; i < pageList.length; i++) {
          var jobItem = Object.values(pageList[i])

      //  jobItem[i] = jobItem[i] == undefined ? '' : jobItem[i]
        jobItem.splice(1, 1, "pic")
        jobItem.splice(5, 12, 'n/a')
        jobItem.pop()
            //    jobItem[3] = '<span class="' + jobItem[3] + '">' + jobItem[3] + '</span>'
        jobItem[6] = jobItem[6] == '' ? '' : jobItem[6] // tooltip classadd here if needed
                    + (jobItem[7] == '' ? '' : '<br>' + jobItem[7])
                    + (jobItem[8] == '' ? '' : '<br>' + jobItem[8])

        jobItem.splice(7, 2, '', '')
        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
    //    i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = 'rgba(100, 167, 189, 9)'
    //    i % 2 == 0 ? tableRow.style.color = 'bloack' : tableRow.style.color = 'white'


        jobItem.map( (job) => {
          var cell = document.createElement('td')
          cell.innerHTML = '<td>' + job + '</td>'
            cell.id = cell.innerText
            cell.classList = cell.innerHTML


          var imgComplete = abilImagesComplete.find(jobimg => jobimg.id == jobItem[2])

          if (cell.innerHTML == 'pic') {
            cell.id = 'pic'
            cell.innerHTML = ''
            cell.append(imgComplete)
          }

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
