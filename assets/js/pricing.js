/* ============================================
   Las Muñoz - Lógica de Precios
   ============================================ */

function initPricing() {
  renderPricing();

  const toggle = document.querySelector('.pricing-toggle');
  if (!toggle) return;

  toggle.querySelectorAll('button').forEach(btn => {
    btn.classList.toggle('bg-primary', btn.classList.contains('active'));
    btn.classList.toggle('text-white', btn.classList.contains('active'));
    if (!btn.classList.contains('active')) {
      btn.classList.add('text-gray-600');
    }
    btn.addEventListener('click', () => togglePricingPeriod(btn));
  });
}

function togglePricingPeriod(activeBtn) {
  const toggle = activeBtn.parentElement;
  const period = activeBtn.dataset.period;

  toggle.querySelectorAll('button').forEach(btn => {
    btn.classList.remove('active', 'bg-primary', 'text-white');
    btn.classList.add('text-gray-600');
  });

  activeBtn.classList.add('active', 'bg-primary', 'text-white');
  activeBtn.classList.remove('text-gray-600');

  document.querySelectorAll('.pricing-card').forEach(card => {
    const monthly = card.querySelector('.price-monthly');
    const yearly = card.querySelector('.price-yearly');
    if (period === 'yearly') {
      monthly?.classList.add('hidden');
      yearly?.classList.remove('hidden');
    } else {
      monthly?.classList.remove('hidden');
      yearly?.classList.add('hidden');
    }
  });
}

function renderPricing() {
  const container = document.getElementById('pricing-container');
  if (!container || !window.DATA) return;

  container.innerHTML = DATA.precios.map((p, i) => {
    if (p.esCustom) {
      return `
        <div class="pricing-card reveal reveal-delay-${(i % 4) + 1}">
          <div class="text-center mb-6">
            <div class="text-4xl mb-3">✨</div>
            <h3 class="font-serif text-2xl font-bold text-dark">${p.nombre}</h3>
            <p class="text-gray-500 mt-2">${p.descripcion}</p>
          </div>
          <div class="text-center my-8">
            <div class="text-primary font-bold text-3xl">A medida</div>
            <p class="text-sm text-gray-500 mt-2">Cotización personalizada</p>
          </div>
          <ul class="space-y-3 mb-8">
            ${p.incluye.map(item => `
              <li class="flex items-start gap-2 text-sm">
                <i class="fas fa-check text-primary mt-1 flex-shrink-0"></i>
                <span class="text-gray-600">${item}</span>
              </li>
            `).join('')}
          </ul>
          <a href="contacto.html" class="btn btn-secondary w-full">
            Cotizar Gratis
          </a>
        </div>
      `;
    }

    const ahorroAnual = Math.round(p.precioMensual * 12 - p.precioAnual);

    return `
      <div class="pricing-card ${p.destacado ? 'featured' : ''} reveal reveal-delay-${(i % 4) + 1}">
        <div class="text-center mb-6">
          <h3 class="font-serif text-2xl font-bold text-dark">${p.nombre}</h3>
          <p class="text-gray-500 mt-2">${p.descripcion}</p>
        </div>
        <div class="text-center my-8">
          <div class="price-monthly">
            <span class="text-4xl font-bold text-primary">${formatCLP(p.precioMensual)}</span>
            <span class="text-gray-500">/mes</span>
          </div>
          <div class="price-yearly hidden">
            <span class="text-4xl font-bold text-primary">${formatCLP(Math.round(p.precioAnual / 12))}</span>
            <span class="text-gray-500">/mes</span>
            <div class="text-sm text-accent font-semibold mt-1">
              Ahorras ${formatCLP(ahorroAnual)} al año
            </div>
          </div>
        </div>
        <ul class="space-y-3 mb-8">
          ${p.incluye.map(item => `
            <li class="flex items-start gap-2 text-sm">
              <i class="fas fa-check text-primary mt-1 flex-shrink-0"></i>
              <span class="text-gray-600">${item}</span>
            </li>
          `).join('')}
          ${p.noIncluye.map(item => `
            <li class="flex items-start gap-2 text-sm">
              <i class="fas fa-times text-gray-300 mt-1 flex-shrink-0"></i>
              <span class="text-gray-400 line-through">${item}</span>
            </li>
          `).join('')}
        </ul>
        <a href="contacto.html" class="btn ${p.destacado ? 'btn-primary' : 'btn-secondary'} w-full">
          Contratar Ahora
        </a>
      </div>
    `;
  }).join('');

  setTimeout(() => initScrollReveal(), 50);
}

window.initPricing = initPricing;