document.addEventListener('DOMContentLoaded', function() {
    nomesprofs = document.querySelectorAll('.nomeprof')
    for(nome of nomesprofs){
    nome.innerHTML=localStorage.getItem('nome')}
})