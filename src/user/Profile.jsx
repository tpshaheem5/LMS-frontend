import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {profile} from '../redux/bookSlice'


function Profile() {    
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.books)

    console.log(user);
    
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>User Profile</h2>
        {user && user.profile ? (
          <div>
            <p>User ID: {user.profile._id}</p>
            <p>Username: {user.profile.username}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
       
      </div>
    </div>
  );
}

export default Profile