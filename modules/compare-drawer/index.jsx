import React from 'react';

export const CompareDrawer = ({ items, onRemove }) => (
  <aside className="compare-drawer" data-module="compare-drawer">
    <ul>
      {items.map((item) => (
        <li key={item.skuId} onClick={() => onRemove(item.skuId)}>
          {item.title}
        </li>
      ))}
    </ul>
  </aside>
);
