import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import './style.scss';
import './job.scss';
import fontawesome from '@fortawesome/fontawesome-free'
var $ = require("jquery")
import 'tablesorter'
import nav from './nav/nav';
import { jobmain } from './jobs/job/jobmain.js'
import { init } from './jobs/jobsjs.js'

document.body.append(nav(), jobmain)
