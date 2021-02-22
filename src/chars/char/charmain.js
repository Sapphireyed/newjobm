
let jobmain = document.createElement('section')
jobmain.classList.add('section', 'shadow', 'subsection')
jobmain.id= 'jobmainsect'
//HEADER
let maindiv = document.createElement('div');
maindiv.id = 'jobmaindiv'
maindiv.className = 'row'

let header = document.createElement('h1')
header.classList.add('col-12')
header.id = 'jobheader'
let span = document.createElement('span')
span.id = 'top'
let herobtn = document.createElement('button')
herobtn.classList.add('navbtns','rounded')
herobtn.innerHTML = 'Hero'
let enemybtn = document.createElement('button','rounded')
enemybtn.classList.add('navbtns')
enemybtn.innerHTML = 'Enemy'
maindiv.append(span, header, herobtn, enemybtn)

//JOB BASIC INFO
let div1 = document.createElement('div')
div1.id = 'basicinfo'
div1.className = 'row';

let imgdiv = document.createElement('div')
let jobimg = document.createElement('div')
imgdiv.classList.add('col-12', 'col-sm-2')
jobimg.id = 'jobimg'
jobimg.classList.add('d-block', 'mx-auto')
imgdiv.appendChild(jobimg)

let attrs = document.createElement('div')
attrs.classList.add('col-10', 'row', 'my-auto')
let rarLvlOrb = document.createElement('div')
rarLvlOrb.id = 'rarLvlOrb'
rarLvlOrb.classList.add('col-6')
let race = document.createElement('div')
let raceH = document.createElement('h4')
raceH.id = 'race'
race.appendChild(raceH)
//rarity
let rarity = document.createElement('div')
rarity.id = 'rarity'
rarity.classList.add('jobattr')
let rarityEn = document.createElement('div')
rarityEn.id = 'rarityEn'
rarityEn.classList.add('jobattr')
//acquire
let acqdiv = document.createElement('div')
acqdiv.classList.add('col-12')
let acq = document.createElement('h4')
acq.id = 'acq'
acqdiv.appendChild(acq)
let br = document.createElement('br')
//acqdiv.classList.add('jobattr')
//l3vel
let level = document.createElement('div')
level.id = 'level';
level.style.marginTop = '10px'
//level.classList.add('col-3')
let labelh4 = document.createElement('h4')
let levelLabel = document.createElement('label')
levelLabel.innerHTML = 'Dungeon Level: '
let levelSel = document.createElement('input')
levelSel.id = 'levelSel'
levelSel.type = 'number'
levelSel.min = 1
levelSel.step = 10
levelSel.value = 10
levelSel.style.width = '50px'
levelSel.classList.add('rounded')
labelh4.append(levelLabel)
level.append(labelh4, levelSel)
//l3vel
let herolvl = document.createElement('div')
herolvl.id = 'herolvl';
herolvl.style.marginTop = '10px'
//level.classList.add('col-3')
let herolabelH4 = document.createElement('h4')
let herolabel = document.createElement('label')
herolabel.innerHTML = 'Hero Level: '
let heroSel = document.createElement('input')
heroSel.id = 'heroSel'
heroSel.type = 'number'
heroSel.min = 1
heroSel.step = 5
heroSel.value = 1
heroSel.style.width = '50px'
heroSel.classList.add('rounded')
herolabelH4.append(herolabel)
herolvl.append(herolabelH4, heroSel)
//level buttons
let lvlbtns = document.createElement('div')
lvlbtns.classList.add('col-12')
lvlbtns.id = 'lvlbtns'
let applybtn = document.createElement('button')
applybtn.classList.add('rounded')
applybtn.innerHTML = 'Apply'
let reset = document.createElement('button')
reset.classList.add('rounded')
reset.innerHTML = 'Reset'
lvlbtns.append(applybtn, reset)
rarLvlOrb.append(acqdiv, rarityEn, rarity, race, herolvl, level,lvlbtns, br)

let attrsAttrs = document.createElement('div')
attrsAttrs.id= 'attrsAttrs'
attrsAttrs.className = 'col-5'
let hp = document.createElement('h4')
hp.id = 'hp'
//hp.className = 'maxhp'
let str = document.createElement('h4')
str.id = 'str'
//str.className = 'str'
let agi = document.createElement('h4')
agi.id = 'agi'
//agi.className = 'agi'
let int = document.createElement('h4')
int.id = 'int'
//int.className = 'int'
let attrsArr = [ hp, str, agi, int]
attrsArr.map(attr => {
  attr.classList.add('jobattr')
  attrsAttrs.appendChild(attr)
})
let attrsAttrsEn = document.createElement('div')
attrsAttrsEn.id= 'attrsAttrsEn'
attrsAttrsEn.className = 'col-5'
let hpEn = document.createElement('h4')
hpEn.id = 'hpEn'
//hp.className = 'maxhp'
let strEn = document.createElement('h4')
strEn.id = 'strEn'
//str.className = 'str'
let agiEn = document.createElement('h4')
agiEn.id = 'agiEn'
//agi.className = 'agi'
let intEn = document.createElement('h4')
intEn.id = 'intEn'
//int.className = 'int'
let attrsArrEn = [ hpEn, strEn, agiEn, intEn]
attrsArrEn.map(attr => {
  attr.classList.add('jobattr')
  attrsAttrsEn.appendChild(attr)
})

