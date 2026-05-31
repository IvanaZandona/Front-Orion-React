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
      { nombre: "React.js", icono: "/assets/img/ivan/imageSkills/react.svg" },
      { nombre: "JavaScript", icono: "/assets/img/ivan/imageSkills/js.svg" },
      { nombre: "HTML5", icono: "/assets/img/ivan/imageSkills/html.svg" },
      { nombre: "CSS3", icono: "/assets/img/ivan/imageSkills/css.svg" }
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
      { nombre: "Figma", icono: "/assets/img/ayelen/imageSkills/figma.svg" },
      { nombre: "SQL", icono: "/assets/img/ayelen/imageSkills/sql.svg" },
      { nombre: "HTML", icono: "/assets/img/ayelen/imageSkills/html.svg" },
      { nombre: "CSS", icono: "/assets/img/ayelen/imageSkills/css.svg" }
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
      { titulo: "The Most Beautiful Moment in Life: Young Forever", imagen: "/assets/img/ayelen/discos/young.png" }
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
      { nombre: "C#", icono: "/assets/img/yahir/imageskills/csharp.svg" },
      { nombre: "C", icono: "/assets/img/yahir/imageskills/C_Logo.png" },
      { nombre: "Kotlin", icono: "/assets/img/yahir/imageskills/kotlin.svg" },
      { nombre: "Blender", icono: "/assets/img/yahir/imageskills/Blender.png" },
      { nombre: "Adobe Photoshop", icono: "/assets/img/yahir/imageskills/photoshop.png" },
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
      { nombre: "Kotlin", icono: "/assets/img/maira/imageskills/kotlin.svg" },
      { nombre: "Python", icono: "/assets/img/maira/imageskills/python.svg" },
      { nombre: "C#", icono: "/assets/img/maira/imageskills/csharp.svg" },
      { nombre: "SQL", icono: "/assets/img/maira/imageskills/sqlite.svg" }
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
    nombre: "Ivana",
  
rol: "RPA and Full Stack Developer",
    ubicacion: "Rosario, Argentina",
    edad: 22,
      avatar: "/assets/img/avatar_ivana.png",
        redes: {
      linkedin: "https://www.linkedin.com/in/ivana-maribel-zandon%C3%A1",
      github: "https://github.com/IvanaZandona"
    },
    habilidades: [
      { nombre: "Automatización RPA", icono: "/assets/img/ivana/imageSkills/rpa.svg" },
      { nombre: "Java", icono: "/assets/img/ivana/imageSkills/java.svg" },
      { nombre: "MySQL", icono: "/assets/img/ivana/imageSkills/mysql.svg" },
      { nombre: "C#", icono: "/assets/img/ivana/imageSkills/csharp.svg" },
      { nombre: "HTML", icono: "/assets/img/ivana/imageSkills/html.svg" },
      { nombre: "CSS", icono: "/assets/img/ivana/imageSkills/css.svg" }
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
