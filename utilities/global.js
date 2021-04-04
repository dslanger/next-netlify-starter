export const menuToggle = () => {
    const sidedrawer = document.getElementById('sidedrawer');
    const menuOpenBtn = document.getElementById('menu-open');
    const menuCloseBtn = document.getElementById('menu-close');
    console.log('neutral menu');
    menuOpenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sidedrawer.classList.add('active');
        console.log('open menu');
    });
    menuCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sidedrawer.classList.remove('active');
        console.log('close menu');
    });
};
