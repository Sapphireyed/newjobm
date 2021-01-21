//import { search } from './basicfn/search.js';
//import GetSheetDone from 'get-sheet-done';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'popper.js';
import './style.scss';
//import fontawesome from '@fortawesome/fontawesome-free'
//var $ = require("jquery")
import nav from './nav/nav';
import { jobsmain } from './jobs/jobsmain.js'
import { jobs} from './jobs/jobsjs.js'
import {abilities, jobsData,} from './abilitiesData.js'
import {getMatImgs, getJobImgs, matImagesComplete, jobImagesComplete} from './img/imgsHTML.js'


document.body.append(nav(), jobsmain)
//document.body.style.backgroundImage = 'url("' + sword  + '")'
//document.body.style.backgroundSize = 'cover'

abilities.units()
    .then(data => {
        abilities.abils()
        abilities.passivesFn()
      })
jobsData.craft()
    .then(data => {
      jobsData.materials()
      jobsData.jobs().then(res => {
        getMatImgs()
        getJobImgs()

      })
      jobs()
      
    })


//console.log(abilities.find)


//console.log(gsheet)
//let button = document.getElementById('navbtn')
//let menu = document.getElementById('collapsemenu')
//toggle(menu, button)
