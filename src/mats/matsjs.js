import { tbody } from './matsTable.js'
import { openNew } from '../basicfn/openNew.js'
import { abilities, abilitiesAllInfo, descFinale, abilSkills, abilEffects, abilTraits,
        passivesAllInfo, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        jobsDataAll, appliesAllInfo, charsAllInfo, mats} from '../abilitiesData.js'
import { matsImgs} from '../importimgs.js'
//import { openNew } from '../basicfn/openNew.js'
import { matImagesComplete } from '../img/imgsHTML.js'
import { abilsfilter } from './matsfilter.js'
import {filterAb} from '../basicfn/filters.js'
import { showIcon, hideIcon } from '../basicfn/hoverIcons.js'
var $ = require("jquery")
import tablesorter from 'tablesorter';

export {matspics}
let matspics = Object.entries(matsImgs)
export function matsFn() {
//  var filters = document.getElementsByClassName('filter')
  var pagesSel = document.getElementById('numOfPages')
  var list = mats
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
    // chnge color of job based on its rarity
    let jobs = Array.from(document.querySelectorAll('.fromJob, .toJob'))
    jobs.map(j => {
      let classname = jobsDataAll.filter(data=> data[1] == j.innerText.trim())[0][2]
      switch (classname) {
        case '1':
          classname = 'one'
          break;
        case '2':
          classname = 'two'
          break;
        case '3':
          classname = 'three'
          break;
            case '4':
            classname = 'four'
            break;
          case '5':
            classname = 'five'
            break;
          default:

      }
      j.classList.add(classname)
    })

// Icons on sides of the table
    let abilrows = Array.from(document.querySelectorAll('tr'))
    abilrows.shift()

    for (var i = 0; i < abilrows.length; i++) {

    //  tooltipsFn(abilrows[i])
      let name = abilrows[i].children[2].innerText + '.png'

      // Jobs
      let jobLinks = Array.from(document.getElementsByClassName('openNew'))
      jobLinks.map(link =>{
        link.onclick = function() {
          let job = jobsDataAll.filter(job => job[1] == this.innerText)
          let ind = job[0][0]
          openNew('job', jobsDataAll, ind, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits)
        }
      })

    }

  }

  function drawList() {

    document.getElementById("jobsBody").innerHTML = "";
      for (var i=0; i < pageList.length; i++) {
        var jobItem = Object.values(pageList[i])
        //jobmania crystal special case
        jobItem[1] == 'Jobmania Crystal' ? jobItem.splice(jobItem.length-2, 0, '') : ''
        jobItem.splice(1, 0, "pic")
        let craft = jobItem[4]
        craft = craft.split('|')
        craft = craft.map(cr => '<span class="fromJob openNew">' + cr.split('-')[0] + '</span>' + ' -> ' + '<span class="toJob openNew">' +cr.split('-')[1] + '</span><br>')
        jobItem[4] = craft.join('')
        //jobmania crystal special case
        jobItem[1] == 'Jobmania Crystal' ? jobItem[5] = '' : ''
        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
        i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = '#c4c6f4'
        jobItem.map( (job) => {
          var cell = document.createElement('td')
          switch (job) {
            case 'Common':
              cell.innerHTML = '<span class="common">' + job + '</span>'
            default: cell.innerHTML = job
            cell.id = cell.innerText
          }

        var imgComplete = matImagesComplete.filter(jobimg => jobimg.id == jobItem[2])[0]

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
