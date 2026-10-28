
let navbar = document.getElementById('navbar')

document.addEventListener('scroll', function () {

    if (window.scrollY > 200) {
        navbar.classList.add('fixed-navbar')

    } else {
        navbar.classList.remove('fixed-navbar')
    }
})

let change_mood = document.querySelector("#change_mood")

let mood_check = localStorage.getItem("dark")

if (mood_check !== "yes") {
    change_mood.classList.remove("clicked")
    document.body.classList.remove("dark-colors")

} else {
    change_mood.classList.add("clicked")
    document.body.classList.add("dark-colors")
}

change_mood.addEventListener("click", () => {

    if (change_mood.classList.contains("clicked")) {
        change_mood.classList.remove("clicked")
        document.body.classList.remove("dark-colors")

        localStorage.removeItem("dark")

    } else {
        change_mood.classList.add("clicked")
        document.body.classList.add("dark-colors")
        localStorage.setItem("dark", "yes")

    }

})


let language = document.getElementById('language')

let html = document.querySelector('html')


language.addEventListener('click', () => {

    function arabic() {
        language.textContent = "en";
        html.setAttribute('lang', 'ar')
        html.setAttribute('dir', 'rtl')
    }



    function english() {
        language.textContent = "ar";
        html.setAttribute('lang', 'en')
        html.setAttribute('dir', 'ltr')
    }


    (language.textContent === "ar") ? arabic() : english()

})



