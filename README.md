# Equipo Orión - Proyecto Web

## Descripción

Aplicación web de presentación y bitácora del Equipo Orión, desarrollada en React con Vite como trabajo práctico para la Tecnicatura en Desarrollo de Software.

El sitio combina una estética espacial con colores oscuros, tipografías modernas, animaciones suaves y secciones interactivas para mostrar la identidad del equipo, su bitácora de desarrollo, una galería NASA y perfiles de integrantes.

## Objetivos del proyecto

- Mostrar la identidad del equipo en una experiencia visual moderna.
- Documentar el proceso del desarrollo con una bitácora cronológica.
- Incluir animaciones e interactividad manteniendo diseño responsive.
- Aprovechar tecnologías web modernas para una aplicación SPA.

## Cambios recientes

- Se creó `src/data/bitacoraData.js` — los 12 hitos de la bitácora están ahora en un archivo de datos y se renderizan dinámicamente desde `src/pages/Bitacora/Bitacora.jsx`.
- La bitácora fue refactorizada para mapear los hitos con `.map()` y alternar la posición (`hito-izq` / `hito-der`) según el índice.
- Se reemplazó el lightbox personalizado por `yet-another-react-lightbox` con el plugin `Zoom` para una experiencia de visualización mejorada.
- Se mantienen las animaciones con `Framer Motion`, el fondo de partículas (tsParticles) y los estados interactivos de las tarjetas.

## Integrantes del equipo

