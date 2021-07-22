import {wordsLoc, wikiWords, applies, protectName} from '../local/local.js'

export function getAllKeys() {

    let lang = document.getElementById('langSel').value
    let keysVals = JSON.parse(JSON.stringify(wordsLoc))
    let wikiKeys = JSON.parse(JSON.stringify(wikiWords))
    let appliesKeys = applies
    switch (lang) {
        case 'English':
            keysVals = keysVals.map(k => k = k == null ? '' : { key: k[0], value: k[1] })
            wikiKeys = wikiKeys.map(k => k = k == null ? '' : { key: k[0], value: k[1] })
            appliesKeys = appliesKeys.map(k => k = k == null ? '' : { key: k[0], value: k[1] })
            keysVals.push({ key: 'Protect', value: protectName[1] })
            break;
        case 'Chinese':
            keysVals = keysVals.map(k => k = k == null ? '' : { key: k[0], value: k[2] })
            wikiKeys = wikiKeys.map(k => k = k == null ? '' : { key: k[0], value: k[2] })
            appliesKeys = appliesKeys.map(k => k = k == null ? '' : { key: k[0], value: k[2] })
            keysVals.push({ key: 'Protect', value: protectName[2] })
            break;
        case 'Chinese(Trad)':
            keysVals = keysVals.map(k => k = k == null ? '' : { key: k[0], value: k[3] })
            wikiKeys = wikiKeys.map(k => k = k == null ? '' : { key: k[0], value: k[3] })
            appliesKeys = appliesKeys.map(k => k = k == null ? '' : { key: k[0], value: k[3] })
            keysVals.push({ key: 'Protect', value: protectName[3] })
            break;
    }

    keysVals = keysVals.concat(appliesKeys).concat(wikiKeys)
    return keysVals
}

