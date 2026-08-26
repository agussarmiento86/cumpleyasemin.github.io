// ============ PANTALLA DE ENTRADA ============
const pantallaEntrada = document.getElementById('pantalla-entrada');
const botonEntrar = document.getElementById('boton-entrar');
const tarjetaPrincipal = document.getElementById('tarjeta-principal');
const brillosContenedor = document.getElementById('entrada-brillos');

// Ocultar tarjeta inicialmente
if (tarjetaPrincipal) {
  tarjetaPrincipal.classList.add('tarjeta-oculta');
}

// Crear partículas de brillo sobre el fondo
if (brillosContenedor) {
  for (let i = 0; i < 30; i++) {
    const brillo = document.createElement('div');
    brillo.className = 'brillo-particula';
    brillo.style.left = Math.random() * 100 + '%';
    brillo.style.top = Math.random() * 100 + '%';
    brillo.style.width = (3 + Math.random() * 6) + 'px';
    brillo.style.height = brillo.style.width;
    brillo.style.animationDelay = Math.random() * 4 + 's';
    brillo.style.animationDuration = (2 + Math.random() * 3) + 's';
    brillosContenedor.appendChild(brillo);
  }
}

// Botón para entrar a la invitación
if (botonEntrar && pantallaEntrada) {
  botonEntrar.addEventListener('click', () => {
    pantallaEntrada.classList.add('oculta');
    if (tarjetaPrincipal) {
      tarjetaPrincipal.classList.remove('tarjeta-oculta');
      tarjetaPrincipal.classList.add('tarjeta-visible');
    }
    setTimeout(() => {
      pantallaEntrada.style.display = 'none';
    }, 900);
  });
}

// ============ FIN PANTALLA DE ENTRADA ============

// Confeti sutil de corazones y patitas
const simbolos = ['💗', '🐾', '🎀'];
const contenedor = document.getElementById('confeti');
const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (contenedor && !prefiereMenosMovimiento) {
  const cantidad = 14;
  for (let i = 0; i < cantidad; i++) {
    const pieza = document.createElement('span');
    pieza.className = 'pieza-confeti';
    pieza.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    pieza.style.left = Math.random() * 100 + 'vw';
    pieza.style.animationDuration = 8 + Math.random() * 6 + 's';
    pieza.style.animationDelay = Math.random() * 8 + 's';
    pieza.style.fontSize = 14 + Math.random() * 10 + 'px';
    contenedor.appendChild(pieza);
  }
}


