//import { search } from './basicfn/search.js';
//import GetSheetDone from 'get-sheet-done';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import './style.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
var $ = require("jquery")
import nav from './nav/nav';
import { jobsmain } from './jobs/jobsmain.js'
import { jobs} from './jobs/jobsjs.js'
import {abilities,
        powlvl, unitDesc,
        abilitiesAllInfo, abilitiesArr, descFinale, abilTraits,
        passivesFn, passives, passivesArr, passiveFinale,
        jobsData, craft, mats} from './abilitiesData.js'
import {getMatImgs, matImagesComplete} from './img/imgsHTML.js'
import { matsImgs } from './importImgs.js'

document.body.append(nav(), jobsmain)

abilities.units()
    .then(data => {
        abilities.abils()
        abilities.passivesFn()
        jobsData.craft()
        jobsData.materials()

    }).then(res => {
              getMatImgs()
      console.log(matImagesComplete)
        jobs()
      //  setTimeout(function() {
      //    clearInterval(tooltips, 3000)
      //  })
    })

//console.log(abilities.find)
document.getElementById('thead').click()

//console.log(gsheet)
//let button = document.getElementById('navbtn')
//let menu = document.getElementById('collapsemenu')
//toggle(menu, button)
