
/* Cuando hago CLICK .button, a la etiq .nav le añado y quito la clase"activo"(=efecto TOGGLE)*/
    const button = document.querySelector('.button')
    const nav = document.querySelector('.nav')

    button.addEventListener('click', ()=>{
        nav.classList.toggle('activo'); 
    });
    