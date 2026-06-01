import React from 'react';
import './renderTree.css';

function RenderTree() {
  return (
    <section className="render-tree-section">
      <div className="render-tree-header">
        <h1 className="titulo">Árbol de <span className="letra-pintada">Renderizado</span></h1>
        <p>Estructura jerárquica de componentes de la aplicación Orión.</p>
      </div>

      <div className="tree-container">
        <ul className="tree">
          <li>
            <div className="tree-node root-node">
              <i className="fa-brands fa-react"></i> App <span>(Componente Raíz)</span>
            </div>
            <ul>
              <li>
                <div className="tree-node context-node">
                  <i className="fa-solid fa-route"></i> BrowserRouter <span>(Contexto)</span>
                </div>
                <ul>
                  <li>
                    <div className="tree-node router-node">
                      <i className="fa-solid fa-code-branch"></i> Routes
                    </div>
                    <ul>
                      <li>
                        <div className="tree-node layout-node">
                          <i className="fa-solid fa-layer-group"></i> Route <span>(DashboardLayout)</span>
                        </div>
                        <ul>
                          <li>
                            <div className="tree-node component-node">
                              <i className="fa-solid fa-bars"></i> Sidebar <span>(Navegación)</span>
                            </div>
                          </li>
                          <li>
                            <div className="tree-node outlet-node">
                              <i className="fa-solid fa-box-open"></i> Outlet <span>(Contenedor Dinámico)</span>
                            </div>
                            <ul>
                              <li>
                                <div className="tree-node page-node">
                                  <i className="fa-solid fa-house"></i> Home <span>(/)</span>
                                </div>
                                <ul>
                                  <li><div className="tree-node child-node">useRocketCursor <span>(Hook Custom)</span></div></li>
                                  <li><div className="tree-node child-node">HeroSection <span>(Cabecera)</span></div></li>
                                  <li>
                                    <div className="tree-node child-node">TeamCarousel</div>
                                    <ul>
                                      <li><div className="tree-node leaf-node">TeamCard <span>(Interactiva)</span></div></li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="tree-node page-node">
                                  <i className="fa-solid fa-book"></i> Bitacora <span>(/bitacora)</span>
                                </div>
                                <ul>
                                  <li><div className="tree-node child-node">Tarjetas de Hitos <span>(Framer Motion)</span></div></li>
                                </ul>
                              </li>
                              <li>
                                <div className="tree-node page-node">
                                  <i className="fa-solid fa-images"></i> Galeria <span>(/galeria)</span>
                                </div>
                                <ul>
                                  <li>
                                    <div className="tree-node child-node">NasaGallery</div>
                                    <ul>
                                      <li><div className="tree-node leaf-node">Loader <span>(Spinner)</span></div></li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="tree-node page-node">
                                  <i className="fa-solid fa-user-astronaut"></i> Perfiles <span>(/perfiles/:id)</span>
                                </div>
                                <ul>
                                  <li>
                                    <div className="tree-node child-node">ProfileCard</div>
                                    <ul>
                                      <li><div className="tree-node leaf-node">SkillProgressBar</div></li>
                                      <li><div className="tree-node leaf-node">ProjectCarousel</div></li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="tree-node page-node">
                                  <i className="fa-solid fa-globe"></i> DataExplorer <span>(/explorador)</span>
                                </div>
                                <ul>
                                  <li><div className="tree-node child-node">Buscador y Filtros</div></li>
                                  <li><div className="tree-node leaf-node">Tarjetas Planetas <span>(Hover Cinemático)</span></div></li>
                                </ul>
                              </li>
                              <li>
                              
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RenderTree;