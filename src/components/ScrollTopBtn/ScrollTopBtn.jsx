import React from 'react';
import './scrollTopBtn.css';

function ScrollTopBtn() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="scroll-top-btn"
      onClick={handleScrollTop}
      aria-label="Volver arriba"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}

export default ScrollTopBtn;