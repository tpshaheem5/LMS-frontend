import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userFetchspecificBooks } from '../redux/bookSlice';
import { useParams } from 'react-router-dom';

function Specificbook() {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books);
  const { id } = useParams();
  const bookId = id;
  // const reservedBook = useSelector((state) => state.books.reservedBook);
  
  useEffect(() => {
    dispatch(userFetchspecificBooks(bookId));
  }, [dispatch, bookId]);
  
  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Specific Book Details</h2>
      {book ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
            <img
              src={book.image}
              alt={book.title}
              style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{book.title}</h3>
              <p style={{ fontSize: '1rem', marginBottom: '10px' }}>Author: {book.author}</p>
              <p style={{ fontSize: '1rem', marginBottom: '10px' }}>ISBN: {book.isbn}</p>
              <p style={{ fontSize: '1rem', marginBottom: '10px' }}>Total Copies: {book.totalCopies}</p>
              <p style={{ fontSize: '1rem', marginBottom: '10px' }}>Available Copies: {book.availableCopies}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Specificbook;
