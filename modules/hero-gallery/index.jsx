import React, { useState } from 'react';

export default function HeroGallery({ images, initialIndex = 0 }) {
  const [index, setIndex] = useState(initialIndex);
  const current = images[index] || images[0];

  return (
    <section className="hero-gallery" data-module="hero-gallery">
      <img className="hero-gallery__image" src={current.url} alt={current.alt} />
      <ol className="hero-gallery__dots">
        {images.map((image, i) => (
          <li key={image.url} aria-current={i === index} onClick={() => setIndex(i)} />
        ))}
      </ol>
    </section>
  );
}
