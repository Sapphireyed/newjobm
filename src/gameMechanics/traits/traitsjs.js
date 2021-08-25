import { tbody } from './jobstraitsTable.js'
import { applyBody } from './abilstraitsTable.js'
//import { openNew } from '../basicfn/openNew.js'
import { traitsDataAll, traitsImgs} from '../../abilitiesData.js'
import {filterPass} from '../../basicfn/filters.js'
import { traits } from '../../importImgs.js'
import { showIcon, hideIcon } from '../../basicfn/hoverIcons.js'
var $ = require("jquery")
import tablesorter from 'tablesorter';


export function glossFn() {

  function drawList() {
    let pageList = traitsDataAll

    document.getElementById("abilsBody").innerHTML = "";
      for (var i=0; i < pageList.length; i++) {
        var jobItem = Object.values(pageList[i])
        jobItem.length = 2
        jobItem.splice(0,0, i+1)
        jobItem.splice(1, 0, "pic")

      //  jobItem.pop()


    //    jobItem.splice(7, 2, '', '')
        var tableRow = document.createElement('tr')
        tableRow.classList.add('jobRow')
        i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = '#d6d1bf'
    //    i % 2 == 0 ? tableRow.style.color = 'bloack' : tableRow.style.color = 'white'


        jobItem.map( (job, ind) => {
          var cell = document.createElement('td')
          cell.id = cell.innerHTML
          cell.innerHTML = job

          tableRow.appendChild(cell)
          abilsBody.append(tableRow)

          //add images to pic cell
          let traitsimgs = Object.entries(traits)
            var imgComplete = traitsImgs.find(jobimg => jobimg[0].toLowerCase() == jobItem[2].toLowerCase() + '.png')
          if (cell.innerHTML == 'pic') {
            let pic = document.createElement('img')
            imgComplete == undefined ? '' : pic.src = imgComplete[1]
            cell.id = 'pic'
            cell.innerHTML = ''
            cell.append(pic)
          }
        })
  }
} // end of drawList

drawList()

$("#search").on("keyup", function() {
  var input = $(this).val().toLowerCase();
    $("#abilsBody tr").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
    });
  });
}

export function applyTableFn() {

  function drawList() {
    let pageList = traitsDataAll

    document.getElementById("applyBody").innerHTML = "";
    var applyBody = document.getElementById('applyBody');
//    let pageList = appliesAllInfo

      for (var i=0; i < pageList.length; i++) {
        var jobItem = Object.values(pageList[i])

        jobItem.splice(0,2)
        jobItem.splice(0,0, i+1)
        jobItem.splice(1, 0, "pic")
        if (jobItem[2] !== undefined && jobItem[3] !== '') {
          var tableRow = document.createElement('tr')
          tableRow.classList.add('jobRow')
          i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = '#d6d1bf'
            console.log(jobItem)
          jobItem.map( (job, ind) => {
            var cell = document.createElement('td')
            cell.id = cell.innerHTML
            cell.innerHTML = '<td>' + job + '</td>'

            //add images to pic cell
            let traitsimgs = Object.entries(traits)

            var imgComplete = traitsImgs.find(jobimg => jobItem[2] == undefined ? '' : jobimg[0].toLowerCase() == jobItem[3].toLowerCase() + '.png')
            if (cell.innerHTML == 'pic') {
              let pic = document.createElement('img')
              pic.src = imgComplete == undefined ? '' : imgComplete[1] 
              cell.id = 'pic'
              cell.innerHTML = ''
              cell.append(pic)
            }

            tableRow.appendChild(cell)
            applyBody.append(tableRow)
        })


      }
  }
  }


  drawList()

  $("#search").on("keyup", function() {
    var input = $(this).val().toLowerCase();
      $("#abilsBody tr").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
      });
    });
  }
