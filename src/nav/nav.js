import logo from "./logo.png";

export default () => {

    let verUpdt = 'v.1.2.0'

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
    let ver = document.createElement('span');
    ver.id = 'ver'
    ver.innerHTML = verUpdt

  navitm.classList.add('nav', 'navbar-expand-sm', 'navbar-dark', 'shadow')
  navitm.innerHTML = '<button id="navbtn" type="button" class="navbar-toggler" data-toggle="collapse" data-target="#collapsemenu">'
  + '<span class="navbar-toggler-icon" ></span>'
  + '</button>'
  + '<div class="collapse navbar-collapse justify-content-center" id="collapsemenu">'
  + '<ul class="navbar-nav">'
  + '<li class="nav-item nav-justified"><a id="home" class="nav-link" href="./index.html">Home</a></li>'
  + '<div class="dropdown">'
      +  '<li class="nav-item nav-justified ml-3"><a id="database" class="nav-link" href="#">Database</a></li>'
      +  '<div class="dropdown-content">'
        +  '<li class="nav-item nav-justified ml-3"><a id="jobsnav" class="nav-link" href="./jobs.html">Jobs</a></li>'
        +  '<li class="nav-item nav-justified ml-3"><a id="charsnav" class="nav-link" href="./characters.html">Characters</a></li>'
        +  '<li class="nav-item nav-justified ml-3"><a id="abilsnav" class="nav-link" href="./abilities.html">Abilities</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a id="passivesnav" class="nav-link" href="./passives.html">Passives</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a id="matsnav" class="nav-link" href="./materials.html">Materials</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a id="chaptersnav" class="nav-link" href="./chapters.html">Chapters</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a id="gachasnav" class="nav-link" href="./gachas.html">Gachas</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a id="glossarynav" class="nav-link" href="./glossary.html">Glossary</a></li>'
      +  '</div>'
  + '</div>'
  + '<div class="dropdown">'
      +  '<li class="nav-item nav-justified ml-3"><a id="gamemech" class="nav-link" href="#">Game mechanics</a></li>'
      +  '<div class="dropdown-content">'
        +  '<li class="nav-item nav-justified ml-3"><a id="combos" class="nav-link" href="./combos.html">Combos</a></li>'
        +  '<li class="nav-item nav-justified ml-3"><a id="unknown" class="nav-link" href="./unknowns.html">Unknowns</a></li>'
        +  '<li class="nav-item nav-justified ml-3"><a id="traits" class="nav-link" href="./traits.html">Traits</a></li>'
        //+ '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="./abilitiessTraits.html">Abilities Traits</a></li>'
        + '<li class="nav-item nav-justified ml-3"><a id="drules" class="nav-link" href="./dungeonrules.html">Dungeon Rules</a></li>'
      +  '</div>'
  + '</div>'
  + '<div class="dropdown">'
    + '<li class="nav-item nav-justified text-danger ml-3"><a id="guidemain" class="nav-link" href="#">Guide</a></li>'
    +  '<div class="dropdown-content">'
      +  '<li class="nav-item nav-justified ml-3"><a id="guide" class="nav-link" href="guide.html">Guide</a></li>'
      +  '<li class="nav-item nav-justified ml-3"><a id="faq" class="nav-link" href="faq.html">FAQ</a></li>'
    +  '</div>'
  + '</div>'
  + '<li class="nav-item nav-justified ml-3"><a id="credits" class="nav-link" id="mCollectionLink" href="credits.html">Credits</a></li>'
  + '</ul>'
  + '</div>'

    let chooseLang = document.createElement('div')
    chooseLang.id = 'chooselang'
    const langLabel = document.createElement('label');
    langLabel.for = 'lang'
    langLabel.innerHTML = 'Language: '
    const langSel = document.createElement('select');
    langSel.id = 'langSel'
    langSel.name = 'langSel'
    langSel.classList.add('rounded')
    const optionsArr = ['English', 'Chinese', 'Chinese(Trad)'];

    const options = optionsArr.map(opt => {
        const value = opt
        return `<option value="${value}">${opt}</option>`;
    });
    langSel.innerHTML = options;

    chooseLang.append(langSel)

    navitm.prepend(ver)
    navitm.append(chooseLang)
    section.append(logonav, navitm) //append logo and menu to navbar
 
    return section;   
};

