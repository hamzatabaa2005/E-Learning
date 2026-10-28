
let showHidePass = document.getElementById('showHidePass')

let viewicon = document.getElementById('viewicon')
let hideicon = document.getElementById('hideicon')

let password = document.getElementById('password')

showHidePass.addEventListener('click', function () {


    let passInputType = password.getAttribute("type")

    function show() {
        password.setAttribute("type", "text")
        viewicon.classList.add("d-none")
        hideicon.classList.remove("d-none")
    }

    function hide() {
        password.setAttribute("type", "password")
        viewicon.classList.remove("d-none")
        hideicon.classList.add("d-none")
    }


    (passInputType == "password") ? show() : hide()




})

