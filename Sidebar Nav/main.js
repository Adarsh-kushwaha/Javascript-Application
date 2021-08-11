const burger = document.getElementById('burger');
const close = document.getElementById('close');
const opensidebar = document.getElementById('sidebar');

burger.addEventListener('click', ()=>{
    opensidebar.classList.toggle("show-sidebar")
})

close.addEventListener('click', ()=>{
    opensidebar.classList.remove('show-sidebar')
})