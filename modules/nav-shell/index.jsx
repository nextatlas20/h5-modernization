import React from 'react';

export default function NavShell({ title, onBack, onShare }) {
  return (
    <nav className="nav-shell" data-module="nav-shell">
      <button type="button" className="nav-shell__back" onClick={onBack}>
        back
      </button>
      <h1 className="nav-shell__title">{title}</h1>
      <button type="button" className="nav-shell__share" onClick={onShare}>
        share
      </button>
    </nav>
  );
}
