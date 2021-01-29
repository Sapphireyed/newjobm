//change stats on changing level
export function changeStats(arr, el) {
  arr.map(cell => {
    var raritycell = cell.parentNode.childNodes[3].childNodes
    var rarity = raritycell[raritycell.length-1].innerHTML
    if (rarity >= 5) {
      cell.innerHTML = Math.ceil(cell.id/10 * el.value) + Math.ceil((cell.id/10 * el.value) * crystal.value/10)
    } else {
      cell.innerHTML = Math.ceil(cell.id/10 * el.value)
    }
  })
}
