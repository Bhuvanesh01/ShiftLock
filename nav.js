const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');
    const navLinks = document.querySelector('nav-bar li');

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index)=>{
        console.log(index);
    });
}

navSlide();