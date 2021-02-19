import star from '../img/events/StarColor.png'
export function rarityFn(el, rar, table) {
  console.log(rar + ' ' +el.innerText)
  switch (rar) {
    case "Beginner":
    case "1":
        el.innerHTML = table == 'heroes' ? '<h4>Rarity: </h4><img id="star" src="' + star + '">' : '<h4 class="Beginner">Beginner</h4>'
        break;
    case "Easy":
    case '2':
        el.innerHTML = table == 'heroes' ? '<h4>Rarity: </h4><img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45">' :'<h4 class="Easy">Easy</h4>'
        break;
    case "Medium":
    case '3':
        el.innerHTML = table == 'heroes' ? '<h4>Rarity: </h4><img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45">' :'<h4 class="Medium">Medium</h4>'
        break;
    case "Hard":
    case '4':
        el.innerHTML = table == 'heroes' ? '<h4>Rarity: </h4><img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45"><img id="star" src="' + star + '" width="45">' :'<h4 class="Hard">Hard</h4>'
        break;
    case "Boss":
    case '5':
        el.innerHTML = table == 'heroes' ? '<h4>Rarity: </h4><img id="star" src="' + star + '" width="40"><img id="star" src="' + star + '" width="40"><img id="star" src="' + star + '" width="40"><img id="star" src="' + star + '" width="40"><img id="star" src="' + star + '" width="40">' : '<h4 class="Boss">Boss</h4>'
        break;
    }
}
