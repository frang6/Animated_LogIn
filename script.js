const registrarse = document.getElementById('registrarse');
const iniciarSesion = document.getElementById('iniciar-sesion');
const contenedor = document.getElementById('contenedor');

registrarse.addEventListener('click', () => {
    contenedor.classList.add('panel-derecho-activo');
});

iniciarSesion.addEventListener('click', () => {
    contenedor.classList.remove('panel-derecho-activo');
});

