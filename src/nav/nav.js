import logo from "./logo.png";

export default () => {

  const section = document.createElement('section') //the entire navbar
  const img = document.createElement("img"); // logo at the top
  img.src = logo;
  img.alt = 'logo';
  img.id = 'top'
  img.classList.add('mx-auto', 'd-block');
  const logonav = document.createElement('nav');
  const logodiv = document.createElement('div')
  logodiv.style.backgroundColor = '#fff';
  logodiv.classList.add('w-100');
  logodiv.id = 'logo';
  logodiv.appendChild(img)
  logonav.appendChild(logodiv)

  const navitm = document.createElement('nav'); // menu
  navitm.setAttribute("id", "navMain");
  navitm.classList.add('nav', 'navbar-expand-sm', 'navbar-dark', 'shadow')
  navitm.innerHTML = '<button id="navbtn" type="button" class="navbar-toggler" data-toggle="collapse" data-target="#collapsemenu">'
  + '<span class="navbar-toggler-icon" ></span>'
  + '</button>'
  + '<div class="collapse navbar-collapse justify-content-center" id="collapsemenu">'
  + '<ul class="navbar-nav">'
  + '<li class="nav-item nav-justified"><a class="nav-link" href="./index.html">Home</a></li>'
  + '<div class="dropdown">'
      +  '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="#">Database</a></li>'
      +  '<div class="dropdown-content">'
        +  '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./jobs.html">Jobs</a></li>'
        +  '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./characters.html">Characters</a></li>'
        +  '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./abilities.html">Abilities</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./passives.html">Passives</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./materials.html">Materials</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./chapters.html">Chapters</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./gachas.html">Gachas</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./glossary.html">Glossary</a></li>'
      +  '</div>'
  + '</div>'
  + '<div class="dropdown">'
      +  '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="#">Game mechanics</a></li>'
      +  '<div class="dropdown-content">'
        +  '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./combos.html">Combos</a></li>'
        +  '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./unknowns">Unknowns</a></li>'
        +  '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./traits.html">Traits</a></li>'
        //+ '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./abilitiessTraits.html">Abilities Traits</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./dungeonrules.html">Dungeon Rules</a></li>'
      +  '</div>'
  + '</div>'
  + '<li class="nav-item nav-justified text-danger ml-3"><a class="nav-link" href="#worlds">Guides</a></li>'
  + '<li class="nav-item nav-justified ml-3"><a class="nav-link" id="mCollectionLink" href="#mCollection">Credits</a></li>'
  + '</ul>'
  + '</div>'

  section.append(logonav, navitm) //append logo and menu to navbar

  return section;
};
