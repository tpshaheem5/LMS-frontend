import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userFetchAllBooks } from '../redux/bookSlice';
import "../css/userallbooks.css";
import { Link } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

function Allbooks() {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);  
   
    

    useEffect(() => {
        dispatch(userFetchAllBooks());
    }, [dispatch]);

   
    return (
        <div>
            <h2>All Books</h2>
            <div className="card-container">
                {books?.map((book) => (
                    <Link to={`/specificbook/${book._id}`} key={book.id} className="book-link">
                        <div className="book-card">
                            <img src={book.image} alt={book.title} className="card-image" />
                            <div className="card-content">
                                <h3>{book.title}</h3>
                                <p>Author: {book.author}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Allbooks;
