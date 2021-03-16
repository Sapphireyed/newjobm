import { tbody } from './heroesTable.js'
import { applyBody } from './enemiesTable.js'
import { openNew } from '../basicfn/openNew.js'
import { abilitiesAllInfo, descFinale, abilSkills, abilEffects, abilTraits,
        passivesAllInfo, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        glossAllInfo, appliesAllInfo,charsAllInfo, charsAllInfoRaw} from '../abilitiesData.js'
        import { matImagesComplete, abilImagesComplete, charsImagesComplete} from '../img/imgsHTML.js'
//import { openNew } from '../basicfn/openNew.js'
//import { abilImagesComplete} from '../img/imgsHTML.js'
//import { passivesfilter } from './passivesfilter'
import {abfilt, passfilt} from '../basicfn/charfilt.js'
import { showIcon, hideIcon } from '../basicfn/hoverIcons.js'
import star from '../img/events/StarColor1.png'
var $ = require("jquery")
import tablesorter from 'tablesorter';

// change stats
export function charStats(arr, stat, hero) {
let bonus = 0
switch (true) {
  case (hero.value == 1+99):
    bonus += 0.025
  case (hero.value > 1+90):
    bonus += 0.025
  case (hero.value > 1+80):
    bonus += 0.025
  case (hero.value > 1+70):
    bonus += 0.025
  case (hero.value > 1+60):
    bonus += 0.025
  case (hero.value > 1+50):
    bonus += 0.025
  case (hero.value > 1+45):
    bonus += 0.025
  case (hero.value > 1+35):
    bonus += 0.025
  case (hero.value > 1+25):
    bonus += 0.025
  case (hero.value > 1+15):
    bonus += 0.025
  case (hero.value > 1+10):
    bonus += 0.025
  case (hero.value > 1+5):
    bonus += 0.025
  default:
}
  arr.map(cell => {
    let attr = cell.id

     //calculate extra
    //lvl/100 * hp + bonus
  //  let bonus = cell *

    cell.innerHTML = Math.ceil(Math.ceil(cell.id/100*stat.value) + Math.ceil(bonus*cell.id))
//    console.log(stat.value*cell.id/100*stat.value)
  })
}
// TOOLTIP
function tooltips() {
//tableRows = document.querySelectorAll('tr')
var descFinaleSplit = descFinale.map(desc => desc.split(':<br>'))
var passiveFinaleSplit = passiveFinale.map(desc => desc.split(':<br>'))
var switchCells =  document.getElementsByClassName('tooltiptext')
for (var i=0; i < switchCells.length; i++) {
    var switchName = switchCells[i].parentNode.innerText.replace(/  /g, ' ').trim()
    var tooltipsAb = descFinaleSplit.filter(desc=> desc[0] == switchName)
    var tooltipsPass = passiveFinaleSplit.filter(desc=> desc[0] == switchName)
    var tooltipsApply = abilTraits.map(trait => trait.split(': ')).filter(desc=> desc[0] == switchName)
    var passApply = passiveTraits.map(trait => trait.split(': ')).filter(desc=> desc[0] == switchName)

    tooltipsAb.map((desc, ind) => {
      if (desc[0] == switchName) {
      //  deas[1] = deas1.replace('while job on', '')
        switchCells[i].innerHTML = desc[1] + '<br> <span class="tipApply">(' + tooltipsApply[ind][1] + ')</span>'
        switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\(, , , \)|, ,|, , ,|\(, , , \)|\(\)|<br><br>/g, '')
        switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\( \)/g, '')
        switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/, \)/g, ')')
      }
    })
    /*  tooltipsApply.map(desc => {
    if (desc[0] == switchName) {
      switchCells[i].innerHTML = switchCells[i].innerHTML + '<br> <span class="tipApply">(' + desc[1] + ')</span>'
      switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/, ,|, , ,|\(,|\(\)|^(, \))|<br><br>/g, '')
      switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/, \)/g, ')')
    }
    })*/
    tooltipsPass.map((desc, ind) => {
      if (desc[0] == switchName) {
        desc[1] = desc[1].replace('while job on', '')
        switchCells[i].innerHTML = desc[1] + '<br> <span class="tipApply">(' + passApply[ind][1] + ')</span>'
        switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\(, , , \)|, ,|, , ,|\(, , , \)|\(\)|<br><br>/g, '')
        switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\( \)/g, '')
        switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/, \)/g, ')')
      }
    })
  }
}
function charLink(item) {
  let charTable;
  var i = item.parentNode.firstChild.innerHTML
  charTable = item.parentNode.parentNode.id  == 'abilsBody' ? 'heroes' : 'enemies'
  openNew('char',charsAllInfo, i, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits, charTable)
}

