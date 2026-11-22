import React from 'react';

export default function PromoBanner({ text, href }) {
  return (
    <a className="promo-banner" href={href} data-module="promo-banner">
      {text}
    </a>
  );
}
