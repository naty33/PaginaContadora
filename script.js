// Cambio de color de nombre en el encabezado con un efecto de animación
const nameElement = document.getElementById('name');

nameElement.addEventListener('mouseenter', () => {
    nameElement.style.color = '#e74c3c';
});

nameElement.addEventListener('mouseleave', () => {
    nameElement.style.color = '';
});

// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;
    let message = document.getElementById('messageInput').value;

    if (name && email && message) {
        alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});