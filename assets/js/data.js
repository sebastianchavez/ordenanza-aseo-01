/* ============================================
   Las Muñoz - Datos Mockeados
   ============================================ */

const DATA = {
  empresa: {
    nombre: 'Las Muñoz',
    tagline: 'Ordenanza y Aseo Profesional',
    descripcionCorta: 'Expertos en limpieza y organización para hogares y empresas',
    telefono: '+56 9 8765 4321',
    email: 'contacto@lasmunoz.cl',
    whatsapp: '56987654321',
    direccion: 'Av. Las Flores 1234, Oficina 502, Santiago, Chile',
    horariosAtencion: {
      semana: 'Lunes a Viernes: 7:00 - 19:00 hrs',
      sabado: 'Sábado: 8:00 - 14:00 hrs',
      domingo: 'Domingo: Cerrado',
    },
    redes: {
      facebook: 'https://facebook.com/lasmunoz',
      instagram: 'https://instagram.com/lasmunoz',
      linkedin: 'https://linkedin.com/company/lasmunoz',
    },
    mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456789!2d-70.64827!3d-33.44889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzU2LjAiUyA3MMKwMzgnNTMuOCJX!5e0!3m2!1ses-419!2scl!4v1234567890',
  },

  servicios: [
    {
      id: 1,
      icono: '🏠',
      titulo: 'Limpieza Residencial',
      descripcion: 'Servicio completo para tu hogar, incluyendo cocina, baños, dormitorios y áreas comunes. Productos ecológicos incluidos.',
      precioDesde: 25000,
      destacado: true,
    },
    {
      id: 2,
      icono: '🏢',
      titulo: 'Limpieza Comercial',
      descripcion: 'Mantenimiento profesional para oficinas, locales comerciales y espacios corporativos con horarios flexibles.',
      precioDesde: 45000,
      destacado: true,
    },
    {
      id: 3,
      icono: '✨',
      titulo: 'Limpieza Profunda',
      descripcion: 'Limpieza exhaustiva con técnicas especializadas para eliminar grasa, manchas difíciles y acumulación de polvo.',
      precioDesde: 38000,
      destacado: false,
    },
    {
      id: 4,
      icono: '📦',
      titulo: 'Ordenanza y Organización',
      descripcion: 'Organización profesional de espacios, armarios, bodegas y archivos. Sistema personalizado para cada cliente.',
      precioDesde: 32000,
      destacado: true,
    },
    {
      id: 5,
      icono: '🧺',
      titulo: 'Lavandería',
      descripcion: 'Servicio completo de lavado, secado, planchado y doblado. Recolección y entrega a domicilio.',
      precioDesde: 18000,
      destacado: false,
    },
    {
      id: 6,
      icono: '🏗️',
      titulo: 'Limpieza Post-Obra',
      descripcion: 'Limpieza especializada después de remodelaciones o construcciones. Eliminamos polvo, residuos y manchas.',
      precioDesde: 55000,
      destacado: false,
    },
    {
      id: 7,
      icono: '🪟',
      titulo: 'Limpieza de Ventanas',
      descripcion: 'Cristales, ventanales y fachadas de vidrio. Equipos profesionales para trabajos en altura.',
      precioDesde: 22000,
      destacado: false,
    },
    {
      id: 8,
      icono: '🦠',
      titulo: 'Desinfección',
      descripcion: 'Sanitización profunda con productos certificados. Ideal para espacios con alta concurrencia.',
      precioDesde: 42000,
      destacado: false,
    },
  ],

  beneficios: [
    {
      icono: '🌿',
      titulo: 'Productos Ecológicos',
      descripcion: 'Utilizamos productos biodegradables y amigables con el medio ambiente.',
    },
    {
      icono: '👥',
      titulo: 'Personal Verificado',
      descripcion: 'Equipo capacitado, con certificados de antecedentes y referencias comprobables.',
    },
    {
      icono: '⏰',
      titulo: 'Puntualidad Garantizada',
      descripcion: 'Llegamos a la hora exacta. Tu tiempo es valioso para nosotros.',
    },
    {
      icono: '💯',
      titulo: 'Satisfacción Garantizada',
      descripcion: 'Si no quedas conforme, regresamos sin costo adicional para resolverlo.',
    },
    {
      icono: '🛡️',
      titulo: 'Seguro Incluido',
      descripcion: 'Todos nuestros servicios cuentan con seguro de responsabilidad civil.',
    },
    {
      icono: '💳',
      titulo: 'Pagos Flexibles',
      descripcion: 'Múltiples medios de pago y opciones de financiamiento disponibles.',
    },
  ],

  testimonios: [
    {
      id: 1,
      nombre: 'Carolina Méndez',
      cargo: 'Ejecutiva Comercial',
      foto: 'https://i.pravatar.cc/150?img=1',
      comentario: 'Las Muñoz transformaron mi departamento. El nivel de detalle y profesionalismo es excepcional. ¡Totalmente recomendadas!',
      calificacion: 5,
    },
    {
      id: 2,
      nombre: 'Roberto Silva',
      cargo: 'Empresario',
      foto: 'https://i.pravatar.cc/150?img=12',
      comentario: 'Contratamos sus servicios para nuestra oficina y la diferencia se nota día a día. Personal amable, puntual y muy eficiente.',
      calificacion: 5,
    },
    {
      id: 3,
      nombre: 'Andrea Pérez',
      cargo: 'Madre y Profesionista',
      foto: 'https://i.pravatar.cc/150?img=5',
      comentario: 'Lo mejor es la confianza que entregan. Dejo a mi familia tranquila sabiendo que están en buenas manos. Servicio premium.',
      calificacion: 5,
    },
    {
      id: 4,
      nombre: 'Felipe Rojas',
      cargo: 'Arquitecto',
      foto: 'https://i.pravatar.cc/150?img=15',
      comentario: 'Después de cada proyecto de remodelación, ellas se encargan de la limpieza final. Trabajo impecable, siempre a tiempo.',
      calificacion: 5,
    },
    {
      id: 5,
      nombre: 'María José Vargas',
      cargo: 'Abogada',
      foto: 'https://i.pravatar.cc/150?img=9',
      comentario: 'El equipo de Las Muñoz es súper profesional. Llegan uniformados, con todo el equipamiento y dejan todo reluciente.',
      calificacion: 5,
    },
    {
      id: 6,
      nombre: 'Diego Fernández',
      cargo: 'Médico',
      foto: 'https://i.pravatar.cc/150?img=13',
      comentario: 'La desinfección que realizan en mi consultorio es de otro nivel. Mis pacientes lo han notado. Excelente servicio.',
      calificacion: 5,
    },
  ],

  equipo: [
    {
      id: 1,
      nombre: 'María Muñoz',
      cargo: 'Fundadora & Directora General',
      foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      bio: '15 años de experiencia en el sector.',
    },
    {
      id: 2,
      nombre: 'Carmen Muñoz',
      cargo: 'Co-fundadora & Supervisora',
      foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      bio: 'Especialista en atención al cliente.',
    },
    {
      id: 3,
      nombre: 'Patricia Lagos',
      cargo: 'Jefa de Operaciones',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      bio: 'Coordina todos los equipos de trabajo.',
    },
    {
      id: 4,
      nombre: 'Sofía Reyes',
      cargo: 'Supervisora de Calidad',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
      bio: 'Asegura los estándares de calidad.',
    },
    {
      id: 5,
      nombre: 'Valentina Soto',
      cargo: 'Coordinadora Comercial',
      foto: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      bio: 'Atención personalizada a clientes.',
    },
    {
      id: 6,
      nombre: 'Camila Torres',
      cargo: 'Capacitadora',
      foto: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
      bio: 'Forma al equipo con técnicas modernas.',
    },
  ],

  estadisticas: [
    { numero: 500, sufijo: '+', texto: 'Clientes Felices' },
    { numero: 8, sufijo: '', texto: 'Años de Experiencia' },
    { numero: 98, sufijo: '%', texto: 'Satisfacción' },
    { numero: 25, sufijo: '+', texto: 'Profesionales' },
  ],

  galeria: [
    { id: 1, src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80', categoria: 'residencial', titulo: 'Cocina Residencial' },
    { id: 2, src: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80', categoria: 'residencial', titulo: 'Living Comedor' },
    { id: 3, src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80', categoria: 'comercial', titulo: 'Oficina Corporativa' },
    { id: 4, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', categoria: 'residencial', titulo: 'Dormitorio Principal' },
    { id: 5, src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', categoria: 'residencial', titulo: 'Baño Moderno' },
    { id: 6, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', categoria: 'comercial', titulo: 'Sala de Reuniones' },
    { id: 7, src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80', categoria: 'antes-despues', titulo: 'Antes y Después' },
    { id: 8, src: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80', categoria: 'residencial', titulo: 'Cocina Integral' },
    { id: 9, src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', categoria: 'residencial', titulo: 'Sala de Estar' },
    { id: 10, src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', categoria: 'equipo', titulo: 'Nuestro Equipo' },
    { id: 11, src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', categoria: 'comercial', titulo: 'Local Comercial' },
    { id: 12, src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80', categoria: 'antes-despues', titulo: 'Limpieza Profunda' },
    { id: 13, src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80', categoria: 'residencial', titulo: 'Comedor Familiar' },
    { id: 14, src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80', categoria: 'residencial', titulo: 'Living Premium' },
    { id: 15, src: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80', categoria: 'equipo', titulo: 'Personal Capacitado' },
    { id: 16, src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', categoria: 'comercial', titulo: 'Espacio Corporativo' },
  ],

  horariosClases: {
    lunes: [
      { hora: '08:00 - 10:00', clase: 'Inducción General', tipo: 'general', capacidad: 20 },
      { hora: '10:30 - 12:30', clase: 'Técnicas de Limpieza Básica', tipo: 'tecnica', capacidad: 15 },
      { hora: '14:00 - 16:00', clase: 'Manejo de Productos Químicos', tipo: 'tecnica', capacidad: 15 },
    ],
    martes: [
      { hora: '08:00 - 10:00', clase: 'Atención al Cliente', tipo: 'atencion', capacidad: 20 },
      { hora: '10:30 - 12:30', clase: 'Limpieza Profunda', tipo: 'tecnica', capacidad: 12 },
      { hora: '15:00 - 17:00', clase: 'Organización Profesional', tipo: 'organizacion', capacidad: 15 },
    ],
    miercoles: [
      { hora: '08:00 - 10:00', clase: 'Seguridad e Higiene', tipo: 'general', capacidad: 20 },
      { hora: '10:30 - 12:30', clase: 'Limpieza de Oficinas', tipo: 'tecnica', capacidad: 15 },
      { hora: '14:00 - 16:00', clase: 'Manejo de Equipos', tipo: 'tecnica', capacidad: 12 },
    ],
    jueves: [
      { hora: '08:00 - 10:00', clase: 'Limpieza Residencial', tipo: 'tecnica', capacidad: 15 },
      { hora: '10:30 - 12:30', clase: 'Lavandería y Planchado', tipo: 'tecnica', capacidad: 12 },
      { hora: '15:00 - 17:00', clase: 'Protocolo de Desinfección', tipo: 'tecnica', capacidad: 15 },
    ],
    viernes: [
      { hora: '08:00 - 10:00', clase: 'Trabajo en Equipo', tipo: 'general', capacidad: 25 },
      { hora: '10:30 - 12:30', clase: 'Limpieza Post-Obra', tipo: 'tecnica', capacidad: 12 },
      { hora: '14:00 - 16:00', clase: 'Evaluación Semanal', tipo: 'general', capacidad: 25 },
    ],
    sabado: [
      { hora: '09:00 - 11:00', clase: 'Curso Intensivo de Capacitación', tipo: 'intensivo', capacidad: 10 },
      { hora: '11:30 - 13:30', clase: 'Práctica Supervisada', tipo: 'practica', capacidad: 8 },
    ],
    domingo: [],
  },

  precios: [
    {
      id: 1,
      nombre: 'Plan Básico',
      precioMensual: 29990,
      precioAnual: 299900,
      descripcion: 'Ideal para departamentos pequeños',
      destacado: false,
      incluye: [
        'Limpieza general 2 veces por semana',
        '4 horas por visita',
        'Productos básicos incluidos',
        '1 persona capacitada',
        'Reporte mensual digital',
      ],
      noIncluye: [
        'Limpieza profunda',
        'Lavandería',
        'Organización profesional',
      ],
    },
    {
      id: 2,
      nombre: 'Plan Premium',
      precioMensual: 54990,
      precioAnual: 549900,
      descripcion: 'El más solicitado por nuestros clientes',
      destacado: true,
      incluye: [
        'Limpieza general 5 veces por semana',
        '6 horas por visita',
        'Productos premium ecológicos',
        '2 personas capacitadas',
        'Limpieza profunda mensual',
        'Atención prioritaria 24/7',
        'Reporte semanal detallado',
      ],
      noIncluye: [
        'Lavandería diaria',
      ],
    },
    {
      id: 3,
      nombre: 'Plan Empresarial',
      precioMensual: 89990,
      precioAnual: 899900,
      descripcion: 'Para oficinas y espacios comerciales',
      destacado: false,
      incluye: [
        'Limpieza diaria de lunes a sábado',
        '8 horas por visita',
        'Equipos profesionales',
        'Personal uniformado',
        'Desinfección semanal',
        'Manejo de residuos especiales',
        'Coordinador asignado',
        'Facturación electrónica',
      ],
      noIncluye: [
        'Servicios extraordinarios',
      ],
    },
    {
      id: 4,
      nombre: 'Plan Personalizado',
      precioMensual: null,
      precioAnual: null,
      descripcion: 'Diseñamos un plan a tu medida',
      destacado: false,
      incluye: [
        'Combinación de servicios a elección',
        'Horarios flexibles',
        'Cotización sin compromiso',
        'Asesoría personalizada',
        'Visita de evaluación gratis',
        'Plan escalable según tus necesidades',
      ],
      noIncluye: [
      ],
      esCustom: true,
    },
  ],

  faqs: [
    {
      pregunta: '¿Qué incluyen los servicios de limpieza?',
      respuesta: 'Nuestros servicios incluyen mano de obra calificada, productos de limpieza profesionales y todos los implementos necesarios (aspiradora, trapeador, paños, etc.). Solo necesitamos que nos proporciones acceso al espacio a limpiar.',
    },
    {
      pregunta: '¿Cuánto tiempo dura una limpieza estándar?',
      respuesta: 'Una limpieza residencial estándar toma entre 2 y 4 horas dependiendo del tamaño del espacio y el nivel de detalle requerido. Para limpieza profunda puede extenderse a 6-8 horas.',
    },
    {
      pregunta: '¿Necesito estar presente durante la limpieza?',
      respuesta: 'No es necesario. Muchos de nuestros clientes nos dejan las llaves o códigos de acceso. Todo nuestro personal está verificado y contamos con seguro de responsabilidad civil.',
    },
    {
      pregunta: '¿Qué métodos de pago aceptan?',
      respuesta: 'Aceptamos transferencia bancaria, tarjetas de débito y crédito, efectivo y pagos a través de aplicaciones móviles. Para planes mensuales puedes pagar de forma anticipada o contra factura.',
    },
    {
      pregunta: '¿Puedo cancelar o reagendar un servicio?',
      respuesta: 'Sí, puedes cancelar o reagendar con al menos 24 horas de anticipación sin costo alguno. Cancelaciones con menor tiempo tienen un recargo del 30%.',
    },
    {
      pregunta: '¿El personal está verificado?',
      respuesta: 'Todo nuestro personal cuenta con certificado de antecedentes vigente, referencias comprobables y capacitación continua. Además, están cubiertos por nuestro seguro de responsabilidad civil.',
    },
    {
      pregunta: '¿Utilizan productos ecológicos?',
      respuesta: 'Sí, trabajamos con productos biodegradables y amigables con el medio ambiente. Son igualmente efectivos y seguros para niños, mascotas y personas con alergias.',
    },
    {
      pregunta: '¿Ofrecen garantía de satisfacción?',
      respuesta: 'Absolutamente. Si no quedas 100% conforme con nuestro servicio, regresamos dentro de las siguientes 24 horas para resolver cualquier detalle sin costo adicional.',
    },
  ],

  valoresEmpresa: [
    {
      icono: '⭐',
      titulo: 'Excelencia',
      descripcion: 'Buscamos la perfección en cada detalle de nuestro trabajo.',
    },
    {
      icono: '🤝',
      titulo: 'Confianza',
      descripcion: 'Construimos relaciones duraderas basadas en la transparencia.',
    },
    {
      icono: '💚',
      titulo: 'Compromiso',
      descripcion: 'Nos comprometemos con cada cliente como si fuera único.',
    },
    {
      icono: '🌱',
      titulo: 'Sustentabilidad',
      descripcion: 'Cuidamos el medio ambiente con productos eco-amigables.',
    },
  ],

  certificaciones: [
    'ISO 9001 - Gestión de Calidad',
    'ISO 14001 - Gestión Ambiental',
    'Sello de Empresa B Certificada',
    'Certificación en Bioseguridad',
    'Premio Excelencia en Servicio 2024',
  ],
};

// Hacer DATA disponible globalmente
window.DATA = DATA;