let rarAndAttrs = document.createElement('div')
rarAndAttrs.classList.add('col-8', 'row')
rarAndAttrs.id = 'rarAndAttrs'

rarAndAttrs.append(rarLvlOrb, attrsAttrs, attrsAttrsEn)

let img2nd = imgdiv.cloneNode(true)
img2nd.id = 'jobimg2'
//attrs.prepend(rarLvlOrb)
div1.append(imgdiv, rarAndAttrs, img2nd)

//JOB PASSIVE & SWITCH
let div2 = document.createElement('div')
div2.classList.add('row', 'subsection')
div2.id = 'passiveAndSwitch'
let div2bis = document.createElement('div')
div2bis.classList.add('row', 'subsection')
div2bis.id = 'passiveAndSwitchBis'

let div2en = document.createElement('div')
div2en.classList.add('row', 'subsection')
div2en.id = 'passiveAndSwitchEn'
//threshold
let threshdiv = document.createElement('div')
threshdiv.id = 'threshdiv'
threshdiv.classList.add('row', 'subsection')
let threshH = document.createElement('h4')
threshH.id= 'threshH'
threshH.innerHTML = 'Threshold Abilities'
threshH.classList.add('col-12', 'rounded-lg', 'shadow')
let onediv = document.createElement('div')
onediv.classList.add('col-12', 'col-sm-4')
onediv.id = 'thresh1'
let oneH = document.createElement('h5')
oneH.innerHTML = '100%'
oneH.id = 'oneH'
onediv.append(oneH)
let twodiv = document.createElement('div')
twodiv.classList.add('col-12', 'col-sm-4')
twodiv.id = 'thresh2'
let twoH = document.createElement('h5')
twoH.innerHTML = '< 50%'
twodiv.append(twoH)
let threediv = document.createElement('div')
threediv.classList.add('col-12', 'col-sm-4')
threediv.id = 'thresh3'
let threeH = document.createElement('h5')
threeH.innerHTML = '< 30%'
threediv.append(threeH)
threshdiv.append(threshH, onediv, twodiv, threediv)
//spcial cases
let scdiv = document.createElement('div')
scdiv.id = 'scdiv'
scdiv.classList.add('col-6', 'shadow')
let scH = document.createElement('h4')
scH.id= 'scH'
scH.innerHTML = 'Special Cases'
scH.classList.add('col-12', 'rounded-lg')
let scsub = document.createElement('div')
scsub.id = 'scsub'
scdiv.append(scH, scsub)
// drops
let dropdiv = document.createElement('div')
dropdiv.classList.add('col-6', 'shadow')
dropdiv.id = 'dropdiv'
let dropH = document.createElement('h4')
dropH.classList.add('col-12', 'rounded')
dropH.innerHTML = 'Drops '
let drop1 = document.createElement('div')
drop1.classList.add('drop')
let drop2 = document.createElement('div')
drop2.classList.add('drop')
dropdiv.append(dropH, drop1, drop2)

let scAndDrop = document.createElement('div')
scAndDrop.classList.add('row', 'subsection')
scAndDrop.append(scdiv, dropdiv)
//chapters
let chapdiv = document.createElement('div')
chapdiv.id = 'chapt'
chapdiv.classList.add('row', 'subsection', 'shadow')
let chheader = document.createElement('div')
chheader.classList.add('row', 'col-12', 'rounded-lg','shadow')
chheader.id = 'chH'
let chimg = document.createElement('h5')
chimg.innerHTML = '#'
chimg.classList.add('col')
let chname = document.createElement('h5')
chname.innerHTML = 'Chapter\'s Name'
chname.classList.add('col')
let type = document.createElement('h5')
type.innerHTML = 'Appears as'
type.classList.add('col')
chheader.append(chimg, chname, type, chimg.cloneNode(true))
chapdiv.append(chheader)


jobmain.append(maindiv, div1, div2, div2bis, div2en, threshdiv, scAndDrop, chapdiv)

export {jobmain}