let currentPage0 =[]
var filters = document.getElementsByClassName('filter')

export function glossFn() {
  var pagesSel = document.getElementById('numOfPages')
  let storeList = charsAllInfo
  var list = storeList
  var pageList = [];
  var currentPage = currentPage0[0] || 1;
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

  pagesSel.onchange = function() {
    filters.map(f => f.value = 'All')
    pagesNum()
  }
function nextPage() {
  currentPage0.pop()
  currentPage += 1;
  currentPage0.push(currentPage)
  loadList();
}

function previousPage() {
  currentPage0.pop()
  currentPage -= 1;
  currentPage0.push(currentPage)
  loadList();
}

function firstPage() {
  currentPage0.pop()
  currentPage = 1;
  currentPage0.push(currentPage)
  loadList();
}

function lastPage() {
  currentPage0.pop()
  currentPage = numberOfPages;
  currentPage0.push(currentPage)
  loadList();
}

function loadList() {
  numberPerPage = parseInt(numberPerPage) || 'all'
    var abilsBody = document.getElementById('abilsBody');
    filters = Array.from(filters)
      filter()
    if (filters.filter(f => f.value == 'All').length == filters.length) {
      // pagination
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
    check();
    $('.myTable').tablesorter();
    tooltips()
    // filters
    function filter(){
      charsAllInfoRaw.map(char=> char.push('sep'))

      pageList = charsAllInfoRaw
      let newList = charsAllInfo
      filters.map(f => {
        if (f.value == 'All') {
          newList.map(ch => ch.push(f.id))
        } else {
          const elemRegex = /fire|water|earth|thunder|wind|light|dark|bleed|injury|venom|restrain|insane|Element|Debuff|Null/g;
          const attrRegex = /MaxHp|Strength|Agility|Intelligence|Protect/gi
          let chosenAttr = document.getElementById('attrSel').value
          let typeVal = document.getElementById('type').value
            newList.map(ch=> {
              if (f.id == 'rarity') {
                switch (f.value) {
                  case '1':
                    ch = ch[2] == 'Beginner' ? ch.push('rarity') : ch
                    break;
                  case '2':
                    ch = ch[2] == 'Easy' ? ch.push('rarity') : ch
                    break;
                  case '3':
                    ch = ch[2] == 'Medium' ? ch.push('rarity') : ch
                    break;
                  case '4':
                    ch = ch[2] == 'Hard' ? ch.push('rarity') : ch
                    break;
                  case '5':
                    ch = ch[2] == 'Boss' ? ch.push('rarity') : ch
                    break;
                  default:
                }
              }
              if (f.id == 'race') {
                ch = ch[15] == f.value ? ch.push('race') : ch
              }
              let searchin = document.getElementById('searchin')
              switch (searchin.value) {
                case 'abilities':
                  abfilt(ch, abilitiesAllInfo, f, elemRegex, attrRegex, chosenAttr, typeVal)
                  document.getElementById('whenSel').disabled = true;
                  document.getElementById('type').disabled = false;
                  document.getElementById("whenSel").value = 'All'
                  break;
                case 'passives':
                  passfilt(ch, passivesAllInfo, f, elemRegex, attrRegex, chosenAttr, typeVal)
                  document.getElementById('whenSel').disabled = false;
                  document.getElementById('type').disabled = true;
                  document.getElementById("type").value = 'All'
                  break;
                case 'both':
                  passfilt(ch, passivesAllInfo, f, elemRegex, attrRegex, chosenAttr, typeVal)
                  abfilt(ch, abilitiesAllInfo, f, elemRegex, attrRegex, chosenAttr, typeVal)
                  document.getElementById("type").disabled = false;
                  document.getElementById('whenSel').disabled = false;
                  break;
                default:

              }
          })
        }
      })
      pageList = newList.filter(l=> l.includes('element') && l.includes('rarity') && l.includes('attrSel') && l.includes('apply') && l.includes('type') && l.includes('race') && l.includes('whenSel'))

  pageList.map(a => a.length = 17)
      if (pageList.length == 0 ) {
        document.getElementById('dialog').style.display = 'block';
        document.getElementById('closedialog').onclick = function() {
        document.getElementById('dialog').style.display = 'none';
        }
      }
    //  charsAllInfo.map(a => a.splice(a.indexOf('sep'), 8))
    }
    let startF = document.getElementById('start')
    let clearF = document.getElementById('jobsclear')
     startF.addEventListener('click', function() {
         filter()
         loadList()
     })
      clearF.addEventListener('click', function() {
        filters.map(f => f.value = 'All')
        filter()
        loadList()
        document.getElementById('dialog').style.display = 'none'
      })
    //links opening new pages
    let charLinks = Array.from(document.querySelectorAll('#heroesTable tr td:nth-child(3)'));
    charLinks.map(link => {
      link.addEventListener('click', function() {
        charLink(this)
      })
    })
    //abilities imgs
    let switchskills = Array.from(document.querySelectorAll('.abil'))
    switchskills.map((abil,i) => {
      let switchskillsimg = document.createElement('div')
      let src = abilImagesComplete.filter(img => switchskills[i].children[0].innerText.trim() == img.id)
      if (src.length > 0) {
        switchskills[i].prepend(switchskillsimg)
        switchskillsimg.innerHTML = src[0].outerHTML
      }
    })
    let pics= document.querySelectorAll('tr td:nth-child(2)')
// Icons on sides of the table
    let abilrows = Array.from(document.querySelectorAll('#abilsBody tr'))
  //  abilrows.shift()
    for (var i = 0; i < abilrows.length; i++) {
      let name = abilrows[i].children[2]
      if (name.offsetLeft == 107){
        i % 2 == 0 ? name.style.backgroundColor = '#f5f7f8' : name.style.backgroundColor = 'rgb(100, 167, 189)'
      }

      abilrows[i].addEventListener('mousemove', function() {
        showIcon(name, charsImagesComplete)
      })
      abilrows[i].addEventListener('mouseleave', function(){
        hideIcon(charsImagesComplete)
      })

    }

    //change stats
    let start= document.querySelectorAll('#lvlbtns button')[0]
    let resetlvls = document.querySelectorAll('#lvlbtns button')[1]
    let stat = document.getElementById('chooselvl')
    let hero = document.getElementById('herolvl')
    hero.disabled = false
    stat.value = 10
    hero.value = 1
    let hpStat = Array.from(document.querySelectorAll('.jobRow td:nth-child(n+8)'))
    let str = Array.from(document.querySelectorAll('.jobRow td:nth-child(9)'))
    let agi = Array.from(document.querySelectorAll('.jobRow td:nth-child(10)'))
    let int = Array.from(document.querySelectorAll('.jobRow td:nth-child(11'))
    start.addEventListener('click', function() {
      charStats(hpStat, stat, hero)
      //charStats(str)
      //charStats(agi)
      //charStats(int)
    })
    resetlvls.addEventListener('click', function() {
      stat.value = 10
      hero.value = 1
      charStats(hpStat, stat,hero)
      //charStats(str)
      //charStats(agi)
      //charStats(int)
    })
    start.click()
    //filters

  }

  function drawList() {
  //  console.log(charsAllInfo)
    document.getElementById("abilsBody").innerHTML = "";
      for (var i=0; i < pageList.length; i++) {
        var jobItem = Object.values(pageList[i])
        switch (jobItem[2]) {
          case 'Beginner':
            jobItem[2] = '<img id="star" src="' + star + '" width="25" height="25"><span style="color: transparent">1</span>'
            break;
          case 'Easy':
            jobItem[2] = '<img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><span style="color: transparent">2</span>'
            break;
          case 'Medium':
            jobItem[2] = '<img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><span style="color: transparent">3</span>'
            break;
          case 'Hard':
            jobItem[2] = '<img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><span style="color: transparent">4</span>'
            break;
          case 'Boss':
            jobItem[2] = '<img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><span style="color: transparent">5</span>'
            break;
          default:

        }
        jobItem.splice(1, 0, "pic")
        let race = jobItem[15]
        let attr = jobItem.splice(4, 8)
        //jobbItem.splice(3,1,)
        jobItem.splice(9, 0, attr[0], attr[1], attr[2], attr[3])
        //passives
        jobItem[4] = jobItem[4] == '' ? '' : '1. <span class="tooltipMy pass">'+ jobItem[4] + '<span class="tooltipMy tooltiptext"></span></span>'
                    + (jobItem[5] == '' ? '' : '<br>' + '2. <span class="tooltipMy pass">' + jobItem[5] + '<span class="tooltipMy tooltiptext"></span></span>')
        //abilities
        jobItem[6] = jobItem[6] == '' ? '' : '<span class="tooltipMy abil"><span class="name">' + jobItem[6] + '</span><span class="tooltipMy tooltiptext"></span></span>'
                   + (jobItem[7] == '' ? '' : '<br>' + '<span class="tooltipMy abil"><span class="name">' + jobItem[7] + '</span><span class="tooltipMy tooltiptext"></span></span>')
        jobItem.splice(5,1)
        jobItem.splice(6,1)
        //attrs
        jobItem[7] = jobItem[7] * 0.75
        jobItem[8] = jobItem[8] * 1.5
        jobItem[9] = jobItem[9] * 1.5
        jobItem[10] = jobItem[10] * 1.5
        jobItem.pop()

    //    jobItem.splice(7, 2, '', '')
        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
        i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = '#a6b7be'
    //    i % 2 == 0 ? tableRow.style.color = 'bloack' : tableRow.style.color = 'white'


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
            cell.id = cell.innerText
            //Array.from(cell.children).map(child => child.id = child.innerText.replace('/', '').trim())
          }
        //  Array.from(cell.children).map(child => child.id = child.innerText.replace('/', '').trim())
        /*  var tooltip = document.createElement('span')
          tooltip.classList.add('tooltipMy', 'tooltiptext')


            cell.innerHTML == jobItem[5] ? cell.appendChild(tooltip) && cell.classList.add('tooltipMy') : ''
            cell.innerHTML == jobItem[4] ? cell.appendChild(tooltip) && cell.classList.add('tooltipMy') : ''*/

          //add images to pic cell
          var imgComplete = charsImagesComplete.find(jobimg => jobimg.id == jobItem[2])

          if (cell.innerHTML == 'pic') {
            cell.id = 'pic'
            cell.innerHTML = ''
            cell.append(imgComplete)
          }

          tableRow.appendChild(cell)
          abilsBody.append(tableRow)

      /*    Array.from(document.querySelectorAll('.jobRow td:nth-child(3)')).filter(td => {
            td.childNodes.length > 1 ? td.removeChild(td.childNodes[1]) : ''
          })*/
        })
  }
} // end of drawList
document.getElementById('next').onclick = nextPage
document.getElementById('first').onclick = firstPage
document.getElementById('last').onclick = lastPage
document.getElementById('prev').onclick = previousPage
function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("prev").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
//    setTimeout(function() {


