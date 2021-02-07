import { tbody } from './passivesTable.js'
import { openNew } from '../basicfn/openNew.js'
import { abilitiesAllInfo, descFinale, abilSkills, abilEffects, abilTraits,
        passivesAllInfo, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        jobsDataAll} from '../abilitiesData.js'
//import { openNew } from '../basicfn/openNew.js'
//import { abilImagesComplete} from '../img/imgsHTML.js'
import { passivesfilter } from './passivesfilter'
import {filterPass} from '../basicfn/filters.js'
import { showIcon, hideIcon } from '../basicfn/hoverIcons.js'
var $ = require("jquery")
import tablesorter from 'tablesorter';

export function passivesFn() {

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
    console.log(pageList)
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
      // Description
      let desc = passiveFinale.map(desc => desc.split(':<br>'))
      desc = desc.filter(d => d[0] == name.innerText)[0]
      abilrows[i].children[4].innerHTML = desc[1].replace(/<br><br>/, '')
      // Jobs

      let jobs = jobsDataAll.filter(job => job[7] == name.innerText)
      jobs = jobs == [] ? '' : jobs
      let ind = jobs == '' ? '' : jobs[0][0]

      abilrows[i].children[6].innerHTML = jobs == '' ? '' : jobs[0][1]
      abilrows[i].children[6].onclick = function(){
            console.log(ind)
        openNew(jobsDataAll, ind, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits)
      }
    }



  }

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
        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
        i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = '#abbcde'
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
