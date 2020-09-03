const btnToggle=document.getElementById('btnToggle');
console.log(btnToggle);
const submenu=document.getElementById('submenu');

btnToggle.addEventListener('click', ()=>{
    submenu.classList.toggle('hidden')
});