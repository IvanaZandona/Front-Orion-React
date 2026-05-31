import { useEffect, useState } from "react";

import Lightbox from "yet-another-react-lightbox";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

import { fetchNasaImages } from "../../services/nasaApi";

import Loader from "../Loader/Loader";

import ScrollTopBtn from "../ScrollTopBtn/ScrollTopBtn";

import "./nasaGallery.css";

function NasaGallery() {

  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [page, setPage] = useState(1);

  const [open, setOpen] = useState(false);

  const [index, setIndex] = useState(0);

  useEffect(() => {

    async function loadImages() {

      try {

        setLoading(true);

        setError("");

        const data = await fetchNasaImages(page);

        // filtra imágenes válidas
        const validImages = data.filter(
          (item) => item.links?.[0]?.href
        );

        // limita a 12 imágenes
        setImages(validImages.slice(0, 12));

      } catch (err) {

        setError("No se pudieron cargar las imágenes");

      } finally {

        setLoading(false);
      }
    }

    loadImages();

  }, [page]);

  if (loading) {
    return <Loader  />;
  }

  if (error) {
    return (
      <p className="gallery-message">
        {error}
      </p>
    );
  }

  const slides = images.map((item) => ({
    src: item.links?.[0]?.href,
  }));

  return (
    <section className="nasa-gallery">

      <h2 className="gallery-title">
        Galería Espacial NASA
      </h2>

      <p className="gallery-subtitle">
        Explorá galaxias, nebulosas y rincones reales del universo capturados por la NASA.
      </p>

      <div className="gallery-grid">

        {images.map((item, i) => {

          const image = item.links?.[0]?.href;

          const title = item.data?.[0]?.title;

          return (
            <div
              key={i}
              className="gallery-card"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >

              <img
                src={image}
                alt={title}
                className="gallery-image"
              />

              <div className="gallery-overlay">
                <p>{title}</p>
              </div>

            </div>
          );
        })}

      </div>

      <div className="gallery-pagination">

        <button
          onClick={() =>
            setPage((prev) => Math.max(prev - 1, 1))
          }
          disabled={page === 1}
        >
          ←
        </button>

        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
          >
            {page - 1}
          </button>
        )}

        <div className="page-indicator">
          Página {page}
        </div>

        <button
          onClick={() => setPage(page + 1)}
        >
          {page + 1}
        </button>

        <button
          onClick={() => setPage(page + 2)}
        >
          {page + 2}
        </button>

        <button
          onClick={() =>
            setPage((prev) => prev + 1)
          }
        >
          →
        </button>

      </div>

     
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Zoom]}
      />

      <ScrollTopBtn />

    </section>
  );
}

export default NasaGallery;