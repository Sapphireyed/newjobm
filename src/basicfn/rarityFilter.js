// RARITY FILTER JS
export function rarityFilter(arr, arr2, el) {
  for (var i = 1; i < arr.length; i++) {

  arr[i].classList.add('d-none')
    if (el.value == arr2[i-1][2]) {
      arr[i].classList.remove('d-none')
    } else if (el.value == 'Rarity'){
      arr[i].classList.remove('d-none')
    }
  }
}
