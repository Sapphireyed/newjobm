//const Tabletop = require('tabletop');
global.fetch = require('node-fetch');
const GetSheetDone = require('get-sheet-done');
import { tbody } from './jobsTable.js'
import {jobsfilter} from './jobsfilter'
import {abilities,
        abilitiesAllInfo, abilitiesArr, descFinale, abilBasic, abilSkills, abilEffects, abilTraits,
        passivesAllInfo, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits} from '../abilitiesData.js'
var $ = require("jquery")
import 'tablesorter'
import { rarityFilter, elementFilter, attrsFilter } from '../basicfn/rarityFilter.js'
import { openNew } from '../basicfn/openNew.js'
const id = '1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g';

export function jobs() {

  GetSheetDone.raw(id, 7)
  .then((data) => {

    var jobsSheet = data
    //       J O B S
    var rarFilter = document.getElementById('rarity')
    var elemFilter = document.getElementById('element')
    var attrFilter = document.getElementById('attrSel')
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

    var jobValues = job.map(job => job[1])


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
console.log(abilitiesAllInfo)
function loadList() {
  numberPerPage = parseInt(numberPerPage) || 'all'

  console.log(list)
    var jobsBody = document.getElementById('jobsBody');
    var begin
    if (numberPerPage == 10) {
      begin = ((currentPage - 1) * numberPerPage);
    } else if ( numberPerPage == 'all') {
      begin = 0
      numberPerPage = list.length
    } else {
       begin = currentPage == 1 ? currentPage - 1 : (currentPage-1)*numberPerPage
    }
    var end = begin + numberPerPage;
    pageList = list.slice(begin, end);
    drawList();
    check();
    //RARITY FILTER
    tableRows = document.querySelectorAll('tr')

  var filters = document.getElementsByClassName('filter')
  console.log(filters)
for (var i=0; i< filters.length; i++) {
  filters[i].onchange = test
}


function test() {
  var elem = this.value
  for (var ind = 1; ind < tableRows.length; ind++) {
    tableRows[ind].classList.add('d-none')
    tableRows[ind].classList.remove('4', '3', '2', '1', this.id)
  if (this.value == pageList[ind-1][2]) {  // rarity
    tableRows[ind].classList.add(this.id)
  }

  pageList[ind-1][8] = pageList[ind-1][8] == '' ? 'n/a' : pageList[ind-1][8]  // switch name
  var abilname = pageList[i-1][8]
  abilitiesAllInfo.map(a => {  //switch
    if (a[2] == pageList[ind-1][8] && a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>")) {
      tableRows[ind].classList.add(this.id)
    }
  })

  pageList[ind-1][7] = pageList[ind-1][7] == '' ? 'n/a' : pageList[ind-1][7]  // passive name
  passivesAllInfo.map(a => {
    if (a[2] == pageList[ind-1][7] && a.includes("<span class='" + elem.toLowerCase() + "'>" + elem + "</span>")) {
      tableRows[ind].classList.add(this.id)
    }
  })

var counter = 1
  for (var index=0; index < filters.length; index++) {
    if (tableRows[ind].classList.contains(filters[index].id) || filters[index].value == 'All') {
      tableRows[ind].classList.add(counter += 1)
    }
  }
console.log(counter)
  if (tableRows[ind].classList.contains('4')) {
    tableRows[ind].classList.remove('d-none')
  } else {
    tableRows[ind].classList.add('d-none')
  }
  }
}


  /*  rarFilter.addEventListener("change", function() {
      rarityFilter(tableRows, pageList, rarFilter, elemFilter, attrFilter)
    })
    rarFilter.value = 'Rarity'
    // ELEMENT FILTER
    elemFilter.addEventListener("change", function() {
      elementFilter(tableRows, pageList, elemFilter, passivesAllInfo, abilitiesAllInfo, rarFilter, attrFilter)
    })
    element.value = 'Element'
    // ATTRIBUTE FILTER
    attrFilter.addEventListener("change", function() {
      attrsFilter(tableRows, pageList, attrFilter, passivesAllInfo, abilitiesAllInfo, rarFilter,elemFilter)
    })
    attrFilter.value = 'Attribute'*/

    // jobLinks
    jobLinks = document.querySelectorAll('#jobsTable tr td:nth-child(3)');
    for (var i = 0; i < jobLinks.length;) {
        //jobLinksIndex.push(jobLinks[i].previousElementSibling.previousElementSibling.innerHTML)
        jobLinks[i].addEventListener("click", function() {
          var i = this.parentNode.firstChild.innerHTML
          openNew(jobValues, i, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits)
        })
        i++
    }
    $(document).ready(function() {
      $('.thead').click(function(){
        $(".myTable").tablesorter();
      });
    })
}

function drawList() {
  console.log(pageList)
    document.getElementById("jobsBody").innerHTML = "";
    //console.log(pageList)
      for (var i=0; i < pageList.length; i++) {
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
        i % 2 == 0 ? tableRow : tableRow.style.backgroundColor = 'white'

        jobItem.map( job => {
          var cell = document.createElement('td')
          var star = document.createElement('i')
          star.classList.add("fa", "fa-star")
          switch (job) {
              case "1":
                  cell.innerHTML = '<td><i class="fa fa-star"></i><span style="color: transparent">1</span></td>'
                  break;
              case "2":
                  cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">2</span></td>'
                  break;
              case "3":
                  cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">3</span></td>'
                  break;
              case "4":
                  cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">4</span></td>'
                  break;
              case "5":
                  cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">5</span></td>'
                  break;
              default:
                  cell.innerHTML = '<td>' + job + '</td>'
          }
          tableRow.appendChild(cell)
          jobsBody.append(tableRow)
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
}

function load() {
    loadList();
}
window.onload = load;
document.getElementById('first').click()


    var tableRows = document.querySelectorAll('tr')

    /*function rarityFilter() {
      for (var i = 1; i < tableRows.length; i++) {
        //var jobItem = pageList[i-1]
//console.log(jobItem.Rarity)
        tableRows[i].classList.add('d-none')
        if (rarFilter.value == pageList[i-1].Rarity) {
          tableRows[i].classList.remove('d-none')
        } else if (rarFilter.value == 'Rarity'){
          tableRows[i].classList.remove('d-none')
        }
      }
    }*/
    var jobLinks = document.querySelectorAll('#jobsTable tr td:nth-child(3)')
    //search
    document.getElementById('search').onfocus = function() {
      document.getElementById('search').value=''
    }
    document.getElementById('search').onblur = function() {
      document.getElementById('search').value='Search...'
    }
    $("#search").on("keyup", function() {
var input = $(this).val().toLowerCase();
  $("#jobsTable tr").filter(function(){
    $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
  });
});
  })
}
/*export function init() {
  Tabletop.init( {
    key: 'https://docs.google.com/spreadsheets/d/1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g/edit?usp=sharing',
  //  debug: true

    }
  ).then(function(data, tabletop) {
console.log(data.Abilities.elements[118].Multiplier)

    //console.log(columns)
    //get Object with lists of sheets
    var sheets = Object.entries(data).sort()
    /*0: abilities
      1: Chapters
      2: Characters
      3: Gachas
      4: Index
      5 Job Craft Chart
      6: Jobs
      7: Materials
      8: PassiveSkills
      9: Rules
      10: Skill Units
      11: Verlog
    //get seperate sheets. Each is an object with objects inside. 'elements' contains list of rows
    var jobsSheet = sheets[6][1]
    var charsSheet = sheets[2][1]
    var abilsSheet = sheets[0][1]
    var skillunits = sheets[10][1]

    // ABILITIES
    var abilsSheetArrs = Object.entries(abilsSheet);
    var abilsRows = abilsSheetArrs[4][1];
    var abil = Object.entries(abilsRows);
    var abilValues = abil.map(abil => abil[1])


    // SKILL UNITS
    var skillunitsArrs = Object.entries(skillunits);
    var skillunitsRows = skillunitsArrs[4][1];
    var skillunit = Object.entries(skillunitsRows);
    var skillunitValues = skillunit.map(skill => skill[1])

    var skillunitItem;
    for (var i=0; i < skillunitValues.length; i++) {
      skillunitItem = Object.values(skillunitValues[i])
    }



    //       J O B S
    var rarFilter = document.getElementById('rarity')
    var jobsSheetArrs = Object.entries(jobsSheet);
    var jobsRows = jobsSheetArrs[4][1];
    var job = Object.entries(jobsRows);
    var jobValues = job.map(job => job[1])


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
    var begin
    if (numberPerPage == 10) {
      begin = ((currentPage - 1) * numberPerPage);
    } else if ( numberPerPage == 'all') {
      begin = 0
      numberPerPage = list.length
    } else {
       begin = currentPage == 1 ? currentPage - 1 : (currentPage-1)*numberPerPage
    }
    var end = begin + numberPerPage;
    pageList = list.slice(begin, end);
    drawList();
    check();
    //RARITY FILTER
    tableRows = document.querySelectorAll('tr')
    rarFilter.addEventListener("change", function() {
      rarityFilter(tableRows, pageList, rarFilter)
    })
    rarFilter.value = 'Rarity'
    // jobLinks
    jobLinks = document.querySelectorAll('#jobsTable tr td:nth-child(3)');
    for (var i = 0; i < jobLinks.length;) {
        //jobLinksIndex.push(jobLinks[i].previousElementSibling.previousElementSibling.innerHTML)
        jobLinks[i].addEventListener("click", function() {
          var i = this.parentNode.firstChild.innerHTML
          openNew(jobValues, i)
        })
        i++
    }
    $(document).ready(function() {
      $('.thead').click(function(){
        $(".myTable").tablesorter();
      });
    })
}

function drawList() {
    document.getElementById("jobsBody").innerHTML = "";
    //console.log(pageList)
      for (var i=0; i < pageList.length; i++) {
        var jobItem = Object.values(pageList[i])
        jobItem.splice(1, 0, "pic")
        var attrs = jobItem.splice(4, 4)
        //console.log(jobItem)
        jobItem[6] = jobItem[6] == '' ? '' : jobItem[6] + ' x5' + '<br>'
        jobItem[7] = jobItem[7] == '' ? '' : jobItem[7] + ' x3' + '<br>'
        jobItem[8] = jobItem[8] == '' ? '' : jobItem[8] + ' x2' + '<br>'
        jobItem[9] = jobItem[9] == '' ? '' : jobItem[9] + ' x1' + '<br>'
        jobItem[6] = jobItem[6] + jobItem[7] + jobItem[8] + jobItem[9]
        jobItem.length = 11
        jobItem[0] = jobItem[0] + '.'
        jobItem.splice(7, 3)
        attrs.map(attr => jobItem.push(attr))

        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
        i % 2 == 0 ? tableRow : tableRow.style.backgroundColor = 'white'
        jobItem.map( job => {
          var cell = document.createElement('td')
          var star = document.createElement('i')
          star.classList.add("fa", "fa-star")
          switch (job) {
              case "1":
                  cell.innerHTML = '<td><i class="fa fa-star"></i><span style="color: transparent">1</span></td>'
                  break;
              case "2":
                  cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">2</span></td>'
                  break;
              case "3":
                  cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">3</span></td>'
                  break;
              case "4":
                  cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">4</span></td>'
                  break;
              case "5":
                  cell.innerHTML = '<td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span style="color: transparent">5</span></td>'
                  break;
              default:
                  cell.innerHTML = '<td>' + job + '</td>'
          }
          tableRow.appendChild(cell)
          jobsBody.append(tableRow)
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
}

function load() {
    loadList();
}
window.onload = load;
document.getElementById('first').click()


    var tableRows = document.querySelectorAll('tr')

    /*function rarityFilter() {
      for (var i = 1; i < tableRows.length; i++) {
        //var jobItem = pageList[i-1]
//console.log(jobItem.Rarity)
        tableRows[i].classList.add('d-none')
        if (rarFilter.value == pageList[i-1].Rarity) {
          tableRows[i].classList.remove('d-none')
        } else if (rarFilter.value == 'Rarity'){
          tableRows[i].classList.remove('d-none')
        }
      }
    }
    var jobLinks = document.querySelectorAll('#jobsTable tr td:nth-child(3)')

  })
}
//window.addEventListener('DOMContentLoaded', init)*/
