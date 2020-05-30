var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/images/index/animation/data.json'
  });

var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/index/animation/data2.json'
});


// Burger menu

const navSlider = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    burger.addEventListener('click',() => {
      menu.classList.toggle('nav-active');

      navLinks.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = '';
        }else{
          link.style.animation = `navLinksFade 0.4s ease-in-out forwards ${index / 7 + .3}s`;
        }
      });

      burger.classList.toggle('cross');

    });

    
  };

  navSlider();