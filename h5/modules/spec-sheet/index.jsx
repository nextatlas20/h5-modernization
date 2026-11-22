import React from 'react';

const ROWS = ['origin', 'material', 'weight', 'warranty'];

export default function SpecSheet({ spec }) {
  return (
    <table className="spec-sheet" data-module="spec-sheet">
      <tbody>
        {ROWS.filter((row) => spec[row]).map((row) => (
          <tr key={row} className="spec-sheet__row">
            <th scope="row">{row}</th>
            <td>{spec[row]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