//    }, 100)
}

function load() {
    loadList();
}
load()

$("#search").on("keyup", function() {
  var input = $(this).val().toLowerCase();
    $("#abilsBody tr").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
    });
  });
}

export function applyTableFn() {

  var pagesSel = document.getElementById('numOfPages')
  var list = charsAllInfo
  var pageList = [];
  var currentPage = currentPage0[0] || 1;
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

  pagesSel.onchange = function() {
    filters.map(f => f.value = 'All')
    pagesNum()
  }

  function nextPage() {
    currentPage0.pop()
    currentPage += 1;
    currentPage0.push(currentPage)
    loadList();
  }

  function previousPage() {
    currentPage0.pop()
    currentPage -= 1;
    currentPage0.push(currentPage)
    loadList();
  }

  function firstPage() {
    currentPage0.pop()
    currentPage = 1;
    currentPage0.push(currentPage)
    loadList();
  }

  function lastPage() {
    currentPage0.pop()
    currentPage = numberOfPages;
    currentPage0.push(currentPage)
    loadList();
  }

  function loadList() {

  numberPerPage = parseInt(numberPerPage) || 'all'
    var abilsBody = document.getElementById('abilsBody');
    filterEn()
    // pagination
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
    check();
    $('.myTable').tablesorter();
    tooltips()
    // filters
    function filterEn(){
      charsAllInfoRaw.map(char=> char.push('sep'))

      pageList = charsAllInfoRaw
      let newList = charsAllInfo
      filters.map(f => {
        if (f.value == 'All') {
          newList.map(ch => ch.push(f.id))
        } else {
          const elemRegex = /fire|water|earth|thunder|wind|light|dark|bleed|injury|venom|restrain|insane|Element|Debuff|Null/g;
          const attrRegex = /MaxHp|Strength|Agility|Intelligence|Protect/gi
          let chosenAttr = document.getElementById('attrSel').value
          let typeVal = document.getElementById('type').value
            newList.map(ch=> {
              if (f.id == 'rarity') {
                ch[2] == f.value ? ch.push('rarity') : ''
              }
              if (f.id == 'race') {
                ch = ch[15] == f.value ? ch.push('race') : ch
              }
              let searchin = document.getElementById('searchin')
              switch (searchin.value) {
                case 'abilities':
                  abfilt(ch, abilitiesAllInfo, f, elemRegex, attrRegex, chosenAttr, typeVal)
                  document.getElementById('whenSel').disabled = true;
                  document.getElementById('type').disabled = false;
                  document.getElementById("whenSel").value = 'All'
                  break;
                case 'passives':
                  passfilt(ch, passivesAllInfo, f, elemRegex, attrRegex, chosenAttr, typeVal)
                  document.getElementById('whenSel').disabled = false;
                  document.getElementById('type').disabled = true;
                  document.getElementById("type").value = 'All'
                  break;
                case 'both':
                  passfilt(ch, passivesAllInfo, f, elemRegex, attrRegex, chosenAttr, typeVal)
                  abfilt(ch, abilitiesAllInfo, f, elemRegex, attrRegex, chosenAttr, typeVal)
                  document.getElementById("type").disabled = false;
                  document.getElementById('whenSel').disabled = false;
                  break;
                default:

              }
          })
        }
      })
      pageList = newList.filter(l=> l.includes('element') && l.includes('rarity') && l.includes('attrSel') && l.includes('apply') && l.includes('type') && l.includes('race') && l.includes('whenSel'))

  pageList.map(a => a.length = 17)
      if (pageList.length == 0 ) {
        document.getElementById('dialog').style.display = 'block';
        document.getElementById('closedialog').onclick = function() {
        document.getElementById('dialog').style.display = 'none';
        }
      }
    //  charsAllInfo.map(a => a.splice(a.indexOf('sep'), 8))
    }
    let startF = document.getElementById('start2')
    let clearF = document.getElementById('clear2')
    let enemies = true
     startF.addEventListener('click', function() {
         filterEn()
         loadList()
     })
      clearF.addEventListener('click', function() {
        filters.map(f => f.value = 'All')
        filterEn()
        loadList()
      })
    //links opening new pages
    let charLinks = Array.from(document.querySelectorAll('#enemiesTable tr td:nth-child(3)'));
    charLinks.map(link => {
      link.addEventListener('click', function() {
        charLink(this)
      })
    })
    //abilities imgs
    let switchskills = Array.from(document.querySelectorAll('.tooltipMy:not(.tooltiptext)'))

    switchskills.map((abil,i) => {
      let switchskillsimg = document.createElement('div')
      let src = abilImagesComplete.filter(img => switchskills[i].children[0].innerText.trim() == img.id)
      if (src.length > 0) {
        switchskillsimg.innerHTML = src[0].outerHTML
        switchskills[i].prepend(switchskillsimg)
      }
    })
  // Icons on sides of the table
    let abilrows = Array.from(document.querySelectorAll('#applyBody tr'))
    abilrows.shift()
    for (var i = 0; i < abilrows.length; i++) {
      let name = abilrows[i].children[2]
      if (name.offsetLeft == 107){
        i % 2 == 0 ? name.style.backgroundColor = '#f5f7f8' : name.style.backgroundColor = 'rgb(100, 167, 189)'
      }
      abilrows[i].addEventListener('mousemove', function() {
        showIcon(name, charsImagesComplete)
      })
      abilrows[i].addEventListener('mouseleave', function(){
        hideIcon(charsImagesComplete)
      })

    }
    // specialcases 'sc'
    let sc = Array.from(document.querySelectorAll('.spec'))
    sc.map(s=> {
      let txt = s.innerText == undefined ? '' : s.innerText.split(':')
      s.innerHTML = '<span style="font-weight:600">' + txt[0] + ': </span><span>' + (txt[1] == undefined ? '' : txt[1].split('-').join(', ')) + '</span>'
      s.innerHTML = s.innerText == ': ' || s.innerText == ':' ? '' : s.innerHTML
    })
    //change stats
    let start= document.querySelectorAll('#lvlbtns button')[0]
    let resetlvls = document.querySelectorAll('#lvlbtns button')[1]
    let stat = document.getElementById('chooselvl')
    let hero = document.getElementById('herolvl')
    stat.value = 100
    hero.disabled = true
    let hpStat = Array.from(document.querySelectorAll('#applyBody .jobRow td:nth-child(n+10)'))
    start.addEventListener('click', function() {
      hpStat.map(hp => hp.innerHTML = Math.ceil(hp.id/100 * stat.value))
    })
    resetlvls.addEventListener('click', function(){
      stat.value = 100
      hpStat.map(hp => hp.innerHTML = Math.ceil(hp.id/100 * stat.value))
    })
    start.click()
}

  function drawList() {
    document.getElementById("applyBody").innerHTML = "";
    var applyBody = document.getElementById('applyBody');
//    let pageList = appliesAllInfo
    //pageList.pop()
    for (var i=0; i < pageList.length; i++) {
      var jobItem = Object.values(pageList[i])
      jobItem.pop()
      jobItem.splice(1, 0, "pic")
      let attrs = jobItem.splice(4,4)
      jobItem.splice(8,4)
      jobItem.push(attrs[0],attrs[1], attrs[2], attrs[3])
      //enemy passives
      jobItem[4] = jobItem[4].split('-')
      jobItem[4] = jobItem[4].map((item,i) => item = (i+1) + '. ' + '<span class="tooltipMy">' + item + '<span class="tooltipMy tooltiptext"></span></span>')
      jobItem[4] = jobItem[4].join('<br>')
      //enemy random abils
      jobItem[5] = jobItem[5].replace(/\|/g, '-')
      jobItem[5] = jobItem[5].split('-')
      function count(arr) {
        return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
      }
      jobItem[5] = count(jobItem[5])
      jobItem[5] = Object.entries(jobItem[5]).map((k,v) => '<span class="tooltipMy"><span class="enabil">' + k[0] + '</span><span class="tooltipMy tooltiptext"></span></span> (x' + k[1] + ')').join('<br>')
      //jobItem[5] = jobItem[5].map(item => item = '<span class="tooltipMy enabil"><span class="name">' + item + '</span><span class="tooltipMy tooltiptext"></span></span>')
      //jobItem[5] = jobItem[5].join('<br>')
      //threshold
      let thresh = jobItem[6]
      if (thresh == '') {
      } else if (thresh.includes('|') == false) {
          thresh = thresh.split('-').join(', ')
      } else if (thresh.split('|').length == 3) {
          thresh.split('|')
      } else if (thresh.split('|').length == 2) {
          thresh = thresh.split('|')
          thresh.push(thresh[1])
      }

      thresh = thresh.includes('|') ? thresh.split('|') : thresh
      if (typeof thresh !== 'string') {
        thresh = thresh == '' ? '' : thresh.map(it => it = it == '' ? 'none' : it)
        thresh = thresh == '' ? '' : thresh.map((it,i) => it !== '' ? '<span class="thresh' + (i+1) + '">' + it.split('-').join(', ') + '</span>' : '')
        thresh = thresh == '' ? '' : thresh.map(t => t == '' ? '' : t.replace('none', ''))
        thresh = thresh == '' ? '' : thresh.join('<br>')
      }
      jobItem[6] = thresh
      // special cases jobitem[7]
      //in loadList dues to':' used to split messing with imgssrc
      jobItem[7] = jobItem[7].split('|')
      jobItem[7] = jobItem[7].map(a => '<span class="spec">' + a + '</span>')
      jobItem[7] = jobItem[7].join('<br>')
    //  jobItem[7] = jobItem[7].replace(/[a-z]:/g)

      var tableRow = document.createElement('tr')
      tableRow.classList.add('jobRow')
      i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = '#a6b7be'
    //    i % 2 == 0 ? tableRow.style.color = 'bloack' : tableRow.style.color = 'white'

      jobItem.map( (job, ind) => {
        var cell = document.createElement('td')
        cell.innerHTML = job
        cell.className = cell.innerText
        //  Array.from(cell.children).map(child => child.id = child.innerText.replace('/', '').trim())
        cell.id = cell.innerText


        /*  var tooltip = document.createElement('span')
          tooltip.classList.add('tooltipMy', 'tooltiptext')


            cell.innerHTML == jobItem[5] ? cell.appendChild(tooltip) && cell.classList.add('tooltipMy') : ''
            cell.innerHTML == jobItem[4] ? cell.appendChild(tooltip) && cell.classList.add('tooltipMy') : ''*/

            //add images to pic cell
            var imgComplete = charsImagesComplete.find(jobimg => jobimg.id == jobItem[2])

            if (cell.innerHTML == 'pic') {
              cell.id = 'pic'
              cell.innerHTML = ''
              cell.append(imgComplete)
            }

        tableRow.appendChild(cell)
        applyBody.append(tableRow)
      })
  }
  }

  document.getElementById('next').onclick = nextPage
  document.getElementById('first').onclick = firstPage
  document.getElementById('last').onclick = lastPage
  document.getElementById('prev').onclick = previousPage
  function check() {
      document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
      document.getElementById("prev").disabled = currentPage == 1 ? true : false;
      document.getElementById("first").disabled = currentPage == 1 ? true : false;
      document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
  //    setTimeout(function() {


  //    }, 100)
  }

  function load() {
      loadList();
  }
load()

  $("#search").on("keyup", function() {
    var input = $(this).val().toLowerCase();
      $("#applyBody tr").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
      });
    });
  }
