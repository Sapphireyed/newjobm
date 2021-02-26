import { drulesDataAll,passivesAllInfo} from '../../abilitiesData'
import {rules } from '../../importImgs'

export function drules() {

  let pageList = drulesDataAll
  document.getElementById("jobsBody").innerHTML = "";
    for (var i=0; i < pageList.length; i++) {
      var jobItem = Object.values(pageList[i])
      jobItem.splice(1,0, 'pic')
      jobItem.push('')
      jobItem.length = 6
      if (jobItem[3].includes('passive')) {
        jobItem[3] = '<span class="tooltipMy">' + jobItem[3] + '<span class="tooltiptext tooltipMy"></span</span>'
      }
      jobItem.splice(3,0,'pic')
      var tableRow = document.createElement('tr')
      tableRow.classList.add('jobRow')
      i % 2 == 0 ? tableRow.style.backgroundColor = '#f5f7f8' : tableRow.style.backgroundColor = '#ff7b7b'
      jobItem.map( (job) => {
        console.log(job)
        var cell = document.createElement('td')
        switch (job) {
          case 'Common':
            cell.innerHTML = '<span class="common">' + job + '</span>'
          default: cell.innerHTML = job
          cell.id = cell.innerText
        }

      var imgComplete = Object.entries(rules).filter(jobimg => jobimg[0] == jobItem[2].replace(/ /g, '').trim() + '.png')

      if (cell.innerHTML == 'pic') {
        cell.id = 'pic'
        cell.innerHTML = ''
        let ruleimg = document.createElement('img')
        ruleimg.src = imgComplete[0][1]
        cell.append(ruleimg)
      }
      tableRow.appendChild(cell)
      jobsBody.append(tableRow)

      /*  Array.from(document.querySelectorAll('.jobRow td:nth-child(3)')).filter(td => {
          td.childNodes.length > 1 ? td.removeChild(td.childNodes[1]) : ''
        })*/
      })
}
let skip= document.getElementById('skip')
skip.style.display = 'block'
}
