import {abilities, appliesAllInfo, glossRaw, applyRaw} from '../abilitiesData.js'
var $ = require("jquery")

let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
let targetWidth = 768;
let targetMid = 1000

export {sideDiv}
let sideDiv = document.createElement('div')
sideDiv.id = 'sideDiv'
let listDiv = document.createElement('div')
listDiv.id = 'listDiv'
//sideDiv.style.height = screen.height
let header = document.createElement('h4')
header.innerHTML = 'Glossary'
header.id = 'h2gloss'
let search = document.createElement('input')
search.id = 'searchGloss'
header.appendChild(search)
let sidenav = document.createElement('a')
sidenav.id = 'sidenav'
sidenav.innerHTML = 'GLOSSARY'
let sideList = document.createElement('ul')
let sideH = document.createElement('h5')
sideH.innerHTML = 'Keywords'
sideList.appendChild(sideH)
let sideListApply = document.createElement('ul')
let sideListApplyH = document.createElement('h5')
sideListApplyH.innerHTML = 'Apply'
sideListApply.appendChild(sideListApplyH)
listDiv.append(header, sideList,sideListApply, sidenav)
sideDiv.appendChild(listDiv)

export function toggleSide(el, section, nav) {
  let shown = false
  el.addEventListener('click', function() {
    if (w > targetWidth) {
      if(shown == false) {
        $("#sideDiv").animate({right:'0'},500);
        $('#sidenav').animate({right:'21.4%'},500)
        console.log(section[0])
        section[0].id == 'drulesmain' ? '' : section.animate({margin:'0 5% 0 5%', width: '68vw'},500);
        shown = true
        window.addEventListener('scroll', function() {
          header.style.top = nav.getBoundingClientRect().bottom + 'px'
          listDiv.style.marginTop = header.getBoundingClientRect().bottom + 'px'
        })
      } else {
        $("#sideDiv").animate({right:'-25%'},500);
        $('#sidenav').animate({right:'-3%'},500)
        section[0].id == 'drulesmain' ? '' : section.animate({marginLeft: '10%', width: '80vw'},500);
        Array.from($('.subgloss')).map(s=> s.style.display = 'none')
        shown = false
      }
    } else if (w <= targetWidth ) {
      let margLeft = w * 0.56 + 'px'
      document.getElementById('sideDiv').style.width = w * 0.7 + 'px'
      document.getElementById('h2gloss').style.width = w * 0.7 + 'px'
      if(shown == false) {
        $("#sideDiv").animate({left:'0'},500);
        $('#sideDiv h4').animate({left:'0'},500)
      //  section.animate({margin:'0 5% 0 5%', width: '68vw'},500);
        shown = true
        window.addEventListener('scroll', function() {
          header.style.top = nav.getBoundingClientRect().bottom + 'px'
          listDiv.style.marginTop = header.getBoundingClientRect().bottom + 'px'
        })
      } else {
        $("#sideDiv").animate({left:'-90%'},500);
        $('#sideDiv h4').animate({left:'-110%'},500)
    //    section.animate({marginLeft: '10%', width: '80vw'},500);
        Array.from($('.subgloss')).map(s=> s.style.display = 'none')
        shown = false
      }
    }

  })
  $("#searchGloss").on("keyup", function() {
    var input = $(this).val().toLowerCase();
      $("#sideDiv li:not(.subgloss)").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
      });
    });
}


abilities.glossRaw()
  .then(ab => {


    glossRaw.map(g => {
      let li = document.createElement('li')
      li.classList.add('gloss')
      li.innerHTML = g[1] + '<div class="subgloss">'+ g[10] + '</div>'
      sideList.appendChild(li)
    })


    let glossName = Array.from(document.getElementsByClassName('gloss'))
    glossName.map(name => {
      name.onclick = function(){
        let desc = name.children[0]
        desc.style.display == 'none' ? desc.style.display = 'block' : desc.style.display = 'none'
      }
    })
  })
  abilities.apply()
    .then(apply => {
      applyRaw.map(g => {

        let li = document.createElement('li')
        li.classList.add('gloss')
        li.innerHTML = g[1] + '<div class="subgloss">'+ g[10] + '</div>'
        sideListApply.appendChild(li)
      })

      let glossName = Array.from(document.getElementsByClassName('gloss'))
      glossName.map(name => {
        name.onclick = function(){
          let desc = name.children[0]
          desc.style.display == 'none' ? desc.style.display = 'block' : desc.style.display = 'none'
        }
      })
    })
