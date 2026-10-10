/* ============================================
   Las Muñoz - Lógica de Horario de Clases
   ============================================ */

let currentDay = 'lunes';

const tipoLabels = {
  tecnica: { label: 'Técnica', color: 'bg-primary text-white' },
  general: { label: 'General', color: 'bg-accent text-white' },
  atencion: { label: 'Atención al Cliente', color: 'bg-primary-light text-white' },
  organizacion: { label: 'Organización', color: 'bg-primary-dark text-white' },
  intensivo: { label: 'Intensivo', color: 'bg-accent-dark text-white' },
  practica: { label: 'Práctica', color: 'bg-secondary text-dark' },
};

function initSchedule() {
  const tabs = document.querySelectorAll('.day-tab');
  if (!tabs.length) return;

  // Detectar día actual
  const today = new Date().getDay();
  const dayMap = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  currentDay = dayMap[today];

  tabs.forEach(tab => {
    if (tab.dataset.day === currentDay) {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    }
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentDay = tab.dataset.day;
      renderSchedule();
    });
  });

  renderSchedule();
}

function renderSchedule() {
  const container = document.getElementById('schedule-content');
  if (!container || !window.DATA) return;

  const clases = DATA.horariosClases[currentDay] || [];

  if (!clases.length) {
    container.innerHTML = `
      <div class="text-center py-12">
        <div class="text-6xl mb-4">🌴</div>
        <h4 class="font-serif text-2xl font-bold text-dark mb-2">Día de descanso</h4>
        <p class="text-gray-500">No hay clases programadas para este día.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="mb-6">
      <h3 class="font-serif text-2xl font-bold text-dark capitalize mb-2">
        ${getDayName(currentDay)}
      </h3>
      <p class="text-gray-500">${clases.length} clase${clases.length > 1 ? 's' : ''} programada${clases.length > 1 ? 's' : ''}</p>
    </div>
    <div class="grid md:grid-cols-2 gap-4">
      ${clases.map((c, i) => {
        const tipo = tipoLabels[c.tipo] || tipoLabels.tecnica;
        return `
          <div class="schedule-card tipo-${c.tipo} reveal reveal-delay-${(i % 4) + 1}">
            <div class="flex justify-between items-start mb-3">
              <div class="schedule-time">${c.hora}</div>
              <span class="tipo-tag ${tipo.color}">${tipo.label}</span>
            </div>
            <h4 class="font-bold text-lg text-dark mb-2">${c.clase}</h4>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <i class="fas fa-users"></i>
              <span>Cupos: ${c.capacidad} personas</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  setTimeout(() => initScrollReveal(), 50);
}

function getDayName(day) {
  const names = {
    lunes: 'Lunes', martes: 'Martes', miercoles: 'Miércoles',
    jueves: 'Jueves', viernes: 'Viernes', sabado: 'Sábado', domingo: 'Domingo'
  };
  return names[day] || day;
}

window.initSchedule = initSchedule;