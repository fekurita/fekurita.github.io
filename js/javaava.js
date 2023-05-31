document.addEventListener('DOMContentLoaded', function() {
    nomesprofs = document.querySelectorAll('.nomeprof')

    for(nome of nomesprofs){
    nome.innerHTML= "Para:"+localStorage.getItem('nome').split(" ")[0]+"/"+localStorage.getItem("prof").split(" ").at(-1)}
    
    seta = document.querySelector('.seta1')
    seta.addEventListener('click',()=>{history.back()})
    console.log("teste")
})
