const emojis = ['♥️']

document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.classList.add("trail");

  trail.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  
  trail.style.left = e.pageX + 'px';
  trail.style.top = e.pageY + 'px';

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  },1000);
})