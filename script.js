console.log('Hello World');


const switchBox = document.querySelector('.switch');
// console.log(switchBox);
const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');
const btn = document.querySelector('.btn');
// console.log(btn);
const icone = document.querySelectorAll('i');
// console.log(icone);
const container = document.querySelector('.container');
// console.log(container);
const titre = document.querySelector('h1');
// console.log(titre);

//je soumet au clic la switchbox

switchBox.addEventListener('click', () => {
  console.log('c\'est cliqué');
  btn.classList.toggle('btn-change');

  //   icone.classList.toggle('fa-sun');  //ne fonctionne plus avec font awesone

  container.classList.toggle('container-change');
  switchBox.classList.toggle('switch-change');
  if (titre.innerText === 'Dark Mode') {
    moon.style.display = 'none';
    sun.style.display = 'flex';
    titre.innerText = 'Light Mode';
  } else {
    titre.innerText = 'Dark Mode';
    moon.style.display = 'flex';
    sun.style.display = 'none';
  }
});