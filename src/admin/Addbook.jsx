import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddBooks } from '../redux/bookSlice';
import upload from '../components/Cloud';

function Addbook() {
  const dispatch = useDispatch();
  
  const [bookDetails, setBookDetails] = useState({
    title: '',
    image: '',
    author: '',
    isbn: '',
    totalCopies: 2,
    availableCopies:'',
  });

  const handleUpload = async (file) => {
    
    try {
      const Url = await upload(file.target.files[0]);
  
      setBookDetails((prevDetails) => ({
        ...prevDetails,
        image: Url,
      }));
    } catch (error) {
      console.log("from upload", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  
  };

  const handleAddBook =  (e) => {
    dispatch(fetchAddBooks(bookDetails))
      .then(() => {
        console.log('Book added successfully');
        alert('Book added successfully');
      })
      .catch((error) => {
        console.error('Error adding book:', error.message);
      });
   
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6">Add Book</h2>
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
            <label className="block text-gray-700 text-sm font-semibold mb-2">Image URL:</label>
            <input
              type="file"
              name="image"
              onChange={(e) => handleUpload(e)}
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
              type="string"
              name="availableCopies"
              value={bookDetails.availableCopies}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          
          <button
            type="button"
            onClick={handleAddBook}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addbook;
