# Equipo Orión - Proyecto Web

## Descripción

Aplicación web de presentación y bitácora del Equipo Orión, desarrollada en React con Vite como trabajo práctico para la Tecnicatura en Desarrollo de Software.

El sitio combina una estética espacial con colores oscuros, tipografías modernas, animaciones suaves y secciones interactivas para mostrar la identidad del equipo, su bitácora de desarrollo, una galería NASA y perfiles de integrantes.


## Objetivos del proyecto

- Mostrar la identidad del equipo en una experiencia visual moderna.
- Documentar el proceso del desarrollo con una bitácora cronológica.
- Incluir animaciones e interactividad manteniendo diseño responsive.
- Aprovechar tecnologías web modernas para una aplicación SPA.

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
│   └── teamData.js
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
- **Lightbox animado**: `Yet Another React Lightbox` para el visor de imágenes NASA.
- **Movimiento de carrusel**: animación fluida en la sección de integrantes.

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

## Documentación visual

<div style="overflow:auto;">
  <img src="public/assets/img/readme/readme_inicio.png" alt="Página de inicio" width="400" style="float:left; margin-right:24px; margin-bottom:16px;" />
  <p><strong>Página de inicio:</strong> es la sección principal del proyecto, con menú lateral, hero del espacio y carrusel de integrantes. Ahí armamos la navegación inicial y algunos efectos para dar la primera impresión del sitio.</p>
</div>

<div style="overflow:auto;">
  <img src="public/assets/img/readme/readme_bit1.png" alt="Página bitácora - parte 1" width="400" style="float:left; margin-right:24px; margin-bottom:16px;" />
  <img src="public/assets/img/readme/readme_bit2.png" alt="Página bitácora - parte 2" width="400" style="float:left; margin-right:24px; margin-bottom:16px;" />
  <p><strong>Página bitácora:</strong> es una línea de tiempo con todo el desarrollo del proyecto. Se hicieron animaciones, render dinámico con datos y un zoom para ver mejor las imágenes.</p>
</div>

<div style="overflow:auto;">
  <img src="public/assets/img/readme/readme_perfil.png" alt="Página de perfiles" width="400" style="float:left; margin-right:24px; margin-bottom:16px;" />
  <p><strong>Página de perfiles:</strong> muestra los integrantes en tarjetas con efectos al pasar el mouse. Los datos vienen de `teamData.js` e incluyen habilidades y navegación.</p>
</div>

<div style="overflow:auto;">
  <img src="public/assets/img/readme/readme_exp.png" alt="Página explorador" width="400" style="float:left; margin-right:24px; margin-bottom:16px;" />
  <p><strong>Página explorador:</strong> buscador de objetos espaciales en tiempo real. Tiene filtros, resultados dinámicos y muestra datos de la NASA.</p>
</div>

<div style="overflow:auto;">
  <img src="public/assets/img/readme/readme_galeria.png" alt="Página galería" width="400" style="float:left; margin-right:24px; margin-bottom:16px;" />
  <p><strong>Página galería:</strong> muestra imágenes del espacio de la NASA. Tiene paginación, consumo de API y opción de ver las imágenes en grande.</p>
</div>

## Notas adicionales

- El proyecto está diseñado como SPA con React Router.
- La galería espacial depende de `fetchNasaImages` en `src/services/nasaApi.js`.
- Las tarjetas de perfil se construyen con datos de `src/data/teamData.js`.
- El diseño se basa en una estética espacial, con tonos oscuros y neón.

---

> Proyecto académico del Equipo Orión para la Tecnicatura en Desarrollo de Software.




