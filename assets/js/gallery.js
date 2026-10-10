/* ============================================
   Las Muñoz - Lógica de Galería con Lightbox
   ============================================ */

let currentFilter = 'todos';
let filteredItems = [];
let currentLightboxIndex = 0;

function initGallery() {
  renderGallery();
  setupFilters();
  setupLightbox();
}

function renderGallery() {
  const container = document.getElementById('galeria-container');
  if (!container || !window.DATA) return;

  filteredItems = currentFilter === 'todos'
    ? DATA.galeria
    : DATA.galeria.filter(item => item.categoria === currentFilter);

  container.innerHTML = filteredItems.map((item, index) => `
    <div class="gallery-item reveal" data-id="${item.id}" data-index="${index}">
      <img src="${item.src}" alt="${item.titulo}" loading="lazy" />
      <div class="overlay">
        <div>
          <h4 class="font-serif text-xl font-bold">${item.titulo}</h4>
          <p class="text-sm text-white/80 capitalize">${item.categoria.replace('-', ' / ')}</p>
        </div>
      </div>
    </div>
  `).join('');

  // Click handler para abrir lightbox
  container.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index, 10);
      openLightbox(index);
    });
  });

  setTimeout(() => initScrollReveal(), 50);
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderGallery();
    });
  });
}

function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => navigateLightbox(-1));
  nextBtn?.addEventListener('click', () => navigateLightbox(1));

  // Cerrar al hacer clic fuera de la imagen
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Navegación con teclado
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const counter = document.getElementById('lightbox-counter');

  const item = filteredItems[index];
  if (!item) return;

  img.src = item.src;
  img.alt = item.titulo;
  title.textContent = item.titulo;
  counter.textContent = `${index + 1} / ${filteredItems.length}`;

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  currentLightboxIndex = (currentLightboxIndex + direction + filteredItems.length) % filteredItems.length;
  openLightbox(currentLightboxIndex);
}
window.initGallery = initGallery;