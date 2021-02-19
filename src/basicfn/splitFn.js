export function splitDesc(arr, item){
  arr = Object.values(arr).map(ab => ab == undefined ? '' : ab.split(':<br>'))
  return arr.filter(ab => item == ab[0])
}
export function splitApply(arr, item){
  arr = Object.values(arr).map(ab => ab == undefined ? '' : ab.split(': '))
  return arr.filter(ab => item == ab[0])
}
