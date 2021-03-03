// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
import custCursor from '../img/other/cursor3.png'
import up from '../img/other/up.png'

let uplink = document.createElement('a')
uplink.href = '#top'
uplink.id = 'up'
let upimg = document.createElement('img')
upimg.src = up
//upimg.id = 'up'
uplink.appendChild(upimg)
document.body.appendChild(uplink)

export function cursor() {
  document.body.style.cursor = 'url("' + custCursor + '"), auto'
  let selects = Array.from(document.getElementsByTagName('select'))
  selects.map(sel => sel.style.cursor = 'url("' + custCursor + '"), auto')
  let buttons = Array.from(document.getElementsByTagName('button'))
  buttons.map(btn => btn.style.cursor = 'url("' + custCursor + '"), auto')
  let links = Array.from(document.getElementsByTagName('a'))
  links.map(link => link.style.cursor = 'url("' + custCursor + '"), auto')
}
export function stickyNav(nav) {
  var sticky = nav.offsetTop + 60;
  if (window.pageYOffset > sticky) {
  //  console.log(sticky)
    nav.classList.add("sticky")
    uplink.style.display = 'block'
//    bgimg.style.top = '-10px'
//          let width = document.getElementById('jobsBody').offsetWidth
//          header.style.width = width + 'px'
  } else {
    nav.classList.remove("sticky");
    uplink.style.display = 'none'
  }
  let showOverflow = nav.offsetTop + 200
  console.log(showOverflow)
  if (window.pageYOffset > sticky) {
    document.body.style.overflowX = 'visible'
  } else {
    document.body.style.overflowX = 'hidden'
  }
}
