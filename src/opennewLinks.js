/*for (var i = 0; i < jobLinks.length;) {
load()
  jobLinks[i].addEventListener('mousemove', showIcon)
  jobLinks[i].addEventListener('click', jobLink)
  jobLinks[i].addEventListener('mouseleave', hideIcon)
}*/

export function showIcon(item) {
  let mouseY = event.clientY; //get mouseposition to decide where to display img
  let bgimg = jobImagesComplete.filter(img => img.id == item.innerHTML)
  //on hovering on jobname disply jib icons on bot sides of the table
  document.body.style.backgroundImage = 'url("' + bgimg[0].childNodes[0].currentSrc + '"), url("' + theadimg + '")'
  document.body.style.backgroundSize = '155px, cover'
  document.body.style.backgroundColor = 'rgba(51,66,74,1)'
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundAttachment = 'fixed'
  document.body.style.backgroundPosition = '-15px ' + (mouseY-100) +'px, center center'
//  document.body.style.backgroundClip = 'content-box'
  if ( w <= targetWidth) {
    document.body.style.backgroundSize = '70px, cover';
    document.body.style.backgroundPosition = '-15px ' + (mouseY-40) +'px, center center'
  }
  //add img on the other side of table for big screens only)
  if ( w > targetWidth) {
    $('head').append('<style>body::after '
                    + '{background-image: url("' + bgimg[0].childNodes[0].currentSrc + '");'
                    + 'background-repeat: no-repeat; '
                    + 'background-attachment: fixed; '
                    + 'background-size: 155px;'
                    + 'background-position: ' + (window.innerWidth-(window.innerWidth-1)) + 'px ' + (mouseY - 100) + 'px ;'
                    + 'height: 100%; width:100%; '
                    + 'display: block; '
                    + 'transform: scaleX(-1); '
                    + 'top: 0; left: 0;} </style>')
  }
}
export function jobLink(item) {
  var i = item.parentNode.firstChild.innerHTML
  openNew(jobValues, i, descFinale, abilSkills, abilEffects, abilTraits, passivesArr, passiveFinale, passiveSkills,  passiveEffects, passiveTraits)
}
export function hideIcon() {
  if ( w > targetWidth) {
    $('head').append('<style>body::after{background-image: url("' + theadimg + '"); background-repeat: no-repeat; background-size: cover; background-position: center center ; height: 100%; width:100%; display: block; transform: none; top: 0; left: 0;z-index: -20}</style>')
  }
  document.body.style.backgroundColor = 'rgb(245,247,248)';
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center center'
  document.body.style.backgroundImage = 'url("' + theadimg + '")'
}
