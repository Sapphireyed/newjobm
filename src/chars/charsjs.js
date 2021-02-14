import { tbody } from './heroesTable.js'
import { applyBody } from './enemiesTable.js'
//import { openNew } from '../basicfn/openNew.js'
import { abilitiesAllInfo, descFinale, abilSkills, abilEffects, abilTraits,
        passivesAllInfo, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        glossAllInfo, appliesAllInfo,charsAllInfo} from '../abilitiesData.js'
        import { matImagesComplete, abilImagesComplete, charsImagesComplete} from '../img/imgsHTML.js'
//import { openNew } from '../basicfn/openNew.js'
//import { abilImagesComplete} from '../img/imgsHTML.js'
//import { passivesfilter } from './passivesfilter'
import {filterPass} from '../basicfn/filters.js'
import { showIcon, hideIcon } from '../basicfn/hoverIcons.js'
import star from '../img/events/StarColor1.png'
var $ = require("jquery")
import tablesorter from 'tablesorter';

// TOOLTIP
function tooltips() {
//tableRows = document.querySelectorAll('tr')

var descFinaleSplit = descFinale.map(desc => desc.split(':<br>'))
var passiveFinaleSplit = passiveFinale.map(desc => desc.split(':<br>'))
var switchCells =  document.getElementsByClassName('tooltiptext')
for (var i=0; i < switchCells.length; i++) {
    var switchName = switchCells[i].parentNode.innerText.trim()
    var tooltipsAb = descFinaleSplit.filter(desc=> desc[0] == switchName)
    var tooltipsPass = passiveFinaleSplit.filter(desc=> desc[0] == switchName)
    var tooltipsApply = abilTraits.map(trait => trait.split(': ')).filter(desc=> desc[0] == switchName)
    var passApply = passiveTraits.map(trait => trait.split(': ')).filter(desc=> desc[0] == switchName)

    tooltipsAb.map((desc, ind) => {
      if (desc[0] == switchName) {
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
        switchCells[i].innerHTML = desc[1] + '<br> <span class="tipApply">(' + passApply[ind][1] + ')</span>'
        switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\(, , , \)|, ,|, , ,|\(, , , \)|\(\)|<br><br>/g, '')
        switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/\( \)/g, '')
        switchCells[i].innerHTML = switchCells[i].innerHTML.replace(/, \)/g, ')')
      }
    })
  }
}

let currentPage0 =[]
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

  pagesSel.onchange = pagesNum
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
    drawList();
    check();
    $('.myTable').tablesorter();
    tooltips()
    //abilities imgs
    let switchskills = Array.from(document.querySelectorAll('.abil'))
    console.log(switchskills)
    switchskills.map((abil,i) => {
      let switchskillsimg = document.createElement('div')
      let src = abilImagesComplete.filter(img => switchskills[i].id == img.id)

      if (src.length > 0) {
        switchskills[i].prepend(switchskillsimg)
        switchskillsimg.innerHTML = src[0].outerHTML
      }
    })
    let pics= document.querySelectorAll('tr td:nth-child(2)')
// Icons on sides of the table
    let abilrows = Array.from(document.querySelectorAll('tr'))
    abilrows.shift()
    for (var i = 0; i < abilrows.length; i++) {
      let name = abilrows[i].children[2]


      abilrows[i].addEventListener('mousemove', function() {
        showIcon(name, charsImagesComplete)
      })
      abilrows[i].addEventListener('mouseleave', function(){
        hideIcon(charsImagesComplete)
      })

    }
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
        jobItem[4] = jobItem[4] == '' ? '' : '<span class="tooltipMy pass">' + jobItem[4] + '<span class="tooltipMy tooltiptext"></span></span>'
                    + (jobItem[5] == '' ? '' : '/<br>' + '<span class="tooltipMy pass">' + jobItem[5] + '<span class="tooltipMy tooltiptext"></span></span>')
        //abilities
        jobItem[6] = jobItem[6] == '' ? '' : '<span class="tooltipMy abil">' + jobItem[6] + '<span class="tooltipMy tooltiptext"></span></span>'
                   + (jobItem[7] == '' ? '' : '/<br>' + '<span class="tooltipMy abil">' + jobItem[7] + '<span class="tooltipMy tooltiptext"></span></span>')
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
          }
          Array.from(cell.children).map(child => child.id = child.innerText.replace('/', '').trim())
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

  pagesSel.onchange = pagesNum
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
    drawList();
    check();
    $('.myTable').tablesorter();

    //abilities imgs
    let switchskills = Array.from(document.querySelectorAll('.tooltipMy.enabil:not(.tooltiptext)'))

    switchskills.map((abil,i) => {
      let switchskillsimg = document.createElement('div')
      let src = abilImagesComplete.filter(img => switchskills[i].innerText.trim() == img.id)
console.log(switchskills[i].innerText.trim())
      if (src.length > 0) {
        switchskillsimg.innerHTML = src[0].outerHTML
            console.log(switchskillsimg)
        switchskills[i].prepend(switchskillsimg)
                  console.log(switchskills[i])
    //    switchskillsimg.innerHTML = src[0].outerHTML
      }
    })
    tooltips()
  // Icons on sides of the table
    let abilrows = Array.from(document.querySelectorAll('tr'))
    abilrows.shift()
    for (var i = 0; i < abilrows.length; i++) {
      let name = abilrows[i].children[2]

      abilrows[i].addEventListener('mousemove', function() {
        showIcon(name, charsImagesComplete)
      })
      abilrows[i].addEventListener('mouseleave', function(){
        hideIcon(charsImagesComplete)
      })

    }
}

  function drawList() {
    document.getElementById("applyBody").innerHTML = "";
    var applyBody = document.getElementById('applyBody');
//    let pageList = appliesAllInfo
    pageList.pop()
    for (var i=0; i < pageList.length; i++) {
      var jobItem = Object.values(pageList[i])
      jobItem.pop()
      jobItem.splice(1, 0, "pic")
      let attrs = jobItem.splice(4,4)
      jobItem.splice(8,4)
      jobItem.push(attrs[0],attrs[1], attrs[2], attrs[3])
      jobItem[4] = jobItem[4].split('-')
      jobItem[4] = jobItem[4].map(item => item = '<span class="tooltipMy">' + item + '<span class="tooltipMy tooltiptext"></span></span>')
      jobItem[4] = jobItem[4].join('/<br>')
      jobItem[5] = jobItem[5].split('-')
      jobItem[5] = jobItem[5].map(item => item = '<span class="tooltipMy enabil">' + item + '<span class="tooltipMy tooltiptext"></span></span>')
      jobItem[5] = jobItem[5].join('/<br>')
      //jobItem.splice(3, 2)


      //  jobItem.pop()


    //    jobItem.splice(7, 2, '', '')
      var tableRow = document.createElement('tr')
      tableRow.classList.add('jobRow')
      i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = '#a6b7be'
    //    i % 2 == 0 ? tableRow.style.color = 'bloack' : tableRow.style.color = 'white'

      jobItem.map( (job, ind) => {
        var cell = document.createElement('td')
        cell.className = job
        cell.innerHTML = job
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
      $("#abilsBody tr").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
      });
    });
  }
