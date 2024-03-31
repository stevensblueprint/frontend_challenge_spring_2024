import React from 'react';
import memberImage from './assets/member.png';

//Shows the blueprint member photo
function MemberImage() {
  return (
    //HTML for page
    <div className='profile-info'>
        <img src={memberImage} className="memberImg" alt="Members sitting" />
    </div>
  );
}

export default MemberImage;
