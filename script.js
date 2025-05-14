const button = document.getElementById('animateBtn');
const image = document.getElementById('image');

// Load saved preference (theme color as an example)
const savedColor = localStorage.getItem('buttonColor');
if (savedColor) {
  button.style.backgroundColor = savedColor;
}

// Click triggers animation + stores preference
button.addEventListener('click', () => {
  // Animate button
  button.classList.add('bounce');
  setTimeout(() => button.classList.remove('bounce'), 600);

  // Animate image
  image.classList.add('spin');
  setTimeout(() => image.classList.remove('spin'), 1000);

  // Store preference in localStorage
  localStorage.setItem('buttonColor', '#e67e22');
  button.style.backgroundColor = '#e67e22';
});
