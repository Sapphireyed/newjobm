import {abilities, glossRaw} from '../abilitiesData.js'
var $ = require("jquery")

export {sideDiv}
let sideDiv = document.createElement('div')
sideDiv.id = 'sideDiv'
let listDiv = document.createElement('div')
listDiv.id = 'listDiv'
//sideDiv.style.height = screen.height
let header = document.createElement('h4')
header.innerHTML = 'Glossary'
header.id = 'h2gloss'
let search = document.createElement('search')
search.id = 'searchGloss'
let sidenav = document.createElement('a')
sidenav.id = 'sidenav'
let sideList = document.createElement('ul')
listDiv.append(header, search, sideList, sidenav)
sideDiv.appendChild(listDiv)
  let shown = false;
export function toggleSide(section) {
  if (shown == true) {
    $("#sideDiv").animate({right:'-20%'},500);
  //  section.animate({margin:'auto'},500);
    sidenav.style.right = '0'
    shown = false;
  } else {
    $("#sideDiv").animate({right:'0'},500)
  //  section.animate({margin:'0 20% 0 0'},500);
    sidenav.style.right = '19%'
    shown = true
  }
}

abilities.glossary()
  .then(ab => {
    window.addEventListener('scroll', function() {
      console.log(170 - window.pageYOffset)
      listDiv.style.marginTop = 170 - window.pageYOffset + 'px'


    })
    glossRaw.map(g => {
      let li = document.createElement('li')
      li.classList.add('gloss')
      li.innerText = g[1]
      sideList.appendChild(li)
    })
  })
