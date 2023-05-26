document.addEventListener('DOMContentLoaded', function() {
    nomes = document.querySelectorALL('.nome')
    for(nome of nomes){
    nome.innerHTML=localStorage.getItem('nome')}
})