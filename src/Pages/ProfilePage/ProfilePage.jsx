import { React, useState, useEffect } from "react";
import { auth, db} from "../../firebase";
import "./profilepage.css";
import { useAuthState} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

const ProfilePage = () => {

  let navigate = useNavigate();
  
  const logOut = () => {
    auth.signOut();
    navigate("/")
  }

  const handleChangeProfile = () => {
    navigate("./change")
  }

  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    const getUserData = async () => {
      
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      setUserData({...docSnap.data()});
    };
    getUserData()
  },[user.uid]); 
  
  

  return (
    <div className="page-content page-container" id="page-content"> 
    {user &&
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile" />
                    </div>
                    <h6 className="f-w-600">{userData.displayName}</h6>
                    <p>Sustainability Hero</p>
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{userData.email}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">{userData.phone}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Tech Karma</p>
                        <h6 className="text-muted f-w-400">{userData.karma}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className = "btn-bottom" onClick={handleChangeProfile}>Change Data</button>
                  <button className = "btn-bottom" onClick={logOut}>Sign out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      }
    </div>
  )
}
export default ProfilePage;