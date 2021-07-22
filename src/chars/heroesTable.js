import sword from '../img/other/blades.png'

var heroesTable = document.createElement('table');
heroesTable.id = 'heroesTable';
heroesTable.classList.add('section', 'tablesorter', 'myTable', 'w-100', 'shadow')
var thead = document.createElement('thead')
//thead.style.backgroundImage = 'url("' + theadimg + '")'
//thead.style.backgroundSize = 'cover'
thead.classList.add('thead', 'shadow-lg', 'w-100')
thead.id = 'thead'
thead.innerHTML =  '<tr id="abilsThead">'
    + '<th id="#"data-sort="number">#<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Icon">Icon<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Name">Name<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Rarity">Rarity<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Passive">Passive 1 & 2<i class="fas fa-sort float-right"></i></th>'
  //  + '<th>Passive2<i class="fas fa-sort float-right"></i></th>'
    + '<th id="AbilityOneAndTwo" style="line-height: 80%">Ability 1 & 2<br><span style="font-size:12px">(Enemy\'s drops)</span></th>'
  //  + '<th>Ability2<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Race">Race<i class="fas fa-sort float-right"></i></th>'
    + '<th id="HP">HP<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Str">STR<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Agi">AGI<i class="fas fa-sort float-right"></i></th>'
    + '<th id="Int">INT<i class="fas fa-sort float-right"></i></th>'
  //  + '<th>Get from<i class="fas fa-sort float-right"></i></th>'
    + '</tr>'
  var tbody = document.createElement('tbody')
  tbody.id = 'abilsBody'
//  tbody.style.backgroundImage = 'url("' + sword + '")'
//  tbody.style.backgroundSize = 'contain'
//  tbody.style.backgroundRepeat = 'no-repeat'
//  tbody.style.backgroundPosition = 'center'
heroesTable.append(thead, tbody)
export { heroesTable }
