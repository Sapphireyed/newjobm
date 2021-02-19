import thanatos from '../img/character/Death Thanatos.png'

export {dialogBox}
let dialogBox = document.createElement('div')
dialogBox.id = 'dialog'
dialogBox.classList.add('rounded')
dialogBox.classList.add('row')
let dialtxt = document.createElement('div')
dialtxt.innerHTML = 'There\'s no results'
let dialtxt2 = document.createElement('div')
dialtxt2.innerHTML = 'Only doom, doom doom...'
let imgdiv = document.createElement('div')
let thana = document.createElement('img')
thana.src = thanatos
imgdiv.appendChild(thana)
dialogBox.append(dialtxt, imgdiv, dialtxt2)
let close = document.createElement('button')
close.id = 'closedialog'
close.classNam = 'rounded'
close.innerHTML = 'X'
dialogBox.appendChild(close)
