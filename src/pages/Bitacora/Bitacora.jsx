import { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../../components/Particles/ParticlesBackground";
import './Bitacora.css';

function Bitacora() {
  const [rolesAbierto, setRolesAbierto] = useState(false);
  const [gitAbierto, setGitAbierto] = useState(false);
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  const manejarMovimientoMouse = (e) => {
    const tarjeta = e.currentTarget;
    const rect = tarjeta.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    tarjeta.style.setProperty("--mouse-x", `${x}px`);
    tarjeta.style.setProperty("--mouse-y", `${y}px`);
  };

  const animacionHito = {
    initial: { opacity: 0, y: 80, scale: 0.9 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.5, 0, 0, 1] }
  };

  return (
    <div className="body-bitacora">
      <ParticlesBackground />

      {/* LIGHTBOX */}
      {imagenAmpliada && (
        <div className="lightbox-overlay" onClick={() => setImagenAmpliada(null)}>
          <img src={imagenAmpliada} alt="Imagen ampliada" className="lightbox-imagen" />
          <button className="lightbox-cerrar" onClick={() => setImagenAmpliada(null)}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      )}

      <header className="hero-bitacora">
        <h1 className="titulo">NUESTRA BITÁCORA</h1>
        <p className="letra-pintada">El registro de nuestro viaje tecnológico</p>
      </header>

      <section className="seccion-bifurcacion">
        <div className="grid-circuitos">
          <div
            className={`tarjeta-circuito circuito-roles ${rolesAbierto ? 'tarjeta-abierta' : ''}`}
            onMouseMove={manejarMovimientoMouse}
            onClick={() => setRolesAbierto(!rolesAbierto)}
          >
            <div className="encabezado-circuito">
              <h4>TRIPULACIÓN & ROLES</h4>
              <p>Asignación de roles y administración de tareas del equipo.</p>
            </div>

            <div className="contenido-desplegable-circuito">
              <table className="tabla-tripulacion">
                <tbody>
                  <tr>
                    <td>Iván</td>
                    <td>Coordinador técnico y desarrollador de la sección de perfiles e integrantes.</td>
                  </tr>
                  <tr>
                    <td>Ivana</td>
                    <td>Estructuración inicial del Proyecto en React e implementación y conexión de la API de la NASA.</td>
                  </tr>
                  <tr>
                    <td>Maira</td>
                    <td>Diseño UI/UX, identidad visual general y estética del sitio.</td>
                  </tr>
                  <tr>
                    <td>Ayelén</td>
                    <td>Desarrollo de la Bitácora, animaciones especiales y maquetación Visual.</td>
                  </tr>
                  <tr>
                    <td>Yahir</td>
                    <td>Maquetación de contenido, carga de recursos gráficos y ajustes de Estilos CSS.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="contenedor-efecto-tiles">
              <div className="rejilla-tiles">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={`tile-roles-${i}`} className="bloque-tile" />
                ))}
              </div>
              <div className="linea-circuito" />
            </div>
          </div>

          <div
            className={`tarjeta-circuito circuito-git ${gitAbierto ? 'tarjeta-abierta' : ''}`}
            onMouseMove={manejarMovimientoMouse}
            onClick={() => setGitAbierto(!gitAbierto)}
          >
            <div className="encabezado-circuito">
              <h4>FLUJO DE TRABAJO</h4>
              <p>Definiendo el flujo de desarrollo, control de versiones y políticas de ramas.</p>
            </div>
            <div className="contenido-desplegable-circuito">
              <div className="info-gitflow">
                <p style={{ textAlign: 'justify' }}>
                  Para esta entrega organizamos todo el flujo de trabajo dividiendo las tareas a través de nuestro tablero de <a href="https://trello.com/invite/b/6a1c3da8f342690482758727/ATTIc06ef33f7d6e05b3ebd48e487b744140488035A8/front-orion" target="_blank" rel="noopener noreferrer" style={{ color: '#00f0ff', textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }}>Trello</a>, lo que nos permitió coordinar el armado de los componentes y el diseño visual en tiempo real.
                </p>
                <p style={{ marginTop: '12px', textAlign: 'justify' }}>
                  Si bien en esta etapa integramos el código directo para acelerar la mi­gra­ción a React, el uso de una arquitectura con ramas independientes (<strong>GitFlow</strong>) ya lo tenemos planificado y lo vamos a tener en cuenta como el próximo paso obligatorio para escalar el repositorio de forma más ordenada.
                </p>
              </div>
            </div>

            <div className="contenedor-efecto-tiles">
              <div className="rejilla-tiles">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={`tile-git-${i}`} className="bloque-tile" />
                ))}
              </div>
              <div className="linea-circuito" />
            </div>
          </div>
        </div>
        <div className="nodo-central" />
      </section>

      <main className="contenedor-bitacora">
        <motion.article className="hito hito-izq" {...animacionHito}>
          <div className="hito-numero">1</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Primera parada — El inicio del viaje</h3>
              <p>Nos reunimos como equipo para comenzar esta nueva aventura, intercambiando ideas y explorando posibles direcciones para el proyecto.</p>
              <div className="bitacora-detalle">
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Planeamiento de contenido</li>
                    <li>Reuniones de equipo</li>
                    <li>UX inicial</li>
                    <li>Documentación de ideas</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="hito hito-der" {...animacionHito}>
          <div className="hito-numero">2</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Definiendo nuestra constelación</h3>
              <p>Con el rumbo ya definido comenzamos a darle forma a la identidad del equipo.</p>
              <div className="bitacora-detalle">
                <div className="hito-imagen">
                  <img
                    src="/assets/img/logo.png"
                    alt="Logo Orión"
                    className="imagen-zoomable"
                    onClick={() => setImagenAmpliada("/assets/img/logo.png")}
                  />
                </div>
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Branding visual</li>
                    <li>Tipografía</li>
                    <li>Paleta de colores</li>
                    <li>Prototipo UI</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="hito hito-izq" {...animacionHito}>
          <div className="hito-numero">3</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Primeros trazos del diseño</h3>
              <p>Con la identidad definida, realizamos un primer maquetado para organizar las ideas.</p>
              <div className="bitacora-detalle">
                <div className="hito-imagen">
                  <img
                    src="/assets/img/codigo.png"
                    alt="Maquetado inicial"
                    className="imagen-zoomable"
                    onClick={() => setImagenAmpliada("/assets/img/codigo.png")}
                  />
                </div>
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Diseño preliminar en Canva</li>
                    <li>Definición de estructura de navegación</li>
                    <li>Organización inicial de secciones</li>
                    <li>Selección de paleta de colores</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="hito hito-der" {...animacionHito}>
          <div className="hito-numero">4</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Construcción compartida</h3>
              <p>Con la base visual ya definida, el proyecto comenzó a construirse de manera colaborativa.</p>
              <div className="bitacora-detalle">
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Unificación de criterios visuales</li>
                    <li>Definición de componentes y secciones</li>
                    <li>Maquetación inicial utilizando HTML y CSS</li>
                    <li>Organización de recursos gráficos e imágenes</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="hito hito-izq" {...animacionHito}>
          <div className="hito-numero">5</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Desarrollo del proyecto</h3>
              <p>Comenzamos a desarrollar la página utilizando HTML, CSS y JavaScript, incorporando efectos visuales como animaciones y estilos interactivos.</p>
              <div className="bitacora-detalle">
                <div className="hito-imagen">
                  <img
                    src="/assets/img/borrador.png"
                    alt="Desarrollo de código"
                    className="imagen-zoomable"
                    onClick={() => setImagenAmpliada("/assets/img/borrador.png")}
                  />
                </div>
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Implementación de layouts con Flexbox</li>
                    <li>Implementación de animaciones y transiciones visuales</li>
                    <li>Cursor personalizado con forma de cohete utilizando JavaScript</li>
                    <li>Animaciones de aparición al hacer scroll mediante ScrollReveal</li>
                    <li>Aplicación de efectos visuales mediante transformaciones CSS</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="hito hito-der" {...animacionHito}>
          <div className="hito-numero">6</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Refinamiento y ajustes</h3>
              <p>A medida que el proyecto fue creciendo, comenzamos a detectar diferencias en la visualización entre distintos dispositivos y resoluciones.</p>
              <div className="bitacora-detalle">
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Implementación de diseño responsive mediante Media Queries</li>
                    <li>Corrección de problemas de overflow y desbordamiento visual</li>
                    <li>Ajuste de márgenes, paddings y tamaños relativos</li>
                    <li>Revisión de jerarquías de capas mediante z-index</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="hito hito-izq" {...animacionHito}>
          <div className="hito-numero">7</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Ajustes, decisiones y desafíos</h3>
              <p>Trabajar con imágenes de fondo y lograr la estética deseada nos llevó tiempo y pruebas.</p>
              <div className="bitacora-detalle">
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Optimización de animaciones CSS y JavaScript</li>
                    <li>Resolución de problemas generales</li>
                    <li>Corrección de eventos interactivos asociados a botones</li>
                    <li>Organización y limpieza del código</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="hito hito-der" {...animacionHito}>
          <div className="hito-numero">8</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Inicio de la migración a React</h3>
              <p>Con el proyecto funcional en HTML, CSS y JavaScript, comenzamos el proceso de migración hacia React.</p>
              <div className="bitacora-detalle">
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Creación de un nuevo repositorio Git para la versión React</li>
                    <li>Instalación de dependencias mediante PNPM</li>
                    <li>Definición de la estructura de carpetas del proyecto</li>
                    <li>Separación de páginas, componentes y recursos</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="hito hito-izq" {...animacionHito}>
          <div className="hito-numero">9</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Migración de la página principal</h3>
              <p>Una vez configurado el entorno, comenzamos migrando la página principal.</p>
              <div className="bitacora-detalle">
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Conversión de HTML tradicional a JSX</li>
                    <li>Adaptación de atributos HTML a sintaxis React</li>
                    <li>Creación de componentes reutilizables</li>
                    <li>Corrección de rutas y estructura del proyecto</li>
                    <li>Integración de la API de la NASA</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="hito hito-der" {...animacionHito}>
          <div className="hito-numero">10</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Migración de perfiles y componentes</h3>
              <p>Con la página principal funcionando correctamente, continuamos trasladando las demás secciones al nuevo entorno React. Durante esta etapa, logramos consolidar la estructura del sitio y potenciar su interactividad mediante la incorporación de un módulo de búsqueda dinámica.</p>
              <div className="bitacora-detalle">
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Creación de componentes independientes</li>
                    <li>Migración de tarjetas y secciones informativas</li>
                    <li>Integración de un buscador de planetas integrado a la API espacial.</li>
                    <li>Organización modular del código</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="hito hito-izq" {...animacionHito}>
          <div className="hito-numero">11</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Recuperación y adaptación de funcionalidades</h3>
              <p>Durante la migración descubrimos que algunas funcionalidades implementadas en JavaScript no funcionaban igual en React.</p>
              <div className="bitacora-detalle">
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Adaptación de eventos JavaScript a React</li>
                    <li>Reemplazo de ScrollReveal por Framer Motion</li>
                    <li>Uso de useCallback() para optimización</li>
                    <li>Migración de efectos DOM a React</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="hito hito-der" {...animacionHito}>
          <div className="hito-numero">12</div>
          <div className="hito-contenido">
            <div className="hito-texto">
              <h3>Ajustes finales y optimización</h3>
              <p>En la etapa final realizamos pruebas generales, corregimos errores detectados durante la migración y optimizamos la estructura definitiva del proyecto.</p>
              <div className="bitacora-detalle">
                <aside className="aspectos-tecnicos">
                  <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                  <ul className="aspectos-tecnicos-lista">
                    <li>Revisión de rendimiento general</li>
                    <li>Corrección de errores de navegación y renderizado</li>
                    <li>Corrección de la compatibilidad responsive</li>
                    <li>Limpieza y organización del código</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div {...animacionHito}>
          <div className="card-bitacora">
            <div className="card-bitacora-header">Próximamente</div>
            <div className="card-bitacora-content">
              <p className="card-bitacora-subtitle">Nuestro viaje continúa...</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Bitacora;