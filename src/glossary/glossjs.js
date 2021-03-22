import { tbody } from './glossTable.js'
import { applyBody } from './glossTable2.js'
//import { openNew } from '../basicfn/openNew.js'
import { abilitiesAllInfo, descFinale, abilSkills, abilEffects, abilTraits,
        passivesAllInfo, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        jobsDataAll, glossAllInfo, appliesAllInfo} from '../abilitiesData.js'
//import { openNew } from '../basicfn/openNew.js'
//import { abilImagesComplete} from '../img/imgsHTML.js'
//import { passivesfilter } from './passivesfilter'
import {filterPass} from '../basicfn/filters.js'
import { showIcon, hideIcon } from '../basicfn/hoverIcons.js'
var $ = require("jquery")
import tablesorter from 'tablesorter';

export function glossFn() {
//console.log(glossRaw)
  var pagesSel = document.getElementById('numOfPages')
  var list = glossAllInfo
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

// Icons on sides of the table
    let abilrows = Array.from(document.querySelectorAll('tr'))
    abilrows.shift()
    for (var i = 0; i < abilrows.length; i++) {
      let name = abilrows[i].children[2]

    /*  abilrows[i].addEventListener('mousemove', function() {
        showIcon(name, abilImagesComplete)
      })
      abilrows[i].addEventListener('mouseleave', function(){
        hideIcon(abilImagesComplete)
      })*/

    }



  }

  function drawList() {
    document.getElementById("abilsBody").innerHTML = "";
      for (var i=0; i < pageList.length; i++) {
        var jobItem = Object.values(pageList[i])
        jobItem.pop()
        let desc = jobItem.pop()
      //  jobItem[i] = jobItem[i] == undefined ? '' : jobItem[i]
      //  jobItem.splice(1, 0, "pic")
        jobItem.splice(2, 2)
        jobItem.splice(2, 0, desc)
        jobItem.splice(6,1)
      //  jobItem.pop()


    //    jobItem.splice(7, 2, '', '')
        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
        i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = '#eaa987'
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
            default: cell.innerHTML = '<td>' + job.replace('N/A', '') + '</td>'
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
let skip = Array.from(document.getElementsByClassName('skip'))
skip[0].style.animation = 'skipTop 20s linear infinite alternate'
skip[1].style.animation = 'skipBottom 20s linear infinite alternate'
$("#search").on("keyup", function() {
  var input = $(this).val().toLowerCase();
    $("#abilsBody tr").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
    });
  });
}

export function applyTableFn() {

  var pagesSel = document.getElementById('numOfPages')
  var list = appliesAllInfo
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

  // Icons on sides of the table
    let abilrows = Array.from(document.querySelectorAll('tr'))
    abilrows.shift()
    for (var i = 0; i < abilrows.length; i++) {
      let name = abilrows[i].children[2]

    /*  abilrows[i].addEventListener('mousemove', function() {
        showIcon(name, abilImagesComplete)
      })
      abilrows[i].addEventListener('mouseleave', function(){
        hideIcon(abilImagesComplete)
      })*/

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
        let desc = jobItem.pop()
    //    jobItem.splice(1, 0, "pic")
        jobItem.splice(2, 2)
        jobItem.splice(2, 0, desc)
        jobItem.splice(6,1)

      //  jobItem.pop()


    //    jobItem.splice(7, 2, '', '')
        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
        i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = '#eaa987'
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
            default: cell.innerHTML = '<td>' + job.replace('N/A', '') + '</td>'
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
