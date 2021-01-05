//const Tabletop = require('tabletop');
global.fetch = require('node-fetch');
const GetSheetDone = require('get-sheet-done');
import { tbody } from './jobsTable.js'
import {jobsfilter} from './jobsfilter'
var $ = require("jquery")
import 'tablesorter'
import { rarityFilter } from '../basicfn/rarityFilter.js'
import { openNew } from '../basicfn/openNew.js'
const id = '1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g';

export {powlvl, unitDesc, abilitiesArr}

let abilAll = [{...Array}];
let abilSheet = []
let powlvl;
let unitDesc;
let abilitiesArr;

let abilities = {
  units:() => {
    return GetSheetDone
      .raw(id, 4).then(data => data.data).then(res => {
        res.shift()
        powlvl = res.map(row => {
          return {
            lvl: row[0],
            strAgiInt: row[1],
            maxHP: row[3] + '/' + row[2]
          }
        })
        powlvl.length = 8

        unitDesc = res.map(row => {
          return {
            skill: row[7],
            type: row[8],
            desc: row[9]
          }
        })
      })
  },

  abils:() => {
    return GetSheetDone
      .raw(id, 6).then(data => data.data).then(res => {
        res.shift()
        console.log(powlvl.map(lvl => lvl.lvl))
        abilitiesArr = res.map(row => {
            var desc1 = unitDesc.filter(res => row[5] == res.skill && row[6] == res.type)
            var multi1 = powlvl.filter(lvl => lvl.lvl == row[7])
            var multi1maxhp = multi1.map(multi => multi.maxHP)
            var multi1attr = multi1.map(multi => multi.strAgiInt)
            if (row[5] == 'Damage' || row[5] == 'Heal')  //|| (row[5] == "Protect" && (row[6] == 'MaxHP' || row[6] == 'Strength' || row[6] == 'Agility' || row[6] == 'Intelligence')))
            {
              desc1 = row[6] == 'MaxHP' ? desc1.map(desc => desc.desc.replace('X%', multi1maxhp)) : desc1.map(desc => desc.desc.replace('X%', multi1attr))
              desc1 = row[6] == 'Null' ?  desc1[0].replace('X', row[7]) : desc1[0].replace('X', multi1attr)
            } else {
              desc1 = row[5] == 'Sacrifice' ? desc1.map(desc => desc.desc.replace('10x', 10 * row[7])) : desc1.map(desc => desc.desc)
              desc1 = desc1[0] == undefined ? '' : desc1[0].replace('X%', '%') || desc1[0].replace('X', row[7])

            }
console.log(row[2] + ' ' + desc1 + ' ' +  row[5] + ',' + row[6] + ',' + row[7])
          var desc2 = unitDesc.filter(res => row[8] == res.skill && row[9] ==res.type)
          var desc3 = unitDesc.filter(res => row[11] == res.skill && row[12] == res.type)
          var desc4 = unitDesc.filter(res => row[14] == res.skill && row[15] == res.type)


        })
      })
  },
  find:() => {
    return GetSheetDone.raw(id,6).then((sheet) => {
      sheet.data.map(data => abilSheet.push(data))
      return GetSheetDone
        .raw(id, 4)
        .then((res) => res.data)
        .then((data) => {
          var result = data;
          result.shift();
          var level = result.slice(0, 8)
          var power = level.map(pow => {
          return {
            lvl: pow[0],
            strAgiInt: pow[1],
            maxHP: pow[2] + '/' + pow[3]
          }

          })
          var abils = sheet.data.map((row) => {

            var desc1 = result.filter(res=> row[5] == res[7] && row[6] == res[8])
            var desc2 = result.filter(res => row[8] == res[7] && row[9] == res[8])
            var desc3 = result.filter(res => row[11] == res[7] && row[12] == res[8])
            var desc4 = result.filter(res => row[14] == res[7] && row[15] == res[8])

            return desc1.map(desc =>/* row[2] + ':\n' + */desc[9] + '(Lvl ' + row[7] + ')' + row[5] + '/' + row[6] + '\n'
              + desc2.map(desc => desc[9]/*.replace('X', row[10]) */+ '(Lvl ' + row[10] + ')\n')
              + desc3.map(desc => desc[9]/*.replace('X', row[13]) */+ '(Lvl ' + row[13] + ')\n')
              + desc4.map(desc => desc[9]/*.replace('X', row[16]) */ + '(Lvl ' + row[16] + ')\n'))
          });

            Object.values(abils).map(val => abilSheet.map(row=> row[1] = val))

            //Object.values(abilAll).map(abil => abil == undefined ? '' : abil.split(':'))
 //abilAll = Object.values(abilAll).map(val => val[0] == undefined ? '' : val[0].split(':'))
//abilAll.map(val => {
  /*if (
    (row[5] == ('Damage' || 'Heal')
    || (row[5] == "Protect" && (row[6] == ('MaxHP' || 'Strength' || 'Agility' || 'Intelligence'))))
    && (row[5] == res[7] && row[6] == res[8])
  ) {
    var perc = power.map(lvl => {
      if (lvl.lvl == row[7]) {
        row[6] == 'MaxHP'
        ? res[9].replace('X%' , lvl.maxHP)
        : res[9].replace('X%' , lvl.strAgiInt)
      }
      })
  } else {
    res[9] = res[9].replace('X', row[7])
  }
  return res*/
//})

console.log(abilAll)

    })
    });
  },
};
export {abilities}



export function jobs() {

  GetSheetDone.raw(id, 7)
  .then((data) => {
    console.log(powlvl)
    var jobsSheet = data
    //       J O B S
    var rarFilter = document.getElementById('rarity')
    var jobsSheetArrs = Object.entries(jobsSheet);
    var jobsRows = jobsSheetArrs[2][1];
    jobsRows.shift()
    jobsRows.map(job => {
      job[7] == undefined ? job.splice(7,1, '') : job[7]
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
          openNew(jobValues, i, abilAll)
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
        //console.log(jobItem)
        jobItem.splice(1, 0, "pic")
        var attrs = jobItem.splice(4, 4)
        //console.log(jobItem)
        jobItem[6] = jobItem[6] == undefined ? '' : jobItem[6] + ' x5' + '<br>'
        jobItem[7] = jobItem[7] == undefined ? '' : jobItem[7] + ' x3' + '<br>'
        jobItem[8] = jobItem[8] == undefined ? '' : jobItem[8] + ' x2' + '<br>'
        jobItem[9] = jobItem[9] == undefined ? '' : jobItem[9] + ' x1' + '<br>'
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
