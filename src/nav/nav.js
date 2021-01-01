import logo from "./logo.png";
export default () => {
  const section = document.createElement('section') //the entire navbar
  const img = document.createElement("img"); // logo at the top
  img.src = logo;
  img.alt = 'logo';
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
  + '<li class="nav-item nav-justified"><a class="nav-link" href="#worlds">Heroes</a></li>'
  + '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="#heroes">Jobs</a></li>'
  + '<li class="nav-item nav-justified ml-3"><a class="nav-link" href="#worlds">Materials</a></li>'
  + '<li class="nav-item nav-justified text-danger ml-3"><a class="nav-link" href="#worlds">Abilities</a></li>'
  + '<li class="nav-item nav-justified ml-3"><a class="nav-link" id="mCollectionLink" href="#mCollection">Series</a></li>'
  + '</ul>'
  + '</div>'

  section.append(logonav, navitm) //append logo and menu to navbar
  return section;
};