- **Iván** — [GitHub](https://github.com/Ivanveliz)
- **Maira** — [GitHub](https://github.com/MaiiMd)
- **Ivana** — [GitHub](https://github.com/IvanaZandona)
- **Ayelén** — [GitHub](https://github.com/mariaayelen)
- **Yahir** — [GitHub](https://github.com/yahirperez2899-dotcom)

## Tecnologías utilizadas

- **React**: Biblioteca principal para construir la UI.
- **Vite**: Herramienta de build y desarrollo rápido.
- **React Router DOM**: Enrutamiento interno de la app.
- **Framer Motion**: Animaciones de aparición y transiciones.
- **tsParticles**: Fondo de partículas animadas.
- **Font Awesome**: Íconos de navegación y UI.
- **Yet Another React Lightbox**: Lightbox para la galería de imágenes.
- **React Icons**: Iconos de interfaz.

## Estructura principal del proyecto

```bash
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── Footer/
│   ├── HeroSection/
│   ├── Loader/
│   ├── NasaGallery/
│   ├── Particles/
│   ├── Perfiles/
│   ├── ProfileCard/
│   ├── ProjectCarousel/
│   ├── ScrollTopBtn/
 │   ├── Sidebar/
 │   └── TeamCard/
├── data/
│   ├── dataPlanet.json
│   ├── teamData.js
│   └── bitacoraData.js
├── hooks/
│   └── useRocketCursor.js
├── layouts/
│   └── DashboardLayout.jsx
├── pages/
│   ├── Bitacora/
│   │   └── Bitacora.jsx
│   ├── DataExplorer.jsx
│   ├── Galeria.jsx
│   └── Home.jsx
├── services/
│   └── nasaApi.js
└── styles/
    └── global.css
```

## Rutas principales

- `/` — Página de inicio con hero y carrusel de integrantes.
- `/bitacora` — Bitácora de desarrollo con timeline y hitos.
- `/galeria` — Galería espacial que consume imágenes de la NASA.
- `/explorador` — Explorador de cuerpos celestes con búsqueda y filtros.
- `/perfiles/:id` — Perfil individual de cada integrante.

## Contenido clave

### `src/pages/Home.jsx`
- Página de inicio con la sección principal y el carrusel del equipo.
- Incluye el efecto de cursor cohete con `useRocketCursor`.

### `src/pages/Bitacora/Bitacora.jsx`
- Bitácora visual con hitos del proyecto.
- Tarjetas expansibles, animaciones `Framer Motion`.

### `src/components/NasaGallery/NasaGallery.jsx`
- Carga imágenes de la NASA mediante API.
- Incluye paginación y lightbox para visualización.

### `src/pages/DataExplorer.jsx`
- Explorador de planetas con búsqueda en tiempo real.
- Muestra datos astronómicos y manejo de imágenes faltantes.

### `src/components/Perfiles/Perfiles.jsx`
- Página dinámica de perfiles según `teamData.js`.
- Renderiza un perfil completo con habilidades, favoritos y datos del integrante.

## Efectos y animaciones utilizadas

- **Framer Motion**: animaciones de aparición y transición para los hitos de la bitácora y otros elementos visuales.
- **tsParticles**: fondo de partículas animado en la sección de inicio y bitácora.
- **useRocketCursor**: cursor personalizado con efecto de cohete que sigue el movimiento del mouse.
- **Animaciones CSS**: hover suave en tarjetas, transiciones de color y efectos de glow/neón.
- **Lightbox animado**: `Yet Another React Lightbox` para el visor de imágenes NASA y la bitácora.
- **Movimiento de carrusel**: animación fluida en la sección de integrantes.

### Paleta de Colores

- `#000000` — Fondo principal oscuro.
- `#ffffff` — Texto principal.
- `#10092b` — Fondo de tarjetas y secciones profundas.
- `#1a0f3a` — Paneles secundarios y áreas de contenido.
- `#c77dff` — Neón primario para acentos y títulos.
- `#00f0ff` — Neón secundario para efectos de interacción.
- `#e4e4e7` — Texto claro y estados activos.
- `#52525b` — Texto secundario suave.

## Tipografías

- **Michroma** — utilizada en títulos, encabezados y botones clave para una estética futurista.
- **Montserrat** — utilizada en texto general, párrafos y botones secundarios para legibilidad.

### Funcionalidades implementadas en js o animaciones

- Cursor personalizado con efecto de cohete y seguimiento del mouse en la página principal. También se agregó una sección principal con carrusel de equipo y botón de inicio del recorrido que activa el cohete.
<p align="left">
  <img src="https://github.com/user-attachments/assets/14bbe5b8-6743-4fe7-9514-a176093415eb" width="400" />
</p> 

- Transiciones de scroll y aparición de componentes con `Framer Motion` en la bitácora y la tarjeta "Próximamente".
 <p align="left">
  <img src="https://github.com/user-attachments/assets/ccdb43a1-ef8b-4b3b-93db-9f9878c596d1" width="400" />
</p> 

- Fondo animado de partículas en el inicio y la bitácora con `tsParticles`.
- Galería NASA con lightbox interactivo y paginación.
<p align="left">
  <img src="https://github.com/user-attachments/assets/0058fb78-4bc1-44df-a8ee-599f952ca29e" width="400" />
</p> 
- Buscador en tiempo real en el explorador de cuerpos celestes.
<p align="left">
  <img src="image" src="https://github.com/user-attachments/assets/414f0a8e-2af2-45d0-92bc-c224b4631dd5" width="400"  />
</p> 

- Menú lateral responsive con submenú desplegable de perfiles.
<p align="left">
  <img src="image" src="src=https://github.com/user-attachments/assets/779095d7-f7a4-4339-8411-3676485236b8" width="400"  />
</p> 

- Animaciones de hover y glow en tarjetas, botones e íconos.
<p align="left">
  <img src="image" src="https://github.com/user-attachments/assets/2bbf6c6b-b2c4-48f7-be8c-23dafed8ecf5" width="400"  />
</p> 

- Navegación de perfiles dinámica basada en `teamData.js`. En la sección de perfiles también se agregó el apartado de habilidades con barras de progreso. Se mantuvieron los efectos de fondo en las tarjetas de perfil y el efecto de iluminación en los botones e íconos al pasar el mouse.
<p align="left">
  <img src="image" src="https://github.com/user-attachments/assets/21ac0852-69da-4d0d-8b7b-51132bdffb5a" width="400"  />
</p>

## Cómo ejecutar el proyecto

1. Instalar dependencias:
   ```bash
   pnpm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   pnpm dev
   ```
3. Abrir la URL que muestra Vite en el navegador.

## Comandos útiles

- `pnpm dev` — Inicia el servidor de desarrollo.
- `pnpm build` — Genera la versión de producción.
- `pnpm preview` — Sirve la build de producción localmente.
- `pnpm lint` — Ejecuta ESLint.

## Buenas prácticas del proyecto

- Mantener la estructura de archivos clara: páginas en `src/pages`, componentes en `src/components`.
- Usar rutas relativas correctas para CSS e imágenes.
- No modificar la lógica de rutas de React Router sin validar la app.

## Notas adicionales

- El proyecto está diseñado como SPA con React Router.
- La galería espacial depende de `fetchNasaImages` en `src/services/nasaApi.js`.
- Las tarjetas de perfil se construyen con datos de `src/data/teamData.js`.
- El diseño se basa en una estética espacial, con tonos oscuros y neón.

---

> Proyecto académico del Equipo Orión para la Tecnicatura en Desarrollo de Software.




