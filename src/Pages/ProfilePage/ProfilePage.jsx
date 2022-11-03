import React from "react";
import { auth } from "../../firebase";

const ProfilePage = () => {

  const logOut = () => {
    auth.signOut();
    window.location = "/";
  }

  return (
    <div>
      Your profile
      <button onClick={logOut}>Sign out</button>
    </div>
  )
}

export default ProfilePage;