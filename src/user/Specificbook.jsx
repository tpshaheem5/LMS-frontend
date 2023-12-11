import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userFetchspecificBooks } from '../redux/bookSlice';
import { useParams } from 'react-router-dom';

function Specificbook() {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books);
  const { id } = useParams();
  const bookId = id;

  useEffect(() => {
    dispatch(userFetchspecificBooks(bookId));
  }, [dispatch, bookId]);

  const handleReserveClick = () => {
    // Implement reserve book logic here
    console.log('Book Reserved');
  };

  const handleBorrowClick = () => {
    // Implement borrow book logic here
    console.log('Book Borrowed');
  };

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Specific Book Details</h2>
      {book ? (
        <div className="flex items-center justify-center">
          <div className="max-w-4xl w-full bg-white overflow-hidden rounded-lg shadow-md flex">
            <img
              src={book.image}
              alt={book.title}
              className="w-1/2 object-cover rounded-l-lg"
            />
            <div className="w-1/2 p-6">
              <h3 className="text-3xl font-semibold mb-3">{book.title}</h3>
              <p className="text-lg mb-3">Author: {book.author}</p>
              <p className="text-lg mb-3">ISBN: {book.isbn}</p>
              <p className="text-lg mb-3">Available Copies: {book.availableCopies}</p>
              <div className="flex space-x-4">
                <button onClick={handleReserveClick} className="bg-blue-500 text-white px-4 py-2 rounded">Reserve</button>
                <button onClick={handleBorrowClick} className="bg-green-500 text-white px-4 py-2 rounded">Borrow</button>
              </div>
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
