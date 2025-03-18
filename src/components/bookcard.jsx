
// write the book component code here
import React from 'react';
import './bookcard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <h2 className="book-title">{book.name}</h2>
      <p className="book-author">Author: {book.author}</p>
      <p className="book-genre">Genre: {book.genre}</p>
    </div>
  );
};

export default BookCard;