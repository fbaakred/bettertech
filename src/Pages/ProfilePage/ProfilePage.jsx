import { React, useEffect, useState } from "react";
import { db , auth } from "../../firebase";
import { onAuthStateChanged  } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import "./profilepage.css";

const ProfilePage = () => {
  
  const [profileData, setProfileData] = useState("");
  
  const logOut = () => {
    auth.signOut();
    window.location = "/";
  }

  useEffect(() => {
    const getUserData = async (uid) => {
      const docRef = await doc(db, "users", uid);
      const profileDataDoc = await getDoc(docRef);
      setProfileData(profileDataDoc.data());
    };
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        getUserData(uid);
        console.log("Authenticated User")
      } else {
        console.log("Not Authenticated")
      }
    });
  }, []);

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                    </div>
                    <h6 className="f-w-600">{profileData.displayName}</h6>
                    <p>Tech Guy</p>
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{profileData.email}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">98979989898</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Karma Account Points</p>
                        <h6 className="text-muted f-w-400">98979989898</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <button className = "btn-bottom" onClick={logOut}>Change Profile Data</button>
                <button className = "btn-bottom" onClick={logOut}>Sign out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage;