import React from 'react';
import profileImage from './assets/profile.png';

//Shows the profile picture image
function ProfileImage() {
  //HTML for page
  return (
    <div className='profile-info'>
     <img src={profileImage} className="profile-img" alt="User Profile" />
    </div>
  );
}

export default ProfileImage;
