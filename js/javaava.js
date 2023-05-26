document.addEventListener('DOMContentLoaded', function() {
    nomesprofs = document.querySelectorALL('.nomeprof')
    for(nome of nomesprofs){
    nome.innerHTML=localStorage.getItem('nome')}
})