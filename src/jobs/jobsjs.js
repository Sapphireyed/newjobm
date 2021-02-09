//const Tabletop = require('tabletop');
global.fetch = require('node-fetch');
const GetSheetDone = require('get-sheet-done');
const id = '1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g';
import { tbody } from './jobsTable.js'
import { openNew } from '../basicfn/openNew.js'
import { abilitiesAllInfo, descFinale, abilSkills, abilEffects, abilTraits,
        passivesAllInfo, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits,
        jobsDataAll} from '../abilitiesData.js'
//import { openNew } from '../basicfn/openNew.js'
import star from '../img/events/StarColor1.png'
import { matImagesComplete, jobImagesComplete, abilImagesComplete} from '../img/imgsHTML.js'
import { jobsfilter } from './jobsfilter'
import theadimg from '../img/Jobs/BG/inthp.jpg'
import { changeStats } from '../basicfn/changeStats.js'
import {filterAb,  filterPass} from '../basicfn/filters.js'
import { showIcon, hideIcon } from '../basicfn/hoverIcons.js'
var $ = require("jquery")
import tablesorter from 'tablesorter';


export { jobValues }
let jobValues = []
export function jobs() {
  GetSheetDone.raw(id, 7)
  .then((data) => {
    // get mobile with to use later
    let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    let targetWidth = 768;
    // filter elements
    var rarFilter = document.getElementById('rarity')
    var elemFilter = document.getElementById('element')
    var attrFilter = document.getElementById('attrSel')
    var filters = document.getElementsByClassName('filter')
    let crystal = document.getElementById('jobmCrystal')
    let chooselvl = document.getElementById('chooselvl')
    //       J O B S
    var jobsSheet = data
    var jobsSheetArrs = Object.entries(jobsSheet);
    var jobsRows = jobsSheetArrs[2][1];
    jobsRows.shift()
    jobsRows.map(job => {
      for (var i=0; i< job.length; i++) {
        job[i] == undefined ? job.splice(i,1, '') : job[i]
      }
      return job
    })
    var job = Object.entries(jobsRows);

    job.map(job => jobValues.push(job[1]))


    // PAGINATIOM
    var pagesSel = document.getElementById('numOfPages')
    var list = jobValues
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
    var jobsBody = document.getElementById('jobsBody');

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

//    searchin.onchange = function() {
//      for (var i=0; i< filters.length; i++) {
//        filters[i].onchange()
//      }
//    }

    ///////

    drawList();
    check();
    jobLinks = document.querySelectorAll('#jobsTable tr td:nth-child(3)');
    for (var i = 0; i < jobLinks.length; i++) {
      jobLinks[i].addEventListener('mousemove', function() {
      //  loadList()
        showIcon(this, jobImagesComplete)
      })
      jobLinks[i].addEventListener('click', function() {
        jobLink(this)
      })
      jobLinks[i].addEventListener('mouseleave', function(){
        hideIcon(jobImagesComplete)
      })
    }

    chooselvl.value = 10
    crystal.value = 0

      if (numOfPages.value == 'all') {
        document.getElementById("next").disabled = true
        document.getElementById("prev").disabled = true
        document.getElementById("first").disabled = true
        document.getElementById("last").disabled = true
      } else {
        check()
      }

    //adjust stats
    let hp = Array.from(document.querySelectorAll('.jobRow td:nth-child(8)'))
    let str = Array.from(document.querySelectorAll('.jobRow td:nth-child(9)'))
    let agi = Array.from(document.querySelectorAll('.jobRow td:nth-child(10)'))
    let int = Array.from(document.querySelectorAll('.jobRow td:nth-child(11)'))
    chooselvl.onchange = function() {
      changeStats(hp, this)
      changeStats(str, this)
      changeStats(agi, this)
      changeStats(int, this)
    }
    crystal.onchange = function() {
      changeStats(hp, chooselvl)
      changeStats(str, chooselvl)
      changeStats(agi, chooselvl)
      changeStats(int, chooselvl)
    }

    //switch imgs
    let switchskills = document.querySelectorAll('td .tooltipMy')

    for (var i=0; i< switchskills.length; i++) {
      let switchskillsimg = document.createElement('div')
      let src = abilImagesComplete.filter(img => switchskills[i].parentNode.id == img.id)
      if (src.length > 0) {
        switchskills[i].parentNode.prepend(switchskillsimg)
        switchskillsimg.innerHTML = src[0].outerHTML
      }
    }
  //  console.log(switchskills.map(skill => skill.id))

    //SORT
      $('.myTable').tablesorter();  // FILTERS (explained in filters onchange gunction)
  Array.from(filters).map(f => f.value = 'All')

// filters
//filters = Array.from(filters)
//filters.map(f=> f.value = 'All')
tableRows = document.querySelectorAll('tr')

// FILTERS
function filter(el) {

  var elem = el.value
  let filter = el.id
  tableRows = Array.from(tableRows)
  for (var ind = 1; ind < tableRows.length; ind++) {
    //hide all rows. Particular rowswill be isplayed as per filters
    tableRows[ind].classList.add('d-none', 'boo')
  //  console.log(tableRows[ind].classList)
    //remove all classes added during preious filter run.
    tableRows[ind].classList.remove('7', '6', '5', '4', '3', '2', '1', filter)

    if (elem == pageList[ind-1][2]) {  // rarity
      tableRows[ind].classList.add(filter)
    }
    let pageList2 = pageList
    switch (searchin.value) {
      case 'switch':
        filterAb(abilitiesAllInfo, elem, filter, tableRows, pageList, filters,ind, 8, 5)
        document.getElementById('whenSel').disabled = true;
        document.getElementById('type').disabled = false;
        document.getElementById("whenSel").value = 'All'
        break;
      case 'passive':
        filterPass(passivesAllInfo, elem, filter, tableRows, pageList2, filters,ind, 7, 4)
        document.getElementById("type").disabled = true;
        document.getElementById('whenSel').disabled = false;
        document.getElementById("type").value = 'All'
        break;
      case 'both':
        filterAb(abilitiesAllInfo, elem, filter, tableRows, pageList, filters,ind, 8, 5)
        filterPass(passivesAllInfo, elem, filter, tableRows, pageList2, filters,ind, 7, 4)
        document.getElementById("type").disabled = false;
        document.getElementById('whenSel').disabled = false;
        break;
      default:

    }
    // counter adds numeric classesfor each much
  var counter = 1
    for (var index=0; index < filters.length; index++) {
      if (tableRows[ind].classList.contains(filters[index].id) || filters[index].value == 'All') {
        tableRows[ind].classList.add(counter += 1)
      }
    }
    if (tableRows[ind].classList.contains('7')) {
      tableRows[ind].classList.remove('d-none')
    } else {
      tableRows[ind].classList.add('d-none')
    }

  }
}

 //fire filter function on any filter change
function cursorLoad() {
  document.body.style.cursor = 'progress'
}
//function cursorDef() {
//  document.body.style.cursor = 'default'
//}

let searchin = document.getElementById('searchin')
const eventChange = new Event('change')
 for (var i=0; i< filters.length; i++) {

   filters[i].addEventListener('change', function() {
     if (Array.from(filters).filter(f => f.value == 'All').length == filters.length - 1 && this.value !== 'All') {
       let pagesVal = pagesSel.value
       pagesSel.value = 'all'
       let val = this.value
       pagesSel.onchange()
       this.value = val
       pagesSel.value = pagesVal
       numberPerPage = pagesVal
       document.getElementById("next").disabled = false;
       document.getElementById("last").disabled = false
     }
   })

   filters[i].addEventListener('change', function() {
     let el = this
     filter(el)
     let displayed = Array.from(document.querySelectorAll('#jobsBody tr')).filter(tr => tr.classList.contains('d-none') == false)
     displayed.map((tr, index) => {
       index >= pagesSel.value ? tr.classList.add('d-none') : ''
     })
    // cursorDef()
   })
   filters[i].value = 'All'
 }
 searchin.onchange = function() {
  for (var i=0; i< filters.length; i++) {
    filters[i].dispatchEvent(eventChange)
  }
}
setTimeout(function() {
  tooltips()
},200)




/*    function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("jobsTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  // Make a loop that will continue until
  //no switching has been done:
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    rows = Array.from(rows)

    // Loop through all table rows (except the
    //first, which contains table headers):
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      // Get the two elements you want to compare,
      //one from current row and one from the next:
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      // Check if the two rows should switch place,
      //based on the direction, asc or desc:
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      // If a switch has been marked, make the switch
      //and mark that a switch has been done:
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      // If no switching has been done AND the direction is "asc",
      //set the direction to "desc" and run the while loop again.
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}*/

/*    $(document).ready(function() {
        $(".myTable").tablesorter();
    })*/
}
// TOOLTIP
function tooltips() {
tableRows = document.querySelectorAll('tr')

var descFinaleSplit = descFinale.map(desc => desc.split(':<br>'))
var passiveFinaleSplit = passiveFinale.map(desc => desc.split(':<br>'))
var switchCells =  document.getElementsByClassName('tooltiptext')

for (var i=0; i < switchCells.length; i++) {
    var switchName = switchCells[i].parentNode.innerText
    var tooltipsAb = descFinaleSplit.filter(desc=> desc[0] == switchName)
    var tooltipsPass = passiveFinaleSplit.filter(desc=> desc[0] == switchName)
    var tooltipsApply = abilTraits.map(trait => trait.split(': ')).filter(desc=> desc[0] == switchName)
    var passApply = passiveTraits.map(trait => trait.split(': ')).filter(desc=> desc[0] == switchName)
    
    tooltipsAb.map((desc, ind) => {
      if (desc[0] == switchName) {
      //  console.log(desc[1])
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
//FILTERS


function drawList() {
    document.getElementById("jobsBody").innerHTML = "";
      for (var i=0; i < pageList.length; i++) {
        let sep = pageList[i].indexOf('sep')
        pageList[i].includes('sep') ? pageList[i].splice(sep, pageList[i].length) : pageList[i]
        var jobItem = Object.values(pageList[i])

      //  jobItem[i] = jobItem[i] == undefined ? '' : jobItem[i]
        jobItem.splice(1, 0, "pic")
        var attrs = jobItem.splice(4, 4)
        jobItem[6] = (jobItem[6] == '' || jobItem[6] == undefined) ? '' : jobItem[6] + ' x5' + '<br>'
        jobItem[7] = (jobItem[7] == '' || jobItem[7] == undefined) ? '' : jobItem[7] + ' x3' + '<br>'
        jobItem[8] = (jobItem[8] == '' || jobItem[8] == undefined) ? '' : jobItem[8] + ' x2' + '<br>'
        jobItem[9] = (jobItem[9] == '' || jobItem[9] == undefined) ? '' : jobItem[9] + ' x1' + '<br>'
        jobItem[6] = jobItem[6] + jobItem[7] + jobItem[8] + jobItem[9]
        jobItem.length = 11
        jobItem[0] = jobItem[0] + '.'
        jobItem.splice(7, 3)
        attrs.map(attr => jobItem.push(attr))

        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
        i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = '#9eb1bb'


        jobItem.map( job => {
          var cell = document.createElement('td')
          switch (job) {
              case "1":
                  cell.innerHTML = '<td><img id="star" src="' + star + '" width="25" height="25"><span style="color: transparent">1</span></td>'
                  break;
              case "2":
                  cell.innerHTML = '<td><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><span style="color: transparent">2</span></td>'
                  break;
              case "3":
                  cell.innerHTML = '<td><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><span style="color: transparent">3</span></td>'
                  break;
              case "4":
                  cell.innerHTML = '<td><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><span style="color: transparent">4</span></td>'
                  break;
              case "5":
                  cell.innerHTML = '<td><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><img id="star" src="' + star + '" width="25" height="25"><span style="color: transparent">5</span></td>'
                  break;
              default:
                  cell.innerHTML = '<td>' + job + '</td>'
          }
          cell.id = cell.innerHTML
          var tooltip = document.createElement('span')
          tooltip.classList.add('tooltipMy', 'tooltiptext')


            cell.innerHTML == jobItem[5] ? cell.appendChild(tooltip) && cell.classList.add('tooltipMy') : ''
            cell.innerHTML == jobItem[4] ? cell.appendChild(tooltip) && cell.classList.add('tooltipMy') : ''

          //add images to pic cell
          var imgComplete = jobImagesComplete.find(jobimg => jobimg.id == jobItem[2])

          if (cell.innerHTML == 'pic') {
            cell.id = 'pic'
            cell.innerHTML = ''
            cell.append(imgComplete)
          }


          tableRow.appendChild(cell)
          jobsBody.append(tableRow)

          Array.from(document.querySelectorAll('.jobRow td:nth-child(3)')).filter(td => {
            td.childNodes.length > 1 ? td.removeChild(td.childNodes[1]) : ''
          })
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
//window.addEventListener('load', load)
//document.getElementById('first').click()
var tableRows = document.querySelectorAll('tr')
var jobLinks //= document.querySelectorAll('#jobsTable tr td:nth-child(3)')
let filtersdiv = document.getElementById('jobs')
  /*  //search
    document.getElementById('search').onfocus = function() {
      document.getElementById('search').value=''
    }
    document.getElementById('search').onblur = function() {
      document.getElementById('search').value='Search...'
    }*/
    $("#search").on("keyup", function() {
      var input = $(this).val().toLowerCase();
        $("#jobsBody tr").filter(function(){
          $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
        });
      });
// jobLinks

function jobLink(item) {
  var i = item.parentNode.firstChild.innerHTML
  openNew(jobValues, i, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits)
}

//clear filters
let clear = document.getElementById('jobsclear')
clear.onclick = function() {
  Array.from(filters).map(filter => filter.value = 'All')
  load()
}

//let str = document.querySelectorAll()
}) // end of getsheetdone.then
}
