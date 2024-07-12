var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
     
    },
    autoplay:true,
    loop:true,
  });



  const card = document.querySelector('.villas');

  card.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com';
  });