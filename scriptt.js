const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

 
function mostrar(id) {
  document.getElementById('crear').style.display = 'none';
  document.getElementById('actualizar').style.display = 'none';
  document.getElementById('recuperar').style.display = 'none';

  let elemento = document.getElementById(id);
  if (elemento) {
    elemento.style.display = 'block';
  }
}

  



