// Datos de la bitácora - Equipo Orión

const bitacoraData = [
  {
    id: 1,
    numeroHito: 1,
    titulo: "Primera parada — El inicio del viaje",
    descripcion: "Nos reunimos como equipo para comenzar esta nueva aventura, intercambiando ideas y explorando posibles direcciones para el proyecto.",
    imagen: null,
    aspectosTecnicos: [
      "Planeamiento de contenido",
      "Reuniones de equipo",
      "UX inicial",
      "Documentación de ideas"
    ]
  },
  {
    id: 2,
    numeroHito: 2,
    titulo: "Definiendo nuestra constelación",
    descripcion: "Con el rumbo ya definido, dimos el siguiente paso: empezar a darle forma a lo que íbamos a ser como equipo. Nos enfocamos en pensar el eje del proyecto, elegir un nombre y definir una estética que realmente nos represente. Elegimos Orión, inspirado en la constelación. Nos gustó porque sentimos que nos representaba bastante: cada una como una estrella, con lo suyo, pero entendiendo que es cuando nos juntamos que realmente se arma algo más grande.",
    imagen: "/assets/img/logo.png",
    aspectosTecnicos: ["Branding visual", "Tipografía", "Paleta de colores", "Prototipo UI"]
  },
  {
    id: 3,
    numeroHito: 3,
    titulo: "Primeros trazos del diseño",
    descripcion: "Realizamos un primer maquetado para organizar las ideas. Utilizamos herramientas simples para visualizar cómo sería la estructura de la página, priorizando una estética clara y ordenada.",
    imagen: "/assets/img/codigo.png",
    aspectosTecnicos: ["Diseño preliminar en Canva", "Definición de estructura de navegación", "Organización inicial de secciones", "Selección de paleta de colores"]
  },
  {
    id: 4,
    numeroHito: 4,
    titulo: "Construcción compartida",
    descripcion: "A medida que avanzábamos, el proyecto se convirtió en un verdadero trabajo colaborativo. Cada integrante aportó ideas, realizó ajustes y participó en distintas partes del desarrollo, desde el código hasta el diseño.",
    imagen: null,
    aspectosTecnicos: ["Unificación de criterios visuales", "Definición de componentes y secciones", "Maquetación inicial utilizando HTML y CSS", "Organización de recursos gráficos e imágenes"]
  },
  {
    id: 5,
    numeroHito: 5,
    titulo: "Desarrollo del proyecto",
    descripcion: "Comenzamos a desarrollar la página utilizando HTML, CSS y JavaScript, incorporando efectos visuales como animaciones y estilos interactivos.",
    imagen: "/assets/img/borrador.png",
    aspectosTecnicos: ["Implementación de layouts con Flexbox", "Implementación de animaciones y transiciones visuales", "Cursor personalizado con forma de cohete", "Animaciones de aparición (ScrollReveal / Framer Motion)"]
  },
  {
    id: 6,
    numeroHito: 6,
    titulo: "Refinamiento y ajustes",
    descripcion: "A medida que el proyecto fue creciendo, comenzamos a detectar diferencias en la visualización entre distintos dispositivos y resoluciones. Le dijimos adiós a secciones innecesarias para quedarnos con lo esencial: una página de inicio fuerte y una bitácora funcional.",
    imagen: null,
    aspectosTecnicos: ["Implementación de diseño responsive", "Corrección de problemas de overflow", "Ajuste de márgenes y paddings", "Revisión de z-index y capas"]
  },
  {
    id: 7,
    numeroHito: 7,
    titulo: "Ajustes, decisiones y desafíos",
    descripcion: "Trabajar con imágenes de fondo y lograr la estética deseada nos llevó tiempo y pruebas. Sin embargo, el trabajo en equipo fue fundamental para resolver cada inconveniente.",
    imagen: null,
    aspectosTecnicos: ["Optimización de animaciones CSS y JS", "Resolución de problemas generales", "Corrección de eventos interactivos", "Organización y limpieza del código"]
  },
  {
    id: 8,
    numeroHito: 8,
    titulo: "Inicio de la migración a React",
    descripcion: "Con el proyecto funcional en HTML, CSS y JavaScript, comenzamos el proceso de migración hacia React.",
    imagen: null,
    aspectosTecnicos: ["Creación de nuevo repositorio", "Instalación de dependencias (pnpm)", "Definición de estructura de carpetas", "Separación de páginas y componentes"]
  },
  {
    id: 9,
    numeroHito: 9,
    titulo: "Migración de la página principal",
    descripcion: "Una vez configurado el entorno, comenzamos migrando la página principal.",
    imagen: null,
    aspectosTecnicos: ["Conversión de HTML a JSX", "Adaptación de atributos HTML a React", "Creación de componentes reutilizables", "Integración de la API de la NASA"]
  },
  {
    id: 10,
    numeroHito: 10,
    titulo: "Migración de perfiles y componentes",
    descripcion: "Con la página principal funcionando correctamente, continuamos trasladando las demás secciones al nuevo entorno React.",
    imagen: null,
    aspectosTecnicos: ["Creación de componentes independientes", "Migración de tarjetas y secciones", "Integración de buscador de planetas", "Organización modular del código"]
  },
  {
    id: 11,
    numeroHito: 11,
    titulo: "Recuperación y adaptación de funcionalidades",
    descripcion: "Durante la migración descubrimos que algunas funcionalidades implementadas en JavaScript no funcionaban igual en React.",
    imagen: null,
    aspectosTecnicos: ["Adaptación de eventos a React", "Reemplazo de ScrollReveal por Framer Motion", "Uso de useCallback para optimización", "Migración de efectos DOM a React"]
  },
  {
    id: 12,
    numeroHito: 12,
    titulo: "Ajustes finales y optimización",
    descripcion: "En la etapa final realizamos pruebas generales, corregimos errores detectados durante la migración y optimizamos la estructura definitiva del proyecto.",
    imagen: null,
    aspectosTecnicos: ["Revisión de rendimiento", "Corrección de errores de navegación", "Compatibilidad responsive", "Limpieza y organización del código"]
  }
];

export default bitacoraData;
