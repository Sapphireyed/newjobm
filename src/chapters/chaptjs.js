import { tbody } from './chaptTable.js'
import { openNew } from '../basicfn/openNew.js'
import { abilities, abilitiesAllInfo, descFinale, abilSkills, abilEffects, abilTraits,
        passivesAllInfo, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        jobsDataAll, appliesAllInfo, charsAllInfo, chaptAllInfo} from '../abilitiesData.js'
//import { openNew } from '../basicfn/openNew.js'
import { abilImagesComplete, charsImagesComplete} from '../img/imgsHTML.js'
import { abilsfilter } from './chaptersfilter'
import {filterAb} from '../basicfn/filters.js'
import { showIcon, hideIcon } from '../basicfn/hoverIcons.js'
var $ = require("jquery")
import tablesorter from 'tablesorter';

export function chaptersFn() {
//  var filters = document.getElementsByClassName('filter')
  var pagesSel = document.getElementById('numOfPages')
  var list = chaptAllInfo
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
    var jobsBody = document.getElementById('jobsBody');
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

      // heroes
    /*  let chars = charsAllInfo.filter(char => char[13] == name.innerText || char[14] == name.innerText)
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
      })*/

    }

  }

  function drawList() {

    document.getElementById("jobsBody").innerHTML = "";
      for (var i=0; i < pageList.length; i++) {
        var jobItem = Object.values(pageList[i])
        jobItem.splice(1, 0, "pic")
        if (jobItem[3] !== 'none') {
          jobItem[2] = jobItem[2] + '(' + jobItem[3] + ')'
        }
        jobItem.splice(3, 1)
        var imgComplete = charsImagesComplete.filter(jobimg => jobimg.id == jobItem[8].split('-')[0])[0]
        if (jobItem[8].includes('-')) {
          let boss = jobItem[8].split('-').map(item => charsImagesComplete.filter(img => img.id == item)[0])
          jobItem[8] = jobItem[8].split('-').map((item,ind) => '<div class="row">' + '<div class="col-3">' + boss[ind].outerHTML + '</div><div class="col-9">' + item + '</div></div>').join(', ')
        } else {
          let boss = charsImagesComplete.filter(img => img.id == jobItem[8])[0]
          jobItem[8] = '<div class="row"><div class="col-3">' + boss.outerHTML + '</div><div class="col-9">' + jobItem[8] + '</div></div>'
        }
        jobItem[6] = 'enemies: <br>' + jobItem[6] + '<br>mini-boss: ' + jobItem[7] + '<br>Boss: ' + jobItem[8]
        jobItem.splice(7, 2)
        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
        i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = 'rgba(100, 167, 189, 9)'
    //    i % 2 == 0 ? tableRow.style.color = 'bloack' : tableRow.style.color = 'white'
        jobItem.splice(9,1)
        jobItem.push('')
        jobItem.map( (job) => {
          var cell = document.createElement('td')
          switch (job) {
            default: cell.innerHTML =  job
            cell.id = cell.innerText
          }



          if (cell.innerHTML == 'pic') {
            cell.id = 'pic'
            cell.innerHTML = ''
            cell.append(imgComplete)
          }

          tableRow.appendChild(cell)
          jobsBody.append(tableRow)

        /*  Array.from(document.querySelectorAll('.jobRow td:nth-child(3)')).filter(td => {
            td.childNodes.length > 1 ? td.removeChild(td.childNodes[1]) : ''
          })*/
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
    $("#jobsBody tr").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
    });
  });
}
