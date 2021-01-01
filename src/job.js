import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import './style.scss';
import fontawesome from '@fortawesome/fontawesome-free'
var $ = require("jquery")
import 'tablesorter'
import nav from './nav/nav';
import { jobsmain } from './jobs/jobsmain.js'
import { init } from './jobs/jobsjs.js'

document.body.append(nav())
var header = document.createElement('h1')
header.id = 'header'
header.innerHTML = 'BLLBBLBLBLBLBL'
document.body.appendChild(header)
