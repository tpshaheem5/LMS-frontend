import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 
import { getCookie } from 'cookies-next';
const getCookies = getCookie('userToken')



export const fetchAllBooks = createAsyncThunk('books/fetchAll', async () => {
  const response = await axios.get('/admin/allbooks'); 
  return response.data;
});


export const fetchAddBooks = createAsyncThunk('addbooks/fetchAll',async (e)=>{
const response = await axios.post('/admin/addbooks',{
    title:e.title,
    author:e.author,
    image:e.image,
    isbn:e.isbn,
    totalCopies:e.totalCopies,
    availableCopies:e.availableCopies
});
    return response.data;
});

export const fetchEditBooks = createAsyncThunk('editbooks/fetchAll',async(e)=>{
    const response = await axios.put('/admin/editbook',{
        title:e.title,
        author:e.author,
        image:e.image,
        isbn:e.isbn,
        totalCopies:e.totalCopies,
        availableCopies:e.availableCopies
    })
    return response.data
})

export const userFetchAllBooks = createAsyncThunk('userbooks/fetchall',async()=>{
 
  const response = await axios.get('/user/allbooks',{
    headers: { Authorization: `Bearer ${getCookies}` }
    })
  return response.data
})

export const userFetchspecificBooks = createAsyncThunk('specificbooks/fetchall', async (bookId) => {
  const response = await axios.get(`/user/books/${bookId}`,{
    headers: { Authorization: `Bearer ${getCookies}` }
    });
  return response.data;
});

export const reserveBook = createAsyncThunk('books/reserveBook', async (bookId) => {
  const response = await axios.post(`/user/${bookId}/reserve`,{
    headers: { Authorization: `Bearer ${getCookies}` }
    });
  return response.data;
});





const booksSlice = createSlice({
  name: 'books',
  initialState:{},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      return action.payload;
    }).addCase(fetchAddBooks.fulfilled,(state,action)=>{
        return action.payload;
    }).addCase(fetchEditBooks.fulfilled,(state,action)=>{
        return action.payload;
    }).addCase(userFetchAllBooks.fulfilled,(state,action)=>{
      return action.payload;
    }).addCase(userFetchspecificBooks.fulfilled, (state, action) => {
      return action.payload;
    }).addCase(reserveBook.fulfilled, (state, action) => {
      state.reservedBook = action.payload;
    })
    
  },
});

export default booksSlice.reducer;
