document.addEventListener('DOMContentLoaded', function() {
    t = document.querySelector(".items1 crimson")
    h = document.querySelectorAll(t)
    localStorage.setItem('nome',h[0].innerHTML)

    nome = document.querySelector('.nome')
    nome.innerHTML=localStorage.getItem('nome')
})