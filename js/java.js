document.addEventListener('DOMContentLoaded', function() {
    t = document.querySelector(".items1")
    h = t.querySelectorAll('li')
    localStorage.setItem('nome',h[0].innerHTML)
})