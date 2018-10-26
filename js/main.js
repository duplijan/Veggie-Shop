(function toggleNav(){
  const btnOpen = document.querySelector('.menu_icon-open'),
        btnClose = document.querySelector('.menu_icon-close');
  const section = document.querySelector('.section_right');

  console.log(section);
  function openMenu(e){
    section.style.transform = 'translateX(0)';
    btnOpen.style.display = 'none';
  }
  function closeMenu(e){
    section.style.transform = 'translateX(100%)';
    btnOpen.style.display = 'block';
  }

  btnOpen.addEventListener('click', openMenu);
  btnClose.addEventListener('click', closeMenu)
})();
