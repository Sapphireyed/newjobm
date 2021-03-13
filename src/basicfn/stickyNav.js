// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
import custCursor from '../img/other/cursor3.png'
import up from '../img/other/up.png'

let uplink = document.createElement('a')
uplink.href = '#top'
uplink.id = 'up'
let upimg = document.createElement('img')
upimg.src = up
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
  var sticky = nav.offsetTop + 30;
  if (window.pageYOffset > sticky) {
    console.log(window.pageYOffset)
  //  console.log()
    nav.classList.add("sticky")
    uplink.style.display = 'block'
    document.body.style.overflowX = 'visible'
  } else {
    nav.classList.remove("sticky");
    uplink.style.display = 'none'
    document.body.style.overflowX = 'hidden'
  }
  let showOverflow = nav.offsetTop + 200

}
