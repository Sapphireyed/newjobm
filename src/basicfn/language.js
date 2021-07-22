// language

export function language() {

    localStorage.clear()
    localStorage.setItem('language', document.getElementById('langSel').value)
    console.log(localStorage.getItem('language'))
}
