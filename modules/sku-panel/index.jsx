import React from 'react';
import { formatPrice } from 'legacy/price-bridge';

export default function SkuPanel({ sku, selectedSpecs, onSelectSpec }) {
  return (
    <section className="sku-panel" data-module="sku-panel">
      <p className="sku-panel__price">{formatPrice(sku.priceCents)}</p>
      <dl className="sku-panel__specs">
        {sku.specs.map((spec) => (
          <dt
            key={spec.code}
            aria-selected={selectedSpecs.includes(spec.code)}
            onClick={() => onSelectSpec(spec.code)}
          >
            {spec.label}
          </dt>
        ))}
      </dl>
    </section>
  );
}
