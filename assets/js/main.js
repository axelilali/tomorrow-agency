jQuery(function ($) {
  // blod animation
  // const blob = document.getElementById('blob')

  // document.body.onpointermove = (event) => {
  //   const { clientX, clientY } = event
  //   blob.animate(
  //     {
  //       left: `${clientX}px`,
  //       top: `${clientY}px`,
  //     },
  //     {
  //       duration: 3000,
  //       fill: 'forwards',
  //     },
  //   )
  // }
  // hero animation
  const box = document.querySelector('.hero-background')
  box.addEventListener('mousemove', handleMouseMove)

  function handleMouseMove(e) {
    const x = e.clientX - this.offsetLeft - this.offsetWidth / 2
    const y = e.clientY - this.offsetTop - this.offsetHeight / 2
    this.style.transform = `rotateX(${x / 150}deg) rotateY(${y / 150}deg)`
  }

  // scale animation
  // document.addEventListener('scroll', function(){
  //   console.log(document.scrollTop());
  // })

  // hero slider
  $('#home-hero .slider').slick({
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    speed: 800,
    cssEase: 'ease',
    pauseOnHover: false,
    pauseOnInteraction: false,
  })

  $('#home-hero .next').click(function () {
    $('#home-hero .slider').slick('slickNext')
  })

  $('#home-hero .prev').click(function () {
    $('#home-hero .slider').slick('slickPrev')
  })

  const img = document.querySelector('.scaling-img')
  const container = document.querySelector('.scaling-container')

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset
    const scaleFactor = 1 + scrollTop / 20000 /* adjust the scaling factor as desired */
    img.style.transform = `scale(${scaleFactor})`
  })

  ScrollReveal().reveal('section .small-title, section .section-title', {
    origin: 'bottom',
    distance: '20px',
    delay: 200,
    reset: false,
    interval: 500,
  })

  ScrollReveal().reveal('.service-card', {
    delay: 700,
    interval: 300,
  })
})
