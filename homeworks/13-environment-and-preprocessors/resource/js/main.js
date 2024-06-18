
window.addEventListener('DOMContentLoaded',()=>{
    const btnToTop = document.querySelector('.footer__top-btn');
    const btnChangeTheme = document.querySelector('.change-theme');
    const body = document.querySelector('body');

    btnToTop.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })


    window.addEventListener('scroll', () => {
        if (window.innerWidth < 600 && window.scrollY > 100) {
            btnToTop.style.display = 'flex';
        } else {
            btnToTop.style.display = 'none';
        }
    })


    btnChangeTheme.addEventListener('click', () => {

        body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light'

    })
})


