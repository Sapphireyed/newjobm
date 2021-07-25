import { wikiWords, wordsLoc } from '../local/local.js'

export function changeMenu() {
    let lang = document.getElementById('langSel').value

    let homeEl = document.getElementById('home')
    let homekey = wikiWords.filter(loc => loc[0] == 'Home')

    let databaseEl = document.getElementById('database')
    let databasekey = wikiWords.filter(loc => loc[0] == 'Database')
    let jobsEl = document.getElementById('jobsnav')
    let jobskey = wordsLoc.filter(loc => loc[0] == 'Jobs')
    let charsEl = document.getElementById('charsnav')
    let charsKey = wordsLoc.filter(loc => loc[0] == 'Heroes')
    let abilsEl = document.getElementById('abilsnav')
    let abilskey = wordsLoc.filter(loc => loc[0] == 'Abilities')
    let passEl = document.getElementById('passivesnav')
    let passkey = wordsLoc.filter(loc => loc[0] == 'PassiveSkills')
    let matsEl = document.getElementById('matsnav')
    let matskey = wordsLoc.filter(loc => loc[0] == 'Materials')
    let chaptsEl = document.getElementById('chaptersnav')
    let chaptskey = wordsLoc.filter(loc => loc[0] == 'Chapters')
    let gachasEl = document.getElementById('gachasnav')
    let gachaskey = wordsLoc.filter(loc => loc[0] == 'Gacha')
    let glossaryEl = document.getElementById('glossarynav')
    let glossarykey = wikiWords.filter(loc => loc[0] == 'Glossary')

    let gamemechEl = document.getElementById('gamemech')
    let gamemechkey = wikiWords.filter(loc => loc[0] == 'GameMechanics')
    let combosEl = document.getElementById('combos')
    let comboskey = wikiWords.filter(loc => loc[0] == 'Combos')
    let unknownsEl = document.getElementById('unknown')
    let unknownskey = wikiWords.filter(loc => loc[0] == 'Unknowns')
    let traitsEl = document.getElementById('traits')
    let traitskey = wikiWords.filter(loc => loc[0] == 'Trais')
    let drulesEl = document.getElementById('drules')
    let druleskey = wikiWords.filter(loc => loc[0] == 'DungeonRules')

    let guideEl = document.getElementById('guidemain')
    let guide2El = document.getElementById('guide')
    let guidekey = wikiWords.filter(loc => loc[0] == 'Guide')
    let faqEl = document.getElementById('faq')
    let faqkey = wikiWords.filter(loc => loc[0] == 'FAQ')

    let creditsEl = document.getElementById('credits')
    let creditskey = wikiWords.filter(loc => loc[0] == 'Credit')

    console.log(creditskey)
    switch (lang) {
        case 'English':
            homekey = homekey[0][1]

            databasekey = databasekey[0][1]
            jobskey = jobskey[0][1]
            charsKey = charsKey[0][1]
            abilskey = abilskey[0][1]
            passkey = passkey[0][1]
            matskey = matskey[0][1]
            chaptskey = chaptskey[0][1]
            gachaskey = gachaskey[0][1]
            glossarykey = glossarykey[0][1]

            gamemechkey = gamemechkey[0][1]
            comboskey = comboskey[0][1]
            unknownskey = unknownskey[0][1]
            traitskey = traitskey[0][1]
            druleskey = druleskey[0][1]

            guidekey = guidekey[0][1]
            faqkey = faqkey[0][1]

            creditskey = creditskey[0][1]
            break;
        case 'Chinese':
            homekey = homekey[0][2]

            databasekey = databasekey[0][2]
            jobskey = jobskey[0][2]
            charsKey = charsKey[0][2]
            abilskey = abilskey[0][2]
            passkey = passkey[0][2]
            matskey = matskey[0][2]
            chaptskey = chaptskey[0][2]
            gachaskey = gachaskey[0][2]
            glossarykey = glossarykey[0][2]

            gamemechkey = gamemechkey[0][2]
            comboskey = comboskey[0][2]
            unknownskey = unknownskey[0][2]
            traitskey = traitskey[0][2]
            druleskey = druleskey[0][2]

            guidekey = guidekey[0][2]
            faqkey = faqkey[0][2]

            creditskey = creditskey[0][2]
            break;
        case 'Chinese(Trad)':
            homekey = homekey[0][3]

            databasekey = databasekey[0][3]
            jobskey = jobskey[0][3]
            charsKey = charsKey[0][3]
            abilskey = abilskey[0][3]
            passkey = passkey[0][3]
            matskey = matskey[0][3]
            chaptskey = chaptskey[0][3]
            gachaskey = gachaskey[0][3]
            glossarykey = glossarykey[0][3]

            gamemechkey = gamemechkey[0][3]
            comboskey = comboskey[0][3]
            unknownskey = unknownskey[0][3]
            traitskey = traitskey[0][3]
            druleskey = druleskey[0][3]

            guidekey = guidekey[0][3]
            faqkey = faqkey[0][3]

            creditskey = creditskey[0][3]
            break;
    }
    homeEl.innerHTML = homekey || 'Home'

    databaseEl.innerHTML = databasekey || 'Database'
    jobsEl.innerHTML = jobskey
    charsEl.innerHTML = charsKey
    abilsEl.innerHTML = abilskey
    passEl.innerHTML = passkey
    matsEl.innerHTML = matskey
    chaptsEl.innerHTML = chaptskey
    gachasEl.innerHTML = gachaskey
    glossaryEl.innerHTML = glossarykey || 'Glossary'

    gamemechEl.innerHTML = gamemechkey || 'Game Mechanics'
    combosEl.innerHTML = comboskey
    unknownsEl.innerHTML = unknownskey
    traitsEl.innerHTML = traitskey || 'Traits'
    drulesEl.innerHTML = druleskey || 'Dungeon Ruless'

    guideEl.innerHTML = guidekey || 'Guide'
    guide2El.innerHTML = guidekey || 'Guide'
    faqEl.innerHTML = faqkey || 'FAQ'

    creditsEl.innerHTML = creditskey || 'Credits'
}