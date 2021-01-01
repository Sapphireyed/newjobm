const Tabletop = require('tabletop');
import { tbody } from './jobsTable.js'
import {jobsfilter} from './jobsfilter'
var $ = require("jquery")
import 'tablesorter'
import { rarityFilter } from '../basicfn/rarityFilter.js'

export function init() {
  Tabletop.init( {
    key: 'https://docs.google.com/spreadsheets/d/1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g/edit?usp=sharing',
    }
  ).then(function(data, tabletop) {
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
      11: Verlog*/
    //get seperate sheets. Each is an object with objects inside. 'elements' contains list of rows
    var jobsSheet = sheets[6][1]
    var charSheet = sheets[2][1]
    var abilSheet = sheets[0][1]

    //       J O B S
    var rarFilter = document.getElementById('rarity')
    // array with rows (each row is a job)
    var jobsSheetArrs = Object.entries(jobsSheet);
    var jobsRows = jobsSheetArrs[4][1];
    var job = Object.entries(jobsRows);
    var jobValues = job.map(job => job[1])
    // PAGINATIOM
    var list = jobValues
    var pageList = [];
    var currentPage = 1;
    var numberPerPage = 10;
    var numberOfPages = 0;

    numberOfPages = getNumberOfPages()

function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
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
    var jobsBody = document.getElementById('jobsBody')
    var begin = ((currentPage - 1) * numberPerPage);
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
        jobLinks[i].addEventListener("click", abc)
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
    console.log(pageList)
      for (var i=0; i < pageList.length; i++) {
        var jobItem = Object.values(pageList[i])
        jobItem.splice(1, 0, "pic")
        var attrs = jobItem.splice(4, 4)
        console.log(jobItem)
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
document.getElementById('thead').click()
    /*var jobsBody = document.getElementById('jobsBody')
    for (var i = 0; i < jobValues.length; i++) {
        var jobItem = Object.values(jobValues[i])
        jobItem.splice(1, 0, "pic")
        jobItem.length = 8
        jobItem[0] = jobItem[0] + '.'
        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
        jobItem.map(job => {
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
            jobsBody.appendChild(tableRow)
        })

    }*/
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


  function abc() {
      // i is job index in the table
      var i = this.previousElementSibling.previousElementSibling.innerHTML
      var jobItem = Object.values(jobValues[i - 1])
      var win = window.open('job.html')

      // fires in the new tab
      setTimeout(function(){
        win.document.body.style.backgroundColor = 'red'
          //change the new tab look based on job's rarity
          switch (jobItem[2]) {
              case '1':
                  win.document.body.classList.add('job1star')
                  break;
              case '2':
                  win.document.body.classList.add('job2star')
                  break;
              case '3':
                  win.document.body.classList.add('job3star')
                  break;
              case '4':
                  win.document.body.classList.add('job4star')
                  break;
              case '5':
                  win.document.body.classList.add('job5star')
                  break;
          }
          if (jobItem[2] == '1') {
              win.document.body.classList.add('job1star')
          }
          //change the content based on job chosen(clicked) in the table
          //img
        //  win.document.getElementById('jobImg').src = 'img/jobs/jobless.png';
          //name
        //  win.document.getElementById('lll').innerHTML = jobItem[1];
          //rarity
        //  var jobRarChild = win.document.getElementById('rar').children;
          // replace rarity diigit with appropriate nymber of stars
          switch (jobItem[2]) {
              case '1':
                  jobRarChild[1].innerHTML = "<i class='fa fa-star'></i>"
                  break;
              case '2':
                  jobRarChild[1].innerHTML = "<i class='fa fa-star'></i><i class='fa fa-star'></i>"
                  break;
              case '3':
                  jobRarChild[1].innerHTML = "<i class='fa fa-star'></i><i class='fa fa-star'></i></i><i class='fa fa-star'></i>"
                  break;
              case '4':
                  jobRarChild[1].innerHTML = "<i class='fa fa-star'></i><i class='fa fa-star'></i></i><i class='fa fa-star'><i class='fa fa-star'></i></i>"
                  break;
              case '5':
                  jobRarChild[1].innerHTML = "<i class='fa fa-star'></i><i class='fa fa-star'></i></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>"
                  break;
          }
          // attributes
          var jobHPchild = win.document.getElementById('hp').children;
          console.log(jobHPchild[1].innerHTML = jobItem[3])
          jobHPchild[1].innerHtml = jobItem[3];
          var jobStrChild = win.document.getElementById('str').children;
          console.log(jobStrChild[1].innerHTML = jobItem[4])
          jobStrChild[1].innerHtml = jobItem[4];
          var jobAgiChild = win.document.getElementById('agi').children;
          console.log(jobAgiChild[1].innerHTML = jobItem[5])
          jobAgiChild[1].innerHtml = jobItem[5];
          var jobIntChild = win.document.getElementById('int').children;
          console.log(jobIntChild[1].innerHTML = jobItem[6])
          jobIntChild[1].innerHtml = jobItem[6];
          // passive and switch skill
          var jobSkills = win.document.getElementById('skills').children;
          var jobPassive = jobSkills[0].children
          console.log(jobSkills)
          var jobSwitch = jobSkills[1].children
          //passive

          //switch
          for (var i = 0; i < abilValues.length; i++) {
              console.log(abilValues[i]['Ability Name'])
              console.log(jobItem[7])
              if (abilValues[i]['Ability Name'] == jobItem[7]) {
                  console.log(jobSkills[0].innerHTML = '<h4 style="color: #6a8d55"><b>Passive: </b></h4><h5>' + jobItem[8] + ': ' + abilValues[i]["Ability Description"] + '</h5>')
                  jobSkills[0].innerHtml = '<h4 style="color: #6a8d55"><b>Passive: </h4><h5>' + jobItem[8] + ': </b>' + abilValues[i]["Ability Description"] + '</h5>';
              }
              if (abilValues[i]['Ability Name'] == jobItem[8]) {
                  console.log(jobSkills[1].innerHTML = '<h4"><b>Switch: </b></h4><h5>' + jobItem[9] + ': ' + abilValues[i]["Ability Description"] + '</h5>')
                  jobSkills[1].innerHtml = '<h4><b>Switch:</h4><h5>' + jobItem[9] + ': </b>' + abilValues[i]["Ability Description"] + '</h5>';
              }
          }
  }, 2000)
}



  })
}
//window.addEventListener('DOMContentLoaded', init)
