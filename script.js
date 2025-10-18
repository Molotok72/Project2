const button = document.getElementById("btn");
const target = document.getElementById("btnt");
button.addEventListener('click', () => {
    target.scrollIntoView({ behavior: 'smooth' });
  });