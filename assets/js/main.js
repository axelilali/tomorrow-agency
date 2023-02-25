// hero animation
const box = document.querySelector('.hero-background')
box.addEventListener('mousemove', handleMouseMove)

function handleMouseMove(e) {
  const x = e.clientX - this.offsetLeft - this.offsetWidth / 2
  const y = e.clientY - this.offsetTop - this.offsetHeight / 2
  this.style.transform = `rotateX(${x / 200}deg) rotateY(${y / 200}deg)`
}
