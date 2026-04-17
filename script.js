// script.js - interactividad global: modo oscuro, contador, sonido, carrusel, mensaje
document.addEventListener('DOMContentLoaded', () => {
    // ---------- MODO OSCURO ----------
    const darkToggle = document.getElementById('darkModeToggle');
    if (darkToggle) {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark');
        }
        darkToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            if (document.body.classList.contains('dark')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    // ---------- CONTADOR DINÁMICO ----------
    let counter = localStorage.getItem('hambreContador') ? parseInt(localStorage.getItem('hambreContador')) : 0;
    const contadorSpan = document.getElementById('contadorNumero');
    const incrementBtn = document.getElementById('incrementBtn');
    if (contadorSpan && incrementBtn) {
        contadorSpan.innerText = counter;
        incrementBtn.addEventListener('click', () => {
            counter++;
            contadorSpan.innerText = counter;
            localStorage.setItem('hambreContador', counter);
            playClickSound();
        });
    }

    // ---------- BOTÓN INTERACTIVO MENSAJE ----------
    const mensajeBtn = document.getElementById('mensajeBtn');
    if (mensajeBtn) {
        mensajeBtn.addEventListener('click', () => {
            alert('🌱 "El hambre no es un problema de escasez, es un problema de acceso y justicia. Cada acción cuenta para lograr Hambre Cero." — Mariné, Nancy, Ximena, Karen');
            playClickSound();
        });
    }

    // ---------- SONIDO (archivo mp3) ----------
    function