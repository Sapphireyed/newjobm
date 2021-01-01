export function toggle(el, el2) {
  el2.onclick = function() {
    if (el.style.display !== 'none') {
      el.style.display = 'none'
    } else {
      el.style.display = 'block'
    }
  }
}
