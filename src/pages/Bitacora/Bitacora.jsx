import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import ParticlesBackground from "../../components/Particles/ParticlesBackground";
import './Bitacora.css';
import bitacoraData from "../../data/bitacoraData";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";

function Bitacora() {
  const [rolesAbierto, setRolesAbierto] = useState(false);
  const [gitAbierto, setGitAbierto] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = bitacoraData.filter(h => h.imagen).map(h => ({ src: h.imagen }));

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

      {/* LIGHTBOX CON ZOOM */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        plugins={[Zoom]}
      />

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
                  Si bien en esta etapa integramos el código directo para acelerar la migración a React, el uso de una arquitectura con ramas independientes (<strong>GitFlow</strong>) ya lo tenemos planificado y lo vamos a tener en cuenta como el próximo paso obligatorio para escalar el repositorio de forma más ordenada.
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
        {bitacoraData.map((hito, idx) => {
          const posClass = idx % 2 === 0 ? 'hito-izq' : 'hito-der';
          return (
            <motion.article key={hito.id} className={`hito ${posClass}`} {...animacionHito}>
              <div className="hito-numero">{hito.numeroHito}</div>
              <div className="hito-contenido">
                <div className="hito-texto">
                  <h3>{hito.titulo}</h3>
                  {Array.isArray(hito.descripcion) ? hito.descripcion.map((p, i) => <p key={i}>{p}</p>) : <p>{hito.descripcion}</p>}
                  <div className="bitacora-detalle">
                    {hito.imagen && (
                      <div className="hito-imagen">
                        <img
                          src={hito.imagen}
                          alt={hito.titulo}
                          className="imagen-zoomable"
                          onClick={() => {
                            const slideIndex = slides.findIndex(s => s.src === hito.imagen);
                            setLightboxIndex(slideIndex >= 0 ? slideIndex : 0);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    )}
                    <aside className="aspectos-tecnicos">
                      <div className="aspectos-tecnicos-titulo"><i className="fa-solid fa-gear" /> Aspectos técnicos</div>
                      <ul className="aspectos-tecnicos-lista">
                        {hito.aspectosTecnicos.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    </aside>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}

        <motion.div {...animacionHito}>
          <div className="card-bitacora">
            <div className="card-bitacora-header">Próximamente</div>
            <div className="card-bitacora-content">
              <p className="card-bitacora-subtitle">Nuestro viaje continúa...</p>
            </div>
          </div>
        </motion.div>
      </main>
      <ScrollTopBtn />
    </div>
  );
}

export default Bitacora;