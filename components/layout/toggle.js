export function toggle(){
    const btnToggle=document.getElementById('btnToggle');
    const submenu=document.getElementById('submenu');
    btnToggle.addEventListener('click', ()=>{
        submenu.classList.toggle('hidden');
    });
}
