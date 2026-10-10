/* ============================================
   Las Muñoz - Lógica del Formulario de Contacto
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const inputs = form.querySelectorAll('input, select, textarea');

  // Validación en tiempo real
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validateField(input);
    });
  });

  // Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
      if (!validateField(input)) isValid = false;
    });

    if (isValid) submitForm(form);
  });
}

function validateField(field) {
  const value = field.value.trim();
  const errorEl = field.parentElement.querySelector('.form-error');
  let isValid = true;
  let errorMsg = '';

  // Limpiar error previo
  field.classList.remove('error');
  if (errorEl) errorEl.classList.remove('visible');

  // Si no es required y está vacío, es válido
  if (!field.required && !value) return true;

  // Required
  if (field.required && !value) {
    errorMsg = 'Este campo es obligatorio';
    isValid = false;
  }

  // Email
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      errorMsg = 'Ingresa un email válido';
      isValid = false;
    }
  }

  // Teléfono (acepta varios formatos)
  if (field.type === 'tel' && value) {
    const phoneRegex = /^[\d\s\+\-\(\)]{8,}$/;
    if (!phoneRegex.test(value)) {
      errorMsg = 'Ingresa un teléfono válido';
      isValid = false;
    }
  }

  // Min length
  if (field.minLength && value && value.length < field.minLength) {
    errorMsg = `Mínimo ${field.minLength} caracteres`;
    isValid = false;
  }

  // Checkbox
  if (field.type === 'checkbox' && field.required && !field.checked) {
    errorMsg = 'Debes aceptar los términos';
    isValid = false;
  }

  if (!isValid) {
    field.classList.add('error');
    if (errorEl) {
      errorEl.textContent = errorMsg;
      errorEl.classList.add('visible');
    }
  }

  return isValid;
}

function submitForm(form) {
  const button = form.querySelector('button[type="submit"]');
  const originalText = button.innerHTML;
  const successMsg = document.getElementById('form-success');

  // Estado de carga
  button.disabled = true;
  button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...';

  // Simular envío
  setTimeout(() => {
    // Mostrar éxito
    if (successMsg) {
      successMsg.classList.remove('hidden');
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Reset
    form.reset();
    button.disabled = false;
    button.innerHTML = originalText;

    // Ocultar éxito después de un tiempo
    setTimeout(() => {
      successMsg?.classList.add('hidden');
    }, 6000);
  }, 1800);
}