// UserProfilePage.js
import React from 'react';
import CheckoutDetails from './CheckoutDetails';

import { useAuth } from '../auth/context/auth';

function UserProfilePage() {
  const { auth } = useAuth();
  console.log(auth); 

  // Assuming `auth` contains user data including userId
  const userId = auth ? auth.userId : null;

  return (
    <div>
      <h1>User Profile</h1>
      {userId && <CheckoutDetails userId={userId} />}
    </div>
  );
}

export default UserProfilePage;
