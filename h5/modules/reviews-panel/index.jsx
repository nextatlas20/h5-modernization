import React, { useMemo } from 'react';

export default function ReviewsPanel({ reviews, limit = 3 }) {
  const visible = useMemo(() => reviews.slice(0, limit), [reviews, limit]);

  return (
    <section className="reviews-panel" data-module="reviews-panel">
      <h2 className="reviews-panel__title">Reviews</h2>
      <ul className="reviews-panel__list">
        {visible.map((review) => (
          <li key={review.id} className="reviews-panel__item">
            <span className="reviews-panel__author">{review.author}</span>
            <p className="reviews-panel__body">{review.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
