const teamData = [
  {
    id:1,
    apodo: "Iván",
    nombre: "Iván Veliz",
    rol: "Front-End Developer",
    ubicacion: "Rosario, Argentina",
    edad: 35,
    avatar: "/assets/img/avatar_ivan.png",
    redes: {
      linkedin: "https://www.linkedin.com/in/ivan-veliz",
      github: "https://github.com/Ivanveliz"
    },
    habilidades: [
      { nombre: "React.js", icono: "/assets/img/ivan/imageSkills/react.svg", nivel: 85 },
      { nombre: "JavaScript", icono: "/assets/img/ivan/imageSkills/js.svg", nivel: 85 },
      { nombre: "HTML5", icono: "/assets/img/ivan/imageSkills/html.svg", nivel: 90 },
      { nombre: "CSS3", icono: "/assets/img/ivan/imageSkills/css.svg", nivel: 80 }
    ],
    proyectos: [
   
      { titulo: "Tabata Spa", descripcion: "Plataforma de entrenamiento .", imagen: "/assets/img/ivan/proyectos/tabata.png" },
      { titulo: "Landing Page E-commerce", descripcion: "Diseño optimizado para alta conversión de ventas.", imagen: "/assets/img/ivan/proyectos/ecommerce.png" },
      { titulo: "App de Productividad", descripcion: "Gestor de tareas y organización de misiones diarias.", imagen: "/assets/img/ivan/proyectos/productividad.png" }
    ],
    peliculasFavoritas: [
      { titulo: "El Señor de los Anillos", imagen: "/assets/img/ivan/movies/tlotr.jpg" },
      { titulo: "Volver al Futuro", imagen: "/assets/img/ivan/movies/bttf.webp" },
      { titulo: "La Ladrona de Libros", imagen: "/assets/img/ivan/movies/tbt.jpg" }
    ],
    discosFavoritos: [
      { titulo: "Artaud", imagen: "/assets/img/ivan/discos/artaud.webp" },
      { titulo: "Clics Modernos", imagen: "/assets/img/ivan/discos/demoliendoHoteles.png" },
      { titulo: "Audio y Agua", imagen: "/assets/img/ivan/discos/audioyagua.jpg" }
    ],

  },
  {
    id:2,
    apodo: "Aye",
    nombre: "Ayelén Asunción",
    rol: "Licenciada en educación",
    ubicacion: "Misiones, Argentina",
    edad: 30,
    avatar: "/assets/img/avatar_aye.png",
    redes: {
      linkedin: "https://www.linkedin.com/in/maria-ayel%C3%A9n-asunci%C3%B3n-a99394139/?isSelfProfile=true",
      github: "https://github.com/mariaayelen"
    },
    habilidades: [
      { nombre: "Figma", icono: "/assets/img/ayelen/imageSkills/figma.svg", nivel: 75 },
      { nombre: "SQL", icono: "/assets/img/ayelen/imageSkills/sql.svg", nivel: 60 },
      { nombre: "HTML", icono: "/assets/img/ayelen/imageSkills/html.svg", nivel: 85 },
      { nombre: "CSS", icono: "/assets/img/ayelen/imageSkills/css.svg", nivel: 80 }
    ],
    proyectos: [
      { titulo: "Swarm - Sistema de Riego IoT", descripcion: "Prototipo IoT desarrollado con Node-RED y MQTT para monitorear cultivos y automatizar el riego mediante sensores y actuadores.", imagen: "/assets/img/ayelen/proyectos/swarm.png" },
      { titulo: "Prototipo de app móvil", descripcion: "Diseñada en Android para gestionar un club deportivo.", imagen: "/assets/img/ayelen/proyectos/prototipo_app.png" },
      { titulo: "Sitio web", descripcion: "Desarrollado con HTML, CSS y JavaScript con consumo de una API REST de anime", imagen: "/assets/img/ayelen/proyectos/proyecto_anime.png" },
      { titulo: "Prototipo de página educativa", descripcion: "Desarrollada como recurso interactivo para explorar distintos géneros y instrumentos musicales", imagen: "/assets/img/ayelen/proyectos/proyecto_edu.png" }
    ],
    
    peliculasFavoritas: [
      { titulo: "Orgullo y Prejuicio", imagen: "/assets/img/ayelen/movies/orgullo.jpg" },
      { titulo: "El viaje de Chihiro", imagen: "/assets/img/ayelen/movies/chihiro.jpg" },
      { titulo: "Harry Potter", imagen: "/assets/img/ayelen/movies/harry_potter.jpg" },
      { titulo: "Aniquilación", imagen: "/assets/img/ayelen/movies/aniquilacion.jpg" }
    ],
    discosFavoritos: [
      { titulo: "Arirang", imagen: "/assets/img/ayelen/discos/arirang.png" },
      { titulo: "Rata Blanca", imagen: "/assets/img/ayelen/discos/rata-blanca.png" },
      { titulo: "The Most Beautiful Moment in Life: Young Forever", imagen: "/assets/img/ayelen/discos/young.png" },
      { titulo: "Safe and Sound", imagen: "/assets/img/maira/music/safesound.jpg" }

    ],
 
  },
  {
    id: 3,
    apodo: "Yahir",
    nombre: "Yahir Ivan Perez Tolchinsky",
    rol: "Developer",
    ubicacion: "Ciudad Autonoma de Buenos Aires, Argentina",
    edad: 27,
    avatar: "/assets/img/avatar_yahir.png",
    redes: {
      linkedin: null,
      github: "https://github.com/yahirperez2899-dotcom"
    },
    habilidades: [
      { nombre: "C#", icono: "/assets/img/yahir/imageskills/csharp.svg", nivel: 85 },
      { nombre: "C", icono: "/assets/img/yahir/imageskills/C_Logo.png", nivel: 80 },
      { nombre: "Kotlin", icono: "/assets/img/yahir/imageskills/kotlin.svg", nivel: 65 },
      { nombre: "Blender", icono: "/assets/img/yahir/imageskills/Blender.png", nivel: 70 },
      { nombre: "Adobe Photoshop", icono: "/assets/img/yahir/imageskills/photoshop.png", nivel: 85 },
    ],
    proyectos: [
      { titulo: "Videojuego (En proceso)", descripcion: "Videojuego de naves frenetico estilo retro (aun en proceso) utilizando C, GML y C# para algunas funciones", imagen: "/assets/img/yahir/proyectos/game.png" },
      { titulo: "Pagina de idiomas", descripcion: "Sitio web de aprendizaje de idiomas, desarrollado con HTML y JavaScript", imagen: "/assets/img/yahir/proyectos/idioma.PNG" },
      { titulo: "App de Entrenamiento", descripcion: "App para celular hecha con Kotlin para rutinas de gym", imagen: "/assets/img/yahir/proyectos/gym.png" }
    ],
    peliculasFavoritas: [
      { titulo: "La Lista de Schindler", imagen: "/assets/img/yahir/imgPeli/schindler.jpg" },
      { titulo: "Pulp Fiction", imagen: "/assets/img/yahir/imgPeli/pulpfiction.jpg" },
      { titulo: "Interstellar", imagen: "/assets/img/yahir/imgPeli/interstellar.jpg" }
    ],
    discosFavoritos: [
      { titulo: "Blood Sugar Sex Magik", imagen: "/assets/img/yahir/music/bssm.webp" },
      { titulo: "Van Halen I", imagen: "/assets/img/yahir/music/vanhalen.jpg" },
      { titulo: "Thriller", imagen: "/assets/img/yahir/music/thriller.jpg" },
      { titulo: "Parachutes", imagen: "/assets/img/yahir/music/parachutes.jpg" },
      { titulo: "The Marshall Mathers LP", imagen: "/assets/img/yahir/music/marshallmathers.png" },
      { titulo: "Operation: Doomsday", imagen: "/assets/img/yahir/music/doomsday.webp" },
    ],
  
  },
  {
    id: 4,
    apodo: "Mai",
    nombre: "Maira",
        rol: "Prof. de matemática | Estudiante Desarrollo de software",
    ubicacion: "Salta, Argentina",
    edad: 30,
    avatar: "/assets/img/avatar_maira.png",
    redes: {
      linkedin: "https://www.linkedin.com/in/maira-medina-4b289b3ba",
      github: "https://github.com/MaiiMd"
    },
    habilidades: [
      { nombre: "Kotlin", icono: "/assets/img/maira/imageskills/kotlin.svg", nivel: 80 },
      { nombre: "Python", icono: "/assets/img/maira/imageskills/python.svg", nivel: 75 },
      { nombre: "C#", icono: "/assets/img/maira/imageskills/csharp.svg", nivel: 70 },
      { nombre: "SQL", icono: "/assets/img/maira/imageskills/sqlite.svg", nivel: 85 }
    ],
    proyectos: [
      { titulo: "Calculadora Orbital", descripcion: "Herramienta de cálculo astronómico.", imagen: "/assets/img/astronauta2.webp" },
      { titulo: "Script de Datos", descripcion: "Análisis de telemetría de satélites.", imagen: "/assets/img/1.webp" },
      { titulo: "App Móvil Orion", descripcion: "Aplicación complementaria para la tripulación.", imagen: "/assets/img/astronauta2.webp" }
    ],
    peliculasFavoritas: [
      { titulo: "Harry Potter y el prisionero de Azkaban", imagen: "/assets/img/maira/imgPeli/harryPotter.jpg" },
      { titulo: "Guerra mundial z", imagen: "/assets/img/maira/imgPeli/guerraZ.jpg" },
      { titulo: "La razón de estar contigo", imagen: "/assets/img/maira/imgPeli/larazondeestar.jpg" }
    ],
    discosFavoritos: [
      { titulo: "Desire", imagen: "/assets/img/maira/music/desire.jpg" },
      { titulo: "Avanti Morocha", imagen: "/assets/img/maira/music/avantiMorocha.jpg" },
      { titulo: "Safe and Sound", imagen: "/assets/img/maira/music/safesound.jpg" }
    ],

  },
  {
    id: 5,
    apodo: "Ivana",
    nombre: "Ivana Maribel Zandoná",
  
    rol: "RPA and Full Stack Developer",
    ubicacion: "Rosario, Argentina",
    edad: 22,
      avatar: "/assets/img/avatar_ivana.png",
        redes: {
      linkedin: "https://www.linkedin.com/in/ivana-maribel-zandon%C3%A1",
      github: "https://github.com/IvanaZandona"
    },
    habilidades: [
      { nombre: "Automatización RPA", icono: "/assets/img/ivana/imageSkills/rpa.svg", nivel: 90 },
      { nombre: "Java", icono: "/assets/img/ivana/imageSkills/java.svg", nivel: 80 },
      { nombre: "MySQL", icono: "/assets/img/ivana/imageSkills/mysql.svg", nivel: 85 },
      { nombre: "C#", icono: "/assets/img/ivana/imageSkills/csharp.svg", nivel: 75 },
      { nombre: "HTML", icono: "/assets/img/ivana/imageSkills/html.svg", nivel: 95 },
      { nombre: "CSS", icono: "/assets/img/ivana/imageSkills/css.svg", nivel: 90 }
    ],
    proyectos: [
      {
        titulo: "Automatización RPA",
        descripcion: "Bots de automatización para procesamiento y validación de datos con BluePrism.",
        imagen: "/assets/img/ivana/proyectos/rpa.jpg"
      },
      { 
        titulo: "Sitio Web de E-commerce", 
        descripcion: "Diseño y desarrollo de sitio web estático E-commerce 'Roll Argent', utilizando HTML, CSS, Bootstrap 5 y JavaScript, con diseño responsive y foco en experiencia de usuario.", 
        imagen: "/assets/img/ivana/proyectos/tienda.png" 
      },
      {
        titulo: "Sistema de Gestión de Familias",
        descripcion: "Aplicación desarrollada con Java, Spring Boot y MySQL para administración de familias asistidas.",
        imagen: "/assets/img/ivana/proyectos/java-springboot.jpg"
      },
      { 
        titulo: "API REST dockerizada", 
        descripcion: "Transformación del 'Sistema de Gestión de Familias' en una API REST en Java con Spring Boot, con operaciones CRUD, persistencia en MySQL y despliegue mediante Docker.", 
        imagen: "/assets/img/ivana/proyectos/proyecto-api.jpg" 
      },
      
    ],
    peliculasFavoritas: [
      { titulo: "Coherence (2013)", imagen: "/assets/img/ivana/movies/coherence-poster.jpg" },
      { titulo: "Lazos de Vida (One Life, 2023)", imagen: "/assets/img/ivana/movies/lazos-de-vida.jpg" },
      { titulo: "La Isla Siniestra (Shutter Island, 2010)", imagen: "/assets/img/ivana/movies/isla-siniestra.jpg" }
    ],
    discosFavoritos: [
      { titulo: "TODOS LOS DÍAS TODO EL DÍA", imagen: "/assets/img/ivana/discos/disco-latin-mafia.jfif" },
      { titulo: "Esencia", imagen: "/assets/img/ivana/discos/disco-humbe.jpg" },
      { titulo: "111", imagen: "/assets/img/ivana/discos/disco-miloj.jfif" }
    ],
  
  }
];


export default teamData;
