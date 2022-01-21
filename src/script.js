const menu_btn = document.querySelector('.menu-btn');
const nav_btn = document.querySelector('.nav-links');
let menu_open = false;

menu_btn.addEventListener('click', () => {
  if(!menu_open) 
  {
    menu_btn.classList.add('open');
    nav_btn.classList.add('open');
    menu_open = true;
  }
 else 
 {
    menu_btn.classList.remove('open');
    nav_btn.classList.remove('open');
    menu_open = false;
  }
});