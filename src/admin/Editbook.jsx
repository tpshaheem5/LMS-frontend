import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEditBooks } from '../redux/bookSlice';
import upload from '../components/Cloud';
import { useParams } from 'react-router-dom';

function Editbook() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const bookId = id;
  console.log("book id",bookId);

  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    isbn: '',
    totalCopies: '',
    availableCopies: '',
    image: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const book = await dispatch(fetchEditBooks(bookId));
        setBookDetails({
          title: book.title,
          author: book.author,
          isbn: book.isbn,
          totalCopies: book.totalCopies,
          availableCopies: book.availableCopies,
          image: book.image,
        });
      } catch (error) {
        console.error('Error fetching book details:', error.message);
      }
    };
    fetchData();
  }, [dispatch, bookId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageUpload = async (file) => {
    try {
      const imageUrl = await upload(file.target.files[0]);
      setBookDetails((prevDetails) => ({
        ...prevDetails,
        image: imageUrl,
      }));
    } catch (error) {
      console.log('Error uploading image:', error);
    }
  };

  const handleEditBook = () => {
    dispatch(fetchEditBooks({ id: bookId, ...bookDetails }))
      .then(() => {
        console.log('Book updated successfully');
        alert('Book updated successfully');
      })
      .catch((error) => {
        console.error('Error updating book:', error.message);
      });
  };

  return (
    <div>
       
      <h2 className="text-3xl font-semibold mb-6">Edit Book</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={bookDetails.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Author:</label>
          <input
            type="text"
            name="author"
            value={bookDetails.author}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">ISBN:</label>
          <input
            type="text"
            name="isbn"
            value={bookDetails.isbn}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Total Copies:</label>
          <input
            type="number"
            name="totalCopies"
            value={bookDetails.totalCopies}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Available Copies:</label>
          <input
            type="number"
            name="availableCopies"
            value={bookDetails.availableCopies}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Image:</label>
          <input
            type="file"
            name="image"
            onChange={(e) => handleImageUpload(e)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="button"
          onClick={handleEditBook}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Edit Book
        </button>
      </form>
    </div>
  );
}

export default Editbook;
