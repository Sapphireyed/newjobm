// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
export function stickyNav(nav) {
var sticky = nav.offsetTop + 60;
  if (window.pageYOffset > sticky) {
  //  console.log(sticky)
    nav.classList.add("sticky")
//    bgimg.style.top = '-10px'
//          let width = document.getElementById('jobsBody').offsetWidth
//          header.style.width = width + 'px'
  } else {
    nav.classList.remove("sticky");
//    bgimg.style.top = '90px'
  }
}
