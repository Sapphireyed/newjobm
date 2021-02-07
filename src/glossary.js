import './style.scss';
//import './jobs.scss';
import nav from './nav/nav';
import { jobsmain } from './jobs/jobsmain.js'
import {abilities, jobsData} from './abilitiesData.js'
import {getMatImgs, getAbilImgs, getJobImgs, abilImagesComplete, jobImagesComplete} from './img/imgsHTML.js'
import { jobsTable } from './jobs/jobsTable.js'
import { stickyNav, cursor } from './basicfn/stickyNav.js'
import { jobs} from './jobs/jobsjs.js'
import theadimg from './img/Jobs/BG/inthp.jpg'
var $ = require("jquery")

//let bgimg = document.createElement('img')
//bgimg.id = 'bgimg'
//bgimg.src = bg

document.body.append( nav())
