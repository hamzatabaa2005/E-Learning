
let h = document.querySelector('html')

let canfas = document.getElementById('offcanvaslesson')

let lang = document.getElementById('language')

lang.addEventListener('click', () => {
    (h.getAttribute('dir') === 'rtl') ? canfas.classList.replace('offcanvas-start', 'offcanvas-end') : canfas.classList.replace('offcanvas-end', 'offcanvas-start')
})
