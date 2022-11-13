import { React } from "react";
import { auth } from "../../firebase";
import "./profilepage.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  
  const logOut = () => {
    auth.signOut();
  }

  const [user] = useAuthState(auth);

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
                    <h6 className="f-w-600">{user.displayName}</h6>
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
                        <h6 className="text-muted f-w-400">{user.email}</h6>
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
                <Link to="/">
                  <button className = "btn-bottom" onClick={logOut}>Sign out</button>
                </Link>
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